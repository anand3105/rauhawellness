'use client';

import { useState, useEffect } from 'react';
import { Gift, Sparkles, Trophy, Instagram, Clock } from 'lucide-react';
import Image from 'next/image';

interface CountdownProps {
  targetDate: Date;
}

function CountdownTimer({ targetDate }: CountdownProps) {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = +targetDate - +new Date();

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <div className="flex items-center justify-center gap-2 sm:gap-4 flex-wrap">
      {[
        { label: 'Days', value: timeLeft.days },
        { label: 'Hours', value: timeLeft.hours },
        { label: 'Minutes', value: timeLeft.minutes },
        { label: 'Seconds', value: timeLeft.seconds },
      ].map((item, index) => (
        <div key={item.label} className="relative group">
          <div className="bg-white/90 backdrop-blur-md rounded-lg sm:rounded-xl p-2 sm:p-4 min-w-[60px] sm:min-w-[80px] shadow-lg border border-rauha-accent/20 group-hover:border-rauha-accent/50 transition-all duration-300 group-hover:scale-105">
            <div className="text-2xl sm:text-4xl font-bold text-rauha-accent text-center">
              {String(item.value).padStart(2, '0')}
            </div>
            <div className="text-[10px] sm:text-xs text-rauha-text/60 text-center uppercase tracking-wider mt-1">
              {item.label}
            </div>
          </div>
          {index < 3 && (
            <div className="hidden sm:block absolute top-1/2 -right-2 transform -translate-y-1/2 text-rauha-accent font-bold text-xl">
              :
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default function GiveawayHero() {
  // Set contest end date (30 days from now - adjust as needed)
  const contestEndDate = new Date();
  contestEndDate.setDate(contestEndDate.getDate() + 30);

  return (
    <section className="relative pt-28 sm:pt-36 pb-16 sm:pb-24 overflow-hidden">
      {/* Animated Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-rauha-light via-rauha-subtle/20 to-rauha-accent/10">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 left-10 w-72 h-72 bg-rauha-accent/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-rauha-taupe/30 rounded-full blur-3xl animate-pulse delay-700" />
        </div>
      </div>

      {/* Floating Sparkles Animation */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`,
            }}
          >
            <Sparkles className="w-4 h-4 text-rauha-accent/40" />
          </div>
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16 animate-fade-in">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-rauha-accent/20 to-rauha-taupe/20 backdrop-blur-sm px-4 sm:px-6 py-2 rounded-full border border-rauha-accent/30 mb-6 hover:scale-105 transition-transform duration-300">
            <Gift className="w-5 h-5 text-rauha-accent animate-bounce" />
            <span className="text-sm sm:text-base font-semibold text-rauha-dark">Limited Time Giveaway</span>
            <Trophy className="w-5 h-5 text-rauha-accent animate-bounce delay-150" />
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-rauha-dark mb-6 leading-tight">
            Find Your Glow
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-rauha-accent via-rauha-taupe to-rauha-accent animate-gradient-x">
              Giveaway
            </span>
          </h1>

          <p className="text-lg sm:text-xl md:text-2xl text-rauha-text max-w-3xl mx-auto mb-8 leading-relaxed">
            Win your perfect oil match + ₹500 gift card!
          </p>

          {/* Countdown Timer */}
          <div className="mb-8">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Clock className="w-5 h-5 text-rauha-accent animate-pulse" />
              <p className="text-sm sm:text-base text-rauha-text/70 font-medium uppercase tracking-wide">
                Contest Ends In
              </p>
            </div>
            <CountdownTimer targetDate={contestEndDate} />
          </div>
        </div>

        {/* Split Product Showcase */}
        <div className="grid md:grid-cols-2 gap-6 sm:gap-8 mb-12 sm:mb-16">
          {/* Kumkumadi Oil */}
          <div className="group relative bg-white/80 backdrop-blur-md rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-xl border border-rauha-accent/20 hover:border-rauha-accent/50 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl overflow-hidden">
            {/* Animated Glow Effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-rauha-accent/0 via-rauha-accent/5 to-rauha-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center shadow-lg">
                  <Sparkles className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-rauha-dark">
                  Kumkumadi Oil
                </h3>
              </div>

              <div className="space-y-3 mb-6">
                <p className="text-base sm:text-lg text-rauha-text/80 font-medium">
                  Perfect for:
                </p>
                <ul className="space-y-2 text-sm sm:text-base text-rauha-text/70">
                  <li className="flex items-start gap-2">
                    <span className="text-rauha-accent mt-1">✦</span>
                    <span>Dry, dull, or mature skin</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-rauha-accent mt-1">✦</span>
                    <span>Brightening & anti-aging</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-rauha-accent mt-1">✦</span>
                    <span>Deep nourishment & radiance</span>
                  </li>
                </ul>
              </div>

              <div className="h-48 sm:h-64 relative rounded-xl overflow-hidden bg-gradient-to-br from-amber-50 to-orange-50">
                <Image
                  src="/Kumkumadioil_carton.jpg"
                  alt="Kumkumadi Oil Product"
                  fill
                  className="object-contain p-4"
                />
              </div>
            </div>
          </div>

          {/* Rosehip Oil */}
          <div className="group relative bg-white/80 backdrop-blur-md rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-xl border border-rauha-accent/20 hover:border-rauha-accent/50 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl overflow-hidden">
            {/* Animated Glow Effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-rose-500/0 via-rose-500/5 to-rose-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-pink-400 to-rose-500 flex items-center justify-center shadow-lg">
                  <Sparkles className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-rauha-dark">
                  Rosehip Oil
                </h3>
              </div>

              <div className="space-y-3 mb-6">
                <p className="text-base sm:text-lg text-rauha-text/80 font-medium">
                  Perfect for:
                </p>
                <ul className="space-y-2 text-sm sm:text-base text-rauha-text/70">
                  <li className="flex items-start gap-2">
                    <span className="text-rose-500 mt-1">✦</span>
                    <span>Oily, acne-prone skin</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-rose-500 mt-1">✦</span>
                    <span>Sensitive & irritated skin</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-rose-500 mt-1">✦</span>
                    <span>Scar healing & hydration</span>
                  </li>
                </ul>
              </div>

              <div className="h-48 sm:h-64 relative rounded-xl overflow-hidden bg-gradient-to-br from-pink-50 to-rose-50">
                <Image
                  src="/Rosehipoil_carton.jpg"
                  alt="Rosehip Oil Product"
                  fill
                  className="object-contain p-4"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Prizes Section */}
        <div className="bg-gradient-to-r from-rauha-accent/10 via-white/90 to-rauha-taupe/10 backdrop-blur-md rounded-2xl sm:rounded-3xl p-6 sm:p-10 border border-rauha-accent/30 shadow-xl">
          <div className="text-center mb-8">
            <h2 className="text-3xl sm:text-4xl font-bold text-rauha-dark mb-3 flex items-center justify-center gap-3">
              <Trophy className="w-8 h-8 text-rauha-accent" />
              Amazing Prizes
              <Trophy className="w-8 h-8 text-rauha-accent" />
            </h2>
            <p className="text-base sm:text-lg text-rauha-text/70">
              Everyone's a winner in our Rauha community!
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {/* Grand Prize */}
            <div className="bg-white/80 rounded-xl sm:rounded-2xl p-6 border-2 border-rauha-accent shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-rauha-accent to-amber-500 text-white px-4 py-1.5 rounded-full text-sm font-bold mb-4">
                🏆 Grand Prize
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-rauha-dark mb-3">
                3 Lucky Winners
              </h3>
              <ul className="space-y-2 text-sm sm:text-base text-rauha-text/80">
                <li className="flex items-start gap-2">
                  <span className="text-rauha-accent font-bold">✓</span>
                  <span>Full-size personalized oil (Kumkumadi or Rosehip)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-rauha-accent font-bold">✓</span>
                  <span>₹500 Rauha Wellness Gift Card</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-rauha-accent font-bold">✓</span>
                  <span>Featured on our Instagram</span>
                </li>
              </ul>
            </div>

            {/* Early Bird Bonus */}
            <div className="bg-white/80 rounded-xl sm:rounded-2xl p-6 border-2 border-rauha-taupe shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-rauha-taupe to-rauha-subtle text-white px-4 py-1.5 rounded-full text-sm font-bold mb-4">
                ⚡ Early Bird
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-rauha-dark mb-3">
                First 100 Entries
              </h3>
              <ul className="space-y-2 text-sm sm:text-base text-rauha-text/80">
                <li className="flex items-start gap-2">
                  <span className="text-rauha-taupe font-bold">✓</span>
                  <span>₹300 OFF voucher on next order</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-rauha-taupe font-bold">✓</span>
                  <span>Personalized Skincare Guide (PDF)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-rauha-taupe font-bold">✓</span>
                  <span>Exclusive community access</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Instagram CTA */}
        <div className="mt-12 text-center">
          <a
            href="https://instagram.com/rauhawellness"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-gradient-to-r from-purple-500 via-pink-500 to-rose-500 text-white font-bold px-8 py-4 rounded-full shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 group text-base sm:text-lg"
          >
            <Instagram className="w-6 h-6 group-hover:rotate-12 transition-transform duration-300" />
            Follow @RauhaWellness to Enter
            <Sparkles className="w-5 h-5 animate-pulse" />
          </a>
          <p className="text-sm text-rauha-text/60 mt-4">
            Complete all entry steps on our Instagram for maximum chances!
          </p>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0) rotate(0deg);
            opacity: 0.3;
          }
          50% {
            transform: translateY(-20px) rotate(180deg);
            opacity: 0.8;
          }
        }
        .animate-float {
          animation: float 4s ease-in-out infinite;
        }
        @keyframes gradient-x {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }
        .animate-gradient-x {
          background-size: 200% 200%;
          animation: gradient-x 3s ease infinite;
        }
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fade-in 0.8s ease-out;
        }
        .delay-150 {
          animation-delay: 150ms;
        }
        .delay-700 {
          animation-delay: 700ms;
        }
      `}</style>
    </section>
  );
}
