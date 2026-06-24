import { a as SOLD, i as SERVICE_AREAS, n as LISTINGS, t as AGENT } from "./site-data-CLL-MbQG.mjs";
import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { N as ClientOnly } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as PageShell } from "./site-layout-Bnhqz5hQ.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/map-DHJeZs9Z.js
var import_jsx_runtime = require_jsx_runtime();
function Page() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(PageShell, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "mx-auto max-w-7xl px-6 pt-20",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs uppercase tracking-[0.3em] text-accent",
					children: "Where Bobbi Works"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "mt-3 font-serif text-5xl text-primary md:text-6xl",
					children: "Sales & Listings Map"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 max-w-2xl text-foreground/75",
					children: "Click any marker to see the property — price, beds, baths, square footage and photo. Gold pins are recent sales, green pins are active listings across central New Jersey."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-5 flex flex-wrap gap-4 text-sm",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "inline-flex items-center gap-2",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "h-3 w-3 rounded-full",
								style: { background: "#b08a3e" }
							}),
							" Sold (",
							SOLD.length,
							")"
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "inline-flex items-center gap-2",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "h-3 w-3 rounded-full",
								style: { background: "#1f4d3a" }
							}),
							" For Sale (",
							LISTINGS.length,
							")"
						]
					})]
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "mx-auto mt-10 max-w-7xl px-6",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ClientOnly, { fallback: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-[600px] w-full animate-pulse rounded-2xl border border-border bg-muted" }) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-3 text-xs text-muted-foreground",
				children: ["Office: ", AGENT.address]
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "mx-auto max-w-7xl px-6 py-16",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
				className: "font-serif text-3xl text-primary",
				children: [
					"All ",
					SERVICE_AREAS.length,
					" service areas"
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4",
				children: SERVICE_AREAS.map((a) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "rounded-lg border border-border bg-card px-4 py-3 text-sm",
					children: a
				}, a))
			})]
		})
	] });
}
//#endregion
export { Page as component };
