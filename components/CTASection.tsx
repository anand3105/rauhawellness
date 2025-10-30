'use client';

import { useState, FormEvent } from 'react';

export default function CTASection() {
  const [email, setEmail] = useState('');
  const [selectedProduct, setSelectedProduct] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

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
      console.error('Error submitting form:', err);
      setError(err.message || 'Something went wrong. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  try {
    return (
      <section id="waitlist" className="py-12 sm:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-rauha-light via-rauha-taupe/20 to-rauha-light">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-rauha-dark mb-4 sm:mb-6 px-2">
              Unlock the Secret.<br />
              Join the Rauha Waitlist.
            </h2>

            <p className="text-base sm:text-lg text-rauha-text leading-relaxed px-4">
              Be the first to experience <strong>Rauha Wellness</strong>. We launch this December end.
              Subscribe now and add your favorite oil to the Wishlist to receive a{' '}
              <span className="text-rauha-accent font-bold">special 15% OFF</span> on launch day.
            </p>
          </div>

          {isSubmitted && (
            <div className="mb-6 sm:mb-8 p-4 sm:p-6 bg-green-50 border-2 border-green-200 rounded-xl animate-in fade-in slide-in-from-top-5 duration-500">
              <p className="text-green-800 font-semibold text-center text-sm sm:text-base md:text-lg">
                Success! Your wishlist is saved. Check your email for future updates and your 15% OFF code!
              </p>
            </div>
          )}

          {error && (
            <div className="mb-6 sm:mb-8 p-4 sm:p-6 bg-red-50 border-2 border-red-200 rounded-xl">
              <p className="text-red-800 font-semibold text-center text-sm sm:text-base">
                {error}
              </p>
            </div>
          )}

          <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-xl p-6 sm:p-8 lg:p-10 space-y-6 sm:space-y-8">
            <div>
              <label htmlFor="email" className="block text-xs sm:text-sm font-semibold text-rauha-dark mb-2 sm:mb-3">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                placeholder="your@email.com"
                className="w-full px-4 sm:px-5 py-3 sm:py-3.5 border-2 border-rauha-subtle/40 rounded-xl focus:border-rauha-accent focus:ring-2 focus:ring-rauha-accent/20 outline-none transition-all text-rauha-text placeholder:text-rauha-subtle/60 text-sm sm:text-base"
              />
            </div>

            <div>
              <label className="block text-xs sm:text-sm font-semibold text-rauha-dark mb-3 sm:mb-4">
                Select Your Favorite Oil (Wishlist)
              </label>
              <div className="space-y-3 sm:space-y-4">
                <label className="flex items-start gap-3 sm:gap-4 p-4 sm:p-5 border-2 border-rauha-subtle/40 rounded-xl cursor-pointer hover:border-rauha-accent hover:bg-rauha-light transition-all">
                  <input
                    type="radio"
                    name="product"
                    value="kumkumadi"
                    checked={selectedProduct === 'kumkumadi'}
                    onChange={(e) => setSelectedProduct(e.target.value)}
                    required
                    className="mt-0.5 sm:mt-1 w-4 h-4 sm:w-5 sm:h-5 text-rauha-accent focus:ring-rauha-accent flex-shrink-0"
                  />
                  <div>
                    <div className="font-semibold text-rauha-dark text-sm sm:text-base">Kumkumadi Oil (30ml)</div>
                    <div className="text-xs sm:text-sm text-rauha-text mt-0.5 sm:mt-1">The Elixir of Luminosity</div>
                  </div>
                </label>

                <label className="flex items-start gap-3 sm:gap-4 p-4 sm:p-5 border-2 border-rauha-subtle/40 rounded-xl cursor-pointer hover:border-rauha-accent hover:bg-rauha-light transition-all">
                  <input
                    type="radio"
                    name="product"
                    value="rosehip"
                    checked={selectedProduct === 'rosehip'}
                    onChange={(e) => setSelectedProduct(e.target.value)}
                    required
                    className="mt-0.5 sm:mt-1 w-4 h-4 sm:w-5 sm:h-5 text-rauha-accent focus:ring-rauha-accent flex-shrink-0"
                  />
                  <div>
                    <div className="font-semibold text-rauha-dark text-sm sm:text-base">Rosehip Oil (30ml)</div>
                    <div className="text-xs sm:text-sm text-rauha-text mt-0.5 sm:mt-1">The Potent Superfood</div>
                  </div>
                </label>
              </div>
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-rauha-accent hover:bg-rauha-accent/90 text-rauha-dark font-bold py-3 sm:py-4 px-6 sm:px-8 rounded-xl transition-all duration-300 hover:shadow-lg text-base sm:text-lg disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? 'Saving...' : 'Add to Wishlist & Subscribe'}
            </button>
          </form>
        </div>
      </section>
    );
  } catch (error) {
    console.error('Error rendering CTASection:', error);
    return null;
  }
}
