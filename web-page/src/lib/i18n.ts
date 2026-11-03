import { dictionaries, type Dictionary } from '@/content/dictionaries';

export const locales = ['es', 'en'] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = 'es';

export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale];
}

export function localize<T>(value: Record<Locale, T>, locale: Locale): T {
  return value[locale];
}
