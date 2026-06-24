import { createFileRoute } from "@tanstack/react-router";
import { PageShell, PropertyCard, ServiceAreasStrip } from "@/components/site-layout";
import { SOLD, SERVICE_AREAS, AGENT } from "@/components/site-data";

export const Route = createFileRoute("/sold")({
  head: () => ({
    meta: [
      { title: "Recently Sold — Bobbi Lebbing, Realtor®" },
      { name: "description", content: `${AGENT.stats.totalSales} career sales and counting. Recent closings represented by Bobbi Lebbing across NJ.` },
      { property: "og:title", content: "Recently Sold — Bobbi Lebbing" },
      { property: "og:description", content: "Recent closings represented by Bobbi Lebbing." },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <PageShell>
      <section className="mx-auto max-w-7xl px-6 pt-20 pb-10">
        <p className="text-xs uppercase tracking-[0.3em] text-accent">Recently Sold</p>
        <h1 className="mt-3 font-serif text-5xl text-primary md:text-6xl">A track record of results.</h1>
        <p className="mt-4 max-w-2xl text-foreground/75">
          {AGENT.stats.totalSales} closings across 30 years — from {AGENT.stats.priceRange.toLowerCase()},
          averaging {AGENT.stats.averagePrice}. A snapshot of recent transactions below.
        </p>
      </section>
      <section className="mx-auto max-w-7xl px-6 pb-10">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {SOLD.map((p) => (
            <PropertyCard key={p.address} {...p} badge={p.when} />
          ))}
        </div>
      </section>
      <ServiceAreasStrip areas={SERVICE_AREAS} />
    </PageShell>
  );
}