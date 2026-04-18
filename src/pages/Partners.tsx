import { Link } from "react-router-dom";
import { ArrowRight, Cpu, Handshake, Layers, Plug } from "lucide-react";
import { Button } from "@/components/ui/button";
import PageHero from "@/components/PageHero";
import { Section, Eyebrow } from "@/components/Section";
import CTAStrip from "@/components/CTAStrip";

type Logo = { name: string; slug?: string };

const tiers: { icon: typeof Cpu; eyebrow: string; title: string; desc: string; partners: Logo[] }[] = [
  {
    icon: Cpu,
    eyebrow: "Technology Partners",
    title: "Best-in-class tech, pre-integrated.",
    desc: "Payments, fraud, search, CDP and AI providers we ship with out of the box.",
    partners: [
      { name: "Stripe", slug: "stripe" },
      { name: "PayPal", slug: "paypal" },
      { name: "Elavon", slug: "elavon" },
    ],
  },
  {
    icon: Plug,
    eyebrow: "Implementation Partners",
    title: "Trusted delivery teams.",
    desc: "Agencies and systems integrators certified to deliver on the RunCommerce stack.",
    partners: [
      { name: "Holbi" },
      { name: "Add your agency" },
    ],
  },
  {
    icon: Handshake,
    eyebrow: "Strategic Partners",
    title: "Joint go-to-market.",
    desc: "Long-term alliances co-investing in product, services and customer success.",
    partners: [
      { name: "Standfast Partners" },
    ],
  },
];

const logos: Logo[] = [
  { name: "Stripe", slug: "stripe" },
  { name: "PayPal", slug: "paypal" },
  { name: "Elavon", slug: "elavon" },
  { name: "Holbi" },
  { name: "Standfast Partners" },
  { name: "Lovable Cloud" },
];

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
            key={l.name}
            title={l.name}
            className="group rounded-2xl border border-border bg-card/60 backdrop-blur h-24 flex flex-col items-center justify-center gap-2 px-3 hover:border-primary/40 hover:bg-card transition-colors"
          >
            {l.slug ? (
              <img
                src={`https://cdn.simpleicons.org/${l.slug}/ffffff`}
                alt={`${l.name} logo`}
                loading="lazy"
                className="h-8 w-auto max-w-[60%] opacity-80 group-hover:opacity-100 transition-opacity"
              />
            ) : (
              <div className="h-8 flex items-center justify-center text-base font-bold text-foreground/90 text-center leading-tight">
                {l.name}
              </div>
            )}
            <span className="text-[10px] uppercase tracking-wider text-muted-foreground text-center leading-tight">
              {l.name}
            </span>
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
                <span key={p.name} className="inline-flex items-center gap-2 text-xs px-3 py-1.5 rounded-full border border-border bg-background/60 text-muted-foreground">
                  {p.slug && (
                    <img
                      src={`https://cdn.simpleicons.org/${p.slug}/ffffff`}
                      alt=""
                      loading="lazy"
                      className="h-3.5 w-auto opacity-80"
                    />
                  )}
                  {p.name}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>

    {/* Integrations */}
    <Section className="border-t border-border">
      <div className="text-center max-w-2xl mx-auto mb-16">
        <Eyebrow>Integrations</Eyebrow>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">100+ integrations, ready out of the box.</h2>
        <p className="mt-4 text-muted-foreground">Years of platform engineering across every category your store relies on — payments, shipping, ERP, marketplaces, marketing and more.</p>
      </div>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {[
          {
            category: "Payments & Fraud",
            items: [
              { name: "Stripe", slug: "stripe" },
              { name: "PayPal", slug: "paypal" },
              { name: "Elavon", slug: "elavon" },
              { name: "Adyen", slug: "adyen" },
              { name: "Worldpay", domain: "worldpay.com" },
              { name: "Klarna", slug: "klarna" },
              { name: "Apple Pay", slug: "applepay" },
              { name: "Google Pay", slug: "googlepay" },
              { name: "AIB Merchant Services", slug: "aib" },
              { name: "Realex", domain: "realexpayments.com" },
              { name: "Sage Pay", slug: "sage" },
              { name: "Authorize.Net", domain: "authorize.net" },
            ],
          },
          {
            category: "Shipping & Fulfilment",
            items: [
              { name: "DPD", slug: "dpd" },
              { name: "DHL", slug: "dhl" },
              { name: "UPS", slug: "ups" },
              { name: "FedEx", slug: "fedex" },
              { name: "An Post", domain: "anpost.com" },
              { name: "Royal Mail", domain: "royalmail.com" },
              { name: "Hermes", slug: "hermes" },
              { name: "ParcelForce", domain: "parcelforce.com" },
              { name: "Click & Collect" },
              { name: "Local Delivery Zones" },
              { name: "Per-Item Rates" },
              { name: "Free Shipping Rules" },
            ],
          },
          {
            category: "ERP & Accounting",
            items: [
              { name: "Sage", slug: "sage" },
              { name: "SAP Business One", slug: "sap" },
              { name: "MYOB", domain: "myob.com" },
              { name: "Oracle NetSuite", domain: "netsuite.com" },
              { name: "Xero", slug: "xero" },
              { name: "Microsoft Exchange", domain: "exchange.microsoft.com" },
              { name: "QuickBooks", slug: "quickbooks" },
              { name: "Microsoft Dynamics 365", domain: "dynamics.microsoft.com" },
              { name: "Odoo", slug: "odoo" },
              { name: "Exchequer", domain: "advanced.com" },
              { name: "Brightpearl", domain: "brightpearl.com" },
              { name: "Linnworks", domain: "linnworks.com" },
            ],
          },
          {
            category: "Marketplaces & Channels",
            items: [
              { name: "Amazon", domain: "amazon.com" },
              { name: "eBay", slug: "ebay" },
              { name: "Etsy", slug: "etsy" },
              { name: "Google Shopping", domain: "shopping.google.com" },
              { name: "Facebook & Instagram Shops", slug: "facebook" },
              { name: "TikTok Shop", slug: "tiktok" },
              { name: "Pinterest", slug: "pinterest" },
              { name: "Channel Advisor", domain: "channeladvisor.com" },
            ],
          },
          {
            category: "Marketing & CRM",
            items: [
              { name: "Klaviyo", domain: "klaviyo.com" },
              { name: "Mailchimp", slug: "mailchimp" },
              { name: "HubSpot", slug: "hubspot" },
              { name: "Salesforce", domain: "salesforce.com" },
              { name: "Dotdigital", domain: "dotdigital.com" },
              { name: "Google Analytics 4", slug: "googleanalytics" },
              { name: "Google Tag Manager", slug: "googletagmanager" },
              { name: "Meta Pixel", slug: "meta" },
              { name: "Hotjar", slug: "hotjar" },
            ],
          },
          {
            category: "Platforms & Hosting",
            items: [
              { name: "osCommerce", domain: "oscommerce.com" },
              { name: "Holbihost", domain: "holbi.co.uk" },
              { name: "LinkCommerce (Datalink)" },
            ],
          },
          {
            category: "Bespoke",
            items: [
              { name: "Inntact", domain: "inntact.com" },
              { name: "Floricode", domain: "floricode.com" },
            ],
          },
          {
            category: "Brands Powered by RunCommerce",
            items: [
              { name: "Samsung", slug: "samsung" },
              { name: "Exertis", domain: "exertis.com" },
              { name: "Telenco", domain: "telenco.com" },
              { name: "Double Alpha Academy", domain: "doublealpha.eu" },
              { name: "eir", domain: "eir.ie" },
              { name: "Flogas", domain: "flogas.ie" },
              { name: "SSE Airtricity eStore", domain: "sseairtricity.com" },
              { name: "Hypertec", domain: "hypertec.com" },
              { name: "Lomond", domain: "lomond.com" },
              { name: "TacStore", domain: "tacstore.ie" },
              { name: "Flexson", domain: "flexson.com" },
              { name: "Wristbands Malta", domain: "wristbands.com.mt" },
            ],
          },
          {
            category: "Search, PIM & Reviews",
            items: [
              { name: "Algolia", slug: "algolia" },
              { name: "Elasticsearch", slug: "elasticsearch" },
              { name: "Akeneo PIM", domain: "akeneo.com" },
              { name: "Trustpilot", slug: "trustpilot" },
              { name: "Yotpo", domain: "yotpo.com" },
              { name: "Feefo", domain: "feefo.com" },
              { name: "Reviews.io", domain: "reviews.io" },
              { name: "DeepL Translation", slug: "deepl" },
            ],
          },
        ].map((cat) => (
          <div key={cat.category} className="rounded-2xl border border-border bg-card p-6 hover:border-primary/50 transition-colors">
            <h3 className="text-lg font-bold mb-4">{cat.category}</h3>
            <div className="flex flex-wrap gap-2">
              {cat.items.map((i: { name: string; slug?: string; domain?: string }) => {
                const src = i.slug
                  ? `https://cdn.simpleicons.org/${i.slug}/ffffff`
                  : i.domain
                  ? `https://www.google.com/s2/favicons?domain=${i.domain}&sz=64`
                  : null;
                return (
                  <span key={i.name} className="inline-flex items-center gap-1.5 text-xs px-3 py-1 rounded-full border border-border bg-background/60 text-muted-foreground">
                    {src && (
                      <img
                        src={src}
                        alt=""
                        loading="lazy"
                        className="h-3.5 w-3.5 object-contain opacity-80"
                      />
                    )}
                    {i.name}
                  </span>
                );
              })}
            </div>
          </div>
        ))}
      </div>
      <p className="text-center text-sm text-muted-foreground mt-10">
        Don't see what you need? Our LinkCommerce orchestration layer can integrate any system with an API.
      </p>
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
