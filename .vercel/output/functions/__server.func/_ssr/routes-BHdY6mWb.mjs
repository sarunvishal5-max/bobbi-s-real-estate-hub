import { r as __toESM } from "../_runtime.mjs";
import { r as REVIEWS, t as AGENT } from "./site-data-CLL-MbQG.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as PageShell } from "./site-layout-Bnhqz5hQ.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-BHdY6mWb.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var bobbi_default = "/assets/bobbi-ClpT4ShQ.png";
function Index() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(PageShell, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hero, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stats, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(About, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CredentialsBand, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ReviewsCarousel, {})
	] });
}
function Hero() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "relative overflow-hidden",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 -z-10 bg-gradient-to-br from-secondary/60 via-background to-background" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto grid max-w-7xl gap-12 px-6 py-20 md:grid-cols-[1.1fr_0.9fr] md:py-28 md:gap-16",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col justify-center",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs uppercase tracking-[0.3em] text-accent",
						children: AGENT.brokerage
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
						className: "mt-4 font-serif text-5xl leading-[1.05] text-primary md:text-7xl",
						children: [
							"Helping New Jersey",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
							"feel like home."
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-6 max-w-xl text-base text-foreground/75 md:text-lg",
						children: "I’m Bobbi Lebbing — a full-time Realtor® for nearly 30 years. From first-time buyers to seasoned downsizers, I walk every client through every step with patience, knowledge, and a little fun along the way."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-8 flex flex-wrap gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/contact",
							className: "rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground hover:bg-primary/90",
							children: "Schedule a conversation"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/listings",
							className: "rounded-full border border-primary/40 px-6 py-3 text-sm font-medium text-primary hover:border-primary",
							children: "View current listings"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-10 flex items-center gap-4 text-sm text-muted-foreground",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex items-center gap-1 text-accent",
							children: "★★★★★".split("").map((s, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: s }, i))
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
							AGENT.rating.toFixed(1),
							" · ",
							AGENT.reviewCount,
							" verified reviews on Zillow"
						] })]
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute -inset-4 -z-10 rounded-[2rem] bg-accent/30 blur-2xl" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "relative overflow-hidden rounded-[2rem] border border-border bg-card shadow-2xl",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: bobbi_default,
							alt: "Bobbi Lebbing portrait",
							className: "h-full w-full object-cover"
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "absolute -bottom-6 -left-6 hidden rounded-2xl border border-border bg-card p-5 shadow-xl md:block",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-serif text-3xl text-primary",
							children: AGENT.stats.totalSales
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs uppercase tracking-[0.18em] text-muted-foreground",
							children: "Career closings"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "absolute -right-4 top-8 hidden rounded-2xl border border-border bg-card p-4 shadow-xl md:block",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs uppercase tracking-[0.18em] text-accent",
							children: "2025"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-serif text-lg text-primary",
							children: "Circle of Excellence — Gold"
						})]
					})
				]
			})]
		})]
	});
}
function Stats() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "border-y border-border bg-primary text-primary-foreground",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mx-auto grid max-w-7xl grid-cols-2 gap-8 px-6 py-12 md:grid-cols-4",
			children: [
				["20", "Sales · last 12 months"],
				[String(AGENT.stats.totalSales), "Total career sales"],
				[AGENT.stats.priceRange, "Price range served"],
				[AGENT.stats.averagePrice, "Average sale price"]
			].map(([v, l]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "font-serif text-3xl md:text-4xl",
				children: v
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 text-xs uppercase tracking-[0.18em] opacity-75",
				children: l
			})] }, l))
		})
	});
}
function About() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "mx-auto max-w-5xl px-6 py-24",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-xs uppercase tracking-[0.3em] text-accent",
				children: "About Bobbi"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "mt-3 font-serif text-4xl text-primary md:text-5xl",
				children: "“I love my job — plain and simple.”"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-8 grid gap-8 text-foreground/80 md:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "I’ve been a full-time Realtor® for over 29 years. My favorite is residential — especially the couples who have lived in their home for years and are finally ready to downsize. I’m there at every turn, walking them through getting their home “show ready,” handling township requirements, and finding the next chapter that fits." }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "I love first-time buyers — fun and rewarding work where I hold hands from start to finish. I also work with distressed clients, with compassion and understanding. I list and sell across Middlesex, Monmouth, Ocean and Mercer counties." })]
			})
		]
	});
}
function CredentialsBand() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "border-t border-border bg-secondary/40",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl px-6 py-16",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col items-start justify-between gap-6 md:flex-row md:items-end",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs uppercase tracking-[0.3em] text-accent",
					children: "REALTOR® Credentials"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-2 font-serif text-3xl text-primary md:text-4xl",
					children: "Designations earned, expertise applied."
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "max-w-md text-sm text-muted-foreground",
					children: "Designations from the National Association of REALTORS® that signal Bobbi’s specialized training in buyer representation, senior moves, and seller advocacy."
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-10 grid gap-4 md:grid-cols-4",
				children: AGENT.certifications.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-xl border border-border bg-card p-5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-serif text-2xl text-primary",
						children: c.abbr
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 text-sm text-muted-foreground",
						children: c.name
					})]
				}, c.abbr))
			})]
		})
	});
}
function ReviewsCarousel() {
	const [i, setI] = (0, import_react.useState)(0);
	(0, import_react.useEffect)(() => {
		const t = setInterval(() => setI((p) => (p + 1) % REVIEWS.length), 7e3);
		return () => clearInterval(t);
	}, []);
	const r = REVIEWS[i];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "reviews",
		className: "mx-auto max-w-6xl px-6 py-24",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-end justify-between gap-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs uppercase tracking-[0.3em] text-accent",
					children: "Client Reviews"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
					className: "mt-2 font-serif text-4xl text-primary md:text-5xl",
					children: [
						"5.0 ★ from ",
						AGENT.reviewCount,
						" clients"
					]
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "hidden gap-2 md:flex",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => setI((p) => (p - 1 + REVIEWS.length) % REVIEWS.length),
						className: "h-10 w-10 rounded-full border border-border text-primary hover:bg-primary hover:text-primary-foreground",
						children: "←"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => setI((p) => (p + 1) % REVIEWS.length),
						className: "h-10 w-10 rounded-full border border-border text-primary hover:bg-primary hover:text-primary-foreground",
						children: "→"
					})]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-10 rounded-3xl border border-border bg-card p-8 md:p-12 shadow-sm",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex items-center gap-1 text-accent",
						children: "★★★★★".split("").map((s, k) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: s }, k))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "mt-4 font-serif text-2xl text-primary md:text-3xl",
						children: r.title
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-4 text-foreground/80 md:text-lg leading-relaxed",
						children: [
							"“",
							r.body,
							"”"
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-6 text-sm text-muted-foreground",
						children: [
							"— ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-medium text-foreground",
								children: r.author
							}),
							" · ",
							r.date
						]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-6 flex justify-center gap-2",
				children: REVIEWS.map((_, k) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					"aria-label": `Review ${k + 1}`,
					onClick: () => setI(k),
					className: `h-1.5 rounded-full transition-all ${k === i ? "w-8 bg-primary" : "w-2 bg-border"}`
				}, k))
			})
		]
	});
}
//#endregion
export { Index as component };
