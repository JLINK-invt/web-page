'use client';

import type { DomainId } from '@/types/content';
import { unitThemeStyle, unitThemes } from '@/content/unitThemes';
import { cn } from '@/lib/cn';
import { UnitGlyph, unitGlyph } from '@/components/window/UnitGlyph';

export function UnitTile({
  id,
  label,
  description,
  active = false,
  onClick,
}: {
  id: DomainId;
  label: string;
  description: string;
  active?: boolean;
  onClick: () => void;
}) {
  const theme = unitThemes[id];

  return (
    <button
      type="button"
      onClick={onClick}
      aria-current={active ? 'true' : undefined}
      style={unitThemeStyle(id)}
      className={cn(
        'group flex w-full min-w-0 flex-col items-center gap-1.5 rounded-lg px-2 py-2 text-center transition-transform duration-150 ease-out hover:-translate-y-0.5',
        active && 'bg-[#e6eef9]'
      )}
    >
      <span
        className="unit-orb flex h-[56px] w-[56px] items-center justify-center rounded-full transition-transform duration-150 ease-out group-hover:scale-[1.04]"
        style={{ backgroundColor: theme.primary, color: theme.glyph }}
      >
        <UnitGlyph name={unitGlyph[id]} className="h-[30px] w-[30px]" />
      </span>
      <span className="font-display text-[12.5px] leading-tight font-bold text-[#253b59]">
        {label}
      </span>
      <span className="text-[11px] leading-[1.35] text-[#3f4f66]">{description}</span>
    </button>
  );
}
