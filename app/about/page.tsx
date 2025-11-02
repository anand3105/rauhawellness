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
      <section className="relative pt-28 sm:pt-36 pb-16 sm:pb-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-rauha-accent/5 via-rauha-light to-rauha-taupe/10" />

        {/* Decorative Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-72 h-72 bg-rauha-accent/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-rauha-taupe/20 rounded-full blur-3xl animate-pulse delay-700" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-rauha-accent/10 px-4 py-2 rounded-full mb-6">
            <Heart className="w-4 h-4 text-rauha-accent" />
            <span className="text-sm font-semibold text-rauha-dark">Our Story</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-rauha-dark mb-6 leading-tight">
            Our Story.<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-rauha-accent to-rauha-taupe">
              Your Journey.
            </span>
          </h1>

          <p className="text-lg sm:text-xl md:text-2xl text-rauha-text max-w-3xl mx-auto leading-relaxed">
            Building a world where everyone has access to safe, science-backed skincare that truly works.
          </p>
        </div>
      </section>

      {/* Origin Story */}
      <section className="relative py-12 sm:py-20 px-4 sm:px-6 lg:px-8 bg-white overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 opacity-5">
          <Image
            src="/rosehips.jpg"
            alt="Background"
            fill
            className="object-cover"
          />
        </div>
        <div className="relative z-10 max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-rauha-accent/10 px-4 py-2 rounded-full mb-6">
                <Lightbulb className="w-4 h-4 text-rauha-accent" />
                <span className="text-sm font-semibold text-rauha-dark">It Started in 2016</span>
              </div>

              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-rauha-dark mb-6">
                A Journey from Concern to Creation
              </h2>

              <div className="space-y-4 text-base sm:text-lg text-rauha-text/80 leading-relaxed">
                <p>
                  Rauha Wellness was born from a simple observation: the cosmetics industry was filled with products that promised beauty but often compromised skin health.
                </p>

                <p>
                  Founded on a passion for science and a deep concern for what people were putting on their skin, our research journey began in <strong className="text-rauha-accent">2016</strong>.
                </p>

                <p>
                  What started as questions about ingredient safety and efficacy evolved into years of dedicated research, clinical studies, and formulation development.
                </p>

                <p className="text-rauha-dark font-semibold italic">
                  "We wanted to create something that could substitute harmful cosmetics — products that truly nourish, not just beautify."
                </p>
              </div>
            </div>

            <div className="relative h-96 sm:h-[500px] rounded-3xl overflow-hidden shadow-2xl group">
              <Image
                src="/oil dropper.jpg"
                alt="Laboratory Research - Essential Oils"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-rauha-dark/60 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                <div className="flex items-center gap-3 mb-2">
                  <Microscope className="w-8 h-8" />
                  <p className="text-3xl font-bold">Research-Driven</p>
                </div>
                <p className="text-lg opacity-90">Every Formula Backed by Science</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Research Journey */}
      <section className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-rauha-light to-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-2 bg-rauha-accent/10 px-4 py-2 rounded-full mb-6">
              <Microscope className="w-4 h-4 text-rauha-accent" />
              <span className="text-sm font-semibold text-rauha-dark">Science-Backed</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-rauha-dark mb-6">
              Built on Research, Not Hype
            </h2>

            <p className="text-lg sm:text-xl text-rauha-text/70 max-w-3xl mx-auto">
              Every formula, every ingredient, every claim — backed by extensive research and clinical evidence.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                icon: '📚',
                title: 'Peer-Reviewed Studies',
                description: 'Every ingredient is validated through published scientific research and clinical trials',
              },
              {
                icon: '🧪',
                title: 'Laboratory Testing',
                description: 'Rigorous testing for purity, potency, and safety before any product reaches you',
              },
              {
                icon: '🔬',
                title: 'Continuous Research',
                description: 'We\'re still researching, still improving, still discovering better solutions',
              },
              {
                icon: '🌿',
                title: 'Natural & Safe',
                description: 'No harmful chemicals, no synthetic additives — just pure, effective ingredients',
              },
              {
                icon: '✨',
                title: 'Expert-Finalized',
                description: 'Each formulation reviewed and approved by skincare experts and dermatologists',
              },
              {
                icon: '💚',
                title: 'Human-Friendly',
                description: 'Formulated with your skin\'s health and safety as the absolute priority',
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
      <section className="relative py-12 sm:py-20 px-4 sm:px-6 lg:px-8 bg-white overflow-hidden">
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
          <div className="bg-gradient-to-br from-rauha-accent/10 via-white to-rauha-taupe/10 rounded-3xl p-8 sm:p-12 lg:p-16 border border-rauha-accent/20">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full mb-6 shadow-sm">
                <Target className="w-4 h-4 text-rauha-accent" />
                <span className="text-sm font-semibold text-rauha-dark">Our Vision</span>
              </div>

              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-rauha-dark mb-6">
                Everyone Deserves Good Skin
              </h2>

              <p className="text-lg sm:text-xl text-rauha-text/80 max-w-3xl mx-auto leading-relaxed mb-8">
                We believe that healthy, glowing skin shouldn't be a privilege — it should be accessible to everyone.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 sm:p-8 shadow-lg">
                <Users className="w-12 h-12 text-rauha-accent mb-4" />
                <h3 className="text-2xl font-bold text-rauha-dark mb-4">
                  Building a Community
                </h3>
                <p className="text-base text-rauha-text/70 leading-relaxed">
                  More than a brand, we're creating a skincare community. A space where people can learn, share, and access products that actually work — without the harmful additives found in conventional cosmetics.
                </p>
              </div>

              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 sm:p-8 shadow-lg">
                <Sparkles className="w-12 h-12 text-rauha-accent mb-4" />
                <h3 className="text-2xl font-bold text-rauha-dark mb-4">
                  The Journey Continues
                </h3>
                <p className="text-base text-rauha-text/70 leading-relaxed">
                  Our research never stops. We're constantly exploring new ingredients, studying emerging science, and working to create better, safer, more effective solutions for every skin type and concern.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Commitment */}
      <section className="relative py-12 sm:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-rauha-light to-white overflow-hidden">
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
          <h2 className="text-3xl sm:text-4xl font-bold text-rauha-dark mb-8">
            Our Commitment to You
          </h2>

          <div className="space-y-6 text-left bg-white rounded-2xl p-6 sm:p-10 shadow-xl border border-rauha-accent/20">
            {[
              {
                title: 'Science Over Marketing',
                description: 'We let research guide us, not trends. Every claim we make is backed by evidence.',
              },
              {
                title: 'Transparency Always',
                description: 'You deserve to know exactly what you\'re putting on your skin and why.',
              },
              {
                title: 'Safety First',
                description: 'No compromises on ingredient safety. If it can harm your skin, it doesn\'t belong in our products.',
              },
              {
                title: 'Continuous Improvement',
                description: 'We\'re never satisfied. We\'re always researching, always learning, always improving.',
              },
            ].map((item, index) => (
              <div key={index} className="flex items-start gap-4 p-4 rounded-xl hover:bg-rauha-light/50 transition-colors">
                <div className="w-8 h-8 rounded-full bg-rauha-accent/20 flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-rauha-accent font-bold">{index + 1}</span>
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-rauha-dark mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm sm:text-base text-rauha-text/70 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-rauha-accent/10 via-rauha-light to-rauha-taupe/10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-rauha-dark mb-6">
            Join Our Journey
          </h2>
          <p className="text-base sm:text-lg text-rauha-text/70 mb-8 leading-relaxed">
            Be part of a community that believes in science, transparency, and the right to healthy skin for everyone.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/#waitlist"
              className="inline-flex items-center gap-3 bg-gradient-to-r from-rauha-accent to-rauha-taupe hover:from-rauha-taupe hover:to-rauha-accent text-white font-bold px-8 py-4 rounded-full shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 w-full sm:w-auto justify-center"
            >
              Join the Community
              <ArrowRight className="w-5 h-5" />
            </Link>

            <Link
              href="/skin-quiz"
              className="inline-flex items-center gap-2 text-rauha-accent hover:text-rauha-dark font-semibold transition-colors duration-300 text-base sm:text-lg"
            >
              Take Our Skin Quiz
              <Sparkles className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
