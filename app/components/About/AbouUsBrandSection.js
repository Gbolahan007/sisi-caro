"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const logos = Array.from({ length: 12 }, (_, i) => ({
  id: i + 1,
  src: `/logo-${i + 1}.jpg`,
  alt: `Logo ${i + 1}`,
}));

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { y: 30, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: "spring", stiffness: 70, damping: 14 },
  },
};

export default function AbouUsBrandSection() {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <motion.div
          className="mb-16"
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ type: "spring", stiffness: 90, damping: 16 }}
        >
          <h2 className="text-4xl font-bold text-black mb-4">
            Brands We Work With
          </h2>
        </motion.div>

        {/* Logos */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {logos.map((logo) => (
            <motion.div
              key={logo.id}
              className="flex items-center justify-center p-4"
              variants={itemVariants}
            >
              <Image
                src={logo.src}
                alt={logo.alt}
                width={140}
                height={70}
                className="h-36 w-auto object-contain opacity-60 hover:opacity-100 transition-opacity"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
