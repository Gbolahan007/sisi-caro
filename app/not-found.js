"use client";

import React, { useState, useEffect } from "react";
import {
  ArrowLeft,
  Home,
  Search,
  TrendingUp,
  Target,
  BarChart3,
  Lightbulb,
} from "lucide-react";

export default function Custom404() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isTyping, setIsTyping] = useState(false);
  const [displayText, setDisplayText] = useState("");

  const fullText =
    "Looks like this page took a detour from our marketing funnel. Don't worry – even the best campaigns have redirects. Let's get you back on track to boost your digital presence!";

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);

    setTimeout(() => {
      setIsTyping(true);
      let i = 0;
      const typeInterval = setInterval(() => {
        if (i < fullText.length) {
          setDisplayText(fullText.slice(0, i + 1));
          i++;
        } else {
          clearInterval(typeInterval);
          setIsTyping(false);
        }
      }, 30);
    }, 1000);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const handleGoHome = () => {
    window.location.href = "/";
  };

  const handleGoBack = () => {
    window.history.back();
  };

  const handleNavigation = (path) => {
    window.location.href = path;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black to-gray-900 text-white flex items-center justify-center relative overflow-hidden ">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 border-2 border-white/10 rounded-full animate-pulse"></div>
        <div className="absolute top-3/4 right-1/4 w-20 h-20 border-2 border-white/20 rounded-full animate-bounce delay-700"></div>
        <div className="absolute bottom-1/4 left-1/6 w-24 h-24 border-2 border-white/15 rounded-full animate-ping delay-1000"></div>

        <div
          className="absolute w-2 h-2 bg-white/30 rounded-full transition-all duration-300 ease-out"
          style={{
            left: mousePosition.x - 4,
            top: mousePosition.y - 4,
            transform: "translate(-50%, -50%)",
          }}
        ></div>
        <div
          className="absolute w-1 h-1 bg-white/20 rounded-full transition-all duration-500 ease-out"
          style={{
            left: mousePosition.x - 20,
            top: mousePosition.y - 20,
            transform: "translate(-50%, -50%)",
          }}
        ></div>
      </div>

      <div className="max-w-4xl mx-auto text-center my-12 px-6 z-10">
        {/* 404 Number */}
        <div className="text-8xl md:text-9xl font-bold mb-8 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent animate-pulse ">
          404
        </div>

        {/* Title */}
        <h1 className="text-3xl md:text-5xl font-light mb-6 tracking-widest">
          PAGE NOT FOUND
        </h1>

        {/* Animated Message */}
        <div className="text-lg md:text-xl mb-8 opacity-90 leading-relaxed max-w-3xl mx-auto min-h-[100px]">
          {displayText}
          {isTyping && <span className="animate-pulse">|</span>}
        </div>

        {/* Marketing Icons */}
        <div className="flex justify-center gap-6 mb-12 opacity-60">
          <div className="p-3 border border-white/30 rounded-lg hover:bg-white/10 transition-all duration-300 hover:scale-110">
            <BarChart3 className="w-6 h-6" />
          </div>
          <div className="p-3 border border-white/30 rounded-lg hover:bg-white/10 transition-all duration-300 hover:scale-110 delay-150">
            <Target className="w-6 h-6" />
          </div>
          <div className="p-3 border border-white/30 rounded-lg hover:bg-white/10 transition-all duration-300 hover:scale-110 delay-300">
            <TrendingUp className="w-6 h-6" />
          </div>
          <div className="p-3 border border-white/30 rounded-lg hover:bg-white/10 transition-all duration-300 hover:scale-110 delay-500">
            <Lightbulb className="w-6 h-6" />
          </div>
        </div>

        {/* Navigation Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <button
            onClick={handleGoHome}
            className="flex items-center gap-2 bg-white text-black px-8 py-4 rounded-full font-semibold hover:bg-transparent hover:text-white border-2 border-white transition-all duration-300 hover:scale-105 hover:shadow-xl"
          >
            <Home className="w-5 h-5" />
            Take Me Home
          </button>
          <button
            onClick={handleGoBack}
            className="flex items-center gap-2 bg-transparent text-white px-8 py-4 rounded-full font-semibold border-2 border-white hover:bg-white hover:text-black transition-all duration-300 hover:scale-105 hover:shadow-xl"
          >
            <ArrowLeft className="w-5 h-5" />
            Go Back
          </button>
        </div>

        {/* Quick Links */}
        <div className="bg-white/5 backdrop-blur-lg border border-white/20 rounded-2xl p-6 max-w-2xl mx-auto">
          <p className="text-white/90 mb-4 font-medium">
            Looking for something specific? Try these popular pages:
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <button
              onClick={() => handleNavigation("/services/seo")}
              className="px-4 py-2 bg-white/10 hover:bg-white/20 border border-white/30 rounded-full text-sm transition-all duration-200 hover:scale-105"
            >
              SEO Services
            </button>
            <button
              onClick={() => handleNavigation("/services/social-media")}
              className="px-4 py-2 bg-white/10 hover:bg-white/20 border border-white/30 rounded-full text-sm transition-all duration-200 hover:scale-105"
            >
              Social Media Marketing
            </button>
            <button
              onClick={() => handleNavigation("/services/ppc")}
              className="px-4 py-2 bg-white/10 hover:bg-white/20 border border-white/30 rounded-full text-sm transition-all duration-200 hover:scale-105"
            >
              PPC Advertising
            </button>
            <button
              onClick={() => handleNavigation("/services/content-marketing")}
              className="px-4 py-2 bg-white/10 hover:bg-white/20 border border-white/30 rounded-full text-sm transition-all duration-200 hover:scale-105"
            >
              Content Marketing
            </button>
            <button
              onClick={() => handleNavigation("/contact")}
              className="px-4 py-2 bg-white/10 hover:bg-white/20 border border-white/30 rounded-full text-sm transition-all duration-200 hover:scale-105"
            >
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
