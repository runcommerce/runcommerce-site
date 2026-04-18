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
      <div className="space-y-10">
        {[
          {
            category: "Platforms",
            items: [
              { name: "Shopify", slug: "shopify" },
              { name: "Adobe Commerce" },
              { name: "BigCommerce", slug: "bigcommerce" },
              { name: "Salesforce" },
              { name: "WooCommerce", slug: "woocommerce" },
              { name: "osCommerce" },
              { name: "RunCommerce" },
              { name: "Custom" },
            ],
          },
          {
            category: "Logistics",
            items: [
              { name: "DPD", slug: "dpd" },
              { name: "DHL", slug: "dhl" },
              { name: "UPS", slug: "ups" },
              { name: "FedEx", slug: "fedex" },
              { name: "An Post" },
              { name: "Royal Mail" },
              { name: "Hermes" },
              { name: "ParcelForce" },
              { name: "GLS" },
              { name: "Click & Collect" },
            ],
          },
          {
            category: "Payments",
            items: [
              { name: "Stripe", slug: "stripe" },
              { name: "PayPal", slug: "paypal" },
              { name: "Elavon" },
              { name: "Adyen", slug: "adyen" },
              { name: "Worldpay" },
              { name: "Klarna", slug: "klarna" },
              { name: "Apple Pay", slug: "applepay" },
              { name: "Google Pay", slug: "googlepay" },
              { name: "Realex" },
              { name: "Sage Pay" },
              { name: "Authorize.Net" },
              { name: "AIB MS" },
            ],
          },
          {
            category: "Finance",
            items: [
              { name: "SAP", slug: "sap" },
              { name: "MS Dynamics 365" },
              { name: "NetSuite" },
              { name: "Sage", slug: "sage" },
              { name: "Xero", slug: "xero" },
              { name: "QuickBooks", slug: "quickbooks" },
              { name: "Odoo", slug: "odoo" },
              { name: "Exchequer" },
            ],
          },
          {
            category: "Marketplaces",
            items: [
              { name: "Amazon" },
              { name: "eBay", slug: "ebay" },
              { name: "Etsy", slug: "etsy" },
              { name: "Google Shopping", slug: "google" },
              { name: "Meta Shops", slug: "meta" },
              { name: "TikTok Shop", slug: "tiktok" },
              { name: "Pinterest", slug: "pinterest" },
              { name: "ChannelAdvisor" },
            ],
          },
          {
            category: "Distributors",
            items: [
              { name: "Exertis" },
              { name: "Tech Data" },
              { name: "Ingram Micro" },
              { name: "Westcoast" },
              { name: "DCC" },
              { name: "Musgrave" },
              { name: "BWG" },
            ],
          },
          {
            category: "Analytics & Tracking",
            items: [
              { name: "Google Analytics", slug: "googleanalytics" },
              { name: "Google Tag Manager", slug: "googletagmanager" },
              { name: "Meta Pixel", slug: "meta" },
              { name: "TikTok Pixel", slug: "tiktok" },
              { name: "Hotjar", slug: "hotjar" },
              { name: "MS Clarity" },
              { name: "Segment" },
              { name: "Looker Studio", slug: "looker" },
            ],
          },
        ].map((cat) => (
          <div key={cat.category}>
            <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-primary mb-4">{cat.category}</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
              {cat.items.map((logo: { name: string; slug?: string }) => (
                <div
                  key={logo.name}
                  title={logo.name}
                  className="group rounded-xl border border-border bg-card/60 backdrop-blur h-20 flex flex-col items-center justify-center gap-1.5 px-2 hover:border-primary/40 hover:bg-card transition-colors"
                >
                  {logo.slug ? (
                    <img
                      src={`https://cdn.simpleicons.org/${logo.slug}/ffffff`}
                      alt={`${logo.name} logo`}
                      loading="lazy"
                      className="h-7 w-auto max-w-[60%] opacity-80 group-hover:opacity-100 transition-opacity"
                    />
                  ) : (
                    <div className="h-7 flex items-center justify-center text-sm font-bold text-foreground/90">
                      {logo.name}
                    </div>
                  )}
                  <span className="text-[10px] uppercase tracking-wider text-muted-foreground text-center leading-tight">
                    {logo.name}
                  </span>
                </div>
              ))}
            </div>
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
