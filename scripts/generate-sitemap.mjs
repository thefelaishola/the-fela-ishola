// Runs automatically before every build (npm's "prebuild" lifecycle hook).
// Writes public/sitemap.xml so it is included in the Netlify build output.
//
// Static routes are always listed. Daily Guide, Messages, and Portfolio
// detail pages are added dynamically from Supabase when credentials are
// available at build time (Netlify has them as env vars). If Supabase
// cannot be reached, the script falls back to static routes only rather
// than failing the build.
//
// This talks to Supabase's REST API directly with plain fetch() rather
// than the @supabase/supabase-js client, because that client's realtime
// module requires a native WebSocket global that is only available on
// Node 22+, and Netlify's configured build runtime here is Node 20.
import { writeFileSync, mkdirSync } from "node:fs";

const SITE_URL = "https://thefelaishola.netlify.app";

const STATIC_ROUTES = [
  { path: "/", priority: "1.0", changefreq: "weekly" },
  { path: "/about", priority: "0.7", changefreq: "monthly" },
  { path: "/ministry", priority: "0.7", changefreq: "monthly" },
  { path: "/daily-guide", priority: "0.9", changefreq: "daily" },
  { path: "/messages", priority: "0.8", changefreq: "weekly" },
  { path: "/portfolio", priority: "0.7", changefreq: "monthly" },
  { path: "/contact", priority: "0.5", changefreq: "yearly" },
  { path: "/ask", priority: "0.6", changefreq: "monthly" },
  { path: "/privacy-policy", priority: "0.2", changefreq: "yearly" },
  { path: "/terms", priority: "0.2", changefreq: "yearly" },
];

function urlEntry(path, priority, changefreq, lastmod) {
  return [
    "  <url>",
    `    <loc>${SITE_URL}${path}</loc>`,
    lastmod ? `    <lastmod>${lastmod}</lastmod>` : null,
    `    <changefreq>${changefreq}</changefreq>`,
    `    <priority>${priority}</priority>`,
    "  </url>",
  ]
    .filter(Boolean)
    .join("\n");
}

async function restQuery(baseUrl, apiKey, table, params) {
  const res = await fetch(`${baseUrl}/rest/v1/${table}?${params}`, {
    headers: {
      apikey: apiKey,
      Authorization: `Bearer ${apiKey}`,
    },
  });
  if (!res.ok) {
    throw new Error(`${table} query failed: ${res.status} ${res.statusText}`);
  }
  return res.json();
}

async function fetchDynamicRoutes() {
  const url = process.env.VITE_SUPABASE_URL;
  const key = process.env.VITE_SUPABASE_PUBLISHABLE_KEY;
  if (!url || !key) {
    console.warn(
      "[sitemap] Supabase env vars not set, writing static routes only."
    );
    return [];
  }

  const entries = [];

  try {
    const today = new Date().toISOString().slice(0, 10);

    const guides = await restQuery(
      url,
      key,
      "daily_guides",
      `select=slug,guide_date,updated_at&published=eq.true&guide_date=lte.${today}`
    );
    for (const g of guides ?? []) {
      entries.push(
        urlEntry(
          `/daily-guide/${g.slug}`,
          "0.6",
          "monthly",
          (g.updated_at ?? g.guide_date)?.slice(0, 10)
        )
      );
    }

    const messages = await restQuery(
      url,
      key,
      "messages",
      "select=slug,updated_at&published=eq.true"
    );
    for (const m of messages ?? []) {
      entries.push(
        urlEntry(
          `/messages/${m.slug}`,
          "0.6",
          "monthly",
          m.updated_at?.slice(0, 10)
        )
      );
    }

    const projects = await restQuery(
      url,
      key,
      "portfolio_projects",
      "select=slug,updated_at&published=eq.true"
    );
    for (const p of projects ?? []) {
      entries.push(
        urlEntry(
          `/portfolio/${p.slug}`,
          "0.5",
          "monthly",
          p.updated_at?.slice(0, 10)
        )
      );
    }
  } catch (err) {
    console.warn("[sitemap] Could not fetch dynamic routes:", err.message);
  }

  return entries;
}

async function main() {
  const dynamicEntries = await fetchDynamicRoutes();
  const staticEntries = STATIC_ROUTES.map((r) =>
    urlEntry(r.path, r.priority, r.changefreq)
  );

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${[...staticEntries, ...dynamicEntries].join("\n")}
</urlset>
`;

  mkdirSync("public", { recursive: true });
  writeFileSync("public/sitemap.xml", xml);
  console.log(
    `[sitemap] Wrote public/sitemap.xml with ${
      staticEntries.length + dynamicEntries.length
    } URLs.`
  );
}

main();
