'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { getDictionary, locales, type Locale } from '@/lib/i18n';
import { href, switchLocalePath } from '@/lib/routes';
import { cn } from '@/lib/cn';
import { navItems } from '@/components/window/navItems';
import { useWindow, type PanelId } from './WindowProvider';

function GlobeIcon() {
  return (
    <svg viewBox="0 0 16 16" aria-hidden="true" className="h-3.5 w-3.5">
      <circle cx="8" cy="8" r="6.4" fill="#5b9bd8" stroke="#2a5db0" strokeWidth="1" />
      <ellipse cx="8" cy="8" rx="2.8" ry="6.4" fill="none" stroke="#ffffff" strokeWidth="0.9" />
      <path d="M1.9 6.2h12.2M1.9 9.8h12.2" stroke="#ffffff" strokeWidth="0.9" />
    </svg>
  );
}

function routeFor(locale: Locale, panel: PanelId): string {
  if (panel === 'home') return href(locale, 'home');
  if (panel === 'projects') return href(locale, 'projects');
  if (panel === 'contact') return href(locale, 'contact');
  if (panel === 'method') return `${href(locale, 'home')}#method`;
  return href(locale, 'domain', panel);
}

export function Header({ locale }: { locale: Locale }) {
  const dict = getDictionary(locale);
  const pathname = usePathname();
  const isHome = pathname === href(locale, 'home');
  const { active, setActive } = useWindow();
  const items = navItems(dict);

  return (
    <header className="win-nav shrink-0">
      <div className="flex min-h-9 flex-wrap items-center gap-x-4 gap-y-1 px-3 py-1">
        <nav
          aria-label={dict.nav.menu}
          className="flex min-w-0 flex-1 flex-wrap items-center gap-x-4"
        >
          {items.map((item) =>
            isHome ? (
              <button
                key={item.id}
                type="button"
                onClick={() => setActive(item.id)}
                aria-current={active === item.id ? 'true' : undefined}
                className={cn('win-nav-link', active === item.id && 'is-active')}
              >
                {item.id === 'home' ? <GlobeIcon /> : null}
                {item.label}
              </button>
            ) : (
              <Link key={item.id} href={routeFor(locale, item.id)} className="win-nav-link">
                {item.id === 'home' ? <GlobeIcon /> : null}
                {item.label}
              </Link>
            )
          )}
        </nav>

        <div className="flex items-center gap-2">
          {locales.map((item) => (
            <Link
              key={item}
              href={switchLocalePath(pathname, item)}
              hrefLang={item}
              className={cn('win-nav-link', item === locale && 'is-active')}
            >
              {item.toUpperCase()}
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
}
