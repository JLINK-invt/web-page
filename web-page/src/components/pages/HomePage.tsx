'use client';

import { getDictionary, type Locale } from '@/lib/i18n';
import { Approach } from '@/components/sections/Approach';
import { CtaBand } from '@/components/sections/CtaBand';
import { DomainGrid } from '@/components/sections/DomainGrid';
import { FeaturedProjects } from '@/components/sections/FeaturedProjects';
import { Hero } from '@/components/sections/Hero';

export function HomePage({ locale }: { locale: Locale }) {
  const dict = getDictionary(locale);

  return (
    <>
      <Hero locale={locale} dict={dict} />
      <DomainGrid locale={locale} dict={dict} />
      <FeaturedProjects locale={locale} dict={dict} />
      <Approach dict={dict} />
      <CtaBand
        locale={locale}
        title={dict.home.cta.title}
        subtitle={dict.home.cta.subtitle}
        button={dict.home.cta.button}
      />
    </>
  );
}
