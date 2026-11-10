import type { ProjectVisual as ProjectVisualName } from '@/types/content';
import { cn } from '@/lib/cn';
import { SectorScene, type SectorSceneName } from './SectorScene';

const SCENES: Record<ProjectVisualName, SectorSceneName> = {
  orbits: 'house',
  waves: 'gym',
  grid: 'clinic',
};

interface ProductWindowProps {
  variant: ProjectVisualName;
  title?: string;
  className?: string;
  depth?: 'glass' | 'skeuo';
}

export function ProductWindow({ variant, title, className, depth = 'skeuo' }: ProductWindowProps) {
  const scene = SCENES[variant];
  const skeuo = depth === 'skeuo';
  const label = title || 'PRODUCT_WINDOW';

  return (
    <div className={cn('relative', className)}>
      {skeuo ? (
        <span
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-5 -bottom-3 h-5 rounded-[50%] bg-[radial-gradient(ellipse,rgba(5,26,51,0.34),rgba(5,26,51,0)_72%)] blur-[1px]"
        />
      ) : null}

      <div className={cn('window-frame', className)}>
        <div className="relative overflow-hidden">
          <div className="window-titlebar">
            <div style={{ width: '50px' }} aria-hidden="true" />
            <div className="window-title">
              <span className="window-title-text">{label}</span>
            </div>
            <div className="window-titlebar-controls">
              <span className="window-btn window-btn-minimize" aria-label="Minimize" />
              <span className="window-btn window-btn-maximize" aria-label="Maximize" />
              <span className="window-btn window-btn-close" aria-label="Close" />
            </div>
          </div>

          <div className="bg-ink relative">
            <div className="relative aspect-[4/3] overflow-hidden">
              <SectorScene name={scene} className="h-full w-full" />
              <span
                aria-hidden="true"
                className="pointer-events-none absolute inset-x-0 top-0 h-1/3 bg-gradient-to-b from-white/22 to-transparent"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
