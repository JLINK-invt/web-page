export function LiveProductArt() {
  return (
    <svg viewBox="0 0 130 96" aria-hidden="true" className="h-full w-full">
      <defs>
        <linearGradient id="live-screen" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#7fb2ef" />
          <stop offset="100%" stopColor="#2a5db0" />
        </linearGradient>
        <linearGradient id="live-shell" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="100%" stopColor="#c4c4c4" />
        </linearGradient>
      </defs>
      <g transform="rotate(-8 65 48)">
        <rect
          x="20"
          y="12"
          width="90"
          height="62"
          rx="5"
          fill="url(#live-shell)"
          stroke="#9d9d9d"
        />
        <rect x="26" y="18" width="78" height="50" rx="2" fill="url(#live-screen)" />
        <rect x="26" y="18" width="78" height="9" fill="#1b4585" />
        <rect x="32" y="32" width="30" height="7" rx="2" fill="#ffffff" opacity="0.55" />
        <rect x="32" y="43" width="44" height="5" rx="2" fill="#ffffff" opacity="0.35" />
        <rect x="32" y="52" width="24" height="5" rx="2" fill="#ffffff" opacity="0.35" />
        <circle cx="94" cy="34" r="5" fill="#ffffff" opacity="0.4" />
        <rect x="58" y="74" width="14" height="8" fill="url(#live-shell)" stroke="#9d9d9d" />
        <rect x="44" y="82" width="42" height="6" rx="3" fill="url(#live-shell)" stroke="#9d9d9d" />
      </g>
    </svg>
  );
}

export function ExplorationArt() {
  return (
    <svg viewBox="0 0 130 96" aria-hidden="true" className="h-full w-full">
      <rect x="6" y="26" width="118" height="48" rx="3" fill="#ffffff" stroke="#d8d8d8" />
      <path d="M14 26h102" stroke="#e0e0e0" />
      <g fill="none" stroke="#4c8fd6" strokeWidth="2" strokeLinecap="round">
        <path d="M30 62V44m0 0c0-6 4-10 10-10 0 6-4 10-10 10zm0 6c0-5-4-8-9-8 0 5 3 8 9 8z" />
        <path d="M63 64V44h-6l6-6 6 6h-6v20zM57 52h12" />
        <path d="M92 62V46m8 16V46m-12 0h16" />
      </g>
      <circle cx="92" cy="38" r="3" fill="none" stroke="#c79a33" strokeWidth="2" />
    </svg>
  );
}

export function MethodArt() {
  return (
    <svg viewBox="0 0 130 96" aria-hidden="true" className="h-full w-full">
      <defs>
        <radialGradient id="method-face" cx="36%" cy="30%" r="80%">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="100%" stopColor="#d9e6f5" />
        </radialGradient>
      </defs>
      <circle cx="65" cy="48" r="34" fill="url(#method-face)" stroke="#9fb3c8" strokeWidth="2" />
      <circle cx="65" cy="48" r="26" fill="none" stroke="#c3d3e2" />
      <g stroke="#8fa4b8" strokeWidth="1.4" strokeLinecap="round">
        <path d="M65 20v6M65 70v6M37 48h6M87 48h6" />
        <path d="m45 28 4 4M81 64l4 4M45 68l4-4M81 32l4-4" />
      </g>
      <path d="M65 26 71 48 65 53 59 48Z" fill="#c0562f" />
      <path d="M65 70 59 48 65 43 71 48Z" fill="#8fa4b8" />
      <circle cx="65" cy="48" r="3.4" fill="#4b647c" />
    </svg>
  );
}
