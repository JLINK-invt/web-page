import type { Dictionary } from '@/content/dictionaries';
import type { Locale } from '@/lib/i18n';
import { href } from '@/lib/routes';
import { ButtonLink } from '@/components/ui/Button';
import { Container } from '@/components/ui/Container';

function renderTitle(title: string, accent: string) {
  const index = title.toLowerCase().indexOf(accent.toLowerCase());
  if (index === -1) return title;

  return (
    <>
      {title.slice(0, index)}
      <span className="text-cosmos">{title.slice(index, index + accent.length)}</span>
      {title.slice(index + accent.length)}
    </>
  );
}

export function Hero({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  return (
    <section className="relative overflow-hidden bg-[radial-gradient(ellipse_at_70%_15%,rgba(79,184,232,0.18),rgba(79,184,232,0)_65%),radial-gradient(ellipse_at_20%_85%,rgba(224,184,90,0.12),rgba(224,184,90,0)_55%)]">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(58%_46%_at_78%_16%,rgba(79,184,232,0.22),rgba(79,184,232,0)_72%)]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-28 -left-16 h-64 w-64 rounded-full bg-[radial-gradient(circle_at_34%_30%,rgba(255,255,255,0.85),rgba(183,230,248,0.35)_46%,rgba(79,184,232,0)_72%)]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-52 left-24 h-20 w-20 rounded-full bg-[radial-gradient(circle_at_32%_28%,rgba(255,255,255,0.9),rgba(224,184,90,0.22)_44%,rgba(224,184,90,0)_70%)]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-[38%] bottom-8 h-28 w-28 rounded-full bg-[radial-gradient(circle_at_32%_28%,rgba(255,255,255,0.75),rgba(183,230,248,0.28)_48%,rgba(79,184,232,0)_74%)]"
      />
      <Container className="relative grid items-center gap-14 py-12 sm:py-16 lg:grid-cols-12 lg:gap-8 lg:py-24">
        <div className="lg:col-span-6">
          <p className="text-muted flex items-center gap-2.5 text-[11px] font-semibold tracking-[0.22em] uppercase">
            <span aria-hidden="true" className="bg-brass h-1.5 w-1.5 rounded-full" />
            {dict.home.hero.eyebrow}
          </p>

          <h1 className="font-display text-ink mt-5 max-w-2xl text-[clamp(2.6rem,5.6vw,4.4rem)] leading-[0.98] font-semibold tracking-[-0.03em] text-balance">
            {renderTitle(dict.home.hero.title, dict.home.hero.titleAccent)}
          </h1>

          <p className="text-muted mt-6 max-w-xl text-lg leading-relaxed">
            {dict.home.hero.subtitle}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <ButtonLink href={href(locale, 'projects')}>{dict.home.hero.primaryCta}</ButtonLink>
            <ButtonLink href={href(locale, 'contact')} variant="secondary">
              {dict.home.hero.secondaryCta}
            </ButtonLink>
          </div>

          <p className="text-muted mt-7 flex items-center gap-2 text-[12px]">
            <span
              aria-hidden="true"
              className="border-brass/40 inline-flex h-5 w-5 items-center justify-center rounded-full border bg-white/60"
            >
              <svg viewBox="0 0 12 12" className="h-2.5 w-2.5">
                <path
                  d="m2.5 6.2 2.5 2.5 4.5-5.4"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
            {dict.home.hero.note}
          </p>
        </div>

        <div className="lg:col-span-6">
          <div className="mx-auto aspect-square max-w-[28rem] sm:max-w-[36rem] lg:max-w-none">
            <div className="from-cosmos/5 to-gold/5 flex h-full w-full items-center justify-center rounded-2xl border border-white/50 bg-gradient-to-br via-transparent shadow-[0_40px_80px_-44px_rgba(5,26,51,0.4),inset_0_1px_0_rgba(255,255,255,0.5)]">
              <div className="p-8 text-center">
                <p className="text-muted mb-4 text-[13px] font-medium tracking-[0.1em] uppercase">
                  {dict.home.hero.aboutLabel}
                </p>
                <ul className="mx-auto max-w-xs space-y-3 text-left">
                  <li className="text-ink/80 flex items-center gap-3">
                    <span className="bg-cosmos/10 text-cosmos flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-sm font-semibold">
                      01
                    </span>
                    <span className="font-semibold">{dict.home.hero.aboutItem1}</span>
                  </li>
                  <li className="text-ink/80 flex items-center gap-3">
                    <span className="bg-cosmos/10 text-cosmos flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-sm font-semibold">
                      02
                    </span>
                    <span className="font-semibold">{dict.home.hero.aboutItem2}</span>
                  </li>
                  <li className="text-ink/80 flex items-center gap-3">
                    <span className="bg-cosmos/10 text-cosmos flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-sm font-semibold">
                      03
                    </span>
                    <span className="font-semibold">{dict.home.hero.aboutItem3}</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
