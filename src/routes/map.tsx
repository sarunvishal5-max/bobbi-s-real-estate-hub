import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/site-layout";
import { SERVICE_AREAS, AGENT } from "@/components/site-data";

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
  const q = encodeURIComponent("Monroe Township, NJ 08831");
  const src = `https://www.google.com/maps?q=${q}&z=9&output=embed`;
  return (
    <PageShell>
      <section className="mx-auto max-w-7xl px-6 pt-20">
        <p className="text-xs uppercase tracking-[0.3em] text-accent">Where Bobbi Works</p>
        <h1 className="mt-3 font-serif text-5xl text-primary md:text-6xl">Sales & Listings Map</h1>
        <p className="mt-4 max-w-2xl text-foreground/75">
          Bobbi’s most recent 100 sales and 100 listings span 20+ communities across Middlesex, Monmouth,
          Ocean and Mercer counties — anchored at the New Jersey Realty office in Monroe Township.
        </p>
      </section>

      <section className="mx-auto mt-10 max-w-7xl px-6">
        <div className="overflow-hidden rounded-2xl border border-border shadow-sm">
          <iframe
            title="Bobbi Lebbing service area map"
            src={src}
            className="h-[520px] w-full"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
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