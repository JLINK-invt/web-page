'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { getDictionary, type Locale } from '@/lib/i18n';
import { designsHref, domainHref, href } from '@/lib/routes';
import { site } from '@/content/site';
import { cn } from '@/lib/cn';
import { useWindow, type PanelId } from './WindowProvider';

function routeFor(locale: Locale, panel: PanelId): string {
  if (panel === 'home') return href(locale, 'home');
  if (panel === 'contact') return href(locale, 'contact');
  if (panel === 'method') return `${href(locale, 'home')}#method`;
  return domainHref(locale, panel);
}

export function Footer({ locale }: { locale: Locale }) {
  const dict = getDictionary(locale);
  const pathname = usePathname();
  const isHome = pathname === href(locale, 'home');
  const { active, setActive } = useWindow();

  const links: { id: PanelId; label: string }[] = [
    { id: 'home', label: dict.nav.home },
    { id: 'method', label: dict.nav.company },
    { id: 'contact', label: dict.nav.contact },
  ];

  return (
    <footer className="win-footer shrink-0">
      <div className="flex flex-col gap-1 px-3 py-1.5 text-[11px] text-[#45505d] sm:flex-row sm:items-center sm:gap-x-2">
        <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
          <span>
            © {new Date().getFullYear()} {site.name}
          </span>
          <span aria-hidden="true">|</span>
          {links.map((item) =>
            isHome ? (
              <button
                key={item.id}
                type="button"
                onClick={() => setActive(item.id)}
                className={cn('win-footer-link', active === item.id && 'text-[#1f4b96]')}
              >
                {item.label}
              </button>
            ) : (
              <Link key={item.id} href={routeFor(locale, item.id)} className="win-footer-link">
                {item.label}
              </Link>
            )
          )}
          <span aria-hidden="true" className="hidden sm:inline">
            |
          </span>
          <Link href={designsHref(locale)} className="win-footer-link hidden sm:inline">
            {dict.footer.designs}
          </Link>
        </div>

        <div className="flex flex-wrap items-center gap-3 sm:ml-auto">
          <a href={`mailto:${site.email}`} className="win-footer-link">
            {site.email}
          </a>
          <Link href={href(locale, 'privacy')} className="win-footer-link">
            {dict.footer.privacy}
          </Link>
        </div>
      </div>
    </footer>
  );
}
