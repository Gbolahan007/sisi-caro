"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Poppins, Kaushan_Script } from "next/font/google";
import Link from "next/link";

const poppins = Poppins({
  weight: ["400", "600", "700", "800"],
  subsets: ["latin"],
});

const kau = Kaushan_Script({
  weight: "400",
  subsets: ["latin"],
});

export default function AboutHeroSection() {
  return (
    <section
      className={`relative min-h-[80vh] text-white flex items-center justify-center ${poppins.className}`}
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black">
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: "url('/about-us.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        ></div>
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto mt-6 px-4 sm:px-6 lg:px-8 text-center sm:mt-20">
        {/* Main Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-4xl sm:text-[2.5rem] md:text-[3rem] lg:text-6xl font-extrabold mb-6 leading-tight tracking-tight"
        >
          About{" "}
          <span className="bg-gradient-to-r from-red-500 via-red-600 to-red-700 bg-clip-text text-transparent">
            Sisicaro
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className={`${kau.className} text-xl sm:text-[1.6rem] md:text-[1.8rem] lg:text-3xl mb-6 text-white/90`}
        >
          Who We Are & What Drives Us
        </motion.h2>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-base sm:text-lg md:text-xl lg:text-xl mb-12 max-w-3xl mx-auto leading-relaxed text-white/80"
        >
          Sisicaro is more than a digital marketing agency. We are a team
          committed to helping businesses spark growth, elevate their brands,
          and achieve measurable success through innovative strategies built for
          today’s digital-first world.
        </motion.p>

        {/* Single CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex justify-center items-center"
        >
          <Link href="/contact">
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="group bg-gradient-to-r from-red-500 via-red-600 to-red-700 hover:from-red-600 hover:via-red-700 hover:to-red-800 text-white font-semibold px-8 py-4 rounded-sm text-lg sm:text-xl shadow-2xl hover:shadow-red-500/25 transition-all duration-300 flex items-center space-x-2"
              aria-label="Contact Sisicaro"
            >
              <span>Get In Touch</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
