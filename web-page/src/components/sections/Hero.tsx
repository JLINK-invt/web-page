import type { Dictionary } from '@/content/dictionaries';
import type { Locale } from '@/lib/i18n';
import { domains } from '@/content/domains';
import { href, homeProductsHref } from '@/lib/routes';
import { ButtonLink } from '@/components/ui/Button';
import { Container } from '@/components/ui/Container';
import { cn } from '@/lib/cn';
import { CompassDial } from '@/components/aero/CompassDial';

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
  const bearings = domains.map((domain) => ({
    id: domain.id,
    label: domain.name[locale],
    href: href(locale, 'domain', domain.id),
    live: domain.status === 'active',
    status: domain.status === 'active' ? dict.common.active : dict.common.exploration,
  }));

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#eef7fd] via-white to-[#eef7fd]">
      {/* Everaldo sky atmosphere - single clean radial glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_-5%,rgba(100,180,230,0.18),rgba(100,180,230,0)_55%)]"
      />
      {/* Top chrome highlight bar */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-0 right-0 left-0 h-1 bg-gradient-to-r from-transparent via-white/70 to-transparent"
      />

      <Container className="relative grid gap-10 py-12 sm:py-16 lg:grid-cols-12 lg:gap-12 lg:py-24">
        {/* Left column - Content: Clear product positioning */}
        <div className="flex flex-col justify-center lg:col-span-7">
          <h1 className="font-display text-ink mt-4 max-w-2xl text-[clamp(2.6rem,5.5vw,4.5rem)] leading-[0.94] font-semibold tracking-[-0.02em] text-balance">
            {renderTitle(dict.home.hero.title, dict.home.hero.titleAccent)}
          </h1>

          <p className="text-muted mt-6 max-w-xl text-lg leading-relaxed font-normal">
            {dict.home.hero.subtitle}
          </p>

          {/* Everaldo gel buttons - cleaner, more crystalline */}
          <div className="mt-10 flex flex-wrap items-center gap-3">
            <ButtonLink
              href={homeProductsHref(locale)}
              className={cn(
                'relative overflow-hidden rounded-xl',
                'bg-gradient-to-b from-[#4fa8e0] via-[#3d90d0] to-[#2b78c0]',
                'px-8 py-4 text-[14px] font-semibold tracking-[0.03em] text-white',
                'shadow-[0_6px_20px_-6px_rgba(61,144,208,0.55),0_1px_0_rgba(255,255,255,0.35)_inset,0_-1px_0_rgba(10,35,66,0.12)_inset]',
                'transition-all duration-200',
                'hover:shadow-[0_10px_28px_-8px_rgba(61,144,208,0.65),0_1px_0_rgba(255,255,255,0.45)_inset,0_-1px_0_rgba(10,35,66,0.18)_inset]',
                'active:shadow-[0_3px_10px_-5px_rgba(61,144,208,0.45),0_1px_2px_rgba(10,35,66,0.25)_inset]',
                'active:scale-[0.98]',
                'before:absolute before:inset-0 before:rounded-xl before:bg-gradient-to-b before:from-white/30 before:via-transparent before:to-transparent before:content-[""]',
                'after:absolute after:bottom-0 after:left-1/2 after:h-px after:w-4/5 after:-translate-x-1/2 after:rounded-full after:bg-gradient-to-r after:from-transparent after:via-white/50 after:to-transparent after:content-[""]'
              )}
            >
              {dict.home.hero.primaryCta}
            </ButtonLink>
            <ButtonLink
              href={href(locale, 'contact')}
              variant="secondary"
              className={cn(
                'relative overflow-hidden rounded-xl',
                'bg-gradient-to-b from-white via-[#f8fcff] to-white',
                'text-ink px-8 py-4 text-[14px] font-semibold tracking-[0.03em]',
                'border border-white/90',
                'shadow-[0_6px_20px_-6px_rgba(10,35,66,0.1),0_1px_0_rgba(255,255,255,1)_inset,0_-1px_0_rgba(10,35,66,0.05)_inset]',
                'transition-all duration-200',
                'hover:shadow-[0_10px_28px_-8px_rgba(10,35,66,0.15),0_1px_0_rgba(255,255,255,1)_inset,0_-1px_0_rgba(10,35,66,0.1)_inset]',
                'hover:border-[#64b4e6]/60',
                'active:shadow-[0_3px_10px_-5px_rgba(10,35,66,0.12),0_1px_2px_rgba(10,35,66,0.1)_inset]',
                'active:scale-[0.98]',
                'before:absolute before:inset-0 before:rounded-xl before:bg-gradient-to-b before:from-white/60 before:via-transparent before:to-transparent before:content-[""]',
                'after:absolute after:bottom-0 after:left-1/2 after:h-px after:w-4/5 after:-translate-x-1/2 after:rounded-full after:bg-gradient-to-r after:from-transparent after:via-[#64b4e6]/40 after:to-transparent after:content-[""]'
              )}
            >
              {dict.home.hero.secondaryCta}
            </ButtonLink>
          </div>

          <p className="text-muted mt-8 flex items-center gap-2 text-[12px]">
            <span
              aria-hidden="true"
              className="relative flex h-5 w-5 items-center justify-center rounded-full border border-white/80 bg-gradient-to-br from-white to-[#f0f8ff] shadow-[inset_0_1px_0_rgba(255,255,255,0.6),0_1px_2px_rgba(10,35,66,0.08)]"
            >
              <svg viewBox="0 0 12 12" className="text-cosmos h-2.5 w-2.5">
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

        {/* Right column - Integrated compass as navigational aid, not hero */}
        <div className="flex items-center justify-center lg:col-span-5">
          <div className="relative w-full max-w-[28rem]">
            {/* Crystalline glass panel - cleaner, more purposeful */}
            <div className="relative aspect-square overflow-hidden rounded-2xl border border-white/70 bg-gradient-to-br from-white/80 via-[#f5fbff]/60 to-white/50 shadow-[0_24px_56px_-24px_rgba(100,180,230,0.22),0_1px_0_rgba(255,255,255,0.9)_inset,0_-1px_0_rgba(100,180,230,0.06)_inset]">
              {/* Top highlight */}
              <div className="absolute top-0 right-0 left-0 h-1 bg-gradient-to-r from-transparent via-white/90 to-transparent" />
              {/* Left highlight */}
              <div className="absolute top-0 left-0 h-full w-1 bg-gradient-to-b from-white/70 via-transparent to-transparent" />
              {/* Diagonal crystalline shine */}
              <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.35)_0%,rgba(255,255,255,0)_45%,rgba(255,255,255,0.08)_100%)]" />
              {/* Subtle center radial glow */}
              <div className="absolute top-1/2 left-1/2 h-[70%] max-h-[180px] w-[70%] max-w-[180px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-br from-[#64b4e6]/8 via-transparent to-[#e0b85a]/4 opacity-50 blur-[50px]" />

              <div className="relative flex h-full flex-col items-center justify-center p-6 sm:p-8">
                {/* Compass integrated as tool, not centerpiece */}
                <CompassDial bearings={bearings} className="h-auto w-full max-w-[220px]" />

                <p className="text-muted/70 mt-6 text-center text-[10px] font-medium tracking-[0.14em] uppercase">
                  Navega por nuestras cuatro áreas
                </p>
              </div>
            </div>

            {/* Clean floor reflection */}
            <div className="absolute -bottom-1 left-1/2 h-2 w-2/3 -translate-x-1/2 rounded-full bg-gradient-to-t from-[#64b4e6]/6 to-transparent blur-sm" />
          </div>
        </div>
      </Container>
    </section>
  );
}
