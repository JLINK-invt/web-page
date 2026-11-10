'use client';

import { cn } from '@/lib/cn';

export type OsdItem = {
  id: string;
  label: string;
};

export function MonitorArt({
  screenTitle,
  osdTitle,
  clock,
  items,
  activeId,
  onSelect,
}: {
  screenTitle: string;
  osdTitle: string;
  clock: string;
  items: OsdItem[];
  activeId: string;
  onSelect: (id: string) => void;
}) {
  return (
    <div className="relative aspect-[4/3] w-full max-w-[440px] shrink-0">
      <svg viewBox="0 0 320 240" aria-hidden="true" className="h-full w-full">
        <defs>
          <linearGradient id="monitor-bezel" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#fbfbfb" />
            <stop offset="45%" stopColor="#dedede" />
            <stop offset="100%" stopColor="#a9a9a9" />
          </linearGradient>
          <linearGradient id="monitor-screen" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#4b86d6" />
            <stop offset="55%" stopColor="#2a5db0" />
            <stop offset="100%" stopColor="#173f7c" />
          </linearGradient>
          <linearGradient id="monitor-streak" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0" />
            <stop offset="50%" stopColor="#ffffff" stopOpacity="0.24" />
            <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
          </linearGradient>
        </defs>

        <rect x="8" y="4" width="304" height="184" rx="12" fill="url(#monitor-bezel)" />
        <rect x="14" y="10" width="292" height="168" rx="8" fill="#cfcfcf" />
        <rect x="18" y="14" width="284" height="160" rx="6" fill="url(#monitor-screen)" />

        <rect x="18" y="14" width="284" height="18" fill="#1b4585" />
        <text x="25" y="26" fill="#ffffff" fontSize="8.5" fontWeight="700">
          {screenTitle}
        </text>
        <text x="295" y="26" fill="#cfe2fa" fontSize="8" textAnchor="end">
          {clock}
        </text>
        <rect x="278" y="18" width="5" height="6" rx="1" fill="#ffffff" opacity="0.55" />
        <rect x="286" y="18" width="5" height="6" rx="1" fill="#ffffff" opacity="0.4" />
        <rect x="294" y="18" width="5" height="6" rx="1" fill="#ffffff" opacity="0.3" />

        <rect x="18" y="14" width="284" height="160" rx="6" fill="url(#monitor-streak)" />
        <path d="M18 14 L80 14 L30 174 L18 174 Z" fill="#ffffff" opacity="0.07" />

        <rect
          x="148"
          y="188"
          width="24"
          height="16"
          rx="2"
          fill="url(#monitor-bezel)"
          stroke="#9a9a9a"
        />
        <path d="M132 204h56l16 10h-88z" fill="url(#monitor-bezel)" stroke="#9a9a9a" />
      </svg>

      <div
        role="group"
        aria-label={osdTitle}
        className="win-osd absolute hidden overflow-y-auto rounded-sm text-[11px] sm:block"
        style={{ left: '8%', top: '17%', width: '38%', maxHeight: '62%' }}
      >
        <div className="sticky top-0 flex items-center justify-between border-b border-white/15 bg-[#26426c] px-2 py-[3px] text-[11px] tracking-[0.12em] text-white/85 uppercase">
          <span>{osdTitle}</span>
          <span className="tabular-nums">{clock}</span>
        </div>
        <div className="py-[2px]">
          {items
            .filter((item) =>
              ['domotics', 'industrial', 'agriculture', 'medical'].includes(item.id)
            )
            .map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => onSelect(item.id)}
                aria-current={activeId === item.id ? 'true' : undefined}
                className={cn('win-osd-item', activeId === item.id && 'is-active')}
              >
                {item.label}
              </button>
            ))}
        </div>
      </div>
    </div>
  );
}
