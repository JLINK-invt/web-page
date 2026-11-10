import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { getDictionary, isLocale } from '@/lib/i18n';
import { buildMetadata } from '@/lib/seo';
import { DesignsGallery } from '@/components/pages/DesignsGallery';

type PageProps = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale) || locale !== 'en') return {};

  const dict = getDictionary(locale);

  return buildMetadata({
    locale,
    route: 'designs',
    title: dict.designs.title,
    description: dict.designs.subtitle,
  });
}

export default async function Page({ params }: PageProps) {
  const { locale } = await params;
  if (!isLocale(locale) || locale !== 'en') notFound();

  return <DesignsGallery locale={locale} dict={getDictionary(locale)} />;
}
