const fallbackUrl = 'https://cosmoscompass.com';

function normalizeUrl(value: string): string {
  const trimmed = value.trim();
  if (!trimmed) return fallbackUrl;
  const withProtocol =
    trimmed.startsWith('http://') || trimmed.startsWith('https://')
      ? trimmed
      : `https://${trimmed}`;
  return withProtocol.replace(/\/+$/, '');
}

export const site = {
  name: 'Cosmos Compass',
  url: normalizeUrl(process.env.NEXT_PUBLIC_SITE_URL ?? fallbackUrl),
  email: process.env.NEXT_PUBLIC_CONTACT_EMAIL?.trim() || 'hola@cosmoscompass.com',
  formspreeId: process.env.NEXT_PUBLIC_FORMSPREE_FORM_ID?.trim() || '',
  established: '2026',
} as const;
