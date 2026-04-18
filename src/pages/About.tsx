import PageHero from "@/components/PageHero";
import { Section, Eyebrow } from "@/components/Section";
import CTAStrip from "@/components/CTAStrip";

const team = [
  { name: "Eamonn Grant", role: "Founder & CEO", bio: "Experienced international executive and second-time founder. 25 years across commercial, product, technology and transformation. 20 years in eCommerce, €10B in online sales. Worked with Samsung, ESW, SuperValu and the AA." },
  { name: "Bartosz Piasta", role: "CPO", bio: "Product and technology leader with 15+ years building scalable platforms. Drove innovation and transformation at Samsung Europe and Apple." },
  { name: "Brian Kitson", role: "CCO", bio: "Senior marketing leader with 20+ years' experience. Led VALUEclub at Dunnes Stores, driving CRM innovation and digital growth." },
  { name: "Steven Hazeldene", role: "CFO", bio: "Head of DTC Commercial at Samsung Europe. Drives eCommerce growth, digital strategy and customer experience across international markets." },
  { name: "Noírín Ní Laocha", role: "CMO", bio: "Marketing and transformation leader, PMP qualified. 15+ years delivering digital change at Digicel, Musgrave, Heineken and eir." },
  { name: "Vicky Stynes", role: "Marketing", bio: "Marketing and content specialist. Combines digital strategy, social media and operations expertise to deliver campaigns, partnerships and project support." },
];

const About = () => (
  <>
    <PageHero
      eyebrow="About RunCommerce"
      title={<>Built by operators who've <span className="text-gradient">lived the problems</span>.</>}
      description="We've spent two decades inside eCommerce — at Samsung, Apple, Dunnes, Musgrave, Holbi and beyond. We saw the same operational pain everywhere. AI is finally capable of solving it. RunCommerce is our answer."
    />

    <Section>
      <div className="grid gap-12 lg:grid-cols-3">
        <div>
          <Eyebrow>Mission</Eyebrow>
          <h2 className="text-2xl font-bold mb-3">Make eCommerce profitable again.</h2>
          <p className="text-sm text-muted-foreground">By automating the 45% of cost that is manual effort, and eliminating supplier-induced demand.</p>
        </div>
        <div>
          <Eyebrow>Approach</Eyebrow>
          <h2 className="text-2xl font-bold mb-3">AI-native, operator-led.</h2>
          <p className="text-sm text-muted-foreground">A platform, an automation layer and managed services — designed to work as one operating system.</p>
        </div>
        <div>
          <Eyebrow>Ambition</Eyebrow>
          <h2 className="text-2xl font-bold mb-3">Truly global.</h2>
          <p className="text-sm text-muted-foreground">We have no moat to protect, which means we can compete with the A-league from day one.</p>
        </div>
      </div>
    </Section>

    <Section className="border-t border-border">
      <Eyebrow>The team</Eyebrow>
      <h2 className="text-3xl md:text-4xl font-bold mb-12">Meet the A-team.</h2>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {team.map((m) => (
          <div key={m.name} className="rounded-2xl border border-border bg-card p-6 hover:-translate-y-1 hover:border-primary/50 transition-all">
            <div className="h-16 w-16 rounded-full bg-accent-gradient mb-4 flex items-center justify-center text-primary-foreground font-bold text-xl">
              {m.name.split(" ").map(n => n[0]).slice(0,2).join("")}
            </div>
            <h3 className="font-bold text-lg">{m.name}</h3>
            <div className="text-sm text-primary mb-3">{m.role}</div>
            <p className="text-sm text-muted-foreground">{m.bio}</p>
          </div>
        ))}
      </div>
    </Section>

    {/* Clients & brands */}
    <Section className="border-t border-border">
      <div className="max-w-2xl mb-12">
        <Eyebrow>Clients & brands</Eyebrow>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">Clients and brands using our technology.</h2>
        <p className="mt-4 text-muted-foreground">
          A snapshot of the brands the RunCommerce team has built, scaled and operated eCommerce for.
        </p>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
        {[
          { name: "Samsung", slug: "samsung" },
          { name: "Apple", slug: "apple" },
          { name: "SuperValu" },
          { name: "AA" },
          { name: "Dunnes Stores" },
          { name: "Musgrave" },
          { name: "Heineken" },
          { name: "eir" },
          { name: "Digicel" },
        ].map((b: { name: string; slug?: string }) => (
          <div
            key={b.name}
            title={b.name}
            className="group rounded-xl border border-border bg-card/60 backdrop-blur h-20 flex flex-col items-center justify-center gap-1.5 px-2 hover:border-primary/40 hover:bg-card transition-colors"
          >
            {b.slug ? (
              <img
                src={`https://cdn.simpleicons.org/${b.slug}/ffffff`}
                alt={`${b.name} logo`}
                loading="lazy"
                className="h-7 w-auto max-w-[60%] opacity-80 group-hover:opacity-100 transition-opacity"
              />
            ) : (
              <div className="h-7 flex items-center justify-center text-sm font-bold text-foreground/90">
                {b.name}
              </div>
            )}
            <span className="text-[10px] uppercase tracking-wider text-muted-foreground text-center leading-tight">
              {b.name}
            </span>
          </div>
        ))}
      </div>
    </Section>

    <CTAStrip />
  </>
);

export default About;
