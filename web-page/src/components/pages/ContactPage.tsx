import Link from 'next/link';
import { site } from '@/content/site';
import { getDictionary, type Locale } from '@/lib/i18n';
import { href } from '@/lib/routes';
import { ContactForm } from '@/components/contact/ContactForm';
import { WindowPanel } from '@/components/window/WindowPanel';

export function ContactPage({ locale }: { locale: Locale }) {
  const dict = getDictionary(locale);

  return (
    <div className="flex flex-col gap-2 p-2">
      <section className="win-panel overflow-hidden">
        <div className="win-banner px-4 py-4 sm:py-5">
          <h1 className="font-display text-[24px] leading-tight font-bold text-white">
            {dict.contact.title}
          </h1>
          <p className="mt-1.5 max-w-[64ch] text-[12.5px] leading-[1.55] text-[#eaf2ff]">
            {dict.contact.subtitle}
          </p>
        </div>
      </section>

      <div className="grid gap-2 lg:grid-cols-[0.8fr_1.2fr]">
        <WindowPanel title={dict.contact.direct.title} titleId="contact-direct">
          <p className="text-[12.5px] leading-[1.55] text-[#5f5f5f]">
            {dict.contact.direct.subtitle}
          </p>

          <dl className="mt-3 space-y-2.5">
            <div>
              <dt className="win-label">{dict.contact.direct.emailLabel}</dt>
              <dd className="mt-0.5">
                <a href={`mailto:${site.email}`} className="win-link text-[13px] font-bold">
                  {site.email}
                </a>
              </dd>
            </div>
            <div>
              <dt className="win-label">{dict.contact.direct.responseLabel}</dt>
              <dd className="mt-0.5 text-[12.5px] text-[#333]">
                {dict.contact.direct.responseValue}
              </dd>
            </div>
          </dl>

          <p className="mt-4 border-t border-[#e6e6e6] pt-2 text-[12px] leading-[1.5]">
            <Link href={href(locale, 'privacy')} className="win-link">
              {dict.contact.privacyNote}
            </Link>
          </p>
        </WindowPanel>

        <WindowPanel
          title={dict.window.contactPanel.formTitle}
          titleId="contact-form"
          aside={<span>{dict.window.contactPanel.note}</span>}
        >
          <ContactForm dict={dict} />
        </WindowPanel>
      </div>
    </div>
  );
}
