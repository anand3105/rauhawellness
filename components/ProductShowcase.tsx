import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function ProductShowcase() {
  const products = [
    {
      title: "The Elixir of Luminosity: Kumkumadi Oil",
      description: "The ancient secret, perfected by modern science. Our most intensive research focus for luminosity, cell repair, and a flawless, even tone.",
      size: "30ml",
      link: "/products/kumkumadi-oil"
    },
    {
      title: "The Potent Superfood: Rosehip Oil",
      description: "Clinically studied for its exceptional ability to support natural collagen production, reduce fine lines, and deeply even out skin tone.",
      size: "30ml",
      link: "/products/rosehip-oil"
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-rauha-dark mb-4">
            Our Expert-Finalized Collection
          </h2>
          <p className="text-lg text-rauha-text max-w-2xl mx-auto">
            Two extraordinary oils. Ten years of research. Infinite transformation.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {products.map((product, index) => (
            <Link
              key={index}
              href={product.link}
              className="bg-rauha-taupe/30 rounded-2xl p-8 lg:p-10 hover:shadow-xl transition-all duration-300 relative overflow-hidden group block"
            >
              <div className="absolute top-6 right-6">
                <span className="bg-rauha-subtle text-rauha-dark text-xs font-semibold px-4 py-2 rounded-full uppercase tracking-wide">
                  Expert Finalized
                </span>
              </div>

              <div className="mt-12">
                <h3 className="text-2xl lg:text-3xl font-bold text-rauha-dark mb-4 leading-tight group-hover:text-rauha-accent transition-colors">
                  {product.title}
                </h3>

                <p className="text-rauha-text leading-relaxed mb-6">
                  {product.description}
                </p>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="text-sm text-rauha-subtle font-medium">Size:</span>
                    <span className="text-rauha-dark font-semibold">{product.size}</span>
                  </div>
                  <div className="flex items-center gap-2 text-rauha-accent font-medium group-hover:gap-3 transition-all">
                    <span className="text-sm">Learn More</span>
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </div>

              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-rauha-accent to-rauha-subtle transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
