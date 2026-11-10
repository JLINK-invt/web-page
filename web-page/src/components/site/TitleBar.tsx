'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { getDictionary, locales, type Locale } from '@/lib/i18n';
import { switchLocalePath } from '@/lib/routes';
import { site } from '@/content/site';
import { cn } from '@/lib/cn';

/**
 * Franja de título de cristal: el rótulo de la aplicación y el cambio de
 * idioma, como la barra de título del Explorador de Windows 7. Sin botones
 * de ventana falsos: sólo lo que realmente funciona.
 */
export function TitleBar({ locale }: { locale: Locale }) {
  const dict = getDictionary(locale);
  const pathname = usePathname();

  return (
    <div className="win-titlebar-app">
      <span className="win-logo-mark" aria-hidden="true">
        <svg viewBox="0 0 16 16" className="h-3 w-3">
          <circle cx="8" cy="8" r="6.2" fill="none" stroke="#9fd2ff" strokeWidth="1.2" />
          <path d="M8 1.8v12.4M1.8 8h12.4" stroke="#9fd2ff" strokeWidth="0.9" />
          <circle cx="8" cy="8" r="2" fill="#e8f4ff" />
        </svg>
      </span>

      <span className="win-titlebar-app-title">{site.name}</span>
      <span className="hidden text-[11px] text-white/75 sm:inline">{dict.window.screenTitle}</span>

      <nav className="win-locale-switch ml-auto" aria-label={dict.nav.language}>
        {locales.map((item) => (
          <Link
            key={item}
            href={switchLocalePath(pathname, item)}
            hrefLang={item}
            className={cn(item === locale && 'is-active')}
          >
            {item.toUpperCase()}
          </Link>
        ))}
      </nav>
    </div>
  );
}
