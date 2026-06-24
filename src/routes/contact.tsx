import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Instagram, Linkedin, Youtube, IdCard } from "lucide-react";
import { PageShell } from "@/components/site-layout";
import { AGENT } from "@/components/site-data";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Bobbi Lebbing, Realtor®" },
      { name: "description", content: `Reach Bobbi Lebbing at ${AGENT.mobile} or ${AGENT.email}. New Jersey Realty, LLC — Monroe Township, NJ.` },
      { property: "og:title", content: "Contact Bobbi Lebbing" },
      { property: "og:description", content: "Reach Bobbi for buying, selling, downsizing or relocation in central New Jersey." },
    ],
  }),
  component: Page,
});

function Row({ label, value, href }: { label: string; value: string; href?: string }) {
  const Body = href ? (
    <a href={href} className="font-medium text-primary hover:underline">{value}</a>
  ) : (
    <span className="font-medium text-foreground">{value}</span>
  );
  return (
    <div className="flex flex-col gap-0.5 border-b border-border pb-3">
      <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground">{label}</span>
      {Body}
    </div>
  );
}

function Field({ label, name, type = "text", required }: { label: string; name: string; type?: string; required?: boolean }) {
  return (
    <div>
      <label className="text-xs uppercase tracking-[0.18em] text-muted-foreground">{label}</label>
      <input
        name={name}
        type={type}
        required={required}
        className="mt-2 w-full rounded-lg border border-border bg-background px-4 py-3 text-sm"
      />
    </div>
  );
}

const SOCIAL_META: Record<string, { label: string; Icon: typeof Instagram }> = {
  instagram: { label: "Instagram", Icon: Instagram },
  linkedin: { label: "LinkedIn", Icon: Linkedin },
  youtube: { label: "YouTube", Icon: Youtube },
  instacard: { label: "Instacard", Icon: IdCard },
};

function Page() {
  const [sent, setSent] = useState(false);
  return (
    <PageShell>
      <section className="mx-auto grid max-w-7xl gap-12 px-6 py-20 md:grid-cols-[1fr_1.1fr]">
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-accent">Contact</p>
          <h1 className="mt-3 font-serif text-5xl text-primary md:text-6xl">Let’s talk about home.</h1>
          <p className="mt-5 text-foreground/75">
            Whether you’re downsizing, upsizing, or buying your very first place, I’ll meet you where
            you are — and walk you through every step. Send a note or call directly.
          </p>

          <div className="mt-10 space-y-4 text-sm">
            <Row label="Mobile" value={AGENT.mobile} href={`tel:${AGENT.mobile}`} />
            <Row label="Office" value={`${AGENT.office} · ext. ${AGENT.officeExt}`} href={`tel:${AGENT.office}`} />
            <Row label="Email" value={AGENT.email} href={`mailto:${AGENT.email}`} />
            <Row label="Office address" value={AGENT.address} />
          </div>

          <div className="mt-10">
            <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground">Follow along</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {Object.entries(AGENT.socials).map(([k, v]) => (
                (() => {
                  const meta = SOCIAL_META[k];
                  if (!meta) return null;
                  const { label, Icon } = meta;
                  return (
                    <a
                      key={k}
                      href={v}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={label}
                      title={label}
                      className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border bg-card text-foreground/75 transition hover:border-primary hover:text-primary"
                    >
                      <Icon size={20} strokeWidth={1.75} />
                    </a>
                  );
                })()
              ))}
            </div>
          </div>
        </div>

        <form
          onSubmit={(e) => { e.preventDefault(); setSent(true); }}
          className="rounded-3xl border border-border bg-card p-8 shadow-sm md:p-10"
        >
          <h2 className="font-serif text-3xl text-primary">Send Bobbi a message</h2>
          <p className="mt-1 text-sm text-muted-foreground">She typically replies within one business day.</p>

          <div className="mt-6 grid gap-5">
            <Field label="Full name" name="name" required />
            <div className="grid gap-5 sm:grid-cols-2">
              <Field label="Email" name="email" type="email" required />
              <Field label="Phone" name="phone" type="tel" />
            </div>
            <div>
              <label className="text-xs uppercase tracking-[0.18em] text-muted-foreground">I’m interested in</label>
              <select className="mt-2 w-full rounded-lg border border-border bg-background px-4 py-3 text-sm">
                <option>Selling my home</option>
                <option>Buying a home</option>
                <option>Downsizing / 55+ community</option>
                <option>First-time buyer guidance</option>
                <option>Relocation</option>
                <option>Just have a question</option>
              </select>
            </div>
            <div>
              <label className="text-xs uppercase tracking-[0.18em] text-muted-foreground">Message</label>
              <textarea
                rows={5}
                required
                className="mt-2 w-full resize-none rounded-lg border border-border bg-background px-4 py-3 text-sm"
                placeholder="Tell Bobbi a little about your situation…"
              />
            </div>
            <button
              type="submit"
              className="rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground hover:bg-primary/90"
            >
              {sent ? "Thank you — Bobbi will be in touch." : "Send message"}
            </button>
          </div>
        </form>
      </section>
    </PageShell>
  );
}