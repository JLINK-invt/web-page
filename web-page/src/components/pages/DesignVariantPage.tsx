'use client';

import Link from 'next/link';
import type { Dictionary } from '@/content/dictionaries';
import { domains } from '@/content/domains';
import { getFeaturedProjects } from '@/content/projects';
import type { Locale } from '@/lib/i18n';
import { designsHref, href } from '@/lib/routes';
import { cn } from '@/lib/cn';
import { ButtonLink } from '@/components/ui/Button';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { BearingRail } from '@/components/aero/BearingRail';
import { CelestialGlobe } from '@/components/aero/CelestialGlobe';
import { OrbitalCompass } from '@/components/aero/OrbitalCompass';
import { ProjectCard } from '@/components/projects/ProjectCard';
import { Approach } from '@/components/sections/Approach';
import { CtaBand } from '@/components/sections/CtaBand';

export type DesignVariant = 'esfera' | 'planetario' | 'skeuomorphic';

const variantKeys: DesignVariant[] = ['esfera', 'planetario', 'skeuomorphic'];

function SkeuPedestal({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative mx-auto max-w-lg pb-10">
      <div className="chrome-frame-deep rounded-full p-4 shadow-[0_46px_70px_-40px_rgba(6,26,52,0.95)]">
        {children}
      </div>
      <div
        aria-hidden="true"
        className="mx-auto h-10 w-3/5 rounded-b-[28px] bg-gradient-to-b from-[#cfe2f0] via-[#8fb2cc] to-[#5d84a6] shadow-[inset_0_2px_0_rgba(255,255,255,0.8),0_26px_40px_-26px_rgba(6,26,52,0.9)]"
      />
      <div
        aria-hidden="true"
        className="mx-auto h-3 w-3/5 rounded-[50%] bg-[radial-gradient(ellipse,rgba(6,26,52,0.42),rgba(6,26,52,0)_70%)] blur-[1px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-6 top-8 h-1/3 rounded-full bg-gradient-to-b from-white/45 to-transparent"
      />
    </div>
  );
}

export function DesignVariantPage({
  locale,
  dict,
  variant,
}: {
  locale: Locale;
  dict: Dictionary;
  variant: DesignVariant;
}) {
  const bearings = domains.map((domain) => ({
    id: domain.id,
    label: domain.name[locale],
    href: href(locale, 'domain', domain.id),
    live: domain.status === 'active',
    status: domain.status === 'active' ? dict.common.active : dict.common.exploration,
  }));

  const projects = getFeaturedProjects();
  const skeuo = variant === 'skeuomorphic';

  const visual =
    variant === 'planetario' ? (
      <OrbitalCompass bearings={bearings} />
    ) : skeuo ? (
      <SkeuPedestal>
        <CelestialGlobe bearings={bearings} />
      </SkeuPedestal>
    ) : (
      <CelestialGlobe bearings={bearings} />
    );

  return (
    <div className={skeuo ? 'world-skeuo' : undefined}>
      <div className="border-b border-white/70 bg-[rgba(255,255,255,0.62)]">
        <Container className="flex flex-wrap items-center justify-between gap-3 py-3">
          <p className="text-muted text-[12px] font-semibold tracking-[0.16em] uppercase">
            {dict.designs.banner} <span className="text-ink">{dict.designs.labels[variant]}</span>
          </p>
          <nav className="flex flex-wrap items-center gap-2">
            {variantKeys.map((key) => (
              <Link
                key={key}
                href={
                  key === 'esfera'
                    ? href(locale, 'home')
                    : designsHref(locale, key === 'skeuomorphic' ? 'skeuomorphic' : 'planetario')
                }
                className={cn(
                  'rounded-full border px-3 py-1 text-[12px] font-semibold transition-colors',
                  key === variant
                    ? 'border-transparent bg-gradient-to-b from-[#1a5191] to-[#0a2b52] text-white'
                    : 'border-line text-muted hover:text-cosmos bg-white/70'
                )}
              >
                {dict.designs.labels[key]}
              </Link>
            ))}
          </nav>
        </Container>
      </div>

      <section className="relative overflow-hidden">
        <Container className="grid items-center gap-12 py-12 sm:py-16 lg:grid-cols-12 lg:gap-6 lg:py-24">
          <div className="lg:col-span-6">
            <h1 className="font-display text-ink max-w-2xl text-[clamp(2.6rem,6vw,4.6rem)] leading-[0.98] font-semibold tracking-[-0.03em] text-balance">
              {dict.home.hero.title}
            </h1>
            <p className="text-muted mt-6 max-w-xl text-lg leading-relaxed">
              {dict.home.hero.subtitle}
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <ButtonLink href={href(locale, 'projects')}>{dict.home.hero.primaryCta}</ButtonLink>
              <ButtonLink href={href(locale, 'contact')} variant="secondary">
                {dict.home.hero.secondaryCta}
              </ButtonLink>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="mx-auto max-w-lg lg:max-w-none">{visual}</div>
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container>
          <SectionHeading title={dict.home.domains.title} subtitle={dict.home.domains.subtitle} />
          <BearingRail
            locale={locale}
            labels={{
              active: dict.common.active,
              exploration: dict.common.exploration,
              explore: dict.common.viewProjects,
            }}
            physical={skeuo}
            className="mt-10"
          />
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container>
          <SectionHeading title={dict.home.projects.title} subtitle={dict.home.projects.subtitle} />
          <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <ProjectCard key={project.slug} locale={locale} project={project} dict={dict} />
            ))}
          </div>
        </Container>
      </section>

      <Approach dict={dict} />
      <CtaBand
        locale={locale}
        title={dict.home.cta.title}
        subtitle={dict.home.cta.subtitle}
        button={dict.home.cta.button}
      />
    </div>
  );
}
