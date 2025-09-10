import GetStartedPage from "./GetStartedPage";

export const metadata = {
  title: "Get Started | Sisicaro Digital Marketing Strategy Call",
  description:
    "Book your free 30-minute strategy session with Sisicaro. Let’s review your goals, create a tailored action plan, and guide your brand towards impactful growth.",
  keywords: [
    "Sisicaro",
    "Free Strategy Call",
    "Digital Marketing Nigeria",
    "Marketing Consultation",
    "Business Growth",
    "Start Project Sisicaro",
  ],
  openGraph: {
    title: "Get Started | Sisicaro Digital Marketing Strategy Call",
    description:
      "Claim your free 30-minute digital marketing consultation with Sisicaro. No pressure, no obligation—just expert insights for your brand.",
    url: "https://www.sisicaro.com/get-started",
    siteName: "Sisicaro",
    images: [
      {
        url: "/sis-carooo.png",
        width: 1200,
        height: 630,
        alt: "Sisicaro Free Consultation - Digital Marketing Strategy Call",
      },
    ],
    locale: "en_NGN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Get Started | Sisicaro Digital Marketing Strategy Call",
    description:
      "Book a free 30-minute digital marketing strategy session with Sisicaro today. Let’s build impactful solutions together.",
    images: ["/contact.jpg"],
  },
  alternates: {
    canonical: "https://www.sisicaro.com/get-started",
  },
};

export default function Page() {
  return <GetStartedPage />;
}
