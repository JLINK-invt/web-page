import { cn } from '@/lib/cn';

interface MetallicTabsProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
  tabs: Array<{ id: string; label: string }>;
  className?: string;
}

export function MetallicTabs({ activeTab, onTabChange, tabs, className }: MetallicTabsProps) {
  return (
    <div className={cn('metallic-tabs', className)} role="tablist" aria-label="Unidades de negocio">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          role="tab"
          aria-selected={activeTab === tab.id}
          aria-controls={`panel-${tab.id}`}
          id={`tab-${tab.id}`}
          className={cn('metallic-tab', activeTab === tab.id && 'active')}
          onClick={() => onTabChange(tab.id)}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
}
