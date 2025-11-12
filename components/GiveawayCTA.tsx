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
    <section className="relative py-10 sm:py-14 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Top Border Line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-rauha-accent/20" />
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-rauha-accent/5 via-rauha-light to-rauha-taupe/10">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-48 h-48 bg-rauha-accent/30 rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-10 w-64 h-64 bg-rauha-taupe/40 rounded-full blur-3xl" />
        </div>
      </div>

      {/* Content */}
      <div
        className={`relative z-10 max-w-6xl mx-auto transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="bg-white/95 backdrop-blur-md rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-10 shadow-xl border border-rauha-accent/20 overflow-hidden relative">
          {/* Corner Decorations - Subtle */}
          <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-rauha-accent/10 to-transparent rounded-bl-full" />
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-rauha-taupe/10 to-transparent rounded-tr-full" />

          <div className="relative z-10">
            {/* Badge */}
            <div className="flex justify-center mb-4">
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-rauha-accent/15 via-amber-500/15 to-rauha-accent/15 px-4 py-1.5 rounded-full border border-rauha-accent/30">
                <Gift className="w-4 h-4 text-rauha-accent" />
                <span className="text-xs sm:text-sm font-bold text-rauha-dark uppercase tracking-wider">
                  Limited Giveaway
                </span>
              </div>
            </div>

            {/* Main Content */}
            <div className="text-center mb-6">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-rauha-dark mb-3 leading-tight">
                Win Premium Oils
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-rauha-accent to-amber-500"> + ₹500</span>
              </h2>

              <p className="text-sm sm:text-base text-rauha-text/70 max-w-2xl mx-auto mb-6 leading-relaxed">
                Enter to win <strong className="text-rauha-accent">Kumkumadi</strong> or <strong className="text-rose-500">Rosehip Oil</strong> with a gift card
              </p>

              {/* Features Grid */}
              <div className="grid grid-cols-3 gap-3 sm:gap-4 max-w-3xl mx-auto mb-6">
                <div className="bg-gradient-to-br from-rauha-accent/8 to-transparent rounded-xl p-3 sm:p-4 border border-rauha-accent/20 hover:border-rauha-accent/30 transition-all duration-300">
                  <div className="text-2xl sm:text-3xl font-bold text-rauha-accent mb-1">3</div>
                  <div className="text-xs sm:text-sm text-rauha-dark font-semibold">Winners</div>
                  <div className="text-[10px] sm:text-xs text-rauha-text/60 mt-0.5">Oil + Card</div>
                </div>

                <div className="bg-gradient-to-br from-amber-500/8 to-transparent rounded-xl p-3 sm:p-4 border border-amber-500/20 hover:border-amber-500/30 transition-all duration-300">
                  <div className="text-2xl sm:text-3xl font-bold text-amber-600 mb-1">100</div>
                  <div className="text-xs sm:text-sm text-rauha-dark font-semibold">Early Birds</div>
                  <div className="text-[10px] sm:text-xs text-rauha-text/60 mt-0.5">₹300 Bonus</div>
                </div>

                <div className="bg-gradient-to-br from-rose-500/8 to-transparent rounded-xl p-3 sm:p-4 border border-rose-500/20 hover:border-rose-500/30 transition-all duration-300">
                  <div className="text-2xl sm:text-3xl font-bold text-rose-500 mb-1">₹500</div>
                  <div className="text-xs sm:text-sm text-rauha-dark font-semibold">Gift Card</div>
                  <div className="text-[10px] sm:text-xs text-rauha-text/60 mt-0.5">Per Winner</div>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                <Link
                  href="/giveaway"
                  className="group inline-flex items-center gap-2 bg-gradient-to-r from-rauha-accent to-amber-500 hover:from-amber-500 hover:to-rauha-accent text-white font-semibold px-6 py-3 rounded-full shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all duration-300 text-sm sm:text-base w-full sm:w-auto justify-center"
                >
                  <Gift className="w-4 h-4 group-hover:rotate-12 transition-transform duration-300" />
                  Enter Giveaway
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                </Link>

                <Link
                  href="/giveaway"
                  className="group inline-flex items-center gap-1.5 text-rauha-accent hover:text-rauha-dark font-medium transition-colors duration-300 text-sm"
                >
                  Learn More
                  <Sparkles className="w-3.5 h-3.5 group-hover:animate-pulse" />
                </Link>
              </div>

              {/* Fine Print */}
              <p className="text-[10px] sm:text-xs text-rauha-text/50 mt-4 max-w-2xl mx-auto">
                Ends in 30 days. India residents 13+. Instagram steps required.
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
