"use client";

import React from "react";
import { motion } from "framer-motion";
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
  CheckCircle,
} from "lucide-react";
import Image from "next/image";
import { useServices } from "../Queryhooks/useServices";
import { useRouter } from "next/navigation";

const ServicesPage = () => {
  const { services: servicesL, isLoading } = useServices();
  console.log(servicesL);
  const router = useRouter();

  const icons = {
    Target,
    Users,
    Smartphone,
    MessageCircle,
    Menu,
    TrendingUp,
    Headphones,
    Calendar,
    Megaphone,
  };

  const handleServiceClick = (service) => {
    router.push(`/services/${service.slug}`);
  };

  const ServiceCard = ({ service, index }) => {
    const IconComponent = icons[service.icon] || Target;

    return (
      <motion.div
        onClick={() => handleServiceClick(service)}
        className="bg-white p-8 cursor-pointer group border border-gray-100 hover:border-gray-200"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.6,
          delay: index * 0.15,
          ease: "easeOut",
        }}
        viewport={{ once: true }}
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
      </motion.div>
    );
  };

  // Skeleton loader for cards
  const SkeletonCard = () => (
    <div className="bg-white p-8 border border-gray-100 animate-pulse">
      <div className="w-16 h-16 bg-gray-300 rounded-full mb-6"></div>
      <div className="h-5 bg-gray-300 rounded w-3/4 mb-4"></div>
      <div className="h-4 bg-gray-200 rounded w-full mb-2"></div>
      <div className="h-4 bg-gray-200 rounded w-5/6 mb-6"></div>
      <div className="w-8 h-8 bg-gray-300 rounded-full ml-auto"></div>
    </div>
  );

  const coreServices = servicesL?.filter((s) => s.type === "core") || [];
  const addonServices = servicesL?.filter((s) => s.type === "addon") || [];

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
          <motion.h1
            className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            Transform Your <span className="text-red-600">Business</span>
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            From strategy to execution, we provide the tools and expertise to
            scale your business and dominate your market
          </motion.p>

          {/* Key Benefits */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
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
          </motion.div>
        </div>
      </div>

      {/* Core Services Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-black mb-4">Core Services</h2>
          <div className="w-24 h-1 bg-red-600 mb-4"></div>
          <p className="text-gray-600 text-lg">
            Comprehensive solutions for business growth and strategy
          </p>
        </motion.div>

        {isLoading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {[...Array(3)].map((_, i) => (
              <SkeletonCard key={i} />
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {coreServices.map((service, index) => (
              <ServiceCard key={service.id} service={service} index={index} />
            ))}
          </div>
        )}

        {/* Add-on Services Section */}
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
        >
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
        </motion.div>

        {isLoading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[...Array(3)].map((_, i) => (
              <SkeletonCard key={i} />
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {addonServices.map((service, index) => (
              <ServiceCard key={service.id} service={service} index={index} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ServicesPage;
