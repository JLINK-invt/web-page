import type { Dictionary } from '@/content/dictionaries';
import { getFeaturedProjects } from '@/content/projects';
import type { Locale } from '@/lib/i18n';
import { href } from '@/lib/routes';
import Link from 'next/link';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Reveal } from '@/components/ui/Reveal';
import { ProjectCard } from '@/components/projects/ProjectCard';

export function FeaturedProjects({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const projects = getFeaturedProjects();

  return (
    <section className="py-16 sm:py-20">
      <Container>
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading title={dict.home.projects.title} subtitle={dict.home.projects.subtitle} />
          <Link
            href={href(locale, 'projects')}
            className="text-cosmos hover:text-ink shrink-0 text-[12px] font-semibold tracking-[0.16em] uppercase transition-colors"
          >
            {dict.home.projects.cta}
          </Link>
        </div>

        <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <Reveal key={project.slug} delay={index * 80}>
              <ProjectCard locale={locale} project={project} dict={dict} />
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
