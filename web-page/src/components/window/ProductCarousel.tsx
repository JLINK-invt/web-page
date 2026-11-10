import Link from 'next/link';

import type { Project } from '@/types/content';
import type { Locale } from '@/lib/i18n';
import { localize } from '@/lib/i18n';
import { href } from '@/lib/routes';
import { ProductIllustration } from '@/components/window/ProductIllustration';

function getProjectStatus(project: Project, locale: Locale): { text: string; isSoon: boolean } {
  const statusFact = project.facts.find((f) => f.label.es === 'Estado' || f.label.en === 'Status');
  const status = statusFact?.value?.[locale]?.toLowerCase() || '';
  if (status.includes('mvp') || status.includes('exploración') || status.includes('upcoming')) {
    return { text: locale === 'es' ? 'Próximamente...' : 'Coming soon...', isSoon: true };
  }
  return { text: locale === 'es' ? 'Operativo' : 'Operational', isSoon: false };
}

export function ProductCarousel({
  locale,
  projects,
  title,
}: {
  locale: Locale;
  projects: Project[];
  title: string;
}) {
  return (
    <>
      <header
        id="productos"
        className="flex scroll-mt-2 items-center justify-between gap-6 px-5 pt-2 pb-1"
      >
        <h2 id="productos-heading" className="font-display text-[19px] leading-tight font-bold">
          {title}
        </h2>
      </header>

      <div className="product-shelf" aria-label={title}>
        {projects.map((project) => {
          const { text: statusText, isSoon } = getProjectStatus(project, locale);
          const description = localize(project.tagline, locale);

          return (
            <Link
              key={project.slug}
              href={href(locale, 'projects', project.slug)}
              className="product-card"
            >
              <div className="product-text">
                <p className={`product-status ${isSoon ? 'soon' : ''}`}>{statusText}</p>
                <h3 className="product-title">{project.name}</h3>
                <p className="product-desc">{description}</p>
              </div>
              <div className="product-visual" aria-hidden="true">
                <ProductIllustration domain={project.domain} visual={project.visual} />
              </div>
            </Link>
          );
        })}
      </div>
    </>
  );
}
