import AboutHeroSection from "../components/About/AboutHeroSection";
import AboutUsSection from "../components/About/AboutUsSection";
import AboutUsWhyWorkWithUs from "../components/About/AboutUsWhyWorkWithUs";
import AbouUsBrandSection from "../components/About/AbouUsBrandSection";

export const metadata = {
  title: "About Us | Sisicaro",
  description:
    "Learn more about YourCompany — who we are, what we do, and why businesses choose to work with us for growth and innovation.",
  openGraph: {
    title: "About Us | Sisicaro",
    description:
      "Discover the story behind YourCompany and why we’re the trusted partner for strategic growth and success.",
    url: "https://sisicaro.com/about",
    siteName: "Sisicaro",
    images: [
      {
        url: "/sis-carooo.png",
        width: 1200,
        height: 630,
        alt: "About Us",
      },
    ],
    locale: "NGN",
    type: "website",
  },
};

export default function Page() {
  return (
    <div>
      <AboutHeroSection />
      <AboutUsSection />
      <AboutUsWhyWorkWithUs />
      <AbouUsBrandSection />
    </div>
  );
}
