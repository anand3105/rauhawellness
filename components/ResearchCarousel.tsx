'use client';

import { useState } from 'react';
import { ChevronLeft, ChevronRight, ExternalLink, Award } from 'lucide-react';
import Image from 'next/image';

interface ResearchPaper {
  title: string;
  journal: string;
  year: number;
  summary: string;
  link: string;
  outcome: string;
}

interface ResearchCarouselProps {
  papers: ResearchPaper[];
  title?: string;
  description?: string;
}

export default function ResearchCarousel({
  papers,
  title = "Science-Backed Natural Healing",
  description = "Research that proves our products are genuine and how natural ingredients help heal your skin"
}: ResearchCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const nextSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prev) => (prev + 1) % papers.length);
    setTimeout(() => setIsTransitioning(false), 500);
  };

  const prevSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prev) => (prev - 1 + papers.length) % papers.length);
    setTimeout(() => setIsTransitioning(false), 500);
  };

  const goToSlide = (index: number) => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex(index);
    setTimeout(() => setIsTransitioning(false), 500);
  };

  // Show 3 cards at a time on desktop, 1 on mobile
  const getVisibleCards = () => {
    const cards = [];
    for (let i = 0; i < 3; i++) {
      const index = (currentIndex + i) % papers.length;
      cards.push(papers[index]);
    }
    return cards;
  };

  const visibleCards = getVisibleCards();

  try {
    return (
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white via-rauha-light to-rauha-taupe/10 relative overflow-hidden">
        {/* Decorative background */}
        <div className="absolute inset-0 opacity-5">
          <Image
            src="/b632bc7b-2ea6-4866-9fb3-f2c19c51b822.jpg"
            alt="Research background"
            fill
            className="object-cover"
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-2 bg-rauha-accent/10 px-4 py-2 rounded-full mb-4">
              <Award className="w-4 h-4 text-rauha-accent" />
              <span className="text-sm font-semibold text-rauha-dark">Scientific Evidence</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-rauha-dark mb-4 sm:mb-6">
              {title}
            </h2>
            <p className="text-base sm:text-lg text-rauha-text max-w-3xl mx-auto leading-relaxed">
              {description}
            </p>
          </div>

          {/* Carousel Container */}
          <div className="relative">
            {/* Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-8">
              {visibleCards.map((paper, idx) => {
                const actualIndex = (currentIndex + idx) % papers.length;
                return (
                  <div
                    key={actualIndex}
                    className={`bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105 ${
                      isTransitioning ? 'opacity-0 scale-95' : 'opacity-100 scale-100'
                    } ${idx > 0 ? 'hidden md:block' : ''} ${idx > 1 ? 'hidden lg:block' : ''}`}
                  >
                    {/* Card Header with gradient */}
                    <div className="relative h-32 bg-gradient-to-br from-rauha-accent/20 via-rauha-taupe/30 to-rauha-subtle/20 flex items-center justify-center">
                      <div className="absolute inset-0 bg-[url('/rosehips.jpg')] opacity-10 bg-cover bg-center" />
                      <div className="relative z-10 text-center px-4">
                        <div className="inline-block bg-green-500 text-white text-xs font-bold px-3 py-1.5 rounded-full mb-2">
                          ✓ Clinically Proven
                        </div>
                        <p className="text-xs text-rauha-dark/70 font-medium">
                          {paper.journal} • {paper.year}
                        </p>
                      </div>
                    </div>

                    {/* Card Content */}
                    <div className="p-6 sm:p-8">
                      <h3 className="text-lg sm:text-xl font-bold text-rauha-dark mb-4 leading-tight line-clamp-2">
                        {paper.title}
                      </h3>

                      <div className="mb-4">
                        <p className="text-sm font-semibold text-rauha-accent mb-2">Key Finding:</p>
                        <p className="text-sm text-rauha-text leading-relaxed line-clamp-2">
                          {paper.outcome}
                        </p>
                      </div>

                      <p className="text-sm text-rauha-text/80 leading-relaxed mb-6 line-clamp-3">
                        {paper.summary}
                      </p>

                      {/* Learn More Button */}
                      <a
                        href={paper.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2 w-full bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white font-semibold px-6 py-3 rounded-full transition-all duration-300 hover:shadow-lg group"
                      >
                        Learn More
                        <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={prevSlide}
              disabled={isTransitioning}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 sm:-translate-x-6 w-12 h-12 sm:w-14 sm:h-14 bg-white hover:bg-rauha-accent text-rauha-dark hover:text-white rounded-full shadow-xl flex items-center justify-center transition-all duration-300 hover:scale-110 disabled:opacity-50 disabled:cursor-not-allowed z-20"
              aria-label="Previous research papers"
            >
              <ChevronLeft className="w-6 h-6 sm:w-7 sm:h-7" />
            </button>

            <button
              onClick={nextSlide}
              disabled={isTransitioning}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 sm:translate-x-6 w-12 h-12 sm:w-14 sm:h-14 bg-white hover:bg-rauha-accent text-rauha-dark hover:text-white rounded-full shadow-xl flex items-center justify-center transition-all duration-300 hover:scale-110 disabled:opacity-50 disabled:cursor-not-allowed z-20"
              aria-label="Next research papers"
            >
              <ChevronRight className="w-6 h-6 sm:w-7 sm:h-7" />
            </button>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-8">
            {papers.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                disabled={isTransitioning}
                className={`transition-all duration-300 rounded-full ${
                  index === currentIndex
                    ? 'bg-purple-600 w-8 h-3'
                    : 'bg-rauha-subtle/40 hover:bg-rauha-subtle w-3 h-3'
                }`}
                aria-label={`Go to research paper ${index + 1}`}
              />
            ))}
          </div>

          {/* Footer Note */}
          <div className="mt-12 text-center">
            <p className="text-xs sm:text-sm text-rauha-text/60 italic max-w-2xl mx-auto">
              All research papers are from peer-reviewed journals and publicly accessible scientific databases.
              These studies demonstrate the genuine healing properties of natural ingredients used in our products.
            </p>
          </div>
        </div>
      </section>
    );
  } catch (error) {
    return null;
  }
}
