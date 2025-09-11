"use client";

import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { useServices } from "@/app/Queryhooks/useServices";

export default function ServicesSection() {
  const router = useRouter();
  const { services, isLoading } = useServices();

  return (
    <div className="bg-white py-6 lg:py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-black mb-6">
            We Provide <span className="text-red-600 italic">Services</span>{" "}
            That Yield Results.
          </h2>
          <motion.p
            className="text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            Access a full team of specialists dedicated to creating impactful,
            customized strategies that drive results.
          </motion.p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {isLoading
            ? Array.from({ length: 6 }).map((_, index) => (
                <motion.div
                  key={index}
                  className="h-20 bg-gray-200 rounded-full animate-pulse"
                />
              ))
            : services?.map((service, index) => {
                const IconComponent =
                  // fallback to ArrowRight if no matching icon
                  require("lucide-react")[service.icon?.trim()] || ArrowRight;

                return (
                  <motion.div
                    key={service.slug}
                    onClick={() => router.push(`/services/${service.slug}`)}
                    className="group flex items-center gap-4 border border-gray-200 rounded-full p-4 bg-white shadow-sm hover:shadow-md transition-shadow cursor-pointer"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.6,
                      delay: index * 0.15,
                      ease: "easeOut",
                    }}
                    viewport={{ once: true }}
                  >
                    {/* Icon Circle */}
                    <div className="w-12 h-12 bg-black group-hover:bg-red-600 rounded-full flex items-center justify-center transition-colors duration-300 border-2">
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>

                    {/* Text */}
                    <h3 className="text-lg font-semibold text-gray-800">
                      {service.title}
                    </h3>
                  </motion.div>
                );
              })}
        </div>

        {/* CTA Button */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <Link href="/services" passHref>
            <Button className="inline-flex justify-center items-center px-8 py-8 bg-red-600 hover:bg-red-700 border font-bold rounded-sm border-red-600 text-white text-lg transition-colors space-x-2">
              <span className="w-2 h-2 bg-white rounded-xl animate-pulse"></span>
              <span className="font-medium">View All Services</span>
              <ArrowRight size={20} />
            </Button>
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
