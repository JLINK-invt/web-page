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
      <h2 className="win-title text-[16px] leading-snug">{title}</h2>
      {subtitle ? (
        <p className="mt-1.5 text-[12.5px] leading-[1.55] text-[#45505d]">{subtitle}</p>
      ) : null}
    </div>
  );
}
