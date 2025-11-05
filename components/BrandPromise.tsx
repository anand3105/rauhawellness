'use client';

import Image from 'next/image';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

export default function BrandPromise() {
  const { ref: headingRef, isVisible: headingVisible } = useScrollAnimation<HTMLHeadingElement>();
  const { ref: gridRef, isVisible: gridVisible } = useScrollAnimation<HTMLDivElement>({ threshold: 0.2 });

  try {
    return (
      <section className="py-8 sm:py-10 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-rauha-light via-white to-rauha-taupe/20 relative overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 opacity-10">
          <Image
            src="/oil dropper.jpg"
            alt="Background"
            fill
            className="object-cover"
          />
        </div>

        {/* Floating decorative elements */}
        <div className="absolute top-10 right-10 w-32 h-32 bg-rauha-accent/5 rounded-full animate-float blur-2xl" style={{ animationDelay: '0s' }} />
        <div className="absolute bottom-10 left-10 w-28 h-28 bg-rauha-taupe/10 rounded-full animate-float blur-2xl" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-rauha-subtle/5 rounded-full animate-breathe blur-3xl" />

        <div className="max-w-5xl mx-auto text-center relative z-10">
          {/* Main Headline */}
          <h2
            ref={headingRef}
            className={`text-xl sm:text-2xl md:text-3xl font-bold text-rauha-dark mb-3 sm:mb-4 leading-tight transition-all duration-1000 ${
              headingVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            Skincare that <span className="text-rauha-accent italic">listens</span> — not sells.
          </h2>

          {/* Promise Points */}
          <div className="space-y-2 sm:space-y-3 max-w-3xl mx-auto">
            <p className="text-sm sm:text-base text-rauha-text leading-relaxed mb-5">
              Slow-made, honest oils from Indian soil.
            </p>

            <div
              ref={gridRef}
              className="grid grid-cols-1 sm:grid-cols-3 gap-3 py-3 sm:py-4"
            >
              {/* Card 1 */}
              <div className={`group bg-white/80 backdrop-blur-sm rounded-xl p-4 shadow-md hover:shadow-2xl border border-rauha-accent/10 hover:border-rauha-accent/30 transition-all duration-500 hover:-translate-y-2 cursor-pointer ${
                gridVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`} style={{ transitionDelay: '100ms' }}>
                <div className="w-10 h-10 mx-auto bg-gradient-to-br from-rauha-accent/20 to-rauha-accent/10 rounded-xl flex items-center justify-center mb-3 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                  <svg className="w-5 h-5 text-rauha-accent group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-sm sm:text-base font-bold text-rauha-dark mb-1.5 group-hover:text-rauha-accent transition-colors duration-300">No false promises</h3>
                <p className="text-xs text-rauha-text/70 leading-relaxed">Just honest ingredients that work with your skin</p>
                <div className="mt-3 pt-3 border-t border-rauha-accent/10">
                  <span className="text-[10px] sm:text-xs text-rauha-accent font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">✓ 100% Transparent</span>
                </div>
              </div>

              {/* Card 2 */}
              <div className={`group bg-white/80 backdrop-blur-sm rounded-xl p-4 shadow-md hover:shadow-2xl border border-rauha-accent/10 hover:border-rauha-accent/30 transition-all duration-500 hover:-translate-y-2 cursor-pointer ${
                gridVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`} style={{ transitionDelay: '300ms' }}>
                <div className="w-10 h-10 mx-auto bg-gradient-to-br from-rauha-taupe/20 to-rauha-taupe/10 rounded-xl flex items-center justify-center mb-3 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                  <svg className="w-5 h-5 text-rauha-taupe group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </div>
                <h3 className="text-sm sm:text-base font-bold text-rauha-dark mb-1.5 group-hover:text-rauha-accent transition-colors duration-300">No synthetic fillers</h3>
                <p className="text-xs text-rauha-text/70 leading-relaxed">Pure, plant-based formulas from nature</p>
                <div className="mt-3 pt-3 border-t border-rauha-accent/10">
                  <span className="text-[10px] sm:text-xs text-rauha-accent font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">✓ All Natural</span>
                </div>
              </div>

              {/* Card 3 */}
              <div className={`group bg-white/80 backdrop-blur-sm rounded-xl p-4 shadow-md hover:shadow-2xl border border-rauha-accent/10 hover:border-rauha-accent/30 transition-all duration-500 hover:-translate-y-2 cursor-pointer ${
                gridVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`} style={{ transitionDelay: '500ms' }}>
                <div className="w-10 h-10 mx-auto bg-gradient-to-br from-rauha-subtle/20 to-rauha-subtle/10 rounded-xl flex items-center justify-center mb-3 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                  <svg className="w-5 h-5 text-rauha-dark group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-sm sm:text-base font-bold text-rauha-dark mb-1.5 group-hover:text-rauha-accent transition-colors duration-300">Timeless care</h3>
                <p className="text-xs text-rauha-text/70 leading-relaxed">Balance and calm for lasting beauty</p>
                <div className="mt-3 pt-3 border-t border-rauha-accent/10">
                  <span className="text-[10px] sm:text-xs text-rauha-accent font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">✓ Traditional Wisdom</span>
                </div>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-rauha-dark italic font-semibold pt-2 animate-pulse">
              Rauha stands for purity, patience, peace.
            </p>
          </div>
        </div>
      </section>
    );
  } catch (error) {
    return null;
  }
}
