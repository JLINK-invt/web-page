import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getDictionary, isLocale } from '@/lib/i18n';
import { buildMetadata } from '@/lib/seo';
import { ContactPage } from '@/components/pages/ContactPage';

type PageProps = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale) || locale !== 'es') return {};

  const dict = getDictionary(locale);

  return buildMetadata({
    locale,
    route: 'contact',
    title: dict.meta.contact.title,
    description: dict.meta.contact.description,
  });
}

export default async function Page({ params }: PageProps) {
  const { locale } = await params;
  if (!isLocale(locale) || locale !== 'es') notFound();

  return <ContactPage locale={locale} />;
}
