"use client";

import { useParams } from "next/navigation";
import { useServices } from "@/app/Queryhooks/useServices";
import useCartStore from "@/app/cartStore/store";
import toast from "react-hot-toast";
import ServiceHero from "../ServiceHero";
import ServiceContent from "../ServiceContent";

export default function ServiceDetailPage() {
  const params = useParams();
  const { services, isLoading } = useServices();
  const service = services?.find((s) => s.slug === params.id);
  const { addItem } = useCartStore();

  const handleSubscribe = (e) => {
    e.preventDefault();
    addItem(service);
    toast.success(`${service.title} added to cart 🎉`, {
      position: "top-right",
    });
  };

  if (isLoading) {
    return (
      <>
        <section className="relative h-screen bg-gray-200 animate-pulse" />
        <section className="max-w-7xl mx-auto px-6 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="w-full aspect-square bg-gray-200 rounded-2xl animate-pulse" />
            <div className="space-y-4">
              <div className="h-8 w-3/4 bg-gray-200 rounded animate-pulse" />
              <div className="h-6 w-1/3 bg-gray-200 rounded animate-pulse" />
              <div className="h-20 w-full bg-gray-200 rounded animate-pulse" />
              <div className="h-10 w-40 bg-gray-300 rounded-lg animate-pulse" />
            </div>
          </div>
        </section>
      </>
    );
  }

  if (!service) {
    return (
      <div className="text-center py-20 text-gray-600">
        Service not found ❌
      </div>
    );
  }

  return (
    <>
      <ServiceHero service={service} onSubscribe={handleSubscribe} />
      <ServiceContent service={service} onSubscribe={handleSubscribe} />
    </>
  );
}
