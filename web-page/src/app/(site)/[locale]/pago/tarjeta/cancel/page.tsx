import { getDictionary } from '@/lib/i18n';
import Link from 'next/link';

interface PageProps {
  params: Promise<{ locale: string }>;
  searchParams: Promise<{ project?: string }>;
}

export default async function StripeCancelPage({ params, searchParams }: PageProps) {
  const { locale } = await params;
  const { project } = await searchParams;
  const dict = getDictionary(locale as 'es' | 'en');

  return (
    <div className="flex min-h-[60vh] items-center justify-center p-4">
      <div className="win-panel w-full max-w-md text-center">
        <div className="mb-4 text-6xl text-[#c06a58]" aria-hidden="true">
          ✕
        </div>
        <h1 className="font-display mb-2 text-[28px] font-bold text-white">
          {dict.project.payment?.cancel || 'Pago cancelado'}
        </h1>
        <p className="mb-6 text-[#eaf2ff]">
          {dict.project.payment?.error || 'Ocurrió un error, intente de nuevo'}
        </p>
        <div className="flex justify-center gap-3">
          <Link
            href={project ? `/${locale}/proyectos/${project}` : `/${locale}/proyectos`}
            className="win-btn win-btn-light"
          >
            Volver al producto
          </Link>
        </div>
      </div>
    </div>
  );
}
