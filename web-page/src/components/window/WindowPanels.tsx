'use client';

import Link from 'next/link';
import type { Dictionary } from '@/content/dictionaries';
import type { Locale } from '@/lib/i18n';
import { localize } from '@/lib/i18n';
import type { DomainId } from '@/types/content';
import { domains } from '@/content/domains';
import { getProjectsByDomain, getFeaturedProjects } from '@/content/projects';
import { solutionAreas } from '@/content/solutions';
import { site } from '@/content/site';
import { unitThemeStyle, unitThemes } from '@/content/unitThemes';
import { href } from '@/lib/routes';
import { ArrowIcon } from '@/components/ui/ArrowIcon';
import { ContactForm } from '@/components/contact/ContactForm';
import { Logo } from '@/components/site/Logo';
import { ProductCarousel } from '@/components/window/ProductCarousel';
import { ProjectCard } from '@/components/projects/ProjectCard';
import { UnitTile } from '@/components/window/UnitTile';
import { UnitGlyph, unitGlyph } from '@/components/window/UnitGlyph';
import { MonitorArt, type OsdItem } from '@/components/window/MonitorArt';
import { SectorScene } from '@/components/aero/SectorScene';
import { CtaBand } from '@/components/sections/CtaBand';
import { WindowPanel } from '@/components/window/WindowPanel';
import { navItems } from '@/components/window/navItems';
import { useWindow, type PanelId } from '@/components/site/WindowProvider';

type PanelProps = {
  locale: Locale;
  dict: Dictionary;
};

function renderTitle(title: string, accent: string) {
  const index = title.toLowerCase().indexOf(accent.toLowerCase());
  if (index === -1) return title;

  return (
    <>
      {title.slice(0, index)}
      <span className="text-[#ffe3a3]">{title.slice(index, index + accent.length)}</span>
      {title.slice(index + accent.length)}
    </>
  );
}

export function scrollToProducts() {
  const target = document.getElementById('productos');
  if (!target) return;

  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  target.scrollIntoView({ behavior: reduced ? 'auto' : 'smooth', block: 'start' });
}

export function HomePanel({ locale, dict }: PanelProps) {
  const { active, setActive } = useWindow();
  const items: OsdItem[] = navItems(dict);
  const featured = getFeaturedProjects();

  const units: { id: DomainId; label: string; description: string }[] = [
    { id: 'domotics', label: dict.common.domotics, description: dict.home.units.domotics },
    {
      id: 'industrial',
      label: dict.common.industrial,
      description: dict.home.units.industrial,
    },
    {
      id: 'agriculture',
      label: dict.common.agriculture,
      description: dict.home.units.agriculture,
    },
    { id: 'medical', label: dict.common.medical, description: dict.home.units.medical },
  ];

  return (
    <div className="flex flex-col">
      {/* Section 1: Hero + Monitor */}
      <section className="win-section win-section-hero relative overflow-hidden">
        <div className="win-hero-bg absolute inset-0" />
        <div className="win-hero-scrim absolute inset-0" />
        <div className="relative grid items-center gap-8 px-5 py-6 sm:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12 lg:px-10 lg:py-7">
          <div className="min-w-0 text-white">
            <Logo tone="inverse" />

            <h1
              data-panel-heading
              tabIndex={-1}
              className="font-display mt-4 max-w-[17ch] text-[clamp(1.85rem,3.2vw,2.9rem)] leading-[1.05] font-bold tracking-[-0.025em] text-balance drop-shadow-[0_1px_2px_rgba(10,30,60,0.35)] outline-none"
            >
              {renderTitle(dict.home.hero.title, dict.home.hero.titleAccent)}
            </h1>

            <p className="mt-3 max-w-[54ch] text-[13.5px] leading-[1.6] text-[#f4f8ff]">
              {dict.home.hero.subtitle}
            </p>

            <div className="mt-4 flex flex-wrap items-center gap-2.5">
              <button type="button" onClick={scrollToProducts} className="win-btn win-btn-gold">
                {dict.home.hero.primaryCta}
              </button>
              <button
                type="button"
                onClick={() => setActive('contact')}
                className="win-btn win-btn-light"
              >
                {dict.home.hero.secondaryCta}
              </button>
            </div>

            <p className="mt-3.5 flex items-start gap-2 text-[12.5px] leading-[1.5] text-[#eef4ff]">
              <span aria-hidden="true" className="win-live-dot mt-1" />
              {dict.home.hero.note}
            </p>

            <div className="mt-4 border-t border-white/25 pt-3.5">
              <p className="max-w-[60ch] text-[12px] leading-[1.55] text-[#e6eefc]">
                {dict.home.company.teaser}
              </p>
              <button
                type="button"
                onClick={() => setActive('method')}
                className="win-btn-ghost mt-1.5 inline-flex items-center gap-1 text-[#ffe3a3] hover:text-white"
              >
                {dict.home.company.cta}
                <ArrowIcon className="h-3 w-3" />
              </button>
            </div>
          </div>

          <div className="mx-auto w-full max-w-[400px] lg:mx-0 lg:ml-auto lg:max-w-[400px]">
            <MonitorArt
              screenTitle={dict.window.screenTitle}
              osdTitle={dict.window.osdTitle}
              clock={dict.window.clock}
              items={items}
              activeId={active}
              onSelect={(id) => setActive(id as PanelId)}
            />
          </div>
        </div>
      </section>

      {/* Section 2: Business Units Dock */}
      <section className="win-section">
        <div className="mx-auto grid max-w-[860px] grid-cols-2 gap-1.5 px-2 py-2 sm:grid-cols-4">
          {units.map((unit) => (
            <UnitTile
              key={unit.id}
              id={unit.id}
              label={unit.label}
              description={unit.description}
              active={active === unit.id}
              onClick={() => setActive(unit.id)}
            />
          ))}
        </div>
      </section>

      {/* Section 3: Product Carousel */}
      <ProductCarousel locale={locale} projects={featured} title={dict.home.projects.title} />

      {/* Section 4: Areas and the products they hold */}
      <section className="win-section">
        <div className="px-5 pt-4 pb-1">
          <h2 className="font-display text-[19px] leading-tight font-bold">
            {dict.home.domains.title}
          </h2>
          <p className="mt-1 max-w-[78ch] text-[12.5px] leading-[1.55] text-[#45505d]">
            {dict.home.domains.subtitle}
          </p>
        </div>

        <div className="grid gap-2.5 px-4 pt-3 pb-4 sm:grid-cols-2 xl:grid-cols-4">
          {units.map((unit) => {
            const domain = domains.find((item) => item.id === unit.id);
            if (!domain) return null;

            const theme = unitThemes[unit.id];
            const areaProducts = getProjectsByDomain(unit.id);

            return (
              <article
                key={unit.id}
                className="flex min-w-0 flex-col gap-2 rounded-lg border border-[#dfe6f0] bg-white/80 p-3"
              >
                <div className="flex items-center gap-2.5">
                  <span
                    className="unit-orb flex h-10 w-10 shrink-0 items-center justify-center rounded-full"
                    style={{ backgroundColor: theme.primary, color: theme.glyph }}
                  >
                    <UnitGlyph name={unitGlyph[unit.id]} className="h-5 w-5" />
                  </span>
                  <div className="min-w-0">
                    <h3 className="font-display text-[14px] leading-tight font-bold text-[#253b59]">
                      {unit.label}
                    </h3>
                    <p className="text-[11px] leading-[1.35] text-[#3f4f66]">{unit.description}</p>
                  </div>
                </div>

                <p className="text-[11.5px] leading-[1.5] text-[#45505d]">
                  {localize(domain.description, locale)}
                </p>

                {areaProducts.length > 0 ? (
                  <ul className="flex flex-col gap-1.5">
                    {areaProducts.map((project) => (
                      <li key={project.slug} className="min-w-0">
                        <Link
                          href={href(locale, 'projects', project.slug)}
                          className="font-display text-[12.5px] leading-tight font-bold text-[#1f4b96] hover:underline"
                        >
                          {project.name}
                        </Link>
                        <p className="mt-0.5 text-[11px] leading-[1.4] text-[#5a6a80]">
                          {localize(project.tagline, locale)}
                        </p>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-[11.5px] leading-[1.5] text-[#5a6a80]">
                    {dict.window.unit.workingTitle}
                  </p>
                )}

                <button
                  type="button"
                  onClick={() => setActive(unit.id)}
                  className="win-btn-ghost mt-auto inline-flex items-center gap-1 self-start"
                >
                  {dict.home.domains.viewArea}
                  <ArrowIcon className="h-3 w-3" />
                </button>
              </article>
            );
          })}
        </div>
      </section>

      {/* Section 5: How we work */}
      <section className="win-section">
        <div className="px-5 pt-4 pb-1">
          <h2 className="font-display text-[19px] leading-tight font-bold">
            {dict.home.hero.valuesLabel}
          </h2>
          <p className="mt-1 text-[12.5px] text-[#45505d]">{dict.home.hero.valuesNote}</p>
        </div>

        <ul className="grid gap-2.5 px-4 pt-3 pb-4 sm:grid-cols-2 xl:grid-cols-4">
          {[
            dict.home.hero.value1,
            dict.home.hero.value2,
            dict.home.hero.value3,
            dict.home.hero.value4,
          ].map((value) => (
            <li
              key={value}
              className="flex min-w-0 gap-2 rounded-lg border border-[#dfe6f0] bg-white/80 p-3 text-[12px] leading-[1.5] text-[#3d3d3d]"
            >
              <span aria-hidden="true" className="win-live-dot mt-1.5" />
              <span>{value}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* Section 6: Closing call to action */}
      <div className="px-3 pb-3">
        <CtaBand
          locale={locale}
          title={dict.home.cta.title}
          subtitle={dict.home.cta.subtitle}
          button={dict.home.cta.button}
        />
      </div>
    </div>
  );
}

export function UnitPanel({ locale, dict, domainId }: PanelProps & { domainId: DomainId }) {
  const { setActive } = useWindow();
  const area = solutionAreas.find((item) => item.id === domainId);
  const domain = domains.find((item) => item.id === domainId);

  if (!area || !domain) return null;

  const products = getProjectsByDomain(domain.id);

  return (
    <div className="flex flex-col gap-2 p-2" style={unitThemeStyle(domain.id)}>
      <section className="win-panel overflow-hidden">
        <div className="unit-banner">
          <div className="grid gap-4 px-4 py-4 sm:grid-cols-[1fr_auto] sm:items-center sm:py-5">
            <div className="min-w-0">
              <h1
                data-panel-heading
                tabIndex={-1}
                className="font-display text-[23px] leading-tight font-bold text-white outline-none"
              >
                {area.name[locale]}
              </h1>
              <p className="mt-1.5 max-w-[62ch] text-[12.5px] leading-[1.55] text-[#eaf2ff]">
                {area.description[locale]}
              </p>

              <div className="mt-3.5 flex flex-wrap items-center gap-2">
                <button
                  type="button"
                  onClick={() => setActive('contact')}
                  className="win-btn win-btn-light"
                >
                  {dict.window.unit.contact}
                  <ArrowIcon className="h-3 w-3" />
                </button>
              </div>
            </div>

            <div className="w-36 justify-self-start border border-white/50 bg-white/95 p-1.5 shadow-[0_2px_8px_rgba(8,26,52,0.35)] sm:w-44 sm:justify-self-end">
              <SectorScene name={area.scene} className="aspect-[4/3] h-auto w-full" />
            </div>
          </div>
        </div>
      </section>

      {products.length > 0 ? (
        <WindowPanel title={dict.domain.productsTitle} titleId="domain-products">
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {products.map((project) => (
              <ProjectCard key={project.slug} locale={locale} project={project} dict={dict} />
            ))}
          </div>
        </WindowPanel>
      ) : (
        <WindowPanel title={dict.window.unit.workingTitle} titleId="domain-working">
          <p className="max-w-[70ch] text-[13px] leading-[1.6] text-[#3d3d3d]">
            {dict.window.unit.workingBody}
          </p>
          <button
            type="button"
            onClick={() => setActive('contact')}
            className="win-btn-ghost mt-2 inline-flex items-center gap-1"
          >
            {dict.window.unit.contact}
            <ArrowIcon className="h-3 w-3" />
          </button>
        </WindowPanel>
      )}

      <CtaBand
        locale={locale}
        title={dict.home.cta.title}
        subtitle={dict.home.cta.subtitle}
        button={dict.home.cta.button}
        tone="unit"
      />
    </div>
  );
}

export function CompanyPanel({ dict }: PanelProps) {
  const { setActive } = useWindow();

  return (
    <div className="flex flex-col p-2">
      <div className="win-panel flex flex-col">
        <div className="border-b border-[#e0e0e0] bg-[#f2f2f2] px-4 py-2.5">
          <h1 data-panel-heading tabIndex={-1} className="win-title text-[21px] outline-none">
            {dict.home.company.title}
          </h1>
          <p className="mt-1 max-w-[72ch] text-[12.5px] leading-[1.6] text-[#45505d]">
            {dict.home.company.body}
          </p>
        </div>

        <ol className="grid flex-1 grid-cols-1 gap-3 p-4 sm:grid-cols-3">
          {dict.home.approach.steps.map((step) => (
            <li
              key={step.number}
              className="flex min-w-0 flex-col border border-[#e2e2e2] bg-[#fafafa] p-3"
            >
              <span className="font-mono text-[20px] leading-none font-bold text-[#2a5db0]">
                {step.number}
              </span>
              <h2 className="font-display mt-2 text-[15px] leading-tight font-bold text-[#333333]">
                {step.title}
              </h2>
              <p className="mt-1.5 text-[12px] leading-[1.5] text-[#45505d]">{step.description}</p>
            </li>
          ))}
        </ol>

        <div className="flex flex-wrap items-center gap-4 border-t border-[#e0e0e0] bg-[#f2f2f2] px-4 py-3">
          <div className="min-w-0">
            <p className="font-display text-[14px] font-bold text-[#333333]">
              {dict.home.cta.title}
            </p>
            <p className="text-[12px] text-[#45505d]">{dict.home.cta.subtitle}</p>
          </div>
          <button type="button" onClick={() => setActive('contact')} className="win-btn sm:ml-auto">
            {dict.home.cta.button}
          </button>
        </div>
      </div>
    </div>
  );
}

export function ContactPanel({ locale, dict }: PanelProps) {
  return (
    <div className="flex flex-col p-2">
      <div className="win-panel flex flex-col">
        <div className="grid flex-1 grid-cols-1 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="flex flex-col border-b border-[#e0e0e0] bg-[#f2f2f2] p-4 lg:border-r lg:border-b-0">
            <h1 data-panel-heading tabIndex={-1} className="win-title text-[21px] outline-none">
              {dict.contact.title}
            </h1>
            <p className="mt-2 text-[13px] leading-[1.6] text-[#3d3d3d]">{dict.contact.subtitle}</p>

            <dl className="mt-5 space-y-3 text-[12px]">
              <div>
                <dt className="win-label">{dict.contact.direct.emailLabel}</dt>
                <dd className="mt-1">
                  <a href={`mailto:${site.email}`} className="win-link">
                    {site.email}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="win-label">{dict.contact.direct.responseLabel}</dt>
                <dd className="mt-1 text-[#3d3d3d]">{dict.contact.direct.responseValue}</dd>
              </div>
            </dl>

            <p className="mt-auto pt-6 text-[12px] leading-[1.5] text-[#45505d]">
              {dict.contact.privacyNote}{' '}
              <Link href={href(locale, 'privacy')} className="win-link">
                {dict.footer.privacy}
              </Link>
            </p>
          </div>

          <div className="p-4">
            <h2 className="win-label">{dict.window.contactPanel.formTitle}</h2>
            <p className="mt-1 mb-3 text-[12px] text-[#45505d]">{dict.window.contactPanel.note}</p>
            <ContactForm dict={dict} compact />
          </div>
        </div>
      </div>
    </div>
  );
}
