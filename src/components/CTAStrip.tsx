import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const CTAStrip = () => (
  <section className="py-20 md:py-28">
    <div className="container">
      <div className="relative overflow-hidden rounded-2xl border border-border bg-card p-10 md:p-16 shadow-card-elegant">
        <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-primary/20 blur-3xl" />
        <div className="relative grid gap-8 md:grid-cols-[1fr_auto] md:items-center">
          <div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight mb-3">Ready to scale your commerce stack?</h2>
            <p className="text-muted-foreground max-w-xl">
              Talk to our team about your roadmap. We'll respond within one business day.
            </p>
          </div>
          <Button asChild size="lg">
            <Link to="/contact">
              Start a project <ArrowRight className="ml-1" />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  </section>
);

export default CTAStrip;
