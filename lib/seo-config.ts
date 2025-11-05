/**
 * SEO Configuration for Rauha Wellness
 * Centralized SEO settings, keywords, and metadata
 */

// Primary Keywords (High-volume, competitive)
export const PRIMARY_KEYWORDS = [
  'kumkumadi oil',
  'rosehip oil',
  'natural skincare',
  'organic face oil',
  'ayurvedic skincare',
  'anti-aging oil',
  'skin brightening oil',
  'handcrafted skincare India',
  'ISO certified skincare',
  'cruelty-free face oil',
];

// Secondary Keywords (Long-tail, specific)
export const SECONDARY_KEYWORDS = [
  'best kumkumadi oil for face',
  'pure rosehip oil benefits',
  'natural anti-aging skincare',
  'ayurvedic face oil for glowing skin',
  'research-backed skincare products',
  'organic skincare for sensitive skin',
  'best face oil for dark spots',
  'natural skincare routine',
  'cold-pressed rosehip oil',
  'saffron oil for skin',
  'paraben free face oil',
  'silicone free skincare',
  'GMP certified skincare',
  '100% organic ingredients',
  'eco-conscious skincare packaging',
  'slow made skincare',
];

// Location-based Keywords
export const LOCATION_KEYWORDS = [
  'natural skincare India',
  'ayurvedic skincare products',
  'best face oils online',
  'handcrafted in India skincare',
  'Indian soil herbs skincare',
  'made in India face oil',
];

// Problem/Solution Keywords
export const SOLUTION_KEYWORDS = [
  'how to reduce dark spots naturally',
  'best oil for anti-aging',
  'natural collagen boost',
  'reduce fine lines naturally',
  'even skin tone naturally',
  'skin brightening products',
  'hyperpigmentation treatment',
  'natural acne scar treatment',
];

// Brand Information
export const BRAND_INFO = {
  name: 'Rauha Wellness',
  slogan: 'Nature\'s Messenger for Modern India',
  description: 'Slow-made, honest oils from Indian soil. ISO certified, GMP approved, 100% organic skincare that listens, not sells. Handcrafted in India with purity, patience, and peace.',
  domain: 'https://rauhawellness.com',
  email: 'info@rauhawellness.com',
  phone: '+91-9457355886',
  social: {
    linkedin: 'https://www.linkedin.com/company/rauhawellness/',
    instagram: 'https://www.instagram.com/rauhawellness?igsh=am5xNXdxcmZydjVu',
    twitter: 'https://twitter.com/rauhawellness',
  },
  foundingYear: '2015',
  launchYear: '2025',
};

// Product Information
export const PRODUCTS = {
  kumkumadi: {
    name: 'Kumkumadi Oil',
    tagline: 'The Golden Stillness',
    shortDescription: 'Saffron, sandalwood, lotus — traditional herbs that brighten, heal, and calm. A sacred ritual in every drop.',
    longDescription: 'Kumkumadi Oil is a timeless Ayurvedic formulation, slow-made from herbs grown in Indian soil. ISO certified, 100% organic, and handcrafted in small batches with purity, patience, and peace. Brightens skin, fades dark spots, and brings luminosity naturally.',
    price: 'Coming Soon',
    size: '30ml',
    benefits: [
      'Brightens dull skin and enhances natural glow',
      'Fades dark spots and pigmentation',
      'Promotes cellular regeneration',
      'Rich in antioxidants',
    ],
    ingredients: [
      'Saffron (Crocus sativus)',
      'Manjistha (Rubia cordifolia)',
      'Licorice Extract',
      'Sandalwood Oil',
    ],
    keywords: [
      'kumkumadi oil',
      'kumkumadi tailam',
      'ayurvedic face oil',
      'skin brightening oil',
      'saffron oil for face',
      'natural glow oil',
      'pigmentation treatment oil',
      'organic kumkumadi oil',
      'handcrafted ayurvedic oil',
    ],
  },
  rosehip: {
    name: 'Rosehip Oil',
    tagline: 'The Seed of Renewal',
    shortDescription: 'Modern yet earthy — wild rosehip, rich in vitamins and antioxidants. Nature\'s gift for repairing and reviving urban skin.',
    longDescription: 'Pure cold-pressed rosehip oil, slow-made and handcrafted in India. ISO certified, 100% organic, and cruelty-free. Rich in essential fatty acids and trans-retinoic acid for natural collagen production, reduces fine lines, and evens skin tone with purity and patience.',
    price: 'Coming Soon',
    size: '30ml',
    benefits: [
      'Reduces fine lines and wrinkles',
      'Stimulates natural collagen production',
      'Deeply hydrates without greasiness',
      'Smooths rough texture and scars',
    ],
    ingredients: [
      'Trans-Retinoic Acid',
      'Omega-3 & Omega-6 Fatty Acids',
      'Vitamin C',
      'Lycopene',
    ],
    keywords: [
      'rosehip oil',
      'cold-pressed rosehip oil',
      'anti-aging face oil',
      'collagen boosting oil',
      'natural retinol alternative',
      'rosehip seed oil',
      'vitamin c face oil',
      'organic rosehip oil',
      'handcrafted face oil India',
    ],
  },
};

// Default SEO Settings
export const DEFAULT_SEO = {
  titleTemplate: '%s | Rauha Wellness',
  defaultTitle: 'Rauha Wellness | Nature\'s Messenger for Modern India',
  description:
    'Slow-made, honest oils from Indian soil. ISO certified, GMP approved, 100% organic, cruelty-free skincare. Kumkumadi & Rosehip oils handcrafted in India with purity, patience, peace.',
  canonical: BRAND_INFO.domain,
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: BRAND_INFO.domain,
    siteName: BRAND_INFO.name,
    title: 'Rauha Wellness | Nature\'s Messenger for Modern India',
    description:
      'Slow-made, honest oils from Indian soil. Handcrafted, ISO certified, 100% organic skincare. Kumkumadi & Rosehip oils made with purity, patience, and peace.',
    images: [
      {
        url: `${BRAND_INFO.domain}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: 'Rauha Wellness - Nature\'s Messenger for Modern India',
      },
    ],
  },
  twitter: {
    handle: '@rauhawellness',
    site: '@rauhawellness',
    cardType: 'summary_large_image',
  },
};

// Page-specific SEO configurations
export const PAGE_SEO = {
  home: {
    title: 'Natural Skincare | ISO Certified, Handcrafted in India | Organic Face Oils',
    description:
      'Rauha Wellness: Nature\'s Messenger for Modern India. Slow-made, ISO certified, GMP approved, 100% organic Kumkumadi & Rosehip oils. Cruelty-free, paraben-free, handcrafted in small batches. Skincare that listens, not sells.',
    keywords: [
      ...PRIMARY_KEYWORDS,
      'best natural skincare brand',
      'organic certified skincare',
      'slow skincare',
      'pure face oils',
      'small batch skincare',
      'eco-conscious packaging',
    ],
  },
  kumkumadi: {
    title: 'Kumkumadi Oil - ISO Certified | Handcrafted Ayurvedic Face Oil | 100% Organic',
    description:
      'The Golden Stillness. Pure Kumkumadi Oil with saffron, manjistha & licorice. ISO certified, GMP approved, handcrafted in India. Brighten skin naturally, fade dark spots. Slow-made with purity and patience. 30ml.',
    keywords: PRODUCTS.kumkumadi.keywords,
  },
  rosehip: {
    title: 'Rosehip Oil - Organic, Cold-Pressed | Cruelty-Free Anti-Aging Face Oil',
    description:
      'The Seed of Renewal. Pure organic rosehip oil rich in vitamin C & omega fatty acids. ISO certified, handcrafted in India. Reduces wrinkles, boosts collagen naturally. Paraben-free, eco-conscious packaging. 30ml.',
    keywords: PRODUCTS.rosehip.keywords,
  },
  quiz: {
    title: 'Skin Quiz - Find Your Perfect Natural Skincare Match',
    description:
      'Take our free personalized skin quiz to discover which science-backed face oil is perfect for your skin type, concerns, and goals. Get expert recommendations.',
    keywords: [
      'skin quiz',
      'skincare routine quiz',
      'find my skin type',
      'personalized skincare',
      'skin analysis',
      'best oil for my skin',
    ],
  },
  whyRauha: {
    title: 'Why Rauha - Nature\'s Messenger for Modern India | Slow-Made Skincare',
    description:
      'Discover Rauha Wellness: Slow-made, honest oils from Indian soil. ISO certified, GMP approved, 100% organic ingredients. Skincare that listens, not sells. Purity, patience, and peace in every drop.',
    keywords: [
      'slow skincare philosophy',
      'handcrafted in India',
      'ISO certified skincare',
      'organic certification',
      'ayurvedic wisdom',
      'sustainable skincare',
      'cruelty-free beauty',
    ],
  },
};

// Structured Data Templates
export const STRUCTURED_DATA = {
  organization: {
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
      contactType: 'Customer Service',
      availableLanguage: ['English'],
    },
  },
  website: {
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
  },
};

// Generate product structured data
export function generateProductStructuredData(productKey: 'kumkumadi' | 'rosehip') {
  const product = PRODUCTS[productKey];
  return {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.name,
    description: product.longDescription,
    brand: {
      '@type': 'Brand',
      name: BRAND_INFO.name,
    },
    offers: {
      '@type': 'Offer',
      availability: 'https://schema.org/PreOrder',
      priceValidUntil: '2025-12-31',
      url: `${BRAND_INFO.domain}/products/${productKey}-oil`,
      availabilityStarts: '2025-12-01',
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '5',
      reviewCount: '0',
    },
    category: 'Beauty & Personal Care > Skin Care > Face Oils',
  };
}

// Generate breadcrumb structured data
export function generateBreadcrumbStructuredData(items: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: `${BRAND_INFO.domain}${item.url}`,
    })),
  };
}

// SEO Best Practices Checklist
export const SEO_CHECKLIST = {
  technical: [
    'Add meta descriptions (150-160 characters)',
    'Include title tags (50-60 characters)',
    'Add canonical URLs',
    'Create XML sitemap',
    'Configure robots.txt',
    'Implement schema markup (JSON-LD)',
    'Add Open Graph tags',
    'Add Twitter Card tags',
    'Optimize images (alt tags, compression)',
    'Enable HTTPS',
    'Add favicon',
  ],
  content: [
    'Use target keywords naturally',
    'Write compelling meta descriptions',
    'Create unique content for each page',
    'Use header tags (H1, H2, H3) properly',
    'Add internal links',
    'Include external links to research',
    'Optimize image alt text',
    'Create long-form content (1000+ words)',
  ],
  performance: [
    'Optimize Core Web Vitals',
    'Reduce page load time',
    'Enable lazy loading for images',
    'Minify CSS and JavaScript',
    'Use CDN for static assets',
    'Implement caching',
  ],
};
