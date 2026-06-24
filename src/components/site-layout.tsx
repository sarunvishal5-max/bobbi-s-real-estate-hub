import { Link } from "@tanstack/react-router";
import { type ReactNode, useState } from "react";
import { AGENT } from "./site-data";

const NAV = [
  { to: "/", label: "Home" },
  { to: "/listings", label: "Listings" },
  { to: "/sold", label: "Sold" },
  { to: "/sales", label: "Sales" },
  { to: "/map", label: "Map" },
  { to: "/contact", label: "Contact" },
] as const;

function Initial() {
  return (
    <span className="font-serif text-xl tracking-wide text-primary">
      Bobbi <span className="text-accent">Lebbing</span>
    </span>
  );
}

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/85 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link to="/" className="flex flex-col leading-none">
          <Initial />
          <span className="mt-0.5 text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
            Realtor® · New Jersey
          </span>
        </Link>
        <nav className="hidden items-center gap-8 md:flex">
          {NAV.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              activeOptions={{ exact: n.to === "/" }}
              className="text-sm font-medium text-foreground/75 transition-colors hover:text-primary"
              activeProps={{ className: "text-primary" }}
            >
              {n.label}
            </Link>
          ))}
          <Link
            to="/contact"
            className="rounded-full bg-primary px-5 py-2 text-sm font-medium text-primary-foreground transition hover:bg-primary/90"
          >
            Work with Bobbi
          </Link>
        </nav>
        <button
          aria-label="Open menu"
          onClick={() => setOpen((v) => !v)}
          className="md:hidden rounded-md border border-border px-3 py-2 text-sm"
        >
          {open ? "Close" : "Menu"}
        </button>
      </div>
      {open && (
        <div className="border-t border-border md:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-1 px-6 py-3">
            {NAV.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                onClick={() => setOpen(false)}
                className="rounded px-2 py-2 text-sm text-foreground/80 hover:bg-muted"
              >
                {n.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-border bg-secondary/40">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-14 md:grid-cols-3">
        <div>
          <Initial />
          <p className="mt-3 text-sm text-muted-foreground">
            {AGENT.brokerage} · {AGENT.yearsExperience} years serving New Jersey homeowners and buyers.
          </p>
          <p className="mt-3 text-xs uppercase tracking-[0.18em] text-accent">{AGENT.award}</p>
        </div>
        <div className="text-sm">
          <h4 className="mb-3 font-serif text-lg text-primary">Contact</h4>
          <p>Mobile: <a href={`tel:${AGENT.mobile}`} className="hover:text-primary">{AGENT.mobile}</a></p>
          <p>Office: <a href={`tel:${AGENT.office}`} className="hover:text-primary">{AGENT.office}</a> ext. {AGENT.officeExt}</p>
          <p><a href={`mailto:${AGENT.email}`} className="hover:text-primary">{AGENT.email}</a></p>
          <p className="mt-2 text-muted-foreground">{AGENT.address}</p>
        </div>
        <div className="text-sm">
          <h4 className="mb-3 font-serif text-lg text-primary">Follow</h4>
          <div className="flex flex-wrap gap-2">
            {Object.entries(AGENT.socials).map(([k, v]) => (
              <a
                key={k}
                href={v}
                className="rounded-full border border-border px-4 py-1.5 text-xs capitalize text-foreground/80 hover:border-primary hover:text-primary"
              >
                {k}
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="border-t border-border py-5 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} Bobbi Lebbing · {AGENT.brokerage}. All rights reserved.
      </div>
    </footer>
  );
}

export function PageShell({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main>{children}</main>
      <SiteFooter />
    </div>
  );
}

export function ServiceAreasStrip({ areas }: { areas: readonly string[] }) {
  return (
    <section className="mt-20 border-t border-border bg-secondary/30 py-14">
      <div className="mx-auto max-w-7xl px-6">
        <p className="text-xs uppercase tracking-[0.25em] text-accent">Service Areas</p>
        <h2 className="mt-2 font-serif text-3xl text-primary md:text-4xl">
          Middlesex · Monmouth · Ocean · Mercer Counties
        </h2>
        <p className="mt-2 max-w-2xl text-sm text-muted-foreground">
          Bobbi lists and sells across 20+ New Jersey communities — from active-adult villages to first-time-buyer townhomes.
        </p>
        <div className="mt-6 flex flex-wrap gap-2">
          {areas.map((a) => (
            <span
              key={a}
              className="rounded-full border border-border bg-card px-4 py-1.5 text-sm text-foreground/80"
            >
              {a}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

export function PropertyCard({
  price, bd, ba, sqft, address, badge, img,
}: {
  price: string; bd: number; ba: number; sqft: string; address: string; badge: string; img: string;
}) {
  return (
    <article className="group overflow-hidden rounded-2xl border border-border bg-card transition hover:shadow-xl">
      <div className="relative aspect-[4/3] overflow-hidden bg-muted">
        <img
          src={img}
          alt={address}
          loading="lazy"
          className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
        />
        <span className="absolute left-3 top-3 rounded-full bg-primary/95 px-3 py-1 text-xs font-medium text-primary-foreground">
          {badge}
        </span>
      </div>
      <div className="p-5">
        <p className="font-serif text-2xl text-primary">{price}</p>
        <p className="mt-1 text-sm text-foreground/80">
          <strong>{bd}</strong> bd · <strong>{ba}</strong> ba · <strong>{sqft}</strong> sqft
        </p>
        <p className="mt-2 text-sm text-muted-foreground">{address}</p>
      </div>
    </article>
  );
}