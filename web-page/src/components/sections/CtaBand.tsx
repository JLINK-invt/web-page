import type { Locale } from '@/lib/i18n';
import { href } from '@/lib/routes';
import { ButtonLink } from '@/components/ui/Button';
import { Container } from '@/components/ui/Container';

export function CtaBand({
  locale,
  title,
  subtitle,
  button,
}: {
  locale: Locale;
  title: string;
  subtitle: string;
  button: string;
}) {
  return (
    <section className="bg-space text-paper relative overflow-hidden">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_70%_at_18%_20%,rgba(79,184,232,0.28),rgba(79,184,232,0)_70%),radial-gradient(46%_60%_at_88%_84%,rgba(183,230,248,0.18),rgba(183,230,248,0)_72%)]"
      />
      <div
        aria-hidden="true"
        className="border-silver/25 pointer-events-none absolute top-1/2 -right-40 h-[36rem] w-[36rem] -translate-y-1/2 rounded-full border"
      />
      <div
        aria-hidden="true"
        className="border-silver/20 pointer-events-none absolute top-1/2 -right-24 h-[26rem] w-[26rem] -translate-y-1/2 rounded-full border"
      />
      <svg
        viewBox="0 0 400 400"
        aria-hidden="true"
        className="pointer-events-none absolute top-1/2 -right-24 h-[26rem] w-[26rem] -translate-y-1/2 opacity-80"
      >
        <g fill="none" stroke="#b7e6f8" strokeOpacity="0.32">
          <circle cx="200" cy="200" r="150" strokeWidth="1" />
          <circle cx="200" cy="200" r="116" strokeWidth="1" strokeDasharray="2 8" />
          <path d="M200 40v320M40 200h320" strokeDasharray="2 10" />
          <path
            d="m200 64 10 126 10 10-10 10-10-10 10-10Z"
            stroke="none"
            fill="#e0b85a"
            fillOpacity="0.6"
          />
          <path
            d="m200 336-10-126-10-10 10-10 10 10-10 10Z"
            stroke="none"
            fill="#dff1fb"
            fillOpacity="0.28"
          />
        </g>
        <circle cx="200" cy="200" r="9" fill="#0a2342" stroke="#e0b85a" strokeWidth="2" />
      </svg>

      <Container className="relative py-16 sm:py-24">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-8">
            <h2 className="font-display max-w-2xl text-[clamp(2rem,4.4vw,3.4rem)] leading-[1.04] font-semibold tracking-[-0.03em] text-balance text-white">
              {title}
            </h2>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-[rgba(223,240,252,0.78)]">
              {subtitle}
            </p>
          </div>
          <div className="lg:col-span-4 lg:text-right">
            <ButtonLink href={href(locale, 'contact')} variant="inverse">
              {button}
            </ButtonLink>
          </div>
        </div>
      </Container>
    </section>
  );
}
