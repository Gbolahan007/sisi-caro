"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const LogoCarousel = () => {
  const logoCount = 16;
  const logos = Array.from({ length: logoCount }, (_, i) => ({
    id: i + 1,
    src: `/logo-${i + 1}.jpg`,
    alt: `Logo ${i + 1}`,
  }));

  const headingVariants = {
    hidden: { y: 40, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 90,
        damping: 18,
        duration: 0.8,
        delay: 0.2,
      },
    },
  };

  return (
    <section className="bg-white py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={headingVariants}
        >
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-black">
            Clients We&apos;ve{" "}
            <span className="text-red-600 italic">Partnered</span> With
          </h2>
        </motion.div>

        {/* Carousel */}
        <div className="w-full overflow-hidden ">
          <div className="relative">
            <motion.div
              className="flex"
              animate={{ x: ["0%", "-50%"] }}
              transition={{
                duration: 60,
                repeat: Infinity,
                ease: "linear",
              }}
              style={{ width: "calc(200% + 16rem)" }}
            >
              {[...logos, ...logos].map((logo, index) => (
                <motion.div
                  key={index}
                  className="flex-shrink-0 mx-4 flex items-center justify-center"
                  whileHover={{ scale: 1.1, transition: { duration: 0.2 } }}
                >
                  <Image
                    src={logo.src}
                    alt={logo.alt}
                    width={180}
                    height={90}
                    className="h-28 w-auto object-contain opacity-70 hover:opacity-100 transition-opacity duration-300"
                  />
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LogoCarousel;
