import Link from 'next/link';
import type { Dictionary } from '@/content/dictionaries';
import { solutionAreas, solutionHref } from '@/content/solutions';
import type { Locale } from '@/lib/i18n';
import { href } from '@/lib/routes';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { SectorScene } from '@/components/aero/SectorScene';
import { ArrowIcon } from '@/components/ui/ArrowIcon';
import { cn } from '@/lib/cn';

export function DomainGrid({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  return (
    <section id="soluciones" className="py-16 sm:py-20">
      <Container>
        <SectionHeading title={dict.home.domains.title} subtitle={dict.home.domains.subtitle} />

        <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {solutionAreas.map((area) => (
            <article
              key={area.id}
              className="group flex flex-col overflow-hidden rounded-2xl border border-white bg-[rgba(247,252,255,0.82)] shadow-[inset_0_1px_0_rgba(255,255,255,1),inset_0_-1px_0_rgba(10,35,66,0.06),0_28px_50px_-44px_rgba(5,26,51,0.55)] transition-transform duration-300 hover:-translate-y-1"
            >
              <Link
                href={solutionHref(locale, area.href)}
                className="border-line/60 relative block aspect-[16/10] overflow-hidden border-b"
              >
                <SectorScene
                  name={area.scene}
                  className="h-full w-full rounded-none transition-transform duration-500 group-hover:scale-[1.02]"
                />
                <span className="text-muted absolute top-3 left-3 flex items-center gap-1.5 rounded-full border border-white bg-[rgba(247,252,255,0.94)] px-2 py-1 text-[9px] font-semibold tracking-[0.14em] uppercase shadow-[0_6px_14px_-10px_rgba(5,26,51,0.5)]">
                  <span
                    aria-hidden="true"
                    className={cn(
                      'h-1.5 w-1.5 rounded-full',
                      area.status === 'active' ? 'bg-cosmos' : 'border-brass/60 border'
                    )}
                  />
                  {area.status === 'active' ? dict.common.active : dict.common.exploration}
                </span>
              </Link>

              <div className="flex flex-1 flex-col p-5">
                <Link
                  href={solutionHref(locale, area.href)}
                  className="font-display text-ink hover:text-cosmos text-xl font-semibold tracking-tight"
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
                        className="group/sol border-line/50 flex items-center gap-2 border-t py-2"
                      >
                        <span
                          aria-hidden="true"
                          className={cn(
                            'h-1 w-1 shrink-0 rounded-full',
                            solution.status === 'live' ? 'bg-cosmos' : 'border-brass/60 border'
                          )}
                        />
                        <span className="text-ink group-hover/sol:text-cosmos text-[12.5px] leading-tight font-semibold">
                          {solution.name[locale]}
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>

                <Link
                  href={solutionHref(locale, area.href)}
                  className="text-cosmos hover:text-ink mt-auto inline-flex items-center gap-2 pt-4 text-[11px] font-semibold tracking-[0.16em] uppercase"
                >
                  {dict.home.domains.viewArea}
                  <ArrowIcon className="transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-8 flex flex-col gap-5 rounded-2xl border border-white/90 bg-[rgba(232,244,252,0.62)] p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.9)] sm:flex-row sm:items-center sm:justify-between">
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
            className="text-ink hover:border-gold/60 shrink-0 self-start rounded-full border border-white bg-[linear-gradient(180deg,#ffffff,#dcecf7)] px-4 py-2.5 text-[12px] font-semibold shadow-[inset_0_1px_0_rgba(255,255,255,1),0_8px_16px_-12px_rgba(5,26,51,0.65)] transition-colors hover:bg-white sm:self-auto"
          >
            {dict.home.domains.customCta} <span aria-hidden="true">→</span>
          </Link>
        </div>
      </Container>
    </section>
  );
}
