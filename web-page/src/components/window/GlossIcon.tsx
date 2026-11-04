'use client';

import { useId, type ReactNode } from 'react';
import { cn } from '@/lib/cn';

export type GlossIconName =
  'globe' | 'house' | 'factory' | 'sprout' | 'cross' | 'folder' | 'compass' | 'envelope';

const glyphs: Record<GlossIconName, ReactNode> = {
  globe: (
    <>
      <circle cx="12" cy="12" r="7.4" fill="none" stroke="#ffffff" strokeWidth="1.3" />
      <ellipse cx="12" cy="12" rx="3.1" ry="7.4" fill="none" stroke="#ffffff" strokeWidth="1" />
      <path d="M4.8 9.4h14.4M4.8 14.6h14.4" stroke="#ffffff" strokeWidth="1" />
    </>
  ),
  house: (
    <path
      d="M3.2 11.4 12 3.8l8.8 7.6v8.2a1 1 0 0 1-1 1h-4.6v-5.2h-6.4v5.2H4.2a1 1 0 0 1-1-1z"
      fill="#ffffff"
    />
  ),
  factory: <path d="M2.8 20.4V10l5.6 3.2V10l5.6 3.2V6.2h3.4v14.2z" fill="#ffffff" />,
  sprout: (
    <path
      d="M11.3 20.4v-6.8h1.4v6.8zM12 13.6C12 9.9 9 8.4 5.6 8.4c0 3.7 2.7 5.2 6.4 5.2zm0-2.1c0-3.4 2.8-4.8 6-4.8 0 3.4-2.5 4.8-6 4.8z"
      fill="#ffffff"
    />
  ),
  cross: <path d="M9.8 3.4h4.4v6.4h6.4v4.4h-6.4v6.4H9.8v-6.4H3.4V9.8h6.4z" fill="#ffffff" />,
  folder: (
    <path
      d="M2.8 6.2a1.4 1.4 0 0 1 1.4-1.4h4.9l1.8 2.2h8.9a1.4 1.4 0 0 1 1.4 1.4v9.4a1.4 1.4 0 0 1-1.4 1.4H4.2a1.4 1.4 0 0 1-1.4-1.4z"
      fill="#ffffff"
    />
  ),
  compass: (
    <>
      <circle cx="12" cy="12" r="8.2" fill="none" stroke="#ffffff" strokeWidth="1.3" />
      <path d="m15.6 8.4-2.1 5.1-5.1 2.1 2.1-5.1z" fill="#ffffff" />
    </>
  ),
  envelope: (
    <>
      <rect x="2.8" y="5.6" width="18.4" height="12.8" rx="1.2" fill="#ffffff" />
      <path d="m3.4 7 8.6 6.4L20.6 7" fill="none" stroke="#2a5db0" strokeWidth="1.4" />
    </>
  ),
};

const hues: Record<GlossIconName, [string, string, string]> = {
  globe: ['#cfe6ff', '#4f8fe0', '#1c4b96'],
  house: ['#d7f0d7', '#63b264', '#22692a'],
  factory: ['#ffe6c6', '#e09a4a', '#9a5c13'],
  sprout: ['#d8f3e4', '#5fb98b', '#1f6b48'],
  cross: ['#ffdcd6', '#e0705c', '#9a2f1f'],
  folder: ['#e2dcff', '#8f7ce0', '#4b3b96'],
  compass: ['#d7ecff', '#3f8fd6', '#144a80'],
  envelope: ['#e6e6e6', '#9a9a9a', '#4f4f4f'],
};

export function GlossIcon({
  name,
  label,
  onClick,
  active = false,
  size = 'md',
  tone = 'light',
}: {
  name: GlossIconName;
  label: string;
  onClick: () => void;
  active?: boolean;
  size?: 'md' | 'sm';
  tone?: 'light' | 'dark';
}) {
  const uid = useId().replace(/:/g, '');

  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={label}
      aria-pressed={active}
      className={cn(
        'win-gloss flex flex-col items-center gap-1 rounded-[3px] px-1 py-1.5 text-center',
        size === 'sm' ? 'w-[64px]' : 'w-[62px]',
        tone === 'dark' ? 'text-[#253b59] hover:bg-[#e6eef9]' : 'text-white/95 hover:bg-white/10',
        active &&
          (tone === 'dark'
            ? 'bg-[#e3ecf9] ring-1 ring-[#2a5db0]/40'
            : 'bg-white/15 ring-1 ring-white/45')
      )}
    >
      <svg
        viewBox="0 0 48 48"
        aria-hidden="true"
        className={size === 'sm' ? 'h-10 w-10' : 'h-12 w-12'}
      >
        <defs>
          <radialGradient id={`gloss-${uid}`} cx="34%" cy="24%" r="82%">
            <stop offset="0%" stopColor={hues[name][0]} />
            <stop offset="52%" stopColor={hues[name][1]} />
            <stop offset="100%" stopColor={hues[name][2]} />
          </radialGradient>
        </defs>
        <circle cx="24" cy="24" r="20.5" fill={`url(#gloss-${uid})`} />
        <ellipse
          cx="17.5"
          cy="14"
          rx="10"
          ry="6.4"
          fill="#ffffff"
          opacity="0.52"
          transform="rotate(-22 17.5 14)"
        />
        <circle cx="24" cy="24" r="20.5" fill="none" stroke="rgb(255 255 255 / 55%)" />
        <g transform="translate(12 12)">{glyphs[name]}</g>
      </svg>
      <span
        className={cn(
          'leading-tight',
          'text-[11px]',
          tone === 'dark' ? 'font-semibold' : 'text-white/95'
        )}
      >
        {label}
      </span>
    </button>
  );
}
