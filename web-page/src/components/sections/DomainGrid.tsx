'use client';

import Link from 'next/link';
import type { Dictionary } from '@/content/dictionaries';
import { solutionAreas, solutionHref } from '@/content/solutions';
import type { Locale } from '@/lib/i18n';
import { href } from '@/lib/routes';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { ArrowIcon } from '@/components/ui/ArrowIcon';
import { cn } from '@/lib/cn';
import { ProductWindow } from '@/components/aero/ProductWindow';

const AREA_BOX_SHOTS: Record<string, string> = {
  domotics: 'smart-house',
  agriculture: 'agro-monitor',
  industrial: 'industry-vision',
  medical: 'medical-records',
};

const AREA_ICONS: Record<string, string> = {
  domotics: '🏠',
  agriculture: '🌱',
  industrial: '🏭',
  medical: '🏥',
};

export function DomainGrid({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  return (
    <section
      id="soluciones"
      className="relative bg-gradient-to-b from-white via-[#f8fbff] to-white py-16 sm:py-20"
    >
      {/* Subtle background atmosphere */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_50%_0%,rgba(100,180,230,0.12),rgba(100,180,230,0)_50%),radial-gradient(ellipse_40%_30%_at_100%_100%,rgba(224,184,90,0.08),rgba(224,184,90,0)_50%)]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-0 right-0 left-0 h-1 bg-gradient-to-r from-transparent via-white/60 to-transparent"
      />

      <Container>
        <SectionHeading title={dict.home.domains.title} subtitle={dict.home.domains.subtitle} />

        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {solutionAreas.map((area) => (
            <article
              key={area.id}
              className="group relative flex flex-col overflow-hidden rounded-2xl border border-white/70 bg-gradient-to-br from-white/80 via-[#f8fbff]/60 to-white/50 shadow-[inset_0_1px_0_rgba(255,255,255,1),inset_0_-1px_0_rgba(100,180,230,0.06),0_20px_40px_-30px_rgba(100,180,230,0.25)] transition-all duration-300 hover:-translate-y-1 hover:border-[#64b4e6]/30 hover:shadow-[inset_0_1px_0_rgba(255,255,255,1),inset_0_-1px_0_rgba(100,180,230,0.08),0_28px_50px_-36px_rgba(100,180,230,0.35)]"
            >
              {/* Top highlight bar */}
              <div className="absolute top-0 right-0 left-0 h-1 bg-gradient-to-r from-transparent via-white/80 to-transparent" />

              <Link
                href={solutionHref(locale, area.href)}
                className="relative block aspect-[16/10] overflow-hidden"
              >
                <ProductWindow
                  variant={
                    area.scene === 'house' ? 'orbits' : area.scene === 'gym' ? 'waves' : 'grid'
                  }
                  showBoxShot
                  boxShotName={AREA_BOX_SHOTS[area.id] as any}
                  className="h-full w-full"
                />
                {/* Gel highlight overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-b from-white/10 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              </Link>

              <div className="relative z-10 flex flex-1 flex-col p-5">
                {/* Icon + Status */}
                <div className="mb-3 flex items-center justify-between">
                  <span className="text-3xl leading-none" aria-hidden="true">
                    {AREA_ICONS[area.id]}
                  </span>
                  <span
                    className={cn(
                      'inline-flex shrink-0 items-center gap-1.5 rounded-full border border-white/80 bg-gradient-to-b from-white via-[#f5fbff] to-white px-2.5 py-1 text-[9px] font-semibold tracking-[0.14em] uppercase shadow-[inset_0_1px_0_rgba(255,255,255,0.9),0_2px_4px_-2px_rgba(100,180,230,0.15)]',
                      area.status === 'active'
                        ? 'border-[#64b4e6]/40 text-[#1769aa]'
                        : 'text-gold-badge border-[#e0b85a]/40'
                    )}
                  >
                    <span
                      aria-hidden="true"
                      className={cn(
                        'h-1.5 w-1.5 rounded-full',
                        area.status === 'active'
                          ? 'bg-gradient-to-br from-[#22c55e] to-[#16a34a] shadow-[0_0_6px_rgba(34,197,94,0.5)]'
                          : 'border border-white/30 bg-gradient-to-br from-[#e0b85a] to-[#c9963a] shadow-[0_0_6px_rgba(224,184,90,0.4)]'
                      )}
                    />
                    {area.status === 'active' ? dict.common.active : dict.common.exploration}
                  </span>
                </div>

                <Link
                  href={solutionHref(locale, area.href)}
                  className="font-display text-ink hover:text-cosmos text-xl font-semibold tracking-tight transition-colors"
                >
                  {area.name[locale]}
                </Link>
                <p className="text-muted mt-2 text-sm leading-relaxed">
                  {area.description[locale]}
                </p>

                <p className="text-muted mt-4 text-[9px] font-semibold tracking-[0.18em] uppercase">
                  {dict.nav.solutionsList}
                </p>
                <ul className="mt-1 flex flex-col">
                  {area.solutions.map((solution) => (
                    <li key={solution.id}>
                      <Link
                        href={solutionHref(locale, solution.href)}
                        className="group/sol text-ink/85 hover:text-cosmos flex items-center gap-2 rounded-xl border border-white/50 bg-gradient-to-b from-white/50 via-[#f5fbff]/30 to-white/30 px-3 py-2.5 transition-all duration-200 hover:border-[#64b4e6]/30 hover:bg-gradient-to-b hover:from-white/70 hover:via-[#f5fbff]/50 hover:to-white/50 hover:shadow-[0_4px_12px_-4px_rgba(100,180,230,0.25)]"
                      >
                        <span
                          aria-hidden="true"
                          className={cn(
                            'h-1.5 w-1.5 shrink-0 rounded-full',
                            solution.status === 'live'
                              ? 'bg-gradient-to-br from-[#22c55e] to-[#16a34a] shadow-[0_0_8px_rgba(34,197,94,0.5)]'
                              : 'border border-white/30 bg-gradient-to-br from-[#e0b85a] to-[#c9963a] shadow-[0_0_6px_rgba(224,184,90,0.4)]'
                          )}
                        />
                        <span className="text-sm leading-tight font-semibold">
                          {solution.name[locale]}
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>

                <Link
                  href={solutionHref(locale, area.href)}
                  className="text-cosmos hover:text-ink mt-auto inline-flex items-center gap-2 pt-4 text-[11px] font-semibold tracking-[0.16em] uppercase transition-colors"
                >
                  {dict.home.domains.viewArea}
                  <ArrowIcon className="transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* Custom CTA - Everaldo style gel button */}
        <div className="mt-8 flex flex-col gap-5 rounded-2xl border border-white/70 bg-gradient-to-br from-white/60 via-[#f5fbff]/40 to-white/40 p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.9),0_8px_24px_-16px_rgba(100,180,230,0.2)] sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="font-display text-ink text-lg font-semibold tracking-tight">
              {dict.home.domains.customTitle}
            </p>
            <p className="text-muted mt-1 max-w-2xl text-[13px] leading-relaxed">
              {dict.home.domains.customText}
            </p>
          </div>
          <Link
            href={href(locale, 'contact')}
            className={cn(
              'relative shrink-0 self-start overflow-hidden rounded-xl',
              'bg-gradient-to-b from-[#e0b85a] via-[#d4a84a] to-[#c9963a]',
              'px-6 py-3 text-[12px] font-semibold tracking-[0.1em] text-white uppercase',
              'shadow-[0_4px_16px_-4px_rgba(224,184,90,0.5),0_1px_0_rgba(255,255,255,0.3)_inset,0_-1px_0_rgba(100,180,230,0.1)_inset]',
              'transition-all duration-200',
              'hover:shadow-[0_8px_24px_-6px_rgba(224,184,90,0.6),0_1px_0_rgba(255,255,255,0.4)_inset,0_-1px_0_rgba(100,180,230,0.15)_inset]',
              'active:shadow-[0_2px_8px_-4px_rgba(224,184,90,0.4),0_1px_2px_rgba(100,180,230,0.2)_inset]',
              'active:scale-[0.98]',
              'before:absolute before:inset-0 before:rounded-xl before:bg-gradient-to-b before:from-white/25 before:via-transparent before:to-transparent before:content-[""]',
              'after:absolute after:bottom-0 after:left-1/2 after:h-px after:w-3/4 after:-translate-x-1/2 after:rounded-full after:bg-gradient-to-r after:from-transparent after:via-white/40 after:to-transparent after:content-[""]',
              'sm:self-auto'
            )}
          >
            {dict.home.domains.customCta} <span aria-hidden="true">→</span>
          </Link>
        </div>
      </Container>
    </section>
  );
}
