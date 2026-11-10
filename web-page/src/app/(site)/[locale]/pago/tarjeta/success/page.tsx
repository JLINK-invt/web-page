import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getProject } from '@/content/projects';
import { getDictionary } from '@/lib/i18n';
import { verifyStripeSession } from '@/lib/payments/stripe';
import { updatePaymentStatus, getPaymentByExternalId } from '@/lib/payments/db';
import { sendPaymentConfirmationEmail } from '@/lib/payments/email';

interface PageProps {
  params: Promise<{ locale: string }>;
  searchParams: Promise<{ session_id?: string }>;
}

export async function generateMetadata({ params, searchParams }: PageProps): Promise<Metadata> {
  const { locale } = await params;
  const dict = getDictionary(locale as 'es' | 'en');
  return {
    title: dict.project.payment?.success || 'Pago confirmado',
  };
}

export default async function StripeSuccessPage({ params, searchParams }: PageProps) {
  const { locale } = await params;
  const { session_id } = await searchParams;
  const dict = getDictionary(locale as 'es' | 'en');

  if (!session_id) {
    notFound();
  }

  const session = await verifyStripeSession(session_id);

  if (!session || session.payment_status !== 'paid') {
    notFound();
  }

  const paymentId = session.metadata?.paymentId;
  const projectId = session.metadata?.projectId;
  const paymentLocale = (session.metadata?.locale as 'es' | 'en') || 'es';

  const payment = paymentId ? getPaymentByExternalId(session_id) : undefined;

  if (payment) {
    updatePaymentStatus(payment.id, 'completed', {
      externalId: session_id,
      metadata: { ...payment.metadata, stripeSession: session.id },
    });

    if (payment.payerEmail) {
      await sendPaymentConfirmationEmail(payment, paymentLocale);
    }
  }

  const project = projectId ? getProject(projectId) : null;

  return (
    <div className="flex min-h-[60vh] items-center justify-center p-4">
      <div className="win-panel w-full max-w-md text-center">
        <div className="mb-4 text-6xl text-[#4c9a4c]" aria-hidden="true">
          ✓
        </div>
        <h1 className="font-display mb-2 text-[28px] font-bold text-white">
          {dict.project.payment?.success || '¡Pago confirmado!'}
        </h1>
        <p className="mb-6 text-[#eaf2ff]">
          {project
            ? `${project.name} - ${dict.project.payment?.confirmEmailSent || 'Hemos enviado la confirmación a tu correo.'}`
            : dict.project.payment?.confirmEmailSent ||
              'Hemos enviado la confirmación a tu correo.'}
        </p>
        <div className="mb-6 rounded-lg bg-white/95 p-4 text-left">
          <p className="mb-2 text-[13px] text-[#3d3d3d]">
            <strong>{dict.project.payment?.amount || 'Total'}: </strong>
            {(session.amount_total ? session.amount_total / 100 : 0).toLocaleString(paymentLocale, {
              style: 'currency',
              currency: (session.currency || 'MXN').toUpperCase(),
            })}
          </p>
          <p className="text-[13px] text-[#3d3d3d]">
            <strong>Referencia: </strong>
            {payment?.id || session_id}
          </p>
        </div>
        <a href={`/${locale}/proyectos/${projectId}`} className="win-btn w-full">
          Ver mi producto
        </a>
      </div>
    </div>
  );
}
