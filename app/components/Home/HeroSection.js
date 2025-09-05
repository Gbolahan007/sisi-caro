"use client";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Poppins, Kaushan_Script } from "next/font/google";

const poppins = Poppins({
  weight: ["400", "600", "700"],
  subsets: ["latin"],
});

const kau = Kaushan_Script({
  weight: "400",
  subsets: ["latin"],
});

export default function HeroSection() {
  return (
    <section
      className={`relative min-h-screen text-white flex items-center justify-center ${poppins.className}`}
    >
      {/* Background Pattern */}
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

        <div className="absolute inset-0 bg-black/30"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto mt-4 px-4 sm:px-6 lg:px-8 text-center sm:mt-14">
        {/* Main Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 leading-tight"
        >
          Scale Your Brand with
          <span className="block">
            <span className="bg-gradient-to-r from-red-500 via-red-600 to-red-700 bg-clip-text text-transparent">
              Digital Excellence
            </span>
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className={`${kau.className} text-2xl sm:text-3xl lg:text-4xl mb-6 text-white/90`}
        >
          Marketing • Websites • Brand Development
        </motion.h2>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-base sm:text-lg lg:text-xl mb-12 max-w-3xl mx-auto leading-relaxed text-white/80"
        >
          We help Nigerian entrepreneurs transform digital strategies into
          powerful growth engines — giving them clarity, structure, and results
          that scale.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center sm:mb-8"
        >
          {/* Primary CTA */}
          <motion.button
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="group bg-gradient-to-r from-red-500 via-red-600 to-red-700 hover:from-red-600 hover:via-red-700 hover:to-red-800 text-white font-semibold px-8 py-4 rounded-xl text-lg shadow-2xl hover:shadow-red-500/25 transition-all duration-300 flex items-center space-x-2"
            aria-label="Start free strategy call"
          >
            <span>Book a 15 Minutes Call</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="group bg-white text-black hover:text-red-500 font-medium px-6 py-4 rounded-xl text-lg border-2 border-white hover:border-red-500/50 transition-all duration-300"
            aria-label="Explore services"
          >
            Explore Our Services
          </motion.button>
        </motion.div>
      </div>

      {/* Floating Elements */}
      <motion.div
        animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 left-10 w-20 h-20 bg-red-500/10 rounded-full blur-xl"
      />

      <motion.div
        animate={{ y: [0, 30, 0], rotate: [0, -5, 0] }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
        className="absolute bottom-1/4 right-10 w-32 h-32 bg-white/5 rounded-full blur-2xl"
      />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-14 sm:bottom-4 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-3 bg-red-500 rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
