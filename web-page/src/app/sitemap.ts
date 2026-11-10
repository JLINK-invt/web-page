import type { MetadataRoute } from 'next';
import { projects } from '@/content/projects';
import { site } from '@/content/site';
import { locales } from '@/lib/i18n';
import { href, type RouteKey } from '@/lib/routes';

const routes: {
  key: RouteKey;
  changeFrequency: 'monthly' | 'weekly';
  priority: number;
}[] = [
  { key: 'home', changeFrequency: 'weekly', priority: 1 },
  { key: 'contact', changeFrequency: 'monthly', priority: 0.7 },
  { key: 'privacy', changeFrequency: 'monthly', priority: 0.3 },
];

function absolute(path: string): string {
  return new URL(path, site.url).toString();
}

function alternates(route: RouteKey, slug?: string) {
  return {
    languages: Object.fromEntries(
      locales.map((locale) => [locale, absolute(href(locale, route, slug))])
    ),
  };
}

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  const entries: MetadataRoute.Sitemap = [];

  for (const locale of locales) {
    for (const route of routes) {
      entries.push({
        url: absolute(href(locale, route.key)),
        lastModified,
        changeFrequency: route.changeFrequency,
        priority: route.priority,
        alternates: alternates(route.key),
      });
    }

    for (const project of projects) {
      entries.push({
        url: absolute(href(locale, 'projects', project.slug)),
        lastModified,
        changeFrequency: 'monthly',
        priority: 0.8,
        alternates: alternates('projects', project.slug),
      });
    }
  }

  return entries;
}
