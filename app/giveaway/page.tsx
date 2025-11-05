'use client';

import { useEffect } from 'react';
import GiveawayHero from '@/components/GiveawayHero';
import GiveawayEntryForm from '@/components/GiveawayEntryForm';
import { CheckCircle2, Users, Star, Instagram } from 'lucide-react';

export default function GiveawayPage() {
  useEffect(() => {
    // Set page title
    document.title = 'Find Your Glow Giveaway - Win Premium Skincare Oils | Rauha Wellness';

    // Set meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Enter our exclusive Find Your Glow Giveaway to win Kumkumadi or Rosehip oil + ₹500 gift card. Join the Rauha Wellness community for science-based natural skincare.');
    }
  }, []);

  return (
    <main className="min-h-screen bg-gradient-to-b from-rauha-light to-white">
      {/* Hero Section */}
      <GiveawayHero />

      {/* How to Enter Section */}
      <section className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-rauha-dark mb-4">
              How to Enter
            </h2>
            <p className="text-base sm:text-lg text-rauha-text/70 max-w-2xl mx-auto">
              Simple steps to maximize your chances of winning
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 sm:gap-8 mb-16">
            {/* Step 1 */}
            <div className="relative group">
              <div className="bg-gradient-to-br from-white to-rauha-light rounded-2xl p-6 sm:p-8 shadow-lg border border-rauha-accent/20 hover:shadow-xl hover:scale-105 transition-all duration-300">
                <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-br from-rauha-accent to-amber-500 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg">
                  1
                </div>
                <div className="mb-4 mt-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-rauha-accent/20 to-rauha-accent/10 rounded-2xl flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8 text-rauha-accent" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-rauha-dark mb-3 text-center">
                  Fill the Form
                </h3>
                <p className="text-sm sm:text-base text-rauha-text/70 text-center leading-relaxed">
                  Complete the entry form below with your details and select your preferred oil
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="relative group">
              <div className="bg-gradient-to-br from-white to-rauha-light rounded-2xl p-6 sm:p-8 shadow-lg border border-rauha-accent/20 hover:shadow-xl hover:scale-105 transition-all duration-300">
                <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-br from-pink-500 to-rose-500 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg">
                  2
                </div>
                <div className="mb-4 mt-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-pink-500/20 to-pink-500/10 rounded-2xl flex items-center justify-center mx-auto">
                    <Instagram className="w-8 h-8 text-pink-500" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-rauha-dark mb-3 text-center">
                  Complete Instagram Steps
                </h3>
                <p className="text-sm sm:text-base text-rauha-text/70 text-center leading-relaxed">
                  Follow @RauhaWellness, like, comment, tag friends, and share to maximize your chances
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="relative group">
              <div className="bg-gradient-to-br from-white to-rauha-light rounded-2xl p-6 sm:p-8 shadow-lg border border-rauha-accent/20 hover:shadow-xl hover:scale-105 transition-all duration-300">
                <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg">
                  3
                </div>
                <div className="mb-4 mt-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500/20 to-green-500/10 rounded-2xl flex items-center justify-center mx-auto">
                    <Star className="w-8 h-8 text-green-500" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-rauha-dark mb-3 text-center">
                  Wait for Results!
                </h3>
                <p className="text-sm sm:text-base text-rauha-text/70 text-center leading-relaxed">
                  Winners will be announced on product launch day via email, phone, and Instagram. Good luck!
                </p>
              </div>
            </div>
          </div>

          {/* Entry Form */}
          <div className="max-w-2xl mx-auto">
            <GiveawayEntryForm />
          </div>
        </div>
      </section>

      {/* Why Join Section */}
      <section className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-rauha-light via-white to-rauha-subtle/10">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-rauha-dark mb-4">
              Why Join the Rauha Community?
            </h2>
            <p className="text-base sm:text-lg text-rauha-text/70">
              More than just a giveaway
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: '🌿',
                title: 'Handcrafted in India',
                description: 'Made slowly in small batches with herbs grown by hand in Indian farms',
              },
              {
                icon: '🌾',
                title: 'Natural & Pure',
                description: 'Cold-pressed oils with no harmful chemicals, fillers, or synthetics',
              },
              {
                icon: '🌸',
                title: 'Rooted in Peace',
                description: 'Skincare that brings calm to your routine and radiance to your skin',
              },
              {
                icon: '🍃',
                title: 'Slow-Made Ritual',
                description: 'Early access to oils infused with patience, created with intention',
              },
              {
                icon: '🌼',
                title: 'From Earth to You',
                description: 'Stories from the land, farmers, and artisans behind every bottle',
              },
              {
                icon: '💚',
                title: 'A Healing Community',
                description: 'Join souls who believe in nature, honesty, and gentle transformation',
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-rauha-accent/10 hover:border-rauha-accent/30 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-lg font-bold text-rauha-dark mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-rauha-text/70 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Terms & Conditions */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-rauha-dark mb-6 text-center">
            Terms & Conditions
          </h2>
          <div className="bg-rauha-light/50 rounded-xl p-6 sm:p-8 border border-rauha-accent/10">
            <ul className="space-y-3 text-sm sm:text-base text-rauha-text/70">
              <li className="flex items-start gap-2">
                <span className="text-rauha-accent font-bold mt-1">•</span>
                <span>Giveaway open to residents of India only</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-rauha-accent font-bold mt-1">•</span>
                <span>Participants must be 13 years or older</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-rauha-accent font-bold mt-1">•</span>
                <span>Must complete both website entry form AND Instagram steps to be eligible</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-rauha-accent font-bold mt-1">•</span>
                <span>Winners will be chosen randomly and contacted via email/phone at the day of launching of our products</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-rauha-accent font-bold mt-1">•</span>
                <span>Prizes are non-transferable and cannot be exchanged for cash</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-rauha-accent font-bold mt-1">•</span>
                <span>Rauha Wellness reserves the right to modify or cancel the giveaway at any time</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-rauha-accent font-bold mt-1">•</span>
                <span>By entering, you consent to receive marketing communications from Rauha Wellness</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-rauha-accent font-bold mt-1">•</span>
                <span>Duplicate entries or bot entries will be disqualified</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-rauha-accent/10 via-rauha-light to-rauha-taupe/10">
        <div className="max-w-3xl mx-auto text-center">
          <Users className="w-16 h-16 text-rauha-accent mx-auto mb-6" />
          <h2 className="text-3xl sm:text-4xl font-bold text-rauha-dark mb-4">
            Join the Glow Revolution
          </h2>
          <p className="text-base sm:text-lg text-rauha-text/70 mb-8 leading-relaxed italic">
            Don't miss this chance to discover your perfect oil match and experience the gentle, earthy glow that comes from nature's care.
          </p>
          <a
            href="#entry-form"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector('form')?.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }}
            className="inline-flex items-center gap-3 bg-gradient-to-r from-rauha-accent to-rauha-taupe hover:from-rauha-taupe hover:to-rauha-accent text-white font-bold px-8 py-4 rounded-full shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 text-base sm:text-lg"
          >
            Enter Now
            <Star className="w-5 h-5 animate-pulse" />
          </a>
        </div>
      </section>
    </main>
  );
}
