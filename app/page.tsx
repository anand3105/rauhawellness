import HeroSection from '@/components/HeroSection';
import ProductShowcase from '@/components/ProductShowcase';
import CTASection from '@/components/CTASection';

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <ProductShowcase />
      <CTASection />
    </main>
  );
}
