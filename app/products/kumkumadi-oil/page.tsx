import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, Droplet, Sparkles, Shield, Leaf } from 'lucide-react';
import ResearchSection from '@/components/ResearchSection';
import { getResearchByProduct } from '@/lib/research-data';
import { Metadata } from 'next';
import { PAGE_SEO, BRAND_INFO, generateProductStructuredData, PRODUCTS } from '@/lib/seo-config';

export const metadata: Metadata = {
  title: PAGE_SEO.kumkumadi.title,
  description: PAGE_SEO.kumkumadi.description,
  keywords: PAGE_SEO.kumkumadi.keywords,
  alternates: {
    canonical: `${BRAND_INFO.domain}/products/kumkumadi-oil`,
  },
  openGraph: {
    title: PAGE_SEO.kumkumadi.title,
    description: PAGE_SEO.kumkumadi.description,
    url: `${BRAND_INFO.domain}/products/kumkumadi-oil`,
    type: 'website',
    images: [
      {
        url: '/Kumkumadioil_carton.jpg',
        width: 1200,
        height: 1200,
        alt: 'Kumkumadi Oil - The Elixir of Luminosity',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: PAGE_SEO.kumkumadi.title,
    description: PAGE_SEO.kumkumadi.description,
    images: ['/Kumkumadioil_carton.jpg'],
  },
};

export default function KumukadiOilPage() {
  const kumkumadiResearch = getResearchByProduct('kumkumadi');
  const productStructuredData = generateProductStructuredData('kumkumadi');

  try {
    return (
      <main className="min-h-screen pt-28 sm:pt-36 bg-rauha-light">
        {/* Structured Data - Product */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(productStructuredData),
          }}
        />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-rauha-text hover:text-rauha-accent transition-colors mb-6 sm:mb-8 text-sm sm:text-base"
          >
            <ArrowLeft className="w-3 h-3 sm:w-4 sm:h-4" />
            Back to Home
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 mb-12 sm:mb-16">
            <div className="relative aspect-square bg-gradient-to-br from-rauha-taupe/40 to-rauha-accent/20 rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="/Kumkumadioil_carton.jpg"
                alt="Kumkumadi Oil - The Elixir of Luminosity"
                fill
                className="object-contain p-6 sm:p-8"
                priority
              />
              <div className="absolute top-4 sm:top-6 right-4 sm:right-6 z-10">
                <span className="bg-rauha-accent text-rauha-dark text-[10px] sm:text-xs font-bold px-3 sm:px-4 py-1.5 sm:py-2 rounded-full uppercase tracking-wide shadow-lg">
                  Expert Finalized
                </span>
              </div>
            </div>

            <div className="flex flex-col justify-center">
              <div className="mb-4 sm:mb-6">
                <span className="inline-block bg-rauha-subtle/30 text-rauha-dark text-xs sm:text-sm font-semibold px-3 sm:px-4 py-1.5 sm:py-2 rounded-full mb-3 sm:mb-4">
                  30ml
                </span>
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-rauha-dark mb-3 sm:mb-4 leading-tight">
                  Kumkumadi Oil
                </h1>
                <p className="text-lg sm:text-xl text-rauha-accent font-semibold mb-4 sm:mb-6">
                  The Elixir of Luminosity
                </p>
              </div>

              <p className="text-base sm:text-lg text-rauha-text leading-relaxed mb-6 sm:mb-8">
              The ancient secret, perfected by modern science. Our most intensive research focus for luminosity,
              cell repair, and a flawless, even tone. Kumkumadi Oil is a timeless Ayurvedic formulation,
              scientifically validated for its ability to transform skin at the cellular level.
            </p>

              <div className="bg-rauha-taupe/20 rounded-2xl p-5 sm:p-6 mb-6 sm:mb-8">
                <h3 className="text-base sm:text-lg font-bold text-rauha-dark mb-3 sm:mb-4">Coming Soon - December 2025</h3>
                <p className="text-sm sm:text-base text-rauha-text mb-3 sm:mb-4">
                  Join our waitlist to receive <strong className="text-rauha-accent">15% OFF</strong> at launch.
                </p>
                <a
                  href="/#waitlist"
                  className="inline-block bg-rauha-accent hover:bg-rauha-accent/90 text-rauha-dark font-bold px-6 sm:px-8 py-3 sm:py-4 rounded-xl transition-all duration-300 hover:shadow-lg w-full text-center text-sm sm:text-base"
                >
                  Join Waitlist & Get 15% OFF
                </a>
              </div>

              <Link
                href="/skin-quiz"
                className="text-rauha-accent hover:text-rauha-dark font-medium transition-colors text-center block text-sm sm:text-base"
              >
                Not sure? Take our Skin Survey →
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-12 sm:mb-16">
            <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg">
              <h2 className="text-xl sm:text-2xl font-bold text-rauha-dark mb-4 sm:mb-6 flex items-center gap-2 sm:gap-3">
                <Sparkles className="w-5 h-5 sm:w-6 sm:h-6 text-rauha-accent" />
                Key Benefits
              </h2>
              <ul className="space-y-3 sm:space-y-4">
                <li className="flex items-start gap-2 sm:gap-3">
                  <span className="text-rauha-accent font-bold">✓</span>
                  <div>
                    <strong className="text-rauha-dark text-sm sm:text-base">Radiant Luminosity:</strong>
                    <span className="text-rauha-text text-sm sm:text-base"> Brightens dull skin and enhances natural glow</span>
                  </div>
                </li>
                <li className="flex items-start gap-2 sm:gap-3">
                  <span className="text-rauha-accent font-bold">✓</span>
                  <div>
                    <strong className="text-rauha-dark text-sm sm:text-base">Even Skin Tone:</strong>
                    <span className="text-rauha-text text-sm sm:text-base"> Fades dark spots, pigmentation, and blemishes</span>
                  </div>
                </li>
                <li className="flex items-start gap-2 sm:gap-3">
                  <span className="text-rauha-accent font-bold">✓</span>
                  <div>
                    <strong className="text-rauha-dark text-sm sm:text-base">Cell Repair:</strong>
                    <span className="text-rauha-text text-sm sm:text-base"> Promotes cellular regeneration and healing</span>
                  </div>
                </li>
                <li className="flex items-start gap-2 sm:gap-3">
                  <span className="text-rauha-accent font-bold">✓</span>
                  <div>
                    <strong className="text-rauha-dark text-sm sm:text-base">Deep Nourishment:</strong>
                    <span className="text-rauha-text text-sm sm:text-base"> Rich in antioxidants and essential nutrients</span>
                  </div>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg">
              <h2 className="text-xl sm:text-2xl font-bold text-rauha-dark mb-4 sm:mb-6 flex items-center gap-2 sm:gap-3">
                <Leaf className="w-5 h-5 sm:w-6 sm:h-6 text-rauha-accent" />
                Key Ingredients
              </h2>
              <ul className="space-y-3 sm:space-y-4">
                <li className="border-b border-rauha-subtle/20 pb-3 sm:pb-4">
                  <strong className="text-rauha-dark text-sm sm:text-base">Saffron (Crocus sativus):</strong>
                  <p className="text-rauha-text text-xs sm:text-sm mt-1">Brightening powerhouse, clinically proven to reduce pigmentation</p>
                </li>
                <li className="border-b border-rauha-subtle/20 pb-3 sm:pb-4">
                  <strong className="text-rauha-dark text-sm sm:text-base">Manjistha (Rubia cordifolia):</strong>
                  <p className="text-rauha-text text-xs sm:text-sm mt-1">Natural blood purifier, evens skin tone from within</p>
                </li>
                <li className="border-b border-rauha-subtle/20 pb-3 sm:pb-4">
                  <strong className="text-rauha-dark text-sm sm:text-base">Licorice Extract:</strong>
                  <p className="text-rauha-text text-xs sm:text-sm mt-1">Scientifically validated for hyperpigmentation reduction</p>
                </li>
                <li>
                  <strong className="text-rauha-dark text-sm sm:text-base">Sandalwood Oil:</strong>
                  <p className="text-rauha-text text-xs sm:text-sm mt-1">Anti-inflammatory, promotes clear, radiant complexion</p>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-gradient-to-br from-rauha-dark to-rauha-text rounded-2xl sm:rounded-3xl p-6 sm:p-10 lg:p-12 text-white mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 flex items-center gap-2 sm:gap-3">
              <Shield className="w-6 h-6 sm:w-8 sm:h-8 text-rauha-accent" />
              The Science Behind Kumkumadi
            </h2>
            <div className="space-y-3 sm:space-y-4 text-rauha-light leading-relaxed text-sm sm:text-base">
              <p>
                Kumkumadi Oil represents the perfect marriage of ancient Ayurvedic wisdom and modern scientific validation.
                Our formulation has undergone rigorous clinical testing to ensure efficacy and safety.
              </p>
              <p>
                Each ingredient is selected based on peer-reviewed research demonstrating its ability to:
              </p>
              <ul className="list-disc list-inside space-y-1.5 sm:space-y-2 ml-2 sm:ml-4">
                <li>Inhibit melanin production through tyrosinase inhibition</li>
                <li>Accelerate cellular turnover and collagen synthesis</li>
                <li>Provide powerful antioxidant protection against free radicals</li>
                <li>Enhance skin barrier function and hydration retention</li>
              </ul>
              <p className="text-rauha-accent font-semibold mt-4 sm:mt-6">
                10 years of research. 100% science-backed. Zero compromise on quality.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 sm:p-8 lg:p-10 shadow-lg">
            <h2 className="text-xl sm:text-2xl font-bold text-rauha-dark mb-4 sm:mb-6">How to Use</h2>
            <div className="space-y-4 sm:space-y-6">
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-rauha-accent text-rauha-dark font-bold flex items-center justify-center flex-shrink-0 text-sm sm:text-base">
                  1
                </div>
                <div>
                  <h4 className="font-semibold text-rauha-dark mb-1 text-sm sm:text-base">Cleanse</h4>
                  <p className="text-rauha-text text-sm sm:text-base">Start with freshly cleansed, slightly damp skin for optimal absorption</p>
                </div>
              </div>
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-rauha-accent text-rauha-dark font-bold flex items-center justify-center flex-shrink-0 text-sm sm:text-base">
                  2
                </div>
                <div>
                  <h4 className="font-semibold text-rauha-dark mb-1 text-sm sm:text-base">Apply</h4>
                  <p className="text-rauha-text text-sm sm:text-base">Take 3-4 drops and gently massage into face and neck using upward circular motions</p>
                </div>
              </div>
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-rauha-accent text-rauha-dark font-bold flex items-center justify-center flex-shrink-0 text-sm sm:text-base">
                  3
                </div>
                <div>
                  <h4 className="font-semibold text-rauha-dark mb-1 text-sm sm:text-base">Absorb</h4>
                  <p className="text-rauha-text text-sm sm:text-base">Allow 2-3 minutes for complete absorption. Use morning and night for best results</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <ResearchSection
          papers={kumkumadiResearch}
          title="Clinical Evidence for Kumkumadi Oil"
          description="Discover the peer-reviewed research supporting the efficacy of Kumkumadi Oil and its key ingredients for skin luminosity and rejuvenation."
        />
      </main>
    );
  } catch (error) {
    console.error('Error rendering Kumkumadi Oil page:', error);
    return (
      <main className="min-h-screen pt-28 sm:pt-36 bg-rauha-light flex items-center justify-center px-4">
        <div className="text-center">
          <p className="text-rauha-text">Unable to load product details. Please refresh the page.</p>
        </div>
      </main>
    );
  }
}
