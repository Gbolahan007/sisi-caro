import ServicesPage from "./ServicesPage";

export const metadata = {
  title: "Our Services | sisicaro",
  description:
    "Explore our core and add-on services designed to help your business grow strategically and scale effectively.",
  openGraph: {
    title: "Our Services | sisicaro",
    description:
      "From strategy to execution, discover services tailored to transform your business.",
    url: "https://yourdomain.com/services",
    siteName: "sisicaro",
    images: [
      {
        url: "/about-us.jpg",
        width: 1200,
        height: 630,
        alt: "Our Services",
      },
    ],
    locale: "en_NGN",
    type: "website",
  },
};

export default function Page() {
  return <ServicesPage />;
}
