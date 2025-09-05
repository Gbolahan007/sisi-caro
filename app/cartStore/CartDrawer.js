"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, Plus, Minus, Trash2 } from "lucide-react";
import useCartStore from "./store";
import { useEffect, useState } from "react";

export default function CartDrawer({ open, setOpen }) {
  const items = useCartStore((state) => state.items);
  const getCartTotal = useCartStore((state) => state.getCartTotal);
  const getItemCount = useCartStore((state) => state.getItemCount);
  const incrementQuantity = useCartStore((state) => state.incrementQuantity);
  const decrementQuantity = useCartStore((state) => state.decrementQuantity);
  const removeItem = useCartStore((state) => state.removeItem);
  const clearCart = useCartStore((state) => state.clearCart);
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const formatCurrency = (amount) =>
    new Intl.NumberFormat("en-NG", {
      style: "currency",
      currency: "NGN",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);

  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40"
            onClick={() => setOpen(false)}
          />

          {/* Drawer */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ ease: "easeInOut", duration: 0.5 }}
            className="fixed top-0 right-0 h-full w-96 max-w-[90vw] bg-white shadow-2xl z-50 border-l border-gray-100 flex flex-col"
          >
            {/* Header */}
            <div className="flex justify-between items-center px-6 py-4 border-b">
              <h2 className="text-lg font-semibold">Your Cart</h2>
              <button
                onClick={() => setOpen(false)}
                className="p-2 text-gray-600 hover:bg-gray-100 rounded-lg"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Cart Items */}
            <div className="flex-1 overflow-y-auto px-6 py-4 space-y-4">
              {!mounted ? (
                <p className="text-gray-500">Loading cart...</p>
              ) : items.length === 0 ? (
                <div className="text-center text-gray-500 py-12">
                  <span className="text-4xl mb-2 block">🛒</span>
                  <p>Your cart is empty</p>
                </div>
              ) : (
                items.map((item) => (
                  <div
                    key={item.id}
                    className="flex justify-between items-center border border-gray-100 rounded-xl p-4 bg-gray-50"
                  >
                    <div className="flex flex-col flex-1 min-w-0">
                      <h4 className="font-medium text-gray-900 truncate">
                        {item.title}
                      </h4>

                      <div className="flex items-center gap-2 mt-2">
                        <button
                          onClick={() => decrementQuantity(item.id)}
                          className="w-8 h-8 flex items-center justify-center bg-white border border-gray-300 rounded-full hover:bg-gray-100 disabled:opacity-40"
                          disabled={item.quantity <= 1}
                        >
                          <Minus className="w-4 h-4" />
                        </button>
                        <span className="min-w-[24px] text-center font-medium">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => incrementQuantity(item.id)}
                          className="w-8 h-8 flex items-center justify-center bg-white border border-gray-300 rounded-full hover:bg-gray-100"
                        >
                          <Plus className="w-4 h-4" />
                        </button>
                      </div>
                    </div>

                    {/* Right side: Price + Remove */}
                    <div className="flex items-center gap-4">
                      <div className="text-right">
                        <span className="font-semibold text-gray-900">
                          {formatCurrency(
                            Number(item.price.replace(/[₦,]/g, "")) *
                              item.quantity
                          )}
                        </span>
                      </div>

                      <button
                        onClick={() => removeItem(item.id)}
                        className="w-8 h-8 flex items-center justify-center text-red-600 hover:bg-red-50 rounded-full"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                ))
              )}
            </div>

            {/* Footer */}
            {mounted && items.length > 0 && (
              <div className="border-t px-6 py-4 space-y-4">
                <div className="flex justify-between text-sm text-gray-600">
                  <span>Items ({getItemCount()})</span>
                  <span>{formatCurrency(getCartTotal())}</span>
                </div>
                <div className="flex justify-between font-semibold text-lg">
                  <span>Total</span>
                  <span>{formatCurrency(getCartTotal())}</span>
                </div>

                {/* Clear All Button */}
                <button
                  onClick={clearCart}
                  className="w-full bg-red-50 text-red-600 py-3 rounded-lg font-medium hover:bg-red-100"
                >
                  Clear All
                </button>

                {/* Checkout Button */}
                <button className="w-full bg-black text-white py-3 rounded-lg font-medium hover:bg-gray-900">
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
