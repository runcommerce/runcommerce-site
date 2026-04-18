import { Boxes, CreditCard, Globe2, Package, ShoppingCart, Store } from "lucide-react";
import PageHero from "@/components/PageHero";
import { Section, Eyebrow } from "@/components/Section";
import CTAStrip from "@/components/CTAStrip";

const features = [
  { icon: ShoppingCart, title: "Click & Collect", desc: "Native in-store pickup with real-time stock and order routing." },
  { icon: Package, title: "Pre-order", desc: "Capture demand before launch with full deposit and reservation flows." },
  { icon: Store, title: "POS", desc: "Unified online and in-store transactions with a single inventory source." },
  { icon: Globe2, title: "Multi-currency", desc: "Localised pricing, taxes and checkouts for every market you sell in." },
  { icon: Boxes, title: "B2B", desc: "Customer-specific catalogs, tiered pricing and quote workflows." },
  { icon: CreditCard, title: "Payments & integrations", desc: "Dozens of pre-built connections — payments, CRM, logistics and more." },
];

const Platform = () => (
  <>
    <PageHero
      eyebrow="RunCommerce Platform"
      title={<>Launch a new store in <span className="text-gradient">7 minutes</span>.</>}
      description="An AI-powered eCommerce platform with everything you need out of the box. Describe what you want through a layered prompt interface and we'll spin up a fully integrated store with stock loaded — then iterate as often as you like."
    />

    <Section>
      <Eyebrow>Capabilities</Eyebrow>
      <h2 className="text-3xl md:text-4xl font-bold mb-12 max-w-2xl">Everything needed to run a serious online store.</h2>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {features.map((f) => (
          <div key={f.title} className="rounded-2xl border border-border bg-card p-8 hover:-translate-y-1 hover:border-primary/50 transition-all">
            <f.icon className="h-9 w-9 text-primary mb-4" />
            <h3 className="font-bold text-lg mb-2">{f.title}</h3>
            <p className="text-sm text-muted-foreground">{f.desc}</p>
          </div>
        ))}
      </div>
    </Section>

    <Section className="border-t border-border">
      <div className="grid gap-12 lg:grid-cols-2 items-center">
        <div>
          <Eyebrow>AI Platform Flexibility</Eyebrow>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Build whatever your imagination can think of.</h2>
          <p className="text-muted-foreground mb-4">
            Think Lovable, but on a detailed and structured eCommerce stack. A layered prompt interface sits on top of our backend engine — generating storefronts, integrations and content from natural language.
          </p>
          <p className="text-muted-foreground">
            <strong className="text-foreground">Impact:</strong> elimination of transformation project costs and time.
          </p>
        </div>
        <div className="rounded-2xl border border-border bg-card p-8 shadow-card-elegant">
          <div className="text-xs text-primary font-semibold uppercase tracking-wider mb-3">AI Store Builder</div>
          <div className="space-y-3 text-sm">
            <div className="rounded-lg bg-secondary/40 p-3">"Launch a B2B store for industrial fasteners, EUR + GBP, with tiered pricing"</div>
            <div className="rounded-lg border border-primary/40 bg-primary/5 p-3 text-primary">✓ Storefront generated · 12s</div>
            <div className="rounded-lg border border-primary/40 bg-primary/5 p-3 text-primary">✓ Stripe + DHL connected · 38s</div>
            <div className="rounded-lg border border-primary/40 bg-primary/5 p-3 text-primary">✓ 4,200 SKUs imported · 6m 12s</div>
          </div>
        </div>
      </div>
    </Section>

    <CTAStrip />
  </>
);

export default Platform;
