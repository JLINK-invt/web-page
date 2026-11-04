import Link from 'next/link';
import type { Dictionary } from '@/content/dictionaries';
import type { Project } from '@/types/content';
import { getDictionary, localize, type Locale } from '@/lib/i18n';
import { href } from '@/lib/routes';
import { ProductWindow } from '@/components/aero/ProductWindow';

export function ProjectCard({
  locale,
  project,
  dict,
}: {
  locale: Locale;
  project: Project;
  dict?: Dictionary;
}) {
  const dictionary = dict ?? getDictionary(locale);
  const status = project.facts[2]
    ? localize(project.facts[2].value, locale)
    : dictionary.common.active;

  return (
    <article className="win-panel flex h-full flex-col">
      <div className="border-b border-[#d8d8d8] bg-[#f2f2f2] p-2">
        <ProductWindow
          variant={project.visual}
          title={project.name}
          depth="glass"
          className="w-full"
        />
      </div>

      <div className="flex flex-1 flex-col p-3">
        <div className="flex items-start justify-between gap-2">
          <h3 className="win-title text-[16px]">{project.name}</h3>
          <span className="win-status shrink-0">
            <span aria-hidden="true" className="win-status-dot" />
            {status}
          </span>
        </div>

        <p className="mt-1.5 text-[12.5px] leading-[1.5] text-[#5f5f5f]">
          {localize(project.tagline, locale)}
        </p>
        <p className="mt-2 line-clamp-3 text-[12px] leading-[1.55] text-[#4a4a4a]">
          {localize(project.summary, locale)}
        </p>

        <dl className="mt-3 grid grid-cols-[auto_1fr] gap-x-2 gap-y-0.5 border-t border-[#e6e6e6] pt-2 font-mono text-[11px] leading-[1.5]">
          {project.facts.map((fact) => (
            <div key={fact.label.en} className="contents">
              <dt className="text-[#6b6b6b]">{localize(fact.label, locale)}</dt>
              <dd className="truncate text-[#333]">{localize(fact.value, locale)}</dd>
            </div>
          ))}
        </dl>

        <Link
          href={href(locale, 'projects', project.slug)}
          className="win-btn win-btn-light mt-3 w-full"
        >
          {dictionary.common.viewProject}
        </Link>
      </div>
    </article>
  );
}
