'use client';

import Link from 'next/link';
import { useEffect, useId, useRef, useState } from 'react';
import { cn } from '@/lib/cn';
import { SectorScene, type SectorSceneName } from '@/components/aero/SectorScene';

export interface MenuAreaSolution {
  id: string;
  label: string;
  description: string;
  href: string;
  status: 'live' | 'exploration';
}

export interface MenuArea {
  id: string;
  label: string;
  description: string;
  href: string;
  scene: SectorSceneName;
  status: 'active' | 'upcoming';
  statusLabel: string;
  solutions: MenuAreaSolution[];
}

export function SolutionsMenu({
  label,
  solutionsLabel,
  areas,
  menuNote,
  projectsHref,
  projectsLabel,
  contactHref,
  contactLabel,
}: {
  label: string;
  solutionsLabel: string;
  areas: MenuArea[];
  menuNote: string;
  projectsHref: string;
  projectsLabel: string;
  contactHref: string;
  contactLabel: string;
}) {
  const [open, setOpen] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const firstLinkRef = useRef<HTMLAnchorElement>(null);
  const closeTimer = useRef<number | null>(null);
  const panelId = useId();

  useEffect(() => {
    if (!open) return;

    const onPointerDown = (event: PointerEvent) => {
      if (!wrapperRef.current?.contains(event.target as Node)) {
        setOpen(false);
      }
    };

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setOpen(false);
        buttonRef.current?.focus();
      }
    };

    document.addEventListener('pointerdown', onPointerDown);
    document.addEventListener('keydown', onKeyDown);
    return () => {
      document.removeEventListener('pointerdown', onPointerDown);
      document.removeEventListener('keydown', onKeyDown);
    };
  }, [open]);

  useEffect(() => {
    return () => {
      if (closeTimer.current) window.clearTimeout(closeTimer.current);
    };
  }, []);

  const scheduleClose = () => {
    if (closeTimer.current) window.clearTimeout(closeTimer.current);
    closeTimer.current = window.setTimeout(() => setOpen(false), 140);
  };

  const cancelClose = () => {
    if (closeTimer.current) window.clearTimeout(closeTimer.current);
  };

  return (
    <div
      ref={wrapperRef}
      className="relative"
      onMouseEnter={() => {
        cancelClose();
        setOpen(true);
      }}
      onMouseLeave={scheduleClose}
    >
      <button
        ref={buttonRef}
        type="button"
        aria-expanded={open}
        aria-controls={panelId}
        onClick={() => setOpen((value) => !value)}
        onKeyDown={(event) => {
          if (event.key === 'ArrowDown') {
            event.preventDefault();
            setOpen(true);
            requestAnimationFrame(() => firstLinkRef.current?.focus());
          }
        }}
        className={cn(
          'group relative flex items-center gap-1.5 rounded-md px-1 py-1 text-[13px] font-medium transition-colors',
          open ? 'text-cosmos' : 'text-ink/80 hover:text-cosmos'
        )}
      >
        {label}
        <svg
          aria-hidden="true"
          viewBox="0 0 12 12"
          className={cn('h-2.5 w-2.5 transition-transform duration-200', open && 'rotate-180')}
        >
          <path
            d="m2.5 4.5 3.5 3.5 3.5-3.5"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <span
          aria-hidden="true"
          className={cn(
            'bg-gold absolute inset-x-1 -bottom-0.5 h-px origin-left transition-transform duration-200',
            open ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
          )}
        />
      </button>

      <div
        id={panelId}
        hidden={!open}
        className="fixed top-16 left-1/2 z-50 w-[min(64rem,calc(100vw-2rem))] -translate-x-1/2 sm:top-20"
      >
        <div className="overflow-hidden rounded-2xl border border-white bg-[#f2f9ff] shadow-[0_32px_72px_-48px_rgba(5,26,51,0.7),inset_0_1px_0_rgba(255,255,255,1)]">
          {/* Top chrome highlight bar */}
          <div className="h-1 w-full bg-[linear-gradient(90deg,#9fbdd4,#ffffff_28%,#e0b85a_52%,#ffffff_72%,#9fbdd4)]" />
          <div className="divide-line/60 grid grid-cols-4 divide-x">
            {areas.map((area, areaIndex) => (
              <div key={area.id} className="flex flex-col p-4 sm:p-5">
                <Link
                  ref={areaIndex === 0 ? firstLinkRef : undefined}
                  href={area.href}
                  onClick={() => setOpen(false)}
                  className="group flex flex-col"
                >
                  <div className="border-line/60 relative aspect-[16/9] overflow-hidden rounded-lg border">
                    <SectorScene
                      name={area.scene}
                      className="h-full w-full rounded-none transition-transform duration-500 group-hover:scale-[1.015]"
                    />
                  </div>
                  <div className="mt-3 flex items-center justify-between gap-2">
                    <span className="font-display text-ink group-hover:text-cosmos text-[15px] leading-tight font-semibold tracking-tight">
                      {area.label}
                    </span>
                    <span
                      className={cn(
                        'inline-flex shrink-0 items-center gap-1 rounded-full border px-1.5 py-0.5 text-[8px] font-semibold tracking-[0.12em] uppercase',
                        area.status === 'active'
                          ? 'border-cosmos/30 bg-cosmos/5 text-cosmos'
                          : 'border-line text-muted bg-white/70'
                      )}
                    >
                      <span
                        aria-hidden="true"
                        className={cn(
                          'h-1 w-1 rounded-full',
                          area.status === 'active' ? 'bg-cosmos' : 'border-brass/60 border'
                        )}
                      />
                      {area.statusLabel}
                    </span>
                  </div>
                  <p className="text-muted mt-1.5 text-[11px] leading-snug">{area.description}</p>
                </Link>

                <p className="text-muted mt-4 text-[9px] font-semibold tracking-[0.18em] uppercase">
                  {solutionsLabel}
                </p>
                <ul className="mt-1 space-y-1">
                  {area.solutions.map((solution) => (
                    <li key={solution.id}>
                      <Link
                        href={solution.href}
                        onClick={() => setOpen(false)}
                        className="group border-line/50 flex items-start gap-2.5 border-t py-2.5 transition-colors first:border-t-0"
                      >
                        <span
                          aria-hidden="true"
                          className={cn(
                            'mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full',
                            solution.status === 'live' ? 'bg-cosmos' : 'border-brass/60 border'
                          )}
                        />
                        <span className="flex min-w-0 flex-col">
                          <span className="text-ink group-hover:text-cosmos text-[12px] leading-tight font-semibold">
                            {solution.label}
                          </span>
                          <span className="text-muted mt-0.5 line-clamp-2 text-[10.5px] leading-snug">
                            {solution.description}
                          </span>
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="border-line/60 flex items-center justify-between gap-6 border-t bg-[rgba(222,238,249,0.72)] px-5 py-3">
            <p className="text-muted max-w-[34rem] text-[11px] leading-snug">{menuNote}</p>
            <div className="flex shrink-0 items-center gap-4">
              <Link
                href={projectsHref}
                onClick={() => setOpen(false)}
                className="text-cosmos hover:text-ink text-[12px] font-semibold"
              >
                {projectsLabel} <span aria-hidden="true">→</span>
              </Link>
              <Link
                href={contactHref}
                onClick={() => setOpen(false)}
                className="text-space hover:border-gold/60 rounded-full border border-white bg-[linear-gradient(180deg,#ffffff,#dcecf7)] px-3.5 py-1.5 text-[11px] font-semibold shadow-[inset_0_1px_0_rgba(255,255,255,1),0_6px_14px_-10px_rgba(5,26,51,0.6)] transition-colors hover:bg-white"
              >
                {contactLabel}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
