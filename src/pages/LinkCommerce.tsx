import { ArrowRight, Database, RefreshCw, Truck, Building2, Boxes, Plug } from "lucide-react";
import PageHero from "@/components/PageHero";
import { Section, Eyebrow } from "@/components/Section";
import CTAStrip from "@/components/CTAStrip";

const benefits = [
  { icon: RefreshCw, t: "Migrate in minutes", d: "Move any store from any platform to RunCommerce in minutes — not months." },
  { icon: Plug, t: "Dozens of connectors", d: "Pre-built connections for payments, CRM, logistics, ERP, PIM and more." },
  { icon: Database, t: "Bespoke orchestration", d: "Our orchestration layer keeps every system in sync as you scale and change." },
];

const LinkCommerce = () => (
  <>
    <PageHero
      eyebrow="LinkCommerce"
      title={<>Transformation, <span className="text-gradient">made easy</span>.</>}
      description="LinkCommerce is our orchestration tool that migrates any store from any platform to RunCommerce in minutes — leveraging dozens of pre-built integrations across payments, CRM, logistics and beyond."
    />

    <Section>
      <div className="rounded-2xl border border-border bg-card p-10 md:p-16">
        <div className="grid gap-10 md:grid-cols-[1fr_auto_1fr_auto_1fr] items-center text-center">
          <div className="rounded-xl border border-border bg-secondary/40 p-6">
            <Boxes className="h-10 w-10 text-primary mx-auto mb-3" />
            <div className="font-bold">Any source platform</div>
            <div className="text-xs text-muted-foreground">Shopify · Magento · custom</div>
          </div>
          <ArrowRight className="h-6 w-6 text-primary mx-auto hidden md:block" />
          <div className="rounded-xl border border-primary bg-primary/10 p-6 shadow-glow">
            <RefreshCw className="h-10 w-10 text-primary mx-auto mb-3" />
            <div className="font-bold">LinkCommerce</div>
            <div className="text-xs text-muted-foreground">Orchestration layer</div>
          </div>
          <ArrowRight className="h-6 w-6 text-primary mx-auto hidden md:block" />
          <div className="grid gap-3">
            <div className="rounded-xl border border-border bg-secondary/40 p-3 flex items-center gap-3">
              <Building2 className="h-5 w-5 text-primary" /><span className="text-sm">ERP / Finance</span>
            </div>
            <div className="rounded-xl border border-border bg-secondary/40 p-3 flex items-center gap-3">
              <Truck className="h-5 w-5 text-primary" /><span className="text-sm">Logistics / 3PL</span>
            </div>
            <div className="rounded-xl border border-border bg-secondary/40 p-3 flex items-center gap-3">
              <Database className="h-5 w-5 text-primary" /><span className="text-sm">PIM / CRM / Payments</span>
            </div>
          </div>
        </div>
      </div>
    </Section>

    <Section className="border-t border-border">
      <Eyebrow>Why LinkCommerce</Eyebrow>
      <h2 className="text-3xl md:text-4xl font-bold mb-12 max-w-2xl">Stop paying for transformation projects. Start migrating.</h2>
      <div className="grid gap-6 md:grid-cols-3">
        {benefits.map((b) => (
          <div key={b.t} className="rounded-2xl border border-border bg-card p-8">
            <b.icon className="h-9 w-9 text-primary mb-4" />
            <h3 className="font-bold text-lg mb-2">{b.t}</h3>
            <p className="text-sm text-muted-foreground">{b.d}</p>
          </div>
        ))}
      </div>
    </Section>

    <CTAStrip />
  </>
);

export default LinkCommerce;
