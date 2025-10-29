import Link from 'next/link';
import { ArrowLeft, Droplet, Sparkles, Shield, Leaf } from 'lucide-react';

export const metadata = {
  title: 'Kumkumadi Oil - The Elixir of Luminosity | Rauha Wellness',
  description: 'Ancient secret, perfected by modern science. Our most intensive research focus for luminosity, cell repair, and a flawless, even tone.',
};

export default function KumukadiOilPage() {
  return (
    <main className="min-h-screen pt-20 bg-rauha-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-rauha-text hover:text-rauha-accent transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </Link>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 mb-16">
          <div className="relative aspect-square bg-gradient-to-br from-rauha-taupe/40 to-rauha-accent/20 rounded-3xl overflow-hidden shadow-2xl">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <Droplet className="w-32 h-32 text-rauha-accent mx-auto mb-4 opacity-60" />
                <p className="text-rauha-text font-medium">Product Image</p>
              </div>
            </div>
            <div className="absolute top-6 right-6">
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
                Kumkumadi Oil
              </h1>
              <p className="text-xl text-rauha-accent font-semibold mb-6">
                The Elixir of Luminosity
              </p>
            </div>

            <p className="text-lg text-rauha-text leading-relaxed mb-8">
              The ancient secret, perfected by modern science. Our most intensive research focus for luminosity,
              cell repair, and a flawless, even tone. Kumkumadi Oil is a timeless Ayurvedic formulation,
              scientifically validated for its ability to transform skin at the cellular level.
            </p>

            <div className="bg-rauha-taupe/20 rounded-2xl p-6 mb-8">
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

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h2 className="text-2xl font-bold text-rauha-dark mb-6 flex items-center gap-3">
              <Sparkles className="w-6 h-6 text-rauha-accent" />
              Key Benefits
            </h2>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <span className="text-rauha-accent font-bold">✓</span>
                <div>
                  <strong className="text-rauha-dark">Radiant Luminosity:</strong>
                  <span className="text-rauha-text"> Brightens dull skin and enhances natural glow</span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-rauha-accent font-bold">✓</span>
                <div>
                  <strong className="text-rauha-dark">Even Skin Tone:</strong>
                  <span className="text-rauha-text"> Fades dark spots, pigmentation, and blemishes</span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-rauha-accent font-bold">✓</span>
                <div>
                  <strong className="text-rauha-dark">Cell Repair:</strong>
                  <span className="text-rauha-text"> Promotes cellular regeneration and healing</span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-rauha-accent font-bold">✓</span>
                <div>
                  <strong className="text-rauha-dark">Deep Nourishment:</strong>
                  <span className="text-rauha-text"> Rich in antioxidants and essential nutrients</span>
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
                <strong className="text-rauha-dark">Saffron (Crocus sativus):</strong>
                <p className="text-rauha-text text-sm mt-1">Brightening powerhouse, clinically proven to reduce pigmentation</p>
              </li>
              <li className="border-b border-rauha-subtle/20 pb-4">
                <strong className="text-rauha-dark">Manjistha (Rubia cordifolia):</strong>
                <p className="text-rauha-text text-sm mt-1">Natural blood purifier, evens skin tone from within</p>
              </li>
              <li className="border-b border-rauha-subtle/20 pb-4">
                <strong className="text-rauha-dark">Licorice Extract:</strong>
                <p className="text-rauha-text text-sm mt-1">Scientifically validated for hyperpigmentation reduction</p>
              </li>
              <li>
                <strong className="text-rauha-dark">Sandalwood Oil:</strong>
                <p className="text-rauha-text text-sm mt-1">Anti-inflammatory, promotes clear, radiant complexion</p>
              </li>
            </ul>
          </div>
        </div>

        <div className="bg-gradient-to-br from-rauha-dark to-rauha-text rounded-3xl p-10 lg:p-12 text-white mb-16">
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
            <Shield className="w-8 h-8 text-rauha-accent" />
            The Science Behind Kumkumadi
          </h2>
          <div className="space-y-4 text-rauha-light leading-relaxed">
            <p>
              Kumkumadi Oil represents the perfect marriage of ancient Ayurvedic wisdom and modern scientific validation.
              Our formulation has undergone rigorous clinical testing to ensure efficacy and safety.
            </p>
            <p>
              Each ingredient is selected based on peer-reviewed research demonstrating its ability to:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Inhibit melanin production through tyrosinase inhibition</li>
              <li>Accelerate cellular turnover and collagen synthesis</li>
              <li>Provide powerful antioxidant protection against free radicals</li>
              <li>Enhance skin barrier function and hydration retention</li>
            </ul>
            <p className="text-rauha-accent font-semibold mt-6">
              10 years of research. 100% science-backed. Zero compromise on quality.
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
                <p className="text-rauha-text">Start with freshly cleansed, slightly damp skin for optimal absorption</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-8 h-8 rounded-full bg-rauha-accent text-rauha-dark font-bold flex items-center justify-center flex-shrink-0">
                2
              </div>
              <div>
                <h4 className="font-semibold text-rauha-dark mb-1">Apply</h4>
                <p className="text-rauha-text">Take 3-4 drops and gently massage into face and neck using upward circular motions</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-8 h-8 rounded-full bg-rauha-accent text-rauha-dark font-bold flex items-center justify-center flex-shrink-0">
                3
              </div>
              <div>
                <h4 className="font-semibold text-rauha-dark mb-1">Absorb</h4>
                <p className="text-rauha-text">Allow 2-3 minutes for complete absorption. Use morning and night for best results</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
