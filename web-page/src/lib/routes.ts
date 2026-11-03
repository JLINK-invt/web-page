import type { Locale } from './i18n';
import type { DomainId } from '@/types/content';

export type RouteKey = 'home' | 'projects' | 'contact' | 'privacy' | 'domain' | 'designs';

export const routeSegments: Record<Exclude<RouteKey, 'domain'>, Record<Locale, string>> = {
  home: { es: '', en: '' },
  projects: { es: 'proyectos', en: 'projects' },
  contact: { es: 'contacto', en: 'contact' },
  privacy: { es: 'privacidad', en: 'privacy' },
  designs: { es: 'disenos', en: 'designs' },
};

export const domainSlugs: Record<DomainId, Record<Locale, string>> = {
  domotics: { es: 'domotica', en: 'domotics' },
  agriculture: { es: 'agricultura', en: 'agriculture' },
  industrial: { es: 'industria', en: 'industrial' },
  medical: { es: 'salud', en: 'medical' },
};

export const designVariantSlugs: Record<string, Record<Locale, string>> = {
  planetario: { es: 'planetario', en: 'planetario' },
  skeuomorphic: { es: 'esquemorfo', en: 'skeuomorphic' },
};

export function domainHref(locale: Locale, id: DomainId): string {
  return `/${locale}/${domainSlugs[id][locale]}`;
}

export function designsHref(locale: Locale, variant?: string): string {
  const base = href(locale, 'designs');
  if (!variant) return base;
  const slug = designVariantSlugs[variant]?.[locale] ?? variant;
  return `${base}/${slug}`;
}

export function href(locale: Locale, route: RouteKey, slug?: string): string {
  if (route === 'domain') {
    return domainHref(locale, slug as DomainId);
  }

  const segment = routeSegments[route][locale];
  const base = `/${locale}${segment ? `/${segment}` : ''}`;
  return slug ? `${base}/${slug}` : base;
}

export function switchLocalePath(pathname: string, target: Locale): string {
  const parts = pathname.split('/').filter(Boolean);
  const rest = parts.slice(1);
  if (rest.length === 0) return `/${target}`;

  const first = rest[0];
  const slug = rest[1];
  const localizedRoutes: Exclude<RouteKey, 'domain'>[] = [
    'projects',
    'contact',
    'privacy',
    'designs',
  ];

  for (const route of localizedRoutes) {
    if (first === routeSegments[route].es || first === routeSegments[route].en) {
      if (route === 'designs' && slug) {
        const entry = Object.entries(designVariantSlugs).find(([, slugs]) =>
          (Object.keys(slugs) as Locale[]).some((locale) => slugs[locale] === slug)
        );
        return designsHref(target, entry?.[0]);
      }

      const child = route === 'projects' ? slug : undefined;
      return href(target, route, child);
    }
  }

  const domainEntry = Object.entries(domainSlugs).find(([, slugs]) =>
    (['es', 'en'] as Locale[]).some((locale) => slugs[locale] === first)
  );

  if (domainEntry) {
    return domainHref(target, domainEntry[0] as DomainId);
  }

  return `/${target}`;
}
