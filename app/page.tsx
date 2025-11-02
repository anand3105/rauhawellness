import HeroSection from '@/components/HeroSection';
import ProductShowcase from '@/components/ProductShowcase';
import CTASection from '@/components/CTASection';
import ResearchSection from '@/components/ResearchSection';
import SkinQuizCTA from '@/components/SkinQuizCTA';
import GiveawayCTA from '@/components/GiveawayCTA';
import { getAllResearch } from '@/lib/research-data';
import { Metadata } from 'next';
import { PAGE_SEO, BRAND_INFO } from '@/lib/seo-config';

export const metadata: Metadata = {
  title: PAGE_SEO.home.title,
  description: PAGE_SEO.home.description,
  keywords: PAGE_SEO.home.keywords,
  alternates: {
    canonical: BRAND_INFO.domain,
  },
  openGraph: {
    title: PAGE_SEO.home.title,
    description: PAGE_SEO.home.description,
    url: BRAND_INFO.domain,
    type: 'website',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Rauha Wellness - Science-Based Natural Skincare',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: PAGE_SEO.home.title,
    description: PAGE_SEO.home.description,
    images: ['/twitter-image.jpg'],
  },
};

export default function Home() {
  const allResearch = getAllResearch();

  return (
    <main className="min-h-screen">
      <HeroSection />
      <ProductShowcase />
      <ResearchSection
        papers={allResearch}
        title="Decade of Research, Science You Can Trust"
        description="Every ingredient in our formulations is backed by peer-reviewed research from leading scientific journals worldwide. We believe in transparency and evidence-based skincare."
        maxDisplay={6}
        showBackgroundImage={true}
      />
      <SkinQuizCTA />
      <CTASection />
      <GiveawayCTA />
    </main>
  );
}
