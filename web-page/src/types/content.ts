import type { Locale } from '@/lib/i18n';

export type LocalizedText = Record<Locale, string>;
export type LocalizedList = Record<Locale, string[]>;

export type DomainId = 'domotics' | 'agriculture' | 'industrial' | 'medical';
export type DomainStatus = 'active' | 'upcoming';

export interface Domain {
  id: DomainId;
  number: string;
  name: LocalizedText;
  description: LocalizedText;
  status: DomainStatus;
}

export type ProjectSlug = 'smart-house' | 'fitness-gym' | 'health-psychology';
export type ProjectVisual = 'orbits' | 'grid' | 'waves';

export interface ProjectFact {
  label: LocalizedText;
  value: LocalizedText;
}

export interface ProjectTutorial {
  title: LocalizedText;
  description: LocalizedText;
  steps: LocalizedList;
}

export interface Project {
  slug: ProjectSlug;
  name: string;
  domain: DomainId;
  featured: boolean;
  visual: ProjectVisual;
  tagline: LocalizedText;
  summary: LocalizedText;
  challenge: LocalizedText;
  approach: LocalizedText;
  capabilities: LocalizedList;
  stack: LocalizedList;
  facts: ProjectFact[];
  tutorials?: ProjectTutorial[];
  price?: number;
  currency?: string;
}
