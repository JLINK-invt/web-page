import type { Dictionary } from '@/content/dictionaries';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Reveal } from '@/components/ui/Reveal';

function ScanMark() {
  return (
    <svg viewBox="0 0 40 40" aria-hidden="true" className="h-9 w-9">
      <circle
        cx="20"
        cy="20"
        r="14"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.4"
        opacity="0.5"
      />
      <circle
        cx="20"
        cy="20"
        r="8"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.4"
        opacity="0.8"
      />
      <circle cx="20" cy="20" r="2.6" fill="currentColor" />
      <path
        d="M20 2v6M20 32v6M2 20h6M32 20h6"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        opacity="0.6"
      />
    </svg>
  );
}

function CoreMark() {
  return (
    <svg viewBox="0 0 40 40" aria-hidden="true" className="h-9 w-9">
      <rect
        x="7"
        y="7"
        width="26"
        height="26"
        rx="7"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.4"
        opacity="0.55"
      />
      <rect
        x="13"
        y="13"
        width="14"
        height="14"
        rx="4"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.4"
        opacity="0.85"
      />
      <path d="M20 17.5 22 20l-2 2.5L18 20Z" fill="currentColor" />
    </svg>
  );
}

function SignalMark() {
  return (
    <svg viewBox="0 0 40 40" aria-hidden="true" className="h-9 w-9">
      <path
        d="M8 26c4-9 8-13 12-13s8 4 12 13"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.4"
        opacity="0.55"
        strokeLinecap="round"
      />
      <path
        d="M13 27c2.6-5.6 4.8-8.4 7-8.4s4.4 2.8 7 8.4"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.4"
        opacity="0.85"
        strokeLinecap="round"
      />
      <circle cx="20" cy="29" r="2.4" fill="currentColor" />
    </svg>
  );
}

const marks = [ScanMark, CoreMark, SignalMark];

export function Approach({ dict }: { dict: Dictionary }) {
  return (
    <section className="border-y border-white/90 bg-[linear-gradient(180deg,rgba(255,255,255,0.72),rgba(214,234,248,0.55))] py-16 shadow-[inset_0_1px_0_rgba(255,255,255,0.95)] backdrop-blur-sm sm:py-20">
      <Container>
        <SectionHeading title={dict.home.approach.title} subtitle={dict.home.approach.subtitle} />

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {dict.home.approach.steps.map((step, index) => {
            const Mark = marks[index % marks.length];
            return (
              <Reveal key={step.title} delay={index * 80}>
                <article className="aero-glass h-full rounded-2xl p-6">
                  <span className="text-cosmos">
                    <Mark />
                  </span>
                  <h3 className="font-display text-ink mt-5 text-lg font-semibold tracking-tight">
                    {step.title}
                  </h3>
                  <p className="text-muted mt-2 text-sm leading-relaxed">{step.description}</p>
                </article>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
