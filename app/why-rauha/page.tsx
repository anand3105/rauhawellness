import Image from 'next/image';
import Link from 'next/link';
import ResearchSection from '@/components/ResearchSection';
import { getAllResearch } from '@/lib/research-data';

export const metadata = {
  title: 'Why Rauha - Our Story & Philosophy | Rauha Wellness',
  description: 'Discover the science, research, and philosophy behind Rauha Wellness. Learn why we dedicated 10 years to perfecting skincare through expert research.',
};

export default function WhyRauhaPage() {
  const allResearch = getAllResearch();

  try {
    return (
      <main className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="pt-32 sm:pt-40 pb-16 sm:pb-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-rauha-taupe/20 to-white">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-rauha-dark mb-6 leading-tight">
              Why <span className="text-rauha-accent">Rauha</span>?
            </h1>
            <p className="text-xl sm:text-2xl text-rauha-text leading-relaxed">
              Because your skin deserves more than marketing promises.
              <br />
              It deserves <strong>10 years of dedicated research</strong>.
            </p>
          </div>
        </section>

        {/* The Meaning Section */}
        <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="relative h-80 md:h-96 rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="/90c98e07-3c4d-4ed3-9e5f-bd1b9dfea1b5.jpg"
                  alt="Rauha - Peace and tranquility"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              <div>
                <h2 className="text-3xl sm:text-4xl font-bold text-rauha-dark mb-6">
                  Rauha Means <span className="text-rauha-accent">Peace</span>
                </h2>
                <p className="text-lg text-rauha-text leading-relaxed mb-4">
                  In Finnish, "Rauha" translates to peace, serenity, and tranquility. This ancient concept embodies our philosophy: skincare should bring peace to your mind and radiance to your skin.
                </p>
                <p className="text-lg text-rauha-text leading-relaxed">
                  We believe that true beauty comes from inner peace combined with scientifically proven ingredients. No stress. No confusion. Just pure, researched skincare that works.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* The Research Journey */}
        <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-rauha-taupe/10">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-rauha-dark mb-6">
                A Decade of <span className="text-rauha-accent">Scientific Research</span>
              </h2>
              <p className="text-xl text-rauha-text max-w-3xl mx-auto">
                Our journey began with a simple question: What if skincare was based purely on science, not trends?
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <div className="text-4xl font-bold text-rauha-accent mb-4">10</div>
                <h3 className="text-xl font-bold text-rauha-dark mb-3">Years of Research</h3>
                <p className="text-rauha-text">
                  A full decade dedicated to studying ancient ingredients and modern dermatological science.
                </p>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <div className="text-4xl font-bold text-rauha-accent mb-4">100%</div>
                <h3 className="text-xl font-bold text-rauha-dark mb-3">Expert Finalized</h3>
                <p className="text-rauha-text">
                  Every ingredient, every formulation has been rigorously tested and approved by skincare experts.
                </p>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <div className="text-4xl font-bold text-rauha-accent mb-4">2</div>
                <h3 className="text-xl font-bold text-rauha-dark mb-3">Perfected Products</h3>
                <p className="text-rauha-text">
                  We believe in quality over quantity. Two extraordinary oils, perfected over a decade.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Philosophy */}
        <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1">
                <h2 className="text-3xl sm:text-4xl font-bold text-rauha-dark mb-6">
                  Our <span className="text-rauha-accent">Philosophy</span>
                </h2>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold text-rauha-dark mb-2">Science Over Marketing</h3>
                    <p className="text-rauha-text">
                      We don't chase trends. We follow research papers, clinical studies, and dermatological evidence.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-rauha-dark mb-2">Quality Over Quantity</h3>
                    <p className="text-rauha-text">
                      Instead of hundreds of products, we focus on perfecting a few that truly make a difference.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-rauha-dark mb-2">Transparency Always</h3>
                    <p className="text-rauha-text">
                      Every ingredient is listed. Every claim is backed by research. No secrets, no gimmicks.
                    </p>
                  </div>
                </div>
              </div>
              <div className="relative h-80 md:h-96 rounded-2xl overflow-hidden shadow-xl order-1 md:order-2">
                <Image
                  src="/d5bb04ee-c10b-4d57-bd92-52976284f3ac.jpg"
                  alt="Scientific research and development"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* The Promise */}
        <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-rauha-dark text-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              Our Promise to You
            </h2>
            <p className="text-xl leading-relaxed mb-8 opacity-90">
              "We promise to never compromise on research, never follow trends blindly, and never launch a product unless we would use it ourselves. Your skin is our only focus. Science is our only guide."
            </p>
            <div className="inline-block">
              <p className="text-lg font-semibold text-rauha-accent">
                — The Rauha Wellness Team
              </p>
            </div>
          </div>
        </section>

        {/* Why These Two Oils */}
        <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-rauha-dark mb-8 text-center">
              Why These <span className="text-rauha-accent">Two Oils</span>?
            </h2>
            <div className="space-y-8">
              <div className="bg-rauha-taupe/10 p-8 rounded-2xl">
                <h3 className="text-2xl font-bold text-rauha-dark mb-4">Kumkumadi Oil</h3>
                <p className="text-lg text-rauha-text leading-relaxed mb-4">
                  An ancient Ayurvedic formulation that has been used for centuries. Our research confirmed what ancient texts claimed: when properly formulated, Kumkumadi oil delivers exceptional luminosity, supports cell repair, and promotes an even skin tone.
                </p>
                <p className="text-rauha-text italic">
                  10 years of research to perfect a 5,000-year-old formula.
                </p>
              </div>

              <div className="bg-rauha-taupe/10 p-8 rounded-2xl">
                <h3 className="text-2xl font-bold text-rauha-dark mb-4">Rosehip Oil</h3>
                <p className="text-lg text-rauha-text leading-relaxed mb-4">
                  Clinically studied and proven to support natural collagen production, reduce the appearance of fine lines, and deeply even out skin tone. We source the highest quality rosehip oil and ensure maximum potency in every bottle.
                </p>
                <p className="text-rauha-text italic">
                  Nature's superfood, backed by modern science.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Research Section - Showing 2 featured studies */}
        <ResearchSection
          papers={allResearch}
          title="Research That Drives Our Innovation"
          description="Featured studies from our extensive 10-year research journey into botanical skincare science."
          layout="horizontal"
          maxDisplay={2}
        />

        {/* CTA Section */}
        <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-rauha-taupe/20 to-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-rauha-dark mb-6">
              Experience the <span className="text-rauha-accent">Rauha Difference</span>
            </h2>
            <p className="text-xl text-rauha-text mb-10">
              Join our waitlist and be the first to experience skincare backed by a decade of dedicated research.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/skin-quiz"
                className="inline-block bg-rauha-accent hover:bg-rauha-accent/90 text-rauha-dark font-semibold px-10 py-4 rounded-full transition-all duration-300 hover:shadow-xl hover:scale-105 text-lg"
              >
                Take the Skin Survey
              </Link>
              <a
                href="/#waitlist"
                className="inline-block bg-rauha-dark hover:bg-rauha-dark/90 text-white font-semibold px-10 py-4 rounded-full transition-all duration-300 hover:shadow-xl hover:scale-105 text-lg"
              >
                Join the Waitlist
              </a>
            </div>
          </div>
        </section>
      </main>
    );
  } catch (error) {
    console.error('Error rendering Why Rauha page:', error);
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-rauha-text">Failed to load page. Please try again.</p>
      </div>
    );
  }
}
