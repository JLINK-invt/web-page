import type { SectorSceneName } from '@/components/aero/SectorScene';
import type { DomainId } from '@/types/content';

export const domainScenes: Record<DomainId, SectorSceneName> = {
  domotics: 'house',
  agriculture: 'agro',
  industrial: 'industry',
  medical: 'lab',
};
