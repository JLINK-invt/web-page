import { site } from '@/content/site';
import { cn } from '@/lib/cn';

export function CompassVisual({ className }: { className?: string }) {
  return (
    <div className={cn('w-full', className)}>
      <div
        className="border-line relative aspect-square w-full overflow-hidden rounded-full border"
        style={{
          background: 'radial-gradient(circle at center, var(--color-paper), var(--color-sand))',
        }}
      >
        <svg viewBox="0 0 400 400" aria-hidden="true" className="h-full w-full">
          <g className="text-line" stroke="currentColor" fill="none">
            <circle cx="200" cy="200" r="150" strokeWidth="1" />
            <circle cx="200" cy="200" r="110" strokeWidth="1" />
            <circle cx="200" cy="200" r="70" strokeWidth="1" />
            <path d="M200 10v380M10 200h380" strokeWidth="0.75" strokeDasharray="2 6" />
          </g>

          <g className="orbit-slow text-ink/25" stroke="currentColor" fill="none">
            <circle cx="200" cy="200" r="170" strokeWidth="1" strokeDasharray="1 10" />
            <circle cx="200" cy="30" r="3" fill="currentColor" stroke="none" />
          </g>

          <path d="M265 120 218 218 120 265 167 167Z" className="text-brass" fill="currentColor" />
          <circle
            cx="200"
            cy="200"
            r="9"
            fill="var(--color-paper)"
            stroke="currentColor"
            strokeWidth="2"
          />
          <circle cx="200" cy="200" r="3" fill="currentColor" />

          <g className="text-muted" fill="currentColor">
            <text
              x="200"
              y="36"
              textAnchor="middle"
              fontSize="10"
              fontFamily="monospace"
              letterSpacing="4"
            >
              N
            </text>
            <text
              x="200"
              y="376"
              textAnchor="middle"
              fontSize="10"
              fontFamily="monospace"
              letterSpacing="4"
            >
              S
            </text>
            <text
              x="364"
              y="204"
              textAnchor="middle"
              fontSize="10"
              fontFamily="monospace"
              letterSpacing="4"
            >
              E
            </text>
            <text
              x="36"
              y="204"
              textAnchor="middle"
              fontSize="10"
              fontFamily="monospace"
              letterSpacing="4"
            >
              W
            </text>
          </g>
        </svg>
      </div>

      <div className="text-muted mt-3 flex items-center justify-between px-1 text-[10px] tracking-[0.2em] uppercase">
        <span>{site.name}</span>
        <span>Est. {site.established}</span>
      </div>
    </div>
  );
}
