import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getProject, projects } from '@/content/projects';
import { isLocale, localize } from '@/lib/i18n';
import { buildMetadata } from '@/lib/seo';
import { ProjectDetailPage } from '@/components/pages/ProjectDetailPage';

type PageProps = {
  params: Promise<{ locale: string; slug: string }>;
};

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale, slug } = await params;
  if (!isLocale(locale) || locale !== 'es') return {};

  const project = getProject(slug);
  if (!project) return {};

  return buildMetadata({
    locale,
    route: 'projects',
    slug: project.slug,
    title: project.name,
    description: localize(project.tagline, locale),
  });
}

export default async function Page({ params }: PageProps) {
  const { locale, slug } = await params;
  if (!isLocale(locale) || locale !== 'es') notFound();

  const project = getProject(slug);
  if (!project) notFound();

  return <ProjectDetailPage locale={locale} project={project} />;
}
