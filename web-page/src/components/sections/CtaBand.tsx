import type { Locale } from '@/lib/i18n';
import { href } from '@/lib/routes';
import Link from 'next/link';

export function CtaBand({
  locale,
  title,
  subtitle,
  button,
  tone = 'default',
}: {
  locale: Locale;
  title: string;
  subtitle: string;
  button: string;
  tone?: 'default' | 'unit';
}) {
  return (
    <section className={tone === 'unit' ? 'unit-banner mt-2' : 'win-banner mt-2'}>
      <div className="mx-auto flex w-full max-w-[1040px] flex-col gap-4 px-4 py-5 sm:flex-row sm:items-center sm:justify-between sm:px-6">
        <div>
          <h2 className="font-display text-[18px] leading-snug font-bold text-white">{title}</h2>
          <p className="mt-1 max-w-xl text-[12.5px] leading-[1.55] text-[#eaf2ff]">{subtitle}</p>
        </div>
        <Link href={href(locale, 'contact')} className="win-btn win-btn-gold shrink-0">
          {button}
        </Link>
      </div>
    </section>
  );
}
