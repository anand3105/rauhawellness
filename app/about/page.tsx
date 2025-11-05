'use client';

import { useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Heart, Users, Microscope, Lightbulb, Target, Sparkles, ArrowRight } from 'lucide-react';

export default function AboutPage() {
  useEffect(() => {
    document.title = 'About Us - The Story Behind Rauha Wellness';
  }, []);

  return (
    <main className="min-h-screen bg-gradient-to-b from-rauha-light to-white">
      {/* Hero Section */}
      <section className="relative pt-32 sm:pt-36 pb-10 sm:pb-12 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 opacity-10">
          <Image
            src="/0cd39c77-e471-4ca5-ab8a-3dbb5e31b1a1.jpg"
            alt="Background"
            fill
            className="object-cover"
          />
        </div>

        {/* Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-rauha-accent/5 via-rauha-light to-rauha-taupe/10" />

        {/* Decorative Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-10 left-10 w-48 h-48 bg-rauha-accent/10 rounded-full blur-3xl animate-breathe" />
          <div className="absolute bottom-10 right-10 w-64 h-64 bg-rauha-taupe/20 rounded-full blur-3xl animate-breathe" style={{ animationDelay: '3s' }} />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-rauha-accent/10 px-3 py-1.5 rounded-full mb-4">
            <Heart className="w-3.5 h-3.5 text-rauha-accent" />
            <span className="text-xs font-semibold text-rauha-dark">Our Story</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-rauha-dark mb-4 leading-tight">
            From Forest to Face.<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-rauha-accent to-rauha-taupe">
              The Story of Rauha.
            </span>
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-rauha-text max-w-2xl mx-auto leading-relaxed mb-2">
            Rauha means peace — and that's exactly what we bring back to your skin.
          </p>
          <p className="text-sm sm:text-base text-rauha-text/80 max-w-xl mx-auto italic">
            Nature's Messenger for Modern India.
          </p>
        </div>
      </section>

      {/* Origin Story */}
      <section className="relative py-10 sm:py-14 px-4 sm:px-6 lg:px-8 bg-white overflow-hidden">
        <div className="relative z-10 max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-rauha-accent/10 px-3 py-1.5 rounded-full mb-4">
                <Lightbulb className="w-3.5 h-3.5 text-rauha-accent" />
                <span className="text-xs font-semibold text-rauha-dark">It Started in 2016</span>
              </div>

              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-rauha-dark mb-4">
                A Return to Roots
              </h2>

              <div className="space-y-3 text-sm sm:text-base text-rauha-text/80 leading-relaxed">
                <p>
                  Rauha Wellness was born from one question — <strong className="text-rauha-accent">"What if skincare returned to the earth?"</strong>
                </p>

                <p>
                  We started with the soil — herbs grown with care in small Indian farms, harvested by hand, and infused slowly under natural light.
                </p>

                <p>
                  We don't chase perfection or promises. We believe in <strong>purity, patience, and peace</strong>.
                </p>

                <p className="italic text-rauha-dark font-medium pt-1 text-sm">
                  "We don't bottle beauty. We bottle balance."
                </p>
              </div>
            </div>

            <div className="relative h-64 sm:h-80 rounded-2xl overflow-hidden shadow-xl group">
              <Image
                src="/oil dropper.jpg"
                alt="Laboratory Research - Essential Oils"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-rauha-dark/60 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 text-white">
                <div className="flex items-center gap-2 mb-1">
                  <Microscope className="w-5 h-5" />
                  <p className="text-xl font-bold">Research-Driven</p>
                </div>
                <p className="text-sm opacity-90">Every Formula Backed by Science</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Research Journey */}
      <section className="relative py-10 sm:py-14 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-rauha-light to-white overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 opacity-10">
          <Image
            src="/2b1f3ef7-bb63-4cfc-970a-76f307087f6f.jpg"
            alt="Background"
            fill
            className="object-cover"
          />
        </div>
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-8 sm:mb-10">
            <div className="inline-flex items-center gap-2 bg-rauha-accent/10 px-3 py-1.5 rounded-full mb-3">
              <Microscope className="w-3.5 h-3.5 text-rauha-accent" />
              <span className="text-xs font-semibold text-rauha-dark">Science-Backed</span>
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-rauha-dark mb-4">
              Made in Small Batches, Not Factories
            </h2>

            <p className="text-lg sm:text-xl text-rauha-text/70 max-w-3xl mx-auto">
              Every bottle of Rauha begins with the soil. We never rush the process, because nature never does.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                icon: '🌿',
                title: '100% Natural Botanicals',
                description: 'Handcrafted in India with herbs grown with care, harvested by hand',
              },
              {
                icon: '🌾',
                title: 'Slow-Made Process',
                description: 'Infused slowly under natural light — we never rush what nature perfects',
              },
              {
                icon: '🌼',
                title: 'No Fillers or Synthetics',
                description: 'No synthetic fragrance, no false claims — just pure, honest ingredients',
              },
              {
                icon: '🍃',
                title: 'Small Batch Creation',
                description: 'Each batch is made by hand, with the patience nature deserves',
              },
              {
                icon: '🌸',
                title: 'Rooted in Tradition',
                description: 'Ancient wisdom meets mindful creation — refined for modern life',
              },
              {
                icon: '💚',
                title: 'From Earth to You',
                description: 'We work closely with small farmers who grow and harvest every ingredient',
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg border border-rauha-accent/10 hover:border-rauha-accent/30 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold text-rauha-dark mb-3">
                  {item.title}
                </h3>
                <p className="text-sm sm:text-base text-rauha-text/70 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Vision */}
      <section className="relative py-10 sm:py-14 px-4 sm:px-6 lg:px-8 bg-white overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 opacity-5">
          <Image
            src="/kumkumadi.jpg"
            alt="Background"
            fill
            className="object-cover"
          />
        </div>
        <div className="relative z-10 max-w-6xl mx-auto">
          <div className="bg-gradient-to-br from-rauha-accent/10 via-white to-rauha-taupe/10 rounded-3xl p-6 sm:p-10 lg:p-12 border border-rauha-accent/20">
            <div className="text-center mb-8">
              <div className="inline-flex items-center gap-2 bg-white px-3 py-1.5 rounded-full mb-4 shadow-sm">
                <Target className="w-3.5 h-3.5 text-rauha-accent" />
                <span className="text-xs font-semibold text-rauha-dark">Our Vision</span>
              </div>

              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-rauha-dark mb-4">
                Glow That Feels Like Peace
              </h2>

              <p className="text-base sm:text-lg text-rauha-text/80 max-w-3xl mx-auto leading-relaxed mb-6">
                Your skin doesn't need perfection — it needs patience. When it's nourished and left to breathe, it glows on its own.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-5 sm:p-6 shadow-lg">
                <Users className="w-10 h-10 text-rauha-accent mb-3" />
                <h3 className="text-xl font-bold text-rauha-dark mb-3">
                  A Ritual, Not a Routine
                </h3>
                <p className="text-sm sm:text-base text-rauha-text/70 leading-relaxed">
                  Rauha is your reminder to slow down. To treat skincare not as a routine, but as a ritual — a moment to pause, breathe, and reconnect with yourself.
                </p>
              </div>

              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-5 sm:p-6 shadow-lg">
                <Sparkles className="w-10 h-10 text-rauha-accent mb-3" />
                <h3 className="text-xl font-bold text-rauha-dark mb-3">
                  Rooted in India
                </h3>
                <p className="text-sm sm:text-base text-rauha-text/70 leading-relaxed">
                  We work closely with small farmers and local artisans who grow, harvest, and infuse every ingredient by hand. Every Rauha oil tells their story — of patience, purity, and purpose.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Commitment */}
      <section className="relative py-10 sm:py-14 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-rauha-light to-white overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 opacity-5">
          <Image
            src="/skinoil1.jpg"
            alt="Background"
            fill
            className="object-cover"
          />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-rauha-dark mb-6">
            Our Commitment to You
          </h2>

          <div className="space-y-4 text-left bg-white rounded-2xl p-5 sm:p-8 shadow-xl border border-rauha-accent/20">
            {[
              {
                title: 'Nature Over Trends',
                description: 'We follow the earth\'s rhythm, not market demands. Our oils are made when they\'re ready — not rushed.',
              },
              {
                title: 'Honesty Always',
                description: 'No fillers, no false claims, no shortcuts. What you see is what your skin receives.',
              },
              {
                title: 'Patience, Not Perfection',
                description: 'Real transformation takes time. We believe in slow, steady nourishment — not instant fixes.',
              },
              {
                title: 'From Earth, With Care',
                description: 'Every ingredient is sourced with respect — for the land, for the farmers, and for your skin.',
              },
            ].map((item, index) => (
              <div key={index} className="flex items-start gap-3 p-3 rounded-xl hover:bg-rauha-light/50 transition-colors">
                <div className="w-7 h-7 rounded-full bg-rauha-accent/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-rauha-accent font-bold text-sm">{index + 1}</span>
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-rauha-dark mb-1.5">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-rauha-text/70 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-10 sm:py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-rauha-accent/10 via-rauha-light to-rauha-taupe/10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-rauha-dark mb-4">
            Join Our Journey
          </h2>
          <p className="text-sm sm:text-base text-rauha-text/70 mb-6 leading-relaxed">
            Be part of a community that believes in science, transparency, and the right to healthy skin for everyone.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/#waitlist"
              className="inline-flex items-center gap-3 bg-gradient-to-r from-rauha-accent to-rauha-taupe hover:from-rauha-taupe hover:to-rauha-accent text-white font-bold px-7 py-3 rounded-full shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 w-full sm:w-auto justify-center"
            >
              Join the Community
              <ArrowRight className="w-4 h-4" />
            </Link>

            <Link
              href="/skin-quiz"
              className="inline-flex items-center gap-2 text-rauha-accent hover:text-rauha-dark font-semibold transition-colors duration-300 text-sm sm:text-base"
            >
              Take Our Skin Quiz
              <Sparkles className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
