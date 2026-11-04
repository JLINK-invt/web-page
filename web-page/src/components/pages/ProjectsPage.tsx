'use client';

import { getUpcomingDomains } from '@/content/domains';
import { getFeaturedProjects } from '@/content/projects';
import { domainScenes } from '@/content/scenes';
import { getDictionary, type Locale } from '@/lib/i18n';
import { href } from '@/lib/routes';
import Link from 'next/link';
import { CtaBand } from '@/components/sections/CtaBand';
import { ProjectCard } from '@/components/projects/ProjectCard';
import { WindowPanel } from '@/components/window/WindowPanel';
import { SectorScene } from '@/components/aero/SectorScene';

export function ProjectsPage({ locale }: { locale: Locale }) {
  const dict = getDictionary(locale);
  const projects = getFeaturedProjects();
  const upcoming = getUpcomingDomains();

  return (
    <div className="flex flex-col gap-2 p-2">
      <section className="win-panel overflow-hidden">
        <div className="win-banner px-4 py-4 sm:py-5">
          <h1 className="font-display max-w-[26ch] text-[24px] leading-tight font-bold text-balance text-white">
            {dict.projects.title}
          </h1>
          <p className="mt-1.5 max-w-[64ch] text-[12.5px] leading-[1.55] text-[#eaf2ff]">
            {dict.projects.subtitle}
          </p>
        </div>
      </section>

      <WindowPanel title={dict.projects.domoticsHeading} titleId="projects-live">
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.slug} locale={locale} project={project} dict={dict} />
          ))}
        </div>
      </WindowPanel>

      <WindowPanel title={dict.projects.upcomingHeading} titleId="projects-upcoming">
        <p className="mb-2 max-w-[70ch] text-[12.5px] leading-[1.55] text-[#5f5f5f]">
          {dict.projects.upcomingSubtitle}
        </p>
        <ul className="divide-y divide-[#e6e6e6]">
          {upcoming.map((domain) => (
            <li key={domain.id}>
              <Link
                href={href(locale, 'domain', domain.id)}
                className="group flex items-center gap-3 py-2.5 first:pt-0 last:pb-0"
              >
                <span className="h-12 w-16 shrink-0 border border-[#d8d8d8] bg-[#f2f2f2] p-0.5">
                  <SectorScene name={domainScenes[domain.id]} className="h-full w-full" />
                </span>
                <span className="min-w-0 flex-1">
                  <span className="win-title block text-[14px] group-hover:text-[#1f4b96]">
                    {domain.name[locale]}
                  </span>
                  <span className="mt-0.5 block text-[12px] leading-[1.45] text-[#5f5f5f]">
                    {domain.description[locale]}
                  </span>
                </span>
                <span className="win-status exploration shrink-0">{dict.common.exploration}</span>
              </Link>
            </li>
          ))}
        </ul>
      </WindowPanel>

      <CtaBand
        locale={locale}
        title={dict.home.cta.title}
        subtitle={dict.home.cta.subtitle}
        button={dict.home.cta.button}
      />
    </div>
  );
}
