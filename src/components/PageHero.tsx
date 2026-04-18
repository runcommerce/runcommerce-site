import { ReactNode } from "react";
import { Eyebrow } from "./Section";

interface PageHeroProps {
  eyebrow: string;
  title: ReactNode;
  description: string;
}

const PageHero = ({ eyebrow, title, description }: PageHeroProps) => (
  <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 bg-hero-gradient overflow-hidden">
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,hsl(var(--primary)/0.15),transparent_50%)]" />
    <div className="container relative">
      <div className="max-w-3xl animate-fade-up">
        <Eyebrow>{eyebrow}</Eyebrow>
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.08] tracking-tight mb-6 break-words hyphens-auto">{title}</h1>
        <p className="text-lg text-muted-foreground max-w-2xl">{description}</p>
      </div>
    </div>
  </section>
);

export default PageHero;
