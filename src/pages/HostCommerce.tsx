import { Helmet } from "react-helmet-async";
import PageHero from "@/components/PageHero";
import Section from "@/components/Section";
import CTAStrip from "@/components/CTAStrip";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Server, Shield, Zap, Globe } from "lucide-react";

const features = [
  { icon: Server, title: "Managed eCommerce hosting", desc: "Optimised infrastructure for Magento, Adobe Commerce and headless storefronts." },
  { icon: Shield, title: "Security & compliance", desc: "PCI-aligned environments with proactive monitoring and patching." },
  { icon: Zap, title: "Performance tuned", desc: "Edge caching, image optimisation and tuned stacks for fast TTFB." },
  { icon: Globe, title: "EU & UK regions", desc: "Data residency options across Ireland, UK and mainland Europe." },
];

const HostCommerce = () => {
  return (
    <>
      <Helmet>
        <title>HostCommerce — Managed eCommerce Hosting | RunCommerce</title>
        <meta
          name="description"
          content="HostCommerce delivers managed, secure and high-performance hosting for eCommerce platforms across the UK and EU."
        />
        <link rel="canonical" href="/hostcommerce" />
      </Helmet>

      <PageHero
        eyebrow="HostCommerce"
        title="Managed hosting built for eCommerce"
        subtitle="Secure, performant and fully managed infrastructure for Magento, Adobe Commerce and headless storefronts."
      />

      <Section>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {features.map((f) => (
            <Card key={f.title}>
              <CardHeader>
                <f.icon className="h-6 w-6 text-primary" />
                <CardTitle className="mt-3 text-lg">{f.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground">{f.desc}</CardContent>
            </Card>
          ))}
        </div>
      </Section>

      <Section>
        <div className="text-center max-w-2xl mx-auto space-y-4">
          <h2 className="text-3xl font-semibold">Visit HostCommerce</h2>
          <p className="text-muted-foreground">
            Explore plans, regions and managed services on the dedicated HostCommerce site.
          </p>
          <Button asChild size="lg">
            <a href="https://hostcommerce.ie" target="_blank" rel="noopener noreferrer">
              Go to hostcommerce.ie
            </a>
          </Button>
        </div>
      </Section>

      <CTAStrip />
    </>
  );
};

export default HostCommerce;
