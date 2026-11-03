import Link from 'next/link';
import type { Dictionary } from '@/content/dictionaries';
import type { Project } from '@/types/content';
import { getDictionary, localize, type Locale } from '@/lib/i18n';
import { href } from '@/lib/routes';
import { ArrowIcon } from '@/components/ui/ArrowIcon';
import { ProductWindow } from '@/components/aero/ProductWindow';
import { GoldBadge } from '@/components/aero/GoldBadge';
import { cn } from '@/lib/cn';

const PROJECT_SPECS: Record<
  string,
  { file: string; version: string; size: string; platform: string; checksum: string }
> = {
  'smart-house': {
    file: 'SmartHouse_v2.4.1.exe',
    version: '2.4.1',
    size: '42.3 MB',
    platform: 'Windows 10/11',
    checksum: 'SHA256: a3f2...8b1c',
  },
  'fitness-gym': {
    file: 'FitnessGym_v1.8.3.exe',
    version: '1.8.3',
    size: '67.1 MB',
    platform: 'Windows 10/11',
    checksum: 'SHA256: 7f4e...2a9d',
  },
  'health-psychology': {
    file: 'HealthPsych_v0.9.2.exe',
    version: '0.9.2',
    size: '38.7 MB',
    platform: 'Windows 10/11',
    checksum: 'SHA256: e8b1...4f2a',
  },
};

const PROJECT_BADGES: Record<
  string,
  Array<{ text: string; variant: 'seal' | 'shield' | 'standard' }>
> = {
  'smart-house': [
    { text: 'Industrial Grade', variant: 'shield' },
    { text: '100% Secure System', variant: 'seal' },
  ],
  'fitness-gym': [
    { text: 'Local-First', variant: 'shield' },
    { text: '100% Secure System', variant: 'seal' },
  ],
  'health-psychology': [
    { text: 'ISO Medical Certified', variant: 'shield' },
    { text: 'HIPAA Ready', variant: 'seal' },
    { text: '100% Secure System', variant: 'standard' },
  ],
};

export function ProjectCard({
  locale,
  project,
  dict,
  depth = 'skeuo',
}: {
  locale: Locale;
  project: Project;
  dict?: Dictionary;
  depth?: 'glass' | 'skeuo';
}) {
  const dictionary = dict ?? getDictionary(locale);
  const specs = PROJECT_SPECS[project.slug];
  const badges = PROJECT_BADGES[project.slug] || [];
  const isLive = project.facts[2]?.value.en === 'Operational';

  return (
    <Link
      href={href(locale, 'projects', project.slug)}
      className="group glass-panel flex h-full flex-col overflow-hidden rounded-2xl transition-transform duration-500 hover:-translate-y-1"
    >
      <div className="relative aspect-[16/10] overflow-hidden">
        <ProductWindow
          variant={project.visual}
          depth={depth}
          showBoxShot
          className="h-full w-full"
        />
        <span
          className={cn(
            'absolute top-3 left-3 flex items-center gap-1.5 rounded-full border border-white px-2 py-1 text-[9px] font-semibold tracking-[0.14em] uppercase shadow-[0_6px_14px_-10px_rgba(5,26,51,0.5)]',
            isLive ? 'text-status-green bg-white/95' : 'text-gold-badge bg-white/95'
          )}
        >
          <span
            aria-hidden="true"
            className={cn(
              'h-1.5 w-1.5 rounded-full',
              isLive ? 'bg-status-green' : 'border-gold-badge/60 border'
            )}
          />
          {isLive ? dictionary.common.active : dictionary.common.exploration}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-5">
        <h3 className="font-display text-ink text-xl font-semibold tracking-tight">
          {project.name}
        </h3>
        <p className="text-muted mt-2 text-sm leading-relaxed">
          {localize(project.tagline, locale)}
        </p>

        <p className="text-muted mt-4 line-clamp-3 text-sm leading-relaxed">
          {localize(project.summary, locale)}
        </p>

        <Link
          href={href(locale, 'projects', project.slug)}
          className="text-cosmos hover:text-ink mt-4 inline-flex items-center gap-1.5 text-[11px] font-semibold tracking-[0.16em] uppercase transition-colors"
        >
          {dictionary.project.viewSuite}{' '}
          <ArrowIcon className="h-3 w-3 transition-transform group-hover:translate-x-1" />
        </Link>

        <div className="mt-4 flex flex-wrap gap-2">
          {badges.map((badge, i) => (
            <GoldBadge key={i} variant={badge.variant} className="shrink-0">
              {badge.text}
            </GoldBadge>
          ))}
        </div>

        {specs && (
          <div className="border-line/50 mt-5 space-y-2 border-t pt-4">
            <p className="mono-sm text-muted font-mono tracking-[0.1em] uppercase">
              {dictionary.project.techSpecs}
            </p>
            <dl className="mono text-ink/80 space-y-1 font-mono">
              <div className="flex items-baseline gap-2">
                <dt className="text-muted w-20 shrink-0">{dictionary.project.file}:</dt>
                <dd className="font-medium">{specs.file}</dd>
              </div>
              <div className="flex items-baseline gap-2">
                <dt className="text-muted w-20 shrink-0">{dictionary.project.version}:</dt>
                <dd>{specs.version}</dd>
              </div>
              <div className="flex items-baseline gap-2">
                <dt className="text-muted w-20 shrink-0">{dictionary.project.size}:</dt>
                <dd>{specs.size}</dd>
              </div>
              <div className="flex items-baseline gap-2">
                <dt className="text-muted w-20 shrink-0">{dictionary.project.platform}:</dt>
                <dd>{specs.platform}</dd>
              </div>
              <div className="flex items-baseline gap-2">
                <dt className="text-muted w-20 shrink-0">{dictionary.project.checksum}:</dt>
                <dd className="text-muted">{specs.checksum}</dd>
              </div>
            </dl>
          </div>
        )}

        <button
          type="button"
          className="btn-3d-glossy mt-auto w-full"
          onClick={(e) => e.preventDefault()}
        >
          {isLive ? dictionary.project.buyNow : dictionary.project.requestDemo}
        </button>

        <span className="text-cosmos mt-4 inline-flex items-center gap-2 text-[11px] font-semibold tracking-[0.16em] uppercase">
          {dictionary.common.viewProject}
          <ArrowIcon className="transition-transform group-hover:translate-x-1" />
        </span>
      </div>
    </Link>
  );
}
