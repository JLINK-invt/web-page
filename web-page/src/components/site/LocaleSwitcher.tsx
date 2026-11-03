'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/cn';
import { locales, type Locale } from '@/lib/i18n';
import { switchLocalePath } from '@/lib/routes';

export function LocaleSwitcher({
  locale,
  label,
  className,
  onNavigate,
}: {
  locale: Locale;
  label: string;
  className?: string;
  onNavigate?: () => void;
}) {
  const pathname = usePathname();

  return (
    <div
      role="group"
      aria-label={label}
      className={cn('border-line inline-flex items-center rounded-full border p-0.5', className)}
    >
      {locales.map((item) => (
        <Link
          key={item}
          href={switchLocalePath(pathname, item)}
          hrefLang={item}
          onClick={onNavigate}
          aria-current={item === locale ? 'true' : undefined}
          className={cn(
            'rounded-full px-2.5 py-1 text-[11px] font-semibold tracking-[0.18em] uppercase transition-colors',
            item === locale ? 'bg-ink text-paper' : 'text-muted hover:text-ink'
          )}
        >
          {item}
        </Link>
      ))}
    </div>
  );
}
