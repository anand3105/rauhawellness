'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Gift, Sparkles, ArrowRight, Trophy } from 'lucide-react';

export default function GiveawayCTA() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative py-16 sm:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-rauha-accent/5 via-rauha-light to-rauha-taupe/10">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-10 left-10 w-64 h-64 bg-rauha-accent/30 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-rauha-taupe/40 rounded-full blur-3xl animate-pulse delay-700" />
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-float"
            style={{
              left: `${10 + Math.random() * 80}%`,
              top: `${10 + Math.random() * 80}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${4 + Math.random() * 3}s`,
            }}
          >
            <Sparkles className="w-5 h-5 text-rauha-accent/30" />
          </div>
        ))}
      </div>

      {/* Content */}
      <div
        className={`relative z-10 max-w-6xl mx-auto transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="bg-white/90 backdrop-blur-md rounded-3xl sm:rounded-[2.5rem] p-8 sm:p-12 lg:p-16 shadow-2xl border border-rauha-accent/30 overflow-hidden relative">
          {/* Corner Decorations */}
          <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-rauha-accent/20 to-transparent rounded-bl-full" />
          <div className="absolute bottom-0 left-0 w-40 h-40 bg-gradient-to-tr from-rauha-taupe/20 to-transparent rounded-tr-full" />

          <div className="relative z-10">
            {/* Badge */}
            <div className="flex justify-center mb-6">
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-rauha-accent/20 via-amber-500/20 to-rauha-accent/20 backdrop-blur-sm px-5 py-2.5 rounded-full border border-rauha-accent/40 shadow-lg animate-pulse">
                <Gift className="w-5 h-5 text-rauha-accent" />
                <span className="text-sm sm:text-base font-bold text-rauha-dark uppercase tracking-wide">
                  Limited Time Giveaway
                </span>
                <Trophy className="w-5 h-5 text-rauha-accent" />
              </div>
            </div>

            {/* Main Content */}
            <div className="text-center mb-10">
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-rauha-dark mb-6 leading-tight">
                Find Your Glow
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-rauha-accent via-amber-500 to-rauha-accent">
                  Win Premium Oils!
                </span>
              </h2>

              <p className="text-base sm:text-lg md:text-xl text-rauha-text/80 max-w-3xl mx-auto mb-8 leading-relaxed">
                Enter our exclusive giveaway to win your perfect oil match —
                <strong className="text-rauha-accent"> Kumkumadi</strong> or
                <strong className="text-rose-500"> Rosehip Oil</strong> + ₹500 gift card!
              </p>

              {/* Features Grid */}
              <div className="grid sm:grid-cols-3 gap-4 sm:gap-6 max-w-4xl mx-auto mb-10">
                <div className="bg-gradient-to-br from-rauha-accent/10 to-transparent rounded-2xl p-4 sm:p-6 border border-rauha-accent/20 hover:border-rauha-accent/40 transition-all duration-300 hover:scale-105">
                  <div className="text-3xl sm:text-4xl font-bold text-rauha-accent mb-2">3</div>
                  <div className="text-sm sm:text-base text-rauha-dark font-semibold">Grand Prize Winners</div>
                  <div className="text-xs sm:text-sm text-rauha-text/60 mt-1">Full-size oil + gift card</div>
                </div>

                <div className="bg-gradient-to-br from-amber-500/10 to-transparent rounded-2xl p-4 sm:p-6 border border-amber-500/20 hover:border-amber-500/40 transition-all duration-300 hover:scale-105">
                  <div className="text-3xl sm:text-4xl font-bold text-amber-600 mb-2">100</div>
                  <div className="text-sm sm:text-base text-rauha-dark font-semibold">Early Bird Bonuses</div>
                  <div className="text-xs sm:text-sm text-rauha-text/60 mt-1">₹300 voucher + guide</div>
                </div>

                <div className="bg-gradient-to-br from-rose-500/10 to-transparent rounded-2xl p-4 sm:p-6 border border-rose-500/20 hover:border-rose-500/40 transition-all duration-300 hover:scale-105">
                  <div className="text-3xl sm:text-4xl font-bold text-rose-500 mb-2">₹500</div>
                  <div className="text-sm sm:text-base text-rauha-dark font-semibold">Gift Card Value</div>
                  <div className="text-xs sm:text-sm text-rauha-text/60 mt-1">For your next purchase</div>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  href="/giveaway"
                  className="group inline-flex items-center gap-3 bg-gradient-to-r from-rauha-accent to-amber-500 hover:from-amber-500 hover:to-rauha-accent text-white font-bold px-8 py-4 rounded-full shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 text-base sm:text-lg w-full sm:w-auto justify-center"
                >
                  <Gift className="w-6 h-6 group-hover:rotate-12 transition-transform duration-300" />
                  Enter Giveaway Now
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </Link>

                <Link
                  href="/giveaway"
                  className="group inline-flex items-center gap-2 text-rauha-accent hover:text-rauha-dark font-semibold transition-colors duration-300 text-base sm:text-lg"
                >
                  Learn More
                  <Sparkles className="w-4 h-4 group-hover:animate-pulse" />
                </Link>
              </div>

              {/* Fine Print */}
              <p className="text-xs sm:text-sm text-rauha-text/50 mt-6 max-w-2xl mx-auto">
                Contest ends in 30 days. Open to India residents 13+.
                <br className="hidden sm:block" />
                Complete Instagram steps to be eligible.
              </p>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0) rotate(0deg);
            opacity: 0.3;
          }
          50% {
            transform: translateY(-15px) rotate(180deg);
            opacity: 0.6;
          }
        }
        .animate-float {
          animation: float 5s ease-in-out infinite;
        }
        .delay-700 {
          animation-delay: 700ms;
        }
      `}</style>
    </section>
  );
}
