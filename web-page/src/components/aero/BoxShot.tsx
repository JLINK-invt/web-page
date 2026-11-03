import type { ReactElement } from 'react';
import { cn } from '@/lib/cn';

export type BoxShotName =
  | 'smart-house'
  | 'fitness-gym'
  | 'health-psychology'
  | 'agro-monitor'
  | 'industry-vision'
  | 'medical-records';

const C = {
  ink: '#0a2342',
  inkSoft: '#3d5d7a',
  paper: '#eef7fd',
  chromeHighlight: '#ffffff',
  chromeMid: '#e4f1fa',
  chromeShadow: '#9dbdd4',
  chromeDeep: '#5d84a6',
  gold: '#e0b85a',
  goldSoft: '#f5dfa6',
  goldDark: '#a9781f',
  aqua: '#4fb8e8',
  aquaSoft: '#b7e6f8',
  green: '#3f9c8f',
  greenSoft: '#b2e0d8',
  red: '#c06a58',
  white: '#ffffff',
  brass: '#a9781f',
};

function BoxShotScene({ children, tint = C.ink }: { children: React.ReactNode; tint?: string }) {
  return (
    <svg viewBox="0 0 300 400" role="img" aria-hidden="true" className="h-full w-full">
      <rect width="300" height="400" fill={tint} />
      {children}
      <rect
        x="1"
        y="1"
        width="298"
        height="398"
        fill="none"
        stroke={C.chromeHighlight}
        strokeOpacity="0.08"
      />
    </svg>
  );
}

function SmartHouseBox() {
  return (
    <BoxShotScene>
      <rect
        x="20"
        y="30"
        width="260"
        height="340"
        rx="8"
        fill={C.paper}
        stroke={C.ink}
        strokeWidth="3"
      />
      <rect x="20" y="30" width="260" height="60" rx="8" fill={C.inkSoft} />
      <text
        x="150"
        y="70"
        fontFamily="Space Grotesk, sans-serif"
        fontSize="18"
        fontWeight="700"
        fill={C.gold}
        textAnchor="middle"
      >
        SMART HOUSE
      </text>
      <text
        x="150"
        y="90"
        fontFamily="JetBrains Mono, monospace"
        fontSize="10"
        fill={C.aqua}
        textAnchor="middle"
      >
        IoT Platform v2.4.1
      </text>

      <g fill={C.white} stroke={C.ink} strokeWidth="1.5">
        <rect x="50" y="120" width="90" height="60" rx="4" />
        <rect x="160" y="120" width="90" height="60" rx="4" />
        <rect x="50" y="200" width="90" height="60" rx="4" />
        <rect x="160" y="200" width="90" height="60" rx="4" />
      </g>

      <circle cx="95" cy="150" r="8" fill={C.aqua} />
      <circle cx="205" cy="150" r="8" fill={C.green} />
      <circle cx="95" cy="230" r="8" fill={C.gold} />
      <circle cx="205" cy="230" r="8" fill={C.red} />

      <text
        x="95"
        y="195"
        fontFamily="JetBrains Mono, monospace"
        fontSize="8"
        fill={C.ink}
        textAnchor="middle"
      >
        Devices
      </text>
      <text
        x="205"
        y="195"
        fontFamily="JetBrains Mono, monospace"
        fontSize="8"
        fill={C.ink}
        textAnchor="middle"
      >
        Telemetry
      </text>
      <text
        x="95"
        y="275"
        fontFamily="JetBrains Mono, monospace"
        fontSize="8"
        fill={C.ink}
        textAnchor="middle"
      >
        Commands
      </text>
      <text
        x="205"
        y="275"
        fontFamily="JetBrains Mono, monospace"
        fontSize="8"
        fill={C.ink}
        textAnchor="middle"
      >
        Alerts
      </text>

      <rect
        x="50"
        y="280"
        width="200"
        height="40"
        rx="4"
        fill={C.gold}
        stroke={C.goldDark}
        strokeWidth="2"
      />
      <text
        x="150"
        y="308"
        fontFamily="Space Grotesk, sans-serif"
        fontSize="14"
        fontWeight="700"
        fill={C.ink}
        textAnchor="middle"
      >
        DOWNLOAD TRIAL
      </text>

      <text
        x="150"
        y="350"
        fontFamily="JetBrains Mono, monospace"
        fontSize="9"
        fill={C.inkSoft}
        textAnchor="middle"
      >
        SmartHouse_v2.4.1.exe • 42.3 MB • Windows 10/11
      </text>
      <text
        x="150"
        y="365"
        fontFamily="JetBrains Mono, monospace"
        fontSize="9"
        fill={C.gold}
        textAnchor="middle"
      >
        SHA256: a3f2...8b1c
      </text>
    </BoxShotScene>
  );
}

function FitnessGymBox() {
  return (
    <BoxShotScene tint="#144a75">
      <rect
        x="20"
        y="30"
        width="260"
        height="340"
        rx="8"
        fill={C.paper}
        stroke={C.ink}
        strokeWidth="3"
      />
      <rect
        x="20"
        y="30"
        width="260"
        height="60"
        rx="8"
        fill={C.gold}
        stroke={C.goldDark}
        strokeWidth="2"
      />
      <text
        x="150"
        y="70"
        fontFamily="Space Grotesk, sans-serif"
        fontSize="18"
        fontWeight="700"
        fill={C.ink}
        textAnchor="middle"
      >
        FITNESS GYM
      </text>
      <text
        x="150"
        y="90"
        fontFamily="JetBrains Mono, monospace"
        fontSize="10"
        fill={C.goldSoft}
        textAnchor="middle"
      >
        Local-First Desktop v1.8.3
      </text>

      <g fill={C.white} stroke={C.ink} strokeWidth="1.5">
        <rect x="40" y="115" width="220" height="80" rx="4" />
        <rect x="50" y="125" width="200" height="12" rx="2" fill={C.inkSoft} />
        <rect x="50" y="145" width="90" height="10" rx="2" fill={C.aqua} />
        <rect x="160" y="145" width="90" height="10" rx="2" fill={C.green} />
        <rect x="50" y="165" width="90" height="10" rx="2" fill={C.gold} />
        <rect x="160" y="165" width="90" height="10" rx="2" fill={C.red} />
      </g>

      <g fill={C.white} stroke={C.ink} strokeWidth="1.5">
        <rect x="40" y="215" width="105" height="60" rx="4" />
        <rect x="155" y="215" width="105" height="60" rx="4" />
      </g>

      <text
        x="92"
        y="240"
        fontFamily="JetBrains Mono, monospace"
        fontSize="9"
        fill={C.ink}
        textAnchor="middle"
      >
        POS & Cash
      </text>
      <text
        x="92"
        y="255"
        fontFamily="JetBrains Mono, monospace"
        fontSize="8"
        fill={C.inkSoft}
        textAnchor="middle"
      >
        Members • Plans
      </text>
      <text
        x="207"
        y="240"
        fontFamily="JetBrains Mono, monospace"
        fontSize="9"
        fill={C.ink}
        textAnchor="middle"
      >
        Inventory
      </text>
      <text
        x="207"
        y="255"
        fontFamily="JetBrains Mono, monospace"
        fontSize="8"
        fill={C.inkSoft}
        textAnchor="middle"
      >
        Classes • CRM
      </text>

      <rect
        x="40"
        y="295"
        width="220"
        height="40"
        rx="4"
        fill={C.gold}
        stroke={C.goldDark}
        strokeWidth="2"
      />
      <text
        x="150"
        y="323"
        fontFamily="Space Grotesk, sans-serif"
        fontSize="14"
        fontWeight="700"
        fill={C.ink}
        textAnchor="middle"
      >
        BUY NOW
      </text>

      <text
        x="150"
        y="355"
        fontFamily="JetBrains Mono, monospace"
        fontSize="9"
        fill={C.inkSoft}
        textAnchor="middle"
      >
        FitnessGym_v1.8.3.exe • 67.1 MB • Windows 10/11
      </text>
      <text
        x="150"
        y="370"
        fontFamily="JetBrains Mono, monospace"
        fontSize="9"
        fill={C.gold}
        textAnchor="middle"
      >
        SHA256: 7f4e...2a9d
      </text>
    </BoxShotScene>
  );
}

function HealthPsychologyBox() {
  return (
    <BoxShotScene tint="#0a2b4f">
      <rect
        x="20"
        y="30"
        width="260"
        height="340"
        rx="8"
        fill={C.paper}
        stroke={C.ink}
        strokeWidth="3"
      />
      <rect
        x="20"
        y="30"
        width="260"
        height="60"
        rx="8"
        fill={C.red}
        stroke={C.red}
        strokeWidth="2"
        opacity="0.9"
      />
      <text
        x="150"
        y="70"
        fontFamily="Space Grotesk, sans-serif"
        fontSize="16"
        fontWeight="700"
        fill={C.white}
        textAnchor="middle"
      >
        HEALTH PSYCHOLOGY
      </text>
      <text
        x="150"
        y="90"
        fontFamily="JetBrains Mono, monospace"
        fontSize="10"
        fill={C.goldSoft}
        textAnchor="middle"
      >
        Clinical MVP v0.9.2
      </text>

      <g fill={C.white} stroke={C.ink} strokeWidth="1.5">
        <rect x="40" y="115" width="220" height="70" rx="4" />
        <rect x="50" y="125" width="200" height="12" rx="2" fill={C.inkSoft} />
        <rect x="50" y="145" width="90" height="10" rx="2" fill={C.aqua} />
        <rect x="160" y="145" width="90" height="10" rx="2" fill={C.green} />
        <rect x="50" y="165" width="90" height="10" rx="2" fill={C.gold} />
        <rect x="160" y="165" width="90" height="10" rx="2" fill={C.red} />
      </g>

      <g fill={C.white} stroke={C.ink} strokeWidth="1.5">
        <rect x="40" y="210" width="105" height="60" rx="4" />
        <rect x="155" y="210" width="105" height="60" rx="4" />
      </g>

      <text
        x="92"
        y="235"
        fontFamily="JetBrains Mono, monospace"
        fontSize="9"
        fill={C.ink}
        textAnchor="middle"
      >
        Patients
      </text>
      <text
        x="92"
        y="250"
        fontFamily="JetBrains Mono, monospace"
        fontSize="8"
        fill={C.inkSoft}
        textAnchor="middle"
      >
        Records • Plans
      </text>
      <text
        x="207"
        y="235"
        fontFamily="JetBrains Mono, monospace"
        fontSize="9"
        fill={C.ink}
        textAnchor="middle"
      >
        Scheduling
      </text>
      <text
        x="207"
        y="250"
        fontFamily="JetBrains Mono, monospace"
        fontSize="8"
        fill={C.inkSoft}
        textAnchor="middle"
      >
        Files • Audit
      </text>

      <rect
        x="40"
        y="290"
        width="220"
        height="40"
        rx="4"
        fill={C.gold}
        stroke={C.goldDark}
        strokeWidth="2"
      />
      <text
        x="150"
        y="318"
        fontFamily="Space Grotesk, sans-serif"
        fontSize="14"
        fontWeight="700"
        fill={C.ink}
        textAnchor="middle"
      >
        DOWNLOAD TRIAL
      </text>

      <text
        x="150"
        y="350"
        fontFamily="JetBrains Mono, monospace"
        fontSize="9"
        fill={C.inkSoft}
        textAnchor="middle"
      >
        HealthPsych_v0.9.2.exe • 38.7 MB • Windows 10/11
      </text>
      <text
        x="150"
        y="365"
        fontFamily="JetBrains Mono, monospace"
        fontSize="9"
        fill={C.gold}
        textAnchor="middle"
      >
        SHA256: e8b1...4f2a
      </text>

      <g fill={C.gold} stroke={C.goldDark} strokeWidth="1.5">
        <circle cx="80" cy="385" r="10" />
        <circle cx="220" cy="385" r="10" />
      </g>
      <text
        x="80"
        y="389"
        fontFamily="JetBrains Mono, monospace"
        fontSize="7"
        fill={C.ink}
        textAnchor="middle"
      >
        ISO
      </text>
      <text
        x="220"
        y="389"
        fontFamily="JetBrains Mono, monospace"
        fontSize="7"
        fill={C.ink}
        textAnchor="middle"
      >
        HIPAA
      </text>
    </BoxShotScene>
  );
}

function AgroMonitorBox() {
  return (
    <BoxShotScene tint="#0d3d2e">
      <rect
        x="20"
        y="30"
        width="260"
        height="340"
        rx="8"
        fill={C.paper}
        stroke={C.ink}
        strokeWidth="3"
      />
      <rect
        x="20"
        y="30"
        width="260"
        height="60"
        rx="8"
        fill={C.green}
        stroke={C.green}
        strokeWidth="2"
        opacity="0.9"
      />
      <text
        x="150"
        y="70"
        fontFamily="Space Grotesk, sans-serif"
        fontSize="16"
        fontWeight="700"
        fill={C.white}
        textAnchor="middle"
      >
        AGRO MONITOR
      </text>
      <text
        x="150"
        y="90"
        fontFamily="JetBrains Mono, monospace"
        fontSize="10"
        fill={C.goldSoft}
        textAnchor="middle"
      >
        Exploration Build v0.1.0
      </text>

      <g fill={C.white} stroke={C.ink} strokeWidth="1.5">
        <rect x="40" y="115" width="220" height="80" rx="4" />
        <path d="M50 135 Q150 105 250 135" stroke={C.green} strokeWidth="3" fill="none" />
        <circle cx="90" cy="150" r="5" fill={C.gold} />
        <circle cx="150" cy="140" r="5" fill={C.aqua} />
        <circle cx="210" cy="150" r="5" fill={C.green} />
      </g>

      <text
        x="150"
        y="210"
        fontFamily="JetBrains Mono, monospace"
        fontSize="9"
        fill={C.ink}
        textAnchor="middle"
      >
        Crop Sensors • Weather • NDVI
      </text>

      <g fill={C.white} stroke={C.ink} strokeWidth="1.5">
        <rect x="40" y="220" width="105" height="60" rx="4" />
        <rect x="155" y="220" width="105" height="60" rx="4" />
      </g>

      <text
        x="92"
        y="245"
        fontFamily="JetBrains Mono, monospace"
        fontSize="9"
        fill={C.ink}
        textAnchor="middle"
      >
        Monitoring
      </text>
      <text
        x="92"
        y="260"
        fontFamily="JetBrains Mono, monospace"
        fontSize="8"
        fill={C.inkSoft}
        textAnchor="middle"
      >
        Early Alerts
      </text>
      <text
        x="207"
        y="245"
        fontFamily="JetBrains Mono, monospace"
        fontSize="9"
        fill={C.ink}
        textAnchor="middle"
      >
        Traceability
      </text>
      <text
        x="207"
        y="260"
        fontFamily="JetBrains Mono, monospace"
        fontSize="8"
        fill={C.inkSoft}
        textAnchor="middle"
      >
        Field Logs
      </text>

      <rect
        x="40"
        y="300"
        width="220"
        height="40"
        rx="4"
        fill="transparent"
        stroke={C.gold}
        strokeWidth="2"
        strokeDasharray="8,4"
      />
      <text
        x="150"
        y="328"
        fontFamily="Space Grotesk, sans-serif"
        fontSize="14"
        fontWeight="700"
        fill={C.gold}
        textAnchor="middle"
      >
        REQUEST DEMO
      </text>

      <text
        x="150"
        y="355"
        fontFamily="JetBrains Mono, monospace"
        fontSize="9"
        fill={C.inkSoft}
        textAnchor="middle"
      >
        AgroMonitor_v0.1.0.exe • — MB • Windows 10/11
      </text>
      <text
        x="150"
        y="370"
        fontFamily="JetBrains Mono, monospace"
        fontSize="9"
        fill={C.gold}
        textAnchor="middle"
      >
        Coming Q2 2026
      </text>
    </BoxShotScene>
  );
}

function IndustryVisionBox() {
  return (
    <BoxShotScene tint="#1a2a3a">
      <rect
        x="20"
        y="30"
        width="260"
        height="340"
        rx="8"
        fill={C.paper}
        stroke={C.ink}
        strokeWidth="3"
      />
      <rect
        x="20"
        y="30"
        width="260"
        height="60"
        rx="8"
        fill={C.chromeShadow}
        stroke={C.chromeDeep}
        strokeWidth="2"
      />
      <text
        x="150"
        y="70"
        fontFamily="Space Grotesk, sans-serif"
        fontSize="16"
        fontWeight="700"
        fill={C.ink}
        textAnchor="middle"
      >
        INDUSTRY VISION
      </text>
      <text
        x="150"
        y="90"
        fontFamily="JetBrains Mono, monospace"
        fontSize="10"
        fill={C.gold}
        textAnchor="middle"
      >
        Exploration Build v0.1.0
      </text>

      <g fill={C.white} stroke={C.ink} strokeWidth="1.5">
        <rect x="40" y="115" width="220" height="90" rx="4" />
        <rect x="60" y="125" width="180" height="60" rx="2" fill={C.inkSoft} opacity="0.3" />
        <rect x="130" y="140" width="40" height="40" rx="4" fill={C.aqua} />
        <path
          d="M130 160 L150 180 L190 140"
          stroke={C.gold}
          strokeWidth="4"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>

      <text
        x="150"
        y="220"
        fontFamily="JetBrains Mono, monospace"
        fontSize="9"
        fill={C.ink}
        textAnchor="middle"
      >
        Inline Vision • Defect Detection
      </text>

      <g fill={C.white} stroke={C.ink} strokeWidth="1.5">
        <rect x="40" y="230" width="105" height="60" rx="4" />
        <rect x="155" y="230" width="105" height="60" rx="4" />
      </g>

      <text
        x="92"
        y="255"
        fontFamily="JetBrains Mono, monospace"
        fontSize="9"
        fill={C.ink}
        textAnchor="middle"
      >
        Quality Ctrl
      </text>
      <text
        x="92"
        y="270"
        fontFamily="JetBrains Mono, monospace"
        fontSize="8"
        fill={C.inkSoft}
        textAnchor="middle"
      >
        Batch Rules
      </text>
      <text
        x="207"
        y="255"
        fontFamily="JetBrains Mono, monospace"
        fontSize="9"
        fill={C.ink}
        textAnchor="middle"
      >
        Automation
      </text>
      <text
        x="207"
        y="270"
        fontFamily="JetBrains Mono, monospace"
        fontSize="8"
        fill={C.inkSoft}
        textAnchor="middle"
      >
        Work Orders
      </text>

      <rect
        x="40"
        y="310"
        width="220"
        height="40"
        rx="4"
        fill="transparent"
        stroke={C.gold}
        strokeWidth="2"
        strokeDasharray="8,4"
      />
      <text
        x="150"
        y="338"
        fontFamily="Space Grotesk, sans-serif"
        fontSize="14"
        fontWeight="700"
        fill={C.gold}
        textAnchor="middle"
      >
        REQUEST DEMO
      </text>

      <text
        x="150"
        y="365"
        fontFamily="JetBrains Mono, monospace"
        fontSize="9"
        fill={C.inkSoft}
        textAnchor="middle"
      >
        IndustryVision_v0.1.0.exe • — MB • Windows 10/11
      </text>
      <text
        x="150"
        y="380"
        fontFamily="JetBrains Mono, monospace"
        fontSize="9"
        fill={C.gold}
        textAnchor="middle"
      >
        Coming Q3 2026
      </text>
    </BoxShotScene>
  );
}

function MedicalRecordsBox() {
  return (
    <BoxShotScene tint="#2d1a1a">
      <rect
        x="20"
        y="30"
        width="260"
        height="340"
        rx="8"
        fill={C.paper}
        stroke={C.ink}
        strokeWidth="3"
      />
      <rect
        x="20"
        y="30"
        width="260"
        height="60"
        rx="8"
        fill={C.red}
        stroke={C.red}
        strokeWidth="2"
        opacity="0.9"
      />
      <text
        x="150"
        y="70"
        fontFamily="Space Grotesk, sans-serif"
        fontSize="16"
        fontWeight="700"
        fill={C.white}
        textAnchor="middle"
      >
        MEDICAL RECORDS
      </text>
      <text
        x="150"
        y="90"
        fontFamily="JetBrains Mono, monospace"
        fontSize="10"
        fill={C.goldSoft}
        textAnchor="middle"
      >
        Exploration Build v0.1.0
      </text>

      <g fill={C.white} stroke={C.ink} strokeWidth="1.5">
        <rect x="40" y="115" width="220" height="80" rx="4" />
        <rect x="50" y="125" width="200" height="12" rx="2" fill={C.inkSoft} />
        <rect x="50" y="145" width="90" height="10" rx="2" fill={C.aqua} />
        <rect x="160" y="145" width="90" height="10" rx="2" fill={C.green} />
        <rect x="50" y="165" width="90" height="10" rx="2" fill={C.gold} />
        <rect x="160" y="165" width="90" height="10" rx="2" fill={C.red} />
      </g>

      <text
        x="150"
        y="210"
        fontFamily="JetBrains Mono, monospace"
        fontSize="9"
        fill={C.ink}
        textAnchor="middle"
      >
        EHR • Documents • Consent
      </text>

      <g fill={C.white} stroke={C.ink} strokeWidth="1.5">
        <rect x="40" y="220" width="105" height="60" rx="4" />
        <rect x="155" y="220" width="105" height="60" rx="4" />
      </g>

      <text
        x="92"
        y="245"
        fontFamily="JetBrains Mono, monospace"
        fontSize="9"
        fill={C.ink}
        textAnchor="middle"
      >
        Clinical Rec
      </text>
      <text
        x="92"
        y="260"
        fontFamily="JetBrains Mono, monospace"
        fontSize="8"
        fill={C.inkSoft}
        textAnchor="middle"
      >
        Scheduling
      </text>
      <text
        x="207"
        y="245"
        fontFamily="JetBrains Mono, monospace"
        fontSize="9"
        fill={C.ink}
        textAnchor="middle"
      >
        Files
      </text>
      <text
        x="207"
        y="260"
        fontFamily="JetBrains Mono, monospace"
        fontSize="8"
        fill={C.inkSoft}
        textAnchor="middle"
      >
        Audit Trail
      </text>

      <rect
        x="40"
        y="300"
        width="220"
        height="40"
        rx="4"
        fill="transparent"
        stroke={C.gold}
        strokeWidth="2"
        strokeDasharray="8,4"
      />
      <text
        x="150"
        y="328"
        fontFamily="Space Grotesk, sans-serif"
        fontSize="14"
        fontWeight="700"
        fill={C.gold}
        textAnchor="middle"
      >
        REQUEST DEMO
      </text>

      <text
        x="150"
        y="355"
        fontFamily="JetBrains Mono, monospace"
        fontSize="9"
        fill={C.inkSoft}
        textAnchor="middle"
      >
        MedicalRecords_v0.1.0.exe • — MB • Windows 10/11
      </text>
      <text
        x="150"
        y="370"
        fontFamily="JetBrains Mono, monospace"
        fontSize="9"
        fill={C.gold}
        textAnchor="middle"
      >
        Coming Q1 2026
      </text>

      <g fill={C.gold} stroke={C.goldDark} strokeWidth="1.5">
        <circle cx="60" cy="385" r="10" />
        <circle cx="150" cy="385" r="10" />
        <circle cx="240" cy="385" r="10" />
      </g>
      <text
        x="60"
        y="389"
        fontFamily="JetBrains Mono, monospace"
        fontSize="7"
        fill={C.ink}
        textAnchor="middle"
      >
        CE
      </text>
      <text
        x="150"
        y="389"
        fontFamily="JetBrains Mono, monospace"
        fontSize="7"
        fill={C.ink}
        textAnchor="middle"
      >
        ISO 13485
      </text>
      <text
        x="240"
        y="389"
        fontFamily="JetBrains Mono, monospace"
        fontSize="7"
        fill={C.ink}
        textAnchor="middle"
      >
        FDA
      </text>
    </BoxShotScene>
  );
}

const BOX_SHOTS: Record<BoxShotName, () => ReactElement> = {
  'smart-house': SmartHouseBox,
  'fitness-gym': FitnessGymBox,
  'health-psychology': HealthPsychologyBox,
  'agro-monitor': AgroMonitorBox,
  'industry-vision': IndustryVisionBox,
  'medical-records': MedicalRecordsBox,
};

interface BoxShotProps {
  name: BoxShotName;
  className?: string;
}

export function BoxShot({ name, className }: BoxShotProps) {
  const Component = BOX_SHOTS[name];
  return (
    <div className={cn('box-shot', className)} style={{ aspectRatio: '3/4' }}>
      <Component />
    </div>
  );
}
