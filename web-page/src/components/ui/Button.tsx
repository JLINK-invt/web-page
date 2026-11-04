import Link from 'next/link';
import { cn } from '@/lib/cn';

export type ButtonVariant = 'primary' | 'secondary' | 'inverse' | 'ghost';

const base =
  'inline-flex items-center justify-center gap-1.5 whitespace-nowrap no-underline transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 disabled:pointer-events-none disabled:opacity-60';

const variants: Record<ButtonVariant, string> = {
  primary: 'win-btn',
  secondary: 'win-btn win-btn-light',
  inverse: 'win-btn win-btn-gold',
  ghost: 'win-btn-ghost',
};

export function buttonStyles(variant: ButtonVariant = 'primary', className?: string): string {
  return cn(base, variants[variant], className);
}

export function ButtonLink({
  href,
  variant = 'primary',
  className,
  children,
}: {
  href: string;
  variant?: ButtonVariant;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <Link href={href} className={buttonStyles(variant, className)}>
      {children}
    </Link>
  );
}
