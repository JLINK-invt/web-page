import type { CSSProperties } from 'react';
import type { DomainId } from '@/types/content';

export type UnitTheme = {
  /** Color de la unidad: orbes, banner y acentos. */
  primary: string;
  /** Versión oscura del color de la unidad, para degradados y bordes. */
  shade: string;
  /** Segundo color de la paleta. Superficie oscura o teñida de la unidad. */
  deep: string;
  /** Superficie clara: fondo de tarjetas y marcos. */
  surface: string;
  /** Acento de la unidad: píldoras, viñetas y detalles. */
  accent: string;
  /** Tinta para texto sobre superficies claras. */
  ink: string;
  /** Color del glifo sobre el orbe de la unidad. */
  glyph: string;
  /** Tono alto del banner, para primaries claros que necesitan más contraste. */
  bannerTop?: string;
  /** Tono medio del banner, para primaries claros que necesitan más contraste. */
  bannerMid?: string;
};

export const unitThemes: Record<DomainId, UnitTheme> = {
  domotics: {
    primary: '#0686d4',
    shade: '#0a4f86',
    deep: '#0f172a',
    surface: '#ffffff',
    accent: '#10b981',
    ink: '#0f172a',
    glyph: '#ffffff',
  },
  industrial: {
    primary: '#f97316',
    shade: '#9a4210',
    deep: '#1e3a6a',
    surface: '#9ca3af',
    accent: '#374151',
    ink: '#1f2937',
    glyph: '#3b1603',
  },
  agriculture: {
    primary: '#15803d',
    shade: '#0d5730',
    deep: '#14532d',
    surface: '#f5f5dc',
    accent: '#eab308',
    ink: '#14532d',
    glyph: '#ffffff',
  },
  medical: {
    primary: '#38bdf8',
    shade: '#0369a1',
    deep: '#e0f2fe',
    surface: '#ffffff',
    accent: '#0284c7',
    ink: '#0c4a6e',
    glyph: '#0b3d5c',
    bannerTop: '#1476ae',
    bannerMid: '#0c5f92',
  },
};

export function getUnitTheme(id: DomainId): UnitTheme {
  return unitThemes[id];
}

/** Variables CSS de la unidad, aplicadas en la raíz de su página. */
export function unitThemeStyle(id: DomainId): CSSProperties {
  const theme = unitThemes[id];

  return {
    '--unit-primary': theme.primary,
    '--unit-shade': theme.shade,
    '--unit-deep': theme.deep,
    '--unit-surface': theme.surface,
    '--unit-accent': theme.accent,
    '--unit-ink': theme.ink,
    '--unit-banner-top': theme.bannerTop,
    '--unit-banner-mid': theme.bannerMid,
  } as CSSProperties;
}
