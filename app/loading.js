"use client";

import { useState, useEffect } from "react";

export default function LoadingPage() {
  const [progress, setProgress] = useState(0);
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        const increment = Math.random() * 3;
        const newProgress = prev + increment;
        if (newProgress >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        return newProgress;
      });
    }, 100);

    const particleInterval = setInterval(() => {
      const newParticle = {
        id: Math.random(),
        left: Math.random() * 100,
        animationDelay: Math.random() * 6,
        animationDuration: Math.random() * 4 + 4,
      };

      setParticles((prev) => [...prev, newParticle]);

      setTimeout(() => {
        setParticles((prev) => prev.filter((p) => p.id !== newParticle.id));
      }, newParticle.animationDuration * 1000 + 2000);
    }, 800);

    return () => {
      clearInterval(progressInterval);
      clearInterval(particleInterval);
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black flex items-center justify-center overflow-hidden relative">
      <div className="absolute inset-0 pointer-events-none">
        {particles.map((particle) => (
          <div
            key={particle.id}
            className="absolute w-0.5 h-0.5 bg-red-500/30 rounded-full animate-float"
            style={{
              left: `${particle.left}%`,
              animationDelay: `${particle.animationDelay}s`,
              animationDuration: `${particle.animationDuration}s`,
            }}
          />
        ))}
      </div>

      {/* Main Loading Container */}
      <div className="text-center relative z-10">
        {/* Main Spinner */}
        <div className="relative w-20 h-20 mx-auto mb-8">
          {/* Outer ring */}
          <div className="absolute inset-0 border-4 border-white/10 border-t-red-500 rounded-full animate-spin"></div>
          {/* Inner ring */}
          <div className="absolute inset-2 border-2 border-white/5 border-t-red-500/30 rounded-full animate-spin-reverse"></div>
        </div>

        <h1 className="text-2xl font-light text-white tracking-[3px] mb-5 animate-pulse">
          LOADING
        </h1>

        {/* Progress Bar */}
        <div className="w-72 h-1 bg-white/10 rounded-full mx-auto mb-5 overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-red-500 via-white to-red-500 rounded-full transition-all duration-300 ease-out relative"
            style={{ width: `${progress}%` }}
          >
            {/* Shimmer effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent animate-shimmer"></div>
          </div>
        </div>

        {/* Percentage */}
        <div className="text-white/80 text-sm font-light tracking-wider mb-5">
          {Math.floor(progress)}%
        </div>

        {/* Bouncing Dots */}
        <div className="flex justify-center gap-2">
          <div className="w-2 h-2 bg-red-500 rounded-full animate-bounce-1"></div>
          <div className="w-2 h-2 bg-red-500 rounded-full animate-bounce-2"></div>
          <div className="w-2 h-2 bg-red-500 rounded-full animate-bounce-3"></div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          90% {
            opacity: 1;
          }
          100% {
            transform: translateY(-100vh) rotate(360deg);
            opacity: 0;
          }
        }

        @keyframes spin-reverse {
          from {
            transform: rotate(360deg);
          }
          to {
            transform: rotate(0deg);
          }
        }

        @keyframes shimmer {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }

        @keyframes bounce-1 {
          0%,
          80%,
          100% {
            transform: scale(0.8);
            opacity: 0.5;
          }
          40% {
            transform: scale(1.2);
            opacity: 1;
          }
        }

        @keyframes bounce-2 {
          0%,
          80%,
          100% {
            transform: scale(0.8);
            opacity: 0.5;
          }
          40% {
            transform: scale(1.2);
            opacity: 1;
          }
        }

        @keyframes bounce-3 {
          0%,
          80%,
          100% {
            transform: scale(0.8);
            opacity: 0.5;
          }
          40% {
            transform: scale(1.2);
            opacity: 1;
          }
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }

        .animate-spin-reverse {
          animation: spin-reverse 2s linear infinite;
        }

        .animate-shimmer {
          animation: shimmer 2s linear infinite;
        }

        .animate-bounce-1 {
          animation: bounce-1 1.4s ease-in-out infinite both;
          animation-delay: -0.32s;
        }

        .animate-bounce-2 {
          animation: bounce-2 1.4s ease-in-out infinite both;
          animation-delay: -0.16s;
        }

        .animate-bounce-3 {
          animation: bounce-3 1.4s ease-in-out infinite both;
          animation-delay: 0s;
        }
      `}</style>
    </div>
  );
}
