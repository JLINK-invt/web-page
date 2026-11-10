import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getDictionary, isLocale } from '@/lib/i18n';
import { buildMetadata } from '@/lib/seo';
import { PrivacyPage } from '@/components/pages/PrivacyPage';

type PageProps = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale) || locale !== 'es') return {};

  const dict = getDictionary(locale);

  return buildMetadata({
    locale,
    route: 'privacy',
    title: dict.meta.privacy.title,
    description: dict.meta.privacy.description,
  });
}

export default async function Page({ params }: PageProps) {
  const { locale } = await params;
  if (!isLocale(locale) || locale !== 'es') notFound();

  return <PrivacyPage locale={locale} />;
}
