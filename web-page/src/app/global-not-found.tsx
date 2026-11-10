import type { Metadata } from 'next';
import Link from 'next/link';
import { site } from '@/content/site';
import { frutiger } from '@/lib/fonts';
import { Logo } from '@/components/site/Logo';
import './globals.css';

export const metadata: Metadata = {
  title: `404 · ${site.name}`,
  description: 'Esta página no existe. This page does not exist.',
};

export default function GlobalNotFound() {
  return (
    <html lang="es" className={frutiger.variable}>
      <body className="font-sans antialiased">
        <main className="flex min-h-svh flex-col">
          <header className="border-line border-b">
            <div className="mx-auto flex h-16 w-full max-w-7xl items-center px-5 sm:h-20 sm:px-8 lg:px-12">
              <Link href="/es" aria-label={site.name}>
                <Logo />
              </Link>
            </div>
          </header>

          <section className="flex flex-1 items-center justify-center px-6 py-20">
            <div className="max-w-lg text-center">
              <p className="text-muted text-[11px] font-semibold tracking-[0.22em] uppercase">
                404
              </p>
              <h1 className="font-display mt-4 text-4xl font-medium tracking-tight sm:text-5xl">
                Esta página no existe.
              </h1>
              <p className="font-display text-muted mt-2 text-2xl">This page does not exist.</p>
              <p className="text-muted mt-4 text-sm leading-relaxed">
                Puede que el enlace haya cambiado o que la página todavía no esté publicada.
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-3">
                <Link
                  href="/es"
                  className="bg-ink text-paper inline-flex rounded-full px-6 py-3 text-sm font-semibold"
                >
                  Ir al inicio
                </Link>
                <Link
                  href="/en"
                  className="border-ink/20 text-ink inline-flex rounded-full border px-6 py-3 text-sm font-semibold"
                >
                  Go home
                </Link>
              </div>
            </div>
          </section>
        </main>
      </body>
    </html>
  );
}
