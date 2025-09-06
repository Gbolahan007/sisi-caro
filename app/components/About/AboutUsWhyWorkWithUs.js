"use client";

import React from "react";
import { motion } from "framer-motion";
import { Users, DollarSign, LayoutGrid, Activity } from "lucide-react";
import { Montserrat } from "next/font/google"; // ✅ Import font

// Load Montserrat
const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["600", "700"], // Semi-bold & Bold for headings
});

const features = [
  {
    icon: Users,
    title: "Precise Audience Targeting",
    description:
      "Sisicaro helps businesses reach the right people with precision — ensuring your marketing speaks directly to the audiences that matter most.",
  },
  {
    icon: DollarSign,
    title: "Cost-Effective Customer Acquisition",
    description:
      "We provide smart, affordable strategies that minimize wasted ad spend while maximizing customer acquisition and business growth.",
  },
  {
    icon: LayoutGrid,
    title: "Enhanced User Interfaces & Experiences",
    description:
      "We design and optimize user-friendly interfaces that keep visitors engaged, improve conversions, and deliver a seamless digital experience.",
  },
  {
    icon: Activity,
    title: "Leveraging User Behavior Insights",
    description:
      "Sisicaro uses real-time data and behavioral insights to personalize campaigns, build loyalty, and increase lifetime customer value.",
  },
];

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
  hidden: { y: 40, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: "spring", stiffness: 90, damping: 18 },
  },
};

export default function AboutUsWhyWorkWithUs() {
  return (
    <section className="py-20 px-6 bg-white">
      <motion.div
        className="mb-12"
        initial={{ y: 40, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ type: "spring", stiffness: 90, damping: 16 }}
      >
        <h2
          className={`text-3xl font-bold text-gray-900 mb-4 ${montserrat.className}`}
        >
          Our Solution
        </h2>
        <p className="text-lg text-gray-700 leading-relaxed">
          At <span className="text-red-600 italic">Sisicaro</span>, our mission
          is to solve the challenges businesses face in acquiring, engaging,
          retaining, and scaling their users across digital platforms. Too
          often, companies struggle due to unreliable partners and wasted
          budgets on vanity marketing that ignores meaningful data.
        </p>
        <p className="text-lg text-gray-700 leading-relaxed mt-4">
          We tackle this by focusing on strategies that prioritize measurable
          growth, actionable insights, and sustainable results.
        </p>
      </motion.div>

      <div className="max-w-6xl mx-auto">
        {/* Cards Grid */}
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-10"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="p-8 border-l-2 border-gray-300 hover:border-red-600 "
              variants={itemVariants}
            >
              <div className="flex items-center mb-4">
                <feature.icon className="w-7 h-7 text-red-600 mr-3" />
                <h2
                  className={`text-xl font-semibold text-gray-900 ${montserrat.className}`}
                >
                  {feature.title}
                </h2>
              </div>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom Section */}
        <motion.div
          className="mt-16 p-8 bg-gray-50 border-l-4 border-gray-300 hover:border-red-600 transition-colors rounded-md shadow-sm"
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ type: "spring", stiffness: 90, damping: 16 }}
        >
          <p className="text-gray-700 leading-relaxed">
            <strong className="text-gray-900 font-semibold">
              Through data-driven strategies and an agile approach,
            </strong>{" "}
            Sisicaro is committed to transforming digital marketing
            inefficiencies, helping businesses grow faster and maximize their
            return on investment.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
