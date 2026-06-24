import { a as SOLD, i as SERVICE_AREAS, t as AGENT } from "./site-data-CLL-MbQG.mjs";
import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { n as PropertyCard, r as ServiceAreasStrip, t as PageShell } from "./site-layout-Bnhqz5hQ.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/sold-3hri7FHE.js
var import_jsx_runtime = require_jsx_runtime();
function Page() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(PageShell, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "mx-auto max-w-7xl px-6 pt-20 pb-10",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs uppercase tracking-[0.3em] text-accent",
					children: "Recently Sold"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "mt-3 font-serif text-5xl text-primary md:text-6xl",
					children: "A track record of results."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-4 max-w-2xl text-foreground/75",
					children: [
						AGENT.stats.totalSales,
						" closings across 30 years — from ",
						AGENT.stats.priceRange.toLowerCase(),
						", averaging ",
						AGENT.stats.averagePrice,
						". A snapshot of recent transactions below."
					]
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "mx-auto max-w-7xl px-6 pb-10",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid gap-8 sm:grid-cols-2 lg:grid-cols-3",
				children: SOLD.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PropertyCard, {
					...p,
					badge: p.when
				}, p.address))
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ServiceAreasStrip, { areas: SERVICE_AREAS })
	] });
}
//#endregion
export { Page as component };
