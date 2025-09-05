"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import useCartStore from "./store";
import { useEffect, useState } from "react";

const mobileMenuVariants = {
  closed: { x: "100%", opacity: 0 },
  open: {
    x: "0%",
    opacity: 1,
    transition: { type: "spring", stiffness: 400, damping: 40 },
  },
};

const overlayVariants = {
  closed: { opacity: 0, transition: { duration: 0.2 } },
  open: { opacity: 1, transition: { duration: 0.3 } },
};

export default function CartDrawer({ open, setOpen }) {
  const items = useCartStore((state) => state.items);
  const getCartTotal = useCartStore((state) => state.getCartTotal);
  const getItemCount = useCartStore((state) => state.getItemCount);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Format currency with thousands separator
  const formatCurrency = (amount) => {
    return new Intl.NumberFormat("en-NG", {
      style: "currency",
      currency: "NGN",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
  };

  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Overlay */}
          <motion.div
            variants={overlayVariants}
            initial="closed"
            animate="open"
            exit="closed"
            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40"
            onClick={() => setOpen(false)}
          />

          {/* Drawer */}
          <motion.div
            variants={mobileMenuVariants}
            initial="closed"
            animate="open"
            exit="closed"
            className="fixed top-0 right-0 h-full w-96 max-w-[90vw] bg-white shadow-2xl z-50 border-l border-gray-100 p-6 flex flex-col"
          >
            {/* Header */}
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-semibold">Your Cart</h2>
              <button
                onClick={() => setOpen(false)}
                className="p-2 text-gray-600 hover:bg-gray-100 rounded-lg"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Items */}
            <div className="flex-1 overflow-y-auto space-y-4">
              {!mounted ? (
                <p className="text-gray-500">Loading cart...</p>
              ) : items.length === 0 ? (
                <p className="text-gray-500">Your cart is empty.</p>
              ) : (
                items.map((item) => (
                  <div
                    key={item.id}
                    className="flex items-center justify-between border-b border-gray-100 pb-2"
                  >
                    <div>
                      <h4 className="font-medium">{item.title}</h4>
                      <p className="text-sm text-gray-600">
                        {item.quantity} × {item.price}
                      </p>
                    </div>
                    <span className="font-semibold">
                      {formatCurrency(
                        Number(item.price.replace(/[₦,]/g, "")) * item.quantity
                      )}
                    </span>
                  </div>
                ))
              )}
            </div>

            {/* Cart Summary & Checkout */}
            {mounted && items.length > 0 && (
              <div className="mt-6 border-t pt-4 space-y-4">
                {/* Cart Summary */}
                <div className="space-y-2">
                  <div className="flex justify-between text-sm text-gray-600">
                    <span>Items ({getItemCount()})</span>
                    <span>{formatCurrency(getCartTotal())}</span>
                  </div>

                  <div className="border-t pt-2">
                    <div className="flex justify-between font-semibold text-lg">
                      <span>Total</span>
                      <span>{formatCurrency(getCartTotal())}</span>
                    </div>
                  </div>
                </div>

                {/* Checkout Button */}
                <button className="w-full bg-black text-white py-3 rounded-lg font-medium hover:bg-gray-900 transition">
                  Checkout • {formatCurrency(getCartTotal())}
                </button>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
