import { Link } from "react-router-dom";
import { ArrowRight, Cpu, Handshake, Layers, Plug } from "lucide-react";
import { Button } from "@/components/ui/button";
import PageHero from "@/components/PageHero";
import { Section, Eyebrow } from "@/components/Section";
import CTAStrip from "@/components/CTAStrip";

const tiers = [
  {
    icon: Cpu,
    eyebrow: "Technology Partners",
    title: "Best-in-class tech, pre-integrated.",
    desc: "Payments, fraud, search, CDP and AI providers we ship with out of the box.",
    partners: ["Stripe", "PayPal", "Elavon"],
  },
  {
    icon: Plug,
    eyebrow: "Implementation Partners",
    title: "Trusted delivery teams.",
    desc: "Agencies and systems integrators certified to deliver on the RunCommerce stack.",
    partners: ["Holbi", "Add your agency"],
  },
  {
    icon: Handshake,
    eyebrow: "Strategic Partners",
    title: "Joint go-to-market.",
    desc: "Long-term alliances co-investing in product, services and customer success.",
    partners: ["Coming soon"],
  },
];

const logos = ["Stripe", "PayPal", "Elavon", "Holbi", "Lovable Cloud", "Your brand"];

const Partners = () => (
  <>
    <PageHero
      eyebrow="Partners"
      title={<>Built with the <span className="text-gradient">best in commerce.</span></>}
      description="RunCommerce is open by design. We partner with the technology, implementation and strategic leaders our customers already trust — so you get a complete, AI-native stack without lock-in."
    />

    {/* Logo wall */}
    <Section>
      <div className="text-center max-w-2xl mx-auto mb-10">
        <Eyebrow>Trusted ecosystem</Eyebrow>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight">A growing network of partners.</h2>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
        {logos.map((l) => (
          <div
            key={l}
            className="rounded-2xl border border-border bg-card/60 backdrop-blur h-20 flex items-center justify-center text-sm font-semibold text-muted-foreground hover:text-foreground hover:border-primary/40 transition-colors"
          >
            {l}
          </div>
        ))}
      </div>
    </Section>

    {/* Tiers */}
    <Section className="border-t border-border">
      <div className="text-center max-w-2xl mx-auto mb-16">
        <Eyebrow>Partnership tiers</Eyebrow>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">Three ways to partner.</h2>
        <p className="mt-4 text-muted-foreground">Whether you're a technology provider, an agency or a strategic ally — there's a structured way to work with us.</p>
      </div>
      <div className="grid gap-6 md:grid-cols-3">
        {tiers.map((t) => (
          <div key={t.title} className="rounded-2xl border border-border bg-card p-8 hover:border-primary/50 hover:-translate-y-1 transition-all duration-300 flex flex-col">
            <t.icon className="h-10 w-10 text-primary mb-4" />
            <Eyebrow>{t.eyebrow}</Eyebrow>
            <h3 className="text-xl font-bold mb-2">{t.title}</h3>
            <p className="text-sm text-muted-foreground mb-6">{t.desc}</p>
            <div className="mt-auto flex flex-wrap gap-2">
              {t.partners.map((p) => (
                <span key={p} className="text-xs px-3 py-1 rounded-full border border-border bg-background/60 text-muted-foreground">
                  {p}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>

    {/* Become a partner */}
    <Section className="border-t border-border">
      <div className="relative overflow-hidden rounded-2xl border border-border bg-card p-10 md:p-16 shadow-card-elegant">
        <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-primary/20 blur-3xl" />
        <div className="relative grid gap-8 md:grid-cols-[1fr_auto] md:items-center">
          <div>
            <Eyebrow>Become a partner</Eyebrow>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight mb-3">Build with us.</h2>
            <p className="text-muted-foreground max-w-xl">
              We're actively onboarding technology, implementation and strategic partners. Tell us about your business and we'll get back within one business day.
            </p>
          </div>
          <Button asChild size="lg">
            <Link to="/contact">Apply to partner <ArrowRight className="ml-1" /></Link>
          </Button>
        </div>
      </div>
    </Section>

    <CTAStrip />
  </>
);

export default Partners;
