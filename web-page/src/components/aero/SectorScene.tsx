import type { ReactElement, ReactNode } from 'react';
import { cn } from '@/lib/cn';

export type SectorSceneName = 'house' | 'gym' | 'clinic' | 'agro' | 'industry' | 'lab';

const C = {
  paper: '#eaf5fc',
  sand: '#cfe3f2',
  sandDark: '#b3cde0',
  cream: '#ffffff',
  ink: '#0a2342',
  inkSoft: '#3d5d7a',
  line: '#7f9bb3',
  blue: '#1f7fc0',
  blueSoft: '#9dd6f2',
  bluePale: '#dff1fb',
  brass: '#a9781f',
  gold: '#e0b85a',
  green: '#3f9c8f',
  greenSoft: '#b2e0d8',
  red: '#c06a58',
  white: '#ffffff',
};

function Scene({ children, tint = C.paper }: { children: ReactNode; tint?: string }) {
  return (
    <svg viewBox="0 0 400 300" role="img" aria-hidden="true" className="h-full w-full">
      <rect width="400" height="300" fill={tint} />
      {children}
      <rect x="1" y="1" width="398" height="298" fill="none" stroke={C.ink} strokeOpacity="0.08" />
    </svg>
  );
}

function Wifi({ x, y, color = C.brass }: { x: number; y: number; color?: string }) {
  return (
    <g fill="none" stroke={color} strokeWidth="2.4" strokeLinecap="round">
      <path d={`M${x - 13} ${y - 4}a18 18 0 0 1 26 0`} opacity="0.4" />
      <path d={`M${x - 7} ${y + 1}a9 9 0 0 1 14 0`} opacity="0.7" />
      <circle cx={x} cy={y + 6} r="2" fill={color} stroke="none" />
    </g>
  );
}

function HouseScene() {
  return (
    <Scene>
      <path d="M0 238h400v62H0z" fill={C.sand} />
      <path d="M0 238h400" stroke={C.line} strokeWidth="1.5" opacity="0.5" />
      <path d="M70 122 200 54l130 68" fill={C.ink} />
      <path d="M78 121 200 58l122 63" fill="none" stroke={C.cream} strokeWidth="2" opacity="0.25" />
      <rect x="286" y="70" width="18" height="34" fill={C.inkSoft} />
      <rect x="80" y="118" width="240" height="124" fill={C.cream} stroke={C.ink} strokeWidth="3" />
      <path d="M80 180h240M196 118v124" stroke={C.ink} strokeWidth="2" opacity="0.35" />
      <rect x="250" y="192" width="34" height="50" fill={C.blue} stroke={C.ink} strokeWidth="2" />
      <circle cx="277" cy="218" r="2.5" fill={C.gold} />

      <rect
        x="101"
        y="138"
        width="46"
        height="32"
        fill={C.bluePale}
        stroke={C.ink}
        strokeWidth="2"
      />
      <path d="M124 138v32M101 154h46" stroke={C.ink} strokeWidth="2" opacity="0.5" />

      <rect x="214" y="136" width="60" height="9" rx="2" fill={C.sandDark} />
      <rect x="216" y="145" width="10" height="26" fill={C.inkSoft} />
      <rect x="262" y="145" width="10" height="26" fill={C.inkSoft} />
      <rect
        x="222"
        y="130"
        width="44"
        height="7"
        rx="2"
        fill={C.cream}
        stroke={C.ink}
        strokeWidth="2"
      />

      <rect
        x="102"
        y="192"
        width="64"
        height="28"
        rx="3"
        fill={C.blueSoft}
        stroke={C.ink}
        strokeWidth="2"
      />
      <rect
        x="107"
        y="184"
        width="20"
        height="14"
        rx="2"
        fill={C.blueSoft}
        stroke={C.ink}
        strokeWidth="2"
      />
      <rect
        x="130"
        y="184"
        width="20"
        height="14"
        rx="2"
        fill={C.blueSoft}
        stroke={C.ink}
        strokeWidth="2"
      />
      <path d="M110 220v12M158 220v12" stroke={C.ink} strokeWidth="3" />

      <path d="M186 222h-18v-22h10" fill="none" stroke={C.ink} strokeWidth="2" />
      <path d="M176 200h-7" stroke={C.ink} strokeWidth="2" />
      <circle cx="186" cy="222" r="2" fill={C.brass} />
      <Wifi x={177} y={180} />

      <g>
        <path d="M286 150c0-12 8-20 18-20s18 8 18 20" fill="none" stroke={C.ink} strokeWidth="2" />
        <path d="M296 150v-8h16v8" fill={C.greenSoft} stroke={C.ink} strokeWidth="2" />
        <path d="M304 142v-14M304 130l8 5" stroke={C.green} strokeWidth="2.4" />
      </g>

      <g fill={C.gold} stroke={C.brass} strokeWidth="1.5">
        <circle cx="198" cy="256" r="4" />
        <circle cx="346" cy="252" r="3" />
      </g>
      <path
        d="M40 252c8-10 20-14 32-10M40 262c14-8 28-8 42 0"
        fill="none"
        stroke={C.green}
        strokeWidth="2"
        opacity="0.55"
      />
    </Scene>
  );
}

function GymScene() {
  return (
    <Scene tint="#e6f3fc">
      <path d="M0 226h400v74H0z" fill={C.sand} />
      <path d="M0 226h400M0 258h400M0 286h400" stroke={C.line} strokeWidth="1" opacity="0.4" />

      <g>
        <rect x="42" y="84" width="14" height="142" fill={C.ink} />
        <rect x="120" y="84" width="14" height="142" fill={C.ink} />
        <rect x="42" y="84" width="92" height="10" fill={C.inkSoft} />
        <rect x="52" y="94" width="8" height="14" fill={C.brass} />
        <rect x="116" y="94" width="8" height="14" fill={C.brass} />
        <rect x="58" y="112" width="56" height="6" rx="3" fill={C.blue} />
        <rect x="64" y="132" width="44" height="6" rx="3" fill={C.blue} />
        <rect x="54" y="152" width="64" height="6" rx="3" fill={C.blue} />
        <path d="M70 198v28M110 198v28" stroke={C.inkSoft} strokeWidth="3" />
        <circle cx="70" cy="198" r="4" fill={C.ink} />
        <circle cx="110" cy="198" r="4" fill={C.ink} />
      </g>

      <g>
        <rect
          x="168"
          y="196"
          width="92"
          height="12"
          rx="3"
          fill={C.blueSoft}
          stroke={C.ink}
          strokeWidth="2"
        />
        <rect
          x="176"
          y="182"
          width="76"
          height="14"
          rx="4"
          fill={C.cream}
          stroke={C.ink}
          strokeWidth="2"
        />
        <path d="M184 208v26M244 208v26" stroke={C.ink} strokeWidth="3" />
        <path d="M154 180h120" stroke={C.ink} strokeWidth="3" />
        <rect x="146" y="174" width="10" height="16" rx="2" fill={C.ink} />
        <rect x="272" y="174" width="10" height="16" rx="2" fill={C.ink} />
        <rect x="136" y="170" width="8" height="24" rx="2" fill={C.brass} />
        <rect x="284" y="170" width="8" height="24" rx="2" fill={C.brass} />
      </g>

      <g>
        <rect
          x="310"
          y="128"
          width="56"
          height="98"
          rx="4"
          fill={C.inkSoft}
          stroke={C.ink}
          strokeWidth="2"
        />
        <rect
          x="318"
          y="138"
          width="40"
          height="26"
          rx="2"
          fill={C.bluePale}
          stroke={C.ink}
          strokeWidth="1.5"
        />
        <path d="M324 152h10l4-7 5 13 4-8h7" fill="none" stroke={C.blue} strokeWidth="1.8" />
        <rect x="316" y="180" width="44" height="8" rx="4" fill={C.sandDark} />
        <path d="M314 226h48l-6-10h-36z" fill={C.ink} />
      </g>

      <g>
        <rect x="44" y="202" width="26" height="24" rx="2" fill={C.ink} />
        <path d="M44 208h26" stroke={C.brass} strokeWidth="2" />
        <circle cx="57" cy="218" r="2.4" fill={C.green} />
        <path d="M57 202v-42" stroke={C.inkSoft} strokeWidth="4" />
        <path d="M57 160l-30 18M57 160l30 18M57 160v-30" stroke={C.inkSoft} strokeWidth="3" />
      </g>

      <g fill={C.ink}>
        <circle cx="336" cy="86" r="18" fill="none" stroke={C.ink} strokeWidth="3" />
        <path d="M336 68v36M318 86h36" stroke={C.ink} strokeWidth="2" opacity="0.3" />
      </g>
      <path d="M338 92l10 10" stroke={C.brass} strokeWidth="3" />
      <path d="M338 80l-8-10" stroke={C.brass} strokeWidth="3" />

      <g fill={C.inkSoft}>
        <rect x="196" y="58" width="8" height="8" rx="1.5" />
        <rect x="208" y="58" width="8" height="8" rx="1.5" />
        <rect x="196" y="70" width="8" height="8" rx="1.5" />
        <rect x="208" y="70" width="8" height="8" rx="1.5" />
      </g>
    </Scene>
  );
}

function ClinicScene() {
  return (
    <Scene tint="#eaf4fb">
      <path d="M0 232h400v68H0z" fill={C.sand} />
      <path d="M0 232h400" stroke={C.line} strokeWidth="1.5" opacity="0.5" />
      <rect x="292" y="58" width="54" height="38" fill={C.cream} stroke={C.ink} strokeWidth="2" />
      <path d="M304 70h28M304 78h20M304 86h24" stroke={C.inkSoft} strokeWidth="2" opacity="0.5" />
      <path
        d="M316 88c0-8 6-10 10-4 4-6 10-4 10 4 0 6-10 12-10 12s-10-6-10-12z"
        fill={C.red}
        opacity="0.75"
      />

      <g>
        <rect x="46" y="176" width="108" height="8" fill={C.cream} stroke={C.ink} strokeWidth="2" />
        <rect x="54" y="184" width="8" height="48" fill={C.inkSoft} />
        <rect x="138" y="184" width="8" height="48" fill={C.inkSoft} />
        <rect x="66" y="138" width="46" height="34" rx="2" fill={C.ink} />
        <rect x="70" y="142" width="38" height="26" fill={C.bluePale} />
        <path d="M76 156h8l4-8 5 15 4-9h6" fill="none" stroke={C.blue} strokeWidth="1.8" />
        <rect x="86" y="172" width="5" height="6" fill={C.ink} />
        <rect x="122" y="164" width="24" height="6" rx="2" fill={C.sandDark} />
      </g>

      <g>
        <rect
          x="52"
          y="206"
          width="38"
          height="10"
          rx="3"
          fill={C.blueSoft}
          stroke={C.ink}
          strokeWidth="2"
        />
        <path d="M58 216v14M86 216v14" stroke={C.ink} strokeWidth="3" />
        <path d="M88 210c14 0 14-14 28-14" fill="none" stroke={C.ink} strokeWidth="2" />
        <rect x="116" y="188" width="8" height="8" rx="2" fill={C.inkSoft} />
      </g>

      <g>
        <rect
          x="216"
          y="190"
          width="128"
          height="14"
          rx="4"
          fill={C.cream}
          stroke={C.ink}
          strokeWidth="2"
        />
        <rect
          x="224"
          y="168"
          width="112"
          height="22"
          rx="6"
          fill={C.bluePale}
          stroke={C.ink}
          strokeWidth="2"
        />
        <rect
          x="232"
          y="174"
          width="26"
          height="10"
          rx="4"
          fill={C.white}
          stroke={C.line}
          strokeWidth="1.5"
        />
        <path d="M222 204v16M338 204v16M230 220h100" stroke={C.inkSoft} strokeWidth="3" />
        <path d="M214 190v-48" stroke={C.inkSoft} strokeWidth="3" />
        <path d="M214 142h-24" stroke={C.inkSoft} strokeWidth="3" />
        <path d="M182 142a10 10 0 0 1 20 0z" fill={C.gold} stroke={C.ink} strokeWidth="2" />
        <circle cx="192" cy="152" r="2" fill={C.brass} />
      </g>

      <g>
        <rect
          x="356"
          y="146"
          width="26"
          height="86"
          rx="2"
          fill={C.cream}
          stroke={C.ink}
          strokeWidth="2"
        />
        <path d="M356 168h26M356 196h26" stroke={C.line} strokeWidth="2" />
        <circle cx="369" cy="160" r="2" fill={C.brass} />
        <circle cx="369" cy="188" r="2" fill={C.brass} />
      </g>

      <g>
        <path d="M252 248c0-18 12-26 26-26s26 8 26 26" fill="none" stroke={C.ink} strokeWidth="2" />
        <path d="M266 248v-12h24v12" fill={C.greenSoft} stroke={C.ink} strokeWidth="2" />
        <path d="M278 236v-22M278 222l10 6" stroke={C.green} strokeWidth="2.5" />
      </g>

      <path d="M158 76h56M158 86h40" stroke={C.line} strokeWidth="2" opacity="0.6" />
    </Scene>
  );
}

function AgroScene() {
  return (
    <Scene tint="#e4f2ea">
      <circle cx="322" cy="68" r="26" fill={C.gold} stroke={C.brass} strokeWidth="2" />
      <path
        d="M0 190c56-22 94-22 144 0 46-20 92-20 138 0 44-18 84-18 118 0v110H0z"
        fill={C.greenSoft}
        opacity="0.65"
      />
      <path
        d="M0 214c64-18 104-18 158 0 44-16 90-16 132 0 40-14 76-14 110 0v86H0z"
        fill={C.green}
        opacity="0.28"
      />

      <g>
        <path d="M86 176V92h164v84" fill={C.cream} stroke={C.ink} strokeWidth="3" />
        <path d="M86 92 168 58l82 34" fill={C.blueSoft} stroke={C.ink} strokeWidth="3" />
        <path
          d="M100 100v76M132 100v76M196 100v76M228 100v76M86 126h164M86 154h164"
          stroke={C.ink}
          strokeWidth="1.6"
          opacity="0.35"
        />
        <rect
          x="158"
          y="150"
          width="26"
          height="26"
          fill={C.bluePale}
          stroke={C.ink}
          strokeWidth="2"
        />
        <path d="M171 150v26M158 163h26" stroke={C.ink} strokeWidth="1.5" opacity="0.5" />
      </g>

      <g>
        <rect x="298" y="132" width="8" height="92" fill={C.inkSoft} />
        <rect x="288" y="120" width="28" height="18" rx="3" fill={C.ink} />
        <circle cx="302" cy="129" r="2.4" fill={C.gold} />
        <Wifi x={302} y={102} color={C.blue} />
      </g>

      <g stroke={C.ink} strokeWidth="2.4" strokeLinecap="round">
        <path d="M46 246v-30M86 250v-34M126 252v-36M170 250v-34M210 252v-36M250 250v-34M290 252v-36M330 250v-34" />
      </g>
      <g fill={C.green} stroke={C.ink} strokeWidth="1.4">
        <circle cx="46" cy="214" r="7" />
        <circle cx="86" cy="214" r="7" />
        <circle cx="126" cy="214" r="7" />
        <circle cx="170" cy="214" r="7" />
        <circle cx="210" cy="214" r="7" />
        <circle cx="250" cy="214" r="7" />
        <circle cx="290" cy="214" r="7" />
        <circle cx="330" cy="214" r="7" />
      </g>

      <path
        d="M36 78c10-14 26-18 40-10M36 90c16-10 30-10 44 0"
        fill="none"
        stroke={C.green}
        strokeWidth="2"
        opacity="0.5"
      />
    </Scene>
  );
}

function IndustryScene() {
  return (
    <Scene tint="#e8f1f8">
      <path d="M0 226h400v74H0z" fill={C.sand} />
      <path d="M0 226h400" stroke={C.line} strokeWidth="1.5" opacity="0.5" />
      <path
        d="M40 226V126h58l26-30 26 30h54l26-30 26 30h54l26-30 26 30v100z"
        fill={C.inkSoft}
        stroke={C.ink}
        strokeWidth="3"
      />
      <path d="M40 168h330" stroke={C.cream} strokeWidth="2" opacity="0.18" />
      <rect x="276" y="70" width="18" height="56" fill={C.ink} />
      <path
        d="M282 60c0-8 6-14 14-14M290 60h10v10h-10z"
        fill={C.cream}
        stroke={C.ink}
        strokeWidth="2"
        opacity="0.6"
      />

      <g>
        <rect x="62" y="188" width="18" height="38" fill={C.ink} />
        <rect x="86" y="184" width="18" height="42" fill={C.ink} />
        <rect x="110" y="190" width="18" height="36" fill={C.ink} />
        <rect x="58" y="182" width="74" height="7" fill={C.brass} />
      </g>

      <g>
        <rect x="150" y="206" width="168" height="9" rx="3" fill={C.ink} />
        <circle cx="160" cy="221" r="8" fill={C.inkSoft} stroke={C.ink} strokeWidth="2" />
        <circle cx="220" cy="221" r="8" fill={C.inkSoft} stroke={C.ink} strokeWidth="2" />
        <circle cx="308" cy="221" r="8" fill={C.inkSoft} stroke={C.ink} strokeWidth="2" />
        <rect
          x="172"
          y="186"
          width="30"
          height="20"
          fill={C.sandDark}
          stroke={C.ink}
          strokeWidth="2"
        />
        <rect x="212" y="186" width="30" height="20" fill={C.gold} stroke={C.ink} strokeWidth="2" />
        <rect
          x="254"
          y="186"
          width="30"
          height="20"
          fill={C.sandDark}
          stroke={C.ink}
          strokeWidth="2"
        />
      </g>

      <g stroke={C.ink} strokeWidth="3" fill="none" strokeLinecap="round">
        <path d="M196 168v-36l32-14" />
        <path d="M228 118l20 8-6 18-20-8z" fill={C.brass} />
        <path d="M244 144l14 28" />
        <path d="M258 172l-8 14" />
      </g>
      <circle cx="196" cy="168" r="6" fill={C.ink} />

      <g>
        <rect
          x="330"
          y="150"
          width="42"
          height="58"
          rx="3"
          fill={C.cream}
          stroke={C.ink}
          strokeWidth="2"
        />
        <rect
          x="337"
          y="158"
          width="28"
          height="18"
          fill={C.bluePale}
          stroke={C.ink}
          strokeWidth="1.5"
        />
        <path d="M342 168h6l3-5 3 9 3-6h4" fill="none" stroke={C.blue} strokeWidth="1.6" />
        <circle cx="345" cy="188" r="3" fill={C.green} />
        <circle cx="355" cy="188" r="3" fill={C.brass} />
        <circle cx="365" cy="188" r="3" fill={C.inkSoft} />
        <rect x="338" y="196" width="26" height="6" rx="2" fill={C.sandDark} />
      </g>

      <path d="M60 106h40M60 116h28" stroke={C.cream} strokeWidth="2" opacity="0.3" />
    </Scene>
  );
}

function LabScene() {
  return (
    <Scene tint="#e9f4fb">
      <rect x="0" y="218" width="400" height="82" fill={C.sand} />
      <path d="M0 218h400" stroke={C.line} strokeWidth="1.5" opacity="0.5" />
      <rect x="40" y="84" width="320" height="8" fill={C.inkSoft} />
      <rect x="56" y="92" width="10" height="14" fill={C.inkSoft} />
      <rect x="334" y="92" width="10" height="14" fill={C.inkSoft} />
      <g fill={C.blue} stroke={C.ink} strokeWidth="1.5">
        <rect x="66" y="58" width="14" height="26" rx="2" />
        <rect x="88" y="64" width="14" height="20" rx="2" fill={C.green} />
        <rect x="110" y="52" width="14" height="32" rx="2" fill={C.gold} />
      </g>

      <rect x="44" y="166" width="312" height="10" fill={C.cream} stroke={C.ink} strokeWidth="2" />
      <rect x="60" y="176" width="8" height="42" fill={C.inkSoft} />
      <rect x="332" y="176" width="8" height="42" fill={C.inkSoft} />

      <g>
        <rect x="78" y="120" width="12" height="24" fill={C.inkSoft} />
        <path d="M70 166c0-12 10-22 22-22h6" fill="none" stroke={C.ink} strokeWidth="3" />
        <rect x="94" y="136" width="30" height="10" rx="3" fill={C.ink} />
        <circle cx="124" cy="141" r="7" fill={C.blueSoft} stroke={C.ink} strokeWidth="2" />
        <circle cx="124" cy="141" r="2.5" fill={C.blue} />
        <path d="M84 166l8-20" stroke={C.ink} strokeWidth="3" />
      </g>

      <g>
        <path d="M170 144h30l-15 22z" fill={C.blueSoft} stroke={C.ink} strokeWidth="2" />
        <path d="M177 150h16l-8 12z" fill={C.blue} opacity="0.65" />
        <rect x="183" y="132" width="4" height="12" fill={C.inkSoft} />
        <path d="M170 144h30" stroke={C.ink} strokeWidth="2" />
      </g>

      <g>
        <rect
          x="216"
          y="140"
          width="12"
          height="26"
          rx="5"
          fill={C.greenSoft}
          stroke={C.ink}
          strokeWidth="2"
        />
        <rect
          x="232"
          y="148"
          width="12"
          height="18"
          rx="5"
          fill={C.gold}
          stroke={C.ink}
          strokeWidth="2"
        />
        <rect
          x="248"
          y="136"
          width="12"
          height="30"
          rx="5"
          fill={C.bluePale}
          stroke={C.ink}
          strokeWidth="2"
        />
        <path d="M212 166h52" stroke={C.ink} strokeWidth="2" />
      </g>

      <g>
        <rect
          x="282"
          y="126"
          width="40"
          height="40"
          rx="3"
          fill={C.cream}
          stroke={C.ink}
          strokeWidth="2"
        />
        <path d="M290 140h24M290 148h18M290 156h22" stroke={C.line} strokeWidth="2" />
        <circle cx="310" cy="132" r="2" fill={C.brass} />
      </g>

      <g fill={C.white} stroke={C.ink} strokeWidth="2">
        <rect x="150" y="178" width="34" height="18" rx="2" />
        <rect x="196" y="178" width="34" height="18" rx="2" />
      </g>
      <path d="M156 188h22M202 188h22" stroke={C.blue} strokeWidth="2" />
      <circle cx="268" cy="190" r="6" fill={C.red} opacity="0.75" />
      <circle cx="286" cy="190" r="6" fill={C.gold} />
      <circle cx="304" cy="190" r="6" fill={C.green} />

      <path d="M146 60h84M146 70h56" stroke={C.line} strokeWidth="2" opacity="0.55" />
    </Scene>
  );
}

const SCENES: Record<SectorSceneName, () => ReactElement> = {
  house: HouseScene,
  gym: GymScene,
  clinic: ClinicScene,
  agro: AgroScene,
  industry: IndustryScene,
  lab: LabScene,
};

export function SectorScene({ name, className }: { name: SectorSceneName; className?: string }) {
  const Component = SCENES[name];
  return (
    <div className={cn('overflow-hidden rounded-none', className)}>
      <Component />
    </div>
  );
}
