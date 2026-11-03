import Link from 'next/link';
import { site } from '@/content/site';
import { domains } from '@/content/domains';
import { getDictionary, type Locale } from '@/lib/i18n';
import { designsHref, href } from '@/lib/routes';
import { Container } from '@/components/ui/Container';
import { Logo } from './Logo';

export function Footer({ locale }: { locale: Locale }) {
  const dict = getDictionary(locale);

  return (
    <footer className="border-t border-white/15 bg-[linear-gradient(180deg,#0a2b4f_0%,#051a33_100%)] shadow-[inset_0_1px_0_rgba(183,230,248,0.28)]">
      <Container className="py-12 sm:py-16">
        <div className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-5">
            <Logo tone="inverse" />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-[rgba(223,240,252,0.72)]">
              {dict.footer.tagline}
            </p>
            <a
              href={`mailto:${site.email}`}
              className="text-aqua-soft decoration-gold/60 mt-6 inline-block text-sm font-medium underline decoration-2 underline-offset-4 transition-colors hover:text-white"
            >
              {site.email}
            </a>
          </div>

          <div className="md:col-span-4">
            <h2 className="font-display text-aqua-soft/90 text-[13px] font-semibold tracking-[0.16em] uppercase">
              {dict.footer.units}
            </h2>
            <ul className="mt-4 grid grid-cols-2 gap-x-6 gap-y-2 text-sm">
              {domains.map((domain) => (
                <li key={domain.id}>
                  <Link
                    href={href(locale, 'domain', domain.id)}
                    className="text-[rgba(223,240,252,0.72)] transition-colors hover:text-white"
                  >
                    {domain.name[locale]}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href={href(locale, 'projects')}
                  className="text-[rgba(223,240,252,0.72)] transition-colors hover:text-white"
                >
                  {dict.nav.projects}
                </Link>
              </li>
              <li>
                <Link
                  href={href(locale, 'contact')}
                  className="text-[rgba(223,240,252,0.72)] transition-colors hover:text-white"
                >
                  {dict.nav.contact}
                </Link>
              </li>
            </ul>
          </div>

          <div className="md:col-span-3">
            <h2 className="font-display text-aqua-soft/90 text-[13px] font-semibold tracking-[0.16em] uppercase">
              {dict.footer.legal}
            </h2>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <Link
                  href={href(locale, 'privacy')}
                  className="text-[rgba(223,240,252,0.72)] transition-colors hover:text-white"
                >
                  {dict.footer.privacy}
                </Link>
              </li>
              <li>
                <Link
                  href={designsHref(locale)}
                  className="text-[rgba(223,240,252,0.72)] transition-colors hover:text-white"
                >
                  {dict.footer.designs}
                </Link>
              </li>
              <li>
                <a
                  href={`mailto:${site.email}`}
                  className="text-[rgba(223,240,252,0.72)] transition-colors hover:text-white"
                >
                  {dict.footer.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-2 border-t border-white/12 pt-6 text-xs text-[rgba(223,240,252,0.6)] sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {site.name}. {dict.footer.rights}
          </p>
          <p>{dict.footer.madeWith}</p>
        </div>
      </Container>
    </footer>
  );
}
