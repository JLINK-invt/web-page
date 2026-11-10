import type { NextConfig } from 'next';
import { domainSlugs } from './src/lib/routes';

const redirects = Object.entries(domainSlugs).flatMap(([id, slugs]) =>
  Object.entries(slugs).map(([locale, slug]) => ({
    source: `/${locale}/${slug}`,
    destination: `/${locale}#${id}`,
    permanent: true,
  }))
);

const nextConfig: NextConfig = {
  poweredByHeader: false,
  reactStrictMode: true,
  experimental: {
    globalNotFound: true,
  },
  async redirects() {
    return redirects;
  },
};

export default nextConfig;
