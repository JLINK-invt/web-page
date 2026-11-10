'use client';

import type { DomainId } from '@/types/content';
import { unitThemes } from '@/content/unitThemes';

type VisualType = 'orbits' | 'waves' | 'grid';

interface ProductIllustrationProps {
  domain: DomainId;
  visual: VisualType;
  className?: string;
}

function DomoticsOrbits({ primary, shade }: { primary: string; shade: string }) {
  return (
    <svg viewBox="0 0 90 90" aria-hidden="true" className="h-full w-full">
      <defs>
        <radialGradient id="orbits-gloss" cx="30%" cy="30%" r="70%">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="0.6" />
          <stop offset="45%" stopColor={primary} stopOpacity="1" />
          <stop offset="100%" stopColor={shade} stopOpacity="1" />
        </radialGradient>
      </defs>
      <circle cx="45" cy="45" r="45" fill="url(#orbits-gloss)" />
      <g stroke="none" strokeWidth="1.5" fill="none" opacity="0.7">
        <circle cx="45" cy="45" r="32" />
        <circle cx="45" cy="45" r="22" />
        <circle cx="45" cy="45" r="12" />
      </g>
      <g stroke="#2a5db0" strokeWidth="2" fill="none" opacity="0.9">
        <path d="M45 15v8M45 67v8M15 45h8M67 45h8" />
      </g>
      <circle cx="45" cy="45" r="6" fill="#2a5db0" opacity="0.9" />
      <circle cx="45" cy="45" r="2" fill="#fff" />
    </svg>
  );
}

function IndustrialWaves({ primary, shade }: { primary: string; shade: string }) {
  return (
    <svg viewBox="0 0 90 90" aria-hidden="true" className="h-full w-full">
      <defs>
        <radialGradient id="waves-gloss" cx="30%" cy="30%" r="70%">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="0.6" />
          <stop offset="45%" stopColor={primary} stopOpacity="1" />
          <stop offset="100%" stopColor={shade} stopOpacity="1" />
        </radialGradient>
      </defs>
      <circle cx="45" cy="45" r="45" fill="url(#waves-gloss)" />
      <g stroke="none" strokeWidth="1.5" fill="none" opacity="0.6">
        <path d="M12 68c10-12 24-18 36-18s26 6 36 18" />
        <path d="M12 52c10-10 24-15 36-15s26 5 36 15" />
        <path d="M12 36c10-8 24-12 36-12s26 4 36 12" />
      </g>
      <rect x="18" y="70" width="54" height="8" rx="4" fill="#fff" opacity="0.3" />
    </svg>
  );
}

function MedicalGrid({ primary, shade }: { primary: string; shade: string }) {
  return (
    <svg viewBox="0 0 90 90" aria-hidden="true" className="h-full w-full">
      <defs>
        <radialGradient id="grid-gloss" cx="30%" cy="30%" r="70%">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="0.6" />
          <stop offset="45%" stopColor={primary} stopOpacity="1" />
          <stop offset="100%" stopColor={shade} stopOpacity="1" />
        </radialGradient>
      </defs>
      <circle cx="45" cy="45" r="45" fill="url(#grid-gloss)" />
      <g stroke="none" strokeWidth="1" fill="none" opacity="0.5">
        <rect x="20" y="20" width="50" height="50" rx="2" />
        <line x1="45" y1="20" x2="45" y2="70" />
        <line x1="20" y1="45" x2="70" y2="45" />
      </g>
      <g stroke="#0d9488" strokeWidth="2" fill="none" opacity="0.9">
        <circle cx="45" cy="45" r="18" />
        <path d="M45 33v24M33 45h24" />
      </g>
      <circle cx="45" cy="45" r="4" fill="#0d9488" />
    </svg>
  );
}

export function ProductIllustration({ domain, visual, className }: ProductIllustrationProps) {
  const theme = unitThemes[domain];
  const { primary, shade } = theme;

  const illustrations: Record<VisualType, React.ReactNode> = {
    orbits: <DomoticsOrbits primary={primary} shade={shade} />,
    waves: <IndustrialWaves primary={primary} shade={shade} />,
    grid: <MedicalGrid primary={primary} shade={shade} />,
  };

  return (
    <div
      className={`product-orb ${className || ''}`}
      style={{ '--orb-primary': primary, '--orb-shade': shade } as React.CSSProperties}
      aria-hidden="true"
    >
      {illustrations[visual]}
    </div>
  );
}
