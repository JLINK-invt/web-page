import Link from 'next/link';
import { getNextProject } from '@/content/projects';
import type { Project } from '@/types/content';
import { getDictionary, localize, type Locale } from '@/lib/i18n';
import { href } from '@/lib/routes';
import { ArrowIcon } from '@/components/ui/ArrowIcon';
import { ProductWindow } from '@/components/aero/ProductWindow';
import { WindowPanel } from '@/components/window/WindowPanel';

export function ProjectDetailPage({ locale, project }: { locale: Locale; project: Project }) {
  const dict = getDictionary(locale);
  const next = getNextProject(project.slug);
  const capabilities = localize(project.capabilities, locale);
  const stack = localize(project.stack, locale);
  const status = project.facts[2] ? localize(project.facts[2].value, locale) : dict.common.active;

  return (
    <div className="flex flex-col gap-2 p-2">
      <div className="flex flex-wrap items-center gap-2 px-1 py-0.5 text-[11px] text-[#6b6b6b]">
        <Link
          href={href(locale, 'projects')}
          className="win-btn-ghost inline-flex items-center gap-1"
        >
          <ArrowIcon className="h-3 w-3 rotate-180" />
          {dict.common.backToProjects}
        </Link>
        <span aria-hidden="true">/</span>
        <span>{dict.common.projects}</span>
        <span aria-hidden="true">/</span>
        <span className="text-[#333]">{project.name}</span>
      </div>

      <section className="win-panel overflow-hidden">
        <div className="win-banner">
          <div className="grid gap-4 px-4 py-4 sm:py-5 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
            <div>
              <div className="flex flex-wrap items-center gap-2">
                <span className="inline-flex items-center gap-1.5 rounded-[10px] border border-white/30 bg-[#12335f]/75 px-2 py-0.5 text-[11px] font-bold tracking-[0.04em] text-white uppercase">
                  <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-[#86df86]" />
                  {status}
                </span>
                <span className="text-[11px] text-[#dbe8f8]">
                  {localize(project.facts[0].value, locale)}
                </span>
              </div>
              <h1 className="font-display mt-1.5 text-[26px] leading-tight font-bold text-white">
                {project.name}
              </h1>
              <p className="mt-1.5 max-w-[58ch] text-[12.5px] leading-[1.55] text-[#eaf2ff]">
                {localize(project.tagline, locale)}
              </p>
            </div>

            <div className="border border-white/50 bg-white/95 p-1.5 shadow-[0_2px_8px_rgba(8,26,52,0.35)]">
              <ProductWindow
                variant={project.visual}
                title={project.name}
                depth="glass"
                className="w-full"
              />
            </div>
          </div>
        </div>

        <div className="border-b border-[#e6e6e6] p-3 sm:p-4">
          <p className="max-w-[70ch] text-[13px] leading-[1.6] text-[#3d3d3d]">
            {localize(project.summary, locale)}
          </p>
        </div>

        <dl className="grid grid-cols-2 gap-x-4 gap-y-2 p-3 sm:grid-cols-4 sm:p-4">
          {project.facts.map((fact) => (
            <div key={fact.label.en}>
              <dt className="win-label">{localize(fact.label, locale)}</dt>
              <dd className="mt-0.5 text-[12.5px] text-[#333]">{localize(fact.value, locale)}</dd>
            </div>
          ))}
          <div className="col-span-2">
            <dt className="win-label">{dict.common.stack}</dt>
            <dd className="mt-0.5 truncate text-[12.5px] text-[#333]">{stack.join(' · ')}</dd>
          </div>
        </dl>
      </section>

      <div className="grid gap-2 lg:grid-cols-[1.35fr_0.65fr]">
        <div className="flex flex-col gap-2">
          <WindowPanel title={dict.project.challenge} titleId="project-challenge">
            <p className="max-w-[70ch] text-[12.5px] leading-[1.6] text-[#4a4a4a]">
              {localize(project.challenge, locale)}
            </p>
          </WindowPanel>

          <WindowPanel title={dict.project.approach} titleId="project-approach">
            <p className="max-w-[70ch] text-[12.5px] leading-[1.6] text-[#4a4a4a]">
              {localize(project.approach, locale)}
            </p>
          </WindowPanel>

          <WindowPanel title={dict.project.capabilities} titleId="project-capabilities">
            <ul className="grid gap-x-4 gap-y-1.5 sm:grid-cols-2">
              {capabilities.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-2 text-[12px] leading-[1.5] text-[#4a4a4a]"
                >
                  <span aria-hidden="true" className="win-bullet" />
                  {item}
                </li>
              ))}
            </ul>
          </WindowPanel>
        </div>

        <aside className="flex flex-col gap-2">
          <WindowPanel title={dict.project.tech} titleId="project-tech">
            <ul className="flex flex-wrap gap-1.5">
              {stack.map((item) => (
                <li
                  key={item}
                  className="border border-[#d8d8d8] bg-[#f6f6f6] px-2 py-0.5 font-mono text-[11px] text-[#3d3d3d]"
                >
                  {item}
                </li>
              ))}
            </ul>
          </WindowPanel>

          <WindowPanel title={dict.project.ctaTitle} titleId="project-cta">
            <p className="text-[12px] leading-[1.55] text-[#5f5f5f]">{dict.project.ctaSubtitle}</p>
            <Link href={href(locale, 'contact')} className="win-btn mt-3 w-full">
              {dict.project.ctaButton}
            </Link>
          </WindowPanel>
        </aside>
      </div>

      <Link
        href={href(locale, 'projects', next.slug)}
        className="win-panel group flex items-center justify-between gap-3 p-3 sm:p-4"
      >
        <span>
          <span className="win-label block">{dict.project.next}</span>
          <span className="win-title mt-0.5 block text-[17px] group-hover:text-[#1f4b96]">
            {next.name}
          </span>
        </span>
        <span className="win-btn win-btn-light shrink-0">{dict.common.viewProject}</span>
      </Link>
    </div>
  );
}
