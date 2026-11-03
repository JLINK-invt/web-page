# Cosmos Compass

Bilingual marketing site for Cosmos Compass, a software studio building products for real industries. The site presents the three active Domotics products and the upcoming Agriculture, Industrial and Medical verticals.

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

Defaults live in `src/content/site.ts`. Replace the placeholder domain and email before launch.

## Scripts

```bash
pnpm dev        # development server
pnpm build      # production build
pnpm start      # serve the production build
pnpm lint       # ESLint
pnpm typecheck  # TypeScript
pnpm check      # lint + typecheck + build
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

## Content

- `src/content/dictionaries/es.ts`: Spanish copy and the source-of-truth `Dictionary` type.
- `src/content/dictionaries/en.ts`: English copy, checked against `Dictionary`.
- `src/content/projects.ts`: active projects, including localized challenge, approach, capabilities, stack and facts.
- `src/content/domains.ts`: the four verticals and their active/upcoming status.
- `src/content/site.ts`: brand, URL, email and Formspree ID.

Adding an active project requires updating `ProjectSlug` in `src/types/content.ts`, adding the entry to `projects.ts`, and choosing one of the existing `ProjectVisual` variants. Adding a vertical only requires an entry in `domains.ts`.

## Contact form

Set `NEXT_PUBLIC_FORMSPREE_FORM_ID` to the ID from a Formspree form. The form posts JSON with `name`, `email`, `company`, `project`, `message`, `consent` and `_subject`. A honeypot field named `_gotcha` filters basic bots.

If the form ID is missing, or the request fails, the site builds a prefilled `mailto:` link so the inquiry is not lost.

## SEO

- Per-page title, description, canonical URL and `hreflang` alternates are generated in `src/lib/seo.ts`.
- `src/app/sitemap.ts` lists both locales and all project detail pages.
- `src/app/robots.ts` points to the sitemap.
- `src/app/(site)/[locale]/opengraph-image.tsx` generates the social image.
- The home page includes Organization JSON-LD.

## Deploy

Deploy on Vercel with the repository root as the project and `web-page` as the Root Directory. Set the three environment variables above, then build with `pnpm build`.

For any other Node host, run `pnpm install`, `pnpm build` and `pnpm start`.
