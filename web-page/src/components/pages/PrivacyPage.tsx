import { site } from '@/content/site';
import { getDictionary, type Locale } from '@/lib/i18n';
import { Container } from '@/components/ui/Container';

export function PrivacyPage({ locale }: { locale: Locale }) {
  const dict = getDictionary(locale);

  return (
    <section>
      <Container className="py-16 sm:py-24">
        <div className="mx-auto max-w-3xl">
          <h1 className="font-display mt-5 text-[clamp(2.4rem,5vw,4rem)] leading-[1] font-medium tracking-[-0.03em]">
            {dict.privacy.title}
          </h1>
          <p className="text-muted mt-4 text-sm">{dict.privacy.updated}</p>
          <p className="text-muted mt-8 text-lg leading-relaxed">{dict.privacy.intro}</p>

          <div className="mt-12 space-y-10">
            {dict.privacy.sections.map((section) => (
              <section key={section.title}>
                <h2 className="font-display text-2xl font-medium tracking-tight">
                  {section.title}
                </h2>
                <p className="text-muted mt-3 text-base leading-relaxed">{section.body}</p>
              </section>
            ))}
          </div>

          <div className="border-line text-muted mt-12 border-t pt-6 text-sm">
            <p>
              {dict.contact.direct.emailLabel}:{' '}
              <a
                href={`mailto:${site.email}`}
                className="text-ink decoration-ink/20 hover:decoration-ink font-medium underline underline-offset-4"
              >
                {site.email}
              </a>
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
