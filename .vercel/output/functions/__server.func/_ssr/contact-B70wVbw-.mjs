import { r as __toESM } from "../_runtime.mjs";
import { t as AGENT } from "./site-data-CLL-MbQG.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { i as IdCard, n as Linkedin, r as Instagram, t as Youtube } from "../_libs/lucide-react.mjs";
import { t as PageShell } from "./site-layout-Bnhqz5hQ.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/contact-B70wVbw-.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function Row({ label, value, href }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex flex-col gap-0.5 border-b border-border pb-3",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "text-xs uppercase tracking-[0.2em] text-muted-foreground",
			children: label
		}), href ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
			href,
			className: "font-medium text-primary hover:underline",
			children: value
		}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "font-medium text-foreground",
			children: value
		})]
	});
}
function Field({ label, name, type = "text", required }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
		className: "text-xs uppercase tracking-[0.18em] text-muted-foreground",
		children: label
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
		name,
		type,
		required,
		className: "mt-2 w-full rounded-lg border border-border bg-background px-4 py-3 text-sm"
	})] });
}
var SOCIAL_META = {
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
function Page() {
	const [sent, setSent] = (0, import_react.useState)(false);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageShell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "mx-auto grid max-w-7xl gap-12 px-6 py-20 md:grid-cols-[1fr_1.1fr]",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-xs uppercase tracking-[0.3em] text-accent",
				children: "Contact"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "mt-3 font-serif text-5xl text-primary md:text-6xl",
				children: "Let’s talk about home."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-5 text-foreground/75",
				children: "Whether you’re downsizing, upsizing, or buying your very first place, I’ll meet you where you are — and walk you through every step. Send a note or call directly."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-10 space-y-4 text-sm",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
						label: "Mobile",
						value: AGENT.mobile,
						href: `tel:${AGENT.mobile}`
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
						label: "Office",
						value: `${AGENT.office} · ext. ${AGENT.officeExt}`,
						href: `tel:${AGENT.office}`
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
						label: "Email",
						value: AGENT.email,
						href: `mailto:${AGENT.email}`
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
						label: "Office address",
						value: AGENT.address
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-10",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs uppercase tracking-[0.25em] text-muted-foreground",
					children: "Follow along"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-3 flex flex-wrap gap-2",
					children: Object.entries(AGENT.socials).map(([k, v]) => (() => {
						const meta = SOCIAL_META[k];
						if (!meta) return null;
						const { label, Icon } = meta;
						return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: v,
							target: "_blank",
							rel: "noopener noreferrer",
							"aria-label": label,
							title: label,
							className: "inline-flex h-11 w-11 items-center justify-center rounded-full border border-border bg-card text-foreground/75 transition hover:border-primary hover:text-primary",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
								size: 20,
								strokeWidth: 1.75
							})
						}, k);
					})())
				})]
			})
		] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
			onSubmit: (e) => {
				e.preventDefault();
				setSent(true);
			},
			className: "rounded-3xl border border-border bg-card p-8 shadow-sm md:p-10",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-serif text-3xl text-primary",
					children: "Send Bobbi a message"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-1 text-sm text-muted-foreground",
					children: "She typically replies within one business day."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 grid gap-5",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "Full name",
							name: "name",
							required: true
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid gap-5 sm:grid-cols-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: "Email",
								name: "email",
								type: "email",
								required: true
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: "Phone",
								name: "phone",
								type: "tel"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
							className: "text-xs uppercase tracking-[0.18em] text-muted-foreground",
							children: "I’m interested in"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
							className: "mt-2 w-full rounded-lg border border-border bg-background px-4 py-3 text-sm",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Selling my home" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Buying a home" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Downsizing / 55+ community" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "First-time buyer guidance" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Relocation" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Just have a question" })
							]
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
							className: "text-xs uppercase tracking-[0.18em] text-muted-foreground",
							children: "Message"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
							rows: 5,
							required: true,
							className: "mt-2 w-full resize-none rounded-lg border border-border bg-background px-4 py-3 text-sm",
							placeholder: "Tell Bobbi a little about your situation…"
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "submit",
							className: "rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground hover:bg-primary/90",
							children: sent ? "Thank you — Bobbi will be in touch." : "Send message"
						})
					]
				})
			]
		})]
	}) });
}
//#endregion
export { Page as component };
