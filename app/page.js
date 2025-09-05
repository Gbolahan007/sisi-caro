"use client";

import { Footer } from "./components/Home/Footer";
import HeroSection from "./components/Home/HeroSection";
import HomeAboutUs from "./components/Home/HomeAboutUs";
import HomeMarketSection from "./components/Home/HomeMarketSection";
import HomeServicePage from "./components/Home/HomeServicePage";
import HomeTestimonialSection from "./components/Home/HomeTestimonialSection";
import LogoCarousel from "./components/Home/LogoCarousel";

export default function Page() {
  return (
    <div className=" min-h-screen text-black bg-white overflow-x-hidden">
      <HeroSection />
      <LogoCarousel />
      <HomeAboutUs />
      <HomeServicePage />
      <HomeMarketSection />
      <HomeTestimonialSection />
    </div>
  );
}
