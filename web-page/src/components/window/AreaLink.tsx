'use client';

import Link from 'next/link';
import type { ReactNode } from 'react';
import type { Locale } from '@/lib/i18n';
import type { DomainId } from '@/types/content';
import { domainHref } from '@/lib/routes';
import { useWindow } from '@/components/site/WindowProvider';

/**
 * Enlace a un área. Las áreas no tienen ruta propia: viven como panel dentro
 * de la ventana de la home, así que el enlace lleva a `/{locale}#{area}` y
 * además abre el panel al instante, sin esperar al montaje de la home.
 */
export function AreaLink({
  locale,
  id,
  children,
  className,
}: {
  locale: Locale;
  id: DomainId;
  children: ReactNode;
  className?: string;
}) {
  const { setActive } = useWindow();

  return (
    <Link
      href={domainHref(locale, id)}
      onClick={() => setActive(id)}
      className={className}
      data-area-link={id}
    >
      {children}
    </Link>
  );
}
