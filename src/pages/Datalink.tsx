import { ArrowRight, Database, RefreshCw, Truck, Building2, Boxes, BarChart3 } from "lucide-react";
import PageHero from "@/components/PageHero";
import { Section, Eyebrow } from "@/components/Section";
import CTAStrip from "@/components/CTAStrip";

const benefits = [
  { icon: RefreshCw, t: "Real-time sync", d: "Bidirectional updates between shop, ERP and warehouse — measured in seconds, not hours." },
  { icon: Database, t: "Single source of truth", d: "Reconcile stock, pricing and orders across every channel automatically." },
  { icon: BarChart3, t: "Operational visibility", d: "Live dashboards and alerts on every flow — never lose an order again." },
];

const Datalink = () => (
  <>
    <PageHero
      eyebrow="Datalink"
      title={<>Connect your shop to <span className="text-gradient">everything else</span>.</>}
      description="Datalink is our managed integration layer — it keeps your storefront, ERP, warehouse and finance systems perfectly in sync, in real time."
    />

    <Section>
      <div className="rounded-2xl border border-border bg-card p-10 md:p-16">
        <div className="grid gap-10 md:grid-cols-[1fr_auto_1fr_auto_1fr] items-center text-center">
          <div className="rounded-xl border border-border bg-secondary/40 p-6">
            <Boxes className="h-10 w-10 text-primary mx-auto mb-3" />
            <div className="font-bold">Storefront</div>
            <div className="text-xs text-muted-foreground">Orders · Customers</div>
          </div>
          <ArrowRight className="h-6 w-6 text-primary mx-auto hidden md:block" />
          <div className="rounded-xl border border-primary bg-primary/10 p-6 shadow-glow">
            <RefreshCw className="h-10 w-10 text-primary mx-auto mb-3" />
            <div className="font-bold">Datalink</div>
            <div className="text-xs text-muted-foreground">Sync engine</div>
          </div>
          <ArrowRight className="h-6 w-6 text-primary mx-auto hidden md:block" />
          <div className="grid gap-3">
            <div className="rounded-xl border border-border bg-secondary/40 p-3 flex items-center gap-3">
              <Building2 className="h-5 w-5 text-primary" /><span className="text-sm">ERP / Finance</span>
            </div>
            <div className="rounded-xl border border-border bg-secondary/40 p-3 flex items-center gap-3">
              <Truck className="h-5 w-5 text-primary" /><span className="text-sm">Warehouse / 3PL</span>
            </div>
            <div className="rounded-xl border border-border bg-secondary/40 p-3 flex items-center gap-3">
              <Database className="h-5 w-5 text-primary" /><span className="text-sm">PIM / CRM</span>
            </div>
          </div>
        </div>
      </div>
    </Section>

    <Section className="border-t border-border">
      <Eyebrow>Why Datalink</Eyebrow>
      <h2 className="text-3xl md:text-4xl font-bold mb-12 max-w-2xl">Stop reconciling spreadsheets. Start trusting your data.</h2>
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

export default Datalink;
