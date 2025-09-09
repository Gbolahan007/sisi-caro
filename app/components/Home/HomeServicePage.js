"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import useCartStore from "@/app/cartStore/store";
import { Button } from "@/components/ui/button";
import Link from "next/link";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Users, Zap, Target, ShoppingCart, Plus, Minus } from "lucide-react";
import toast from "react-hot-toast";
import { useServices } from "@/app/Queryhooks/useServices";
import { formatCurrency } from "@/app/hooks/useCurrency";

// -------------------- Service Card --------------------
function ServiceCard({
  service,
  inCart,
  quantity,
  onAdd,
  onInc,
  onDec,
  isHydrated,
  index,
}) {
  const icons = { Users, Zap, Target };
  const Icon = icons[service.icon?.trim()] || Target;

  const handleSubscribe = (e) => {
    e.stopPropagation();
    e.preventDefault();
    onAdd();
    toast.success(`${service.title} added to cart 🎉`, {
      position: "top-right",
    });
  };

  const handleIncrement = (e) => {
    e.preventDefault();
    e.stopPropagation();
    onInc();
  };

  const handleDecrement = (e) => {
    e.preventDefault();
    e.stopPropagation();
    onDec();
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 0 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.6,
        ease: "easeOut",
        delay: index * 0.15,
      }}
      viewport={{ once: true }}
      className="h-full"
    >
      <Link href={`/services/${service.slug}`} className="block h-full">
        <Card className="group relative flex flex-col justify-between h-full border border-gray-200 bg-white rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer overflow-hidden">
          {/* Subtle gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-red-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

          {/* ---- Header ---- */}
          <CardHeader className="pb-4 relative z-10">
            <div className="flex items-center gap-4 mb-4">
              <div className="p-2 rounded-xl bg-gradient-to-br from-red-100 to-red-50 shadow-sm group-hover:shadow-md transition-shadow duration-300">
                <Icon className="h-6 w-6 text-red-600" />
              </div>
              <div>
                <div className="text-xl font-bold text-red-600 mb-1">
                  {" "}
                  {service.price ? formatCurrency(service.price) : "—"}
                </div>
                <div className="text-sm font-medium text-gray-500 uppercase tracking-wide">
                  {service.price_unit || "Service"}
                </div>
              </div>
            </div>

            <CardTitle className="text-lg font-bold text-gray-900 group-hover:text-red-600 transition-colors duration-300 leading-snug">
              {service.title}
            </CardTitle>

            <CardDescription className="text-gray-600 mt-2 text-sm">
              {service.description}
            </CardDescription>
          </CardHeader>

          {/* ---- Content ---- */}
          <CardContent className="flex flex-col flex-grow justify-between relative z-10">
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-gray-900 mb-2 text-sm">
                  Key Features
                </h4>
                <ul className="space-y-1.5">
                  {service.service_features?.map((f, idx) => (
                    <li
                      key={idx}
                      className="text-sm text-gray-600 flex items-center gap-2"
                    >
                      <div className="w-2 h-2 rounded-full bg-red-500 flex-shrink-0" />
                      <span>{f.feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* ---- Action Button ---- */}
            <div className="mt-6">
              {!isHydrated ? (
                <Button
                  disabled
                  className="w-full bg-gray-400 text-white"
                  onClick={(e) => e.stopPropagation()}
                >
                  <ShoppingCart className="mr-2 h-4 w-4" />
                  Subscribe Now
                </Button>
              ) : !inCart ? (
                <Button
                  onClick={handleSubscribe}
                  className="w-full bg-black text-white hover:bg-gray-900"
                >
                  <ShoppingCart className="mr-2 h-4 w-4" />
                  Subscribe Now
                </Button>
              ) : (
                <div className="flex items-center justify-between bg-gray-50 rounded-lg p-2 border border-gray-200">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={handleDecrement}
                    className="h-9 w-9 rounded-md border border-gray-300 bg-white hover:bg-gray-100"
                  >
                    <Minus className="h-4 w-4 text-gray-700" />
                  </Button>

                  <span className="font-bold text-lg text-gray-900">
                    {quantity}
                  </span>

                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={handleIncrement}
                    className="h-9 w-9 rounded-md border border-gray-300 bg-white hover:bg-gray-100"
                  >
                    <Plus className="h-4 w-4 text-gray-700" />
                  </Button>
                </div>
              )}
            </div>
          </CardContent>
        </Card>
      </Link>
    </motion.div>
  );
}

// -------------------- Main Component --------------------
export default function HomeServices() {
  const { services, isLoading } = useServices();
  const [isHydrated, setIsHydrated] = useState(false);

  const {
    addItem,
    isInCart,
    getItemQuantity,
    incrementQuantity,
    decrementQuantity,
  } = useCartStore();

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.header
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-extrabold text-black mb-4">
            Core Services That Drive Results
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
            Choose the perfect service level for your business needs. From
            strategic guidance to full execution, we&apos;ve got you covered.
          </p>
        </motion.header>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mb-16">
          {services
            ?.filter((s) => s.type === "core")
            .slice(0, 3)
            .map((service, index, coreServices) => (
              <div
                key={service.id}
                className={
                  index === coreServices.length - 1
                    ? "sm:col-span-2 lg:col-span-1"
                    : ""
                }
              >
                <ServiceCard
                  service={service}
                  inCart={isHydrated ? isInCart(service.id) : false}
                  quantity={isHydrated ? getItemQuantity(service.id) : 0}
                  onAdd={() => addItem(service)}
                  onInc={() => incrementQuantity(service.id)}
                  onDec={() => decrementQuantity(service.id)}
                  isHydrated={isHydrated}
                  index={index}
                />
              </div>
            ))}
        </div>
      </div>
    </section>
  );
}
