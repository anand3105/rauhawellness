'use client';

import { useState } from 'react';
import { Send, CheckCircle2, Sparkles, Instagram } from 'lucide-react';

export default function GiveawayEntryForm() {
  const [formData, setFormData] = useState({
    name: '',
    contact: '',
    instagramHandle: '',
    skinType: '',
    productPreference: '',
  });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage('');

    try {
      // Determine if contact is email or phone
      const isEmail = formData.contact.includes('@');

      // Validate phone if not email
      if (!isEmail) {
        let phoneStr = formData.contact.trim();
        phoneStr = phoneStr.replace(/^\+91[-\s]?/, '');
        const cleanedPhone = phoneStr.replace(/\D/g, '');

        if (cleanedPhone.length !== 10) {
          setMessage('Please enter a valid 10-digit phone number');
          setLoading(false);
          return;
        }
      }

      const payload = {
        name: formData.name,
        instagramHandle: formData.instagramHandle,
        skinType: formData.skinType,
        productPreference: formData.productPreference,
        ...(isEmail
          ? { email: formData.contact }
          : { phone: formData.contact.trim().replace(/^\+91[-\s]?/, '').replace(/\D/g, '') }
        ),
      };

      const response = await fetch('/api/giveaway', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitted(true);
        setMessage('🎉 You\'re entered! Check your email/phone for next steps.');
        setFormData({
          name: '',
          contact: '',
          instagramHandle: '',
          skinType: '',
          productPreference: '',
        });
      } else {
        setMessage(data.error || 'Something went wrong. Please try again.');
      }
    } catch (error) {
      setMessage('Failed to submit entry. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <div className="relative bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl sm:rounded-3xl p-8 sm:p-12 text-center shadow-xl border border-green-200 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-green-400/10 to-emerald-400/10" />
        <div className="relative z-10">
          <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center shadow-lg animate-bounce">
            <CheckCircle2 className="w-10 h-10 text-white" />
          </div>
          <h3 className="text-2xl sm:text-3xl font-bold text-rauha-dark mb-4">
            You're In! 🎉
          </h3>
          <p className="text-base sm:text-lg text-rauha-text/80 mb-6 leading-relaxed">
            Your entry has been submitted successfully. Now complete the steps below to maximize your chances!
          </p>

          <div className="bg-white/80 rounded-xl p-6 mb-6 text-left space-y-4">
            <h4 className="font-bold text-rauha-dark text-lg mb-3 flex items-center gap-2">
              <Instagram className="w-5 h-5 text-pink-500" />
              Complete These Steps on Instagram:
            </h4>
            <div className="space-y-3 text-sm sm:text-base text-rauha-text/80">
              <div className="flex items-start gap-3">
                <span className="flex-shrink-0 w-6 h-6 bg-rauha-accent text-white rounded-full flex items-center justify-center text-xs font-bold">1</span>
                <span>Follow <strong>@RauhaWellness</strong></span>
              </div>
              <div className="flex items-start gap-3">
                <span className="flex-shrink-0 w-6 h-6 bg-rauha-accent text-white rounded-full flex items-center justify-center text-xs font-bold">2</span>
                <span>Like & Save our giveaway post</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="flex-shrink-0 w-6 h-6 bg-rauha-accent text-white rounded-full flex items-center justify-center text-xs font-bold">3</span>
                <span>Comment your <strong>skin type</strong></span>
              </div>
              <div className="flex items-start gap-3">
                <span className="flex-shrink-0 w-6 h-6 bg-rauha-accent text-white rounded-full flex items-center justify-center text-xs font-bold">4</span>
                <span>Tag <strong>2 friends</strong> who love skincare</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="flex-shrink-0 w-6 h-6 bg-rauha-accent text-white rounded-full flex items-center justify-center text-xs font-bold">5</span>
                <span>Share to your Story & tag us</span>
              </div>
            </div>
          </div>

          <a
            href="https://instagram.com/rauhawellness"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-gradient-to-r from-purple-500 via-pink-500 to-rose-500 text-white font-bold px-8 py-4 rounded-full shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 group"
          >
            <Instagram className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
            Go to Instagram
            <Sparkles className="w-4 h-4 animate-pulse" />
          </a>

          <p className="text-xs text-rauha-text/60 mt-4">
            Winners will be announced on product launch day via email/phone and on Instagram!
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="relative bg-white/90 backdrop-blur-md rounded-2xl sm:rounded-3xl p-6 sm:p-10 shadow-xl border border-rauha-accent/30 overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-rauha-accent/10 to-transparent rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-rauha-taupe/10 to-transparent rounded-full blur-3xl" />

      <div className="relative z-10">
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-rauha-accent/20 to-rauha-taupe/20 px-4 py-2 rounded-full mb-4">
            <Sparkles className="w-4 h-4 text-rauha-accent animate-pulse" />
            <span className="text-sm font-semibold text-rauha-dark">Step 1: Enter Below</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-rauha-dark mb-3">
            Enter the Giveaway
          </h2>
          <p className="text-base sm:text-lg text-rauha-text/70">
            Fill in your details to get started
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Name */}
          <div>
            <label className="block text-sm font-semibold text-rauha-dark mb-2">
              Full Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              placeholder="Enter your name"
              className="w-full px-4 sm:px-5 py-3 bg-white/80 border border-rauha-accent/30 rounded-xl text-rauha-dark placeholder-rauha-text/40 focus:outline-none focus:border-rauha-accent focus:bg-white focus:shadow-md transition-all duration-300"
            />
          </div>

          {/* Contact */}
          <div>
            <label className="block text-sm font-semibold text-rauha-dark mb-2">
              Email or Phone <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              required
              value={formData.contact}
              onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
              placeholder="your@email.com or phone number"
              className="w-full px-4 sm:px-5 py-3 bg-white/80 border border-rauha-accent/30 rounded-xl text-rauha-dark placeholder-rauha-text/40 focus:outline-none focus:border-rauha-accent focus:bg-white focus:shadow-md transition-all duration-300"
            />
          </div>

          {/* Instagram Handle */}
          <div>
            <label className="block text-sm font-semibold text-rauha-dark mb-2">
              Instagram Handle <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-rauha-text/50">@</span>
              <input
                type="text"
                required
                value={formData.instagramHandle}
                onChange={(e) => setFormData({ ...formData, instagramHandle: e.target.value.replace('@', '') })}
                placeholder="yourusername"
                className="w-full pl-8 pr-4 sm:pr-5 py-3 bg-white/80 border border-rauha-accent/30 rounded-xl text-rauha-dark placeholder-rauha-text/40 focus:outline-none focus:border-rauha-accent focus:bg-white focus:shadow-md transition-all duration-300"
              />
            </div>
          </div>

          {/* Skin Type */}
          <div>
            <label className="block text-sm font-semibold text-rauha-dark mb-2">
              Your Skin Type <span className="text-red-500">*</span>
            </label>
            <select
              required
              value={formData.skinType}
              onChange={(e) => setFormData({ ...formData, skinType: e.target.value })}
              className="w-full px-4 sm:px-5 py-3 bg-white/80 border border-rauha-accent/30 rounded-xl text-rauha-dark focus:outline-none focus:border-rauha-accent focus:bg-white focus:shadow-md transition-all duration-300"
            >
              <option value="">Select your skin type</option>
              <option value="dry">Dry</option>
              <option value="oily">Oily</option>
              <option value="combination">Combination</option>
              <option value="sensitive">Sensitive</option>
              <option value="mature">Mature</option>
            </select>
          </div>

          {/* Product Preference */}
          <div>
            <label className="block text-sm font-semibold text-rauha-dark mb-2">
              Which oil would you prefer to win? <span className="text-red-500">*</span>
            </label>
            <div className="grid sm:grid-cols-2 gap-3">
              <button
                type="button"
                onClick={() => setFormData({ ...formData, productPreference: 'kumkumadi' })}
                className={`p-4 rounded-xl border-2 transition-all duration-300 text-left ${
                  formData.productPreference === 'kumkumadi'
                    ? 'border-rauha-accent bg-rauha-accent/10 shadow-lg'
                    : 'border-rauha-accent/20 bg-white/50 hover:border-rauha-accent/50'
                }`}
              >
                <div className="flex items-center gap-2 mb-1">
                  <div className="w-3 h-3 rounded-full bg-gradient-to-br from-amber-400 to-orange-500" />
                  <span className="font-bold text-rauha-dark">Kumkumadi Oil</span>
                </div>
                <p className="text-xs text-rauha-text/60">For dry, dull, or mature skin</p>
              </button>

              <button
                type="button"
                onClick={() => setFormData({ ...formData, productPreference: 'rosehip' })}
                className={`p-4 rounded-xl border-2 transition-all duration-300 text-left ${
                  formData.productPreference === 'rosehip'
                    ? 'border-rose-500 bg-rose-500/10 shadow-lg'
                    : 'border-rauha-accent/20 bg-white/50 hover:border-rauha-accent/50'
                }`}
              >
                <div className="flex items-center gap-2 mb-1">
                  <div className="w-3 h-3 rounded-full bg-gradient-to-br from-pink-400 to-rose-500" />
                  <span className="font-bold text-rauha-dark">Rosehip Oil</span>
                </div>
                <p className="text-xs text-rauha-text/60">For oily or acne-prone skin</p>
              </button>
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading || !formData.productPreference}
            className="w-full bg-gradient-to-r from-rauha-accent to-rauha-taupe hover:from-rauha-taupe hover:to-rauha-accent text-white font-bold px-6 py-4 rounded-full transition-all duration-500 hover:shadow-2xl hover:scale-[1.02] flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 group text-base sm:text-lg"
          >
            {loading ? (
              <>
                <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                Submitting...
              </>
            ) : (
              <>
                <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                Submit Entry
                <Sparkles className="w-5 h-5 animate-pulse" />
              </>
            )}
          </button>

          {message && (
            <div className={`text-center p-4 rounded-xl ${
              message.includes('entered')
                ? 'bg-green-50 text-green-700 border border-green-200'
                : 'bg-red-50 text-red-700 border border-red-200'
            } animate-in fade-in slide-in-from-top-2 duration-300`}>
              <p className="text-sm sm:text-base font-medium">{message}</p>
            </div>
          )}

          <p className="text-xs text-rauha-text/50 text-center leading-relaxed">
            By entering, you agree to our Terms & Conditions and Privacy Policy.
            You must complete Instagram steps to be eligible for prizes.
          </p>
        </form>
      </div>
    </div>
  );
}
