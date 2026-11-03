import type { Dictionary } from '@/content/dictionaries';
import type { Locale } from '@/lib/i18n';
import { href } from '@/lib/routes';
import { ButtonLink } from '@/components/ui/Button';
import { Container } from '@/components/ui/Container';
import { cn } from '@/lib/cn';

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
    <section className="relative overflow-hidden bg-gradient-to-b from-[#e8f4fd] via-white to-[#f0f8ff]">
      {/* Background atmosphere - Everaldo style radial glows */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,rgba(100,180,230,0.25),rgba(100,180,230,0)_60%),radial-gradient(ellipse_50%_40%_at_100%_100%,rgba(224,184,90,0.12),rgba(224,184,90,0)_50%)]"
      />
      {/* Top highlight bar - classic Everaldo */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-0 right-0 left-0 h-1 bg-gradient-to-r from-transparent via-white/60 to-transparent"
      />
      {/* Floating orbs */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 -left-24 h-72 w-72 rounded-full bg-gradient-to-br from-[#64b4e6]/30 via-transparent to-transparent blur-[120px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 -bottom-24 h-64 w-64 rounded-full bg-gradient-to-tr from-[#e0b85a]/20 via-transparent to-transparent blur-[100px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/4 right-1/4 h-48 w-48 rounded-full bg-gradient-to-bl from-[#ffffff]/40 via-[#e8f4fd]/20 to-transparent blur-[80px]"
      />

      <Container className="relative grid gap-10 py-10 sm:py-14 lg:grid-cols-12 lg:gap-12 lg:py-20">
        {/* Left column - Content */}
        <div className="lg:col-span-6">
          <p className="text-muted flex items-center gap-2.5 text-[11px] font-semibold tracking-[0.22em] uppercase">
            <span
              aria-hidden="true"
              className="relative h-1.5 w-1.5 rounded-full bg-gradient-to-br from-[#e0b85a] to-[#c9963a] shadow-[0_1px_2px_rgba(224,184,90,0.5),inset_0_1px_0_rgba(255,255,255,0.4)]"
            />
            {dict.home.hero.eyebrow}
          </p>

          <h1 className="font-display text-ink mt-4 max-w-2xl text-[clamp(2.4rem,5.2vw,4.2rem)] leading-[0.96] font-semibold tracking-[-0.02em] text-balance drop-shadow-[0_2px_8px_rgba(100,180,230,0.15)]">
            {renderTitle(dict.home.hero.title, dict.home.hero.titleAccent)}
          </h1>

          <p className="text-muted mt-5 max-w-xl text-lg leading-relaxed">
            {dict.home.hero.subtitle}
          </p>

          {/* Everaldo-style gel buttons */}
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <ButtonLink
              href={href(locale, 'projects')}
              className={cn(
                'relative overflow-hidden rounded-xl',
                'bg-gradient-to-b from-[#64b4e6] via-[#4fa8e0] to-[#3d90d0]',
                'px-7 py-3.5 text-[13px] font-semibold tracking-[0.05em] text-white',
                'shadow-[0_4px_16px_-4px_rgba(61,144,208,0.5),0_1px_0_rgba(255,255,255,0.3)_inset,0_-1px_0_rgba(10,35,66,0.1)_inset]',
                'transition-all duration-200',
                'hover:shadow-[0_8px_24px_-6px_rgba(61,144,208,0.6),0_1px_0_rgba(255,255,255,0.4)_inset,0_-1px_0_rgba(10,35,66,0.15)_inset]',
                'active:shadow-[0_2px_8px_-4px_rgba(61,144,208,0.4),0_1px_2px_rgba(10,35,66,0.2)_inset]',
                'active:scale-[0.98]',
                'before:absolute before:inset-0 before:rounded-xl before:bg-gradient-to-b before:from-white/25 before:via-transparent before:to-transparent before:content-[""]',
                'after:absolute after:bottom-0 after:left-1/2 after:h-px after:w-3/4 after:-translate-x-1/2 after:rounded-full after:bg-gradient-to-r after:from-transparent after:via-white/40 after:to-transparent after:content-[""]'
              )}
            >
              {dict.home.hero.primaryCta}
            </ButtonLink>
            <ButtonLink
              href={href(locale, 'contact')}
              variant="secondary"
              className={cn(
                'relative overflow-hidden rounded-xl',
                'bg-gradient-to-b from-white via-[#f5fbff] to-white',
                'text-ink px-7 py-3.5 text-[13px] font-semibold tracking-[0.05em]',
                'border border-white/80',
                'shadow-[0_4px_16px_-4px_rgba(10,35,66,0.12),0_1px_0_rgba(255,255,255,0.9)_inset,0_-1px_0_rgba(10,35,66,0.05)_inset]',
                'transition-all duration-200',
                'hover:shadow-[0_8px_24px_-6px_rgba(10,35,66,0.18),0_1px_0_rgba(255,255,255,1)_inset,0_-1px_0_rgba(10,35,66,0.1)_inset]',
                'hover:border-[#e0b85a]/60',
                'active:shadow-[0_2px_8px_-4px_rgba(10,35,66,0.12),0_1px_2px_rgba(10,35,66,0.1)_inset]',
                'active:scale-[0.98]',
                'before:absolute before:inset-0 before:rounded-xl before:bg-gradient-to-b before:from-white/50 before:via-transparent before:to-transparent before:content-[""]',
                'after:absolute after:bottom-0 after:left-1/2 after:h-px after:w-3/4 after:-translate-x-1/2 after:rounded-full after:bg-gradient-to-r after:from-transparent after:via-[#e0b85a]/50 after:to-transparent after:content-[""]'
              )}
            >
              {dict.home.hero.secondaryCta}
            </ButtonLink>
          </div>

          <p className="text-muted mt-6 flex items-center gap-2 text-[12px]">
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

        {/* Right column - Everaldo style glass panel with values */}
        <div className="lg:col-span-6">
          <div className="relative mx-auto max-w-[30rem] sm:max-w-[38rem] lg:max-w-none">
            {/* Main glass panel */}
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-white/60 bg-gradient-to-br from-white/70 via-[#f5fbff]/50 to-white/40 shadow-[0_20px_50px_-20px_rgba(100,180,230,0.25),0_1px_0_rgba(255,255,255,0.8)_inset,0_-1px_0_rgba(100,180,230,0.05)_inset] sm:aspect-square">
              {/* Top highlight */}
              <div className="absolute top-0 right-0 left-0 h-1 bg-gradient-to-r from-transparent via-white/80 to-transparent" />
              {/* Left highlight */}
              <div className="absolute top-0 left-0 h-full w-1 bg-gradient-to-b from-white/60 via-transparent to-transparent" />
              {/* Subtle diagonal shine */}
              <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.3)_0%,rgba(255,255,255,0)_50%,rgba(255,255,255,0.1)_100%)]" />
              {/* Radial glow center */}
              <div className="absolute top-1/2 left-1/2 h-[80%] max-h-[200px] w-[80%] max-w-[200px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-br from-[#64b4e6]/10 via-transparent to-[#e0b85a]/5 opacity-60 blur-[60px]" />

              <div className="relative flex h-full flex-col items-center justify-center p-6 sm:p-8">
                <p className="text-muted mb-6 text-center text-[12px] font-semibold tracking-[0.12em] uppercase">
                  {dict.home.hero.valuesLabel}
                </p>
                <ul className="mx-auto w-full max-w-xs space-y-3" role="list">
                  {[
                    { num: '01', text: dict.home.hero.value1, icon: '🛡️' },
                    { num: '02', text: dict.home.hero.value2, icon: '🔍' },
                    { num: '03', text: dict.home.hero.value3, icon: '⚙️' },
                    { num: '04', text: dict.home.hero.value4, icon: '📊' },
                  ].map((item) => (
                    <li
                      key={item.num}
                      className="group relative flex items-center gap-4 rounded-xl border border-white/50 bg-gradient-to-br from-white/60 via-[#f5fbff]/40 to-white/30 p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.7),0_4px_12px_-4px_rgba(100,180,230,0.12)] backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-[#e0b85a]/30 hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.9),0_8px_20px_-6px_rgba(100,180,230,0.18)]"
                    >
                      <span className="text-cosmos flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-[#64b4e6]/15 via-[#64b4e6]/5 to-transparent text-[11px] font-bold tabular-nums shadow-[inset_0_1px_0_rgba(255,255,255,0.5),0_2px_4px_-2px_rgba(100,180,230,0.2)] transition-transform group-hover:scale-105">
                        {item.num}
                      </span>
                      <span className="text-ink/90 flex-1 text-left text-sm leading-snug font-medium">
                        {item.text}
                      </span>
                      <span
                        className="text-2xl opacity-60 transition-opacity group-hover:opacity-100"
                        aria-hidden="true"
                      >
                        {item.icon}
                      </span>
                    </li>
                  ))}
                </ul>

                <div className="text-muted/60 absolute bottom-4 left-1/2 flex -translate-x-1/2 items-center gap-2 text-[10px] font-medium tracking-[0.1em] uppercase">
                  <span className="relative h-0.5 w-16 bg-gradient-to-r from-transparent via-[#e0b85a]/40 to-transparent" />
                  <span>{dict.home.hero.valuesNote}</span>
                  <span className="relative h-0.5 w-16 bg-gradient-to-r from-[#e0b85a]/40 via-[#e0b85a]/40 to-transparent" />
                </div>
              </div>
            </div>

            {/* Bottom reflection/shadow */}
            <div className="absolute -bottom-2 left-1/2 h-3 w-3/4 -translate-x-1/2 rounded-full bg-gradient-to-t from-[#64b4e6]/10 to-transparent blur-md" />
          </div>
        </div>
      </Container>
    </section>
  );
}
