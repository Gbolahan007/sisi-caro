"use client";

import { motion } from "framer-motion";
import { CheckCircle, Clock, MessageSquare, Target, Users } from "lucide-react";
import Image from "next/image";
import "react-day-picker/dist/style.css";
import { DateScheduler } from "../components/Home/DateScheduler";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
};

export default function GetStartedPage() {
  return (
    <div className="bg-white overflow-x-hidden">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/contact.jpg"
            alt="Hero background"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/80"></div>
        </div>

        <motion.div
          className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.2 } },
          }}
        >
          <motion.div
            variants={fadeUp}
            className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-6 py-2 mb-8"
          >
            <Clock className="w-4 h-4 text-red-500 mr-2" />
            <span className="text-red-500 font-semibold text-sm">
              Limited Time Offer
            </span>
          </motion.div>

          <motion.h1
            variants={fadeUp}
            className="text-5xl md:text-7xl font-bold text-white mb-6 "
          >
            Get Started <span className="text-red-500">Today</span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto leading-relaxed"
          >
            Take the first step towards achieving your goals with our expert
            guidance and personalized strategy session
          </motion.p>
        </motion.div>
      </div>

      {/* Main Content Section */}
      <div className="max-w-6xl mx-auto sm:px-6 lg:px-8 py-16 mt-5 ">
        <div className="grid lg:grid-cols-2 gap-12 items-center sm:px-6">
          {/* Left Side - Info + Checklist */}
          <motion.div
            className="space-y-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.25 } },
            }}
          >
            <motion.div variants={fadeUp} className="bg-white p-8">
              <div className="text-center mb-8 ">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-red-600 rounded-full mb-4 ">
                  <MessageSquare className="w-8 h-8 text-white " />
                </div>
                <h2 className="text-2xl font-bold text-gray-900 mb-2">
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

              <p className="text-gray-700 text-lg text-center leading-relaxed mb-8">
                Together, we’ll review your goals, outline a tailored action
                plan, and answer any questions you may have.
              </p>

              {/* Checklist Group */}
              <motion.div
                variants={{
                  hidden: {},
                  visible: { transition: { staggerChildren: 0.2 } },
                }}
                className="space-y-4"
              >
                {[
                  "We’ll work with you to clearly define your needs.",
                  "We’ll share practical ideas to help you reach your objectives.",
                  "When you’re ready to move forward, we’ll provide a tailored proposal or quote.",
                ].map((text, i) => (
                  <motion.div
                    key={i}
                    variants={fadeUp}
                    className="flex items-start space-x-3"
                  >
                    <CheckCircle className="w-6 h-6 text-red-600 mt-0.5 flex-shrink-0" />
                    <p className="text-gray-700">{text}</p>
                  </motion.div>
                ))}
              </motion.div>

              <motion.div
                variants={fadeUp}
                className="mt-8 p-6 bg-gray-50 rounded-xl border border-gray-200"
              >
                <p className="text-sm text-gray-600 text-center">
                  <strong className="text-gray-800">
                    No pressure, no obligation.
                  </strong>{" "}
                  This session is completely free—simply to help you explore
                  your options and plan your next steps.
                </p>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Right Side - Date Scheduler */}
          <motion.div
            className="lg:sticky lg:top-8"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <DateScheduler />
          </motion.div>
        </div>
      </div>
    </div>
  );
}
