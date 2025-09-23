"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import HeroSection from "./components/Home/HeroSection";
import LogoCarousel from "./components/Home/LogoCarousel";
import HomeAboutUs from "./components/Home/HomeAboutUs";
import HomeTestimonialSection from "./components/Home/HomeTestimonialSection";
import Footer from "./components/Home/Footer";
import HomeServicePage from "./components/Home/HomeServicePage";
import HomeMarketSection from "./components/Home/HomeMarketSection";
import useCartStore from "./cartStore/store";

export default function Page() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const clearCart = useCartStore((state) => state.clearCart);
  const [isVerifying, setIsVerifying] = useState(false);

  useEffect(() => {
    const reference =
      searchParams.get("reference") ||
      searchParams.get("trxref") ||
      searchParams.get("transaction_id");

    const status = searchParams.get("status");

    if (!reference || isVerifying) return;

    const verifyPayment = async () => {
      setIsVerifying(true);

      try {
        toast.loading("Verifying payment...", { id: "payment-verification" });

        const res = await fetch("/api/payments/verify", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ reference }),
        });

        if (!res.ok) {
          throw new Error(`HTTP ${res.status}: ${res.statusText}`);
        }

        const data = await res.json();

        if (data.success) {
          clearCart();
          toast.success("Payment successful! 🎉", {
            id: "payment-verification",
          });

          setTimeout(() => {
            router.replace("/", undefined, { shallow: true });
          }, 2000);
        } else {
          toast.error(data.message || "Payment verification failed. ❌", {
            id: "payment-verification",
          });

          setTimeout(() => {
            router.replace("/", undefined, { shallow: true });
          }, 3000);
        }
      } catch (error) {
        toast.error("Something went wrong verifying payment ⚠️", {
          id: "payment-verification",
        });

        setTimeout(() => {
          router.replace("/", undefined, { shallow: true });
        }, 3000);
      } finally {
        setIsVerifying(false);
      }
    };

    verifyPayment();
  }, [searchParams, router, clearCart, isVerifying]);

  return (
    <div className="min-h-screen text-black bg-white overflow-x-hidden">
      {isVerifying && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <div className="flex items-center space-x-3">
              <div className="w-6 h-6 border-2 border-red-500 border-t-transparent rounded-full animate-spin"></div>
              <span>Verifying your payment...</span>
            </div>
          </div>
        </div>
      )}

      <HeroSection />
      <LogoCarousel />
      <HomeAboutUs />
      <HomeServicePage />
      <HomeMarketSection />
      <HomeTestimonialSection />
    </div>
  );
}
