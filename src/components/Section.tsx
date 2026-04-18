import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface SectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
}

export const Section = ({ children, className, id }: SectionProps) => (
  <section id={id} className={cn("py-20 md:py-28", className)}>
    <div className="container">{children}</div>
  </section>
);

interface EyebrowProps { children: ReactNode }
export const Eyebrow = ({ children }: EyebrowProps) => (
  <span className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-primary mb-4">
    {children}
  </span>
);
