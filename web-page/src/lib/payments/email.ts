import { PaymentRecord } from './types';

const RESEND_API_KEY = process.env.RESEND_API_KEY;
const EMAIL_FROM = process.env.EMAIL_FROM || 'noreply@cosmoscompass.com';

interface EmailTemplate {
  subject: string;
  html: string;
  text: string;
}

function generatePaymentConfirmationEmail(
  payment: PaymentRecord,
  locale: 'es' | 'en'
): EmailTemplate {
  const isEs = locale === 'es';
  const formattedAmount = (payment.amount / 100).toLocaleString(locale, {
    style: 'currency',
    currency: payment.currency,
  });

  const projectNames: Record<string, { es: string; en: string }> = {
    'smart-house': { es: 'Smart House', en: 'Smart House' },
    'fitness-gym': { es: 'Fitness Center', en: 'Fitness Center' },
    'health-psychology': { es: 'Health Consultory', en: 'Health Consultory' },
  };

  const projectName = projectNames[payment.projectId]?.[locale] || payment.projectId;

  if (isEs) {
    return {
      subject: `✅ Pago confirmado - ${projectName}`,
      html: `
        <div style="font-family: system-ui, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <h1 style="color: #2a5db0;">¡Pago confirmado!</h1>
          <p>Hola,</p>
          <p>Tu pago para <strong>${projectName}</strong> ha sido procesado correctamente.</p>
          <div style="background: #f5f5f5; padding: 15px; border-radius: 8px; margin: 20px 0;">
            <p style="margin: 5px 0;"><strong>Monto:</strong> ${formattedAmount}</p>
            <p style="margin: 5px 0;"><strong>Método:</strong> ${getMethodLabel(payment.method, 'es')}</p>
            <p style="margin: 5px 0;"><strong>Referencia:</strong> ${payment.id}</p>
            <p style="margin: 5px 0;"><strong>Fecha:</strong> ${new Date(payment.createdAt).toLocaleString('es-MX')}</p>
          </div>
          <p>Tu licencia ya está activa. Puedes acceder a tu producto desde el panel de control.</p>
          <p>Gracias por confiar en Cosmos Compass.</p>
          <hr style="margin: 20px 0; border: none; border-top: 1px solid #eee;">
          <p style="color: #666; font-size: 12px;">Si tienes dudas, contáctanos en soporte@cosmoscompass.com</p>
        </div>
      `,
      text: `
        ¡Pago confirmado!
        
        Tu pago para ${projectName} ha sido procesado correctamente.
        
        Monto: ${formattedAmount}
        Método: ${getMethodLabel(payment.method, 'es')}
        Referencia: ${payment.id}
        Fecha: ${new Date(payment.createdAt).toLocaleString('es-MX')}
        
        Tu licencia ya está activa.
        
        Gracias por confiar en Cosmos Compass.
      `,
    };
  } else {
    return {
      subject: `✅ Payment confirmed - ${projectName}`,
      html: `
        <div style="font-family: system-ui, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <h1 style="color: #2a5db0;">Payment confirmed!</h1>
          <p>Hi,</p>
          <p>Your payment for <strong>${projectName}</strong> has been processed successfully.</p>
          <div style="background: #f5f5f5; padding: 15px; border-radius: 8px; margin: 20px 0;">
            <p style="margin: 5px 0;"><strong>Amount:</strong> ${formattedAmount}</p>
            <p style="margin: 5px 0;"><strong>Method:</strong> ${getMethodLabel(payment.method, 'en')}</p>
            <p style="margin: 5px 0;"><strong>Reference:</strong> ${payment.id}</p>
            <p style="margin: 5px 0;"><strong>Date:</strong> ${new Date(payment.createdAt).toLocaleString('en-US')}</p>
          </div>
          <p>Your license is now active. You can access your product from the control panel.</p>
          <p>Thank you for trusting Cosmos Compass.</p>
          <hr style="margin: 20px 0; border: none; border-top: 1px solid #eee;">
          <p style="color: #666; font-size: 12px;">If you have questions, contact us at support@cosmoscompass.com</p>
        </div>
      `,
      text: `
        Payment confirmed!
        
        Your payment for ${projectName} has been processed successfully.
        
        Amount: ${formattedAmount}
        Method: ${getMethodLabel(payment.method, 'en')}
        Reference: ${payment.id}
        Date: ${new Date(payment.createdAt).toLocaleString('en-US')}
        
        Your license is now active.
        
        Thank you for trusting Cosmos Compass.
      `,
    };
  }
}

function getMethodLabel(method: string, locale: 'es' | 'en'): string {
  const labels: Record<string, { es: string; en: string }> = {
    card: { es: 'Tarjeta (Stripe)', en: 'Card (Stripe)' },
    transfer: { es: 'Transferencia bancaria', en: 'Bank Transfer' },
    paypal: { es: 'PayPal', en: 'PayPal' },
    mercadopago: { es: 'MercadoPago', en: 'MercadoPago' },
  };
  return labels[method]?.[locale] || method;
}

export async function sendPaymentConfirmationEmail(
  payment: PaymentRecord,
  locale: 'es' | 'en' = 'es'
): Promise<boolean> {
  if (!RESEND_API_KEY || !payment.payerEmail) {
    console.log('Email not sent: missing RESEND_API_KEY or payer email');
    return false;
  }

  const email = generatePaymentConfirmationEmail(payment, locale);

  try {
    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${RESEND_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: EMAIL_FROM,
        to: payment.payerEmail,
        subject: email.subject,
        html: email.html,
        text: email.text,
      }),
    });

    if (!response.ok) {
      console.error('Failed to send email:', await response.text());
      return false;
    }

    return true;
  } catch (error) {
    console.error('Error sending email:', error);
    return false;
  }
}

export async function sendTransferProofReceivedEmail(
  payment: PaymentRecord,
  locale: 'es' | 'en' = 'es'
): Promise<boolean> {
  if (!RESEND_API_KEY || !payment.payerEmail) return false;

  const isEs = locale === 'es';
  const projectNames: Record<string, { es: string; en: string }> = {
    'smart-house': { es: 'Smart House', en: 'Smart House' },
    'fitness-gym': { es: 'Fitness Center', en: 'Fitness Center' },
    'health-psychology': { es: 'Health Consultory', en: 'Health Consultory' },
  };
  const projectName = projectNames[payment.projectId]?.[locale] || payment.projectId;

  const subject = isEs
    ? `📄 Comprobante recibido - ${projectName}`
    : `📄 Proof received - ${projectName}`;

  const html = isEs
    ? `
      <div style="font-family: system-ui, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
        <h1 style="color: #2a5db0;">Comprobante recibido</h1>
        <p>Hemos recibido tu comprobante de transferencia para <strong>${projectName}</strong>.</p>
        <p>Nuestro equipo lo verificará en las próximas 24 horas. Te notificaremos cuando el pago sea confirmado.</p>
        <p>Referencia: ${payment.id}</p>
        <hr style="margin: 20px 0; border: none; border-top: 1px solid #eee;">
        <p style="color: #666; font-size: 12px;">Cosmos Compass</p>
      </div>
    `
    : `
      <div style="font-family: system-ui, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
        <h1 style="color: #2a5db0;">Proof received</h1>
        <p>We received your transfer proof for <strong>${projectName}</strong>.</p>
        <p>Our team will verify it within 24 hours. You'll be notified when the payment is confirmed.</p>
        <p>Reference: ${payment.id}</p>
        <hr style="margin: 20px 0; border: none; border-top: 1px solid #eee;">
        <p style="color: #666; font-size: 12px;">Cosmos Compass</p>
      </div>
    `;

  try {
    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${RESEND_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: EMAIL_FROM,
        to: payment.payerEmail,
        subject,
        html,
      }),
    });

    return response.ok;
  } catch {
    return false;
  }
}
