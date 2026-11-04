import type { SectorSceneName } from './SectorScene';
import { SectorScene } from './SectorScene';
import { cn } from '@/lib/cn';

interface ScreenshotFrameProps {
  scene: SectorSceneName;
  title?: string;
  className?: string;
  aspectRatio?: string;
}

export function ScreenshotFrame({
  scene,
  title = 'Screenshot',
  className,
  aspectRatio = '4/3',
}: ScreenshotFrameProps) {
  return (
    <div className={cn('screenshot-frame', className)} style={{ aspectRatio }}>
      <div className="window-titlebar">
        <div className="window-titlebar-controls">
          <span className="window-btn window-btn-close" aria-label="Close" />
          <span className="window-btn window-btn-minimize" aria-label="Minimize" />
          <span className="window-btn window-btn-maximize" aria-label="Maximize" />
        </div>
        <div className="window-title">
          <span className="window-title-text">{title}</span>
        </div>
        <div style={{ width: '45px' }} aria-hidden="true" />
      </div>
      <div className="bg-[{colors.ink}] relative" style={{ aspectRatio: '4/3' }}>
        <SectorScene name={scene} className="h-full w-full" />
        <span
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 top-0 h-1/3 bg-gradient-to-b from-white/22 to-transparent"
        />
      </div>
      <div className="window-statusbar">
        <span className="status-indicator" aria-label="Running" />
        <span className="text-muted/60 font-mono text-[10px]">{title}</span>
        <div className="status-controls">
          <span className="status-control" aria-hidden="true" />
          <span className="status-control" aria-hidden="true" />
          <span className="status-control gold" aria-hidden="true" />
        </div>
      </div>
    </div>
  );
}
