import { Bot, Database, FolderInput, Headphones, Image as ImageIcon, Languages, RefreshCw, ShoppingBag, Workflow } from "lucide-react";
import PageHero from "@/components/PageHero";
import { Section, Eyebrow } from "@/components/Section";
import CTAStrip from "@/components/CTAStrip";

const agents = [
  { icon: ShoppingBag, title: "Merch Agent", desc: "Continuously merchandises your catalogue — pricing, positioning, bundles and promotions tuned in real time." },
  { icon: ImageIcon, title: "Image Agent", desc: "Upscales, retouches, removes backgrounds and standardises product imagery at scale." },
  { icon: Database, title: "Content Agent", desc: "Cleanses product data, writes descriptions and fills attribute gaps with on-brand copy." },
  { icon: FolderInput, title: "Category Agent", desc: "Auto-classifies SKUs into the right categories and maintains a clean taxonomy as the catalogue grows." },
  { icon: Languages, title: "Translation Agent", desc: "Localises content into any market with eCommerce-aware, on-brand translations." },
  { icon: Headphones, title: "CS Agent", desc: "Pre-empts customer queries, processes refunds and updates orders before issues escalate." },
  { icon: RefreshCw, title: "Operations Agent", desc: "Stock, pricing, promotions and content updates — running 24/7 across your stack." },
  { icon: Workflow, title: "Orchestration Agent", desc: "Coordinates sub-agents, integrations and human approvals through a single control plane." },
];

const Automation = () => (
  <>
    <PageHero
      eyebrow="AI Automation Layer"
      title={<>Agentic operations that <span className="text-gradient">never sleep</span>.</>}
      description="Our automation layer runs your operations no matter the stack. Agents automate more than 90% of the day-to-day tasks of running an online store — and pre-empt issues before they reach your customer."
    />

    <Section>
      <div className="grid gap-12 lg:grid-cols-2 items-start">
        <div>
          <Eyebrow>How it works</Eyebrow>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">One control plane. Many specialised agents.</h2>
          <p className="text-muted-foreground mb-4">
            RunCommerce agents sit on top of your existing platform. They observe, decide and act — refunding, updating customers, fixing data and merchandising in real time.
          </p>
          <p className="text-muted-foreground">
            Pair them with our managed services team for full coverage on the work that genuinely needs a human.
          </p>
        </div>
        <div className="rounded-2xl border border-border bg-card p-8">
          <div className="flex items-center gap-3 mb-4"><Bot className="h-6 w-6 text-primary"/><span className="font-semibold">AI Agents · Live</span></div>
          {[
            { t: "Merchandising Agent", v: "12,4k items processed today" },
            { t: "Image Enhancement", v: "3,210 images upscaled" },
            { t: "Data Cleansing", v: "98.4% catalog accuracy" },
            { t: "Customer Care", v: "412 queries pre-empted" },
          ].map((r) => (
            <div key={r.t} className="flex justify-between border-t border-border py-3 text-sm">
              <span className="text-foreground">{r.t}</span>
              <span className="text-muted-foreground">{r.v}</span>
            </div>
          ))}
        </div>
      </div>
    </Section>

    <Section className="border-t border-border">
      <Eyebrow>Agent library</Eyebrow>
      <h2 className="text-3xl md:text-4xl font-bold mb-12 max-w-2xl">A growing roster of specialised agents.</h2>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {agents.map((a) => (
          <div key={a.title} className="rounded-2xl border border-border bg-card p-6 hover:-translate-y-1 hover:border-primary/50 transition-all">
            <a.icon className="h-8 w-8 text-primary mb-4" />
            <h3 className="font-bold mb-2">{a.title}</h3>
            <p className="text-sm text-muted-foreground">{a.desc}</p>
          </div>
        ))}
      </div>
    </Section>

    <CTAStrip />
  </>
);

export default Automation;
