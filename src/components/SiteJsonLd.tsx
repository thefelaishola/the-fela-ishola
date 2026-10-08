import { Helmet } from "react-helmet-async";
import { SITE } from "@/data/site";

/**
 * Sitewide structured data: an Organization/Person entity for "The Fela
 * ishola" plus a WebSite entity with a search action hint. Rendered once at
 * the layout level so every page carries it, separate from the per-page
 * JSON-LD a page can add through <Seo jsonLd={...} />.
 */
export default function SiteJsonLd() {
  const person = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: SITE.personName,
    alternateName: SITE.brandName,
    url: SITE.netlifyUrl,
    image: `${SITE.netlifyUrl}/images/logos/brand-logo.png`,
    jobTitle: SITE.title,
    email: `mailto:${SITE.email}`,
    sameAs: [SITE.instagramUrl],
  };

  const website = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE.brandName,
    url: SITE.netlifyUrl,
    description: SITE.homepageBio,
  };

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(person)}</script>
      <script type="application/ld+json">{JSON.stringify(website)}</script>
    </Helmet>
  );
}
