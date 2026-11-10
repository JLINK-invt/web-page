import Link from 'next/link';
import type { Dictionary } from '@/content/dictionaries';
import type { Locale } from '@/lib/i18n';
import { designsHref, href } from '@/lib/routes';
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
    <div className="p-2">
      <section className="win-panel overflow-hidden">
        <div className="win-banner px-4 py-4 sm:py-5">
          <h1 className="font-display text-[23px] leading-tight font-bold text-white">
            {dict.designs.title}
          </h1>
          <p className="mt-1.5 max-w-[64ch] text-[12.5px] leading-[1.55] text-[#eaf2ff]">
            {dict.designs.subtitle}
          </p>
        </div>

        <div className="grid gap-3 p-3 sm:grid-cols-3 sm:p-4">
          {cards.map((card) => {
            const Thumb = card.thumb;
            return (
              <article key={card.variant} className="win-panel flex h-full flex-col p-3">
                <h2 className="win-title text-[15px]">{dict.designs.labels[card.variant]}</h2>
                <span className="mx-auto mt-3 block h-32 w-32 border border-[#e0e0e0] bg-[#f6f6f6] p-1">
                  <Thumb />
                </span>
                <p className="mt-1 flex-1 text-[12px] leading-[1.55] text-[#45505d]">
                  {dict.designs.descriptions[card.variant]}
                </p>
                <Link
                  href={card.href(locale)}
                  className="win-link mt-3 inline-flex items-center gap-1 text-[12px] font-bold"
                >
                  {dict.designs.visit}
                  <ArrowIcon className="h-3 w-3" />
                </Link>
              </article>
            );
          })}
        </div>
      </section>
    </div>
  );
}
