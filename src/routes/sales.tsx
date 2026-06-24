import { createFileRoute } from "@tanstack/react-router";
import { PageShell, ServiceAreasStrip } from "@/components/site-layout";
import { TRANSACTIONS, SERVICE_AREAS, AGENT } from "@/components/site-data";

export const Route = createFileRoute("/sales")({
  head: () => ({
    meta: [
      { title: "Sales & Production — Bobbi Lebbing, Realtor®" },
      { name: "description", content: "Five-year production history for Bobbi Lebbing — seller and buyer deals, total value, average sale price, and yearly volume." },
      { property: "og:title", content: "Sales & Production — Bobbi Lebbing" },
      { property: "og:description", content: "Transaction history and production metrics." },
    ],
  }),
  component: Page,
});

function Stat({ label, value }: { label: string; value: string | number }) {
  return (
    <div className="rounded-xl border border-border bg-card p-5">
      <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">{label}</p>
      <p className="mt-2 font-serif text-3xl text-primary">{value}</p>
    </div>
  );
}

function Page() {
  const max = Math.max(...TRANSACTIONS.yearly.map((y) => y.volume));
  return (
    <PageShell>
      <section className="mx-auto max-w-7xl px-6 pt-20 pb-10">
        <p className="text-xs uppercase tracking-[0.3em] text-accent">Sales & Production</p>
        <h1 className="mt-3 font-serif text-5xl text-primary md:text-6xl">The numbers behind the smile.</h1>
        <p className="mt-4 max-w-2xl text-foreground/75">
          A five-year view of Bobbi’s transaction history at New Jersey Realty, LLC — including
          her standing as {AGENT.ranking}.
        </p>
      </section>

      <section className="mx-auto max-w-7xl px-6">
        <div className="grid gap-10 lg:grid-cols-2">
          <div className="rounded-2xl border border-border bg-secondary/40 p-8">
            <h2 className="font-serif text-2xl text-primary">Seller Deals</h2>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <Stat label="Total deals" value={TRANSACTIONS.seller.total} />
              <Stat label="Total value" value={TRANSACTIONS.seller.value} />
              <Stat label="Average sale price" value={TRANSACTIONS.seller.avg} />
              <Stat label="Price range" value={TRANSACTIONS.seller.range} />
            </div>
          </div>
          <div className="rounded-2xl border border-border bg-secondary/40 p-8">
            <h2 className="font-serif text-2xl text-primary">Buyer Deals</h2>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <Stat label="Total deals" value={TRANSACTIONS.buyer.total} />
              <Stat label="Total value" value={TRANSACTIONS.buyer.value} />
              <Stat label="Average sale price" value={TRANSACTIONS.buyer.avg} />
              <Stat label="Price range" value={TRANSACTIONS.buyer.range} />
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16">
        <h2 className="font-serif text-3xl text-primary">Production over time</h2>
        <p className="mt-1 text-sm text-muted-foreground">Five-year view · relative annual volume</p>
        <div className="mt-8 grid h-72 grid-cols-5 items-end gap-4 rounded-2xl border border-border bg-card p-8">
          {TRANSACTIONS.yearly.map((y) => {
            const h = (y.volume / max) * 100;
            return (
              <div key={y.year} className="flex h-full flex-col items-center justify-end gap-2">
                <div
                  className="w-full rounded-t-lg bg-primary transition-all hover:bg-accent"
                  style={{ height: `${h}%` }}
                />
                <p className="text-xs text-muted-foreground">{y.year}</p>
              </div>
            );
          })}
        </div>
      </section>
      <ServiceAreasStrip areas={SERVICE_AREAS} />
    </PageShell>
  );
}