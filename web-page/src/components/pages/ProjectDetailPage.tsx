import Link from 'next/link';
import { getNextProject } from '@/content/projects';
import { domains } from '@/content/domains';
import type { Project } from '@/types/content';
import { getDictionary, localize, type Locale } from '@/lib/i18n';
import { href } from '@/lib/routes';
import { ArrowIcon } from '@/components/ui/ArrowIcon';
import { ProductWindow } from '@/components/aero/ProductWindow';
import { WindowPanel } from '@/components/window/WindowPanel';
import { PaymentMethodSelector } from '@/components/payment/PaymentMethodSelector';

export function ProjectDetailPage({ locale, project }: { locale: Locale; project: Project }) {
  const dict = getDictionary(locale);
  const next = getNextProject(project.slug);
  const capabilities = localize(project.capabilities, locale);
  const unit = domains.find((domain) => domain.id === project.domain);

  return (
    <div className="flex flex-col gap-2 p-2">
      <div className="flex flex-wrap items-center gap-2 px-1 py-0.5 text-[11px] text-[#47525f]">
        <Link
          href={href(locale, 'domain', project.domain)}
          className="win-btn-ghost inline-flex items-center gap-1"
        >
          <ArrowIcon className="h-3 w-3 rotate-180" />
          {unit ? localize(unit.name, locale) : dict.nav.home}
        </Link>
        <span aria-hidden="true">/</span>
        <span className="text-[#333]">{project.name}</span>
      </div>

      <section className="win-panel overflow-hidden">
        <div className="win-banner">
          <div className="grid gap-4 px-4 py-4 sm:py-5 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
            <div>
              <p className="text-[11px] text-[#dbe8f8]">
                {localize(project.facts[0].value, locale)}
              </p>
              <h1 className="font-display mt-1 text-[26px] leading-tight font-bold text-white">
                {project.name}
              </h1>
              <p className="mt-1.5 max-w-[58ch] text-[12.5px] leading-[1.55] text-[#eaf2ff]">
                {localize(project.tagline, locale)}
              </p>
            </div>

            <ProductWindow
              variant={project.visual}
              title={project.name}
              depth="glass"
              className="w-full"
            />
          </div>
        </div>

        <div className="border-b border-[#e6e6e6] p-3 sm:p-4">
          <p className="max-w-[70ch] text-[13px] leading-[1.6] text-[#3d3d3d]">
            {localize(project.summary, locale)}
          </p>
        </div>
      </section>

      <div className="grid gap-2 lg:grid-cols-[1.35fr_0.65fr]">
        <div className="flex flex-col gap-2">
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

          {project.tutorials && project.tutorials.length > 0 && (
            <WindowPanel title={dict.project.tutorialsTitle} titleId="project-tutorials">
              <p className="mb-4 text-[12px] leading-[1.55] text-[#45505d]">
                {dict.project.tutorialsSubtitle}
              </p>
              <div className="space-y-4">
                {project.tutorials.map((tutorial, idx) => (
                  <details key={idx} className="group">
                    <summary className="flex cursor-pointer list-none items-center gap-2 rounded-lg bg-[#f5f5f5] p-3">
                      <span aria-hidden="true" className="text-2xl">
                        📖
                      </span>
                      <span className="text-[13px] font-medium text-[#333]">
                        {localize(tutorial.title, locale)}
                      </span>
                      <span className="ml-auto text-[#888] transition-transform group-open:rotate-180">
                        ▼
                      </span>
                    </summary>
                    <div className="mt-3 space-y-3">
                      <p className="text-[12px] leading-[1.55] text-[#4a4a4a]">
                        {localize(tutorial.description, locale)}
                      </p>
                      <ol className="list-decimal space-y-2 pl-5">
                        {localize(tutorial.steps, locale).map((step, sIdx) => (
                          <li key={sIdx} className="text-[12px] leading-[1.55] text-[#4a4a4a]">
                            {step}
                          </li>
                        ))}
                      </ol>
                    </div>
                  </details>
                ))}
              </div>
            </WindowPanel>
          )}
        </div>

        <aside className="flex flex-col gap-2">
          <WindowPanel title={dict.project.paymentTitle} titleId="project-payment">
            <PaymentMethodSelector project={project} locale={locale} />
          </WindowPanel>

          <WindowPanel title={dict.project.customTitle} titleId="project-custom">
            <p className="text-[12px] leading-[1.55] text-[#45505d]">
              {dict.project.customSubtitle}
            </p>
            <Link href={href(locale, 'contact')} className="win-btn mt-3 w-full">
              {dict.project.customButton}
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
