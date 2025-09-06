"use client";

import Link from "next/link";
import { Users, DollarSign, Award, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const features = [
  {
    icon: Users,
    title: "Client Focused",
    description:
      "At Sisicaro, we take an innovative, tailored approach to every brand we partner with. Your passion drives our strategy, ensuring solutions that align perfectly with your goals.",
    gradient: "from-blue-500 to-purple-600",
    bgGradient: "from-blue-50 to-purple-50",
    hoverShadow: "hover:shadow-blue-200/25",
  },
  {
    icon: DollarSign,
    title: "Affordable Growth",
    description:
      "We believe marketing should be accessible. Our packages are designed to help even the smallest businesses succeed with smart targeting, remarketing, and cross-channel campaigns.",
    gradient: "from-green-500 to-emerald-600",
    bgGradient: "from-green-50 to-emerald-50",
    hoverShadow: "hover:shadow-green-200/25",
  },
  {
    icon: Award,
    title: "Proven Expertise",
    description:
      "Our team brings years of experience, delivering creative solutions backed by transparency, insights, and a deep commitment to your success.",
    gradient: "from-orange-500 to-red-600",
    bgGradient: "from-orange-50 to-red-50",
    hoverShadow: "hover:shadow-orange-200/25",
  },
];

export default function AboutUsWhyWorkWithUs() {
  return (
    <section className="py-16 md:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 via-white to-gray-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full blur-3xl transform translate-x-1/2 translate-y-1/2"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Heading */}
        <motion.div
          className="text-center mb-12 md:mb-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center justify-center px-4 py-2 bg-gradient-to-r from-red-100 to-red-200 rounded-full text-sm font-medium text-gray-700 mb-4 md:mb-6">
            <Award className="w-4 h-4 mr-2 text-red-600" />
            Why Choose Sisicaro
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 md:mb-6 leading-tight">
            Why Work With <span className="text-red-600 italic">Sisicaro</span>
          </h2>
          <motion.p
            className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            Discover what sets us apart and why businesses choose us to power
            their digital growth and transformation journey.
          </motion.p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 lg:gap-10">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className={`group relative bg-white rounded-2xl p-6 md:p-6 lg:p-10 shadow-lg hover:shadow-2xl ${feature.hoverShadow} hover:-translate-y-2 transition-all duration-500 border border-gray-100 hover:border-white overflow-hidden`}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: index * 0.15,
                ease: "easeOut",
              }}
              viewport={{ once: true }}
            >
              {/* Background Gradient Overlay */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${feature.bgGradient} opacity-0 group-hover:opacity-50 transition-opacity duration-500 rounded-2xl`}
              ></div>

              {/* Content */}
              <div className="relative z-10">
                {/* Icon */}
                <div className="relative mb-4 md:mb-6">
                  <div
                    className={`flex items-center justify-center w-14 h-14 md:w-16 md:h-16 lg:w-20 lg:h-20 rounded-xl bg-gradient-to-br ${feature.gradient} shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-300 mx-auto`}
                  >
                    <feature.icon className="w-7 h-7 md:w-8 md:h-8 lg:w-10 lg:h-10 text-white" />
                  </div>
                  <div
                    className={`absolute inset-0 w-14 h-14 md:w-16 md:h-16 lg:w-20 lg:h-20 rounded-xl bg-gradient-to-br ${feature.gradient} opacity-20 scale-150 group-hover:scale-125 transition-transform duration-700 mx-auto`}
                  ></div>
                </div>

                {/* Title */}
                <h3 className="text-lg md:text-xl lg:text-2xl font-bold text-gray-900 mb-2 md:mb-3 text-center group-hover:text-gray-800 transition-colors duration-300">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 text-center text-sm md:text-sm lg:text-base mb-4 md:mb-6 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                  {feature.description}
                </p>

                {/* Learn More */}
                <div className="flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Link
                    href="/contact"
                    className="text-sm font-medium text-gray-500 group-hover:text-red-600 flex items-center"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform duration-300" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          className="text-center mt-12 md:mt-20 "
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <div className="inline-flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 ">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <Link
                href="/services"
                className="px-8 py-4 bg-white border-2 border-red-600 text-red-600 font-semibold rounded-full hover:bg-red-50 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Start Your Journey
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <Link
                href="/contact"
                className="px-8 py-4 border-2 border-gray-300 text-gray-700 font-semibold rounded-full hover:border-gray-400 hover:bg-gray-50 transition-all duration-300"
              >
                Learn more about us
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
