'use client';

import Link from 'next/link';
import type { Dictionary } from '@/content/dictionaries';
import { getProjectsByDomain } from '@/content/projects';
import { domainScenes } from '@/content/scenes';
import type { Domain } from '@/types/content';
import type { Locale } from '@/lib/i18n';
import { localize } from '@/lib/i18n';
import { href } from '@/lib/routes';
import { ProjectCard } from '@/components/projects/ProjectCard';
import { CtaBand } from '@/components/sections/CtaBand';
import { WindowPanel } from '@/components/window/WindowPanel';
import { SectorScene } from '@/components/aero/SectorScene';
import { cn } from '@/lib/cn';

export function DomainPage({
  locale,
  domain,
  dict,
}: {
  locale: Locale;
  domain: Domain;
  dict: Dictionary;
}) {
  const live = domain.status === 'active';
  const projects = live ? getProjectsByDomain(domain.id) : [];

  return (
    <div className="flex flex-col gap-2 p-2">
      <section className="win-panel overflow-hidden">
        <div className="win-banner">
          <div className="grid gap-4 px-4 py-4 sm:grid-cols-[1fr_auto] sm:items-center sm:py-5">
            <div>
              <div className="flex flex-wrap items-center gap-2">
                <h1 className="font-display text-[23px] leading-tight font-bold text-white">
                  {localize(domain.name, locale)}
                </h1>
                <span className="inline-flex items-center gap-1.5 rounded-[10px] border border-white/30 bg-[#12335f]/75 px-2 py-0.5 text-[11px] font-bold tracking-[0.04em] text-white uppercase">
                  <span
                    aria-hidden="true"
                    className={cn(
                      'h-1.5 w-1.5 rounded-full',
                      live ? 'bg-[#86df86]' : 'bg-[#f0d28a]'
                    )}
                  />
                  {live ? dict.domain.statusActive : dict.domain.statusExploration}
                </span>
              </div>
              <p className="mt-1.5 max-w-[62ch] text-[12.5px] leading-[1.55] text-[#eaf2ff]">
                {localize(domain.description, locale)}
              </p>
            </div>

            <div className="w-36 justify-self-start border border-white/50 bg-white/95 p-1.5 shadow-[0_2px_8px_rgba(8,26,52,0.35)] sm:w-44 sm:justify-self-end">
              <SectorScene name={domainScenes[domain.id]} className="aspect-[4/3] h-auto w-full" />
            </div>
          </div>
        </div>
      </section>

      {live ? (
        <WindowPanel title={dict.domain.productsTitle} titleId="domain-products">
          <p className="mb-3 max-w-[70ch] text-[12.5px] leading-[1.55] text-[#5f5f5f]">
            {dict.window.live.body}
          </p>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <ProjectCard key={project.slug} locale={locale} project={project} dict={dict} />
            ))}
          </div>
        </WindowPanel>
      ) : (
        <WindowPanel title={dict.domain.explorationTitle} titleId="domain-exploration">
          <p className="max-w-[70ch] text-[13px] leading-[1.6] text-[#3d3d3d]">
            {dict.domain.explorationBody}
          </p>
          <p className="mt-2 max-w-[70ch] text-[12px] leading-[1.55] text-[#6b6b6b]">
            {dict.domain.explorationNote}
          </p>
          <Link href={href(locale, 'contact')} className="win-btn mt-3">
            {dict.domain.explorationCta}
          </Link>
        </WindowPanel>
      )}

      <CtaBand
        locale={locale}
        title={dict.home.cta.title}
        subtitle={dict.home.cta.subtitle}
        button={dict.home.cta.button}
      />
    </div>
  );
}
