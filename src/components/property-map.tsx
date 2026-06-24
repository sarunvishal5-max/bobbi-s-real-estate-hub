import { useEffect, useRef } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { SOLD, LISTINGS } from "@/components/site-data";

type Pt = { lat: number; lng: number; address: string; price: string; bd: number; ba: number; sqft: string; img: string; kind: "sold" | "listing"; sub: string };

const POINTS: Pt[] = [
  ...SOLD.map((s) => ({ ...s, kind: "sold" as const, sub: s.when })),
  ...LISTINGS.map((l) => ({ ...l, kind: "listing" as const, sub: l.note })),
];

function makeIcon(kind: "sold" | "listing") {
  const color = kind === "sold" ? "#b08a3e" : "#1f4d3a";
  const html = `<div style="width:22px;height:22px;border-radius:50%;background:${color};border:3px solid #fff;box-shadow:0 2px 6px rgba(0,0,0,.35)"></div>`;
  return L.divIcon({ html, className: "", iconSize: [22, 22], iconAnchor: [11, 11] });
}

export function PropertyMap() {
  const ref = useRef<HTMLDivElement>(null);
  const mapRef = useRef<L.Map | null>(null);

  useEffect(() => {
    if (!ref.current || mapRef.current) return;
    const map = L.map(ref.current, { scrollWheelZoom: false }).setView([40.25, -74.45], 10);
    mapRef.current = map;
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: "© OpenStreetMap contributors",
      maxZoom: 19,
    }).addTo(map);

    const bounds: [number, number][] = [];
    POINTS.forEach((p) => {
      bounds.push([p.lat, p.lng]);
      const marker = L.marker([p.lat, p.lng], { icon: makeIcon(p.kind) }).addTo(map);
      const tag = p.kind === "sold"
        ? '<span style="display:inline-block;background:#b08a3e;color:#fff;font-size:10px;letter-spacing:.1em;padding:2px 6px;border-radius:4px;text-transform:uppercase">Sold</span>'
        : '<span style="display:inline-block;background:#1f4d3a;color:#fff;font-size:10px;letter-spacing:.1em;padding:2px 6px;border-radius:4px;text-transform:uppercase">For Sale</span>';
      marker.bindPopup(
        `<div style="width:240px;font-family:Inter,sans-serif">
          <img src="${p.img}" alt="" style="width:100%;height:130px;object-fit:cover;border-radius:6px;margin-bottom:8px" />
          ${tag}
          <div style="font-size:18px;font-weight:600;margin-top:6px;color:#1f2937">${p.price}</div>
          <div style="font-size:12px;color:#4b5563;margin-top:2px">${p.bd} bd · ${p.ba} ba · ${p.sqft} sqft</div>
          <div style="font-size:12px;color:#1f2937;margin-top:6px">${p.address}</div>
          <div style="font-size:11px;color:#6b7280;margin-top:4px">${p.sub}</div>
        </div>`
      );
    });
    if (bounds.length) map.fitBounds(bounds, { padding: [40, 40] });

    return () => { map.remove(); mapRef.current = null; };
  }, []);

  return <div ref={ref} className="h-[600px] w-full rounded-2xl border border-border" />;
}