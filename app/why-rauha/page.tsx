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
        <section className="pt-32 sm:pt-36 pb-10 sm:pb-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-rauha-taupe/20 to-white">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-rauha-dark mb-4 leading-tight">
              Why <span className="text-rauha-accent">Rauha</span>?
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-rauha-text leading-relaxed mb-2">
              Nature's Messenger for Modern India
            </p>
            <p className="text-sm sm:text-base text-rauha-text/80 leading-relaxed italic">
              Made in small batches, not factories. Indian herbs, honest sourcing, pure processes.
            </p>
          </div>
        </section>

        {/* The Meaning Section */}
        <section className="relative py-10 sm:py-14 px-4 sm:px-6 lg:px-8 overflow-hidden">
          {/* Background Image */}
          <div className="absolute inset-0 opacity-10">
            <Image
              src="/3f873081-2fc7-46b1-a9d8-cb21297e1a78.jpg"
              alt="Background"
              fill
              className="object-cover"
            />
          </div>
          <div className="max-w-6xl mx-auto relative z-10">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="relative h-64 sm:h-72 rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="/004e3c07-4982-4a5e-b366-a73f5534d55b.jpg"
                  alt="Rauha - Peace and tranquility"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-700"
                  priority
                />
              </div>
              <div>
                <h2 className="text-2xl sm:text-3xl font-bold text-rauha-dark mb-4">
                  Rauha Means <span className="text-rauha-accent">Peace</span>
                </h2>
                <p className="text-sm sm:text-base text-rauha-text leading-relaxed mb-3">
                  In Finnish, "Rauha" translates to peace, serenity, and tranquility. This embodies our philosophy: skincare should bring peace to your mind and radiance to your skin.
                </p>
                <p className="text-sm sm:text-base text-rauha-text leading-relaxed">
                  We believe that true beauty comes from calm — from nourished, balanced skin that glows naturally.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* The Research Journey */}
        <section className="py-10 sm:py-14 px-4 sm:px-6 lg:px-8 bg-rauha-taupe/10">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-2xl sm:text-3xl font-bold text-rauha-dark mb-3">
                Because Your Skin Deserves <span className="text-rauha-accent">Truth</span>
              </h2>
              <p className="text-base sm:text-lg text-rauha-text max-w-2xl mx-auto">
                We don't chase perfection or promises. We believe in purity, patience, and peace.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
                <div className="text-3xl font-bold text-rauha-accent mb-3">🌿</div>
                <h3 className="text-base sm:text-lg font-bold text-rauha-dark mb-2">Handcrafted in India</h3>
                <p className="text-sm text-rauha-text">
                  Made in small batches with herbs grown by hand in Indian farms — rooted in tradition, refined for modern life.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
                <div className="text-3xl font-bold text-rauha-accent mb-3">🌾</div>
                <h3 className="text-base sm:text-lg font-bold text-rauha-dark mb-2">Free from Fillers</h3>
                <p className="text-sm text-rauha-text">
                  No fillers. No synthetic fragrance. No false claims. Just pure, effective ingredients.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
                <div className="text-3xl font-bold text-rauha-accent mb-3">🌼</div>
                <h3 className="text-base sm:text-lg font-bold text-rauha-dark mb-2">Made in Rhythm</h3>
                <p className="text-sm text-rauha-text">
                  We make every batch with the patience nature deserves — slowly, honestly, in harmony with the earth.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Philosophy */}
        <section className="relative py-10 sm:py-14 px-4 sm:px-6 lg:px-8 overflow-hidden">
          {/* Background Image */}
          <div className="absolute inset-0 opacity-10">
            <Image
              src="/3f873081-2fc7-46b1-a9d8-cb21297e1a78.jpg"
              alt="Background"
              fill
              className="object-cover"
            />
          </div>
          <div className="max-w-6xl mx-auto relative z-10">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="order-2 md:order-1">
                <h2 className="text-2xl sm:text-3xl font-bold text-rauha-dark mb-5">
                  Our <span className="text-rauha-accent">Philosophy</span>
                </h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-semibold text-rauha-dark mb-1.5">Nature Over Trends</h3>
                    <p className="text-sm text-rauha-text">
                      We don't chase what's popular. We honor what's real — herbs, oils, and the earth's ancient wisdom.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-rauha-dark mb-1.5">Quality Over Speed</h3>
                    <p className="text-sm text-rauha-text">
                      Our oils are infused slowly, made in small batches. We create when nature is ready — not when the market demands.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-rauha-dark mb-1.5">Honesty Always</h3>
                    <p className="text-sm text-rauha-text">
                      Every ingredient is sourced with care. Every bottle tells the truth. No shortcuts, no fillers, no false glow.
                    </p>
                  </div>
                </div>
              </div>
              <div className="relative h-64 md:h-72 rounded-2xl overflow-hidden shadow-xl order-1 md:order-2">
                <Image
                  src="/skinoil1.jpg"
                  alt="Natural ingredients and peaceful essence"
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>
        </section>

        {/* The Promise */}
        <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-rauha-dark text-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl font-bold mb-5">
              Our Promise to You
            </h2>
            <p className="text-base sm:text-lg leading-relaxed mb-6 opacity-90">
              "We don't bottle beauty. We bottle balance."
              <br /><br />
              Rauha isn't here to change your skin. It's here to help you listen — to your skin, your rhythm, your peace. We don't sell fascination. We offer what your skin truly needs.
            </p>
            <div className="inline-block">
              <p className="text-base font-semibold text-rauha-accent">
                — The Rauha Wellness Team
              </p>
            </div>
          </div>
        </section>

        {/* Why These Two Oils */}
        <section className="relative py-10 sm:py-14 px-4 sm:px-6 lg:px-8 overflow-hidden">
          {/* Background Image */}
          <div className="absolute inset-0 opacity-10">
            <Image
              src="/a15ad3cd-c8af-44b3-9987-6d959e5f715b.jpg"
              alt="Background"
              fill
              className="object-cover"
            />
          </div>
          <div className="max-w-4xl mx-auto relative z-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-rauha-dark mb-6 text-center">
              Why These <span className="text-rauha-accent">Two Oils</span>?
            </h2>
            <div className="space-y-6">
              <div className="bg-rauha-taupe/10 p-6 rounded-2xl">
                <h3 className="text-xl font-bold text-rauha-dark mb-3">🌸 Kumkumadi Oil — The Golden Stillness</h3>
                <p className="text-sm sm:text-base text-rauha-text leading-relaxed mb-3">
                  In every drop lives the warmth of saffron, sandalwood, lotus, and turmeric — a timeless blend passed through generations of Indian care. Made in small batches using traditional Ayurvedic infusion, this golden elixir revives dull, tired skin.
                </p>
                <p className="text-xs sm:text-sm text-rauha-text italic">
                  "Made in silence. Meant for peace."
                </p>
              </div>

              <div className="bg-rauha-taupe/10 p-6 rounded-2xl">
                <h3 className="text-xl font-bold text-rauha-dark mb-3">🌹 Rosehip Oil — The Seed of Renewal</h3>
                <p className="text-sm sm:text-base text-rauha-text leading-relaxed mb-3">
                  Pressed slowly from wild rose seeds of the Himalayan foothills — pure, raw, and rich with life. It carries Vitamin C, antioxidants, and natural retinoids that heal from within, restoring softness, balance, and quiet radiance.
                </p>
                <p className="text-xs sm:text-sm text-rauha-text italic">
                  "Glow doesn't come from light. It comes from life."
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Research Section - Showing 2 featured studies */}
        <section className="relative overflow-hidden">
          {/* Background Image */}
          <div className="absolute inset-0 opacity-10">
            <Image
              src="/2b1f3ef7-bb63-4cfc-970a-76f307087f6f.jpg"
              alt="Background"
              fill
              className="object-cover"
            />
          </div>
          <div className="relative z-10">
            <ResearchSection
              papers={allResearch}
              title="Research That Drives Our Innovation"
              description="Featured studies from our extensive 10-year research journey into botanical skincare science."
              layout="horizontal"
              maxDisplay={2}
              showBackgroundImage={true}
            />
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-10 sm:py-14 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-rauha-taupe/20 to-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-rauha-dark mb-5">
              Experience the <span className="text-rauha-accent">Rauha Difference</span>
            </h2>
            <p className="text-base sm:text-lg text-rauha-text mb-8">
              Join our waitlist and be the first to experience skincare backed by a decade of dedicated research.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/skin-quiz"
                className="inline-block bg-rauha-accent hover:bg-rauha-accent/90 text-rauha-dark font-semibold px-8 py-3 rounded-full transition-all duration-300 hover:shadow-xl hover:scale-105 text-base"
              >
                Take the Skin Survey
              </Link>
              <a
                href="/#waitlist"
                className="inline-block bg-rauha-dark hover:bg-rauha-dark/90 text-white font-semibold px-8 py-3 rounded-full transition-all duration-300 hover:shadow-xl hover:scale-105 text-base"
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
