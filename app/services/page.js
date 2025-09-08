"use client";

import React from "react";
import {
  ArrowRight,
  Target,
  Smartphone,
  Users,
  MessageCircle,
  Menu,
  TrendingUp,
  Headphones,
  Calendar,
  Megaphone,
  Star,
  CheckCircle,
} from "lucide-react";
import Image from "next/image";

const ServicesPage = () => {
  // All services data (core + add-ons)
  const services = [
    // Core Services
    {
      id: 1,
      title: "Self-Drive Strategy",
      type: "core",
      description:
        "A 4-week 1-on-1 strategy experience with weekly calls, templates, and a 90-day blueprint",
      icon: Target,
      slug: "self-drive-strategy",
    },
    {
      id: 2,
      title: "Who Will Do the Work?",
      type: "core",
      description:
        "Done-for-you brand & content management from strategy to execution",
      icon: Users,
      slug: "done-for-you",
    },
    {
      id: 3,
      title: "Socials by Sisi",
      type: "core",
      description:
        "Monthly content planning with strategy-backed storytelling and design",
      icon: Smartphone,
      slug: "socials-by-sisi",
    },
    // Add-on Services
    {
      id: 4,
      title: "WhatsApp Business Optimization",
      type: "addon",
      description:
        "Set up your WhatsApp Business to convert and inform with optimized flows",
      icon: MessageCircle,
      slug: "whatsapp-optimization",
    },
    {
      id: 5,
      title: "Service | Product Menu Design",
      type: "addon",
      description:
        "Well-designed visual menu that helps clients know what you offer",
      icon: Menu,
      slug: "menu-design",
    },
    {
      id: 6,
      title: "Monthly Engagement Boost",
      type: "addon",
      description:
        "Advertise your product/service via Sisi Caro's platform without ads budget",
      icon: TrendingUp,
      slug: "engagement-boost",
    },
    {
      id: 7,
      title: "Customer Service Message Bank",
      type: "addon",
      description:
        "Ready-to-use response templates for professional customer handling",
      icon: Headphones,
      slug: "message-bank",
    },
    {
      id: 8,
      title: "Monthly Content Planner + Call",
      type: "addon",
      description:
        "Custom 30-day calendar and caption ideas with monthly strategy calls",
      icon: Calendar,
      slug: "content-planner",
    },
    {
      id: 9,
      title: "Sales | Promo Campaign Launch",
      type: "addon",
      description:
        "Complete campaign strategy, creative assets, and rollout guide",
      icon: Megaphone,
      slug: "campaign-launch",
    },
  ];

  const handleServiceClick = (service) => {
    console.log(`Navigating to ${service.slug}`);
  };

  const ServiceCard = ({ service }) => {
    const IconComponent = service.icon;

    return (
      <div
        onClick={() => handleServiceClick(service)}
        className="bg-white p-8 cursor-pointer group border border-gray-100 hover:border-gray-200"
      >
        {/* Icon */}
        <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
          <IconComponent className="w-8 h-8 text-white" />
        </div>

        {/* Title */}
        <h3 className="text-xl font-bold text-black mb-4 group-hover:text-gray-800 transition-colors">
          {service.title}
        </h3>

        {/* Description */}
        <p className="text-gray-600 text-sm leading-relaxed mb-6 min-h-[3rem]">
          {service.description}
        </p>

        {/* Arrow */}
        <div className="flex justify-end">
          <div className="w-8 h-8 flex items-center justify-center group-hover:translate-x-1 transition-transform duration-300">
            <ArrowRight className="w-5 h-5 text-black" />
          </div>
        </div>
      </div>
    );
  };

  const coreServices = services.filter((service) => service.type === "core");
  const addonServices = services.filter((service) => service.type === "addon");

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section with Background Image */}
      <div className="relative h-[550px] sm:h-[550px] w-full">
        <Image
          src="/about-us.jpg"
          alt="About Us"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/70"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-center text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            Transform Your <span className="text-red-600">Business</span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            From strategy to execution, we provide the tools and expertise to
            scale your business and dominate your market
          </p>

          {/* Key Benefits */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="flex items-center gap-3 justify-center md:justify-start">
              <CheckCircle className="w-6 h-6 text-red-400 flex-shrink-0" />
              <span className="text-gray-300">Strategic Business Growth</span>
            </div>
            <div className="flex items-center gap-3 justify-center md:justify-start">
              <CheckCircle className="w-6 h-6 text-red-400 flex-shrink-0" />
              <span className="text-gray-300">
                Professional Content Creation
              </span>
            </div>
            <div className="flex items-center gap-3 justify-center md:justify-start">
              <CheckCircle className="w-6 h-6 text-red-400 flex-shrink-0" />
              <span className="text-gray-300">Done-for-You Solutions</span>
            </div>
          </div>
        </div>
      </div>

      {/* Core Services Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-4">Core Services</h2>
          <div className="w-24 h-1 bg-red-600 mb-4"></div>
          <p className="text-gray-600 text-lg">
            Comprehensive solutions for business growth and strategy
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20 ">
          {coreServices.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>

        {/* Add-on Services Section */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-4">
            Add-On Services
          </h2>
          <div className="w-24 h-1 bg-red-600 mb-4"></div>
          <p className="text-gray-600 text-lg">
            One-off support tailored for DIY business owners
          </p>
          <div className="bg-red-50 border border-red-200 rounded-lg p-4 mt-6 inline-block">
            <p className="text-red-800 font-semibold">
              Starting from: ₦55,550 per service
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {addonServices.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;
