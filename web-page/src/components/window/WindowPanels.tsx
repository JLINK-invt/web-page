'use client';

import Link from 'next/link';
import type { Dictionary } from '@/content/dictionaries';
import type { Locale } from '@/lib/i18n';
import { domains } from '@/content/domains';
import { projects } from '@/content/projects';
import { solutionAreas } from '@/content/solutions';
import { site } from '@/content/site';
import { href } from '@/lib/routes';
import { ArrowIcon } from '@/components/ui/ArrowIcon';
import { ContactForm } from '@/components/contact/ContactForm';
import { Logo } from '@/components/site/Logo';
import { GlossIcon, type GlossIconName } from '@/components/window/GlossIcon';
import { MonitorArt, type OsdItem } from '@/components/window/MonitorArt';
import { ExplorationArt, LiveProductArt, MethodArt } from '@/components/window/StripArt';
import { UnitArt } from '@/components/window/UnitArt';
import { navItems } from '@/components/window/navItems';
import { useWindow, type PanelId } from '@/components/site/WindowProvider';

type PanelProps = {
  locale: Locale;
  dict: Dictionary;
};

type StripLink = { label: string; onClick: () => void; status?: 'live' | 'open' };

function StatusPill({ label, live }: { label: string; live: boolean }) {
  return (
    <span className={live ? 'win-status' : 'win-status exploration'}>
      <span className="win-status-dot" />
      {label}
    </span>
  );
}

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

function StripCard({
  label,
  title,
  body,
  cta,
  art,
  onCta,
  links,
}: {
  label: string;
  title: string;
  body: string;
  cta: string;
  art: React.ReactNode;
  onCta: () => void;
  links: StripLink[];
}) {
  return (
    <div className="win-strip-card relative flex min-w-0 items-start p-3 pr-[102px] sm:p-4 sm:pr-[122px]">
      <div className="min-w-0">
        <p className="win-label">{label}</p>
        <h2 className="win-strip-title mt-1">{title}</h2>
        <p className="mt-1.5 text-[12.5px] leading-[1.5] text-[#4a4a4a]">{body}</p>
        <ul className="mt-2 space-y-1">
          {links.map((link) => (
            <li key={link.label} className="flex items-start gap-1.5">
              {link.status ? (
                <span
                  aria-hidden="true"
                  className={link.status === 'live' ? 'win-bullet live' : 'win-bullet open'}
                />
              ) : null}
              <button
                type="button"
                onClick={link.onClick}
                className="win-link text-left text-[12.5px] leading-[1.35]"
              >
                {link.label}
              </button>
            </li>
          ))}
        </ul>
        <button
          type="button"
          onClick={onCta}
          className="win-btn-ghost mt-2 inline-flex items-center gap-1"
        >
          {cta}
          <ArrowIcon className="h-3 w-3" />
        </button>
      </div>
      <div className="pointer-events-none absolute -top-2 right-1 h-[72px] w-[92px] sm:h-[84px] sm:w-[108px]">
        {art}
      </div>
    </div>
  );
}

export function HomePanel({ dict }: PanelProps) {
  const { active, setActive } = useWindow();
  const items: OsdItem[] = navItems(dict);
  const areas: { name: GlossIconName; label: string; panel: PanelId }[] = [
    { name: 'house', label: dict.common.domotics, panel: 'domotics' },
    { name: 'factory', label: dict.common.industrial, panel: 'industrial' },
    { name: 'sprout', label: dict.common.agriculture, panel: 'agriculture' },
    { name: 'cross', label: dict.common.medical, panel: 'medical' },
  ];

  return (
    <div className="flex flex-1 flex-col bg-[#f7f7f7]">
      <div className="win-banner flex flex-1 flex-col justify-center">
        <div className="relative z-10 flex w-full flex-col gap-8 px-5 py-8 sm:px-8 lg:flex-row lg:items-center lg:gap-12 lg:px-10 lg:py-3.5">
          <div className="min-w-0 flex-1 text-white">
            <div className="flex flex-wrap items-center justify-between gap-x-4 gap-y-2">
              <Logo tone="inverse" />
              <span className="text-[10.5px] leading-tight tracking-[0.14em] text-white uppercase">
                {dict.meta.tagline}
              </span>
            </div>

            <h1
              data-panel-heading
              tabIndex={-1}
              className="font-display mt-6 max-w-[19ch] text-[clamp(1.85rem,3.6vw,3.15rem)] leading-[1.04] font-bold tracking-[-0.025em] text-balance drop-shadow-[0_1px_2px_rgba(10,30,60,0.35)] outline-none"
            >
              {renderTitle(dict.home.hero.title, dict.home.hero.titleAccent)}
            </h1>

            <p className="mt-4 max-w-[52ch] text-[13.5px] leading-[1.65] text-[#f4f8ff]">
              {dict.home.hero.subtitle}
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-2.5">
              <button
                type="button"
                onClick={() => setActive('projects')}
                className="win-btn win-btn-gold"
              >
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

            <p className="mt-5 flex items-center gap-2 text-[12px] leading-tight text-[#f4f8ff]">
              <span aria-hidden="true" className="win-live-dot" />
              {dict.home.hero.note}
            </p>
          </div>

          <div className="mx-auto flex w-full max-w-[340px] shrink-0 flex-col gap-3 sm:max-w-[420px] lg:mx-0 lg:w-[42%] lg:max-w-[460px]">
            <MonitorArt
              screenTitle={dict.window.screenTitle}
              osdTitle={dict.window.osdTitle}
              clock={dict.window.clock}
              items={items.slice(0, 6)}
              activeId={active}
              onSelect={(id) => setActive(id as PanelId)}
              productRows={[
                { label: 'Smart House', status: 'LIVE' },
                { label: 'Fitness Gym', status: 'LIVE' },
                { label: 'Health Psychology', status: 'LIVE' },
              ]}
            />

            <div
              role="group"
              aria-label={dict.nav.solutions}
              className="win-dock flex items-stretch justify-center gap-0.5 p-1.5"
            >
              {areas.map((area) => (
                <GlossIcon
                  key={area.panel}
                  name={area.name}
                  label={area.label}
                  size="sm"
                  tone="dark"
                  active={active === area.panel}
                  onClick={() => setActive(area.panel)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="grid shrink-0 grid-cols-1 gap-2 p-2 md:grid-cols-2 lg:grid-cols-3">
        <StripCard
          label={dict.window.live.label}
          title={dict.window.live.title}
          body={dict.window.live.body}
          cta={dict.window.live.cta}
          art={<LiveProductArt />}
          onCta={() => setActive('projects')}
          links={[
            { label: 'Smart House', status: 'live', onClick: () => setActive('projects') },
            { label: 'Fitness Gym', status: 'live', onClick: () => setActive('projects') },
            { label: 'Health Psychology', status: 'live', onClick: () => setActive('projects') },
          ]}
        />
        <StripCard
          label={dict.window.exploration.label}
          title={dict.window.exploration.title}
          body={dict.window.exploration.body}
          cta={dict.window.exploration.cta}
          art={<ExplorationArt />}
          onCta={() => setActive('agriculture')}
          links={[
            {
              label: dict.common.agriculture,
              status: 'open',
              onClick: () => setActive('agriculture'),
            },
            {
              label: dict.common.industrial,
              status: 'open',
              onClick: () => setActive('industrial'),
            },
            { label: dict.common.medical, status: 'open', onClick: () => setActive('medical') },
          ]}
        />
        <div className="md:col-span-2 lg:col-span-1">
          <StripCard
            label={dict.window.method.label}
            title={dict.window.method.title}
            body={dict.window.method.body}
            cta={dict.window.method.cta}
            art={<MethodArt />}
            onCta={() => setActive('method')}
            links={dict.home.approach.steps.map((step) => ({
              label: step.title,
              onClick: () => setActive('method'),
            }))}
          />
        </div>
      </div>
    </div>
  );
}

export function UnitPanel({ locale, dict, domainId }: PanelProps & { domainId: string }) {
  const { setActive } = useWindow();
  const area = solutionAreas.find((item) => item.id === domainId);
  const domain = domains.find((item) => item.id === domainId);

  if (!area || !domain) return null;

  const live = area.status === 'active';

  return (
    <div className="flex flex-1 flex-col p-2">
      <div className="win-panel flex flex-1 flex-col">
        <div className="flex flex-wrap items-center gap-x-3 gap-y-2 border-b border-[#e0e0e0] bg-[#f2f2f2] px-4 py-2.5">
          <h1 data-panel-heading tabIndex={-1} className="win-title text-[21px] outline-none">
            {area.name[locale]}
          </h1>
          <StatusPill
            label={live ? dict.window.unit.statusLive : dict.window.unit.statusExploration}
            live={live}
          />
          <div className="ml-auto flex flex-wrap items-center gap-x-4 gap-y-2">
            <Link href={href(locale, 'domain', domain.id)} className="win-btn win-btn-plain">
              {dict.window.unit.openPage}
            </Link>
            <button
              type="button"
              onClick={() => setActive('contact')}
              className="win-btn-ghost inline-flex items-center gap-1"
            >
              {dict.window.unit.contact}
              <ArrowIcon className="h-3 w-3" />
            </button>
          </div>
        </div>

        <div className="grid flex-1 grid-cols-1 gap-4 p-4 lg:grid-cols-[1.35fr_0.65fr]">
          <div className="min-w-0">
            <p className="text-[14px] leading-[1.6] text-[#3d3d3d]">{area.description[locale]}</p>

            <h2 className="win-label mt-5">{dict.window.unit.solutionsTitle}</h2>
            <ul className="mt-2 space-y-2">
              {area.solutions.map((solution) => (
                <li key={solution.id} className="border border-[#e2e2e2] bg-[#fafafa] p-2.5">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="font-display text-[13px] font-bold text-[#333333]">
                      {solution.name[locale]}
                    </span>
                    <StatusPill
                      label={
                        solution.status === 'live'
                          ? dict.window.unit.statusLive
                          : dict.window.unit.statusExploration
                      }
                      live={solution.status === 'live'}
                    />
                  </div>
                  <p className="mt-1 text-[12px] leading-[1.45] text-[#5f5f5f]">
                    {solution.description[locale]}
                  </p>
                </li>
              ))}
            </ul>

            {!live ? (
              <p className="mt-4 border-l-2 border-[#c79a33] bg-[#fdf8ec] p-3 text-[12px] leading-[1.5] text-[#5c5433]">
                {dict.domain.explorationBody}
              </p>
            ) : null}
          </div>

          <div className="flex min-h-0 flex-col items-center justify-center gap-3 border border-[#e2e2e2] bg-[#f6f6f6] p-3">
            <div className="h-full max-h-[220px] w-full max-w-[220px]">
              <UnitArt domainId={domain.id} />
            </div>
            <p className="text-center text-[12px] leading-[1.5] text-[#5f5f5f]">
              {domain.description[locale]}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export function ProjectsPanel({ locale, dict }: PanelProps) {
  const { setActive } = useWindow();
  const live = projects.filter((project) => project.featured);

  return (
    <div className="flex flex-1 flex-col p-2">
      <div className="win-panel flex flex-1 flex-col">
        <div className="border-b border-[#e0e0e0] bg-[#f2f2f2] px-4 py-2.5">
          <h1 data-panel-heading tabIndex={-1} className="win-title text-[21px] outline-none">
            {dict.home.projects.title}
          </h1>
          <p className="mt-1 text-[12px] leading-[1.5] text-[#5f5f5f]">
            {dict.home.projects.subtitle}
          </p>
        </div>

        <div className="grid flex-1 grid-cols-1 gap-4 p-4 lg:grid-cols-[1.4fr_0.6fr]">
          <ul className="space-y-2">
            {live.map((project) => (
              <li
                key={project.slug}
                className="flex flex-wrap items-center gap-3 border border-[#e2e2e2] bg-[#fafafa] p-3"
              >
                <span className="font-display flex h-11 w-11 shrink-0 items-center justify-center rounded-[3px] bg-[linear-gradient(180deg,#6d9ee0_0%,#2a5db0_100%)] text-[15px] font-bold text-white">
                  {project.name.slice(0, 2).toUpperCase()}
                </span>
                <div className="min-w-0 flex-1">
                  <div className="flex flex-wrap items-center gap-2">
                    <h2 className="font-display text-[14px] font-bold text-[#333333]">
                      {project.name}
                    </h2>
                    <StatusPill label={dict.common.active} live />
                  </div>
                  <p className="mt-0.5 truncate text-[12px] text-[#5f5f5f]">
                    {project.tagline[locale]}
                  </p>
                </div>
                <Link
                  href={href(locale, 'projects', project.slug)}
                  className="win-btn win-btn-plain shrink-0"
                >
                  {dict.common.viewProject}
                </Link>
              </li>
            ))}
            <li className="pt-1 text-[12px] leading-[1.5] text-[#5f5f5f]">
              {dict.window.projects.note}
            </li>
          </ul>

          <div className="flex max-h-[420px] flex-col gap-2 overflow-y-auto border border-[#e2e2e2] bg-[#f6f6f6] p-3">
            <h2 className="win-label">{dict.projects.upcomingHeading}</h2>
            {domains
              .filter((domain) => domain.status === 'upcoming')
              .map((domain) => (
                <div key={domain.id} className="border border-[#e2e2e2] bg-white p-2.5">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="font-display text-[13px] font-bold text-[#333333]">
                      {domain.name[locale]}
                    </span>
                    <StatusPill label={dict.common.exploration} live={false} />
                  </div>
                  <button
                    type="button"
                    onClick={() => setActive('contact')}
                    className="win-btn-ghost mt-1.5 inline-flex items-center gap-1"
                  >
                    {dict.domain.explorationCta}
                    <ArrowIcon className="h-3 w-3" />
                  </button>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export function MethodPanel({ dict }: PanelProps) {
  const { setActive } = useWindow();

  return (
    <div className="flex flex-1 flex-col p-2">
      <div className="win-panel flex flex-1 flex-col">
        <div className="border-b border-[#e0e0e0] bg-[#f2f2f2] px-4 py-2.5">
          <h1 data-panel-heading tabIndex={-1} className="win-title text-[21px] outline-none">
            {dict.home.approach.title}
          </h1>
          <p className="mt-1 text-[12px] leading-[1.5] text-[#5f5f5f]">
            {dict.home.approach.subtitle}
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
              <p className="mt-1.5 text-[12px] leading-[1.5] text-[#5f5f5f]">{step.description}</p>
            </li>
          ))}
        </ol>

        <div className="flex flex-wrap items-center gap-4 border-t border-[#e0e0e0] bg-[#f2f2f2] px-4 py-3">
          <div className="min-w-0">
            <p className="font-display text-[14px] font-bold text-[#333333]">
              {dict.home.cta.title}
            </p>
            <p className="text-[12px] text-[#5f5f5f]">{dict.home.cta.subtitle}</p>
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
    <div className="flex flex-1 flex-col p-2">
      <div className="win-panel flex flex-1 flex-col">
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

            <p className="mt-auto pt-6 text-[12px] leading-[1.5] text-[#5f5f5f]">
              {dict.contact.privacyNote}{' '}
              <Link href={href(locale, 'privacy')} className="win-link">
                {dict.footer.privacy}
              </Link>
            </p>
          </div>

          <div className="p-4">
            <h2 className="win-label">{dict.window.contactPanel.formTitle}</h2>
            <p className="mt-1 mb-3 text-[12px] text-[#5f5f5f]">{dict.window.contactPanel.note}</p>
            <ContactForm dict={dict} compact />
          </div>
        </div>
      </div>
    </div>
  );
}
