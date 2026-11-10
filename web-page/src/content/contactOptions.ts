import { localize, type Locale } from '@/lib/i18n';
import { domains } from './domains';
import { projects } from './projects';

export function getContactProjectOptions(locale: Locale): string[] {
  return [
    ...projects.map((project) => project.name),
    ...domains.map((domain) => localize(domain.name, locale)),
  ];
}
