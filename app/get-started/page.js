"use client";

import { motion } from "framer-motion";
import { CheckCircle, Clock, MessageSquare, Target, Users } from "lucide-react";
import Image from "next/image";
import "react-day-picker/dist/style.css";
import { DateScheduler } from "../components/Home/DateScheduler";

export default function GetStartedPage() {
  return (
    <div className="bg-white overflow-x-hidden">
      {/* Hero Section */}
      <div className="relative overflow-hidden ">
        <div className="absolute inset-0 ">
          <Image
            src="/contact.jpg"
            alt="Hero background"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/80"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-6 py-2 mb-8"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              <Clock className="w-4 h-4 text-red-500 mr-2" />
              <span className="text-red-500 font-semibold text-sm">
                Limited Time Offer
              </span>
            </motion.div>

            <motion.h1
              className="text-5xl md:text-7xl font-bold text-white mb-6"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              Get Started
              <span className="text-red-500"> Today</span>
            </motion.h1>

            <motion.p
              className="text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.8 }}
            >
              Take the first step towards achieving your goals with our expert
              guidance and personalized strategy session
            </motion.p>
          </motion.div>
        </div>
      </div>

      {/* Main Content Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Side - Strategy Session Info */}
          <motion.div
            className="space-y-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: {
                opacity: 1,
                x: 0,
                transition: { staggerChildren: 0.2, duration: 0.8 },
              },
            }}
          >
            <motion.div
              className="bg-red-600 text-white p-4 rounded-lg shadow-lg transform "
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              <div className="flex items-center justify-center space-x-2">
                <Users className="w-5 h-5" />
                <span className="font-bold text-lg">
                  Limited spots remaining!
                </span>
              </div>
            </motion.div>

            <motion.div
              className="bg-white p-8 border border-gray-200"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              <div className="text-center mb-8">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-red-600 rounded-full mb-4">
                  <MessageSquare className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900 mb-2">
                  Complimentary 30-Minute Strategy Call
                </h2>
                <p className="text-lg text-gray-600">
                  Claim your FREE, no-strings-attached 30-minute strategy
                  consultation.
                </p>
                <div className="mt-4 p-3 bg-red-50 rounded-lg inline-block">
                  <span className="text-red-700 font-semibold">
                    (valued at ₦50,000)
                  </span>
                </div>
              </div>

              <div className="mb-8">
                <p className="text-gray-700 text-lg leading-relaxed">
                  Together, we’ll review your goals, outline a tailored action
                  plan, and answer any questions you may have.
                </p>
              </div>

              <div className="space-y-6">
                <h3 className="text-xl font-bold text-gray-900 flex items-center">
                  <Target className="w-6 h-6 text-red-600 mr-2" />
                  What you can look forward to:
                </h3>

                <div className="space-y-4">
                  {[
                    "We’ll work with you to clearly define your needs.",
                    "We’ll share practical ideas to help you reach your objectives.",
                    "When you’re ready to move forward, we’ll provide a tailored proposal or quote.",
                  ].map((text, i) => (
                    <motion.div
                      key={i}
                      className="flex items-start space-x-3"
                      variants={{
                        hidden: { opacity: 0, y: 20 },
                        visible: { opacity: 1, y: 0 },
                      }}
                      transition={{ delay: 0.3 + i * 0.2 }}
                    >
                      <CheckCircle className="w-6 h-6 text-red-600 mt-0.5 flex-shrink-0" />
                      <p className="text-gray-700">{text}</p>
                    </motion.div>
                  ))}
                </div>

                <motion.div
                  className="mt-8 p-6 bg-gray-50 rounded-xl border border-gray-200"
                  variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
                  transition={{ delay: 1 }}
                >
                  <p className="text-sm text-gray-600 text-center">
                    <strong className="text-gray-800">
                      No pressure, no obligation.
                    </strong>{" "}
                    This session is completely free—simply to help you explore
                    your options and plan your next steps.
                  </p>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Side - Date Scheduler */}
          <motion.div
            className="lg:sticky lg:top-8"
            initial={{ opacity: 0, x: 50, scale: 0.95 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
          >
            <DateScheduler />
          </motion.div>
        </div>
      </div>
    </div>
  );
}
