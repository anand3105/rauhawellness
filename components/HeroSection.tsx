'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Sparkles, ArrowRight } from 'lucide-react';

const heroMedia = [
  { type: 'video', src: '/rauha.mp4' },
  { type: 'image', src: '/2b1f3ef7-bb63-4cfc-970a-76f307087f6f.jpg' },
  { type: 'image', src: '/skinoil1.jpg' },
];

export default function HeroSection() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [contact, setContact] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  const currentMedia = heroMedia[currentImageIndex];

  useEffect(() => {
    // Only set interval for images, not video
    if (currentMedia.type === 'image') {
      const interval = setInterval(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % heroMedia.length);
      }, 5000); // Change image every 5 seconds

      return () => clearInterval(interval);
    } else if (currentMedia.type === 'video') {
      // Fallback timeout in case video doesn't trigger onEnded (e.g., video is too long or fails to load)
      const fallbackTimeout = setTimeout(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % heroMedia.length);
      }, 30000); // Move to next after 30 seconds if video doesn't end

      return () => clearTimeout(fallbackTimeout);
    }
  }, [currentImageIndex, currentMedia.type]);

  const handleVideoEnd = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % heroMedia.length);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage('');

    try {
      // Determine if input is email or phone
      const isEmail = contact.includes('@');

      // Validate phone number if not email
      if (!isEmail) {
        // Remove +91 prefix if present, then remove all non-digit characters
        let phoneStr = contact.trim();
        phoneStr = phoneStr.replace(/^\+91[-\s]?/, ''); // Remove +91, +91-, or +91 prefix
        const cleanedPhone = phoneStr.replace(/\D/g, ''); // Remove all non-digits

        if (cleanedPhone.length !== 10) {
          setMessage('Please enter a valid 10-digit phone number');
          setLoading(false);
          return;
        }
      }

      const payload = isEmail
        ? { email: contact, source: 'hero_form' }
        : {
            phone: contact.trim().replace(/^\+91[-\s]?/, '').replace(/\D/g, ''),
            source: 'hero_form'
          }; // Send cleaned phone without +91

      const response = await fetch('/api/community', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      const data = await response.json();

      if (response.ok) {
        setMessage('🎉 Welcome to the Rauha community!');
        setContact('');
      } else {
        setMessage(data.error || 'Something went wrong. Please try again.');
      }
    } catch (error) {
      setMessage('Failed to join. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  try {
    return (
      <section className="relative pt-28 sm:pt-32 pb-8 sm:pb-12 px-4 sm:px-6 lg:px-8 min-h-[500px] sm:min-h-[550px] flex items-center overflow-hidden">
        {/* Background Media Slider */}
        {heroMedia.map((media, index) => (
          <div
            key={media.src}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentImageIndex ? 'opacity-60' : 'opacity-0'
            }`}
          >
            {media.type === 'video' ? (
              <video
                autoPlay
                muted
                playsInline
                onEnded={handleVideoEnd}
                className="w-full h-full object-cover"
              >
                <source src={media.src} type="video/mp4" />
              </video>
            ) : (
              <Image
                src={media.src}
                alt="Skincare background"
                fill
                className="object-cover"
                priority={index === 0}
              />
            )}
          </div>
        ))}

        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-white/60" />

        {/* Content */}
        <div className="relative z-10 max-w-5xl mx-auto text-center w-full">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-rauha-dark mb-4 sm:mb-5 leading-tight px-2" style={{ textShadow: '0 0 1px white, 0 0 2px white, 0 0 3px white' }}>
            Every Herb Has a Story.<br />
            <span className="text-rauha-accent">Every Ritual Has a Soul</span>
          </h1>

          <div className="max-w-3xl mx-auto space-y-3 sm:space-y-4">
            <p className="text-sm sm:text-base md:text-lg text-rauha-text leading-relaxed px-2" style={{ textShadow: '0 0 1px white, 0 0 2px white' }}>
              Nature's quiet luxury, bottled for you.
            </p>

            <div className="mt-6 sm:mt-8 max-w-lg mx-auto px-4">
              {/* Join Community Box */}
              <div className="bg-white/90 backdrop-blur-md rounded-xl shadow-lg p-4 sm:p-5 border border-rauha-accent/20 hover:shadow-2xl transition-all duration-500 hover:scale-[1.02]">
                <div className="flex items-center justify-center gap-2 mb-2.5">
                  <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-rauha-accent animate-pulse" />
                  <h3 className="text-sm sm:text-base font-bold text-rauha-dark text-center">
                    Be First to Glow
                  </h3>
                  <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-rauha-accent animate-pulse" />
                </div>

                <p className="text-xs text-rauha-text/80 text-center mb-3 leading-snug">
                  Join our exclusive community for early access to slow-made, nature-rooted skincare
                </p>

                <form onSubmit={handleSubmit} className="space-y-2.5">
                  <div className="relative group">
                    <input
                      type="text"
                      placeholder="Email or phone (+91 optional)"
                      value={contact}
                      onChange={(e) => setContact(e.target.value)}
                      required
                      className="w-full px-3.5 sm:px-4 py-2 sm:py-2.5 bg-white/50 border border-rauha-accent/30 rounded-full text-rauha-dark placeholder-rauha-text/40 focus:outline-none focus:border-rauha-accent focus:bg-white focus:shadow-md text-xs sm:text-sm transition-all duration-300"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-gradient-to-r from-rauha-accent to-rauha-taupe hover:from-rauha-taupe hover:to-rauha-accent text-white font-semibold px-4 py-2 sm:py-2.5 rounded-full transition-all duration-500 hover:shadow-lg hover:scale-[1.02] flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed text-xs sm:text-sm group"
                  >
                    {loading ? (
                      <span className="flex items-center gap-2">
                        <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
                        Joining...
                      </span>
                    ) : (
                      <>
                        Join the Rauha Community
                        <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform duration-300" />
                      </>
                    )}
                  </button>

                  {message && (
                    <p className={`text-xs text-center font-medium animate-in fade-in slide-in-from-top-2 duration-300 ${message.includes('Welcome') ? 'text-rauha-green' : 'text-red-600'}`}>
                      {message}
                    </p>
                  )}
                </form>

                <p className="text-[10px] sm:text-xs text-rauha-text/50 text-center mt-2.5">
                  Get exclusive early access & special offers
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  } catch (error) {
    return null;
  }
}
