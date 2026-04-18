import { Link } from "react-router-dom";
import { ArrowRight, Bot, Boxes, Globe, Layers, Package, Rocket, ShieldCheck, ShoppingBag, Smartphone, Sparkles, Store, Timer, Truck, Workflow, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Section, Eyebrow } from "@/components/Section";
import CTAStrip from "@/components/CTAStrip";
import hero from "@/assets/hero.jpg";

const pillars = [
  { to: "/platform", icon: Boxes, title: "RunCommerce Platform", desc: "All the tools to run an online store — Click & Collect, Pre-order, POS, multi-currency, B2B and more. Launch a new site in 7 minutes." },
  { to: "/automation", icon: Bot, title: "AI Automation Layer", desc: "Agentic operations that automate 90%+ of day-to-day eCommerce tasks across any stack. Pre-empt issues before customers ask." },
  { to: "/services", icon: Sparkles, title: "AI Managed Services", desc: "World-class team paired with our platform to deliver complex transformation work — flexibly and at lower cost." },
];

const why = [
  { icon: Zap, title: "Enterprise-grade AI", desc: "AI capability previously reserved for the A-league, accessible to every merchant." },
  { icon: Workflow, title: "Deep eCommerce ops", desc: "Decades of operator experience baked into every workflow and agent." },
  { icon: ShieldCheck, title: "Always-on managed service", desc: "We don't replace your team or agency — we eliminate the supplier-induced demand killing margin." },
  { icon: Rocket, title: "Rapid deployment", desc: "Go live in minutes. Migrate from any platform with our LinkCommerce orchestration layer." },
];

const Home = () => (
  <>
    {/* Hero */}
    <section className="relative min-h-screen flex items-center pt-24 overflow-hidden">
      <img src={hero} alt="RunCommerce AI operating system" className="absolute inset-0 w-full h-full object-cover opacity-50" />
      <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/70 to-background" />
      <div className="container relative grid gap-12 lg:grid-cols-[1.2fr_0.8fr] items-center py-20">
        <div className="animate-fade-up">
          <Eyebrow>RunCommerce — The AI Operating System for eCommerce</Eyebrow>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight mb-6 break-words hyphens-auto">
            Making eCommerce <span className="text-gradient">profitable</span> with AI.
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-xl mb-8">
            ROI in eCommerce is brutal. Platforms are costly, manual effort eats up to 45% of cost, and integrations drag on for months. RunCommerce fixes all three with an AI-native platform, automation layer and managed services.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button asChild size="lg">
              <Link to="/contact">Talk to us <ArrowRight className="ml-1" /></Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link to="/platform">See the platform</Link>
            </Button>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-3 sm:gap-6 animate-fade-up">
          <div className="rounded-2xl border border-border bg-card/60 backdrop-blur p-5 sm:p-8">
            <div className="text-3xl sm:text-5xl md:text-6xl font-bold text-gradient leading-none">€10B</div>
            <div className="mt-2 text-xs sm:text-sm text-muted-foreground">Online sales delivered by our team</div>
          </div>
          <div className="rounded-2xl border border-border bg-card/60 backdrop-blur p-5 sm:p-8">
            <div className="text-3xl sm:text-5xl md:text-6xl font-bold text-gradient leading-none">90%</div>
            <div className="mt-2 text-xs sm:text-sm text-muted-foreground">Of manual eCommerce tasks automatable</div>
          </div>
          <div className="rounded-2xl border border-border bg-card/60 backdrop-blur p-5 sm:p-8">
            <div className="text-3xl sm:text-5xl md:text-6xl font-bold text-gradient leading-none">7 min</div>
            <div className="mt-2 text-xs sm:text-sm text-muted-foreground">To launch a new store, fully integrated</div>
          </div>
          <div className="rounded-2xl border border-border bg-card/60 backdrop-blur p-5 sm:p-8">
            <div className="text-3xl sm:text-5xl md:text-6xl font-bold text-gradient leading-none">25 yrs</div>
            <div className="mt-2 text-xs sm:text-sm text-muted-foreground">Combined eCommerce leadership</div>
          </div>
        </div>
      </div>
    </section>

    {/* The problem */}
    <Section className="border-t border-border">
      <div className="grid gap-12 lg:grid-cols-2 items-start">
        <div>
          <Eyebrow>The Problem</Eyebrow>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-6">The eCommerce operating model is broken.</h2>
          <p className="text-muted-foreground text-lg">
            Existing growth models are killing margin. Transformation projects are slow and expensive. Manual effort dominates daily operations. Every change requires another supplier, another quote, another delay.
          </p>
        </div>
        <ul className="space-y-4">
          {[
            "ROI in eCommerce is extremely hard to achieve",
            "Platforms and transformation projects are extremely costly",
            "Manual effort and processes are up to 45% of total cost",
            "Integration into existing systems is costly and time-consuming",
          ].map((p) => (
            <li key={p} className="flex gap-4 rounded-2xl border border-border bg-card p-6">
              <span className="h-2 w-2 mt-2 rounded-full bg-primary shrink-0" />
              <span>{p}</span>
            </li>
          ))}
        </ul>
      </div>
    </Section>

    {/* We do 3 things */}
    <Section className="border-t border-border">
      <div className="text-center max-w-2xl mx-auto mb-16">
        <Eyebrow>What we do</Eyebrow>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">We do three things.</h2>
        <p className="mt-4 text-muted-foreground">A platform, an automation layer, and a managed services team — designed to work together as one AI operating system.</p>
      </div>
      <div className="grid gap-6 md:grid-cols-3">
        {pillars.map((p) => (
          <Link key={p.to} to={p.to} className="group rounded-2xl border border-border bg-card p-8 hover:border-primary/50 hover:-translate-y-1 transition-all duration-300">
            <p.icon className="h-10 w-10 text-primary mb-4" />
            <h3 className="text-xl font-bold mb-2">{p.title}</h3>
            <p className="text-sm text-muted-foreground mb-4">{p.desc}</p>
            <span className="text-sm text-primary inline-flex items-center gap-1 group-hover:gap-2 transition-all">Learn more <ArrowRight className="h-4 w-4" /></span>
          </Link>
        ))}
      </div>
    </Section>

    {/* Why unique */}
    <Section className="border-t border-border">
      <div className="grid gap-12 lg:grid-cols-[1fr_1.5fr]">
        <div>
          <Eyebrow>Why we're different</Eyebrow>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-4">We don't replace your agency or your team.</h2>
          <p className="text-muted-foreground">We disrupt the supplier-induced demand problem that's destroying eCommerce profitability — by automating the tasks and effort that consume your operations.</p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2">
          {why.map((w) => (
            <div key={w.title} className="rounded-2xl border border-border bg-card p-6">
              <w.icon className="h-8 w-8 text-primary mb-3" />
              <h3 className="text-lg font-bold mb-1">{w.title}</h3>
              <p className="text-sm text-muted-foreground">{w.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </Section>

    {/* Traction */}
    <Section className="border-t border-border">
      <div className="text-center max-w-2xl mx-auto mb-12">
        <Eyebrow>Traction</Eyebrow>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">What we've achieved in 3 months.</h2>
      </div>
      <div className="grid gap-6 md:grid-cols-3">
        {[
          { n: "€400k+", l: "Committed revenue for 2026" },
          { n: "Live", l: "Lighthouse clients onboard" },
          { n: "Built", l: "Platform, automation & LinkCommerce" },
        ].map((s) => (
          <div key={s.l} className="rounded-2xl border border-border bg-card p-8 text-center">
            <div className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-gradient mb-2">{s.n}</div>
            <div className="text-sm text-muted-foreground">{s.l}</div>
          </div>
        ))}
      </div>
    </Section>

    {/* Founder quote */}
    <Section className="border-t border-border">
      <figure className="max-w-4xl mx-auto text-center">
        <blockquote className="text-xl sm:text-2xl md:text-4xl font-semibold leading-tight">
          "There are thousands of operational problems in eCommerce, and AI is finally capable of solving them. We have no moat to protect — which means we can compete with the A-league."
        </blockquote>
        <figcaption className="mt-8 text-sm text-muted-foreground">
          <span className="font-semibold text-foreground">Eamonn Grant</span> · Founder & CEO, RunCommerce
        </figcaption>
      </figure>
    </Section>

    {/* Sectors */}
    <Section className="border-t border-border">
      <div className="text-center max-w-2xl mx-auto mb-16">
        <Eyebrow>Sectors</Eyebrow>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">Where we specialise.</h2>
        <p className="mt-4 text-muted-foreground">Decades of operator experience across the most demanding corners of eCommerce.</p>
      </div>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {[
          { icon: ShoppingBag, title: "Direct to Consumer", desc: "Brand-led DTC stores built to convert, retain and scale." },
          { icon: Smartphone, title: "Consumer Electronics", desc: "Complex catalogues, configurators, warranties and trade-in flows." },
          { icon: Truck, title: "Distributor eCommerce", desc: "Multi-tier pricing, account hierarchies and rep-assisted ordering." },
          { icon: Package, title: "Wholesale eCommerce", desc: "B2B portals with quotes, contracts, credit terms and bulk ordering." },
          { icon: Timer, title: "Flash Sales, Drops & Auctions", desc: "High-traffic launches, queueing, timed releases and bidding mechanics." },
          { icon: Globe, title: "Global / International Expansion", desc: "Multi-currency, multi-language, tax and localisation across regions." },
          { icon: Store, title: "POS / Retail & Pop Ups", desc: "Unified commerce across stores, pop-ups and online with one stack." },
        ].map((s) => (
          <div key={s.title} className="rounded-2xl border border-border bg-card p-6 hover:border-primary/50 hover:-translate-y-1 transition-all duration-300">
            <s.icon className="h-8 w-8 text-primary mb-3" />
            <h3 className="text-lg font-bold mb-1">{s.title}</h3>
            <p className="text-sm text-muted-foreground">{s.desc}</p>
          </div>
        ))}
      </div>
    </Section>

    <CTAStrip />
  </>
);

export default Home;
