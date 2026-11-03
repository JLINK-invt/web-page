'use client';

import Link from 'next/link';
import { site } from '@/content/site';
import { solutionAreas, solutionHref } from '@/content/solutions';
import { getDictionary, type Locale } from '@/lib/i18n';
import { href } from '@/lib/routes';
import { ButtonLink } from '@/components/ui/Button';
import { Container } from '@/components/ui/Container';
import { LocaleSwitcher } from './LocaleSwitcher';
import { Logo } from './Logo';
import { MobileNav, type NavItem } from './MobileNav';
import { SolutionsMenu, type MenuArea } from './SolutionsMenu';

export function Header({ locale }: { locale: Locale }) {
  const dict = getDictionary(locale);
  const nav: NavItem[] = [
    { label: dict.nav.home, href: href(locale, 'home') },
    { label: dict.nav.projects, href: href(locale, 'projects') },
    { label: dict.nav.contact, href: href(locale, 'contact') },
  ];

  const activeAreas = solutionAreas.filter((area) => area.status === 'active');
  const areas: MenuArea[] = activeAreas.map((area) => ({
    id: area.id,
    label: area.name[locale],
    description: area.description[locale],
    href: solutionHref(locale, area.href),
    scene: area.scene,
    status: area.status,
    statusLabel: area.status === 'active' ? dict.common.active : dict.common.exploration,
    solutions: area.solutions
      .filter((s) => s.status === 'live')
      .map((solution) => ({
        id: solution.id,
        label: solution.name[locale],
        description: solution.description[locale],
        href: solutionHref(locale, solution.href),
        status: solution.status,
      })),
  }));

  return (
    <header className="sticky top-0 z-50 border-b border-white/90 shadow-[inset_0_1px_0_rgba(255,255,255,0.95),inset_0_-1px_0_rgba(224,184,90,0.35),0_14px_30px_-26px_rgba(5,26,51,0.65)]">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-[rgba(238,247,253,0.8)] backdrop-blur-xl"
      />
      <Container className="flex h-16 items-center gap-6 sm:h-20">
        <div className="flex flex-1 items-center">
          <Link href={href(locale, 'home')} aria-label={site.name} className="text-ink">
            <Logo />
          </Link>
        </div>

        <nav aria-label={dict.nav.menu} className="hidden items-center gap-6 lg:flex">
          <Link
            href={href(locale, 'home')}
            className="group text-ink/80 hover:text-cosmos relative rounded-md px-1 py-1 text-[13px] font-medium transition-colors"
          >
            {dict.nav.home}
            <span
              aria-hidden="true"
              className="bg-gold absolute inset-x-1 -bottom-0.5 h-px origin-left scale-x-0 transition-transform duration-200 group-hover:scale-x-100"
            />
          </Link>

          <SolutionsMenu
            label={dict.nav.solutions}
            solutionsLabel={dict.nav.solutionsList}
            areas={areas}
            menuNote={dict.nav.menuNote}
            projectsHref={href(locale, 'projects')}
            projectsLabel={dict.nav.allProjects}
            contactHref={href(locale, 'contact')}
            contactLabel={dict.nav.tellUs}
          />

          {nav.slice(1).map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="group text-ink/80 hover:text-cosmos relative rounded-md px-1 py-1 text-[13px] font-medium transition-colors"
            >
              {item.label}
              <span
                aria-hidden="true"
                className="bg-gold absolute inset-x-1 -bottom-0.5 h-px origin-left scale-x-0 transition-transform duration-200 group-hover:scale-x-100"
              />
            </Link>
          ))}
        </nav>

        <div className="hidden flex-1 items-center justify-end gap-3 lg:flex">
          <LocaleSwitcher locale={locale} label={dict.a11y.switchLanguage} />
          <ButtonLink href={href(locale, 'contact')} className="px-5 py-2.5">
            {dict.nav.cta}
          </ButtonLink>
        </div>

        <MobileNav
          locale={locale}
          nav={nav}
          areas={areas}
          solutionsLabel={dict.nav.solutions}
          menuNote={dict.nav.menuNote}
          cta={dict.nav.cta}
          ctaHref={href(locale, 'contact')}
          label={dict.a11y.openMenu}
          closeLabel={dict.a11y.closeMenu}
          navLabel={dict.nav.menu}
          languageLabel={dict.a11y.switchLanguage}
        />
      </Container>
    </header>
  );
}
