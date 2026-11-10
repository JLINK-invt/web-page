import { MercadoPagoPreferenceData } from './types';

const MP_API =
  process.env.MERCADOPAGO_SANDBOX === 'true'
    ? 'https://api.mercadopago.com'
    : 'https://api.mercadopago.com';

export async function createMercadoPagoPreference(
  projectName: string,
  amount: number,
  currency: string,
  backUrls: { success: string; failure: string; pending: string },
  metadata: Record<string, string>
): Promise<MercadoPagoPreferenceData> {
  const accessToken = process.env.MERCADOPAGO_ACCESS_TOKEN || '';

  const response = await fetch(`${MP_API}/checkout/preferences`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${accessToken}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      items: [
        {
          title: projectName,
          description: `Licencia para ${projectName}`,
          quantity: 1,
          unit_price: amount / 100,
          currency_id: currency,
        },
      ],
      back_urls: backUrls,
      auto_return: 'approved',
      external_reference: metadata.projectId,
      metadata,
      statement_descriptor: 'Cosmos Compass',
    }),
  });

  const data = await response.json();

  return {
    preferenceId: data.id,
    initPoint: data.init_point,
    sandboxInitPoint: data.sandbox_init_point,
  };
}

export async function verifyMercadoPagoWebhook(
  signature: string,
  dataId: string,
  topic: string
): Promise<any> {
  const accessToken = process.env.MERCADOPAGO_ACCESS_TOKEN || '';

  if (topic === 'payment') {
    const response = await fetch(`${MP_API}/v1/payments/${dataId}`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    return response.json();
  }

  return null;
}
