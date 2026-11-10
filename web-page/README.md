# Cosmos Compass

Bilingual marketing site for Cosmos Compass, a software studio building products for real industries. The site presents three products (Smart House in Domótica, Fitness Center in Industria, Health consultory in Salud) and Agricultura as an area still in exploration.

## Stack

- Next.js 16 (App Router, Turbopack)
- React 19
- TypeScript
- Tailwind CSS 4
- `next/font` with Fraunces and Inter
- Formspree for the contact form

## Getting started

```bash
pnpm install
cp .env.example .env.local
pnpm dev
```

Open `http://localhost:3000`; it redirects to `/es`.

## Environment variables

| Variable                        | Required    | Description                                                                                                       |
| ------------------------------- | ----------- | ----------------------------------------------------------------------------------------------------------------- |
| `NEXT_PUBLIC_SITE_URL`          | Recommended | Public site URL, with protocol and no trailing slash. Used for canonical URLs, hreflang, sitemap and OG metadata. |
| `NEXT_PUBLIC_CONTACT_EMAIL`     | Recommended | Email shown on the site and used as the mailto fallback.                                                          |
| `NEXT_PUBLIC_FORMSPREE_FORM_ID` | Optional    | Formspree form ID. Without it, the contact form falls back to `mailto:`.                                          |
| `NEXT_PUBLIC_BASE_URL`          | Optional    | Origin used by the payment callbacks. Defaults to `http://localhost:3000`.                                        |
| `NEXT_PUBLIC_BANK_*`            | Optional    | Bank name, account name and CLABE shown in `/pago/transferencia`.                                                  |
| `STRIPE_SECRET_KEY`             | Optional    | Stripe secret key for the card checkout.                                                                          |
| `STRIPE_WEBHOOK_SECRET`         | Optional    | Stripe webhook signing secret.                                                                                    |
| `PAYPAL_CLIENT_ID` / `_SECRET`  | Optional    | PayPal API credentials. `PAYPAL_ENV` selects `sandbox` or `live`.                                                 |
| `PAYPAL_WEBHOOK_ID`             | Optional    | PayPal webhook id used to validate payment events.                                                                |
| `MERCADOPAGO_ACCESS_TOKEN`      | Optional    | Mercado Pago access token. `MERCADOPAGO_SANDBOX` selects the sandbox.                                             |
| `RESEND_API_KEY` / `EMAIL_FROM` | Optional    | Resend API key and the sender used for the payment confirmation emails.                                           |

Defaults live in `src/content/site.ts`. Replace the placeholder domain and email before launch. Every variable is documented in `.env.example`.

## Scripts

```bash
pnpm dev        # development server
pnpm build      # production build
pnpm start      # serve the production build
pnpm lint       # ESLint
pnpm stylelint  # Stylelint
pnpm typecheck  # TypeScript
pnpm check      # lint + stylelint + typecheck + build
```

## Routes

| Spanish                | English               |
| ---------------------- | --------------------- |
| `/es`                  | `/en`                 |
| `/es/proyectos`        | `/en/projects`        |
| `/es/proyectos/[slug]` | `/en/projects/[slug]` |
| `/es/contacto`         | `/en/contact`         |
| `/es/privacidad`       | `/en/privacy`         |

`/` redirects to `/es`. The site has one root layout under `src/app/(site)/[locale]`, with both locales statically generated. Cross-locale slugs (for example `/es/projects`) return 404.

The contact route lives in a single file, `src/app/(site)/[locale]/[contact]/page.tsx`: its `generateStaticParams` emits `contacto` for `es` and `contact` for `en`, so each URL only serves its own locale.

## Content

- `src/content/dictionaries/es.ts`: Spanish copy and the source-of-truth `Dictionary` type.
- `src/content/dictionaries/en.ts`: English copy, checked against `Dictionary`.
- `src/content/projects.ts`: active projects, including localized challenge, approach, capabilities, stack and facts.
- `src/content/domains.ts`: the four verticals and their active/upcoming status.
- `src/content/site.ts`: brand, URL, email and Formspree ID.

Adding an active project requires updating `ProjectSlug` in `src/types/content.ts`, adding the entry to `projects.ts`, and choosing one of the existing `ProjectVisual` variants. Adding a vertical only requires an entry in `domains.ts`.

## Contact form

Set `NEXT_PUBLIC_FORMSPREE_FORM_ID` to the ID from a Formspree form. The form posts JSON with `name`, `email`, `company`, `project`, `message`, `consent` and `_subject`. A honeypot field named `_gotcha` filters basic bots.

`project` is optional: the "Proyecto de interés" select offers the active products plus the four verticals (`src/content/contactOptions.ts`), and may be left on "Sin especificar".

If the form ID is missing, or the request fails, the site builds a prefilled `mailto:` link so the inquiry is not lost.

## SEO

- Per-page title, description, canonical URL and `hreflang` alternates are generated in `src/lib/seo.ts`.
- `src/app/sitemap.ts` lists both locales and all project detail pages.
- `src/app/robots.ts` points to the sitemap.
- `src/app/(site)/[locale]/opengraph-image.tsx` generates the social image.
- The home page includes Organization JSON-LD.

## Deploy

Deploy on Vercel with the repository root as the project and `web-page` as the Root Directory. Set the environment variables above (at least `NEXT_PUBLIC_SITE_URL` and `NEXT_PUBLIC_CONTACT_EMAIL`), then build with `pnpm build`.

For any other Node host, run `pnpm install`, `pnpm build` and `pnpm start`.
