import { cn } from '@/lib/cn';

type BadgeVariant = 'seal' | 'shield' | 'standard';

interface GoldBadgeProps {
  children: React.ReactNode;
  variant?: BadgeVariant;
  className?: string;
}

export function GoldBadge({ children, variant = 'standard', className }: GoldBadgeProps) {
  return (
    <span
      className={cn(
        'gold-badge',
        variant === 'seal' && 'seal',
        variant === 'shield' && 'shield',
        className
      )}
    >
      {children}
    </span>
  );
}

export const BADGE_CATALOG = {
  domotics: [
    { text: 'Industrial Grade', variant: 'shield' as BadgeVariant },
    { text: '100% Secure System', variant: 'seal' as BadgeVariant },
  ],
  agriculture: [
    { text: 'Field Tested', variant: 'shield' as BadgeVariant },
    { text: 'ISO 9001 Ready', variant: 'seal' as BadgeVariant },
  ],
  industrial: [
    { text: 'Industrial Grade', variant: 'shield' as BadgeVariant },
    { text: '24/7 Operation', variant: 'seal' as BadgeVariant },
  ],
  medical: [
    { text: 'ISO Medical Certified', variant: 'shield' as BadgeVariant },
    { text: 'CE Marked', variant: 'seal' as BadgeVariant },
    { text: 'FDA Compliant', variant: 'standard' as BadgeVariant },
    { text: 'HIPAA Ready', variant: 'standard' as BadgeVariant },
  ],
} as const;
