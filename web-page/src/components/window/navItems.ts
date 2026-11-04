import type { Dictionary } from '@/content/dictionaries';
import type { PanelId } from '@/components/site/WindowProvider';

export function navItems(dict: Dictionary): { id: PanelId; label: string }[] {
  return [
    { id: 'home', label: dict.nav.home },
    { id: 'domotics', label: dict.common.domotics },
    { id: 'industrial', label: dict.common.industrial },
    { id: 'agriculture', label: dict.common.agriculture },
    { id: 'medical', label: dict.common.medical },
    { id: 'projects', label: dict.nav.projects },
    { id: 'method', label: dict.window.navMethod },
    { id: 'contact', label: dict.nav.contact },
  ];
}
