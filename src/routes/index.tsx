import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import bobbi from "@/assets/bobbi.png";
import { PageShell } from "@/components/site-layout";
import { AGENT, REVIEWS } from "@/components/site-data";
import { Star, Phone, Mail, MapPin } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Bobbi Lebbing, Realtor® — New Jersey Realty, LLC" },
      { name: "description", content: "30 years of NJ real estate experience, 455 closed sales, 5.0★ from 190 reviews. Serving Middlesex, Monmouth, Ocean & Mercer counties." },
      { property: "og:title", content: "Bobbi Lebbing, Realtor® — New Jersey Realty, LLC" },
      { property: "og:description", content: "30 years of NJ real estate experience, 455 closed sales, 5.0★ from 190 reviews." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <PageShell>
      <BentoGrid />
    </PageShell>
  );
}

function BentoGrid() {
  const [reviewIndex, setReviewIndex] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setReviewIndex((p) => (p + 1) % REVIEWS.length), 7000);
    return () => clearInterval(t);
  }, []);

  const currentReview = REVIEWS[reviewIndex];

  return (
    <div className="mx-auto max-w-7xl px-4 py-12">
      {/* Hero - Large left block + vertical stack right */}
      <div className="grid gap-4 md:grid-cols-3 md:grid-rows-2 mb-4">
        {/* Hero text - spans 2 rows left */}
        <div className="md:col-span-2 md:row-span-2 bg-card rounded-2xl border border-border p-8 md:p-12 flex flex-col justify-center">
          <p className="text-xs uppercase tracking-[0.3em] text-accent">
            {AGENT.brokerage}
          </p>
          <h1 className="mt-4 font-serif text-4xl md:text-5xl leading-[1.05] text-primary">
            Helping New Jersey feel like home.
          </h1>
          <p className="mt-6 text-base text-foreground/75 md:text-lg max-w-xl">
            Full-time Realtor® for nearly 30 years. From first-time buyers to seasoned downsizers, I walk every client through every step with patience, knowledge, and a little fun along the way.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              to="/contact"
              className="rounded-lg bg-primary px-6 py-3 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition"
            >
              Schedule a conversation
            </Link>
            <Link
              to="/listings"
              className="rounded-lg border border-primary/40 px-6 py-3 text-sm font-medium text-primary hover:border-primary transition"
            >
              View listings
            </Link>
          </div>
        </div>

        {/* Portrait - top right */}
        <div className="bg-card rounded-2xl border border-border overflow-hidden aspect-square md:aspect-auto">
          <img 
            src={bobbi} 
            alt="Bobbi Lebbing portrait" 
            className="h-full w-full object-cover"
          />
        </div>

        {/* Rating block - bottom right */}
        <div className="bg-card rounded-2xl border border-border p-6 flex flex-col justify-between">
          <div className="flex items-center gap-1 text-accent mb-3">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={16} fill="currentColor" />
            ))}
          </div>
          <div>
            <p className="font-serif text-2xl text-primary">{AGENT.rating.toFixed(1)}</p>
            <p className="text-xs text-muted-foreground">{AGENT.reviewCount} verified reviews</p>
          </div>
        </div>
      </div>

      {/* Stats Grid - 4 equal blocks */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
        <div className="bg-primary text-primary-foreground rounded-2xl p-6 border border-primary/80">
          <p className="font-serif text-3xl">20</p>
          <p className="text-xs uppercase tracking-[0.18em] mt-2 opacity-75">Last 12 months</p>
        </div>
        <div className="bg-primary text-primary-foreground rounded-2xl p-6 border border-primary/80">
          <p className="font-serif text-3xl">{AGENT.stats.totalSales}</p>
          <p className="text-xs uppercase tracking-[0.18em] mt-2 opacity-75">Career sales</p>
        </div>
        <div className="bg-primary text-primary-foreground rounded-2xl p-6 border border-primary/80">
          <p className="font-serif text-3xl">{AGENT.stats.priceRange}</p>
          <p className="text-xs uppercase tracking-[0.18em] mt-2 opacity-75">Price range</p>
        </div>
        <div className="bg-primary text-primary-foreground rounded-2xl p-6 border border-primary/80">
          <p className="font-serif text-3xl">{AGENT.stats.averagePrice}</p>
          <p className="text-xs uppercase tracking-[0.18em] mt-2 opacity-75">Avg sale price</p>
        </div>
      </div>

      {/* About section - 2 columns */}
      <div className="grid md:grid-cols-2 gap-4 mb-4">
        <div className="bg-card rounded-2xl border border-border p-8">
          <p className="text-xs uppercase tracking-[0.3em] text-accent">Residential Focus</p>
          <h3 className="mt-3 font-serif text-xl text-primary">Couples & Downsizers</h3>
          <p className="mt-4 text-sm text-foreground/80 leading-relaxed">
            I've been helping couples who've lived in their homes for years find their next chapter. From preparing your home for market to navigating township requirements, I handle every detail.
          </p>
        </div>
        <div className="bg-card rounded-2xl border border-border p-8">
          <p className="text-xs uppercase tracking-[0.3em] text-accent">First-Time Buyers</p>
          <h3 className="mt-3 font-serif text-xl text-primary">Guidance From Start to Finish</h3>
          <p className="mt-4 text-sm text-foreground/80 leading-relaxed">
            Buying your first home is exciting and overwhelming. I'm with you every step, from pre-approval through closing, making sure you understand each phase.
          </p>
        </div>
      </div>

      {/* Certifications - 4 equal blocks */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
        {AGENT.certifications.map((c) => (
          <div key={c.abbr} className="bg-secondary/40 rounded-2xl border border-border p-6">
            <p className="font-serif text-2xl text-primary">{c.abbr}</p>
            <p className="mt-2 text-xs text-muted-foreground">{c.name}</p>
          </div>
        ))}
      </div>

      {/* Service Areas - full width */}
      <div className="bg-secondary/40 rounded-2xl border border-border p-8 mb-4">
        <p className="text-xs uppercase tracking-[0.3em] text-accent">Service Areas</p>
        <h2 className="mt-2 font-serif text-2xl md:text-3xl text-primary">
          Middlesex · Monmouth · Ocean · Mercer Counties
        </h2>
        <p className="mt-3 text-sm text-muted-foreground max-w-2xl">
          Bobbi lists and sells across 20+ New Jersey communities — from active-adult villages to first-time-buyer townhomes.
        </p>
        <div className="mt-6 flex flex-wrap gap-2">
          {["Woodbridge", "Princeton", "Red Bank", "Lakewood", "New Brunswick", "Long Branch"].map((area) => (
            <span key={area} className="rounded-full border border-border bg-card px-4 py-2 text-sm text-foreground/80">
              {area}
            </span>
          ))}
        </div>
      </div>

      {/* Reviews - 2 columns, left is featured review, right is contact + quick info */}
      <div className="grid md:grid-cols-3 gap-4 mb-4">
        {/* Featured review - spans 2 cols */}
        <div className="md:col-span-2 bg-card rounded-2xl border border-border p-8">
          <div className="flex items-center gap-1 text-accent mb-4">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={16} fill="currentColor" />
            ))}
          </div>
          <h3 className="font-serif text-2xl text-primary">{currentReview.title}</h3>
          <p className="mt-4 text-foreground/80 leading-relaxed">
            "{currentReview.body}"
          </p>
          <p className="mt-6 text-sm text-muted-foreground">
            — <span className="font-medium text-foreground">{currentReview.author}</span> · {currentReview.date}
          </p>
          <div className="mt-6 flex gap-2">
            {REVIEWS.map((_, i) => (
              <button
                key={i}
                onClick={() => setReviewIndex(i)}
                className={`rounded-full transition-all ${i === reviewIndex ? "w-6 h-2 bg-primary" : "w-2 h-2 bg-border"}`}
                aria-label={`Review ${i + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Contact info block - right */}
        <div className="bg-card rounded-2xl border border-border p-8 flex flex-col justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-accent mb-4">Get in Touch</p>
            <div className="space-y-4">
              <a href={`tel:${AGENT.mobile}`} className="flex items-start gap-3 hover:text-primary transition">
                <Phone size={18} className="text-accent flex-shrink-0 mt-0.5" />
                <div className="text-sm">
                  <p className="text-xs text-muted-foreground">Mobile</p>
                  <p className="text-foreground">{AGENT.mobile}</p>
                </div>
              </a>
              <a href={`mailto:${AGENT.email}`} className="flex items-start gap-3 hover:text-primary transition">
                <Mail size={18} className="text-accent flex-shrink-0 mt-0.5" />
                <div className="text-sm">
                  <p className="text-xs text-muted-foreground">Email</p>
                  <p className="text-foreground">{AGENT.email}</p>
                </div>
              </a>
              <div className="flex items-start gap-3">
                <MapPin size={18} className="text-accent flex-shrink-0 mt-0.5" />
                <div className="text-sm">
                  <p className="text-xs text-muted-foreground">Office</p>
                  <p className="text-foreground text-xs">{AGENT.address}</p>
                </div>
              </div>
            </div>
          </div>
          <Link
            to="/contact"
            className="mt-6 w-full rounded-lg bg-primary px-4 py-3 text-center text-sm font-medium text-primary-foreground hover:bg-primary/90 transition"
          >
            Work with Bobbi
          </Link>
        </div>
      </div>

      {/* Credentials/Awards - full width */}
      <div className="bg-accent/10 rounded-2xl border border-border p-8">
        <p className="text-xs uppercase tracking-[0.3em] text-accent">Recognition</p>
        <h2 className="mt-2 font-serif text-2xl text-primary mb-4">{AGENT.award}</h2>
        <p className="text-sm text-foreground/80">
          Recognized by the National Association of REALTORS® for outstanding service, sales achievement, and client advocacy.
        </p>
      </div>
    </div>
  );
}
