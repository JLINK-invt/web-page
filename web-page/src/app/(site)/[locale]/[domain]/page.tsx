import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { getDomainBySlug } from '@/content/domains';
import { domainSlugs } from '@/lib/routes';
import { defaultLocale, getDictionary, isLocale } from '@/lib/i18n';
import { buildMetadata } from '@/lib/seo';
import { DomainPage } from '@/components/pages/DomainPage';

export const dynamicParams = false;

export function generateStaticParams({ params }: { params: { locale: string; domain: string } }) {
  const locale = isLocale(params.locale) ? params.locale : defaultLocale;
  return Object.values(domainSlugs).map((slugs) => ({
    domain: slugs[locale],
  }));
}

type PageProps = {
  params: Promise<{ locale: string; domain: string }>;
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale, domain: slug } = await params;
  if (!isLocale(locale)) return {};

  const domain = getDomainBySlug(slug);
  if (!domain) return {};

  return buildMetadata({
    locale,
    route: 'domain',
    title: domain.name[locale],
    description: domain.description[locale],
    slug: domain.id,
  });
}

export default async function Page({ params }: PageProps) {
  const { locale, domain: slug } = await params;
  if (!isLocale(locale)) notFound();

  const domain = getDomainBySlug(slug);
  if (!domain) notFound();

  const dict = getDictionary(locale);

  return <DomainPage locale={locale} domain={domain} dict={dict} />;
}
