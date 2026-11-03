import type { Metadata, Viewport } from 'next';
import { notFound } from 'next/navigation';
import type { ReactNode } from 'react';
import { site } from '@/content/site';
import { defaultLocale, getDictionary, isLocale, locales } from '@/lib/i18n';
import { frutiger, spaceGrotesk, jetbrainsMono } from '@/lib/fonts';
import { Footer } from '@/components/site/Footer';
import { Header } from '@/components/site/Header';
import { SkipLink } from '@/components/site/SkipLink';
import '../../globals.css';

export const dynamicParams = false;

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

const fallback = getDictionary(defaultLocale);

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} — ${fallback.meta.tagline}`,
    template: `%s · ${site.name}`,
  },
  description: fallback.meta.home.description,
  applicationName: site.name,
  authors: [{ name: site.name }],
  creator: site.name,
  publisher: site.name,
  formatDetection: {
    telephone: false,
    address: false,
    email: false,
  },
  openGraph: {
    type: 'website',
    siteName: site.name,
    title: `${site.name} — ${fallback.meta.tagline}`,
    description: fallback.meta.home.description,
  },
  twitter: {
    card: 'summary_large_image',
  },
};

export const viewport: Viewport = {
  themeColor: '#E8F4FC',
  colorScheme: 'light',
};

export default async function LocaleLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  const dict = getDictionary(locale);

  return (
    <html
      lang={locale}
      className={`${frutiger.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable}`}
      suppressHydrationWarning
    >
      <body className="font-sans antialiased">
        <SkipLink label={dict.a11y.skipToContent} />
        <Header locale={locale} />
        <main id="main">{children}</main>
        <Footer locale={locale} />
      </body>
    </html>
  );
}
