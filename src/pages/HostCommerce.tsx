import { Server, Shield, Zap, Globe } from "lucide-react";
import { Link } from "react-router-dom";
import PageHero from "@/components/PageHero";
import { Section, Eyebrow } from "@/components/Section";
import CTAStrip from "@/components/CTAStrip";
import { Button } from "@/components/ui/button";

const features = [
  { icon: Server, title: "Managed eCommerce hosting", desc: "Optimised infrastructure for Magento, Adobe Commerce and headless storefronts." },
  { icon: Shield, title: "Security & compliance", desc: "PCI-aligned environments with proactive monitoring and patching." },
  { icon: Zap, title: "Performance tuned", desc: "Edge caching, image optimisation and tuned stacks for fast TTFB." },
  { icon: Globe, title: "EU & UK regions", desc: "Data residency options across Ireland, UK and mainland Europe." },
];

const HostCommerce = () => (
  <>
    <PageHero
      eyebrow="HostCommerce"
      title={<>Managed hosting built for <span className="text-gradient">eCommerce</span>.</>}
      description="Secure, performant and fully managed infrastructure for Magento, Adobe Commerce and headless storefronts — across the UK and EU."
    />

    <Section>
      <Eyebrow>Capabilities</Eyebrow>
      <h2 className="text-3xl md:text-4xl font-bold mb-12 max-w-2xl">Hosting tuned for online retail.</h2>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {features.map((f) => (
          <div key={f.title} className="rounded-2xl border border-border bg-card p-8 hover:-translate-y-1 hover:border-primary/50 transition-all">
            <f.icon className="h-9 w-9 text-primary mb-4" />
            <h3 className="font-bold text-lg mb-2">{f.title}</h3>
            <p className="text-sm text-muted-foreground">{f.desc}</p>
          </div>
        ))}
      </div>
    </Section>

    <Section>
      <div className="text-center max-w-2xl mx-auto space-y-4">
        <Eyebrow>Visit HostCommerce</Eyebrow>
        <h2 className="text-3xl md:text-4xl font-bold">Explore plans and regions</h2>
        <p className="text-muted-foreground">See full hosting options on the dedicated HostCommerce site.</p>
        <div className="flex justify-center gap-3 pt-2">
          <Button asChild size="lg">
            <a href="https://hostcommerce.ie" target="_blank" rel="noopener noreferrer">Go to hostcommerce.ie</a>
          </Button>
          <Button asChild size="lg" variant="outline">
            <Link to="/contact">Talk to us</Link>
          </Button>
        </div>
      </div>
    </Section>

    <CTAStrip />
  </>
);

export default HostCommerce;
