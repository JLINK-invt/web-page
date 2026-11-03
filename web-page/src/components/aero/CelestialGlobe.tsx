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

const STAR_FIELD = [
  [212, 168, 2.1],
  [268, 132, 1.3],
  [318, 214, 1.7],
  [156, 236, 1.1],
  [352, 268, 2.4],
  [232, 296, 1.5],
  [140, 320, 1.8],
  [286, 344, 1.2],
  [378, 196, 1],
  [186, 128, 1.4],
  [330, 320, 0.9],
  [120, 176, 1.2],
  [402, 300, 1.1],
  [252, 96, 0.8],
  [104, 268, 0.9],
] as const;

const CONSTELLATIONS = [
  [
    [212, 168],
    [268, 132],
    [318, 214],
    [232, 296],
  ],
  [
    [140, 320],
    [186, 128],
    [156, 236],
  ],
  [
    [352, 268],
    [378, 196],
    [402, 300],
  ],
];

export function CelestialGlobe({
  bearings,
  className,
}: {
  bearings: Bearing[];
  className?: string;
}) {
  const [active, setActive] = useState(0);
  const angle = active * 90;
  const positions = [
    'left-1/2 top-[7%] -translate-x-1/2 -translate-y-1/2',
    'right-0 top-1/2 -translate-y-1/2',
    'left-1/2 bottom-[7%] -translate-x-1/2 translate-y-1/2',
    'left-0 top-1/2 -translate-y-1/2',
  ];

  return (
    <div className={cn('relative aspect-square w-full', className)}>
      <div className="absolute inset-[11%]">
        <svg viewBox="0 0 520 520" aria-hidden="true" className="h-full w-full">
          <defs>
            <radialGradient id="dome" cx="38%" cy="26%" r="82%">
              <stop offset="0%" stopColor="#1b4f8c" />
              <stop offset="52%" stopColor="#0b2b52" />
              <stop offset="100%" stopColor="#04142b" />
            </radialGradient>
            <linearGradient id="bezel" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#ffffff" />
              <stop offset="38%" stopColor="#dcecf7" />
              <stop offset="52%" stopColor="#f8fdff" />
              <stop offset="100%" stopColor="#93b6d1" />
            </linearGradient>
            <linearGradient id="gold" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#f6d99a" />
              <stop offset="48%" stopColor="#e8b04b" />
              <stop offset="100%" stopColor="#b9801f" />
            </linearGradient>
            <linearGradient id="needle" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#f8e6bd" />
              <stop offset="50%" stopColor="#e0a63c" />
              <stop offset="100%" stopColor="#9c6a14" />
            </linearGradient>
            <filter id="soft" x="-40%" y="-40%" width="180%" height="180%">
              <feGaussianBlur stdDeviation="6" />
            </filter>
            <radialGradient id="dome-glass" cx="30%" cy="18%" r="62%">
              <stop offset="0%" stopColor="#ffffff" stopOpacity="0.42" />
              <stop offset="42%" stopColor="#bfe9fb" stopOpacity="0.12" />
              <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
            </radialGradient>
            <linearGradient id="rim-light" x1="1" y1="1" x2="0" y2="0">
              <stop offset="0%" stopColor="#8fd4ef" stopOpacity="0.55" />
              <stop offset="45%" stopColor="#8fd4ef" stopOpacity="0" />
            </linearGradient>
          </defs>

          <circle cx="260" cy="260" r="252" fill="url(#bezel)" />
          <circle cx="260" cy="260" r="238" fill="#7fa6c4" opacity="0.55" />
          <circle cx="260" cy="260" r="232" fill="#0a2547" />
          <circle cx="260" cy="260" r="224" fill="url(#dome)" />

          <g stroke="#8fd4ef" strokeWidth="0.8" opacity="0.16" fill="none">
            <ellipse cx="260" cy="260" rx="224" ry="96" />
            <ellipse cx="260" cy="260" rx="224" ry="160" />
            <ellipse cx="260" cy="260" rx="96" ry="224" />
            <ellipse cx="260" cy="260" rx="160" ry="224" />
            <path d="M36 260h448M260 36v448" />
          </g>

          <g stroke="#ffffff" strokeWidth="1" opacity="0.22" fill="none">
            {CONSTELLATIONS.map((points, index) => (
              <polyline key={index} points={points.map(([x, y]) => `${x},${y}`).join(' ')} />
            ))}
          </g>

          <g fill="#ffffff">
            {STAR_FIELD.map(([x, y, r], index) => (
              <circle key={index} cx={x} cy={y} r={r} opacity={0.45 + (index % 4) * 0.14} />
            ))}
          </g>

          <circle cx="260" cy="260" r="224" fill="url(#dome-glass)" />
          <path
            d="M104 148a196 196 0 0 1 132-84"
            fill="none"
            stroke="#ffffff"
            strokeWidth="14"
            strokeLinecap="round"
            opacity="0.22"
          />
          <path
            d="M416 372a196 196 0 0 1-132 84"
            fill="none"
            stroke="url(#rim-light)"
            strokeWidth="10"
            strokeLinecap="round"
            opacity="0.8"
          />

          <circle
            cx="260"
            cy="260"
            r="254"
            fill="none"
            stroke="url(#bezel)"
            strokeWidth="4"
            opacity="0.95"
          />

          <circle
            cx="260"
            cy="260"
            r="224"
            fill="none"
            stroke="url(#gold)"
            strokeWidth="1.4"
            opacity="0.65"
          />

          <g stroke="#ffffff" strokeWidth="1" opacity="0.28">
            {Array.from({ length: 48 }, (_, index) => {
              const angle = (index / 48) * Math.PI * 2;
              const outer = 250;
              const inner = index % 4 === 0 ? 238 : 244;
              return (
                <line
                  key={index}
                  x1={260 + Math.cos(angle) * inner}
                  y1={260 + Math.sin(angle) * inner}
                  x2={260 + Math.cos(angle) * outer}
                  y2={260 + Math.sin(angle) * outer}
                />
              );
            })}
          </g>

          <g
            style={{
              transform: `rotate(${angle}deg)`,
              transformOrigin: '260px 260px',
              transition: 'transform 700ms cubic-bezier(0.22, 1, 0.36, 1)',
            }}
          >
            <ellipse
              cx="260"
              cy="260"
              rx="218"
              ry="78"
              transform="rotate(-16 260 260)"
              fill="none"
              stroke="url(#gold)"
              strokeWidth="2"
              opacity="0.9"
            />
            <path d="M260 96 268 246 260 260 252 246Z" fill="url(#needle)" />
            <path d="M260 424 252 274 260 260 268 274Z" fill="#e6f0f8" />
            <circle cx="260" cy="260" r="14" fill="#f2f8fc" opacity="0.9" />
            <circle cx="260" cy="260" r="14" fill="none" stroke="url(#gold)" strokeWidth="2" />
            <circle cx="260" cy="260" r="4" fill="#0b2b52" />
            <circle cx="260" cy="110" r="7" fill="#e8b04b" filter="url(#soft)" opacity="0.55" />
            <circle cx="260" cy="110" r="4" fill="#f8e6bd" />
          </g>

          {bearings.map((bearing, index) => {
            const angle = (index * 90 - 90) * (Math.PI / 180);
            const x = 260 + Math.cos(angle) * 224;
            const y = 260 + Math.sin(angle) * 224;
            const isActive = index === active;
            return (
              <g key={bearing.id}>
                <circle
                  cx={x}
                  cy={y}
                  r={isActive ? 11 : 8}
                  fill={isActive ? '#e8b04b' : '#9fd2ee'}
                  opacity={isActive ? 1 : 0.85}
                />
                <circle
                  cx={x}
                  cy={y}
                  r={isActive ? 18 : 13}
                  fill="none"
                  stroke={isActive ? '#f6d99a' : '#ffffff'}
                  strokeWidth="1"
                  opacity={isActive ? 0.8 : 0.35}
                />
              </g>
            );
          })}
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
            'group absolute z-10 flex max-w-[7.5rem] flex-col items-center gap-0.5 rounded-xl border border-white/70 bg-white/85 px-2 py-1.5 text-center shadow-[0_14px_30px_-22px_rgba(6,26,52,0.9)] backdrop-blur-md transition-transform hover:-translate-y-0.5 focus-visible:-translate-y-0.5 sm:max-w-[10.5rem] sm:gap-1 sm:px-3 sm:py-2',
            positions[index],
            active === index && 'border-gold/70 bg-white/90'
          )}
        >
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
