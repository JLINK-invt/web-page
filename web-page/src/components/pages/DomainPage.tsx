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
import { SectorScene } from '@/components/aero/SectorScene';
import { domainScenes } from '@/content/scenes';

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
    <>
      <section className="relative overflow-hidden border-b border-white/70">
        <Container className="grid gap-10 py-14 sm:py-16 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-7">
            <span
              className={
                live
                  ? 'border-cosmos/25 bg-cosmos/10 text-cosmos inline-flex items-center gap-2 rounded-full border px-3 py-1 text-[11px] font-semibold tracking-[0.16em] uppercase'
                  : 'border-muted/50 text-muted inline-flex items-center gap-2 rounded-full border border-dashed bg-white/50 px-3 py-1 text-[11px] font-semibold tracking-[0.16em] uppercase'
              }
            >
              <span
                aria-hidden="true"
                className={
                  live
                    ? 'bg-cosmos h-1.5 w-1.5 rounded-full'
                    : 'border-muted/60 h-1.5 w-1.5 rounded-full border'
                }
              />
              {live ? dict.domain.statusActive : dict.domain.statusExploration}
            </span>

            <h1 className="font-display text-ink mt-6 text-[clamp(2.4rem,5.4vw,4.2rem)] leading-[1] font-semibold tracking-[-0.03em] text-balance">
              {localize(domain.name, locale)}
            </h1>

            <p className="text-muted mt-5 max-w-2xl text-lg leading-relaxed">
              {localize(domain.description, locale)}
            </p>
          </div>

          <div className="lg:col-span-5 lg:justify-self-end">
            {live ? (
              <div className="glass-panel rounded-2xl p-5">
                <div className="border-line/60 mb-5 aspect-[3/2] overflow-hidden rounded-xl border">
                  <SectorScene
                    name={domainScenes[domain.id]}
                    className="h-full w-full rounded-none"
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
                  <SectorScene
                    name={domainScenes[domain.id]}
                    className="h-full w-full rounded-none"
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
