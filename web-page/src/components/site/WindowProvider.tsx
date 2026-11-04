'use client';

import { createContext, useContext, useMemo, useState, type ReactNode } from 'react';
import type { DomainId } from '@/types/content';

export type PanelId = 'home' | 'projects' | 'method' | 'contact' | DomainId;

type WindowContextValue = {
  active: PanelId;
  setActive: (panel: PanelId) => void;
};

const WindowContext = createContext<WindowContextValue | null>(null);

export function WindowProvider({ children }: { children: ReactNode }) {
  const [active, setActive] = useState<PanelId>('home');
  const value = useMemo(() => ({ active, setActive }), [active]);

  return <WindowContext.Provider value={value}>{children}</WindowContext.Provider>;
}

export function useWindow() {
  const context = useContext(WindowContext);

  if (!context) {
    throw new Error('useWindow must be used inside a WindowProvider');
  }

  return context;
}
