import { Code2, Gauge, Layers, Palette, Search, ShoppingBag } from "lucide-react";
import PageHero from "@/components/PageHero";
import { Section, Eyebrow } from "@/components/Section";
import CTAStrip from "@/components/CTAStrip";

const capabilities = [
  { icon: ShoppingBag, title: "Headless storefronts", desc: "React + Vite frontends decoupled from your commerce engine." },
  { icon: Gauge, title: "Performance first", desc: "Sub-second LCP with edge rendering and aggressive caching." },
  { icon: Layers, title: "Composable architecture", desc: "Best-of-breed CMS, search, payments and OMS, your choice." },
  { icon: Palette, title: "Design systems", desc: "Token-driven UI kits that scale across brands and locales." },
  { icon: Search, title: "SEO engineering", desc: "Structured data, server rendering and performance budgets baked in." },
  { icon: Code2, title: "Custom integrations", desc: "Bespoke connectors for ERP, PIM, CRM and analytics platforms." },
];

const stack = ["React", "Vite", "TypeScript", "Node.js", "Postgres", "GraphQL", "Stripe", "Algolia", "Contentful", "Vercel", "Cloudflare", "Tailwind"];

const Ecommerce = () => (
  <>
    <PageHero
      eyebrow="E-commerce Development"
      title={<>Storefronts engineered for <span className="text-gradient">conversion</span>.</>}
      description="From flagship D2C to global B2B portals — we build commerce experiences that load instantly, convert relentlessly and scale gracefully."
    />
    <Section>
      <Eyebrow>Capabilities</Eyebrow>
      <h2 className="text-3xl md:text-4xl font-bold mb-12 max-w-2xl">Everything you need to ship a world-class storefront.</h2>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {capabilities.map((c) => (
          <div key={c.title} className="rounded-2xl border border-border bg-card p-8 hover:-translate-y-1 hover:border-primary/50 transition-all">
            <c.icon className="h-9 w-9 text-primary mb-4" />
            <h3 className="font-bold text-lg mb-2">{c.title}</h3>
            <p className="text-sm text-muted-foreground">{c.desc}</p>
          </div>
        ))}
      </div>
    </Section>

    <Section className="border-t border-border">
      <Eyebrow>Tech stack</Eyebrow>
      <h2 className="text-3xl md:text-4xl font-bold mb-8">Pragmatic technology choices.</h2>
      <div className="flex flex-wrap gap-3">
        {stack.map((t) => (
          <span key={t} className="rounded-full border border-border bg-card px-4 py-2 text-sm text-muted-foreground hover:text-foreground hover:border-primary/50 transition-colors">{t}</span>
        ))}
      </div>
    </Section>

    <Section className="border-t border-border">
      <Eyebrow>Selected work</Eyebrow>
      <h2 className="text-3xl md:text-4xl font-bold mb-12">Recent storefront launches.</h2>
      <div className="grid gap-6 md:grid-cols-2">
        {[
          { name: "Northwave Wholesale", res: "+41% revenue, 3.2× faster checkout" },
          { name: "Forge & Co Industrial", res: "10k SKUs migrated zero-downtime" },
          { name: "Lumen Labs DTC", res: "92 Lighthouse, 1.1s LCP global" },
          { name: "Vectra Marketplace", res: "Multi-vendor, 24 currencies" },
        ].map((p) => (
          <div key={p.name} className="rounded-2xl border border-border bg-card p-8 hover:border-primary/50 transition-colors">
            <div className="aspect-video rounded-lg bg-gradient-to-br from-primary/20 to-secondary mb-6" />
            <h3 className="font-bold text-lg mb-1">{p.name}</h3>
            <p className="text-sm text-muted-foreground">{p.res}</p>
          </div>
        ))}
      </div>
    </Section>

    <CTAStrip />
  </>
);

export default Ecommerce;
