import { createFileRoute } from "@tanstack/react-router";
import { lazy, Suspense } from "react";
import { ClientOnly } from "@tanstack/react-router";
import { PageShell } from "@/components/site-layout";
import { SERVICE_AREAS, AGENT, SOLD, LISTINGS } from "@/components/site-data";

const PropertyMap = lazy(() => import("@/components/property-map").then((m) => ({ default: m.PropertyMap })));

export const Route = createFileRoute("/map")({
  head: () => ({
    meta: [
      { title: "Sales & Listings Map — Bobbi Lebbing, Realtor®" },
      { name: "description", content: "Interactive map of Bobbi Lebbing’s sales and active listings across central New Jersey." },
      { property: "og:title", content: "Sales & Listings Map — Bobbi Lebbing" },
      { property: "og:description", content: "Where Bobbi works in New Jersey — sales and listings map." },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <PageShell>
      <section className="mx-auto max-w-7xl px-6 pt-20">
        <p className="text-xs uppercase tracking-[0.3em] text-accent">Where Bobbi Works</p>
        <h1 className="mt-3 font-serif text-5xl text-primary md:text-6xl">Sales & Listings Map</h1>
        <p className="mt-4 max-w-2xl text-foreground/75">
          Click any marker to see the property — price, beds, baths, square footage and photo.
          Gold pins are recent sales, green pins are active listings across central New Jersey.
        </p>
        <div className="mt-5 flex flex-wrap gap-4 text-sm">
          <span className="inline-flex items-center gap-2"><span className="h-3 w-3 rounded-full" style={{ background: "#b08a3e" }} /> Sold ({SOLD.length})</span>
          <span className="inline-flex items-center gap-2"><span className="h-3 w-3 rounded-full" style={{ background: "#1f4d3a" }} /> For Sale ({LISTINGS.length})</span>
        </div>
      </section>

      <section className="mx-auto mt-10 max-w-7xl px-6">
        <ClientOnly fallback={<div className="h-[600px] w-full animate-pulse rounded-2xl border border-border bg-muted" />}>
          <Suspense fallback={<div className="h-[600px] w-full animate-pulse rounded-2xl border border-border bg-muted" />}>
            <PropertyMap />
          </Suspense>
        </ClientOnly>
        <p className="mt-3 text-xs text-muted-foreground">Office: {AGENT.address}</p>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16">
        <h2 className="font-serif text-3xl text-primary">All {SERVICE_AREAS.length} service areas</h2>
        <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4">
          {SERVICE_AREAS.map((a) => (
            <div key={a} className="rounded-lg border border-border bg-card px-4 py-3 text-sm">{a}</div>
          ))}
        </div>
      </section>
    </PageShell>
  );
}