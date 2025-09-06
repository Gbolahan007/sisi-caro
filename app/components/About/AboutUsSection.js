"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function AboutUsSection() {
  return (
    <section className="py-20 mt-5 bg-white">
      <div className="max-w-6xl mx-auto mt-5 px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-stretch ">
          <motion.div
            className="relative h-full flex"
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <Image
              src="/siss.jpg"
              alt="Sisicaro team working together"
              width={600}
              height={500}
              className="rounded-lg shadow-lg object-cover w-full h-auto md:h-full"
            />
          </motion.div>

          <motion.div
            className="space-y-6 flex flex-col justify-center"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            {/* Heading */}
            <motion.h2
              className="text-4xl font-bold text-black mb-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              About <span className="text-red-600 italic">Sisicaro</span>
            </motion.h2>

            {/* Paragraphs */}
            {[
              "At Sisicaro, we’re passionate about helping businesses thrive in the digital space. Our team blends creativity, data-driven insights, and cutting-edge technology to deliver strategies that actually move the needle.",
              "Built on the principles of transparency, innovation, and client success, we’ve helped businesses transform their online presence and achieve sustainable growth through powerful digital campaigns.",
              "Beyond just marketing, we act as long-term partners — equipping brands with the tools, knowledge, and strategies they need to stay competitive in a fast-changing digital world.",
            ].map((text, index) => (
              <motion.p
                key={index}
                className="text-lg text-black leading-relaxed"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.2,
                  ease: "easeOut",
                }}
                viewport={{ once: true }}
              >
                {text}
              </motion.p>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
