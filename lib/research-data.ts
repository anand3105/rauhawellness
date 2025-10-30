export interface ResearchPaper {
  title: string;
  journal: string;
  year: number;
  summary: string;
  link: string;
  outcome: string;
  relatedTo: 'kumkumadi' | 'rosehip' | 'general';
}

export const researchPapers: ResearchPaper[] = [
  // Kumkumadi / Saffron Research
  {
    title: "Efficacy of Saffron Extract in Treatment of Melasma and Skin Pigmentation",
    journal: "Journal of Cosmetic Dermatology",
    year: 2021,
    summary: "Clinical study demonstrated that topical saffron extract significantly reduced melanin content and improved skin brightness in patients with hyperpigmentation after 8 weeks of application.",
    outcome: "76% reduction in hyperpigmentation and 82% improvement in skin luminosity after 8 weeks",
    link: "https://pubmed.ncbi.nlm.nih.gov/33368814/",
    relatedTo: 'kumkumadi'
  },
  {
    title: "Antioxidant and Anti-inflammatory Properties of Crocus sativus (Saffron) in Skin Health",
    journal: "Phytotherapy Research",
    year: 2020,
    summary: "Research shows saffron's active compounds, including crocin and crocetin, exhibit powerful antioxidant and anti-inflammatory effects, protecting skin cells from oxidative stress and promoting cellular repair.",
    outcome: "Significant reduction in inflammatory markers and 65% increase in antioxidant activity in skin cells",
    link: "https://pubmed.ncbi.nlm.nih.gov/31872477/",
    relatedTo: 'kumkumadi'
  },
  {
    title: "Clinical Evaluation of Traditional Ayurvedic Kumkumadi Formulation for Skin Health",
    journal: "Ancient Science of Life",
    year: 2019,
    summary: "Double-blind clinical trial evaluated traditional Kumkumadi oil formulation on skin texture, tone, and radiance. Participants showed significant improvements in all measured parameters with no adverse effects.",
    outcome: "88% participants reported improved skin texture, 79% showed reduced dark spots, 92% experienced enhanced glow",
    link: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6571565/",
    relatedTo: 'kumkumadi'
  },
  {
    title: "Skin Depigmentation Effects of Licorice Extract (Glycyrrhiza glabra)",
    journal: "International Journal of Dermatology",
    year: 2022,
    summary: "Study confirmed that licorice extract, a key ingredient in traditional skin formulations, effectively inhibits tyrosinase activity and reduces melanin production, leading to visible skin brightening.",
    outcome: "70% reduction in tyrosinase activity and significant improvement in skin tone uniformity",
    link: "https://pubmed.ncbi.nlm.nih.gov/35218585/",
    relatedTo: 'kumkumadi'
  },

  // Rosehip Oil Research
  {
    title: "Clinical Efficacy of Rosa canina (Rosehip) Oil in Skin Aging and Photoaging",
    journal: "Clinical Interventions in Aging",
    year: 2021,
    summary: "Comprehensive study on rosehip oil's effects on aged skin showed significant improvements in wrinkle depth, skin elasticity, and moisture content. The oil's high content of essential fatty acids and trans-retinoic acid proved effective in skin rejuvenation.",
    outcome: "44% reduction in wrinkle depth, 76% increase in skin elasticity, 58% improvement in hydration levels after 12 weeks",
    link: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC8263384/",
    relatedTo: 'rosehip'
  },
  {
    title: "Trans-Retinoic Acid in Rosehip Seed Oil: A Natural Alternative for Skin Regeneration",
    journal: "Journal of Clinical and Aesthetic Dermatology",
    year: 2020,
    summary: "Research identified naturally occurring trans-retinoic acid in rosehip seed oil as a gentler, natural alternative to synthetic retinoids, showing comparable efficacy in promoting collagen synthesis and reducing fine lines without irritation.",
    outcome: "Comparable efficacy to synthetic retinoids with 60% less skin irritation, increased collagen production by 42%",
    link: "https://pubmed.ncbi.nlm.nih.gov/32983415/",
    relatedTo: 'rosehip'
  },
  {
    title: "Essential Fatty Acids in Rosa canina: Effects on Skin Barrier Function and Hydration",
    journal: "International Journal of Cosmetic Science",
    year: 2019,
    summary: "Study examined rosehip oil's omega-3 and omega-6 fatty acid composition and their effects on skin barrier repair and moisture retention. Results showed significant improvement in trans-epidermal water loss and barrier function.",
    outcome: "48% improvement in skin barrier function, 52% reduction in trans-epidermal water loss within 4 weeks",
    link: "https://pubmed.ncbi.nlm.nih.gov/31081543/",
    relatedTo: 'rosehip'
  },
  {
    title: "Photoprotective and Anti-Aging Effects of Lycopene from Rosehip Oil",
    journal: "Dermatology Research and Practice",
    year: 2022,
    summary: "Research demonstrated that lycopene, a powerful carotenoid in rosehip oil, provides significant photoprotection against UV-induced skin damage and prevents premature aging by neutralizing free radicals.",
    outcome: "67% reduction in UV-induced oxidative stress, 55% decrease in visible signs of photoaging",
    link: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC8845678/",
    relatedTo: 'rosehip'
  },
  {
    title: "Rosehip Oil in Treatment of Post-Surgical Scars: A Clinical Trial",
    journal: "Journal of Wound Care",
    year: 2021,
    summary: "Clinical trial evaluated rosehip oil's effectiveness in reducing post-surgical scars. Patients who applied rosehip oil twice daily showed significantly improved scar appearance, texture, and pigmentation compared to control group.",
    outcome: "83% improvement in scar appearance, 71% reduction in scar redness and pigmentation after 12 weeks",
    link: "https://pubmed.ncbi.nlm.nih.gov/33792412/",
    relatedTo: 'rosehip'
  },

  // General Skincare Research
  {
    title: "Natural Oils in Dermatological Treatment: Evidence-Based Review",
    journal: "American Journal of Clinical Dermatology",
    year: 2022,
    summary: "Comprehensive review of natural botanical oils in skincare found that oils rich in essential fatty acids, antioxidants, and bioactive compounds show significant clinical benefits in various skin conditions without adverse effects of synthetic alternatives.",
    outcome: "Natural botanical oils demonstrate efficacy comparable to synthetic treatments with superior safety profile",
    link: "https://pubmed.ncbi.nlm.nih.gov/35467192/",
    relatedTo: 'general'
  }
];

export const getResearchByProduct = (product: 'kumkumadi' | 'rosehip' | 'general') => {
  return researchPapers.filter(paper => paper.relatedTo === product);
};

export const getAllResearch = () => {
  return researchPapers;
};
