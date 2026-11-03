import { cn } from '@/lib/cn';

export function SectionHeading({
  title,
  subtitle,
  align = 'left',
  className,
}: {
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
  className?: string;
}) {
  return (
    <div className={cn('max-w-2xl', align === 'center' && 'mx-auto text-center', className)}>
      <h2 className="font-display text-ink text-[clamp(1.9rem,3.6vw,2.9rem)] leading-[1.05] font-semibold tracking-[-0.025em] text-balance">
        {title}
      </h2>
      {subtitle ? <p className="text-muted mt-4 text-base leading-relaxed">{subtitle}</p> : null}
    </div>
  );
}
