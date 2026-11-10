import { NextRequest, NextResponse } from 'next/server';
import { constructStripeWebhookEvent } from '@/lib/payments/stripe';
import { verifyPayPalWebhook } from '@/lib/payments/paypal';
import { verifyMercadoPagoWebhook } from '@/lib/payments/mercadopago';
import { updatePaymentByExternalId, getPaymentByExternalId } from '@/lib/payments/db';
import { sendPaymentConfirmationEmail } from '@/lib/payments/email';

export async function POST(request: NextRequest) {
  try {
    const body = await request.text();
    const signature = request.headers.get('stripe-signature');
    const paypalTransmissionId = request.headers.get('paypal-transmission-id');
    const paypalTransmissionSig = request.headers.get('paypal-transmission-sig');
    const paypalCertUrl = request.headers.get('paypal-cert-url');
    const paypalAuthAlgo = request.headers.get('paypal-auth-algo');
    const paypalWebhookId = process.env.PAYPAL_WEBHOOK_ID || '';
    const mpSignature = request.headers.get('x-signature');
    const mpDataId = request.headers.get('x-request-id');
    const mpTopic = request.headers.get('x-topic');

    if (signature) {
      const event = constructStripeWebhookEvent(body, signature);

      if (event.type === 'checkout.session.completed') {
        const session = event.data.object;
        const payment = getPaymentByExternalId(session.id);

        if (payment) {
          updatePaymentByExternalId(session.id, 'completed', {
            metadata: { ...payment.metadata, stripeEvent: event.type },
          });

          if (payment.payerEmail) {
            await sendPaymentConfirmationEmail(
              payment,
              (session.metadata?.locale as 'es' | 'en') || 'es'
            );
          }
        }
      } else if (event.type === 'checkout.session.expired') {
        const session = event.data.object;
        updatePaymentByExternalId(session.id, 'expired');
      }

      return NextResponse.json({ received: true });
    }

    if (paypalTransmissionId) {
      const isValid = await verifyPayPalWebhook(
        paypalTransmissionId,
        request.headers.get('paypal-transmission-time') || '',
        paypalWebhookId,
        body,
        paypalCertUrl || '',
        paypalTransmissionSig || '',
        paypalAuthAlgo || ''
      );

      if (!isValid) {
        return NextResponse.json({ error: 'Invalid signature' }, { status: 400 });
      }

      const event = JSON.parse(body);

      if (event.event_type === 'CHECKOUT.ORDER.APPROVED') {
        const orderId = event.resource.id;
        const payment = getPaymentByExternalId(orderId);

        if (payment) {
          updatePaymentByExternalId(orderId, 'completed');
          if (payment.payerEmail) {
            await sendPaymentConfirmationEmail(payment, 'es');
          }
        }
      } else if (event.event_type === 'PAYMENT.CAPTURE.COMPLETED') {
        const orderId = event.resource.supplementary_data?.related_ids?.order_id;
        if (orderId) {
          const payment = getPaymentByExternalId(orderId);
          if (payment) {
            updatePaymentByExternalId(orderId, 'completed');
            if (payment.payerEmail) {
              await sendPaymentConfirmationEmail(payment, 'es');
            }
          }
        }
      }

      return NextResponse.json({ received: true });
    }

    if (mpSignature && mpDataId) {
      const paymentData = await verifyMercadoPagoWebhook(mpSignature, mpDataId, mpTopic || '');

      if (paymentData && paymentData.external_reference) {
        const payment = getPaymentByExternalId(paymentData.external_reference);

        if (payment) {
          let status: 'pending' | 'completed' | 'failed' = 'pending';

          if (paymentData.status === 'approved') {
            status = 'completed';
          } else if (['rejected', 'cancelled'].includes(paymentData.status)) {
            status = 'failed';
          }

          updatePaymentByExternalId(paymentData.external_reference, status, {
            metadata: { ...payment.metadata, mpPayment: paymentData },
          });

          if (status === 'completed' && payment.payerEmail) {
            await sendPaymentConfirmationEmail(payment, 'es');
          }
        }
      }

      return NextResponse.json({ received: true });
    }

    return NextResponse.json({ error: 'No valid webhook signature' }, { status: 400 });
  } catch (error) {
    console.error('Webhook error:', error);
    return NextResponse.json({ error: 'Webhook processing failed' }, { status: 500 });
  }
}
