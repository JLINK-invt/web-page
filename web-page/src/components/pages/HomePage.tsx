'use client';

import { useEffect, useRef } from 'react';
import type { Locale } from '@/lib/i18n';
import { getDictionary } from '@/lib/i18n';
import { useWindow, type PanelId } from '@/components/site/WindowProvider';
import {
  ContactPanel,
  HomePanel,
  MethodPanel,
  ProjectsPanel,
  UnitPanel,
} from '@/components/window/WindowPanels';

const panelIds: PanelId[] = [
  'home',
  'projects',
  'method',
  'contact',
  'domotics',
  'industrial',
  'agriculture',
  'medical',
];

export function HomePage({ locale }: { locale: Locale }) {
  const dict = getDictionary(locale);
  const { active, setActive } = useWindow();
  const previous = useRef(active);

  useEffect(() => {
    const hash = window.location.hash.replace('#', '');
    if (panelIds.includes(hash as PanelId)) {
      setActive(hash as PanelId);
    }
  }, [setActive]);

  useEffect(() => {
    if (previous.current === active) return;
    previous.current = active;

    const heading = document.querySelector<HTMLElement>('[data-panel-heading]');
    heading?.focus({ preventScroll: true });
  }, [active]);

  const panel = (): React.ReactNode => {
    if (active === 'home') return <HomePanel locale={locale} dict={dict} />;
    if (active === 'projects') return <ProjectsPanel locale={locale} dict={dict} />;
    if (active === 'method') return <MethodPanel locale={locale} dict={dict} />;
    if (active === 'contact') return <ContactPanel locale={locale} dict={dict} />;
    return <UnitPanel locale={locale} dict={dict} domainId={active} />;
  };

  return (
    <div data-window-shell className="flex min-h-full flex-col">
      <div key={active} className="win-panel-swap flex flex-1 flex-col">
        {panel()}
      </div>
    </div>
  );
}
