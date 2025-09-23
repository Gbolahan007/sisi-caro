"use client";
import Script from "next/script";

export default function SEO() {
  return (
    <>
      <Script
        id="org-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            url: "https://www.sisicaro.com",
            logo: "https://www.sisicaro.com/sis-carooo.png",
            name: "sisicaro",
            alternateName: "Sisicaro Resources",
            description:
              "Your first and best source for information and resources",
            sameAs: [
              "https://www.facebook.com/sisicaro",
              "https://www.instagram.com/sisicaro",
            ],
          }),
        }}
      />

      <Script
        id="website-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            url: "https://www.sisicaro.com",
            name: "sisicaro",
            description: "Resources and Information Hub",
            potentialAction: {
              "@type": "SearchAction",
              target: "https://www.sisicaro.com/search?q={search_term_string}",
              "query-input": "required name=search_term_string",
            },
          }),
        }}
      />
    </>
  );
}
