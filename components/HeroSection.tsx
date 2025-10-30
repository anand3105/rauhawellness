'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function HeroSection() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const heroImages = [
    '/90c98e07-3c4d-4ed3-9e5f-bd1b9dfea1b5.jpg',
    '/43e4405a-e771-4ae2-be2f-0154ee34b662.jpg',
    '/d5bb04ee-c10b-4d57-bd92-52976284f3ac.jpg',
    '/2b1f3ef7-bb63-4cfc-970a-76f307087f6f.jpg',
    '/skinoil1.jpg',
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % heroImages.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, [heroImages.length]);

  try {
    return (
      <section className="relative pt-28 sm:pt-36 pb-12 sm:pb-20 px-4 sm:px-6 lg:px-8 min-h-[600px] sm:min-h-[700px] flex items-center overflow-hidden">
        {/* Background Image Slider */}
        {heroImages.map((image, index) => (
          <div
            key={image}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentImageIndex ? 'opacity-60' : 'opacity-0'
            }`}
          >
            <Image
              src={image}
              alt="Skincare background"
              fill
              className="object-cover"
              priority={index === 0}
            />
          </div>
        ))}

        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-white/60" />

        {/* Content */}
        <div className="relative z-10 max-w-5xl mx-auto text-center w-full">
          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-rauha-dark mb-6 sm:mb-8 leading-tight px-2" style={{ textShadow: '0 0 1px white, 0 0 2px white, 0 0 3px white' }}>
            10 Years of Skin Science.<br />
            <span className="text-rauha-accent">Coming Soon.</span>
          </h1>

          <div className="max-w-3xl mx-auto space-y-4 sm:space-y-6">
            <p className="text-base sm:text-lg md:text-xl text-rauha-text leading-relaxed px-2" style={{ textShadow: '0 0 1px white, 0 0 2px white' }}>
              Rauha is dedicated to <strong>science-based skincare</strong>, powered by a decade of relentless research.
              Our mission is to transform your skin using only the most <strong>researched and expert-finalized ingredients</strong>.
            </p>

            <p className="text-sm sm:text-base md:text-lg text-rauha-dark italic font-medium px-2" style={{ textShadow: '0 0 1px white, 0 0 2px white' }}>
              Skin is our only focus. Science is our only guide.
            </p>

            <div className="mt-8 sm:mt-10">
              <a
                href="/#waitlist"
                className="relative inline-block bg-rauha-accent hover:bg-rauha-accent/90 text-rauha-dark font-semibold px-10 py-4 rounded-full transition-all duration-300 hover:shadow-2xl hover:scale-110 text-base sm:text-lg shadow-lg hover:-translate-y-1 border-2 border-rauha-accent hover:border-rauha-dark overflow-hidden group"
              >
                <span className="relative z-10">✨ Be First to Glow ✨</span>
                <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/40 to-transparent"></span>
              </a>
            </div>
          </div>
        </div>
      </section>
    );
  } catch (error) {
    console.error('Error rendering HeroSection:', error);
    return null;
  }
}
