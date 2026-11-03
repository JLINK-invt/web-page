import Link from 'next/link';
import { getNextProject } from '@/content/projects';
import type { Project } from '@/types/content';
import { getDictionary, localize, type Locale } from '@/lib/i18n';
import { href } from '@/lib/routes';
import { Container } from '@/components/ui/Container';
import { ArrowIcon } from '@/components/ui/ArrowIcon';
import { ButtonLink } from '@/components/ui/Button';
import { ProductWindow } from '@/components/aero/ProductWindow';

export function ProjectDetailPage({ locale, project }: { locale: Locale; project: Project }) {
  const dict = getDictionary(locale);
  const next = getNextProject(project.slug);
  const capabilities = localize(project.capabilities, locale);

  return (
    <>
      <section className="border-line border-b">
        <Container className="py-10 sm:py-14">
          <Link
            href={href(locale, 'projects')}
            className="text-muted hover:text-ink inline-flex items-center gap-2 text-[11px] font-semibold tracking-[0.16em] uppercase transition-colors"
          >
            <ArrowIcon className="rotate-180" />
            {dict.common.backToProjects}
          </Link>

          <div className="mt-8 grid gap-10 lg:grid-cols-12 lg:items-center lg:gap-12">
            <div className="lg:col-span-7">
              <p className="text-cosmos text-[12px] font-semibold tracking-[0.16em] uppercase">
                {localize(project.facts[0].value, locale)}
              </p>
              <h1 className="font-display text-ink mt-4 text-[clamp(2.6rem,6vw,4.8rem)] leading-[0.98] font-semibold tracking-[-0.03em]">
                {project.name}
              </h1>
              <p className="text-muted mt-5 max-w-2xl text-lg leading-relaxed">
                {localize(project.tagline, locale)}
              </p>
            </div>
            <div className="lg:col-span-5">
              <ProductWindow variant={project.visual} />
            </div>
          </div>
        </Container>
      </section>

      <section className="border-line border-b">
        <Container>
          <dl className="divide-line grid divide-y sm:grid-cols-3 sm:divide-x sm:divide-y-0">
            {project.facts.map((fact) => (
              <div key={localize(fact.label, locale)} className="px-0 py-5 sm:px-6 sm:first:pl-0">
                <dt className="text-muted text-[10px] font-semibold tracking-[0.18em] uppercase">
                  {localize(fact.label, locale)}
                </dt>
                <dd className="mt-1.5 text-sm">{localize(fact.value, locale)}</dd>
              </div>
            ))}
          </dl>
        </Container>
      </section>

      <section className="py-20 sm:py-28">
        <Container>
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-7">
              <p className="text-ink/80 text-xl leading-relaxed">
                {localize(project.summary, locale)}
              </p>

              <h2 className="font-display mt-12 text-3xl font-medium tracking-tight">
                {dict.project.challenge}
              </h2>
              <p className="text-muted mt-5 text-base leading-relaxed">
                {localize(project.challenge, locale)}
              </p>

              <h2 className="font-display mt-12 text-3xl font-medium tracking-tight">
                {dict.project.approach}
              </h2>
              <p className="text-muted mt-5 text-base leading-relaxed">
                {localize(project.approach, locale)}
              </p>

              <h2 className="font-display mt-12 text-3xl font-medium tracking-tight">
                {dict.project.capabilities}
              </h2>
              <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                {capabilities.map((item) => (
                  <li
                    key={item}
                    className="text-muted flex items-start gap-3 text-sm leading-relaxed"
                  >
                    <span
                      className="bg-brass mt-2 h-1.5 w-1.5 shrink-0 rounded-full"
                      aria-hidden="true"
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <aside className="lg:col-span-5 lg:col-start-9">
              <div className="glass-panel rounded-2xl p-6 sm:p-8">
                <h2 className="text-muted text-[11px] font-semibold tracking-[0.2em] uppercase">
                  {dict.project.tech}
                </h2>
                <ul className="mt-3 flex flex-wrap gap-2">
                  {localize(project.stack, locale).map((item) => (
                    <li
                      key={item}
                      className="border-line bg-paper rounded-full border px-3 py-1 text-xs"
                    >
                      {item}
                    </li>
                  ))}
                </ul>

                <div className="border-line mt-8 border-t pt-6">
                  <h3 className="font-display text-2xl font-medium tracking-tight">
                    {dict.project.ctaTitle}
                  </h3>
                  <p className="text-muted mt-2 text-sm leading-relaxed">
                    {dict.project.ctaSubtitle}
                  </p>
                  <ButtonLink
                    href={href(locale, 'contact')}
                    variant="primary"
                    className="mt-5 w-full"
                  >
                    {dict.project.ctaButton}
                  </ButtonLink>
                </div>
              </div>
            </aside>
          </div>
        </Container>
      </section>

      <section className="border-line border-t">
        <Container className="py-14 sm:py-20">
          <Link
            href={href(locale, 'projects', next.slug)}
            className="group flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between"
          >
            <div>
              <p className="text-muted text-[10px] font-semibold tracking-[0.2em] uppercase">
                {dict.project.next}
              </p>
              <p className="font-display mt-2 text-4xl font-medium tracking-tight sm:text-5xl">
                {next.name}
              </p>
            </div>
            <span className="text-cosmos inline-flex items-center gap-2 text-[11px] font-semibold tracking-[0.16em] uppercase">
              {dict.common.viewProject}
              <ArrowIcon className="transition-transform group-hover:translate-x-1" />
            </span>
          </Link>
        </Container>
      </section>
    </>
  );
}
