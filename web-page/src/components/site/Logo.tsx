import { site } from '@/content/site';
import { cn } from '@/lib/cn';

export function Logo({
  className,
  tone = 'default',
}: {
  className?: string;
  tone?: 'default' | 'inverse';
}) {
  return (
    <span className={cn('inline-flex items-center gap-2.5', className)}>
      <svg viewBox="0 0 40 40" aria-hidden="true" className="h-9 w-9 shrink-0">
        <defs>
          <radialGradient id="logo-space" cx="36%" cy="28%" r="78%">
            <stop offset="0%" stopColor="#1d5699" />
            <stop offset="55%" stopColor="#0b2b52" />
            <stop offset="100%" stopColor="#04142b" />
          </radialGradient>
          <linearGradient id="logo-gold" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#f8e6bd" />
            <stop offset="55%" stopColor="#e8b04b" />
            <stop offset="100%" stopColor="#b9801f" />
          </linearGradient>
          <linearGradient id="logo-chrome" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="45%" stopColor="#dbeaf5" />
            <stop offset="100%" stopColor="#8fb2cc" />
          </linearGradient>
          <radialGradient id="logo-gloss" cx="32%" cy="20%" r="48%">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0.45" />
            <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
          </radialGradient>
        </defs>

        <circle cx="20" cy="20" r="19" fill="none" stroke="url(#logo-chrome)" strokeWidth="2.4" />
        <circle cx="20" cy="20" r="17.4" fill="url(#logo-space)" />
        <circle cx="20" cy="20" r="17.4" fill="url(#logo-gloss)" />

        <g fill="#ffffff">
          <circle cx="13" cy="13" r="1.1" opacity="0.9" />
          <circle cx="27" cy="15" r="0.8" opacity="0.7" />
          <circle cx="15" cy="27" r="0.9" opacity="0.8" />
          <circle cx="29" cy="28" r="0.6" opacity="0.6" />
          <circle cx="22" cy="9" r="0.6" opacity="0.6" />
        </g>

        <path d="M20 6 23 20 20 24 17 20Z" fill="url(#logo-gold)" />
        <path d="M20 34 17 24 20 20 23 24Z" fill="#e8f2fa" />
        <circle cx="20" cy="20" r="2" fill="#e8f2fa" />
        <circle cx="20" cy="20" r="0.9" fill="#0b2b52" />

        <g stroke="url(#logo-gold)" strokeWidth="1" strokeLinecap="round" opacity="0.85">
          <path d="M20 1.6v2.6" />
          <path d="M38.4 20h-2.6" />
          <path d="M20 38.4v-2.6" />
          <path d="M1.6 20h2.6" />
        </g>
      </svg>

      <span
        className={cn(
          'font-display text-[17px] leading-none font-semibold tracking-tight',
          tone === 'inverse' ? 'text-star' : 'text-ink'
        )}
      >
        {site.name}
      </span>
    </span>
  );
}
