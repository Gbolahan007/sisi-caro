import Contact from "./contact";

export const metadata = {
  title: "Contact Sisicaro | Digital Marketing & Creative Solutions",
  description:
    "Get in touch with Sisicaro for tailored digital marketing strategies, partnerships, and project consultations. Let’s build impactful solutions together.",
  keywords: [
    "Sisicaro",
    "Digital Marketing Nigeria",
    "Contact Sisicaro",
    "Creative Agency",
    "Marketing Consultation",
    "Start a Project",
    "Business Growth",
  ],
  openGraph: {
    title: "Contact Sisicaro | Digital Marketing & Creative Solutions",
    description:
      "Reach out to Sisicaro for project inquiries, partnerships, or a free consultation. We craft strategies that help your brand stand out.",
    url: "https://www.sisicaro.com/contact",
    siteName: "Sisicaro",
    images: [
      {
        url: "/sis-carooo.png",
        width: 1200,
        height: 630,
        alt: "Sisicaro Contact Page - Digital Marketing Background",
      },
    ],
    locale: "en_NGN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Sisicaro | Digital Marketing & Creative Solutions",
    description:
      "Get in touch with Sisicaro for tailored strategies and impactful digital solutions.",
    images: ["/contact.jpg"],
  },
  alternates: {
    canonical: "https://www.sisicaro.com/contact",
  },
};

export default function Page() {
  return <Contact />;
}
