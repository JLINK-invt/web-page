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

  return (
    <article className="win-panel flex h-full flex-col">
      <div className="border-b border-[#d8d8d8] bg-[#f2f2f2] p-1.5">
        <ProductWindow
          variant={project.visual}
          title={project.name}
          depth="glass"
          className="w-full"
        />
      </div>

      <div className="flex flex-1 flex-col p-3">
        <h3 className="win-title text-[16px]">{project.name}</h3>

        <p className="mt-1.5 min-h-[38px] text-[12.5px] leading-[1.5] text-[#45505d]">
          {localize(project.tagline, locale)}
        </p>
        <p className="mt-2 line-clamp-3 min-h-[56px] text-[12px] leading-[1.55] text-[#4a4a4a]">
          {localize(project.summary, locale)}
        </p>

        <div className="mt-auto pt-3">
          <Link
            href={href(locale, 'projects', project.slug)}
            className="win-btn win-btn-light w-full"
          >
            {dictionary.common.viewProject}
          </Link>
        </div>
      </div>
    </article>
  );
}
