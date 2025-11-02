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
  'science-based skincare',
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
];

// Location-based Keywords
export const LOCATION_KEYWORDS = [
  'natural skincare India',
  'ayurvedic skincare products',
  'best face oils online',
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
  slogan: 'Extensively Researched. Expert-Finalized',
  description: 'Science-based skincare powered by extensive research and expert formulation',
  domain: 'https://rauhawellness.com',
  email: 'info@rauhawellness.com',
  phone: '+91-9410863777',
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
    tagline: 'The Elixir of Luminosity',
    shortDescription: 'Ancient Ayurvedic formula perfected by modern science for radiant, luminous skin',
    longDescription: 'Kumkumadi Oil is a timeless Ayurvedic formulation, scientifically validated for its ability to transform skin at the cellular level. Perfected through 10 years of research for luminosity, cell repair, and a flawless, even tone.',
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
    ],
  },
  rosehip: {
    name: 'Rosehip Oil',
    tagline: 'The Potent Superfood',
    shortDescription: 'Clinically proven to boost collagen, reduce fine lines, and deeply even skin tone',
    longDescription: 'Pure cold-pressed rosehip oil, clinically studied for its exceptional ability to support natural collagen production, reduce fine lines, and deeply even out skin tone. Nature\'s most concentrated source of essential fatty acids and trans-retinoic acid.',
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
    ],
  },
};

// Default SEO Settings
export const DEFAULT_SEO = {
  titleTemplate: '%s | Rauha Wellness',
  defaultTitle: 'Rauha Wellness | Science-Based Natural Skincare',
  description:
    'Discover science-backed skincare powered by 10 years of research. Pure Kumkumadi and Rosehip oils for radiant, youthful skin. Pre-order now with 15% off.',
  canonical: BRAND_INFO.domain,
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: BRAND_INFO.domain,
    siteName: BRAND_INFO.name,
    title: 'Rauha Wellness | Extensively Researched, Expert-Finalized Skincare',
    description:
      'Science-based skincare powered by a decade of relentless research. Discover Kumkumadi and Rosehip oils for transformative results.',
    images: [
      {
        url: `${BRAND_INFO.domain}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: 'Rauha Wellness - Science-Based Natural Skincare',
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
    title: 'Science-Based Natural Skincare | Research-Backed Face Oils',
    description:
      'Discover Rauha Wellness: 10 years of skin science research in every drop. Pure Kumkumadi & Rosehip oils for radiant, youthful skin. Pre-order with 15% OFF. Launch December 2025.',
    keywords: [
      ...PRIMARY_KEYWORDS,
      'best natural skincare brand',
      'research-backed skincare',
      'science-based face oils',
      'pure face oils',
    ],
  },
  kumkumadi: {
    title: 'Kumkumadi Oil - Ancient Ayurvedic Elixir | Skin Brightening Face Oil',
    description:
      'Pure Kumkumadi Oil with saffron, manjistha & licorice. Clinically proven to brighten skin, fade dark spots & boost luminosity. Research-backed Ayurvedic formula. 30ml.',
    keywords: PRODUCTS.kumkumadi.keywords,
  },
  rosehip: {
    title: 'Cold-Pressed Rosehip Oil - Natural Anti-Aging & Collagen Booster',
    description:
      'Pure organic rosehip oil rich in vitamin C & omega fatty acids. Clinically proven to reduce wrinkles, boost collagen & fade scars. Natural retinol alternative. 30ml.',
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
    title: 'Why Rauha - Extensively Researched, Expert-Finalized Formulations',
    description:
      'Discover the science behind Rauha Wellness. Learn about our decade-long research journey, clinical studies, and commitment to evidence-based natural skincare.',
    keywords: [
      'skincare research',
      'evidence-based skincare',
      'clinical studies skincare',
      'science-backed beauty',
      'ayurvedic research',
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
