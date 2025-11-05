'use client';

import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      quote: "My skin feels like it's breathing again.",
      author: "Priya M.",
      location: "Mumbai"
    },
    {
      quote: "It feels like therapy in a bottle.",
      author: "Ananya K.",
      location: "Bangalore"
    },
    {
      quote: "Finally, skincare that doesn't overwhelm — it heals.",
      author: "Rahul S.",
      location: "Delhi"
    },
    {
      quote: "I can feel the purity in every drop. This is what my skin needed.",
      author: "Meera R.",
      location: "Pune"
    },
    {
      quote: "Rauha brought calm to my skin and my mind.",
      author: "Kavya L.",
      location: "Chennai"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  try {
    return (
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-rauha-taupe/10 via-rauha-light to-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-rauha-dark mb-4 sm:mb-6">
              From Forest to Face —
            </h2>
            <p className="text-lg sm:text-xl text-rauha-text">
              Loved by Those Who Listen to Nature.
            </p>
          </div>

          {/* Testimonial Carousel */}
          <div className="relative">
            <div className="bg-white rounded-2xl shadow-xl p-8 sm:p-12 lg:p-16 min-h-[280px] flex flex-col justify-center relative overflow-hidden">
              {/* Decorative Quote Icon */}
              <Quote className="absolute top-6 left-6 w-12 h-12 sm:w-16 sm:h-16 text-rauha-accent/10" />

              {/* Testimonial Content */}
              <div className="relative z-10 text-center space-y-6">
                <blockquote className="text-xl sm:text-2xl md:text-3xl font-medium text-rauha-dark leading-relaxed italic">
                  "{testimonials[currentIndex].quote}"
                </blockquote>

                <div className="pt-4">
                  <p className="text-base sm:text-lg font-semibold text-rauha-accent">
                    {testimonials[currentIndex].author}
                  </p>
                  <p className="text-sm sm:text-base text-rauha-text/70">
                    {testimonials[currentIndex].location}
                  </p>
                </div>
              </div>

              {/* Navigation Arrows */}
              <button
                onClick={prevTestimonial}
                className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 bg-white/80 hover:bg-white rounded-full shadow-lg flex items-center justify-center text-rauha-accent hover:text-rauha-dark transition-all duration-300 hover:scale-110"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
              </button>

              <button
                onClick={nextTestimonial}
                className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 bg-white/80 hover:bg-white rounded-full shadow-lg flex items-center justify-center text-rauha-accent hover:text-rauha-dark transition-all duration-300 hover:scale-110"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
              </button>
            </div>

            {/* Dots Indicator */}
            <div className="flex justify-center gap-2 mt-6 sm:mt-8">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? 'bg-rauha-accent w-8'
                      : 'bg-rauha-subtle/40 hover:bg-rauha-subtle'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  } catch (error) {
    return null;
  }
}
