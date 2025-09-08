"use client";

import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { Kaushan_Script } from "next/font/google";
import { usePathname } from "next/navigation";

const kau = Kaushan_Script({ weight: "400", subsets: ["latin"] });

const mobileMenuVariants = {
  closed: { x: "100%", opacity: 0 },
  open: {
    x: "0%",
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 120,
      damping: 20,
      mass: 0.8,
    },
  },
};

const overlayVariants = {
  closed: { opacity: 0, transition: { duration: 0.2 } },
  open: { opacity: 1, transition: { duration: 0.3 } },
};

export default function MobileMenu({ open, setOpen }) {
  const pathname = usePathname();

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/services", label: "Services" },
    { href: "/contact", label: "Contact" },
  ];

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
            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40 lg:hidden"
            onClick={() => setOpen(false)}
          />

          {/* Drawer */}
          <motion.div
            variants={mobileMenuVariants}
            initial="closed"
            animate="open"
            exit="closed"
            className="fixed top-0 right-0 h-full w-full sm:w-96 sm:max-w-[95vw] bg-white shadow-2xl z-50 lg:hidden border-l border-gray-100 flex flex-col"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-100">
              <span
                className={`${kau.className} text-lg text-black font-medium`}
              >
                Sisicaro Creative
              </span>
              <button
                onClick={() => setOpen(false)}
                className="p-2 text-black hover:bg-black/5 rounded-lg"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Nav + CTA */}
            <ul className="flex-1 py-8 space-y-2">
              {navItems.map((item, index) => (
                <li key={index}>
                  <Link
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className={`block mx-4 px-6 py-4 font-medium hover:bg-black hover:text-white rounded-xl transition-all ${
                      pathname === item.href
                        ? "bg-black text-white"
                        : "text-black"
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}

              {/* CTA */}
              <li>
                <div className="mt-8 mx-4 p-6 bg-black/5 rounded-xl border border-gray-100">
                  <h3 className="text-sm font-semibold text-black mb-2">
                    Ready to Grow?
                  </h3>
                  <p className="text-xs text-gray-600 mb-4">
                    Get a free digital marketing consultation
                  </p>
                  <Link
                    href="/get-started"
                    onClick={() => setOpen(false)}
                    className="block w-full bg-red-500 text-white text-center py-3 rounded-lg font-medium transition-all duration-300 hover:bg-red-600 hover:shadow-lg"
                  >
                    Start Your Journey
                  </Link>
                </div>
              </li>
            </ul>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
