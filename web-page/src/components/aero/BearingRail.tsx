import Link from 'next/link';
import type { Locale } from '@/lib/i18n';
import { localize } from '@/lib/i18n';
import { domains } from '@/content/domains';
import { href } from '@/lib/routes';
import { cn } from '@/lib/cn';
import { ArrowIcon } from '@/components/ui/ArrowIcon';

export function BearingRail({
  locale,
  labels,
  className,
  physical = false,
}: {
  locale: Locale;
  labels: { active: string; exploration: string; explore: string };
  className?: string;
  physical?: boolean;
}) {
  return (
    <ul className={cn('grid gap-3 sm:grid-cols-2 xl:grid-cols-4', className)}>
      {domains.map((domain) => {
        const live = domain.status === 'active';
        return (
          <li key={domain.id}>
            <Link
              href={href(locale, 'domain', domain.id)}
              data-skeuo-panel={physical ? 'true' : undefined}
              className={
                physical
                  ? 'group relative flex h-full items-start gap-3 rounded-2xl p-4 transition-transform hover:-translate-y-0.5 focus-visible:-translate-y-0.5'
                  : 'aero-glass group flex h-full items-start gap-3 rounded-2xl p-4 transition-transform hover:-translate-y-0.5 focus-visible:-translate-y-0.5'
              }
            >
              {physical ? (
                <>
                  <span className="pointer-events-none absolute top-2.5 left-2.5 h-1.5 w-1.5 rounded-full bg-white/80 shadow-[0_1px_0_rgba(6,26,52,0.45)]" />
                  <span className="pointer-events-none absolute top-2.5 right-2.5 h-1.5 w-1.5 rounded-full bg-white/80 shadow-[0_1px_0_rgba(6,26,52,0.45)]" />
                  <span className="pointer-events-none absolute bottom-2.5 left-2.5 h-1.5 w-1.5 rounded-full bg-white/80 shadow-[0_1px_0_rgba(6,26,52,0.45)]" />
                  <span className="pointer-events-none absolute right-2.5 bottom-2.5 h-1.5 w-1.5 rounded-full bg-white/80 shadow-[0_1px_0_rgba(6,26,52,0.45)]" />
                </>
              ) : null}
              <span
                aria-hidden="true"
                className={cn(
                  'mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border',
                  live
                    ? 'border-cosmos/40 bg-cosmos/10'
                    : 'border-muted/45 border-dashed bg-white/40'
                )}
              >
                <span
                  className={cn(
                    'block rounded-full',
                    live
                      ? 'bg-cosmos h-2.5 w-2.5'
                      : 'border-muted/60 h-2.5 w-2.5 border bg-transparent'
                  )}
                />
              </span>

              <span className="flex flex-1 flex-col gap-1">
                <span className="font-display text-ink text-[15px] font-semibold tracking-tight">
                  {localize(domain.name, locale)}
                </span>
                <span className="text-muted text-[12px] leading-relaxed">
                  {localize(domain.description, locale)}
                </span>
                <span className="text-cosmos mt-2 inline-flex items-center gap-1.5 text-[11px] font-semibold tracking-[0.16em] uppercase">
                  {live ? labels.explore : labels.exploration}
                  <ArrowIcon className="transition-transform group-hover:translate-x-1" />
                </span>
              </span>
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
