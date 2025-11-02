import Link from 'next/link';
import Image from 'next/image';
import { Sparkles, ArrowRight } from 'lucide-react';

export default function SkinQuizCTA() {
  return (
    <section className="py-12 sm:py-16 bg-gradient-to-br from-rauha-accent/5 via-white to-rauha-taupe/10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-rauha-accent to-rauha-taupe rounded-2xl overflow-hidden shadow-xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0 items-stretch">
            {/* Left Content */}
            <div className="p-6 sm:p-8 lg:p-10 text-white flex flex-col justify-center">
              <div className="flex items-center gap-2 mb-3">
                <Sparkles className="w-6 h-6" />
                <span className="text-sm font-medium uppercase tracking-wider">Personalized for You</span>
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3">
                Find Your Perfect Skincare Match
              </h2>
              <p className="text-white/90 mb-6 text-sm sm:text-base">
                Take our 2-minute skin quiz and get a personalized product recommendation based on your unique skin type, concerns, and goals.
              </p>
              <Link
                href="/skin-quiz"
                className="inline-flex items-center gap-2 bg-white text-rauha-accent px-6 py-3 rounded-lg font-semibold hover:bg-white/95 transition-all duration-300 shadow-lg hover:shadow-xl group w-fit"
              >
                Start Skin Quiz
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* Right Image */}
            <div className="relative h-64 md:h-auto min-h-[250px]">
              <Image
                src="/skinoil1.jpg"
                alt="Skincare oils and natural ingredients"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-rauha-accent/20 to-transparent"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
