import { Briefcase, Compass, HandCoins, LineChart, Users2, Wrench } from "lucide-react";
import PageHero from "@/components/PageHero";
import { Section, Eyebrow } from "@/components/Section";
import CTAStrip from "@/components/CTAStrip";

const services = [
  { icon: Compass, title: "Discovery & strategic review", desc: "We map your goals, audit your stack and define what success looks like." },
  { icon: Wrench, title: "Implementation & build", desc: "Migration, integration and platform build executed by our senior team." },
  { icon: LineChart, title: "Platform · Agentic · Hosting · iPaaS ARR", desc: "Ongoing managed service with AI agents, hosting and integration platform combined." },
  { icon: Users2, title: "Embedded experts", desc: "Senior eCommerce operators plugged into your team for the work AI shouldn't do alone." },
  { icon: Briefcase, title: "Transformation programs", desc: "Replatforming, internationalisation and B2B launches — delivered without the agency overhead." },
  { icon: HandCoins, title: "Outcome-based engagements", desc: "Aligned commercials so we win when you win." },
];

const Services = () => (
  <>
    <PageHero
      eyebrow="AI Managed Services"
      title={<>World-class team. <span className="text-gradient">Fraction of the cost</span>.</>}
      description="Pairing our AI platform with deep operator expertise gives you the capability and flexibility to deliver on your unique requirements — without the cost or churn of traditional agencies."
    />

    <Section>
      <Eyebrow>Services</Eyebrow>
      <h2 className="text-3xl md:text-4xl font-bold mb-12 max-w-2xl">From discovery to always-on operation.</h2>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {services.map((s) => (
          <div key={s.title} className="rounded-2xl border border-border bg-card p-8 hover:-translate-y-1 hover:border-primary/50 transition-all">
            <s.icon className="h-9 w-9 text-primary mb-4" />
            <h3 className="font-bold text-lg mb-2">{s.title}</h3>
            <p className="text-sm text-muted-foreground">{s.desc}</p>
          </div>
        ))}
      </div>
    </Section>

    <Section className="border-t border-border">
      <Eyebrow>Why not an agency?</Eyebrow>
      <h2 className="text-3xl md:text-4xl font-bold mb-8 max-w-3xl">Agencies are expensive, variable and lose their best people. We replace neither agencies nor teams — we automate tasks and effort.</h2>
      <div className="grid gap-6 md:grid-cols-2">
        <div className="rounded-2xl border border-border bg-card p-8">
          <h3 className="font-bold mb-4">Agencies / SIs</h3>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>· Expensive day rates</li>
            <li>· Variable quality</li>
            <li>· Good people churn</li>
            <li>· Supplier-induced demand</li>
          </ul>
        </div>
        <div className="rounded-2xl border border-primary/40 bg-card p-8 shadow-glow">
          <h3 className="font-bold mb-4 text-primary">RunCommerce</h3>
          <ul className="space-y-2 text-sm">
            <li>✓ AI-augmented delivery, lower cost base</li>
            <li>✓ Senior operators, no churn</li>
            <li>✓ Always-on managed service</li>
            <li>✓ Aligned commercial model</li>
          </ul>
        </div>
      </div>
    </Section>

    <CTAStrip />
  </>
);

export default Services;
