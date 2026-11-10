import { site } from '@/content/site';
import { getDictionary, type Locale } from '@/lib/i18n';

export function PrivacyPage({ locale }: { locale: Locale }) {
  const dict = getDictionary(locale);

  return (
    <div className="p-2">
      <section className="win-panel overflow-hidden">
        <div className="win-banner px-4 py-4 sm:py-5">
          <h1 className="font-display text-[24px] leading-tight font-bold text-white">
            {dict.privacy.title}
          </h1>
          <p className="mt-1 text-[12px] text-[#dbe8f8]">{dict.privacy.updated}</p>
        </div>

        <div className="p-4 sm:p-6">
          <div className="mx-auto max-w-[72ch]">
            <p className="text-[13px] leading-[1.6] text-[#3d3d3d]">{dict.privacy.intro}</p>

            <div className="mt-5 space-y-4">
              {dict.privacy.sections.map((section) => (
                <section key={section.title}>
                  <h2 className="win-title text-[15px]">{section.title}</h2>
                  <p className="mt-1 text-[12.5px] leading-[1.6] text-[#4a4a4a]">{section.body}</p>
                </section>
              ))}
            </div>

            <div className="mt-5 border-t border-[#e6e6e6] pt-3 text-[12px] text-[#45505d]">
              {dict.contact.direct.emailLabel}:{' '}
              <a href={`mailto:${site.email}`} className="win-link font-bold">
                {site.email}
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
