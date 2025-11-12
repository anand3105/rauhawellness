'use client';

import { useState, FormEvent, useEffect, useRef } from 'react';

export default function CTASection() {
  const [email, setEmail] = useState('');
  const [selectedProduct, setSelectedProduct] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlayingForward, setIsPlayingForward] = useState(true);
  const frameRef = useRef<number>();

  // Boomerang effect - play forward then reverse
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Start video after 2 seconds
    const startTimeout = setTimeout(() => {
      video.play().catch(() => {});
    }, 2000);

    const playReverse = () => {
      if (!video) return;

      // Play in reverse by decreasing currentTime
      if (video.currentTime <= 0) {
        // Reached start, switch to forward
        setIsPlayingForward(true);
        video.play().catch(() => {});
      } else {
        video.currentTime = Math.max(0, video.currentTime - 0.033); // ~30fps
        frameRef.current = requestAnimationFrame(playReverse);
      }
    };

    const handleEnded = () => {
      // Video ended (reached end while playing forward)
      setIsPlayingForward(false);
      video.pause();
      // Start playing in reverse
      frameRef.current = requestAnimationFrame(playReverse);
    };

    video.addEventListener('ended', handleEnded);

    return () => {
      clearTimeout(startTimeout);
      video.removeEventListener('ended', handleEnded);
      if (frameRef.current) {
        cancelAnimationFrame(frameRef.current);
      }
    };
  }, [isPlayingForward]);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setError('');

    if (!email || !selectedProduct) {
      setError('Please fill in all fields');
      return;
    }

    setIsLoading(true);

    try {
      const response = await fetch('/api/waitlist', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: email,
          selectedProduct: selectedProduct,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to join waitlist');
      }

      setIsSubmitted(true);
      setEmail('');
      setSelectedProduct('');
    } catch (err: any) {
      setError(err.message || 'Something went wrong. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  try {
    return (
      <section id="waitlist" className="relative py-10 sm:py-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Top Border Line */}
        <div className="absolute top-0 left-0 right-0 h-px bg-rauha-accent/20" />
        {/* Background Video - Boomerang Effect */}
        <video
          ref={videoRef}
          className="absolute inset-0 w-full h-full object-cover opacity-30"
          muted
          playsInline
          preload="auto"
        >
          <source src="/rauha.mp4" type="video/mp4" />
        </video>

        {/* Overlay to ensure text readability */}
        <div className="absolute inset-0 bg-gradient-to-br from-rauha-light/90 via-rauha-taupe/40 to-rauha-light/90" />

        <div className="max-w-3xl mx-auto relative z-10">
          <div className="text-center mb-6 sm:mb-8">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-rauha-dark mb-3 sm:mb-4 px-2">
              Good things take time —<br />
              <span className="text-rauha-accent italic">just like us.</span>
            </h2>

            <p className="text-sm sm:text-base text-rauha-text leading-relaxed px-4">
              Join the waitlist for early access to fresh, hand-blended batches.
              <span className="text-rauha-accent font-bold"> 15% OFF</span> on launch day.
            </p>
          </div>

          {isSubmitted && (
            <div className="mb-4 sm:mb-6 p-3 sm:p-4 bg-rauha-green/10 border-2 border-rauha-green/30 rounded-xl animate-in fade-in slide-in-from-top-5 duration-500">
              <p className="text-rauha-green font-semibold text-center text-sm sm:text-base">
                Success! Check your email for updates and your 15% OFF code!
              </p>
            </div>
          )}

          {error && (
            <div className="mb-4 sm:mb-6 p-3 sm:p-4 bg-red-50 border-2 border-red-200 rounded-xl">
              <p className="text-red-800 font-semibold text-center text-sm">
                {error}
              </p>
            </div>
          )}

          <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow-lg p-5 sm:p-6 lg:p-8 space-y-4 sm:space-y-5">
            <div>
              <label htmlFor="email" className="block text-xs sm:text-sm font-semibold text-rauha-dark mb-2">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                placeholder="your@email.com"
                className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border-2 border-rauha-subtle/40 rounded-lg focus:border-rauha-accent focus:ring-2 focus:ring-rauha-accent/20 outline-none transition-all text-rauha-text placeholder:text-rauha-subtle/60 text-sm"
              />
            </div>

            <div>
              <label className="block text-xs sm:text-sm font-semibold text-rauha-dark mb-2 sm:mb-3">
                Select Your Favorite Oil (Wishlist)
              </label>
              <div className="space-y-2 sm:space-y-3">
                <label className="flex items-start gap-3 p-3 sm:p-4 border-2 border-rauha-subtle/40 rounded-lg cursor-pointer hover:border-rauha-accent hover:bg-rauha-light transition-all">
                  <input
                    type="radio"
                    name="product"
                    value="kumkumadi"
                    checked={selectedProduct === 'kumkumadi'}
                    onChange={(e) => setSelectedProduct(e.target.value)}
                    required
                    className="mt-0.5 w-4 h-4 text-rauha-accent focus:ring-rauha-accent flex-shrink-0"
                  />
                  <div>
                    <div className="font-semibold text-rauha-dark text-sm">Kumkumadi Oil (30ml)</div>
                    <div className="text-xs text-rauha-text/70 mt-0.5">The Elixir of Luminosity</div>
                  </div>
                </label>

                <label className="flex items-start gap-3 p-3 sm:p-4 border-2 border-rauha-subtle/40 rounded-lg cursor-pointer hover:border-rauha-accent hover:bg-rauha-light transition-all">
                  <input
                    type="radio"
                    name="product"
                    value="rosehip"
                    checked={selectedProduct === 'rosehip'}
                    onChange={(e) => setSelectedProduct(e.target.value)}
                    required
                    className="mt-0.5 w-4 h-4 text-rauha-accent focus:ring-rauha-accent flex-shrink-0"
                  />
                  <div>
                    <div className="font-semibold text-rauha-dark text-sm">Rosehip Oil (30ml)</div>
                    <div className="text-xs text-rauha-text/70 mt-0.5">The Potent Superfood</div>
                  </div>
                </label>
              </div>
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-rauha-accent hover:bg-rauha-accent/90 text-rauha-dark font-semibold py-2.5 sm:py-3 px-5 sm:px-6 rounded-lg transition-all duration-300 hover:shadow-lg text-sm sm:text-base disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? 'Saving...' : 'Join Waitlist & Get 15% OFF'}
            </button>
          </form>
        </div>
      </section>
    );
  } catch (error) {
    return null;
  }
}
