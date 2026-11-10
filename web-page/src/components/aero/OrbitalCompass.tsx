'use client';

import Link from 'next/link';
import { cn } from '@/lib/cn';
import type { Bearing } from './CelestialGlobe';

const ORBIT_SIZES = ['h-8 w-8', 'h-6 w-6', 'h-5 w-5', 'h-4 w-4'];

export function OrbitalCompass({
  bearings,
  className,
}: {
  bearings: Bearing[];
  className?: string;
}) {
  return (
    <div className={cn('relative aspect-square w-full', className)}>
      <svg viewBox="0 0 520 520" aria-hidden="true" className="h-full w-full">
        <defs>
          <radialGradient id="orb-core" cx="38%" cy="30%" r="80%">
            <stop offset="0%" stopColor="#245f9f" />
            <stop offset="60%" stopColor="#0b2b52" />
            <stop offset="100%" stopColor="#04142b" />
          </radialGradient>
          <linearGradient id="orb-gold" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#f8e6bd" />
            <stop offset="55%" stopColor="#e8b04b" />
            <stop offset="100%" stopColor="#b9801f" />
          </linearGradient>
        </defs>

        <g fill="none" stroke="#0f4f8f" strokeOpacity="0.34">
          <ellipse cx="260" cy="260" rx="210" ry="96" />
          <ellipse cx="260" cy="260" rx="210" ry="96" transform="rotate(45 260 260)" />
          <ellipse cx="260" cy="260" rx="210" ry="96" transform="rotate(-45 260 260)" />
          <circle cx="260" cy="260" r="210" strokeOpacity="0.2" />
        </g>

        <circle cx="260" cy="260" r="126" fill="#dceaf6" />
        <circle cx="260" cy="260" r="118" fill="url(#orb-core)" />
        <circle cx="260" cy="260" r="118" fill="none" stroke="url(#orb-gold)" strokeWidth="2.5" />
        <circle
          cx="260"
          cy="260"
          r="94"
          fill="none"
          stroke="#8fd4ef"
          strokeOpacity="0.45"
          strokeWidth="1"
        />
        <g fill="#ffffff" opacity="0.8">
          <circle cx="214" cy="212" r="1.8" />
          <circle cx="300" cy="238" r="1.4" />
          <circle cx="246" cy="316" r="1.6" />
          <circle cx="316" cy="196" r="1.1" />
        </g>

        <g className="orbit-slow">
          <circle cx="260" cy="260" r="0.01" fill="none" />
          <path d="M260 142 273 252 260 268 247 252Z" fill="url(#orb-gold)" />
          <path d="M260 378 247 268 260 252 273 268Z" fill="#e6f0f8" />
        </g>
        <circle cx="260" cy="260" r="12" fill="#eef7fe" />
        <circle cx="260" cy="260" r="4.5" fill="#0b2b52" />

        <g fill="#ffffff" opacity="0.85">
          <circle cx="150" cy="150" r="2" />
          <circle cx="372" cy="168" r="1.4" />
          <circle cx="392" cy="322" r="1.8" />
          <circle cx="138" cy="340" r="1.3" />
        </g>
      </svg>

      {bearings.map((bearing, index) => {
        const angle = (index * 90 - 90) * (Math.PI / 180);
        const radius = 205;
        const x = 50 + ((Math.cos(angle) * radius) / 520) * 100;
        const y = 50 + ((Math.sin(angle) * radius) / 520) * 100;
        return (
          <Link
            key={bearing.id}
            href={bearing.href}
            style={{ left: `${x}%`, top: `${y}%` }}
            className="group absolute z-10 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-1.5"
          >
            <span
              className={cn(
                'rounded-full border border-white/80 shadow-[0_10px_24px_-16px_rgba(6,26,52,0.9)]',
                ORBIT_SIZES[index % ORBIT_SIZES.length],
                bearing.live
                  ? 'bg-gradient-to-b from-[#4fb4e8] to-[#12508f]'
                  : 'bg-gradient-to-b from-white to-[#b9d3e6]'
              )}
            />
            <span className="text-ink rounded-lg border border-white/70 bg-white/80 px-2.5 py-1 text-[12px] font-semibold shadow-[0_10px_24px_-18px_rgba(6,26,52,0.9)] backdrop-blur-md transition-transform group-hover:-translate-y-0.5">
              {bearing.label}
            </span>
          </Link>
        );
      })}
    </div>
  );
}
