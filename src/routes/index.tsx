import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import bobbi from "@/assets/bobbi.png";
import { PageShell } from "@/components/site-layout";
import { AGENT, REVIEWS } from "@/components/site-data";

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
      <Hero />
      <Stats />
      <About />
      <CredentialsBand />
      <ReviewsCarousel />
    </PageShell>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-secondary/60 via-background to-background" />
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 md:grid-cols-[1.1fr_0.9fr] md:py-28 md:gap-16">
        <div className="flex flex-col justify-center">
          <p className="text-xs uppercase tracking-[0.3em] text-accent">
            {AGENT.brokerage}
          </p>
          <h1 className="mt-4 font-serif text-5xl leading-[1.05] text-primary md:text-7xl">
            Helping New Jersey<br />feel like home.
          </h1>
          <p className="mt-6 max-w-xl text-base text-foreground/75 md:text-lg">
            I’m Bobbi Lebbing — a full-time Realtor® for nearly 30 years. From first-time buyers to
            seasoned downsizers, I walk every client through every step with patience, knowledge,
            and a little fun along the way.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              to="/contact"
              className="rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground hover:bg-primary/90"
            >
              Schedule a conversation
            </Link>
            <Link
              to="/listings"
              className="rounded-full border border-primary/40 px-6 py-3 text-sm font-medium text-primary hover:border-primary"
            >
              View current listings
            </Link>
          </div>
          <div className="mt-10 flex items-center gap-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-1 text-accent">
              {"★★★★★".split("").map((s, i) => <span key={i}>{s}</span>)}
            </div>
            <span>{AGENT.rating.toFixed(1)} · {AGENT.reviewCount} verified reviews on Zillow</span>
          </div>
        </div>
        <div className="relative">
          <div className="absolute -inset-4 -z-10 rounded-[2rem] bg-accent/30 blur-2xl" />
          <div className="relative overflow-hidden rounded-[2rem] border border-border bg-card shadow-2xl">
            <img src={bobbi} alt="Bobbi Lebbing portrait" className="h-full w-full object-cover" />
          </div>
          <div className="absolute -bottom-6 -left-6 hidden rounded-2xl border border-border bg-card p-5 shadow-xl md:block">
            <p className="font-serif text-3xl text-primary">{AGENT.stats.totalSales}</p>
            <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">Career closings</p>
          </div>
          <div className="absolute -right-4 top-8 hidden rounded-2xl border border-border bg-card p-4 shadow-xl md:block">
            <p className="text-xs uppercase tracking-[0.18em] text-accent">2025</p>
            <p className="font-serif text-lg text-primary">Circle of Excellence — Gold</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Stats() {
  const items = [
    ["20", "Sales · last 12 months"],
    [String(AGENT.stats.totalSales), "Total career sales"],
    [AGENT.stats.priceRange, "Price range served"],
    [AGENT.stats.averagePrice, "Average sale price"],
  ];
  return (
    <section className="border-y border-border bg-primary text-primary-foreground">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-6 py-12 md:grid-cols-4">
        {items.map(([v, l]) => (
          <div key={l}>
            <p className="font-serif text-3xl md:text-4xl">{v}</p>
            <p className="mt-2 text-xs uppercase tracking-[0.18em] opacity-75">{l}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function About() {
  return (
    <section className="mx-auto max-w-5xl px-6 py-24">
      <p className="text-xs uppercase tracking-[0.3em] text-accent">About Bobbi</p>
      <h2 className="mt-3 font-serif text-4xl text-primary md:text-5xl">
        “I love my job — plain and simple.”
      </h2>
      <div className="mt-8 grid gap-8 text-foreground/80 md:grid-cols-2">
        <p>
          I’ve been a full-time Realtor® for over 29 years. My favorite is residential — especially the
          couples who have lived in their home for years and are finally ready to downsize. I’m there at
          every turn, walking them through getting their home “show ready,” handling township
          requirements, and finding the next chapter that fits.
        </p>
        <p>
          I love first-time buyers — fun and rewarding work where I hold hands from start to finish. I
          also work with distressed clients, with compassion and understanding. I list and sell across
          Middlesex, Monmouth, Ocean and Mercer counties.
        </p>
      </div>
    </section>
  );
}

function CredentialsBand() {
  return (
    <section className="border-t border-border bg-secondary/40">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-accent">REALTOR® Credentials</p>
            <h2 className="mt-2 font-serif text-3xl text-primary md:text-4xl">
              Designations earned, expertise applied.
            </h2>
          </div>
          <p className="max-w-md text-sm text-muted-foreground">
            Designations from the National Association of REALTORS® that signal Bobbi’s
            specialized training in buyer representation, senior moves, and seller advocacy.
          </p>
        </div>
        <div className="mt-10 grid gap-4 md:grid-cols-4">
          {AGENT.certifications.map((c) => (
            <div key={c.abbr} className="rounded-xl border border-border bg-card p-5">
              <p className="font-serif text-2xl text-primary">{c.abbr}</p>
              <p className="mt-1 text-sm text-muted-foreground">{c.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ReviewsCarousel() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((p) => (p + 1) % REVIEWS.length), 7000);
    return () => clearInterval(t);
  }, []);
  const r = REVIEWS[i];
  return (
    <section id="reviews" className="mx-auto max-w-6xl px-6 py-24">
      <div className="flex items-end justify-between gap-6">
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-accent">Client Reviews</p>
          <h2 className="mt-2 font-serif text-4xl text-primary md:text-5xl">
            5.0 ★ from {AGENT.reviewCount} clients
          </h2>
        </div>
        <div className="hidden gap-2 md:flex">
          <button onClick={() => setI((p) => (p - 1 + REVIEWS.length) % REVIEWS.length)}
            className="h-10 w-10 rounded-full border border-border text-primary hover:bg-primary hover:text-primary-foreground">←</button>
          <button onClick={() => setI((p) => (p + 1) % REVIEWS.length)}
            className="h-10 w-10 rounded-full border border-border text-primary hover:bg-primary hover:text-primary-foreground">→</button>
        </div>
      </div>
      <div className="mt-10 rounded-3xl border border-border bg-card p-8 md:p-12 shadow-sm">
        <div className="flex items-center gap-1 text-accent">
          {"★★★★★".split("").map((s, k) => <span key={k}>{s}</span>)}
        </div>
        <h3 className="mt-4 font-serif text-2xl text-primary md:text-3xl">{r.title}</h3>
        <p className="mt-4 text-foreground/80 md:text-lg leading-relaxed">“{r.body}”</p>
        <p className="mt-6 text-sm text-muted-foreground">
          — <span className="font-medium text-foreground">{r.author}</span> · {r.date}
        </p>
      </div>
      <div className="mt-6 flex justify-center gap-2">
        {REVIEWS.map((_, k) => (
          <button
            key={k}
            aria-label={`Review ${k + 1}`}
            onClick={() => setI(k)}
            className={`h-1.5 rounded-full transition-all ${k === i ? "w-8 bg-primary" : "w-2 bg-border"}`}
          />
        ))}
      </div>
    </section>
  );
}
