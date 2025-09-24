"use client";
import Script from "next/script";

export default function SEO() {
  const logoUrl = "/sis-carooo.png";
  const siteUrl = "https://sisicaro.com";

  return (
    <>
      <Script
        id="org-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            url: siteUrl,
            logo: `${siteUrl}${logoUrl}`,
            name: "Sisi Caro Digital Marketing",
            alternateName: "Sisicaro",
            description:
              "Expert digital marketing agency specializing in SEO, social media, PPC, content marketing, and brand growth strategies.",
            sameAs: [
              "https://www.facebook.com/sisicaro",
              "https://www.instagram.com/sisicaro",
              "https://twitter.com/sisicaro",
              "https://www.linkedin.com/company/sisicaro",
            ],
          }),
        }}
      />

      {/* Website Schema */}
      <Script
        id="website-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            url: siteUrl,
            name: "Sisi Caro Digital Marketing",
            description:
              "Transform your business with expert digital marketing services. From SEO to social media, we help you drive growth and maximize ROI.",
            potentialAction: {
              "@type": "SearchAction",
              target: `${siteUrl}/search?q={search_term_string}`,
              "query-input": "required name=search_term_string",
            },
          }),
        }}
      />

      {/* Local Business Schema */}
      <Script
        id="localbusiness-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfessionalService",
            name: "Sisi Caro Digital Marketing",
            url: siteUrl,
            logo: `${siteUrl}${logoUrl}`,
            image: `${siteUrl}${logoUrl}`,
            description:
              "We provide tailored digital marketing services including SEO, social media marketing, PPC campaigns, and content strategy.",
            address: {
              "@type": "PostalAddress",
              streetAddress: "123 Marketing Lane",
              addressLocality: "Lagos",
              addressRegion: "LA",
              postalCode: "100001",
              addressCountry: "NG",
            },
            contactPoint: {
              "@type": "ContactPoint",
              telephone: "+234-800-123-4567",
              contactType: "customer service",
              areaServed: "NG",
              availableLanguage: ["English"],
            },
            sameAs: [
              "https://www.facebook.com/sisicaro",
              "https://www.instagram.com/sisicaro",
              "https://twitter.com/sisicaro",
              "https://www.linkedin.com/company/sisicaro",
            ],
          }),
        }}
      />
    </>
  );
}
