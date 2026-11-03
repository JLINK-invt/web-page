import Link from 'next/link';
import type { Dictionary } from '@/content/dictionaries';
import type { Project } from '@/types/content';
import { getDictionary, localize, type Locale } from '@/lib/i18n';
import { href } from '@/lib/routes';
import { ArrowIcon } from '@/components/ui/ArrowIcon';
import { ProductWindow } from '@/components/aero/ProductWindow';

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

  return (
    <Link href={href(locale, 'projects', project.slug)} className="group flex h-full flex-col">
      <ProductWindow
        variant={project.visual}
        depth={depth}
        className="transition-transform duration-500 group-hover:-translate-y-1"
      />

      <div className="text-muted mt-5 flex items-center gap-2 text-[11px] font-semibold tracking-[0.16em] uppercase">
        <span>{localize(project.facts[0].value, locale)}</span>
        <span className="bg-line h-px w-4" aria-hidden="true" />
        <span>{dictionary.projects.statusLive}</span>
      </div>

      <h3 className="font-display text-ink mt-2 text-xl font-semibold tracking-tight">
        {project.name}
      </h3>
      <p className="text-muted mt-2 text-sm leading-relaxed">{localize(project.tagline, locale)}</p>

      <span className="text-cosmos mt-5 inline-flex items-center gap-2 text-[11px] font-semibold tracking-[0.16em] uppercase">
        {dictionary.common.viewProject}
        <ArrowIcon className="transition-transform group-hover:translate-x-1" />
      </span>
    </Link>
  );
}
