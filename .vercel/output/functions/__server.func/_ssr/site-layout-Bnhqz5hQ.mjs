import { r as __toESM } from "../_runtime.mjs";
import { t as AGENT } from "./site-data-CLL-MbQG.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { i as IdCard, n as Linkedin, r as Instagram, t as Youtube } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/site-layout-Bnhqz5hQ.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var NAV = [
	{
		to: "/",
		label: "Home"
	},
	{
		to: "/listings",
		label: "Listings"
	},
	{
		to: "/sold",
		label: "Sold"
	},
	{
		to: "/map",
		label: "Map"
	},
	{
		to: "/contact",
		label: "Contact"
	}
];
var SOCIAL_ICONS = {
	instagram: {
		label: "Instagram",
		Icon: Instagram
	},
	linkedin: {
		label: "LinkedIn",
		Icon: Linkedin
	},
	youtube: {
		label: "YouTube",
		Icon: Youtube
	},
	instacard: {
		label: "Instacard",
		Icon: IdCard
	}
};
function Initial() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
		className: "font-serif text-xl tracking-wide text-primary",
		children: ["Bobbi ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "text-accent",
			children: "Lebbing"
		})]
	});
}
function SiteHeader() {
	const [open, setOpen] = (0, import_react.useState)(false);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: "sticky top-0 z-40 border-b border-border bg-background/85 backdrop-blur",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto flex max-w-7xl items-center justify-between px-6 py-4",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/",
					className: "flex flex-col leading-none",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Initial, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "mt-0.5 text-[10px] uppercase tracking-[0.2em] text-muted-foreground",
						children: "Realtor® · New Jersey"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
					className: "hidden items-center gap-8 md:flex",
					children: [NAV.map((n) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: n.to,
						activeOptions: { exact: n.to === "/" },
						className: "text-sm font-medium text-foreground/75 transition-colors hover:text-primary",
						activeProps: { className: "text-primary" },
						children: n.label
					}, n.to)), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/contact",
						className: "rounded-full bg-primary px-5 py-2 text-sm font-medium text-primary-foreground transition hover:bg-primary/90",
						children: "Work with Bobbi"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					"aria-label": "Open menu",
					onClick: () => setOpen((v) => !v),
					className: "md:hidden rounded-md border border-border px-3 py-2 text-sm",
					children: open ? "Close" : "Menu"
				})
			]
		}), open && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "border-t border-border md:hidden",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mx-auto flex max-w-7xl flex-col gap-1 px-6 py-3",
				children: NAV.map((n) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: n.to,
					onClick: () => setOpen(false),
					className: "rounded px-2 py-2 text-sm text-foreground/80 hover:bg-muted",
					children: n.label
				}, n.to))
			})
		})]
	});
}
function SiteFooter() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
		className: "mt-24 border-t border-border bg-secondary/40",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto grid max-w-7xl gap-10 px-6 py-14 md:grid-cols-3",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Initial, {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-3 text-sm text-muted-foreground",
						children: [
							AGENT.brokerage,
							" · ",
							AGENT.yearsExperience,
							" years serving New Jersey homeowners and buyers."
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 text-xs uppercase tracking-[0.18em] text-accent",
						children: AGENT.award
					})
				] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "text-sm",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
							className: "mb-3 font-serif text-lg text-primary",
							children: "Contact"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: ["Mobile: ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: `tel:${AGENT.mobile}`,
							className: "hover:text-primary",
							children: AGENT.mobile
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
							"Office: ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: `tel:${AGENT.office}`,
								className: "hover:text-primary",
								children: AGENT.office
							}),
							" ext. ",
							AGENT.officeExt
						] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: `mailto:${AGENT.email}`,
							className: "hover:text-primary",
							children: AGENT.email
						}) }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-muted-foreground",
							children: AGENT.address
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "text-sm",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
						className: "mb-3 font-serif text-lg text-primary",
						children: "Follow"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex flex-wrap gap-2",
						children: Object.entries(AGENT.socials).map(([k, v]) => {
							const meta = SOCIAL_ICONS[k];
							if (!meta) return null;
							const { label, Icon } = meta;
							return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: v,
								target: "_blank",
								rel: "noopener noreferrer",
								"aria-label": label,
								title: label,
								className: "inline-flex h-9 w-9 items-center justify-center rounded-full border border-border text-foreground/75 transition hover:border-primary hover:text-primary",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
									size: 16,
									strokeWidth: 1.75
								})
							}, k);
						})
					})]
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "border-t border-border py-5 text-center text-xs text-muted-foreground",
			children: [
				"© ",
				(/* @__PURE__ */ new Date()).getFullYear(),
				" Bobbi Lebbing · ",
				AGENT.brokerage,
				". All rights reserved."
			]
		})]
	});
}
function PageShell({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen bg-background",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteHeader, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", { children }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteFooter, {})
		]
	});
}
function ServiceAreasStrip({ areas }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "mt-20 border-t border-border bg-secondary/30 py-14",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl px-6",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs uppercase tracking-[0.25em] text-accent",
					children: "Service Areas"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-2 font-serif text-3xl text-primary md:text-4xl",
					children: "Middlesex · Monmouth · Ocean · Mercer Counties"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 max-w-2xl text-sm text-muted-foreground",
					children: "Bobbi lists and sells across 20+ New Jersey communities — from active-adult villages to first-time-buyer townhomes."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-6 flex flex-wrap gap-2",
					children: areas.map((a) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "rounded-full border border-border bg-card px-4 py-1.5 text-sm text-foreground/80",
						children: a
					}, a))
				})
			]
		})
	});
}
function PropertyCard({ price, bd, ba, sqft, address, badge, img }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
		className: "group overflow-hidden rounded-2xl border border-border bg-card transition hover:shadow-xl",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative aspect-[4/3] overflow-hidden bg-muted",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: img,
				alt: address,
				loading: "lazy",
				className: "h-full w-full object-cover transition duration-700 group-hover:scale-105"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "absolute left-3 top-3 rounded-full bg-primary/95 px-3 py-1 text-xs font-medium text-primary-foreground",
				children: badge
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "p-5",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-serif text-2xl text-primary",
					children: price
				}),
				(bd !== "—" || ba !== "—" || sqft !== "—") && (bd || ba || sqft) ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-1 text-sm text-foreground/80",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: bd }),
						" bd · ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: ba }),
						" ba · ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: sqft }),
						" sqft"
					]
				}) : null,
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: address
				})
			]
		})]
	});
}
//#endregion
export { PropertyCard as n, ServiceAreasStrip as r, PageShell as t };
