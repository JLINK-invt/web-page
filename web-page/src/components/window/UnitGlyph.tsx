import type { ReactNode } from 'react';
import type { DomainId } from '@/types/content';

export type UnitGlyphName = 'house' | 'factory' | 'plant' | 'heart-lifeline';

export const unitGlyph: Record<DomainId, UnitGlyphName> = {
  domotics: 'house',
  industrial: 'factory',
  agriculture: 'plant',
  medical: 'heart-lifeline',
};

const glyphs: Record<UnitGlyphName, ReactNode> = {
  house: (
    <>
      <path d="M4.2 11.6 12 5l7.8 6.6V19a1.3 1.3 0 0 1-1.3 1.3h-3.6v-4.7H9.1v4.7H5.5A1.3 1.3 0 0 1 4.2 19Z" />
      <path d="M16.4 8.7V4.4h2.8v5.6" />
    </>
  ),
  factory: (
    <>
      <path d="M3.4 20.4V10l5.4 3.1V10l5.4 3.1V6.6h3.4v13.8Z" />
      <path d="M2.8 20.4h17.4" />
      <path d="M17 10.2h1.6M17 13.4h1.6" />
    </>
  ),
  plant: (
    <>
      <path d="M12 22v-8" />
      <path d="M12 14c-4 0-7-3-7-7s3-7 7-7 7 3 7 7-3 7-7 7z" />
      <path d="M9 14h6M12 11v6" />
      <path d="M12 4c-2.2 0-4 1.8-4 4s1.8 4 4 4 4-1.8 4-4-1.8-4-4-4z" />
    </>
  ),
  'heart-lifeline': (
    <>
      <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
      <path
        d="M2 12c2-3 5-4 10-4s8 1 10 4"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </>
  ),
};

export function UnitGlyph({ name, className }: { name: UnitGlyphName; className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.7}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={className}
    >
      {glyphs[name]}
    </svg>
  );
}
