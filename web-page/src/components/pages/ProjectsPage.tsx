import { getUpcomingDomains } from '@/content/domains';
import { getFeaturedProjects } from '@/content/projects';
import { getDictionary, type Locale } from '@/lib/i18n';
import { href } from '@/lib/routes';
import Link from 'next/link';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Reveal } from '@/components/ui/Reveal';
import { CtaBand } from '@/components/sections/CtaBand';
import { ProjectCard } from '@/components/projects/ProjectCard';
import { ArrowIcon } from '@/components/ui/ArrowIcon';
import { SectorScene } from '@/components/aero/SectorScene';
import { domainScenes } from '@/content/scenes';

export function ProjectsPage({ locale }: { locale: Locale }) {
  const dict = getDictionary(locale);
  const projects = getFeaturedProjects();
  const upcoming = getUpcomingDomains();

  return (
    <>
      <section className="relative overflow-hidden border-b border-white/70">
        <Container className="py-14 sm:py-20">
          <h1 className="font-display text-ink max-w-4xl text-[clamp(2.4rem,5.6vw,4.4rem)] leading-[0.98] font-semibold tracking-[-0.03em] text-balance">
            {dict.projects.title}
          </h1>
          <p className="text-muted mt-6 max-w-2xl text-lg leading-relaxed">
            {dict.projects.subtitle}
          </p>
        </Container>
      </section>

      <section className="py-14 sm:py-20">
        <Container>
          <SectionHeading
            title={dict.projects.domoticsHeading}
            subtitle={dict.projects.domoticsSubtitle}
          />

          <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, index) => (
              <Reveal key={project.slug} delay={index * 80}>
                <ProjectCard locale={locale} project={project} dict={dict} />
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-y border-white/70 bg-[rgba(255,255,255,0.5)] py-14 backdrop-blur-sm sm:py-20">
        <Container>
          <SectionHeading
            title={dict.projects.upcomingHeading}
            subtitle={dict.projects.upcomingSubtitle}
          />

          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {upcoming.map((domain) => (
              <Link
                key={domain.id}
                href={href(locale, 'domain', domain.id)}
                className="group glass-panel flex h-full flex-col overflow-hidden rounded-2xl p-6 pt-0 transition-transform hover:-translate-y-0.5"
              >
                <div className="border-line/60 -mx-6 mb-5 aspect-[3/2] overflow-hidden border-b">
                  <SectorScene
                    name={domainScenes[domain.id]}
                    className="h-full w-full rounded-none"
                  />
                </div>
                <span className="border-muted/50 text-muted inline-flex w-fit items-center gap-2 rounded-full border border-dashed bg-white/60 px-3 py-1 text-[10px] font-semibold tracking-[0.16em] uppercase">
                  <span
                    aria-hidden="true"
                    className="border-muted/60 h-1.5 w-1.5 rounded-full border"
                  />
                  {dict.common.exploration}
                </span>
                <h3 className="font-display text-ink mt-5 text-xl font-semibold tracking-tight">
                  {domain.name[locale]}
                </h3>
                <p className="text-muted mt-2 flex-1 text-sm leading-relaxed">
                  {domain.description[locale]}
                </p>
                <span className="text-cosmos mt-6 inline-flex items-center gap-2 text-[11px] font-semibold tracking-[0.16em] uppercase">
                  {dict.domain.explorationCta}
                  <ArrowIcon className="transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      <CtaBand
        locale={locale}
        title={dict.home.cta.title}
        subtitle={dict.home.cta.subtitle}
        button={dict.home.cta.button}
      />
    </>
  );
}
