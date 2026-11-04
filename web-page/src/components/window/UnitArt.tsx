export function UnitArt({ domainId }: { domainId: string }) {
  if (domainId === 'domotics') {
    return (
      <svg viewBox="0 0 200 200" aria-hidden="true" className="h-full w-full">
        <rect x="14" y="14" width="172" height="172" rx="4" fill="#eaf1fa" stroke="#c9d8e8" />
        <path d="M40 108 100 56l60 52v52H40z" fill="#cfe0f2" stroke="#7f9cbb" strokeWidth="2" />
        <path d="M40 108 100 56l60 52" fill="none" stroke="#7f9cbb" strokeWidth="2" />
        <rect
          x="88"
          y="124"
          width="24"
          height="36"
          fill="#ffffff"
          stroke="#7f9cbb"
          strokeWidth="2"
        />
        <rect x="54" y="116" width="20" height="18" fill="#8fc7f5" stroke="#3f79cd" />
        <rect x="126" y="116" width="20" height="18" fill="#8fc7f5" stroke="#3f79cd" />
        <rect
          x="146"
          y="46"
          width="10"
          height="30"
          fill="#c9d8e8"
          stroke="#7f9cbb"
          strokeWidth="2"
        />
        <path
          d="M151 34a14 14 0 0 1 0 22M151 26a24 24 0 0 1 0 38"
          fill="none"
          stroke="#2a5db0"
          strokeWidth="2"
        />
        <circle cx="151" cy="45" r="3" fill="#c0562f" />
      </svg>
    );
  }

  if (domainId === 'industrial') {
    return (
      <svg viewBox="0 0 200 200" aria-hidden="true" className="h-full w-full">
        <rect x="14" y="14" width="172" height="172" rx="4" fill="#f3f1ea" stroke="#d8d3c4" />
        <path
          d="M36 158V96l30 16V96l30 16V76h22v82z"
          fill="#e2ded1"
          stroke="#a8a292"
          strokeWidth="2"
        />
        <rect
          x="118"
          y="76"
          width="22"
          height="82"
          fill="#dcd7c8"
          stroke="#a8a292"
          strokeWidth="2"
        />
        <rect x="124" y="60" width="10" height="18" fill="#c0562f" />
        <g stroke="#7f7a68" strokeWidth="2">
          <path d="M46 116h14M46 132h14M76 116h14M76 132h14" />
        </g>
        <g transform="translate(120 132)">
          <circle r="24" fill="#ffffff" stroke="#2a5db0" strokeWidth="2" />
          <circle r="9" fill="none" stroke="#2a5db0" strokeWidth="2" />
          <path
            d="M0 -24v6M0 18v6M-24 0h6M18 0h6M-17 -17l4 4M13 13l4 4M17 -17l-4 4M-13 13l-4 4"
            stroke="#2a5db0"
            strokeWidth="2"
          />
        </g>
      </svg>
    );
  }

  if (domainId === 'agriculture') {
    return (
      <svg viewBox="0 0 200 200" aria-hidden="true" className="h-full w-full">
        <rect x="14" y="14" width="172" height="172" rx="4" fill="#eef7ea" stroke="#c9dcbe" />
        <circle cx="148" cy="52" r="18" fill="#f6df9c" stroke="#d8b453" strokeWidth="2" />
        <g stroke="#9dc48c" strokeWidth="2">
          <path d="M28 168c14-22 30-22 44 0M66 168c14-22 30-22 44 0M104 168c14-22 30-22 44 0" />
        </g>
        <path d="M28 168h144" stroke="#6f9f5c" strokeWidth="3" />
        <g transform="translate(96 96)">
          <path d="M0 56V0" stroke="#3f7a35" strokeWidth="5" />
          <path
            d="M0 18C0 2-18-8-34-8c0 20 12 26 34 26z"
            fill="#7cc06a"
            stroke="#3f7a35"
            strokeWidth="2"
          />
          <path
            d="M0 30c0-16 18-26 34-26 0 20-12 26-34 26z"
            fill="#9ed489"
            stroke="#3f7a35"
            strokeWidth="2"
          />
        </g>
        <rect
          x="36"
          y="52"
          width="34"
          height="26"
          fill="#ffffff"
          stroke="#a8bfa0"
          strokeWidth="2"
        />
        <path d="M42 66h22M42 72h14" stroke="#6f9f5c" strokeWidth="2" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 200 200" aria-hidden="true" className="h-full w-full">
      <rect x="14" y="14" width="172" height="172" rx="4" fill="#fdeeee" stroke="#e2c6c2" />
      <rect
        x="52"
        y="40"
        width="96"
        height="120"
        rx="4"
        fill="#ffffff"
        stroke="#c98f86"
        strokeWidth="2"
      />
      <rect x="64" y="54" width="72" height="24" fill="#fbe3e0" stroke="#c98f86" strokeWidth="2" />
      <path d="M100 84v20M90 94h20" stroke="#c0562f" strokeWidth="7" strokeLinecap="round" />
      <g stroke="#c98f86" strokeWidth="2">
        <path d="M68 122h64M68 134h64M68 146h40" />
      </g>
      <path d="M36 160h128" stroke="#c98f86" strokeWidth="3" />
    </svg>
  );
}
