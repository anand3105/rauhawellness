import Link from 'next/link';
import { ArrowLeft, Droplet, Sparkles, Shield, Leaf } from 'lucide-react';

export const metadata = {
  title: 'Rosehip Oil - The Potent Superfood | Rauha Wellness',
  description: 'Clinically studied for exceptional ability to support natural collagen production, reduce fine lines, and deeply even out skin tone.',
};

export default function RosehipOilPage() {
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
          <div className="relative aspect-square bg-gradient-to-br from-rauha-subtle/40 to-rauha-taupe/60 rounded-3xl overflow-hidden shadow-2xl">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <Droplet className="w-32 h-32 text-rauha-subtle mx-auto mb-4 opacity-60" />
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
                Rosehip Oil
              </h1>
              <p className="text-xl text-rauha-accent font-semibold mb-6">
                The Potent Superfood
              </p>
            </div>

            <p className="text-lg text-rauha-text leading-relaxed mb-8">
              Clinically studied for its exceptional ability to support natural collagen production, reduce fine lines,
              and deeply even out skin tone. Rosehip Oil is nature's most concentrated source of essential fatty acids
              and trans-retinoic acid, scientifically proven to transform aging skin.
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
                  <strong className="text-rauha-dark">Anti-Aging Power:</strong>
                  <span className="text-rauha-text"> Reduces fine lines, wrinkles, and visible aging signs</span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-rauha-accent font-bold">✓</span>
                <div>
                  <strong className="text-rauha-dark">Collagen Boost:</strong>
                  <span className="text-rauha-text"> Stimulates natural collagen and elastin production</span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-rauha-accent font-bold">✓</span>
                <div>
                  <strong className="text-rauha-dark">Deep Hydration:</strong>
                  <span className="text-rauha-text"> Locks in moisture without feeling greasy</span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-rauha-accent font-bold">✓</span>
                <div>
                  <strong className="text-rauha-dark">Texture Refinement:</strong>
                  <span className="text-rauha-text"> Smooths rough texture and minimizes scars</span>
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

        <div className="bg-gradient-to-br from-rauha-dark to-rauha-text rounded-3xl p-10 lg:p-12 text-white mb-16">
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
            <Shield className="w-8 h-8 text-rauha-accent" />
            The Science Behind Rosehip
          </h2>
          <div className="space-y-4 text-rauha-light leading-relaxed">
            <p>
              Rosehip Oil is one of the most extensively researched botanical oils in dermatological science.
              Extracted from the seeds of Rosa canina, it contains the highest concentration of essential fatty acids
              found in any plant oil.
            </p>
            <p>
              Clinical studies have demonstrated its remarkable efficacy:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Increases skin elasticity by up to 76% in 8 weeks</li>
              <li>Reduces wrinkle depth by an average of 44%</li>
              <li>Improves skin hydration levels by 58%</li>
              <li>Fades hyperpigmentation and scars significantly</li>
            </ul>
            <p className="text-rauha-accent font-semibold mt-6">
              Cold-pressed. Organic. Pure potency in every drop.
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
    </main>
  );
}
