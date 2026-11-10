import type { ReactNode } from 'react';
import { cn } from '@/lib/cn';

export function WindowPanel({
  title,
  aside,
  children,
  className,
  bodyClassName,
  titleId,
}: {
  title: string;
  aside?: ReactNode;
  children: ReactNode;
  className?: string;
  bodyClassName?: string;
  titleId?: string;
}) {
  return (
    <section className={cn('win-panel', className)} aria-labelledby={titleId}>
      <header className="flex flex-wrap items-center gap-2 border-b border-[#d8d8d8] bg-[linear-gradient(180deg,#fbfbfb_0%,#efefef_100%)] px-3 py-1.5">
        <h2 id={titleId} className="win-title text-[15px]">
          {title}
        </h2>
        {aside ? (
          <div className="ml-auto flex flex-wrap items-center gap-2 text-[12px] text-[#47525f]">
            {aside}
          </div>
        ) : null}
      </header>
      <div className={cn('p-3 sm:p-4', bodyClassName)}>{children}</div>
    </section>
  );
}
