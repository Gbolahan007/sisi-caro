"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Check, ShoppingCart } from "lucide-react";
import Link from "next/link";
import { formatCurrency } from "@/app/hooks/useCurrency";

export default function ServiceContent({ service, onSubscribe }) {
  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left Side - Service Image */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
            <Image
              src="/did.jpg"
              alt={service.title}
              fill
              className="object-cover"
            />
          </div>

          {/* Bundle Discount Floating Card */}
          {service.bundle_discount_available && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-xl border border-gray-200"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center text-red-600">
                  💡
                </div>
                <div>
                  <p className="font-semibold text-gray-900">
                    Bundle Available
                  </p>
                  <p className="text-sm text-gray-600">
                    {service.bundle_discount_available}
                  </p>
                </div>
              </div>
            </motion.div>
          )}
        </motion.div>

        {/* Right Side - Service Content */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          {/* Price Badge */}
          <div className="inline-flex items-center gap-2 bg-red-100 text-red-700 px-4 py-2 rounded-full text-sm font-medium">
            <span className="w-2 h-2 bg-red-600 rounded-full"></span>
            {formatCurrency(service.price)} {service.price_unit}
          </div>

          {/* Title */}
          <h2 className="text-4xl md:text-5xl font-bold text-black leading-tight">
            {service.title}
          </h2>

          {/* Description */}
          <p className="text-lg text-gray-700 leading-relaxed">
            {service.description}
          </p>

          {/* Features List */}
          {service.service_features?.length > 0 && (
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-black">
                What&apos;s Included:
              </h3>
              <div className="space-y-3">
                {service.service_features.map((feature, index) => (
                  <motion.div
                    key={feature.id}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.1 * index }}
                    viewport={{ once: true }}
                    className="flex items-start gap-3"
                  >
                    <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-4 h-4 text-red-600" />
                    </div>
                    <span className="text-gray-700">{feature.feature}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          )}

          {/* Best For */}
          {service.best_for && (
            <div className="bg-gray-50 rounded-lg p-6 border">
              <h4 className="font-semibold text-black mb-2">Best For:</h4>
              <p className="text-gray-700 whitespace-pre-line">
                {service.best_for}
              </p>
            </div>
          )}

          <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6 w-full sm:w-auto">
            <Button
              onClick={onSubscribe}
              className="flex items-center justify-center bg-red-600 text-white hover:bg-red-700 px-6 py-3 rounded-md font-semibold transition-transform duration-200 hover:scale-105 w-full sm:w-auto"
            >
              <ShoppingCart className="mr-2 h-5 w-5" />
              Subscribe Now
            </Button>

            <Link href="/contact" passHref>
              <Button
                variant="outline"
                className="flex items-center justify-center border border-black text-black hover:bg-gray-100 px-6 py-3 rounded-md font-semibold transition-transform duration-200 hover:scale-105 w-full sm:w-auto"
              >
                Contact Us
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
