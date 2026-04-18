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

    {/* Integrations logo board */}
    <Section className="border-t border-border">
      <div className="max-w-2xl mb-12">
        <Eyebrow>Integrations we've delivered</Eyebrow>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">A logo board of what's already wired up.</h2>
        <p className="mt-4 text-muted-foreground">
          Years of platform engineering across payments, shipping, ERP, marketplaces, marketing and more — all available through LinkCommerce out of the box.
        </p>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
        {[
          "Stripe", "PayPal", "Elavon", "Adyen", "Worldpay", "Klarna",
          "Apple Pay", "Google Pay", "Realex", "Sage Pay", "Authorize.Net", "AIB MS",
          "DPD", "DHL", "UPS", "FedEx", "An Post", "Royal Mail",
          "Hermes", "ParcelForce", "SAP", "MS Dynamics 365", "NetSuite", "Sage",
          "Xero", "QuickBooks", "Odoo", "Brightpearl", "Linnworks", "Akeneo PIM",
          "Algolia", "Elasticsearch", "Klaviyo", "Mailchimp", "HubSpot", "Salesforce",
          "Dotdigital", "GA4", "GTM", "Meta Pixel", "Amazon", "eBay",
          "Etsy", "Google Shopping", "TikTok Shop", "Trustpilot", "Yotpo", "DeepL",
        ].map((logo) => (
          <div
            key={logo}
            className="rounded-xl border border-border bg-card/60 backdrop-blur h-16 flex items-center justify-center text-xs sm:text-sm font-semibold text-muted-foreground hover:text-foreground hover:border-primary/40 transition-colors text-center px-2"
          >
            {logo}
          </div>
        ))}
      </div>
      <p className="text-center text-sm text-muted-foreground mt-8">
        Plus any system with an API — LinkCommerce can wire it up.
      </p>
    </Section>

    <CTAStrip />
  </>
);

export default LinkCommerce;
