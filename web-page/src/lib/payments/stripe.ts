import Stripe from 'stripe';
import { StripeSessionData } from './types';

let stripeInstance: Stripe | null = null;

function getStripe(): Stripe {
  if (!stripeInstance) {
    const secretKey = process.env.STRIPE_SECRET_KEY;
    if (!secretKey) {
      throw new Error('STRIPE_SECRET_KEY is not configured');
    }
    stripeInstance = new Stripe(secretKey, {
      apiVersion: '2026-10-28.endive',
      typescript: true,
    });
  }
  return stripeInstance;
}

export async function createStripeCheckoutSession(
  projectName: string,
  amount: number,
  currency: string,
  successUrl: string,
  cancelUrl: string,
  metadata: Record<string, string>
): Promise<StripeSessionData> {
  const stripe = getStripe();
  const session = await stripe.checkout.sessions.create({
    payment_method_types: ['card'],
    line_items: [
      {
        price_data: {
          currency: currency.toLowerCase(),
          product_data: {
            name: projectName,
            description: `Licencia para ${projectName}`,
          },
          unit_amount: amount,
        },
        quantity: 1,
      },
    ],
    mode: 'payment',
    success_url: successUrl,
    cancel_url: cancelUrl,
    metadata,
    payment_intent_data: {
      metadata,
    },
  } as Stripe.Checkout.SessionCreateParams);

  return {
    sessionId: session.id,
    url: session.url || '',
  };
}

export async function verifyStripeSession(
  sessionId: string
): Promise<Stripe.Checkout.Session | null> {
  try {
    const stripe = getStripe();
    const session = await stripe.checkout.sessions.retrieve(sessionId, {
      expand: ['payment_intent'],
    });
    return session;
  } catch {
    return null;
  }
}

export function constructStripeWebhookEvent(
  payload: string | Buffer,
  signature: string
): Stripe.Event {
  const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET || '';
  const stripe = getStripe();
  return stripe.webhooks.constructEvent(payload, signature, webhookSecret);
}
