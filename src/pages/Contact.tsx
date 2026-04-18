import { FormEvent, useState } from "react";
import { Mail, MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "@/hooks/use-toast";
import PageHero from "@/components/PageHero";
import { Section } from "@/components/Section";

const Contact = () => {
  const [submitting, setSubmitting] = useState(false);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      (e.target as HTMLFormElement).reset();
      toast({ title: "Message sent", description: "Thanks — we'll be in touch within one business day." });
    }, 600);
  };

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title={<>Let's build something <span className="text-gradient">exceptional</span>.</>}
        description="Tell us about your project, your timeline and your goals. We'll respond within one business day."
      />
      <Section>
        <div className="grid gap-12 lg:grid-cols-[1fr_1.3fr]">
          <div className="space-y-8">
            <div>
              <h3 className="font-bold mb-2">Where to find us</h3>
              <p className="text-sm text-muted-foreground">Remote-first, with hubs in Stockholm, Berlin and London.</p>
            </div>
            <div className="space-y-4 text-sm">
              <div className="flex items-start gap-3"><Mail className="h-5 w-5 text-primary mt-0.5"/><div><div className="font-medium">hello@nordstack.dev</div><div className="text-muted-foreground">General inquiries</div></div></div>
              <div className="flex items-start gap-3"><Phone className="h-5 w-5 text-primary mt-0.5"/><div><div className="font-medium">+46 8 555 010 20</div><div className="text-muted-foreground">Mon–Fri, 09:00–18:00 CET</div></div></div>
              <div className="flex items-start gap-3"><MapPin className="h-5 w-5 text-primary mt-0.5"/><div><div className="font-medium">Sveavägen 44</div><div className="text-muted-foreground">111 34 Stockholm, Sweden</div></div></div>
            </div>
          </div>

          <form onSubmit={onSubmit} className="rounded-2xl border border-border bg-card p-8 space-y-5">
            <div className="grid gap-5 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input id="name" required placeholder="Anna Lindqvist" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="company">Company</Label>
                <Input id="company" placeholder="Northwave" />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Work email</Label>
              <Input id="email" type="email" required placeholder="anna@northwave.com" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="message">Project details</Label>
              <Textarea id="message" required rows={6} placeholder="Tell us about your goals, timeline and current stack…" />
            </div>
            <Button type="submit" size="lg" className="w-full" disabled={submitting}>
              {submitting ? "Sending…" : "Send message"}
            </Button>
          </form>
        </div>
      </Section>
    </>
  );
};

export default Contact;
