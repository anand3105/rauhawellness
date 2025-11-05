'use client';

import Image from 'next/image';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

export default function GlowPhilosophy() {
  const { ref: headingRef, isVisible: headingVisible } = useScrollAnimation<HTMLDivElement>();
  const { ref: contentRef, isVisible: contentVisible } = useScrollAnimation<HTMLDivElement>({ threshold: 0.3 });

  try {
    return (
      <section className="py-10 sm:py-14 px-4 sm:px-6 lg:px-8 bg-white relative overflow-hidden">
        {/* Decorative background element with floating animation */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-rauha-accent/5 rounded-full blur-3xl -z-0 animate-breathe" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-rauha-taupe/10 rounded-full blur-3xl -z-0 animate-breathe" style={{ animationDelay: '3s' }} />
        <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-rauha-subtle/5 rounded-full blur-2xl -z-0 animate-float" />

        <div className="max-w-6xl mx-auto relative z-10">
          <div
            ref={headingRef}
            className="text-center mb-8 sm:mb-10"
          >
            <h2 className={`text-2xl sm:text-3xl md:text-4xl font-bold text-rauha-dark mb-4 sm:mb-5 transition-all duration-1000 ${
              headingVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}>
              Glow that feels like <span className="text-rauha-accent italic">peace.</span>
            </h2>
            <p className={`text-sm sm:text-base text-rauha-text max-w-3xl mx-auto leading-relaxed transition-all duration-1000 delay-200 ${
              headingVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}>
              This is emotional storytelling — connecting the outer glow to inner calm.
              <br />
              <span className="italic text-rauha-dark font-medium mt-1 inline-block">
                Beauty is balance, not speed.
              </span>
            </p>
          </div>

          {/* Philosophy Grid */}
          <div
            ref={contentRef}
            className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 items-center"
          >
            {/* Image Side */}
            <div className={`relative h-64 sm:h-72 rounded-2xl overflow-hidden shadow-2xl order-2 md:order-1 transition-all duration-1000 ${
              contentVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
            }`}>
              <div className="absolute inset-0 bg-gradient-to-br from-rauha-accent/20 to-rauha-taupe/20" />
              <Image
                src="/43e4405a-e771-4ae2-be2f-0154ee34b662.jpg"
                alt="Natural beauty in soft light"
                fill
                className="object-cover hover:scale-105 transition-transform duration-700"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>

            {/* Content Side */}
            <div className={`space-y-5 order-1 md:order-2 transition-all duration-1000 delay-200 ${
              contentVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
            }`}>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 bg-rauha-accent rounded-full mt-1.5 flex-shrink-0" />
                  <div>
                    <h3 className="text-base sm:text-lg font-semibold text-rauha-dark mb-1">From Earth to Essence</h3>
                    <p className="text-sm sm:text-base text-rauha-text/80 leading-relaxed">
                      Every drop carries the wisdom of Indian soil, transformed slowly into pure nourishment for your skin.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 bg-rauha-accent rounded-full mt-1.5 flex-shrink-0" />
                  <div>
                    <h3 className="text-base sm:text-lg font-semibold text-rauha-dark mb-1">Ritual, Not Routine</h3>
                    <p className="text-sm sm:text-base text-rauha-text/80 leading-relaxed">
                      Your skincare is a moment of calm — a sacred pause in the rush of modern life.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 bg-rauha-accent rounded-full mt-1.5 flex-shrink-0" />
                  <div>
                    <h3 className="text-base sm:text-lg font-semibold text-rauha-dark mb-1">Balance Over Speed</h3>
                    <p className="text-sm sm:text-base text-rauha-text/80 leading-relaxed">
                      True beauty emerges when skin finds its natural rhythm. We don't rush healing — we honor it.
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-rauha-subtle/30">
                <p className="text-xs sm:text-sm text-rauha-text italic">
                  "When you slow down, your skin listens. When your skin listens, peace begins to glow."
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
