import { createFileRoute } from "@tanstack/react-router";
import { PageShell, PropertyCard, ServiceAreasStrip } from "@/components/site-layout";
import { LISTINGS, SERVICE_AREAS } from "@/components/site-data";

export const Route = createFileRoute("/listings")({
  head: () => ({
    meta: [
      { title: "Current Listings — Bobbi Lebbing, Realtor®" },
      { name: "description", content: "Browse Bobbi Lebbing’s current homes for sale across Middlesex, Mercer, Monmouth and Ocean counties in New Jersey." },
      { property: "og:title", content: "Current Listings — Bobbi Lebbing" },
      { property: "og:description", content: "Active New Jersey homes represented by Bobbi Lebbing." },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <PageShell>
      <section className="mx-auto max-w-7xl px-6 pt-20 pb-10">
        <p className="text-xs uppercase tracking-[0.3em] text-accent">For Sale</p>
        <h1 className="mt-3 font-serif text-5xl text-primary md:text-6xl">Current Listings</h1>
        <p className="mt-4 max-w-2xl text-foreground/75">
          {LISTINGS.length} active homes represented by Bobbi across central New Jersey. Each one tour-ready —
          reach out to schedule a private showing.
        </p>
      </section>
      <section className="mx-auto max-w-7xl px-6 pb-10">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {LISTINGS.map((p) => (
            <PropertyCard key={p.address} {...p} badge={p.note} />
          ))}
        </div>
      </section>
      <ServiceAreasStrip areas={SERVICE_AREAS} />
    </PageShell>
  );
}