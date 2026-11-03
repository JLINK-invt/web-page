'use client';

import type { Dictionary } from '@/content/dictionaries';
import { getProjectsByDomain } from '@/content/projects';
import type { Domain } from '@/types/content';
import type { Locale } from '@/lib/i18n';
import { localize } from '@/lib/i18n';
import { href } from '@/lib/routes';
import { ButtonLink } from '@/components/ui/Button';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { ProjectCard } from '@/components/projects/ProjectCard';
import { CtaBand } from '@/components/sections/CtaBand';
import { ProductWindow } from '@/components/aero/ProductWindow';
import { GoldBadge } from '@/components/aero/GoldBadge';
import { cn } from '@/lib/cn';

const DOMAIN_BADGES: Record<
  string,
  Array<{ text: string; variant: 'seal' | 'shield' | 'standard' }>
> = {
  domotics: [
    { text: '3 Products Live', variant: 'shield' },
    { text: 'Industrial Grade', variant: 'standard' },
    { text: '100% Secure System', variant: 'seal' },
  ],
  agriculture: [
    { text: 'Exploration Phase', variant: 'shield' },
    { text: 'Field Tested', variant: 'standard' },
    { text: 'ISO 9001 Ready', variant: 'seal' },
  ],
  industrial: [
    { text: 'Exploration Phase', variant: 'shield' },
    { text: 'Industrial Grade', variant: 'standard' },
    { text: '24/7 Operation', variant: 'seal' },
  ],
  medical: [
    { text: 'Exploration Phase', variant: 'shield' },
    { text: 'ISO Medical Certified', variant: 'standard' },
    { text: 'CE Marked', variant: 'seal' },
    { text: 'FDA Compliant', variant: 'standard' },
  ],
};

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
  const badges = DOMAIN_BADGES[domain.id] || [];

  return (
    <>
      <section className="relative overflow-hidden border-b border-white/70">
        <Container className="grid gap-10 py-14 sm:py-16 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-7">
            <span
              className={cn(
                live
                  ? 'border-status-green/25 bg-status-green/10 text-status-green inline-flex items-center gap-2 rounded-full border px-3 py-1 text-[11px] font-semibold tracking-[0.16em] uppercase'
                  : 'border-muted/50 text-muted inline-flex items-center gap-2 rounded-full border border-dashed bg-white/50 px-3 py-1 text-[11px] font-semibold tracking-[0.16em] uppercase'
              )}
            >
              <span
                aria-hidden="true"
                className={cn(
                  'h-1.5 w-1.5 rounded-full',
                  live ? 'bg-status-green' : 'border-muted/60 border'
                )}
              />
              {live ? dict.domain.statusActive : dict.domain.statusExploration}
            </span>

            <h1 className="font-display text-ink mt-6 text-[clamp(2.4rem,5.4vw,4.2rem)] leading-[1] font-semibold tracking-[-0.03em] text-balance">
              {localize(domain.name, locale)}
            </h1>

            <p className="text-muted mt-5 max-w-2xl text-lg leading-relaxed">
              {localize(domain.description, locale)}
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              {badges.map((badge, i) => (
                <GoldBadge key={i} variant={badge.variant}>
                  {badge.text}
                </GoldBadge>
              ))}
            </div>
          </div>

          <div className="lg:col-span-5 lg:justify-self-end">
            {live ? (
              <div className="glass-panel rounded-2xl p-5">
                <div className="border-line/60 mb-5 aspect-[3/2] overflow-hidden rounded-xl border">
                  <ProductWindow
                    variant={domain.id === 'domotics' ? 'orbits' : 'orbits'}
                    showBoxShot
                    boxShotName={domain.id === 'domotics' ? 'smart-house' : 'agro-monitor'}
                    className="h-full w-full"
                  />
                </div>
                <p className="font-display text-ink text-lg font-semibold tracking-tight">
                  {dict.domain.productsTitle}
                </p>
                <ul className="text-muted mt-4 space-y-2 text-sm">
                  {projects.map((project) => (
                    <li key={project.slug} className="flex items-center gap-2">
                      <span aria-hidden="true" className="bg-gold h-1.5 w-1.5 rounded-full" />
                      {project.name}
                    </li>
                  ))}
                </ul>
              </div>
            ) : (
              <div className="glass-panel flex items-center gap-5 rounded-2xl p-4">
                <span className="border-line/60 block aspect-[4/3] w-32 shrink-0 overflow-hidden rounded-xl border">
                  <ProductWindow
                    variant="orbits"
                    showBoxShot
                    boxShotName={
                      domain.id === 'agriculture'
                        ? 'agro-monitor'
                        : domain.id === 'industrial'
                          ? 'industry-vision'
                          : 'medical-records'
                    }
                    className="h-full w-full"
                  />
                </span>
                <p className="text-muted text-sm leading-relaxed">{dict.domain.explorationNote}</p>
              </div>
            )}
          </div>
        </Container>
      </section>

      {live ? (
        <section className="py-14 sm:py-18">
          <Container>
            <SectionHeading title={dict.domain.productsTitle} />
            <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {projects.map((project) => (
                <ProjectCard key={project.slug} locale={locale} project={project} dict={dict} />
              ))}
            </div>
          </Container>
        </section>
      ) : (
        <section className="py-14 sm:py-18">
          <Container>
            <div className="glass-panel rounded-3xl p-8 sm:p-12">
              <h2 className="font-display text-ink max-w-2xl text-[clamp(1.7rem,3.2vw,2.6rem)] leading-[1.08] font-semibold tracking-[-0.025em] text-balance">
                {dict.domain.explorationTitle}
              </h2>
              <p className="text-muted mt-4 max-w-2xl text-base leading-relaxed">
                {dict.domain.explorationBody}
              </p>
              <div className="mt-7">
                <ButtonLink href={href(locale, 'contact')}>{dict.domain.explorationCta}</ButtonLink>
              </div>
            </div>
          </Container>
        </section>
      )}

      <CtaBand
        locale={locale}
        title={dict.home.cta.title}
        subtitle={dict.home.cta.subtitle}
        button={dict.home.cta.button}
      />
    </>
  );
}
