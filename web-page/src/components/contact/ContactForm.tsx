'use client';

import { useState, type FormEvent } from 'react';
import type { Dictionary } from '@/content/dictionaries';
import { site } from '@/content/site';
import { buildFormspreeEndpoint, buildMailtoUrl } from '@/lib/formspree';
import { buttonStyles } from '@/components/ui/Button';

type Status = 'idle' | 'submitting' | 'success' | 'error' | 'fallback';

export function ContactForm({ dict }: { dict: Dictionary }) {
  const [status, setStatus] = useState<Status>('idle');
  const [mailtoHref, setMailtoHref] = useState<string | null>(null);

  const formId = process.env.NEXT_PUBLIC_FORMSPREE_FORM_ID?.trim() || site.formspreeId;
  const contactEmail = process.env.NEXT_PUBLIC_CONTACT_EMAIL?.trim() || site.email;
  const copy = dict.contact.form;
  const options = Object.values(copy.projectOptions);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (status === 'submitting') return;

    const form = event.currentTarget;
    const data = new FormData(form);
    if (data.get('_gotcha')) return;

    const name = String(data.get('name') ?? '').trim();
    const email = String(data.get('email') ?? '').trim();
    const company = String(data.get('company') ?? '').trim();
    const project = String(data.get('project') ?? '').trim();
    const message = String(data.get('message') ?? '').trim();
    const subject = project ? `${copy.project}: ${project}` : dict.contact.title;
    const body = [
      `${copy.name}: ${name}`,
      `${copy.email}: ${email}`,
      company ? `${copy.company}: ${company}` : null,
      project ? `${copy.project}: ${project}` : null,
      '',
      message,
    ]
      .filter((line) => line !== null)
      .join('\n');

    if (!formId) {
      const href = buildMailtoUrl({ to: contactEmail, subject, body });
      setMailtoHref(href);
      setStatus('fallback');
      window.location.href = href;
      return;
    }

    setStatus('submitting');

    try {
      const response = await fetch(buildFormspreeEndpoint(formId), {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          name,
          email,
          company,
          project,
          message,
          consent: true,
          _subject: subject,
        }),
      });

      if (!response.ok) throw new Error('Request failed');

      form.reset();
      setMailtoHref(null);
      setStatus('success');
    } catch {
      setMailtoHref(buildMailtoUrl({ to: contactEmail, subject, body }));
      setStatus('error');
    }
  }

  const fieldClass =
    'mt-1.5 w-full rounded-xl border border-line/80 bg-white/90 px-3.5 py-3 text-sm text-ink outline-none shadow-[inset_0_1px_2px_rgba(6,26,52,0.08)] transition-colors placeholder:text-muted focus:border-cosmos focus:ring-2 focus:ring-cosmos/20';
  const labelClass = 'block text-[11px] font-semibold uppercase tracking-[0.16em] text-muted';

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div aria-hidden="true" className="absolute -left-[9999px] h-0 w-0 overflow-hidden">
        <label htmlFor="company-website">{copy.honeypot}</label>
        <input id="company-website" name="_gotcha" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className={labelClass}>
            {copy.name}{' '}
            <span aria-hidden="true" className="text-brass">
              *
            </span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            autoComplete="name"
            placeholder={copy.namePlaceholder}
            className={fieldClass}
          />
        </div>
        <div>
          <label htmlFor="email" className={labelClass}>
            {copy.email}{' '}
            <span aria-hidden="true" className="text-brass">
              *
            </span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            placeholder={copy.emailPlaceholder}
            className={fieldClass}
          />
        </div>
      </div>

      <div>
        <label htmlFor="company" className={labelClass}>
          {copy.company}
        </label>
        <input
          id="company"
          name="company"
          type="text"
          autoComplete="organization"
          placeholder={copy.companyPlaceholder}
          className={fieldClass}
        />
      </div>

      <div>
        <label htmlFor="project" className={labelClass}>
          {copy.project}{' '}
          <span aria-hidden="true" className="text-brass">
            *
          </span>
        </label>
        <select id="project" name="project" required defaultValue="" className={fieldClass}>
          <option value="" disabled>
            {copy.projectPlaceholder}
          </option>
          {options.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="message" className={labelClass}>
          {copy.message}{' '}
          <span aria-hidden="true" className="text-brass">
            *
          </span>
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={6}
          placeholder={copy.messagePlaceholder}
          className={`${fieldClass} min-h-32 resize-y`}
        />
      </div>

      <label className="text-muted flex items-start gap-3 text-xs leading-relaxed">
        <input
          type="checkbox"
          name="consent"
          required
          className="border-line accent-ink mt-0.5 h-4 w-4 shrink-0 rounded"
        />
        <span>{copy.consent}</span>
      </label>

      <div className="flex flex-col gap-4 pt-1 sm:flex-row sm:items-center">
        <button
          type="submit"
          disabled={status === 'submitting'}
          className={buttonStyles('primary', 'sm:min-w-40')}
        >
          {status === 'submitting' ? copy.submitting : copy.submit}
        </button>
        <p className="text-muted text-xs leading-relaxed">{copy.requiredHint}</p>
      </div>

      {status === 'success' ? (
        <div
          role="status"
          aria-live="polite"
          className="border-cosmos/20 bg-cosmos/5 text-cosmos rounded-md border px-4 py-3 text-sm"
        >
          <p className="font-semibold">{copy.successTitle}</p>
          <p className="mt-1">{copy.successBody}</p>
        </div>
      ) : null}

      {status === 'fallback' ? (
        <div
          role="status"
          aria-live="polite"
          className="border-brass/30 bg-brass/10 text-ink rounded-md border px-4 py-3 text-sm"
        >
          <p>{copy.fallback}</p>
          {mailtoHref ? (
            <a
              href={mailtoHref}
              className="mt-2 inline-block font-semibold underline underline-offset-4"
            >
              {dict.common.email}
            </a>
          ) : null}
        </div>
      ) : null}

      {status === 'error' ? (
        <div
          role="alert"
          className="border-brass/30 bg-brass/10 text-ink rounded-md border px-4 py-3 text-sm"
        >
          <p className="font-semibold">{copy.errorTitle}</p>
          <p className="mt-1">{copy.errorBody}</p>
          {mailtoHref ? (
            <a
              href={mailtoHref}
              className="mt-2 inline-block font-semibold underline underline-offset-4"
            >
              {dict.common.email}
            </a>
          ) : null}
        </div>
      ) : null}
    </form>
  );
}
