import type { ProjectVisual as ProjectVisualName } from '@/types/content';
import { cn } from '@/lib/cn';
import { SectorScene, type SectorSceneName } from './SectorScene';
import { BoxShot, type BoxShotName } from './BoxShot';

const PROJECT_TO_BOX_SHOT: Record<ProjectVisualName, BoxShotName> = {
  orbits: 'smart-house',
  waves: 'fitness-gym',
  grid: 'health-psychology',
};

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
        'aero-rivet pointer-events-none absolute z-30 h-[7px] w-[7px] rounded-full',
        className
      )}
    />
  );
}

interface ProductWindowProps {
  variant: ProjectVisualName;
  className?: string;
  depth?: 'glass' | 'skeuo';
  showBoxShot?: boolean;
  boxShotName?: BoxShotName;
}

export function ProductWindow({
  variant,
  className,
  depth = 'skeuo',
  showBoxShot = false,
  boxShotName,
}: ProductWindowProps) {
  const scene = SCENES[variant];
  const boxShot = boxShotName || PROJECT_TO_BOX_SHOT[variant];
  const skeuo = depth === 'skeuo';

  return (
    <div className={cn('relative', className)}>
      {skeuo ? (
        <span
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-5 -bottom-3 h-5 rounded-[50%] bg-[radial-gradient(ellipse,rgba(5,26,51,0.34),rgba(5,26,51,0)_72%)] blur-[1px]"
        />
      ) : null}

      <div className={cn('window-frame', skeuo ? '' : '', className)}>
        <Rivet className="top-[9px] left-[9px]" />
        <Rivet className="top-[9px] right-[9px]" />
        <Rivet className="bottom-[9px] left-[9px]" />
        <Rivet className="right-[9px] bottom-[9px]" />

        <div className="relative overflow-hidden rounded-[16px]">
          <div className="window-titlebar">
            <div className="window-titlebar-controls">
              <span className="window-btn window-btn-close" aria-label="Close" />
              <span className="window-btn window-btn-minimize" aria-label="Minimize" />
              <span className="window-btn window-btn-maximize" aria-label="Maximize" />
            </div>
            <div className="window-title">
              <span className="window-title-text">
                {showBoxShot ? boxShot.replace('-', '_').toUpperCase() + '.EXE' : 'PRODUCT_WINDOW'}
              </span>
            </div>
            <div style={{ width: '38%', minWidth: '120px' }} aria-hidden="true" />
          </div>

          <div className="bg-ink relative">
            {showBoxShot ? (
              <BoxShot name={boxShot} className="h-full w-full" />
            ) : (
              <>
                <div className="relative aspect-[4/3] overflow-hidden">
                  <SectorScene name={scene} className="h-full w-full" />
                  <span
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-x-0 top-0 h-1/3 bg-gradient-to-b from-white/22 to-transparent"
                  />
                </div>
              </>
            )}

            <div className="window-statusbar">
              <span className="status-indicator" aria-label="Running" />
              <span className="text-muted/60 font-mono text-[10px]">
                {showBoxShot ? boxShot.replace('-', '_').toUpperCase() : 'PRODUCT_WINDOW'}
              </span>
              <div className="status-controls">
                <span className="status-control" aria-hidden="true" />
                <span className="status-control" aria-hidden="true" />
                <span className="status-control gold" aria-hidden="true" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
