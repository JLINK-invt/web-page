'use client';

import { useEffect, useRef, useState, type ReactNode } from 'react';
import { cn } from '@/lib/cn';

type RevealState = 'idle' | 'hidden' | 'visible';

export function Reveal({
  children,
  className,
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [state, setState] = useState<RevealState>('idle');

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduceMotion) return;

    const rect = element.getBoundingClientRect();
    if (rect.top < window.innerHeight * 0.92) return;

    setState('hidden');

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          setState('visible');
          observer.disconnect();
        }
      },
      { threshold: 0.15, rootMargin: '0px 0px -40px 0px' }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  const style =
    state === 'idle'
      ? undefined
      : {
          opacity: state === 'visible' ? 1 : 0,
          transform: state === 'visible' ? 'none' : 'translateY(18px)',
          transition: `opacity 600ms ease ${delay}ms, transform 600ms ease ${delay}ms`,
        };

  return (
    <div ref={ref} className={cn(className)} style={style}>
      {children}
    </div>
  );
}
