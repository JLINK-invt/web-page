import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getDictionary, isLocale } from '@/lib/i18n';
import { buildMetadata } from '@/lib/seo';
import { routeSegments } from '@/lib/routes';
import { ContactPage } from '@/components/pages/ContactPage';

type PageProps = {
  params: Promise<{ locale: string; contact: string }>;
};

export const dynamicParams = false;

export function generateStaticParams({ params }: { params: { locale: string } }) {
  const locale = params.locale;
  if (!isLocale(locale)) return [];
  return [{ contact: routeSegments.contact[locale] }];
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale, contact } = await params;
  if (!isLocale(locale)) return {};
  if (contact !== routeSegments.contact[locale]) return {};

  const dict = getDictionary(locale);

  return buildMetadata({
    locale,
    route: 'contact',
    title: dict.meta.contact.title,
    description: dict.meta.contact.description,
  });
}

export default async function Page({ params }: PageProps) {
  const { locale, contact } = await params;
  if (!isLocale(locale)) notFound();
  if (contact !== routeSegments.contact[locale]) notFound();

  return <ContactPage locale={locale} />;
}
