'use client';

import { createContext, useCallback, useContext, useMemo, useState, type ReactNode } from 'react';
import type { DomainId } from '@/types/content';
import { locales } from '@/lib/i18n';

export type PanelId = 'home' | 'method' | 'contact' | DomainId;

type WindowContextValue = {
  active: PanelId;
  setActive: (panel: PanelId) => void;
};

const WindowContext = createContext<WindowContextValue | null>(null);

function isHomePath(pathname: string): boolean {
  return locales.some((locale) => pathname === `/${locale}` || pathname === `/${locale}/`);
}

export function WindowProvider({ children }: { children: ReactNode }) {
  const [active, setActive] = useState<PanelId>('home');

  const setActivePanel = useCallback((panel: PanelId) => {
    setActive(panel);

    if (typeof window === 'undefined') return;
    if (!isHomePath(window.location.pathname)) return;

    const url =
      panel === 'home' ? window.location.pathname : `${window.location.pathname}#${panel}`;
    window.history.replaceState(null, '', url);
  }, []);

  const value = useMemo(() => ({ active, setActive: setActivePanel }), [active, setActivePanel]);

  return <WindowContext.Provider value={value}>{children}</WindowContext.Provider>;
}

export function useWindow() {
  const context = useContext(WindowContext);

  if (!context) {
    throw new Error('useWindow must be used inside a WindowProvider');
  }

  return context;
}
