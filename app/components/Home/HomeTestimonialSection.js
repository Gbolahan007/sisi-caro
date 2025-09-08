"use client";

import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

const testimonials = [
  {
    id: 1,
    name: "SARAH MARTINEZ",
    title: "Director of Marketing, TechFlow Solutions",
    company: "ECOMMERCE TECH",
    content:
      "Sisicaro is one of the leading agencies in Digital Marketing. We hold a close partnership with the team who are constantly at the forefront of the developments in our fast-paced industry. I am highly appreciative of both their expertise and their results-driven mindset.",
    rating: 5,
    avatar: "SM",
  },
  {
    id: 2,
    name: "MICHAEL CHEN",
    title: "CEO & Founder, GrowthLab",
    company: "STARTUP ACCELERATOR",
    content:
      "The Digital Marketing team at Sisicaro provided exceptional strategic guidance for our product launch. Their innovative approach to social media campaigns and SEO optimization helped us achieve 300% growth in our first quarter. We highly recommend Sisicaro's expertise to anyone looking to scale their digital presence.",
    rating: 5,
    avatar: "MC",
  },
  {
    id: 3,
    name: "EMMA THOMPSON",
    title: "VP of Brand Strategy, RetailMax",
    company: "RETAIL INNOVATION",
    content:
      "Working with Sisicaro transformed our entire digital marketing approach. Their data-driven strategies and creative campaigns delivered outstanding ROI across all channels. The team's deep understanding of consumer behavior and market trends made them an invaluable partner in our digital transformation journey.",
    rating: 5,
    avatar: "ET",
  },
];

export default function HomeTestimonialSection() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  const current = testimonials[currentTestimonial];

  return (
    <div className="min-h-screen mt-6 bg-black text-white relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5"></div>
      <section className="min-h-screen flex flex-col justify-center  p-6 lg:p-16 relative z-10">
        {/* Heading */}
        <motion.div
          className="text-center mb-8 lg:mb-11"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="w-12 h-0.5 bg-gradient-to-r from-transparent to-red-600"></div>
            <motion.span
              className="text-red-500 font-medium tracking-wider text-sm uppercase"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              What our clients say
            </motion.span>

            <div className="w-12 h-0.5 bg-gradient-to-l from-transparent to-red-600"></div>
          </div>
          <motion.h1
            className="text-5xl lg:text-7xl xl:text-8xl font-bold mb-4 tracking-tight bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            OUR TESTIMONIALS
          </motion.h1>

          <motion.p
            className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            Discover how we&apos;ve helped businesses transform their digital
            presence and achieve remarkable growth.
          </motion.p>
        </motion.div>

        {/* Main testimonial */}
        <div className="flex-1 flex flex-col items-center justify-center">
          <div className="max-w-5xl w-full">
            <div className="relative p-4 lg:p-10 ">
              <motion.div
                className="flex justify-center mb-5 "
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
              >
                <motion.div
                  initial={{ opacity: 0, y: 60 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.5, ease: "easeOut" }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-br from-red-600 to-red-700 p-4 rounded-2xl shadow-lg"
                >
                  <Quote className="w-8 h-8 text-white" />
                </motion.div>
              </motion.div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={current.id}
                  className="text-center"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -30 }}
                  transition={{ duration: 0.6 }}
                >
                  <motion.div
                    initial={{ opacity: 0, y: 60 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.5, ease: "easeOut" }}
                    viewport={{ once: true }}
                    className="text-2xl lg:text-4xl xl:text-5xl font-light leading-relaxed tracking-wide text-white mb-10"
                  >
                    {current.content}
                  </motion.div>

                  <motion.h3
                    initial={{ opacity: 0, y: 60 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.5, ease: "easeOut" }}
                    viewport={{ once: true }}
                    className="text-2xl lg:text-3xl font-bold mb-2 tracking-tight text-white"
                  >
                    {current.name}
                  </motion.h3>
                  <motion.p
                    initial={{ opacity: 0, y: 60 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.5, ease: "easeOut" }}
                    viewport={{ once: true }}
                    className="text-gray-300 text-lg mb-4"
                  >
                    {current.title}
                  </motion.p>
                  <motion.div
                    initial={{ opacity: 0, y: 60 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.5, ease: "easeOut" }}
                    viewport={{ once: true }}
                    className="inline-flex items-center gap-3"
                  >
                    <span className="text-gray-400 text-sm">at</span>
                    <span className="bg-gradient-to-r from-red-600 to-red-700 text-white px-6 py-2 text-sm font-semibold uppercase tracking-wider rounded-full shadow-lg">
                      {current.company}
                    </span>
                  </motion.div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <motion.div
          className="mt-16"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex justify-center items-center gap-8">
            <Button
              variant="ghost"
              onClick={prevTestimonial}
              className="group text-gray-400 hover:text-white transition-all duration-300 hover:bg-white/10 rounded-full p-4"
            >
              <ChevronLeft className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" />
              <span className="font-medium">Previous</span>
            </Button>

            <div className="flex gap-3">
              {testimonials.map((t, index) => (
                <button
                  key={t.id}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`relative h-3 rounded-full transition-all duration-500 ${
                    index === currentTestimonial
                      ? "bg-red-600 w-12 shadow-lg shadow-red-600/30"
                      : "bg-gray-600 w-3 hover:bg-gray-400"
                  }`}
                >
                  {index === currentTestimonial && (
                    <div className="absolute inset-0 bg-red-400 rounded-full animate-pulse"></div>
                  )}
                </button>
              ))}
            </div>

            <Button
              variant="ghost"
              onClick={nextTestimonial}
              className="group text-gray-400 hover:text-white transition-all duration-300 hover:bg-white/10 rounded-full p-4"
            >
              <span className="font-medium">Next</span>
              <ChevronRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
