import './globals.css';
import type { Metadata } from 'next';
import AnnouncementBar from '@/components/AnnouncementBar';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CookieConsent from '@/components/CookieConsent';
import { BRAND_INFO, PRIMARY_KEYWORDS } from '@/lib/seo-config';

export const metadata: Metadata = {
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
  },
  themeColor: '#C98A53',
  metadataBase: new URL(BRAND_INFO.domain),
  title: {
    default: 'Rauha Wellness | Science-Based Natural Skincare - 10 Years of Research',
    template: '%s | Rauha Wellness',
  },
  description: 'Discover science-backed skincare powered by 10 years of research. Pure Kumkumadi and Rosehip oils for radiant, youthful skin. Pre-order now with 15% off. Launch December 2025.',
  keywords: [
    ...PRIMARY_KEYWORDS,
    'natural face oils',
    'organic skincare products',
    'evidence-based skincare',
    'ayurvedic beauty',
    'anti-aging skincare',
    'skin brightening',
    'research-backed beauty products',
  ],
  authors: [{ name: 'Rauha Wellness' }],
  creator: 'Rauha Wellness',
  publisher: 'Rauha Wellness',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: BRAND_INFO.domain,
    siteName: BRAND_INFO.name,
    title: 'Rauha Wellness | Science-Based Natural Skincare',
    description: 'Science-backed skincare powered by 10 years of research. Pure Kumkumadi and Rosehip oils for radiant, youthful skin. Pre-order with 15% off.',
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
    site: '@rauhawellness',
    creator: '@rauhawellness',
    title: 'Rauha Wellness | Science-Based Natural Skincare',
    description: 'Science-backed skincare powered by 10 years of research. Pure Kumkumadi and Rosehip oils for radiant skin.',
    images: ['/twitter-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: BRAND_INFO.domain,
  },
  category: 'Beauty & Personal Care',
  classification: 'Skincare',
  icons: {
    icon: [
      { url: '/favicon.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon.png', sizes: '16x16', type: 'image/png' },
    ],
    apple: [
      { url: '/favicon.png', sizes: '180x180', type: 'image/png' },
    ],
    other: [
      {
        rel: 'icon',
        url: '/favicon.png',
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="canonical" href={BRAND_INFO.domain} />
        <meta name="theme-color" content="#C98A53" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="format-detection" content="telephone=no" />

        {/* Structured Data - Organization */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: BRAND_INFO.name,
              description: BRAND_INFO.description,
              url: BRAND_INFO.domain,
              logo: `${BRAND_INFO.domain}/logo.png`,
              foundingDate: BRAND_INFO.foundingYear,
              email: BRAND_INFO.email,
              sameAs: [
                BRAND_INFO.social.linkedin,
                BRAND_INFO.social.instagram,
                BRAND_INFO.social.twitter,
              ],
              contactPoint: {
                '@type': 'ContactPoint',
                email: BRAND_INFO.email,
                telephone: BRAND_INFO.phone,
                contactType: 'Customer Service',
                availableLanguage: ['English'],
              },
            }),
          }}
        />

        {/* Structured Data - Website */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'WebSite',
              name: BRAND_INFO.name,
              url: BRAND_INFO.domain,
              potentialAction: {
                '@type': 'SearchAction',
                target: {
                  '@type': 'EntryPoint',
                  urlTemplate: `${BRAND_INFO.domain}/search?q={search_term_string}`,
                },
                'query-input': 'required name=search_term_string',
              },
            }),
          }}
        />
      </head>
      <body className="bg-rauha-light font-sans antialiased">
        <AnnouncementBar />
        <Header />
        {children}
        <Footer />
        <CookieConsent />
      </body>
    </html>
  );
}
