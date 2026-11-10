import { PayPalOrderData } from './types';

const PAYPAL_API =
  process.env.PAYPAL_ENV === 'live'
    ? 'https://api-m.paypal.com'
    : 'https://api-m.sandbox.paypal.com';

async function getAccessToken(): Promise<string> {
  const clientId = process.env.PAYPAL_CLIENT_ID || '';
  const clientSecret = process.env.PAYPAL_CLIENT_SECRET || '';
  const auth = Buffer.from(`${clientId}:${clientSecret}`).toString('base64');

  const response = await fetch(`${PAYPAL_API}/v1/oauth2/token`, {
    method: 'POST',
    headers: {
      Authorization: `Basic ${auth}`,
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: 'grant_type=client_credentials',
  });

  const data = await response.json();
  return data.access_token;
}

export async function createPayPalOrder(
  projectName: string,
  amount: number,
  currency: string,
  returnUrl: string,
  cancelUrl: string,
  metadata: Record<string, string>
): Promise<PayPalOrderData> {
  const accessToken = await getAccessToken();

  const response = await fetch(`${PAYPAL_API}/v2/checkout/orders`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${accessToken}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      intent: 'CAPTURE',
      purchase_units: [
        {
          reference_id: metadata.projectId,
          amount: {
            currency_code: currency,
            value: (amount / 100).toFixed(2),
          },
          description: projectName,
          custom_id: JSON.stringify(metadata),
        },
      ],
      application_context: {
        return_url: returnUrl,
        cancel_url: cancelUrl,
        brand_name: 'Cosmos Compass',
        landing_page: 'BILLING',
        user_action: 'PAY_NOW',
      },
    }),
  });

  const data = await response.json();
  const approveUrl = data.links?.find((l: any) => l.rel === 'approve')?.href || '';

  return {
    orderId: data.id,
    approveUrl,
  };
}

export async function capturePayPalOrder(orderId: string): Promise<any> {
  const accessToken = await getAccessToken();

  const response = await fetch(`${PAYPAL_API}/v2/checkout/orders/${orderId}/capture`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${accessToken}`,
      'Content-Type': 'application/json',
    },
  });

  return response.json();
}

export async function verifyPayPalWebhook(
  transmissionId: string,
  timestamp: string,
  webhookId: string,
  eventBody: string,
  certUrl: string,
  transmissionSig: string,
  authAlgo: string
): Promise<boolean> {
  const accessToken = await getAccessToken();

  const response = await fetch(`${PAYPAL_API}/v1/notifications/verify-webhook-signature`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${accessToken}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      auth_algo: authAlgo,
      cert_url: certUrl,
      transmission_id: transmissionId,
      transmission_sig: transmissionSig,
      transmission_time: timestamp,
      webhook_id: webhookId,
      webhook_event: JSON.parse(eventBody),
    }),
  });

  const data = await response.json();
  return data.verification_status === 'SUCCESS';
}
