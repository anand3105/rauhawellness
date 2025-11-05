import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, Droplet, Sparkles, Shield, Leaf } from 'lucide-react';
import ResearchSection from '@/components/ResearchSection';
import { getResearchByProduct } from '@/lib/research-data';
import { Metadata } from 'next';
import { PAGE_SEO, BRAND_INFO, generateProductStructuredData } from '@/lib/seo-config';

export const metadata: Metadata = {
  title: PAGE_SEO.rosehip.title,
  description: PAGE_SEO.rosehip.description,
  keywords: PAGE_SEO.rosehip.keywords,
  alternates: {
    canonical: `${BRAND_INFO.domain}/products/rosehip-oil`,
  },
  openGraph: {
    title: PAGE_SEO.rosehip.title,
    description: PAGE_SEO.rosehip.description,
    url: `${BRAND_INFO.domain}/products/rosehip-oil`,
    type: 'website',
    images: [
      {
        url: '/Rosehipoil_carton.jpg',
        width: 1200,
        height: 1200,
        alt: 'Rosehip Oil - The Potent Superfood',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: PAGE_SEO.rosehip.title,
    description: PAGE_SEO.rosehip.description,
    images: ['/Rosehipoil_carton.jpg'],
  },
};

export default function RosehipOilPage() {
  const rosehipResearch = getResearchByProduct('rosehip');
  const productStructuredData = generateProductStructuredData('rosehip');

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
          className="inline-flex items-center gap-2 text-rauha-text hover:text-rauha-accent transition-colors mb-6 sm:mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </Link>

        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 mb-12 sm:mb-16">
          <div className="relative aspect-square bg-gradient-to-br from-rauha-subtle/40 to-rauha-taupe/60 rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl">
            <Image
              src="/Rosehipoil_carton.jpg"
              alt="Rosehip Oil - The Potent Superfood"
              fill
              className="object-contain p-6 sm:p-8"
              priority
            />
            <div className="absolute top-6 right-6 z-10">
              <span className="bg-rauha-accent text-rauha-dark text-xs font-bold px-4 py-2 rounded-full uppercase tracking-wide shadow-lg">
                Expert Finalized
              </span>
            </div>
          </div>

          <div className="flex flex-col justify-center">
            <div className="mb-6">
              <span className="inline-block bg-rauha-subtle/30 text-rauha-dark text-sm font-semibold px-4 py-2 rounded-full mb-4">
                30ml
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-rauha-dark mb-4 leading-tight">
                Rosehip Oil
              </h1>
              <p className="text-xl text-rauha-accent font-semibold mb-6 italic">
                The Seed of Renewal
              </p>
            </div>

            <p className="text-lg text-rauha-text leading-relaxed mb-6 sm:mb-8">
              Modern yet earthy — wild rosehip, rich in vitamins and antioxidants. Pressed slowly from wild rose seeds of the Himalayan foothills — pure, raw, and rich with life. Nature's gift for repairing and reviving urban skin, restoring softness, balance, and quiet radiance.
            </p>
            <p className="text-base text-rauha-text/70 italic mb-6 sm:mb-8">
              "Glow doesn't come from light. It comes from life."
            </p>

            <div className="bg-rauha-taupe/20 rounded-2xl p-6 mb-6 sm:mb-8">
              <h3 className="text-lg font-bold text-rauha-dark mb-4">Coming Soon - December 2025</h3>
              <p className="text-rauha-text mb-4">
                Join our waitlist to receive <strong className="text-rauha-accent">15% OFF</strong> at launch.
              </p>
              <a
                href="/#waitlist"
                className="inline-block bg-rauha-accent hover:bg-rauha-accent/90 text-rauha-dark font-bold px-8 py-4 rounded-xl transition-all duration-300 hover:shadow-lg w-full text-center"
              >
                Join Waitlist & Get 15% OFF
              </a>
            </div>

            <Link
              href="/skin-quiz"
              className="text-rauha-accent hover:text-rauha-dark font-medium transition-colors text-center"
            >
              Not sure? Take our Skin Survey →
            </Link>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12 sm:mb-16">
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h2 className="text-2xl font-bold text-rauha-dark mb-6 flex items-center gap-3">
              <Sparkles className="w-6 h-6 text-rauha-accent" />
              Key Benefits
            </h2>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <span className="text-rauha-accent font-bold">✓</span>
                <div>
                  <strong className="text-rauha-dark">Heals scars, dullness, and fine lines:</strong>
                  <span className="text-rauha-text"> Gentle renewal from within</span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-rauha-accent font-bold">✓</span>
                <div>
                  <strong className="text-rauha-dark">Strengthens skin's barrier:</strong>
                  <span className="text-rauha-text"> Rich in essential fatty acids</span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-rauha-accent font-bold">✓</span>
                <div>
                  <strong className="text-rauha-dark">Boosts collagen naturally:</strong>
                  <span className="text-rauha-text"> Supports your skin's natural regeneration</span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-rauha-accent font-bold">✓</span>
                <div>
                  <strong className="text-rauha-dark">Leaves a soft, earthy glow:</strong>
                  <span className="text-rauha-text"> Natural radiance, not shine</span>
                </div>
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h2 className="text-2xl font-bold text-rauha-dark mb-6 flex items-center gap-3">
              <Leaf className="w-6 h-6 text-rauha-accent" />
              Key Ingredients
            </h2>
            <ul className="space-y-4">
              <li className="border-b border-rauha-subtle/20 pb-4">
                <strong className="text-rauha-dark">Trans-Retinoic Acid:</strong>
                <p className="text-rauha-text text-sm mt-1">Natural vitamin A derivative, clinically proven anti-aging compound</p>
              </li>
              <li className="border-b border-rauha-subtle/20 pb-4">
                <strong className="text-rauha-dark">Omega-3 & Omega-6:</strong>
                <p className="text-rauha-text text-sm mt-1">Essential fatty acids for skin barrier repair and regeneration</p>
              </li>
              <li className="border-b border-rauha-subtle/20 pb-4">
                <strong className="text-rauha-dark">Vitamin C:</strong>
                <p className="text-rauha-text text-sm mt-1">Powerful antioxidant, brightens and protects against damage</p>
              </li>
              <li>
                <strong className="text-rauha-dark">Lycopene:</strong>
                <p className="text-rauha-text text-sm mt-1">Photoprotective carotenoid, fights environmental stressors</p>
              </li>
            </ul>
          </div>
        </div>

        <div className="bg-gradient-to-br from-rauha-dark to-rauha-text rounded-2xl sm:rounded-3xl p-10 lg:p-12 text-white mb-12 sm:mb-16">
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
            <Shield className="w-8 h-8 text-rauha-accent" />
            The Science Behind Rosehip
          </h2>
          <div className="space-y-4 text-rauha-light leading-relaxed">
            <p>
              Rosehip Oil is pressed slowly from wild rose seeds — pure, unrefined, and rich with the earth's healing power.
              Extracted with care from Rosa canina, it contains nature's most concentrated blend of essential fatty acids,
              Vitamin C, and natural retinoids.
            </p>
            <p>
              Each drop works gently to:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Heal and fade scars naturally</li>
              <li>Strengthen and repair your skin's barrier</li>
              <li>Restore moisture and softness</li>
              <li>Bring back a natural, earthy glow</li>
            </ul>
            <p className="text-rauha-accent font-semibold mt-6 italic">
              "Glow doesn't come from light. It comes from life."
            </p>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-8 lg:p-10 shadow-lg">
          <h2 className="text-2xl font-bold text-rauha-dark mb-6">How to Use</h2>
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="w-8 h-8 rounded-full bg-rauha-accent text-rauha-dark font-bold flex items-center justify-center flex-shrink-0">
                1
              </div>
              <div>
                <h4 className="font-semibold text-rauha-dark mb-1">Cleanse</h4>
                <p className="text-rauha-text">Apply to freshly cleansed skin, morning or evening</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-8 h-8 rounded-full bg-rauha-accent text-rauha-dark font-bold flex items-center justify-center flex-shrink-0">
                2
              </div>
              <div>
                <h4 className="font-semibold text-rauha-dark mb-1">Apply</h4>
                <p className="text-rauha-text">Use 2-3 drops, gently press into face, neck, and décolletage</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-8 h-8 rounded-full bg-rauha-accent text-rauha-dark font-bold flex items-center justify-center flex-shrink-0">
                3
              </div>
              <div>
                <h4 className="font-semibold text-rauha-dark mb-1">Layer</h4>
                <p className="text-rauha-text">Can be used alone or layered under moisturizer. Absorbs quickly without residue</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <ResearchSection
        papers={rosehipResearch}
        title="Clinical Evidence for Rosehip Oil"
        description="Explore the peer-reviewed research demonstrating Rosehip Oil's powerful anti-aging, collagen-boosting, and skin regeneration properties."
      />
    </main>
    );
  } catch (error) {
    console.error('Error rendering Rosehip Oil page:', error);
    return (
      <main className="min-h-screen pt-28 sm:pt-36 bg-rauha-light flex items-center justify-center px-4">
        <div className="text-center">
          <p className="text-rauha-text">Unable to load product details. Please refresh the page.</p>
        </div>
      </main>
    );
  }
}
