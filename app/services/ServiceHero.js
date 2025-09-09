"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";
import Link from "next/link";
import { formatCurrency } from "@/app/hooks/useCurrency";

export default function ServiceHero({ service, onSubscribe }) {
  return (
    <section className="relative h-[500px] bg-white overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/digi.WEBP"
          alt={service.title}
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/80"></div>

      {/* Hero Content */}
      <div className="relative z-10 h-full flex items-center justify-center text-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
            {service.title}
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-2xl mx-auto">
            {service.description}
          </p>
          <div className="flex items-baseline gap-3 justify-center mb-8">
            <span className="text-4xl font-bold text-white">
              {formatCurrency(service.price)}
            </span>
            <span className="text-gray-300 text-lg">{service.price_unit}</span>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              onClick={onSubscribe}
              className="bg-red-600 text-white hover:bg-red-700 px-8 py-4 text-lg font-semibold rounded-sm transition-all transform hover:scale-105"
            >
              <ShoppingCart className="mr-2 h-5 w-5" />
              Subscribe Now
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
