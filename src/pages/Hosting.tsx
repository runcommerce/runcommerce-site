import { Check, ShieldCheck, Zap, Globe2 } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import PageHero from "@/components/PageHero";
import { Section, Eyebrow } from "@/components/Section";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import CTAStrip from "@/components/CTAStrip";

const plans = [
  { name: "Starter", price: "€199", desc: "For growing stores under 10k orders/month.", features: ["2 vCPU · 4GB RAM", "100GB SSD", "99.9% uptime", "Daily backups", "Email support"] },
  { name: "Professional", price: "€599", desc: "For mid-market stores and B2B portals.", features: ["8 vCPU · 16GB RAM", "500GB SSD", "99.95% uptime", "Hourly backups", "24/5 support", "WAF + DDoS"], featured: true },
  { name: "Enterprise", price: "Custom", desc: "Dedicated infrastructure with full SLA.", features: ["Dedicated cluster", "Multi-region", "99.99% uptime SLA", "PITR backups", "24/7 phone support", "Named SRE"] },
];

const faqs = [
  { q: "Where is your infrastructure located?", a: "We operate across multiple EU and US regions, with edge nodes worldwide. You choose the primary region per environment." },
  { q: "Do you handle migrations?", a: "Yes — every plan includes a guided migration with zero-downtime cutover, executed by our SRE team." },
  { q: "Is monitoring included?", a: "All plans include uptime, performance and error monitoring with alerting via email, Slack or PagerDuty." },
  { q: "Can I bring my own cloud?", a: "Enterprise customers can deploy into their own AWS, GCP or Azure account under our managed service." },
];

const Hosting = () => (
  <>
    <PageHero
      eyebrow="Managed Hosting"
      title={<>Infrastructure that <span className="text-gradient">never sleeps</span>.</>}
      description="Hardened, observable and globally distributed hosting tuned specifically for high-traffic commerce workloads."
    />

    <Section>
      <div className="grid gap-6 md:grid-cols-3 mb-12">
        {[{i:ShieldCheck,t:"SOC 2 ready",d:"Encryption, audit logs and access controls by default."},{i:Zap,t:"Edge accelerated",d:"Global CDN with smart caching for sub-second loads."},{i:Globe2,t:"Multi-region",d:"Active-active deployments for true high availability."}].map(b=>(
          <div key={b.t} className="rounded-2xl border border-border bg-card p-6 flex gap-4">
            <b.i className="h-8 w-8 text-primary shrink-0" />
            <div>
              <h3 className="font-bold mb-1">{b.t}</h3>
              <p className="text-sm text-muted-foreground">{b.d}</p>
            </div>
          </div>
        ))}
      </div>

      <Eyebrow>Plans</Eyebrow>
      <h2 className="text-3xl md:text-4xl font-bold mb-12">Transparent pricing, room to grow.</h2>
      <div className="grid gap-6 md:grid-cols-3">
        {plans.map((p) => (
          <div key={p.name} className={`rounded-2xl border p-8 ${p.featured ? "border-primary bg-card shadow-glow" : "border-border bg-card"}`}>
            {p.featured && <div className="text-xs font-semibold text-primary uppercase tracking-wider mb-3">Most popular</div>}
            <h3 className="text-2xl font-bold mb-1">{p.name}</h3>
            <div className="text-4xl font-bold mb-2">{p.price}<span className="text-base font-normal text-muted-foreground">/mo</span></div>
            <p className="text-sm text-muted-foreground mb-6">{p.desc}</p>
            <ul className="space-y-3 mb-8">
              {p.features.map((f) => (
                <li key={f} className="flex items-start gap-2 text-sm"><Check className="h-4 w-4 text-primary mt-0.5 shrink-0" />{f}</li>
              ))}
            </ul>
            <Button asChild variant={p.featured ? "default" : "outline"} className="w-full">
              <Link to="/contact">Get started</Link>
            </Button>
          </div>
        ))}
      </div>
    </Section>

    <Section className="border-t border-border">
      <div className="max-w-3xl mx-auto">
        <Eyebrow>FAQ</Eyebrow>
        <h2 className="text-3xl md:text-4xl font-bold mb-8">Common questions.</h2>
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((f, i) => (
            <AccordionItem key={i} value={`item-${i}`}>
              <AccordionTrigger className="text-left">{f.q}</AccordionTrigger>
              <AccordionContent className="text-muted-foreground">{f.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </Section>

    <CTAStrip />
  </>
);

export default Hosting;
