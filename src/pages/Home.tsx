import { Link } from "react-router-dom";
import { ArrowRight, Boxes, Cloud, Database, ShoppingCart, Sparkles, Workflow, ShieldCheck, Rocket } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Section, Eyebrow } from "@/components/Section";
import CTAStrip from "@/components/CTAStrip";
import hero from "@/assets/hero.jpg";

const services = [
  { to: "/ecommerce", icon: ShoppingCart, title: "E-commerce Development", desc: "Custom storefronts engineered for performance and conversion." },
  { to: "/b2b", icon: Boxes, title: "B2B Enterprise", desc: "Multi-store, tiered pricing, ERP & PIM integrations at scale." },
  { to: "/hosting", icon: Cloud, title: "Managed Hosting", desc: "Hardened, observable infrastructure with 99.99% uptime SLA." },
  { to: "/datalink", icon: Database, title: "Datalink", desc: "Real-time data sync between your shop, ERP and warehouse." },
];

const steps = [
  { icon: Sparkles, title: "Discover", desc: "We map your goals, audit your current stack and define success metrics." },
  { icon: Workflow, title: "Design", desc: "Architecture, UX and integrations planned end-to-end before a line of code." },
  { icon: Rocket, title: "Deliver", desc: "Iterative releases with measurable impact at every milestone." },
  { icon: ShieldCheck, title: "Operate", desc: "Managed hosting, monitoring and continuous improvement." },
];

const cases = [
  { brand: "Northwave", tag: "B2B Wholesale", color: "from-cyan-500/20 to-blue-500/10" },
  { brand: "Forge & Co", tag: "Industrial Supply", color: "from-emerald-500/20 to-cyan-500/10" },
  { brand: "Lumen Labs", tag: "Electronics", color: "from-purple-500/20 to-pink-500/10" },
];

const Home = () => (
  <>
    {/* Hero */}
    <section className="relative min-h-screen flex items-center pt-24 overflow-hidden">
      <img src={hero} alt="Abstract enterprise network visualization" className="absolute inset-0 w-full h-full object-cover opacity-50" />
      <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/70 to-background" />
      <div className="container relative grid gap-12 lg:grid-cols-[1.2fr_0.8fr] items-center py-20">
        <div className="animate-fade-up">
          <Eyebrow>Nordstack — B2B Commerce Engineering</Eyebrow>
          <h1 className="text-5xl md:text-7xl font-bold leading-[1.02] mb-6">
            Scalable <span className="text-gradient">B2B Ecommerce</span> Platforms
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-xl mb-8">
            We design, build and operate enterprise commerce platforms for brands that refuse to compromise on performance, control or scale.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button asChild size="lg">
              <Link to="/contact">Start a project <ArrowRight className="ml-1" /></Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link to="/b2b">Explore B2B</Link>
            </Button>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-6 animate-fade-up">
          <div className="rounded-2xl border border-border bg-card/60 backdrop-blur p-8">
            <div className="text-5xl md:text-6xl font-bold text-gradient">25+</div>
            <div className="mt-2 text-sm text-muted-foreground">Years building commerce</div>
          </div>
          <div className="rounded-2xl border border-border bg-card/60 backdrop-blur p-8">
            <div className="text-5xl md:text-6xl font-bold text-gradient">5,000+</div>
            <div className="mt-2 text-sm text-muted-foreground">Projects shipped worldwide</div>
          </div>
          <div className="col-span-2 rounded-2xl border border-border bg-card/60 backdrop-blur p-8">
            <div className="text-sm text-muted-foreground mb-2">Trusted by teams at</div>
            <div className="flex flex-wrap gap-x-6 gap-y-2 text-foreground/70 font-semibold">
              <span>NORTHWAVE</span><span>FORGE&CO</span><span>LUMEN</span><span>VECTRA</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* Platform highlight */}
    <Section className="border-t border-border">
      <div className="grid gap-16 lg:grid-cols-2 items-center">
        <div>
          <Eyebrow>The Nordstack Platform</Eyebrow>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">A modern foundation for serious B2B commerce.</h2>
          <p className="text-muted-foreground text-lg mb-8">
            Headless architecture, multi-store support, role-based catalogs and bulk ordering — out of the box. Extend with your own services or plug into ours.
          </p>
          <div className="grid grid-cols-3 gap-6">
            {[{n:"99.99%",l:"Uptime"},{n:"<150ms",l:"TTFB p95"},{n:"30+",l:"Integrations"}].map(s=>(
              <div key={s.l}>
                <div className="text-2xl md:text-3xl font-bold text-gradient">{s.n}</div>
                <div className="text-xs text-muted-foreground mt-1">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="relative">
          <div className="absolute -inset-8 bg-primary/10 blur-3xl rounded-full" />
          <div className="relative mx-auto w-72 h-[560px] rounded-[3rem] border-8 border-secondary bg-card shadow-glow overflow-hidden">
            <div className="h-full p-6 flex flex-col gap-4 bg-gradient-to-b from-secondary to-background">
              <div className="h-2 w-16 mx-auto bg-border rounded-full" />
              <div className="rounded-xl bg-accent-gradient p-4 text-primary-foreground">
                <div className="text-xs opacity-80">Order #4821</div>
                <div className="text-2xl font-bold">€ 84,210</div>
              </div>
              {[1,2,3,4].map(i=>(
                <div key={i} className="rounded-xl border border-border bg-card/80 p-3 flex items-center gap-3">
                  <div className="h-10 w-10 rounded-md bg-secondary" />
                  <div className="flex-1">
                    <div className="h-2 w-24 bg-secondary rounded mb-2" />
                    <div className="h-2 w-16 bg-secondary/60 rounded" />
                  </div>
                  <div className="text-xs text-primary font-semibold">×{i*4}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Section>

    {/* Case studies */}
    <Section className="border-t border-border">
      <div className="flex flex-wrap items-end justify-between gap-4 mb-12">
        <div>
          <Eyebrow>Featured Work</Eyebrow>
          <h2 className="text-4xl md:text-5xl font-bold">Built for brands that scale.</h2>
        </div>
        <Button asChild variant="outline"><Link to="/contact">See more <ArrowRight className="ml-1"/></Link></Button>
      </div>
      <div className="grid gap-6 md:grid-cols-3">
        {cases.map((c) => (
          <div key={c.brand} className="group rounded-2xl border border-border bg-card overflow-hidden hover:-translate-y-1 transition-transform duration-300 shadow-card-elegant">
            <div className={`aspect-[4/3] bg-gradient-to-br ${c.color} relative`}>
              <div className="absolute inset-0 flex items-center justify-center text-3xl font-bold text-foreground/30">{c.brand}</div>
            </div>
            <div className="p-6">
              <div className="text-xs text-primary font-semibold uppercase tracking-wider mb-2">{c.tag}</div>
              <h3 className="text-xl font-bold mb-2">{c.brand} Commerce</h3>
              <p className="text-sm text-muted-foreground">Headless rebuild delivering 3.2× faster checkout and 41% revenue lift.</p>
            </div>
          </div>
        ))}
      </div>
    </Section>

    {/* Services */}
    <Section className="border-t border-border">
      <div className="text-center max-w-2xl mx-auto mb-16">
        <Eyebrow>What we do</Eyebrow>
        <h2 className="text-4xl md:text-5xl font-bold">End-to-end commerce expertise.</h2>
      </div>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {services.map((s) => (
          <Link key={s.to} to={s.to} className="group rounded-2xl border border-border bg-card p-8 hover:border-primary/50 hover:-translate-y-1 transition-all duration-300">
            <s.icon className="h-10 w-10 text-primary mb-4" />
            <h3 className="text-lg font-bold mb-2">{s.title}</h3>
            <p className="text-sm text-muted-foreground mb-4">{s.desc}</p>
            <span className="text-sm text-primary inline-flex items-center gap-1 group-hover:gap-2 transition-all">Learn more <ArrowRight className="h-4 w-4" /></span>
          </Link>
        ))}
      </div>
    </Section>

    {/* Process */}
    <Section className="border-t border-border">
      <div className="grid gap-12 lg:grid-cols-[1fr_1.5fr]">
        <div>
          <Eyebrow>How we work</Eyebrow>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">A proven path from idea to operation.</h2>
          <p className="text-muted-foreground">Every engagement follows the same disciplined process — refined over hundreds of platform launches.</p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2">
          {steps.map((s, i) => (
            <div key={s.title} className="rounded-2xl border border-border bg-card p-6">
              <div className="flex items-center gap-3 mb-3">
                <span className="h-8 w-8 rounded-md bg-primary/10 text-primary flex items-center justify-center text-sm font-bold">{i+1}</span>
                <s.icon className="h-5 w-5 text-primary" />
              </div>
              <h3 className="text-lg font-bold mb-1">{s.title}</h3>
              <p className="text-sm text-muted-foreground">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </Section>

    {/* Testimonial */}
    <Section className="border-t border-border">
      <figure className="max-w-4xl mx-auto text-center">
        <blockquote className="text-2xl md:text-4xl font-semibold leading-tight">
          "Nordstack rebuilt our B2B platform in six months. Order volume doubled, and our team finally has the tooling to keep up with growth."
        </blockquote>
        <figcaption className="mt-8 text-sm text-muted-foreground">
          <span className="font-semibold text-foreground">Anna Lindqvist</span> · CTO, Northwave Industries
        </figcaption>
      </figure>
    </Section>

    <CTAStrip />
  </>
);

export default Home;
