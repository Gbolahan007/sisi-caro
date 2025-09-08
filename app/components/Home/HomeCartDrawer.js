"use client";

import useCartStore from "@/app/cartStore/store";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

export default function HomeCartDrawer({ open, onClose }) {
  const items = useCartStore((state) => state.items);
  const removeItem = useCartStore((state) => state.removeItem);
  const getCartTotal = useCartStore((state) => state.getCartTotal);

  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.4 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black z-40"
            onClick={onClose}
          />

          {/* Drawer */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25 }}
            className="fixed top-0 right-0 w-full h-full bg-white z-50 shadow-2xl flex flex-col border-2 border-red-700"
          >
            {/* Header */}
            <div className="p-6 border-b border-gray-200 flex justify-between items-center">
              <h2 className="text-lg font-bold text-black">Your Cart</h2>
              <button onClick={onClose} className="text-sm text-gray-600">
                Close
              </button>
            </div>

            {/* Cart Items */}
            <motion.div
              className="flex-1 overflow-y-auto p-6 space-y-4"
              initial="hidden"
              animate="visible"
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: { staggerChildren: 0.1 },
                },
              }}
            >
              {items.length === 0 ? (
                <p className="text-gray-500 text-sm">Your cart is empty.</p>
              ) : (
                items.map((item) => (
                  <motion.div
                    key={item.id}
                    variants={{
                      hidden: { opacity: 0, y: 20 },
                      visible: { opacity: 1, y: 0 },
                    }}
                    className="flex justify-between items-center border-b pb-3"
                  >
                    <div>
                      <h3 className="text-sm font-semibold text-black">
                        {item.name}
                      </h3>
                      <p className="text-xs text-gray-500">
                        {item.quantity} × {item.price}
                      </p>
                    </div>
                    <button
                      onClick={() => removeItem(item.id)}
                      className="text-xs text-red-500 hover:underline"
                    >
                      Remove
                    </button>
                  </motion.div>
                ))
              )}
            </motion.div>

            {/* Footer */}
            <div className="p-6 border-t border-gray-200">
              <div className="flex justify-between text-black font-semibold mb-4">
                <span>Total</span>
                <span>₦{getCartTotal().toLocaleString()}</span>
              </div>
              <Link
                href="/checkout"
                onClick={onClose}
                className="block w-full bg-black text-white text-center py-3 rounded-lg font-medium hover:bg-gray-800 transition"
              >
                Checkout
              </Link>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
