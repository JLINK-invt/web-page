import type { ProjectVisual as ProjectVisualName } from '@/types/content';
import { cn } from '@/lib/cn';
import { SectorScene, type SectorSceneName } from './SectorScene';

const SCENES: Record<ProjectVisualName, SectorSceneName> = {
  orbits: 'house',
  waves: 'gym',
  grid: 'clinic',
};

function Rivet({ className }: { className?: string }) {
  return (
    <span
      aria-hidden="true"
      className={cn(
        'pointer-events-none absolute z-30 h-[7px] w-[7px] rounded-full',
        'bg-[radial-gradient(circle_at_32%_28%,#ffffff_0%,#e4f1fa_38%,#9dbdd4_70%,#5d84a6_100%)]',
        'shadow-[inset_0_1px_0_rgba(255,255,255,0.9),0_1px_1px_rgba(5,26,51,0.45)]',
        className
      )}
    />
  );
}

export function ProductWindow({
  variant,
  className,
  depth = 'skeuo',
}: {
  variant: ProjectVisualName;
  className?: string;
  depth?: 'glass' | 'skeuo';
}) {
  const scene = SCENES[variant];
  const skeuo = depth === 'skeuo';

  return (
    <div className={cn('relative', className)}>
      {skeuo ? (
        <span
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-5 -bottom-3 h-5 rounded-[50%] bg-[radial-gradient(ellipse,rgba(5,26,51,0.34),rgba(5,26,51,0)_72%)] blur-[1px]"
        />
      ) : null}

      <div
        className={cn(
          'relative rounded-[20px] p-[5px]',
          skeuo ? 'chrome-frame-deep' : 'chrome-frame'
        )}
      >
        {skeuo ? (
          <>
            <Rivet className="top-[9px] left-[9px]" />
            <Rivet className="top-[9px] right-[9px]" />
            <Rivet className="bottom-[9px] left-[9px]" />
            <Rivet className="right-[9px] bottom-[9px]" />
          </>
        ) : null}

        <div className="relative overflow-hidden rounded-[14px] border border-[#7fa6c6]/35 bg-[#0a2342] shadow-[inset_0_2px_8px_rgba(5,26,51,0.5)]">
          <div className="flex items-center gap-2 bg-[linear-gradient(180deg,#ffffff_0%,#e9f3fa_52%,#c2d9e9_100%)] px-3 py-[7px] shadow-[inset_0_1px_0_rgba(255,255,255,1),0_1px_2px_rgba(5,26,51,0.24)]">
            <span className="h-[9px] w-[9px] rounded-full bg-[#2b7fbe] shadow-[inset_0_1px_0_rgba(255,255,255,0.7),0_1px_2px_rgba(23,33,43,0.35)]" />
            <span className="h-[9px] w-[9px] rounded-full bg-[#e0b85a] shadow-[inset_0_1px_0_rgba(255,255,255,0.7),0_1px_2px_rgba(23,33,43,0.35)]" />
            <span className="h-[9px] w-[9px] rounded-full bg-[#9dbdd4] shadow-[inset_0_1px_0_rgba(255,255,255,0.7),0_1px_2px_rgba(23,33,43,0.35)]" />
            <span className="mx-auto flex h-[15px] w-[38%] items-center justify-center rounded-full bg-[linear-gradient(180deg,#fbfdff,#dcebf6)] shadow-[inset_0_1px_0_rgba(255,255,255,1),inset_0_-1px_2px_rgba(23,33,43,0.18)]">
              <span className="block h-[2px] w-10 rounded-full bg-[#1769aa]/45" />
            </span>
          </div>

          <div className="relative bg-[#e9f3fa] p-2">
            <div className="relative aspect-[4/3] overflow-hidden rounded-[9px] border border-[#7fa6c6]/45 shadow-[inset_0_1px_0_rgba(255,255,255,0.8),inset_0_-6px_16px_rgba(5,26,51,0.14)]">
              <SectorScene name={scene} className="h-full w-full rounded-none" />
              <span
                aria-hidden="true"
                className="pointer-events-none absolute inset-x-0 top-0 h-1/3 bg-gradient-to-b from-white/22 to-transparent"
              />
            </div>
          </div>

          <div className="flex items-center gap-2 border-t border-[#7fa6c6]/25 bg-[linear-gradient(180deg,#eef6fc,#cfe1ef)] px-3 py-[7px] shadow-[inset_0_1px_0_rgba(255,255,255,0.95)]">
            <span className="h-2 w-2 rounded-full bg-[#3f9c8f] shadow-[0_0_0_2px_rgba(63,156,143,0.2)]" />
            <span className="bg-ink/25 h-1.5 w-14 rounded-full" />
            <span className="ml-auto flex items-center gap-1.5">
              <span className="h-3.5 w-3.5 rounded-full bg-[radial-gradient(circle_at_35%_30%,#ffffff,#dcebf6_62%,#93b1c8)] shadow-[inset_0_1px_0_rgba(255,255,255,1),0_1px_2px_rgba(5,26,51,0.28)]" />
              <span className="h-3.5 w-3.5 rounded-full bg-[radial-gradient(circle_at_35%_30%,#ffffff,#dcebf6_62%,#93b1c8)] shadow-[inset_0_1px_0_rgba(255,255,255,1),0_1px_2px_rgba(5,26,51,0.28)]" />
              <span className="h-3.5 w-3.5 rounded-full bg-[radial-gradient(circle_at_35%_30%,#ffeab6,#e0b85a_62%,#a9781f)] shadow-[inset_0_1px_0_rgba(255,255,255,1),0_1px_2px_rgba(5,26,51,0.28)]" />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
