import { cn } from '@/lib/cn';
import type { Dictionary } from '@/content/dictionaries';

interface LicenseTableProps {
  dict: Dictionary;
  domain: 'domotics' | 'agriculture' | 'industrial' | 'medical';
  className?: string;
}

const LICENSE_DATA: Record<
  string,
  Array<{ module: string; basic: boolean; professional: boolean; enterprise: boolean }>
> = {
  domotics: [
    { module: 'Device Management', basic: true, professional: true, enterprise: true },
    { module: 'Real-time Telemetry', basic: true, professional: true, enterprise: true },
    { module: 'Remote Commands', basic: false, professional: true, enterprise: true },
    { module: 'Alerting Engine', basic: false, professional: true, enterprise: true },
    { module: 'Multi-org Isolation', basic: false, professional: false, enterprise: true },
    { module: 'Audit Trail', basic: false, professional: true, enterprise: true },
    { module: 'API Access', basic: false, professional: false, enterprise: true },
    { module: 'SLA & Support', basic: false, professional: false, enterprise: true },
  ],
  agriculture: [
    { module: 'Crop Monitoring', basic: true, professional: true, enterprise: true },
    { module: 'Weather Integration', basic: true, professional: true, enterprise: true },
    { module: 'NDVI Analysis', basic: false, professional: true, enterprise: true },
    { module: 'Early Alerts', basic: false, professional: true, enterprise: true },
    { module: 'Field Traceability', basic: false, professional: true, enterprise: true },
    { module: 'Batch Management', basic: false, professional: false, enterprise: true },
    { module: 'API & Integrations', basic: false, professional: false, enterprise: true },
    { module: 'SLA & Support', basic: false, professional: false, enterprise: true },
  ],
  industrial: [
    { module: 'Inline Vision', basic: true, professional: true, enterprise: true },
    { module: 'Defect Detection', basic: true, professional: true, enterprise: true },
    { module: 'Quality Rules', basic: false, professional: true, enterprise: true },
    { module: 'Batch Evidence', basic: false, professional: true, enterprise: true },
    { module: 'Plant Automation', basic: false, professional: false, enterprise: true },
    { module: 'Work Orders', basic: false, professional: true, enterprise: true },
    { module: 'PLC Integration', basic: false, professional: false, enterprise: true },
    { module: 'SLA & Support', basic: false, professional: false, enterprise: true },
  ],
  medical: [
    { module: 'Patient Records', basic: true, professional: true, enterprise: true },
    { module: 'Scheduling', basic: true, professional: true, enterprise: true },
    { module: 'Clinical Documents', basic: false, professional: true, enterprise: true },
    { module: 'Treatment Plans', basic: false, professional: true, enterprise: true },
    { module: 'Org Isolation', basic: false, professional: false, enterprise: true },
    { module: 'Append-only Audit', basic: false, professional: true, enterprise: true },
    { module: 'S3 Document Store', basic: false, professional: false, enterprise: true },
    { module: 'SLA & Support', basic: false, professional: false, enterprise: true },
  ],
};

export function LicenseTable({ dict, domain, className }: LicenseTableProps) {
  const data = LICENSE_DATA[domain] || LICENSE_DATA.domotics;

  return (
    <div className={cn('overflow-x-auto', className)}>
      <table className="license-table" role="table">
        <thead>
          <tr>
            <th scope="col">{dict.licensing.module}</th>
            <th scope="col">{dict.licensing.basic}</th>
            <th scope="col">{dict.licensing.professional}</th>
            <th scope="col">{dict.licensing.enterprise}</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, i) => (
            <tr key={i}>
              <td>
                <span className="font-mono text-sm">{row.module}</span>
              </td>
              <td style={{ textAlign: 'center' }}>
                {row.basic ? (
                  <span className="checkmark" aria-label={dict.licensing.included}>
                    ✓
                  </span>
                ) : (
                  <span className="text-muted/40 font-mono text-sm">—</span>
                )}
              </td>
              <td style={{ textAlign: 'center' }}>
                {row.professional ? (
                  <span className="checkmark" aria-label={dict.licensing.included}>
                    ✓
                  </span>
                ) : (
                  <span className="text-muted/40 font-mono text-sm">—</span>
                )}
              </td>
              <td style={{ textAlign: 'center' }}>
                {row.enterprise ? (
                  <span className="checkmark" aria-label={dict.licensing.included}>
                    ✓
                  </span>
                ) : (
                  <span className="text-muted/40 font-mono text-sm">—</span>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <p className="mono-sm text-muted mt-4 text-center font-mono">{dict.licensing.note}</p>
    </div>
  );
}
