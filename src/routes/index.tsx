import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import bobbi from "@/assets/bobbi.png";
import { PageShell } from "@/components/site-layout";
import { AGENT, REVIEWS } from "@/components/site-data";
import { ChevronRight } from "lucide-react";

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
      <Designations />
      <EditorialReview />
      <CTA />
    </PageShell>
  );
}

function Hero() {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <section className="relative">
      <div className="mx-auto max-w-7xl px-8 py-24 md:py-32">
        <div className="grid gap-12 md:grid-cols-2 items-center">
          {/* Left: Asymmetric Typography */}
          <div className="flex flex-col justify-center">
            <p className="text-xs uppercase tracking-[0.35em] text-accent font-semibold">
              {AGENT.brokerage}
            </p>
            <h1 className="mt-6 font-serif text-5xl md:text-6xl text-primary leading-[1.05]">
              Helping<br />
              <span className="italic font-light">New Jersey</span><br />
              feel like home.
            </h1>
            <p className="mt-8 max-w-lg text-base font-light text-foreground/75 leading-relaxed md:text-lg">
              I'm Bobbi Lebbing — a full-time Realtor® for nearly 30 years. From first-time buyers to seasoned downsizers, I walk every client through every step with patience, knowledge, and a little fun along the way.
            </p>

            {/* Integrated search bar equivalent — subtle divider-based layout */}
            <div className="mt-12 flex flex-col sm:flex-row gap-4 items-start sm:items-center">
              <Link
                to="/contact"
                className="btn-primary"
              >
                Schedule a consultation
                <ChevronRight size={16} className="ml-2" />
              </Link>
              <Link
                to="/listings"
                className="btn-outline"
              >
                Explore listings
              </Link>
            </div>

            {/* Rating micro-display */}
            <div className="mt-12 pt-8 border-t border-border">
              <p className="text-xs uppercase tracking-[0.25em] text-accent font-semibold">5.0 Rating</p>
              <p className="mt-1 text-sm font-light text-muted-foreground">
                {AGENT.reviewCount} verified reviews on Zillow
              </p>
            </div>
          </div>

          {/* Right: Tall, High-Aspect Ratio Image */}
          <div className="relative">
            <div 
              className={`image-container aspect-[3/4] md:aspect-[2/3] overflow-hidden transition-all duration-700 ${
                imageLoaded ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <img
                src={bobbi}
                alt="Bobbi Lebbing portrait"
                className="h-full w-full object-cover"
                onLoad={() => setImageLoaded(true)}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Soft divider at bottom */}
      <div className="divider-soft" />
    </section>
  );
}

function Stats() {
  const stats = [
    { value: "20", label: "Sales Last 12 Months", delay: 100 },
    { value: AGENT.stats.totalSales, label: "Total Career Sales", delay: 200 },
    { value: AGENT.stats.priceRange, label: "Price Range Served", delay: 300 },
    { value: AGENT.stats.averagePrice, label: "Average Sale Price", delay: 400 },
  ];

  return (
    <section className="bg-primary text-primary-foreground">
      <div className="mx-auto max-w-7xl px-8 py-24">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="fade-in-up"
              style={{ animationDelay: `${stat.delay}ms` }}
            >
              <p className="font-serif text-4xl md:text-5xl font-light">{stat.value}</p>
              <p className="mt-3 text-xs uppercase tracking-[0.25em] font-light opacity-80">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section className="mx-auto max-w-7xl px-8 py-32">
      <div className="mb-16">
        <p className="text-xs uppercase tracking-[0.35em] text-accent font-semibold">Approach</p>
        <h2 className="mt-4 font-serif text-4xl md:text-5xl text-primary">
          "I love my job—<span className="italic font-light">plain and simple.</span>"
        </h2>
      </div>

      <div className="grid md:grid-cols-2 gap-16">
        <div className="border-l border-accent/40 pl-8">
          <h3 className="font-serif text-2xl text-primary mb-4">Residential Focus</h3>
          <p className="text-base font-light text-foreground/75 leading-relaxed mb-4">
            I've been a full-time Realtor® for over 29 years. My favorite is residential — especially the couples who have lived in their home for years and are finally ready to downsize.
          </p>
          <p className="text-base font-light text-foreground/75 leading-relaxed">
            I'm there at every turn, walking them through getting their home "show ready," handling township requirements, and finding the next chapter that fits.
          </p>
        </div>

        <div className="border-l border-accent/40 pl-8">
          <h3 className="font-serif text-2xl text-primary mb-4">First-Time Buyers & More</h3>
          <p className="text-base font-light text-foreground/75 leading-relaxed mb-4">
            I love first-time buyers — fun and rewarding work where I hold hands from start to finish. I also work with distressed clients, with compassion and understanding.
          </p>
          <p className="text-base font-light text-foreground/75 leading-relaxed">
            I list and sell across Middlesex, Monmouth, Ocean and Mercer counties.
          </p>
        </div>
      </div>
    </section>
  );
}

function Designations() {
  return (
    <section className="bg-secondary/40 border-t border-b border-border">
      <div className="mx-auto max-w-7xl px-8 py-32">
        <div className="mb-16">
          <p className="text-xs uppercase tracking-[0.35em] text-accent font-semibold">REALTOR® Credentials</p>
          <h2 className="mt-4 font-serif text-4xl md:text-5xl text-primary">
            Designations earned,<br />
            <span className="italic font-light">expertise applied.</span>
          </h2>
          <p className="mt-6 max-w-xl text-base font-light text-muted-foreground leading-relaxed">
            Designations from the National Association of REALTORS® that signal Bobbi's specialized training in buyer representation, senior moves, and seller advocacy.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {AGENT.certifications.map((cert, i) => (
            <div
              key={cert.abbr}
              className="card-editorial p-8 fade-in-up"
              style={{ animationDelay: `${i * 100}ms` }}
            >
              <p className="font-serif text-3xl text-primary">{cert.abbr}</p>
              <p className="mt-3 text-xs uppercase tracking-widest text-muted-foreground font-semibold">
                {cert.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function EditorialReview() {
  const [reviewIndex, setReviewIndex] = useState(0);
  const currentReview = REVIEWS[reviewIndex];

  useEffect(() => {
    const interval = setInterval(() => {
      setReviewIndex((prev) => (prev + 1) % REVIEWS.length);
    }, 7000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="mx-auto max-w-5xl px-8 py-32">
      <div className="mb-12">
        <p className="text-xs uppercase tracking-[0.35em] text-accent font-semibold">Client Voice</p>
        <h2 className="mt-4 font-serif text-4xl md:text-5xl text-primary">
          Featured Review
        </h2>
      </div>

      <div className="card-editorial p-12 md:p-16">
        {/* Stars */}
        <div className="flex gap-1 text-accent mb-8">
          {[...Array(5)].map((_, i) => (
            <span key={i} className="text-xl">★</span>
          ))}
        </div>

        {/* Quote */}
        <blockquote className="quote-editorial mb-8">
          "{currentReview.body}"
        </blockquote>

        {/* Attribution */}
        <div className="border-t border-border pt-8">
          <p className="text-sm font-light text-muted-foreground">
            — <span className="text-foreground font-semibold">{currentReview.author}</span> · {currentReview.date}
          </p>
        </div>
      </div>

      {/* Carousel controls */}
      <div className="mt-12 flex justify-center items-center gap-3">
        <button
          onClick={() => setReviewIndex((prev) => (prev - 1 + REVIEWS.length) % REVIEWS.length)}
          className="nav-link text-sm"
          aria-label="Previous review"
        >
          ← Previous
        </button>
        <div className="flex gap-2">
          {REVIEWS.map((_, i) => (
            <button
              key={i}
              onClick={() => setReviewIndex(i)}
              className={`transition-all duration-300 ${
                i === reviewIndex
                  ? "w-6 h-px bg-primary"
                  : "w-2 h-px bg-border hover:bg-primary/50"
              }`}
              aria-label={`Review ${i + 1}`}
            />
          ))}
        </div>
        <button
          onClick={() => setReviewIndex((prev) => (prev + 1) % REVIEWS.length)}
          className="nav-link text-sm"
          aria-label="Next review"
        >
          Next →
        </button>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section className="border-t border-border bg-primary text-primary-foreground">
      <div className="mx-auto max-w-7xl px-8 py-24 md:py-32 text-center">
        <h2 className="font-serif text-4xl md:text-5xl mb-8">
          Ready to find your next home?
        </h2>
        <p className="text-base font-light opacity-90 mb-12 max-w-2xl mx-auto">
          Whether you're buying, selling, or exploring options, I'm here to guide you every step of the way with integrity and expertise.
        </p>
        <Link
          to="/contact"
          className="inline-flex items-center justify-center px-8 py-4 bg-primary-foreground text-primary font-medium hover:shadow-lg transition-all duration-300 ease-out hover:translate-y-[-2px]"
        >
          Schedule Your Consultation
          <ChevronRight size={18} className="ml-2" />
        </Link>
      </div>
    </section>
  );
}
