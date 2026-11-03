import Link from 'next/link';
import type { Dictionary } from '@/content/dictionaries';
import type { Locale } from '@/lib/i18n';
import { designsHref, href } from '@/lib/routes';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { ArrowIcon } from '@/components/ui/ArrowIcon';
import type { DesignVariant } from './DesignVariantPage';

function SphereThumb() {
  return (
    <svg viewBox="0 0 200 200" aria-hidden="true" className="h-full w-full">
      <defs>
        <radialGradient id="thumb-sphere" cx="38%" cy="28%" r="80%">
          <stop offset="0%" stopColor="#1b4f8c" />
          <stop offset="60%" stopColor="#0b2b52" />
          <stop offset="100%" stopColor="#04142b" />
        </radialGradient>
      </defs>
      <circle cx="100" cy="100" r="76" fill="#dceaf6" />
      <circle cx="100" cy="100" r="68" fill="url(#thumb-sphere)" />
      <g fill="#ffffff">
        <circle cx="78" cy="72" r="1.8" opacity="0.9" />
        <circle cx="124" cy="86" r="1.3" opacity="0.7" />
        <circle cx="96" cy="132" r="1.5" opacity="0.8" />
        <circle cx="136" cy="120" r="1" opacity="0.6" />
      </g>
      <ellipse
        cx="100"
        cy="100"
        rx="66"
        ry="24"
        transform="rotate(-18 100 100)"
        fill="none"
        stroke="#e8b04b"
        strokeWidth="2"
      />
      <path d="M100 42 105 97 100 104 95 97Z" fill="#e8b04b" />
      <path d="M100 158 95 104 100 97 105 104Z" fill="#e6f0f8" />
    </svg>
  );
}

function OrbitThumb() {
  return (
    <svg viewBox="0 0 200 200" aria-hidden="true" className="h-full w-full">
      <g fill="none" stroke="#0f4f8f" strokeOpacity="0.28">
        <ellipse cx="100" cy="100" rx="80" ry="34" />
        <ellipse cx="100" cy="100" rx="80" ry="34" transform="rotate(45 100 100)" />
        <ellipse cx="100" cy="100" rx="80" ry="34" transform="rotate(-45 100 100)" />
      </g>
      <circle cx="100" cy="100" r="38" fill="#0b2b52" />
      <circle cx="100" cy="100" r="38" fill="none" stroke="#e8b04b" strokeWidth="1.6" />
      <path d="M100 68 106 97 100 104 94 97Z" fill="#e8b04b" />
      <circle cx="100" cy="100" r="4" fill="#eef7fe" />
      <circle cx="100" cy="42" r="6" fill="#4fb4e8" />
      <circle cx="157" cy="100" r="5" fill="#ffffff" />
      <circle cx="100" cy="158" r="4" fill="#b9d3e6" />
      <circle cx="43" cy="100" r="4" fill="#b9d3e6" />
    </svg>
  );
}

function SkeuThumb() {
  return (
    <svg viewBox="0 0 200 200" aria-hidden="true" className="h-full w-full">
      <defs>
        <linearGradient id="thumb-chrome" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="45%" stopColor="#e2f0fa" />
          <stop offset="100%" stopColor="#8fb2cc" />
        </linearGradient>
        <radialGradient id="thumb-skeu" cx="38%" cy="28%" r="80%">
          <stop offset="0%" stopColor="#1b4f8c" />
          <stop offset="100%" stopColor="#04142b" />
        </radialGradient>
      </defs>
      <circle cx="100" cy="92" r="72" fill="url(#thumb-chrome)" />
      <circle cx="100" cy="92" r="62" fill="url(#thumb-skeu)" />
      <g fill="#ffffff">
        <circle cx="82" cy="70" r="1.6" opacity="0.9" />
        <circle cx="118" cy="80" r="1.2" opacity="0.7" />
        <circle cx="96" cy="118" r="1.4" opacity="0.8" />
      </g>
      <ellipse
        cx="100"
        cy="92"
        rx="58"
        ry="21"
        transform="rotate(-18 100 92)"
        fill="none"
        stroke="#e8b04b"
        strokeWidth="2"
      />
      <path d="M100 44 105 89 100 96 95 89Z" fill="#e8b04b" />
      <path d="M78 154h44l-6 22H84Z" fill="url(#thumb-chrome)" />
      <ellipse cx="100" cy="180" rx="34" ry="6" fill="#0b2b52" opacity="0.2" />
    </svg>
  );
}

const cards: {
  variant: DesignVariant;
  href: (locale: Locale) => string;
  thumb: () => React.ReactNode;
}[] = [
  { variant: 'esfera', href: (locale) => href(locale, 'home'), thumb: SphereThumb },
  {
    variant: 'planetario',
    href: (locale) => designsHref(locale, 'planetario'),
    thumb: OrbitThumb,
  },
  {
    variant: 'skeuomorphic',
    href: (locale) => designsHref(locale, 'skeuomorphic'),
    thumb: SkeuThumb,
  },
];

export function DesignsGallery({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  return (
    <section className="py-14 sm:py-20">
      <Container>
        <SectionHeading title={dict.designs.title} subtitle={dict.designs.subtitle} />

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {cards.map((card) => {
            const Thumb = card.thumb;
            return (
              <article
                key={card.variant}
                className="glass-panel flex h-full flex-col rounded-2xl p-5"
              >
                <span className="mx-auto h-36 w-36">
                  <Thumb />
                </span>
                <h2 className="font-display text-ink mt-5 text-lg font-semibold tracking-tight">
                  {dict.designs.labels[card.variant]}
                </h2>
                <p className="text-muted mt-2 flex-1 text-sm leading-relaxed">
                  {dict.designs.descriptions[card.variant]}
                </p>
                <Link
                  href={card.href(locale)}
                  className="text-cosmos mt-5 inline-flex items-center gap-2 text-[11px] font-semibold tracking-[0.16em] uppercase"
                >
                  {dict.designs.visit}
                  <ArrowIcon />
                </Link>
              </article>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
