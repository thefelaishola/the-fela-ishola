import { Helmet } from "react-helmet-async";
import { SITE } from "@/data/site";

interface SeoProps {
  title: string;
  description: string;
  path: string;
  image?: string;
  /** Optional JSON-LD structured data object (or array of objects). */
  jsonLd?: Record<string, unknown> | Record<string, unknown>[];
}

export default function Seo({
  title,
  description,
  path,
  image,
  jsonLd,
}: SeoProps) {
  const fullTitle = `${title} | ${SITE.brandName}`;
  const url = `${SITE.netlifyUrl}${path}`;
  const ogImage = image ?? `${SITE.netlifyUrl}/images/logos/og-default.jpg`;
  const jsonLdList = jsonLd ? (Array.isArray(jsonLd) ? jsonLd : [jsonLd]) : [];

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />

      <meta property="og:type" content="website" />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:site_name" content={SITE.brandName} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      {jsonLdList.map((entry, i) => (
        <script key={i} type="application/ld+json">
          {JSON.stringify(entry)}
        </script>
      ))}
    </Helmet>
  );
}
