"use client";

import {
  Calendar,
  Facebook,
  Instagram,
  Linkedin,
  MessageCircle,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Kaushan_Script } from "next/font/google";

const kau = Kaushan_Script({
  weight: "400",
  subsets: ["latin"],
});

export default function Contact() {
  return (
    <div className="bg-white overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/contact.jpg"
            alt="Sisicaro - Digital Marketing Background"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/60"></div>
        </div>

        {/* Hero Content */}
        <motion.div
          className="relative z-10 text-center px-4 py-24 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 leading-tight">
            Let’s Build Something{" "}
            <span className="text-red-500">Impactful</span>
          </h1>
          <motion.p
            className={`${kau.className} text-lg md:text-xl text-gray-200 mb-6 `}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
          >
            At Sisicaro, we help brands stand out with tailored strategies and
            digital solutions that drive real growth.
          </motion.p>
        </motion.div>
      </section>

      {/* Contact Section */}
      <section className="w-full bg-white py-16 px-6 md:px-10 lg:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start max-w-7xl mx-auto">
          {/* LEFT COLUMN */}
          <motion.div
            className="space-y-10 bg-gray-50 rounded-xl p-8 shadow-sm"
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-gray-900">
              Get in Touch with <span className="text-red-600">Sisicaro</span>
            </h2>
            <p className="text-gray-600 text-lg">
              Ready to take the next step? Reach out for inquiries, partnership
              opportunities, or to start a project with us.
            </p>

            <motion.div
              className="space-y-8"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ staggerChildren: 0.2 }}
              variants={{
                hidden: {},
                visible: {},
              }}
            >
              {[
                {
                  label: "Give Us a Call",
                  value: "0817 616 1113",
                  href: "tel:08176161113",
                },
                {
                  label: "Send an Email",
                  value: "Sisicarocreative@gmail.com",
                  href: "mailto:Sisicarocreative@gmail.com",
                },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.2 }}
                  viewport={{ once: true }}
                >
                  <p className="text-sm text-gray-500 uppercase tracking-wider mb-2">
                    {item.label}
                  </p>
                  <a
                    href={item.href}
                    className="text-red-600 font-semibold text-xl hover:text-red-700 transition-colors border-b-2 border-red-600 inline-block"
                  >
                    {item.value}
                  </a>
                </motion.div>
              ))}

              {/* Schedule Time */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <p className="text-sm text-gray-500 uppercase tracking-wider mb-4">
                  Schedule Time to Talk
                </p>
                <Link
                  href="/get-started"
                  className="inline-flex items-center bg-red-600 text-white px-6 py-3 rounded-sm font-medium hover:bg-red-700 transition-colors transform hover:scale-105"
                >
                  <Calendar className="w-5 h-5 mr-2" /> Book 30 Minutes
                </Link>
              </motion.div>

              {/* Start a Project */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                viewport={{ once: true }}
              >
                <p className="text-sm text-gray-500 uppercase tracking-wider mb-2">
                  Start a Project
                </p>
                <Link
                  href="/get-started"
                  className="text-red-600 font-semibold text-xl hover:text-red-700 transition-colors border-b-2 border-red-600 inline-block"
                >
                  Get a Free Consultation
                </Link>
              </motion.div>
            </motion.div>

            {/* Socials */}
            <motion.div
              className="pt-8"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.8 }}
              viewport={{ once: true }}
            >
              <p className="text-sm text-gray-500 mb-4 uppercase tracking-wider">
                Connect With Us
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {[
                  {
                    icon: Facebook,
                    label: "Facebook",
                    href: "https://m.facebook.com/sisicarocreative/",
                  },
                  {
                    icon: Instagram,
                    label: "Instagram",
                    href: "http://www.instagram.com/sisicarocreative",
                  },
                  {
                    icon: Linkedin,
                    label: "LinkedIn",
                    href: "https://www.linkedin.com/company/sisi-caro-media/",
                  },
                  {
                    icon: MessageCircle,
                    label: "WhatsApp",
                    href: "http://wa.me/2348176161113",
                  },
                ].map((social, i) => {
                  const Icon = social.icon;
                  return (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex flex-col items-center justify-center p-3 rounded-lg bg-gray-100 hover:bg-red-600 hover:text-white transition"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 1 + i * 0.2 }}
                      viewport={{ once: true }}
                    >
                      <Icon className="w-5 h-5 mb-1" /> {social.label}
                    </motion.a>
                  );
                })}
              </div>
            </motion.div>
          </motion.div>

          {/* RIGHT COLUMN */}
          <motion.div
            className="bg-gray-50 shadow-lg rounded-xl p-8"
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold mb-6 text-gray-800">
              Share Your Project Details
            </h3>
            <p className="text-gray-600 mb-6">
              Fill out the form below and let’s explore how Sisicaro can help
              bring your ideas to life.
            </p>
            <div className="space-y-5">
              <input
                type="text"
                placeholder="Your Full Name"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-red-600 focus:border-red-600 focus:outline-none transition-all"
              />
              <input
                type="email"
                placeholder="Your Email Address"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-red-600 focus:border-red-600 focus:outline-none transition-all"
              />
              <textarea
                rows={5}
                placeholder="Tell us about your project goals"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-red-600 focus:border-red-600 focus:outline-none transition-all resize-none"
              />
              <Link
                href="/get-started"
                className="block text-center bg-red-600 text-white py-3 rounded-sm font-medium hover:bg-red-700 transition-colors transform hover:scale-[1.02] active:scale-[0.98] shadow-lg"
              >
                Get a Free Consultation
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
