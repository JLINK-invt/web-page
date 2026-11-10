import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import { site } from '@/content/site';
import '../globals.css';

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: site.name,
    template: `%s · ${site.name}`,
  },
  description: 'Software for real industries.',
};

export default function RootRedirectLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
