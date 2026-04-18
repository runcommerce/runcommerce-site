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
            items: ["Stripe", "PayPal", "Elavon", "Adyen", "Worldpay", "Klarna", "Apple Pay", "Google Pay", "AIB Merchant Services", "Realex", "Sage Pay", "Authorize.Net"],
          },
          {
            category: "Shipping & Fulfilment",
            items: ["DPD", "DHL", "UPS", "FedEx", "An Post", "Royal Mail", "Hermes", "ParcelForce", "Click & Collect", "Local Delivery Zones", "Per-Item Rates", "Free Shipping Rules"],
          },
          {
            category: "ERP & Accounting",
            items: ["SAP", "Microsoft Dynamics 365", "NetSuite", "Sage", "Xero", "QuickBooks", "Odoo", "Exchequer", "Brightpearl", "Linnworks"],
          },
          {
            category: "Marketplaces & Channels",
            items: ["Amazon", "eBay", "Etsy", "Google Shopping", "Facebook & Instagram Shops", "TikTok Shop", "Pinterest", "Channel Advisor"],
          },
          {
            category: "Marketing & CRM",
            items: ["Klaviyo", "Mailchimp", "HubSpot", "Salesforce", "Dotdigital", "Google Analytics 4", "Google Tag Manager", "Meta Pixel", "Hotjar"],
          },
          {
            category: "Search, PIM & Reviews",
            items: ["Algolia", "Elasticsearch", "Akeneo PIM", "Trustpilot", "Yotpo", "Feefo", "Reviews.io", "DeepL Translation"],
          },
        ].map((cat) => (
          <div key={cat.category} className="rounded-2xl border border-border bg-card p-6 hover:border-primary/50 transition-colors">
            <h3 className="text-lg font-bold mb-4">{cat.category}</h3>
            <div className="flex flex-wrap gap-2">
              {cat.items.map((i) => (
                <span key={i} className="text-xs px-3 py-1 rounded-full border border-border bg-background/60 text-muted-foreground">
                  {i}
                </span>
              ))}
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
