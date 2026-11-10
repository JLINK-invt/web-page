'use client';

import Link from 'next/link';
import { useState } from 'react';
import { cn } from '@/lib/cn';

export interface Bearing {
  id: string;
  label: string;
  href: string;
  live: boolean;
  status: string;
}

const POSITIONS = [
  'left-1/2 top-0 -translate-x-1/2 -translate-y-1/2',
  'right-0 top-1/2 -translate-y-1/2 sm:translate-x-1/2',
  'left-1/2 bottom-0 -translate-x-1/2 translate-y-1/2',
  'left-0 top-1/2 -translate-y-1/2 sm:-translate-x-1/2',
];

const CARDINALS = [
  ['N', 260, 44],
  ['E', 476, 260],
  ['S', 260, 476],
  ['O', 44, 260],
] as const;

const round = (value: number) => Math.round(value * 100) / 100;

export function CompassDial({ bearings, className }: { bearings: Bearing[]; className?: string }) {
  const [active, setActive] = useState(0);
  const angle = active * 90;

  return (
    <div className={cn('relative aspect-square w-full', className)}>
      <svg
        viewBox="0 0 520 520"
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 h-full w-full"
      >
        <g fill="none" stroke="#8fb3cd" strokeWidth="1" opacity="0.5">
          <path d="M-40 402c92-38 150-92 188-176 38 84 96 138 188 176" />
          <path d="M-40 446c104-44 166-108 206-204 40 96 102 160 206 204" />
          <path d="M372 520c-38-44-70-96-94-156-24 60-56 112-94 156" />
          <ellipse cx="260" cy="452" rx="150" ry="44" />
          <ellipse cx="260" cy="492" rx="212" ry="62" />
        </g>
      </svg>

      <div className="absolute inset-[9%] drop-shadow-[0_38px_44px_rgba(23,33,43,0.36)]">
        <svg viewBox="0 0 520 520" aria-hidden="true" className="h-full w-full">
          <defs>
            <linearGradient id="dial-brass" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#ffffff" />
              <stop offset="28%" stopColor="#e7f1f9" />
              <stop offset="48%" stopColor="#fbfdff" />
              <stop offset="72%" stopColor="#b3cadd" />
              <stop offset="100%" stopColor="#7e9fba" />
            </linearGradient>
            <radialGradient id="dial-paper" cx="38%" cy="26%" r="84%">
              <stop offset="0%" stopColor="#ffffff" />
              <stop offset="46%" stopColor="#e6f3fc" />
              <stop offset="78%" stopColor="#cfe6f7" />
              <stop offset="100%" stopColor="#b4d5ec" />
            </radialGradient>
            <linearGradient id="dial-needle" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#ffeab6" />
              <stop offset="42%" stopColor="#e0b85a" />
              <stop offset="100%" stopColor="#a9781f" />
            </linearGradient>
            <radialGradient id="dial-glass" cx="30%" cy="18%" r="62%">
              <stop offset="0%" stopColor="#ffffff" stopOpacity="0.55" />
              <stop offset="46%" stopColor="#ffffff" stopOpacity="0.12" />
              <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
            </radialGradient>
            <radialGradient id="dial-cap" cx="34%" cy="28%" r="72%">
              <stop offset="0%" stopColor="#ffffff" />
              <stop offset="44%" stopColor="#dfeaf3" />
              <stop offset="100%" stopColor="#6f90ab" />
            </radialGradient>
          </defs>

          <circle cx="260" cy="260" r="254" fill="url(#dial-brass)" />
          <circle cx="260" cy="260" r="244" fill="#0a2342" opacity="0.18" />
          <circle cx="260" cy="260" r="238" fill="url(#dial-paper)" />
          <circle
            cx="260"
            cy="260"
            r="238"
            fill="none"
            stroke="#7fa6c6"
            strokeWidth="1"
            opacity="0.5"
          />

          <g stroke="#2b4f72" strokeWidth="1" opacity="0.6">
            {Array.from({ length: 72 }, (_, index) => {
              const tick = (index / 72) * Math.PI * 2;
              const major = index % 9 === 0;
              const mid = index % 3 === 0;
              const outer = 232;
              const inner = major ? 208 : mid ? 218 : 224;
              return (
                <line
                  key={index}
                  x1={round(260 + Math.cos(tick) * inner)}
                  y1={round(260 + Math.sin(tick) * inner)}
                  x2={round(260 + Math.cos(tick) * outer)}
                  y2={round(260 + Math.sin(tick) * outer)}
                  strokeWidth={major ? 2 : 1}
                />
              );
            })}
          </g>

          <g
            fill="#0a2342"
            fontFamily="ui-sans-serif, system-ui, sans-serif"
            fontSize="20"
            fontWeight="600"
            textAnchor="middle"
          >
            {CARDINALS.map(([letter, x, y]) => (
              <text key={letter} x={x} y={y + 7}>
                {letter}
              </text>
            ))}
          </g>

          <g fill="none" stroke="#7fa6c6" strokeWidth="1" opacity="0.55">
            <circle cx="260" cy="260" r="196" />
            <circle cx="260" cy="260" r="132" strokeDasharray="2 7" />
          </g>

          <g opacity="0.9">
            <path d="M260 92 272 248 260 260 248 248Z" fill="#b9d2e6" opacity="0.62" />
            <path d="M260 428 248 272 260 260 272 272Z" fill="#b9d2e6" opacity="0.62" />
            <path d="M92 260 248 248 260 260 248 272Z" fill="#b9d2e6" opacity="0.45" />
            <path d="M428 260 272 272 260 260 272 248Z" fill="#b9d2e6" opacity="0.45" />
            <path d="M154 154 252 246 260 260 246 252Z" fill="#a9c8de" opacity="0.4" />
            <path d="M366 154 268 246 260 260 274 252Z" fill="#a9c8de" opacity="0.4" />
            <path d="M154 366 246 268 260 260 252 274Z" fill="#a9c8de" opacity="0.4" />
            <path d="M366 366 274 268 260 260 268 274Z" fill="#a9c8de" opacity="0.4" />
          </g>

          <g
            style={{
              transform: `rotate(${angle}deg)`,
              transformOrigin: '260px 260px',
              transition: 'transform 700ms cubic-bezier(0.22, 1, 0.36, 1)',
            }}
          >
            <path d="M260 118 274 250 260 264 246 250Z" fill="url(#dial-needle)" />
            <path
              d="M260 402 246 270 260 256 274 270Z"
              fill="#f4fbff"
              stroke="#8fb3cd"
              strokeWidth="1"
            />
            <circle cx="260" cy="260" r="15" fill="url(#dial-cap)" />
            <circle cx="260" cy="260" r="5" fill="#0a2342" opacity="0.85" />
          </g>

          <circle cx="260" cy="260" r="238" fill="url(#dial-glass)" />

          <g>
            {bearings.map((bearing, index) => {
              const point = (index * 90 - 90) * (Math.PI / 180);
              const x = round(260 + Math.cos(point) * 200);
              const y = round(260 + Math.sin(point) * 200);
              const isActive = index === active;
              return (
                <g key={bearing.id}>
                  <circle
                    cx={x}
                    cy={y}
                    r={isActive ? 12 : 8}
                    fill={isActive ? '#e0b85a' : '#6b8ba6'}
                    opacity={isActive ? 1 : 0.6}
                  />
                  <circle
                    cx={x}
                    cy={y}
                    r={isActive ? 21 : 15}
                    fill="none"
                    stroke={isActive ? '#a9781f' : '#8fb3cd'}
                    strokeWidth="1"
                    opacity={isActive ? 0.85 : 0.45}
                  />
                </g>
              );
            })}
          </g>

          <circle
            cx="260"
            cy="260"
            r="252"
            fill="none"
            stroke="#ffffff"
            strokeWidth="3"
            opacity="0.85"
          />
        </svg>
      </div>

      {bearings.map((bearing, index) => (
        <Link
          key={bearing.id}
          href={bearing.href}
          onMouseEnter={() => setActive(index)}
          onFocus={() => setActive(index)}
          onMouseLeave={() => setActive(0)}
          onBlur={() => setActive(0)}
          className={cn(
            'group absolute z-10 flex max-w-[8rem] flex-col items-center gap-0.5 rounded-xl border border-white bg-[rgba(244,251,255,0.94)] px-2.5 py-1.5 text-center shadow-[0_16px_30px_-22px_rgba(5,26,51,0.7),inset_0_1px_0_rgba(255,255,255,1)] backdrop-blur-md transition-transform hover:-translate-y-0.5 focus-visible:-translate-y-0.5 sm:max-w-[10.5rem] sm:gap-1 sm:px-3.5 sm:py-2',
            POSITIONS[index],
            active === index && 'border-gold/70 bg-white'
          )}
        >
          <span
            aria-hidden="true"
            className={cn(
              'h-1.5 w-1.5 rounded-full',
              bearing.live ? 'bg-cosmos' : 'border-gold/70 border'
            )}
          />
          <span className="font-display text-ink text-[11px] leading-tight font-semibold tracking-tight sm:text-[13px]">
            {bearing.label}
          </span>
          <span
            className={cn(
              'text-[9px] font-semibold tracking-[0.14em] uppercase sm:text-[10px] sm:tracking-[0.16em]',
              bearing.live ? 'text-cosmos' : 'text-muted'
            )}
          >
            {bearing.status}
          </span>
        </Link>
      ))}
    </div>
  );
}
