import Link from 'next/link';
import { cn } from '@/lib/cn';

export type ButtonVariant = 'primary' | 'secondary' | 'inverse' | 'ghost';

const base =
  'inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold tracking-tight transition-[transform,box-shadow,background-color] focus-visible:outline-2 focus-visible:outline-offset-4 disabled:pointer-events-none disabled:opacity-60';

const variants: Record<ButtonVariant, string> = {
  primary:
    'border border-white/25 bg-[linear-gradient(180deg,#2b7fbe_0%,#14578c_46%,#0a3557_100%)] text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.55),inset_0_-2px_3px_rgba(3,17,34,0.5),inset_0_-1px_0_rgba(224,184,90,0.65),0_18px_32px_-18px_rgba(5,26,51,0.8)] hover:-translate-y-0.5 hover:bg-[linear-gradient(180deg,#3a91d2_0%,#1769aa_46%,#0d4269_100%)]',
  secondary:
    'border border-white bg-[linear-gradient(180deg,rgba(255,255,255,0.98),rgba(233,244,252,0.9))] text-ink shadow-[inset_0_1px_0_rgba(255,255,255,1),inset_0_-1px_0_rgba(10,35,66,0.1),0_14px_26px_-22px_rgba(5,26,51,0.6)] hover:-translate-y-0.5 hover:border-white hover:bg-white',
  inverse:
    'border border-white bg-[linear-gradient(180deg,#ffffff_0%,#eaf4fb_46%,#bcd5e8_100%)] text-ink shadow-[inset_0_1px_0_rgba(255,255,255,1),inset_0_-2px_3px_rgba(10,35,66,0.18),0_16px_30px_-18px_rgba(2,12,26,0.7)] hover:-translate-y-0.5 hover:brightness-105',
  ghost:
    'text-ink/80 underline decoration-gold/70 decoration-2 underline-offset-8 hover:text-cosmos',
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
