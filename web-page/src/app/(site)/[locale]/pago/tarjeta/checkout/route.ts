import { NextRequest, NextResponse } from 'next/server';
import { getProject } from '@/content/projects';
import { createStripeCheckoutSession } from '@/lib/payments/stripe';
import { createPayment } from '@/lib/payments/db';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { projectId, locale = 'es' } = body;

    const project = getProject(projectId);
    if (!project) {
      return NextResponse.json({ error: 'Proyecto no encontrado' }, { status: 404 });
    }

    const amount = project.price || 0;
    const currency = project.currency || 'MXN';

    if (amount <= 0) {
      return NextResponse.json({ error: 'Precio no configurado' }, { status: 400 });
    }

    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';
    const successUrl = `${baseUrl}/${locale}/pago/tarjeta/success?session_id={CHECKOUT_SESSION_ID}`;
    const cancelUrl = `${baseUrl}/${locale}/pago/tarjeta/cancel`;

    const payment = createPayment({
      projectId,
      method: 'card',
      amount,
      currency,
      metadata: { locale },
    });

    const session = await createStripeCheckoutSession(
      project.name,
      amount,
      currency,
      successUrl,
      cancelUrl,
      {
        projectId,
        paymentId: payment.id,
        locale,
      }
    );

    return NextResponse.json({ sessionId: session.sessionId, url: session.url });
  } catch (error) {
    console.error('Stripe checkout error:', error);
    return NextResponse.json({ error: 'Error al crear sesión de pago' }, { status: 500 });
  }
}
