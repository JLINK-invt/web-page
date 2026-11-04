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
  productRows,
}: {
  screenTitle: string;
  osdTitle: string;
  clock: string;
  items: OsdItem[];
  activeId: string;
  onSelect: (id: string) => void;
  productRows: { label: string; status: string }[];
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

        <rect
          x="12"
          y="6"
          width="296"
          height="176"
          rx="7"
          fill="url(#monitor-bezel)"
          stroke="#8d8d8d"
        />
        <rect x="17" y="11" width="286" height="166" rx="4" fill="#cfcfcf" stroke="#e8e8e8" />
        <rect x="21" y="15" width="278" height="158" rx="2" fill="url(#monitor-screen)" />

        <rect x="21" y="15" width="278" height="17" fill="#1b4585" />
        <text x="28" y="27" fill="#ffffff" fontSize="8.5" fontWeight="700">
          {screenTitle}
        </text>
        <text x="252" y="27" fill="#cfe2fa" fontSize="8" textAnchor="end">
          {clock}
        </text>
        <rect x="258" y="20" width="5" height="6" rx="1" fill="#ffffff" opacity="0.55" />
        <rect x="266" y="20" width="5" height="6" rx="1" fill="#ffffff" opacity="0.4" />
        <rect x="274" y="20" width="5" height="6" rx="1" fill="#ffffff" opacity="0.3" />

        {productRows.map((row, index) => {
          const y = 46 + index * 27;
          return (
            <g key={row.label}>
              <rect x="152" y={y} width="140" height="21" rx="2" fill="#ffffff" opacity="0.16" />
              <rect x="157" y={y + 5} width="11" height="11" rx="2" fill="#ffffff" opacity="0.55" />
              <text x="173" y={y + 13.5} fill="#ffffff" fontSize="8.2">
                {row.label}
              </text>
              <circle cx="284" cy={y + 10.5} r="3" fill="#7fd07f" />
            </g>
          );
        })}

        <rect x="21" y="15" width="278" height="158" rx="2" fill="url(#monitor-streak)" />
        <path d="M21 15 L120 15 L40 173 L21 173 Z" fill="#ffffff" opacity="0.07" />

        <rect
          x="148"
          y="182"
          width="24"
          height="16"
          rx="2"
          fill="url(#monitor-bezel)"
          stroke="#9a9a9a"
        />
        <path d="M132 198h56l16 10h-88z" fill="url(#monitor-bezel)" stroke="#9a9a9a" />
      </svg>

      <div
        role="group"
        aria-label={osdTitle}
        className="win-osd absolute hidden overflow-y-auto rounded-[3px] text-[11px] sm:block"
        style={{ left: '8%', top: '21%', width: '38%', maxHeight: '51%' }}
      >
        <div className="sticky top-0 flex items-center justify-between border-b border-white/15 bg-[#26426c] px-2 py-[3px] text-[11px] tracking-[0.12em] text-white/85 uppercase">
          <span>{osdTitle}</span>
          <span className="tabular-nums">{clock}</span>
        </div>
        <div className="py-[2px]">
          {items.map((item) => (
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
