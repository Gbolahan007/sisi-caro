"use client";
import Image from "next/image";
import { motion } from "framer-motion";

const HomeAboutUs = () => {
  const imageVariants = {
    hidden: { y: 60, opacity: 0, scale: 0.95 },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 90,
        damping: 18,
        delay: 0.3,
      },
    },
  };

  const textElementVariants = {
    hidden: { y: 40, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 90,
        damping: 18,
        duration: 0.8,
      },
    },
  };

  // Button animation
  const buttonVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 18,
        duration: 0.8,
      },
    },
  };

  return (
    <section className="py-8 md:py-10 lg:py-12 px-4 bg-white mt-10 ">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 lg:gap-12 items-center">
          {/* Image Section */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={imageVariants}
            className="order-1 h-full"
          >
            <div className="relative h-[280px] sm:h-[350px] md:h-[400px] lg:h-[400px] w-full">
              <Image
                src="/why.jpg"
                alt="Sisi Caro Digital Marketing Team"
                fill
                className="object-cover rounded-2xl"
                sizes="(max-width: 640px) 100vw, (max-width: 1200px) 50vw, 50vw"
              />
            </div>
          </motion.div>

          {/* Content Section */}
          <div className="order-2 h-full">
            <div className="h-full flex flex-col justify-center space-y-4 md:space-y-5">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.8 }}
                variants={textElementVariants}
              >
                <div className="inline-flex items-center bg-red-50 border border-red-100 px-4 py-2 rounded-full mb-2">
                  <div className="w-2 h-2 bg-red-600 rounded-full mr-2"></div>
                  <span className="text-sm font-medium text-red-700 uppercase tracking-wide">
                    Why Choose Us
                  </span>
                </div>
              </motion.div>

              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.8 }}
                variants={textElementVariants}
              >
                <h2 className="text-xl sm:text-xl md:text-2xl lg:text-3xl font-bold text-black leading-tight">
                  Building Stronger Brands with
                  <span className="text-red-600 block mt-2">
                    Digital Strategy
                  </span>
                </h2>
              </motion.div>

              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.8 }}
                variants={textElementVariants}
              >
                <p className="text-base sm:text-lg md:text-xl font-medium text-gray-800">
                  At <strong className="text-red-600">Sisi Caro</strong>, we
                  help Nigerian entrepreneurs grow through smart digital
                  marketing that delivers measurable results.
                </p>
              </motion.div>

              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.8 }}
                variants={textElementVariants}
              >
                <p className="text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed">
                  We go beyond visibility — giving your brand clarity,
                  structure, and content that drives real growth. No more doing
                  plenty and seeing little.
                </p>
              </motion.div>

              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.8 }}
                variants={buttonVariants}
                className="pt-4"
              >
                <button
                  onClick={() => (window.location.href = "/about")}
                  className="group relative inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base md:text-lg font-medium text-white bg-black hover:bg-red-600 rounded-xl shadow-lg hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 ease-out w-full sm:w-auto"
                >
                  <span className="relative">Learn More</span>
                  <svg
                    className="w-4 h-4 sm:w-5 sm:h-5 ml-2 sm:ml-3 group-hover:translate-x-1 transition-transform duration-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </button>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeAboutUs;
