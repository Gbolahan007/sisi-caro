"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

export default function PaymentCancelPage() {
  const router = useRouter();

  useEffect(() => {
    toast.error("Payment cancelled. You can try again anytime.", {
      duration: 4000,
      icon: "❌",
    });

    const timeout = setTimeout(() => {
      router.replace("/");
    }, 2000);

    return () => clearTimeout(timeout);
  }, [router]);

  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-4">
      <div className="text-center max-w-md mx-auto">
        <div className="mb-6">
          <div className="mx-auto w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-4">
            <svg
              className="w-8 h-8 text-red-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </div>
          <h1 className="text-2xl font-bold text-black mb-2">
            Payment Cancelled
          </h1>
          <p className="text-gray-700 mb-6">
            Don&apos;t worry! Your items are still in your cart. You can
            complete your purchase anytime.
          </p>
        </div>

        <div className="space-y-3">
          <button
            onClick={() => router.push("/")}
            className="w-full bg-red-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-red-700 transition-colors"
          >
            Return to Homepage
          </button>

          {/* Primary button (black & white) */}
          <button
            onClick={() => router.push("/cart")}
            className="w-full bg-black text-white py-3 px-6 rounded-lg font-semibold hover:bg-gray-900 transition-colors"
          >
            View Cart
          </button>
        </div>

        <p className="text-sm text-gray-500 mt-6">
          Redirecting to homepage in a few seconds...
        </p>
      </div>
    </div>
  );
}
