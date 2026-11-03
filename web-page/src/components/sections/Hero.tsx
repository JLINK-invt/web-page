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
    <section className="relative overflow-hidden bg-[linear-gradient(180deg,#f0f8ff_0%,#e8f4fd_50%,#dcecf7_100%)]">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_0%,rgba(79,184,232,0.25),rgba(79,184,232,0)_70%),radial-gradient(ellipse_40%_30%_at_80%_100%,rgba(224,184,90,0.15),rgba(224,184,90,0)_60%)]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-20 -left-20 h-80 w-80 rounded-full bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.9),rgba(183,230,248,0.4)_40%,rgba(79,184,232,0)_70%)] opacity-60 blur-[120px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-20 -bottom-20 h-60 w-60 rounded-full bg-[radial-gradient(circle_at_70%_70%,rgba(255,255,255,0.8),rgba(224,184,90,0.25)_45%,rgba(224,184,90,0)_70%)] opacity-50 blur-[100px]"
      />
      <div
        aria-hidden="true"
        className="from-cosmos/5 to-gold/5 pointer-events-none absolute top-1/2 left-1/2 h-[60vh] max-h-[400px] w-[80vw] max-w-5xl -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-b via-transparent opacity-30 blur-[80px]"
      />

      <Container className="relative grid items-center gap-10 py-14 sm:py-18 lg:grid-cols-12 lg:gap-10 lg:py-24">
        <div className="lg:col-span-6">
          <p className="text-muted flex items-center gap-2.5 text-[11px] font-semibold tracking-[0.22em] uppercase">
            <span
              aria-hidden="true"
              className="from-gold to-brass relative h-1.5 w-1.5 rounded-full bg-gradient-to-br shadow-[0_1px_2px_rgba(224,184,90,0.4)]"
            />
            {dict.home.hero.eyebrow}
          </p>

          <h1 className="font-display text-ink mt-4 max-w-2xl text-[clamp(2.4rem,5.2vw,4.2rem)] leading-[0.96] font-semibold tracking-[-0.02em] text-balance drop-shadow-[0_2px_8px_rgba(10,35,66,0.08)]">
            {renderTitle(dict.home.hero.title, dict.home.hero.titleAccent)}
          </h1>

          <p className="text-muted mt-5 max-w-xl text-lg leading-relaxed">
            {dict.home.hero.subtitle}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <ButtonLink
              href={href(locale, 'projects')}
              className={cn(
                'from-cosmos via-cosmos/90 to-cosmos/70 relative overflow-hidden rounded-full bg-gradient-to-b',
                'px-6 py-3 text-[13px] font-semibold tracking-[0.05em] text-white',
                'shadow-[0_4px_16px_-4px_rgba(23,105,170,0.5),inset_0_1px_0_rgba(255,255,255,0.3),inset_0_-1px_0_rgba(10,35,66,0.1)]',
                'transition-all duration-200 hover:shadow-[0_8px_24px_-6px_rgba(23,105,170,0.6),inset_0_1px_0_rgba(255,255,255,0.4),inset_0_-1px_0_rgba(10,35,66,0.15)]',
                'active:shadow-[0_2px_8px_-4px_rgba(23,105,170,0.4),inset_0_1px_2px_rgba(10,35,66,0.2)]',
                'active:scale-[0.98]',
                'before:absolute before:inset-0 before:rounded-full before:bg-gradient-to-b before:from-white/20 before:via-transparent before:to-transparent before:content-[""]'
              )}
            >
              {dict.home.hero.primaryCta}
            </ButtonLink>
            <ButtonLink
              href={href(locale, 'contact')}
              variant="secondary"
              className={cn(
                'via-paper relative overflow-hidden rounded-full bg-gradient-to-b from-white to-white',
                'text-ink px-6 py-3 text-[13px] font-semibold tracking-[0.05em]',
                'border border-white/80',
                'shadow-[0_4px_16px_-4px_rgba(10,35,66,0.15),inset_0_1px_0_rgba(255,255,255,0.9),inset_0_-1px_0_rgba(10,35,66,0.05)]',
                'transition-all duration-200 hover:shadow-[0_8px_24px_-6px_rgba(10,35,66,0.2),inset_0_1px_0_rgba(255,255,255,1),inset_0_-1px_0_rgba(10,35,66,0.1)]',
                'hover:border-gold/60',
                'active:shadow-[0_2px_8px_-4px_rgba(10,35,66,0.15),inset_0_1px_2px_rgba(10,35,66,0.1)]',
                'active:scale-[0.98]',
                'before:absolute before:inset-0 before:rounded-full before:bg-gradient-to-b before:from-white/50 before:via-transparent before:to-transparent before:content-[""]'
              )}
            >
              {dict.home.hero.secondaryCta}
            </ButtonLink>
          </div>

          <p className="text-muted mt-6 flex items-center gap-2 text-[12px]">
            <span
              aria-hidden="true"
              className="to-paper relative flex h-5 w-5 items-center justify-center rounded-full border border-white/80 bg-gradient-to-br from-white shadow-[inset_0_1px_0_rgba(255,255,255,0.6),0_1px_2px_rgba(10,35,66,0.1)]"
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

        <div className="lg:col-span-6">
          <div className="relative mx-auto max-w-[28rem] sm:max-w-[36rem] lg:max-w-none">
            <div className="via-paper/60 relative aspect-square overflow-hidden rounded-2xl border border-white/60 bg-gradient-to-br from-white/80 to-white/40 shadow-[0_20px_50px_-20px_rgba(10,35,66,0.25),inset_0_1px_0_rgba(255,255,255,0.8),inset_0_-1px_0_rgba(10,35,66,0.05)]">
              <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.4)_0%,rgba(255,255,255,0)_50%,rgba(255,255,255,0.1)_100%)]" />
              <div className="absolute top-0 right-0 left-0 h-1 bg-gradient-to-r from-transparent via-white/60 to-transparent" />

              <div className="relative flex h-full flex-col items-center justify-center p-6 sm:p-8">
                <p className="text-muted mb-6 text-center text-[12px] font-semibold tracking-[0.12em] uppercase">
                  {dict.home.hero.valuesLabel}
                </p>
                <ul className="mx-auto w-full max-w-xs space-y-4" role="list">
                  {[
                    { num: '01', text: dict.home.hero.value1, icon: '🛡️' },
                    { num: '02', text: dict.home.hero.value2, icon: '🔍' },
                    { num: '03', text: dict.home.hero.value3, icon: '⚙️' },
                    { num: '04', text: dict.home.hero.value4, icon: '📊' },
                  ].map((item) => (
                    <li
                      key={item.num}
                      className="group via-paper/40 hover:border-gold/30 relative flex items-center gap-4 rounded-xl border border-white/50 bg-gradient-to-br from-white/60 to-white/30 p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.7),0_4px_12px_-4px_rgba(10,35,66,0.15)] backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.9),0_8px_20px_-6px_rgba(10,35,66,0.2)]"
                    >
                      <span className="from-cosmos/10 via-cosmos/5 text-cosmos flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-gradient-to-br to-transparent text-[11px] font-bold tabular-nums shadow-[inset_0_1px_0_rgba(255,255,255,0.5),0_2px_4px_-2px_rgba(23,105,170,0.2)] transition-transform group-hover:scale-105">
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
                  <span className="via-gold/40 relative h-0.5 w-16 bg-gradient-to-r from-transparent to-transparent" />
                  <span>{dict.home.hero.valuesNote}</span>
                  <span className="from-gold/40 via-gold/40 relative h-0.5 w-16 bg-gradient-to-r to-transparent" />
                </div>
              </div>
            </div>

            <div className="from-cosmos/10 absolute -bottom-3 left-1/2 h-3 w-3/4 -translate-x-1/2 rounded-full bg-gradient-to-t to-transparent blur-md" />
          </div>
        </div>
      </Container>
    </section>
  );
}
