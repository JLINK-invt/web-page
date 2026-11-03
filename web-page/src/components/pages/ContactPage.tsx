import Link from 'next/link';
import { site } from '@/content/site';
import { getDictionary, type Locale } from '@/lib/i18n';
import { href } from '@/lib/routes';
import { Container } from '@/components/ui/Container';
import { ContactForm } from '@/components/contact/ContactForm';

export function ContactPage({ locale }: { locale: Locale }) {
  const dict = getDictionary(locale);

  return (
    <section className="relative overflow-hidden">
      <div
        aria-hidden="true"
        className="border-line pointer-events-none absolute -top-40 -right-40 h-[36rem] w-[36rem] rounded-full border"
      />
      <Container className="relative py-16 sm:py-24">
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <h1 className="font-display text-ink text-[clamp(2.6rem,6vw,4.6rem)] leading-[0.98] font-semibold tracking-[-0.03em] text-balance">
              {dict.contact.title}
            </h1>
            <p className="text-muted mt-6 max-w-md text-lg leading-relaxed">
              {dict.contact.subtitle}
            </p>

            <div className="border-line mt-12 border-t pt-6">
              <h2 className="text-muted text-[11px] font-semibold tracking-[0.2em] uppercase">
                {dict.contact.direct.title}
              </h2>
              <p className="text-muted mt-2 max-w-sm text-sm leading-relaxed">
                {dict.contact.direct.subtitle}
              </p>

              <dl className="mt-6 space-y-4">
                <div>
                  <dt className="text-muted text-[10px] font-semibold tracking-[0.18em] uppercase">
                    {dict.contact.direct.emailLabel}
                  </dt>
                  <dd className="mt-1">
                    <a
                      href={`mailto:${site.email}`}
                      className="font-display decoration-ink/20 hover:decoration-ink text-2xl underline underline-offset-4 transition-colors"
                    >
                      {site.email}
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="text-muted text-[10px] font-semibold tracking-[0.18em] uppercase">
                    {dict.contact.direct.responseLabel}
                  </dt>
                  <dd className="text-muted mt-1 text-sm">{dict.contact.direct.responseValue}</dd>
                </div>
              </dl>
            </div>
          </div>

          <div className="lg:col-span-7 lg:col-start-6">
            <div className="glass-panel rounded-2xl p-6 sm:p-8 lg:p-10">
              <ContactForm dict={dict} />
              <p className="border-line text-muted mt-6 border-t pt-4 text-xs">
                <Link
                  href={href(locale, 'privacy')}
                  className="decoration-ink/20 hover:decoration-ink underline underline-offset-4"
                >
                  {dict.contact.privacyNote}
                </Link>
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
