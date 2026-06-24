import { r as __toESM } from "../_runtime.mjs";
import { t as AGENT } from "./site-data-CLL-MbQG.mjs";
import { n as require_jsx_runtime, r as require_react, t as QueryClientProvider } from "../_libs/react+tanstack__react-query.mjs";
import { M as useRouter, c as HeadContent, d as Outlet, f as lazyRouteComponent, h as Link, m as createRootRouteWithContext, p as createFileRoute, s as Scripts, u as createRouter } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as QueryClient } from "../_libs/tanstack__query-core.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/router-rM5uCanA.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var styles_default = "/assets/styles-D_BXQpt9.css";
function reportLovableError(error, context = {}) {
	if (typeof window === "undefined") return;
	window.__lovableEvents?.captureException?.(error, {
		source: "react_error_boundary",
		route: window.location.pathname,
		...context
	}, {
		mechanism: "react_error_boundary",
		handled: false,
		severity: "error"
	});
}
function NotFoundComponent() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-7xl font-bold text-foreground",
					children: "404"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-4 text-xl font-semibold text-foreground",
					children: "Page not found"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "The page you're looking for doesn't exist or has been moved."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-6",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/",
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						children: "Go home"
					})
				})
			]
		})
	});
}
function ErrorComponent({ error, reset }) {
	console.error(error);
	const router = useRouter();
	(0, import_react.useEffect)(() => {
		reportLovableError(error, { boundary: "tanstack_root_error_component" });
	}, [error]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-xl font-semibold tracking-tight text-foreground",
					children: "This page didn't load"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "Something went wrong on our end. You can try refreshing or head back home."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 flex flex-wrap justify-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => {
							router.invalidate();
							reset();
						},
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						children: "Try again"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "/",
						className: "inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent",
						children: "Go home"
					})]
				})
			]
		})
	});
}
var Route$6 = createRootRouteWithContext()({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{ title: "Bobbi Lebbing, Realtor® | New Jersey Realty, LLC" },
			{
				name: "description",
				content: "Bobbi Lebbing — 30 years of NJ real estate experience. 455 closed sales across Middlesex, Monmouth, Ocean & Mercer counties. 5.0★ with 190 reviews."
			},
			{
				name: "author",
				content: "Bobbi Lebbing"
			},
			{
				property: "og:title",
				content: "Bobbi Lebbing, Realtor® | New Jersey Realty, LLC"
			},
			{
				property: "og:description",
				content: "Trusted New Jersey Realtor® with 455 sales and a 5.0★ reputation. Serving Middlesex, Monmouth, Ocean & Mercer counties."
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				name: "twitter:card",
				content: "summary"
			}
		],
		links: [
			{
				rel: "stylesheet",
				href: styles_default
			},
			{
				rel: "preconnect",
				href: "https://fonts.googleapis.com"
			},
			{
				rel: "preconnect",
				href: "https://fonts.gstatic.com",
				crossOrigin: "anonymous"
			},
			{
				rel: "stylesheet",
				href: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500;600;700&family=Inter:wght@300;400;500;600;700&display=swap"
			}
		]
	}),
	shellComponent: RootShell,
	component: RootComponent,
	notFoundComponent: NotFoundComponent,
	errorComponent: ErrorComponent
});
function RootShell({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
		lang: "en",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("head", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", { children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {})] })]
	});
}
function RootComponent() {
	const { queryClient } = Route$6.useRouteContext();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(QueryClientProvider, {
		client: queryClient,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {})
	});
}
var $$splitComponentImporter$4 = () => import("./sold-3hri7FHE.mjs");
var Route$5 = createFileRoute("/sold")({
	head: () => ({ meta: [
		{ title: "Recently Sold — Bobbi Lebbing, Realtor®" },
		{
			name: "description",
			content: `${AGENT.stats.totalSales} career sales and counting. Recent closings represented by Bobbi Lebbing across NJ.`
		},
		{
			property: "og:title",
			content: "Recently Sold — Bobbi Lebbing"
		},
		{
			property: "og:description",
			content: "Recent closings represented by Bobbi Lebbing."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
var BASE_URL = "";
var entries = [
	{
		path: "/",
		priority: "1.0",
		changefreq: "weekly"
	},
	{
		path: "/listings",
		priority: "0.9",
		changefreq: "daily"
	},
	{
		path: "/sold",
		priority: "0.8",
		changefreq: "weekly"
	},
	{
		path: "/sales",
		priority: "0.7",
		changefreq: "monthly"
	},
	{
		path: "/map",
		priority: "0.6",
		changefreq: "monthly"
	},
	{
		path: "/contact",
		priority: "0.7",
		changefreq: "yearly"
	}
];
var Route$4 = createFileRoute("/sitemap.xml")({ server: { handlers: { GET: async () => {
	const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${entries.map((e) => `  <url>\n    <loc>${BASE_URL}${e.path}</loc>\n    <changefreq>${e.changefreq}</changefreq>\n    <priority>${e.priority}</priority>\n  </url>`).join("\n")}\n</urlset>`;
	return new Response(xml, { headers: {
		"Content-Type": "application/xml",
		"Cache-Control": "public, max-age=3600"
	} });
} } } });
var $$splitComponentImporter$3 = () => import("./map-DHJeZs9Z.mjs");
var Route$3 = createFileRoute("/map")({
	head: () => ({ meta: [
		{ title: "Sales & Listings Map — Bobbi Lebbing, Realtor®" },
		{
			name: "description",
			content: "Interactive map of Bobbi Lebbing’s sales and active listings across central New Jersey."
		},
		{
			property: "og:title",
			content: "Sales & Listings Map — Bobbi Lebbing"
		},
		{
			property: "og:description",
			content: "Where Bobbi works in New Jersey — sales and listings map."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
var $$splitComponentImporter$2 = () => import("./listings-DF0TctXa.mjs");
var Route$2 = createFileRoute("/listings")({
	head: () => ({ meta: [
		{ title: "Current Listings — Bobbi Lebbing, Realtor®" },
		{
			name: "description",
			content: "Browse Bobbi Lebbing’s current homes for sale across Middlesex, Mercer, Monmouth and Ocean counties in New Jersey."
		},
		{
			property: "og:title",
			content: "Current Listings — Bobbi Lebbing"
		},
		{
			property: "og:description",
			content: "Active New Jersey homes represented by Bobbi Lebbing."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
var $$splitComponentImporter$1 = () => import("./contact-B70wVbw-.mjs");
var Route$1 = createFileRoute("/contact")({
	head: () => ({ meta: [
		{ title: "Contact Bobbi Lebbing, Realtor®" },
		{
			name: "description",
			content: `Reach Bobbi Lebbing at ${AGENT.mobile} or ${AGENT.email}. New Jersey Realty, LLC — Monroe Township, NJ.`
		},
		{
			property: "og:title",
			content: "Contact Bobbi Lebbing"
		},
		{
			property: "og:description",
			content: "Reach Bobbi for buying, selling, downsizing or relocation in central New Jersey."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
var $$splitComponentImporter = () => import("./routes-BHdY6mWb.mjs");
var Route = createFileRoute("/")({
	head: () => ({ meta: [
		{ title: "Bobbi Lebbing, Realtor® — New Jersey Realty, LLC" },
		{
			name: "description",
			content: "30 years of NJ real estate experience, 455 closed sales, 5.0★ from 190 reviews. Serving Middlesex, Monmouth, Ocean & Mercer counties."
		},
		{
			property: "og:title",
			content: "Bobbi Lebbing, Realtor® — New Jersey Realty, LLC"
		},
		{
			property: "og:description",
			content: "30 years of NJ real estate experience, 455 closed sales, 5.0★ from 190 reviews."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
var SoldRoute = Route$5.update({
	id: "/sold",
	path: "/sold",
	getParentRoute: () => Route$6
});
var SitemapDotxmlRoute = Route$4.update({
	id: "/sitemap.xml",
	path: "/sitemap.xml",
	getParentRoute: () => Route$6
});
var MapRoute = Route$3.update({
	id: "/map",
	path: "/map",
	getParentRoute: () => Route$6
});
var ListingsRoute = Route$2.update({
	id: "/listings",
	path: "/listings",
	getParentRoute: () => Route$6
});
var ContactRoute = Route$1.update({
	id: "/contact",
	path: "/contact",
	getParentRoute: () => Route$6
});
var rootRouteChildren = {
	IndexRoute: Route.update({
		id: "/",
		path: "/",
		getParentRoute: () => Route$6
	}),
	ContactRoute,
	ListingsRoute,
	MapRoute,
	SitemapDotxmlRoute,
	SoldRoute
};
var routeTree = Route$6._addFileChildren(rootRouteChildren)._addFileTypes();
var getRouter = () => {
	return createRouter({
		routeTree,
		context: { queryClient: new QueryClient() },
		scrollRestoration: true,
		defaultPreloadStaleTime: 0
	});
};
//#endregion
export { getRouter };
