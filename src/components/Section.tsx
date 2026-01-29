import type { ReactNode } from "react";

type SectionProps = {
  id?: string;
  className?: string;
  children: ReactNode;
  ariaLabel?: string;
};

export function Section({ id, className = "", children, ariaLabel }: SectionProps) {
  return (
    <section
      id={id}
      aria-label={ariaLabel}
      className={`px-6 py-16 sm:px-10 lg:px-16 ${className}`.trim()}
    >
      <div className="mx-auto w-full max-w-6xl">{children}</div>
    </section>
  );
}
