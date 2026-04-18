import { Check, Minus } from "lucide-react";
import PageHero from "@/components/PageHero";
import { Section, Eyebrow } from "@/components/Section";
import CTAStrip from "@/components/CTAStrip";

const features = [
  "Multi-store & multi-brand from a single backend",
  "Role-based catalogs and customer-specific pricing",
  "Quote requests, approval workflows and PO checkout",
  "Tiered pricing, contract pricing and bulk discounts",
  "ERP, PIM and CRM connectors out of the box",
  "Headless API for mobile apps and partner portals",
  "Advanced search with synonyms and faceting",
  "GDPR-ready audit logs and SSO",
];

const rows = [
  { f: "Multi-store", a: true, b: true, c: true },
  { f: "Customer pricing tiers", a: false, b: true, c: true },
  { f: "Quote & approval workflows", a: false, b: true, c: true },
  { f: "ERP integration", a: false, b: false, c: true },
  { f: "Dedicated account manager", a: false, b: false, c: true },
  { f: "SLA 99.99%", a: false, b: false, c: true },
];

const B2B = () => (
  <>
    <PageHero
      eyebrow="B2B Enterprise"
      title={<>Commerce built for <span className="text-gradient">complex sales</span>.</>}
      description="Catalogs, contracts, integrations and workflows that match the way your customers actually buy — at the scale your business demands."
    />

    <Section>
      <div className="grid gap-12 lg:grid-cols-2">
        <div>
          <Eyebrow>Features</Eyebrow>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Every B2B requirement, accounted for.</h2>
          <p className="text-muted-foreground">From multi-store architecture to ERP-grade integrations, our enterprise platform handles real-world commerce complexity without forcing compromise.</p>
        </div>
        <ul className="grid gap-3">
          {features.map((f) => (
            <li key={f} className="flex items-start gap-3 rounded-xl border border-border bg-card p-4">
              <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
              <span className="text-sm">{f}</span>
            </li>
          ))}
        </ul>
      </div>
    </Section>

    <Section className="border-t border-border">
      <Eyebrow>Editions</Eyebrow>
      <h2 className="text-3xl md:text-4xl font-bold mb-12">Choose the right tier for your team.</h2>
      <div className="overflow-x-auto rounded-2xl border border-border">
        <table className="w-full text-sm">
          <thead className="bg-secondary/50">
            <tr>
              <th className="text-left p-4 font-semibold">Capability</th>
              <th className="p-4 font-semibold">Standard</th>
              <th className="p-4 font-semibold text-primary">Professional</th>
              <th className="p-4 font-semibold">Enterprise</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((r) => (
              <tr key={r.f} className="border-t border-border">
                <td className="p-4">{r.f}</td>
                <td className="p-4 text-center">{r.a ? <Check className="h-4 w-4 text-primary mx-auto"/> : <Minus className="h-4 w-4 text-muted-foreground mx-auto"/>}</td>
                <td className="p-4 text-center">{r.b ? <Check className="h-4 w-4 text-primary mx-auto"/> : <Minus className="h-4 w-4 text-muted-foreground mx-auto"/>}</td>
                <td className="p-4 text-center">{r.c ? <Check className="h-4 w-4 text-primary mx-auto"/> : <Minus className="h-4 w-4 text-muted-foreground mx-auto"/>}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Section>

    <CTAStrip />
  </>
);

export default B2B;
