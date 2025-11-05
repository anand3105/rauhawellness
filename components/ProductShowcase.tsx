import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

export default function ProductShowcase() {
  const products = [
    {
      title: "Kumkumadi Oil",
      subtitle: "The Golden Stillness",
      description: "Saffron, sandalwood, lotus — traditional herbs that brighten, heal, and calm. A sacred ritual in every drop.",
      size: "30ml",
      link: "/products/kumkumadi-oil",
      image: "/Kumkumadioil_carton.jpg",
      accent: "gold"
    },
    {
      title: "Rosehip Oil",
      subtitle: "The Seed of Renewal",
      description: "Modern yet earthy — wild rosehip, rich in vitamins and antioxidants. Nature's gift for repairing and reviving urban skin.",
      size: "30ml",
      link: "/products/rosehip-oil",
      image: "/Rosehipoil_carton.jpg",
      accent: "rose"
    }
  ];

  try {
    return (
      <section className="relative py-12 sm:py-20 px-4 sm:px-6 lg:px-8 bg-white overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 opacity-10">
          <Image
            src="/ec41a3e3-7846-4108-87a7-10672992cc90.jpg"
            alt="Background"
            fill
            className="object-cover"
          />
        </div>
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-rauha-dark mb-3 sm:mb-4 px-2">
              Two Hero Oils
            </h2>
            <p className="text-base sm:text-lg text-rauha-text max-w-2xl mx-auto px-4 italic">
              Each product is introduced like a story — emotional, simple, sensual.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 lg:gap-12">
            {products.map((product, index) => (
              <Link
                key={index}
                href={product.link}
                className="bg-rauha-taupe/30 rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 relative group block"
              >
                <div className="absolute top-4 sm:top-6 right-4 sm:right-6 z-10">
                  <span className="bg-rauha-accent/90 text-white text-[10px] sm:text-xs font-semibold px-3 sm:px-4 py-1.5 sm:py-2 rounded-full uppercase tracking-wide shadow-lg">
                    {product.subtitle}
                  </span>
                </div>

                {/* Product Image */}
                <div className="relative h-64 sm:h-80 bg-gradient-to-br from-rauha-taupe/50 to-rauha-subtle/50 flex items-center justify-center p-6 sm:p-8">
                  <div className="relative w-full h-full">
                    <Image
                      src={product.image}
                      alt={product.title}
                      fill
                      className="object-contain group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, 50vw"
                      priority={index === 0}
                    />
                  </div>
                </div>

                {/* Product Details */}
                <div className="p-6 sm:p-8 lg:p-10">
                  <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-rauha-dark mb-3 sm:mb-4 leading-tight group-hover:text-rauha-accent transition-colors">
                    {product.title}
                  </h3>

                  <p className="text-sm sm:text-base text-rauha-text leading-relaxed mb-4 sm:mb-6">
                    {product.description}
                  </p>

                  <div className="flex items-center justify-between flex-wrap gap-3">
                    <div className="flex items-center gap-2">
                      <span className="text-xs sm:text-sm text-rauha-subtle font-medium">Size:</span>
                      <span className="text-sm sm:text-base text-rauha-dark font-semibold">{product.size}</span>
                    </div>
                    <div className="flex items-center gap-2 text-rauha-accent font-medium group-hover:gap-3 transition-all">
                      <span className="text-xs sm:text-sm">Learn More</span>
                      <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4" />
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
  } catch (error) {
    return null;
  }
}
