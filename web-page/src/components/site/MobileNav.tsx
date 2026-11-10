'use client';

import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/cn';
import type { Locale } from '@/lib/i18n';
import { buttonStyles } from '@/components/ui/Button';
import { SectorScene } from '@/components/aero/SectorScene';
import { LocaleSwitcher } from './LocaleSwitcher';
import type { MenuArea } from './SolutionsMenu';

export interface NavItem {
  label: string;
  href: string;
}

export function MobileNav({
  locale,
  nav,
  areas,
  solutionsLabel,
  menuNote,
  cta,
  ctaHref,
  label,
  closeLabel,
  navLabel,
  languageLabel,
}: {
  locale: Locale;
  nav: NavItem[];
  areas: MenuArea[];
  solutionsLabel: string;
  menuNote: string;
  cta: string;
  ctaHref: string;
  label: string;
  closeLabel: string;
  navLabel: string;
  languageLabel: string;
}) {
  const [open, setOpen] = useState(false);
  const [solutionsOpen, setSolutionsOpen] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const firstLinkRef = useRef<HTMLAnchorElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const media = window.matchMedia('(min-width: 1024px)');
    const onChange = () => {
      if (media.matches) setOpen(false);
    };

    media.addEventListener('change', onChange);
    return () => media.removeEventListener('change', onChange);
  }, []);

  useEffect(() => {
    if (!open) return;

    const previousOverflow = document.body.style.overflow;
    const trigger = buttonRef.current;
    document.body.style.overflow = 'hidden';
    firstLinkRef.current?.focus();

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setOpen(false);
        return;
      }

      if (event.key !== 'Tab') return;

      const items = Array.from(
        panelRef.current?.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'
        ) ?? []
      );
      if (items.length === 0) return;

      const first = items[0];
      const last = items[items.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    window.addEventListener('keydown', onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', onKeyDown);
      trigger?.focus();
    };
  }, [open]);

  return (
    <div className="lg:hidden">
      <button
        ref={buttonRef}
        type="button"
        onClick={() => setOpen((value) => !value)}
        aria-expanded={open}
        aria-controls="mobile-nav"
        aria-label={open ? closeLabel : label}
        className="border-line relative flex h-10 w-10 items-center justify-center rounded-full border"
      >
        <span aria-hidden="true" className="relative block h-4 w-5">
          <span
            className={cn(
              'bg-ink absolute top-0 left-0 h-px w-5 transition-transform',
              open && 'translate-y-[7.5px] rotate-45'
            )}
          />
          <span
            className={cn(
              'bg-ink absolute top-1/2 left-0 h-px w-5 -translate-y-1/2 transition-opacity',
              open && 'opacity-0'
            )}
          />
          <span
            className={cn(
              'bg-ink absolute bottom-0 left-0 h-px w-5 transition-transform',
              open && '-translate-y-[7.5px] -rotate-45'
            )}
          />
        </span>
      </button>

      {open ? (
        <div
          id="mobile-nav"
          ref={panelRef}
          className="fixed inset-x-0 top-16 z-40 max-h-[calc(100dvh-4rem)] overflow-y-auto border-b border-white bg-[#f2f9ff] px-5 pt-6 pb-8 shadow-[0_24px_60px_-40px_rgba(5,26,51,0.7)] sm:top-20 sm:max-h-[calc(100dvh-5rem)]"
        >
          <nav aria-label={navLabel} className="flex flex-col">
            {nav.map((item, index) => (
              <div key={item.href} className="contents">
                <Link
                  href={item.href}
                  ref={index === 0 ? firstLinkRef : undefined}
                  onClick={() => setOpen(false)}
                  className="border-line/60 font-display text-ink border-b py-4 text-2xl font-semibold tracking-tight"
                >
                  {item.label}
                </Link>

                {index === 0 ? (
                  <div className="border-line/60 border-b">
                    <button
                      type="button"
                      aria-expanded={solutionsOpen}
                      onClick={() => setSolutionsOpen((value) => !value)}
                      className="font-display text-ink flex w-full items-center justify-between py-4 text-left text-2xl font-semibold tracking-tight"
                    >
                      {solutionsLabel}
                      <svg
                        aria-hidden="true"
                        viewBox="0 0 16 16"
                        className={cn(
                          'text-brass h-4 w-4 transition-transform',
                          solutionsOpen && 'rotate-180'
                        )}
                      >
                        <path
                          d="m3 6 5 5 5-5"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </button>

                    {solutionsOpen ? (
                      <div className="pb-4">
                        {areas.map((area, areaIndex) => (
                          <div
                            key={area.id}
                            className={cn('py-4', areaIndex > 0 && 'border-line/50 border-t')}
                          >
                            <Link
                              href={area.href}
                              onClick={() => setOpen(false)}
                              className="group flex items-start gap-3"
                            >
                              <div className="border-line/60 h-14 w-[4.5rem] shrink-0 overflow-hidden rounded-lg border">
                                <SectorScene
                                  name={area.scene}
                                  className="h-full w-full rounded-none"
                                />
                              </div>
                              <div className="min-w-0">
                                <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
                                  <span className="font-display text-ink group-hover:text-cosmos text-[15px] leading-tight font-semibold tracking-tight">
                                    {area.label}
                                  </span>
                                  <span
                                    className={cn(
                                      'inline-flex shrink-0 items-center gap-1 rounded-full border px-1.5 py-0.5 text-[8px] font-semibold tracking-[0.12em] uppercase',
                                      area.status === 'active'
                                        ? 'border-cosmos/25 bg-cosmos/5 text-cosmos'
                                        : 'border-line text-muted bg-white/60'
                                    )}
                                  >
                                    <span
                                      aria-hidden="true"
                                      className={cn(
                                        'h-1 w-1 rounded-full',
                                        area.status === 'active'
                                          ? 'bg-cosmos'
                                          : 'border-brass/60 border'
                                      )}
                                    />
                                    {area.statusLabel}
                                  </span>
                                </div>
                                <p className="text-muted mt-1 text-[11px] leading-snug">
                                  {area.description}
                                </p>
                              </div>
                            </Link>

                            <ul className="mt-1 grid grid-cols-2 gap-x-3">
                              {area.solutions.map((solution) => (
                                <li key={solution.id}>
                                  <Link
                                    href={solution.href}
                                    onClick={() => setOpen(false)}
                                    className="border-line/40 text-ink/85 hover:text-cosmos flex items-center gap-1.5 border-t py-2 text-[12px] leading-tight font-medium"
                                  >
                                    <span
                                      aria-hidden="true"
                                      className={cn(
                                        'h-1 w-1 shrink-0 rounded-full',
                                        solution.status === 'live'
                                          ? 'bg-cosmos'
                                          : 'border-brass/60 border'
                                      )}
                                    />
                                    {solution.label}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                        <p className="border-line/60 text-muted border-t pt-4 text-[11px] leading-snug">
                          {menuNote}
                        </p>
                      </div>
                    ) : null}
                  </div>
                ) : null}
              </div>
            ))}
          </nav>
          <div className="mt-6 flex items-center justify-between gap-4">
            <LocaleSwitcher
              locale={locale}
              label={languageLabel}
              onNavigate={() => setOpen(false)}
            />
            <Link
              href={ctaHref}
              onClick={() => setOpen(false)}
              className={buttonStyles('primary', 'px-5 py-2.5')}
            >
              {cta}
            </Link>
          </div>
        </div>
      ) : null}
    </div>
  );
}
