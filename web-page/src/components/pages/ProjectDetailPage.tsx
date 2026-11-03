import Link from 'next/link';
import { getNextProject } from '@/content/projects';
import type { Project } from '@/types/content';
import { getDictionary, localize, type Locale } from '@/lib/i18n';
import { href } from '@/lib/routes';
import { Container } from '@/components/ui/Container';
import { ArrowIcon } from '@/components/ui/ArrowIcon';
import { ButtonLink } from '@/components/ui/Button';
import { ProductWindow } from '@/components/aero/ProductWindow';

const PROJECT_SPECS: Record<
  string,
  {
    file: string;
    version: string;
    size: string;
    platform: string;
    checksum: string;
    architecture: string;
    dependencies: string;
  }
> = {
  'smart-house': {
    file: 'SmartHouse_v2.4.1.exe',
    version: '2.4.1',
    size: '42.3 MB',
    platform: 'Windows 10/11 (64-bit)',
    checksum: 'SHA256: a3f2b8e4...8b1c7f9d',
    architecture: 'x64 (Tauri/Rust + React)',
    dependencies: 'WebView2 Runtime, .NET 6.0+',
  },
  'fitness-gym': {
    file: 'FitnessGym_v1.8.3.exe',
    version: '1.8.3',
    size: '67.1 MB',
    platform: 'Windows 10/11 (64-bit)',
    checksum: 'SHA256: 7f4e9a2d...2a9d4c1f',
    architecture: 'x64 (Tauri/Rust + React + SQLite)',
    dependencies: 'WebView2 Runtime, SQLCipher',
  },
  'health-psychology': {
    file: 'HealthPsych_v0.9.2.exe',
    version: '0.9.2',
    size: '38.7 MB',
    platform: 'Windows 10/11 (64-bit)',
    checksum: 'SHA256: e8b1c4f7...4f2a3e8b',
    architecture: 'x64 (Next.js + NestJS Client)',
    dependencies: 'WebView2 Runtime, Node.js 18+',
  },
};

export function ProjectDetailPage({ locale, project }: { locale: Locale; project: Project }) {
  const dict = getDictionary(locale);
  const next = getNextProject(project.slug);
  const capabilities = localize(project.capabilities, locale);
  const specs = PROJECT_SPECS[project.slug];
  const isLive = project.facts[2]?.value.en === 'Operational';

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
              <ProductWindow variant={project.visual} showBoxShot />
            </div>
          </div>
        </Container>
      </section>

      <section className="border-line border-b">
        <Container>
          <dl className="divide-line grid divide-y sm:grid-cols-4 sm:divide-x sm:divide-y-0">
            <div className="px-0 py-5 sm:col-span-2 sm:px-6 sm:first:pl-0">
              <dt className="text-muted text-[10px] font-semibold tracking-[0.18em] uppercase">
                {dict.project.file}
              </dt>
              <dd className="mono mt-1.5 font-mono text-sm">{specs?.file}</dd>
            </div>
            <div className="px-0 py-5 sm:px-6">
              <dt className="text-muted text-[10px] font-semibold tracking-[0.18em] uppercase">
                {dict.project.version}
              </dt>
              <dd className="mono mt-1.5 font-mono text-sm">{specs?.version}</dd>
            </div>
            <div className="px-0 py-5 sm:px-6">
              <dt className="text-muted text-[10px] font-semibold tracking-[0.18em] uppercase">
                {dict.project.size}
              </dt>
              <dd className="mono mt-1.5 font-mono text-sm">{specs?.size}</dd>
            </div>
            <div className="px-0 py-5 sm:col-span-2 sm:px-6">
              <dt className="text-muted text-[10px] font-semibold tracking-[0.18em] uppercase">
                {dict.project.platform}
              </dt>
              <dd className="mono mt-1.5 font-mono text-sm">{specs?.platform}</dd>
            </div>
            <div className="px-0 py-5 sm:px-6">
              <dt className="text-muted text-[10px] font-semibold tracking-[0.18em] uppercase">
                {dict.project.architecture}
              </dt>
              <dd className="mono mt-1.5 font-mono text-sm">{specs?.architecture}</dd>
            </div>
            <div className="px-0 py-5 sm:px-6">
              <dt className="text-muted text-[10px] font-semibold tracking-[0.18em] uppercase">
                {dict.project.checksum}
              </dt>
              <dd className="mono text-muted mt-1.5 font-mono text-sm">{specs?.checksum}</dd>
            </div>
            <div className="px-0 py-5 sm:col-span-2 sm:px-6">
              <dt className="text-muted text-[10px] font-semibold tracking-[0.18em] uppercase">
                {dict.project.dependencies}
              </dt>
              <dd className="mono text-muted mt-1.5 font-mono text-sm">{specs?.dependencies}</dd>
            </div>
            {project.facts.slice(1).map((fact) => (
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
              <div className="glass-panel sticky top-24 rounded-2xl p-6 sm:p-8">
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

                {specs && (
                  <div className="border-line mt-8 space-y-4 border-t pt-6">
                    <h3 className="font-display text-2xl font-medium tracking-tight">
                      {dict.project.specsTitle}
                    </h3>
                    <dl className="mono space-y-3 font-mono">
                      <div className="flex justify-between">
                        <dt className="text-muted">{dict.project.file}</dt>
                        <dd className="text-ink text-right">{specs.file}</dd>
                      </div>
                      <div className="flex justify-between">
                        <dt className="text-muted">{dict.project.version}</dt>
                        <dd className="text-ink text-right">{specs.version}</dd>
                      </div>
                      <div className="flex justify-between">
                        <dt className="text-muted">{dict.project.size}</dt>
                        <dd className="text-ink text-right">{specs.size}</dd>
                      </div>
                      <div className="flex justify-between">
                        <dt className="text-muted">{dict.project.platform}</dt>
                        <dd className="text-ink text-right">{specs.platform}</dd>
                      </div>
                      <div className="flex justify-between">
                        <dt className="text-muted">{dict.project.architecture}</dt>
                        <dd className="text-ink text-right">{specs.architecture}</dd>
                      </div>
                      <div className="flex justify-between">
                        <dt className="text-muted">{dict.project.dependencies}</dt>
                        <dd className="text-ink text-right">{specs.dependencies}</dd>
                      </div>
                    </dl>
                  </div>
                )}

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
                    className="btn-3d-glossy mt-5 w-full"
                  >
                    {isLive ? dict.project.ctaButtonBuy : dict.project.ctaButtonDemo}
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
