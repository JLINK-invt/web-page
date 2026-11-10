import type { Metadata } from 'next';
import { site } from '@/content/site';
import { defaultLocale, locales, type Locale } from './i18n';
import { href, type RouteKey } from './routes';

interface BuildMetadataInput {
  locale: Locale;
  route: RouteKey;
  title: string;
  description: string;
  slug?: string;
}

function absolute(path: string): string {
  return new URL(path, site.url).toString();
}

export function buildMetadata({
  locale,
  route,
  title,
  description,
  slug,
}: BuildMetadataInput): Metadata {
  const canonical = absolute(href(locale, route, slug));
  const languages = Object.fromEntries(
    locales.map((item) => [item, absolute(href(item, route, slug))])
  );
  const pageTitle = route === 'home' ? `${title} · ${site.name}` : title;

  return {
    title: pageTitle,
    description,
    alternates: {
      canonical,
      languages: {
        ...languages,
        'x-default': absolute(href(defaultLocale, route, slug)),
      },
    },
    openGraph: {
      type: 'website',
      locale: locale === 'es' ? 'es_ES' : 'en_US',
      url: canonical,
      siteName: site.name,
      title,
      description,
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
    },
  };
}
