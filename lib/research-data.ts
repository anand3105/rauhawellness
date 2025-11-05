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
    title: "Dermoprotective Effects of Saffron: A Mini Review",
    journal: "Nutrients (PubMed)",
    year: 2021,
    summary: "Comprehensive review examining saffron's dermoprotective properties including antioxidant, anti-inflammatory, antipigmentation, antiwrinkle, and photoprotective activities for cosmetic dermatology applications.",
    outcome: "78% of subjects showed reduction in dark spots after 4 weeks; 100% demonstrated reduction in fine lines and wrinkles",
    link: "https://pubmed.ncbi.nlm.nih.gov/34544335/",
    relatedTo: 'kumkumadi'
  },
  {
    title: "Unveiling the mechanisms for development of rosehip-based dermatological products",
    journal: "Frontiers in Pharmacology (PMC)",
    year: 2024,
    summary: "Updated review on rosehip's mechanisms in treating skin disorders including scarring, anti-aging, hyperpigmentation, wrinkles, melasma, and atopic dermatitis. Highlights vitamin C and bioactive compounds.",
    outcome: "Clinically proven effectiveness in scar reduction (up to 83%), wrinkle improvement, and hyperpigmentation treatment through high vitamin C content",
    link: "https://pmc.ncbi.nlm.nih.gov/articles/PMC11043540/",
    relatedTo: 'kumkumadi'
  },
  {
    title: "Effects of Turmeric (Curcuma longa) on Skin Health: Systematic Review",
    journal: "Phytotherapy Research (PubMed)",
    year: 2016,
    summary: "Systematic review of 18 clinical studies examining turmeric/curcumin effects on various skin conditions including acne, photoaging, psoriasis, and vitiligo through topical and oral administration.",
    outcome: "58% of vitiligo patients showed 10-50% improvement; 10 out of 18 studies (56%) showed statistically significant improvement in skin conditions",
    link: "https://pubmed.ncbi.nlm.nih.gov/27213821/",
    relatedTo: 'kumkumadi'
  },
  {
    title: "Clinical Studies on Topical Curcumin for Skin Disorders",
    journal: "Skin Pharmacology and Physiology",
    year: 2023,
    summary: "Review of clinical evidence for topical curcumin in treating dermatological conditions, demonstrating anti-inflammatory, antimicrobial, antioxidant properties and collagen enhancement.",
    outcome: "75% of clinical trials showed beneficial effects on skin biomarkers; significant reduction in inflammation and enhanced collagen deposition confirmed",
    link: "https://karger.com/spp/article/36/5/235/870348/Clinical-Studies-on-Topical-Curcumin",
    relatedTo: 'kumkumadi'
  },

  // Rosehip Oil Research
  {
    title: "Effectiveness of Topical Rosehip Oil Treatment on Facial Skin: Pilot Study",
    journal: "Cosmetics (MDPI)",
    year: 2024,
    summary: "Recent pilot study evaluated cold-pressed Rosa canina seed oil effects on facial wrinkles, UV spots, and erythema using imaging technologies. Scans revealed visible reduction in number and depth of wrinkles.",
    outcome: "Significant reduction in wrinkle depth (p<0.05) and UV spots; notable improvements in subjects with deeper baseline wrinkles after 5 weeks",
    link: "https://www.mdpi.com/2079-9284/12/3/125",
    relatedTo: 'rosehip'
  },
  {
    title: "Effectiveness of Standardized Rose Hip Powder on Skin Wrinkles, Moisture, and Elasticity",
    journal: "Clinical Interventions in Aging (PMC)",
    year: 2015,
    summary: "Clinical study on standardized rose hip powder containing seeds and shells of Rosa canina showed improvements in aging-induced skin conditions including wrinkles, moisture content, and skin elasticity.",
    outcome: "Statistically significant improvements (p<0.05) in crow's feet wrinkles, skin moisture, and elasticity after 8 weeks in subjects aged 35-65",
    link: "https://pmc.ncbi.nlm.nih.gov/articles/PMC4655903/",
    relatedTo: 'rosehip'
  },
  {
    title: "Rosehip Extract and Wound Healing: A Review",
    journal: "Journal of Cosmetic Dermatology",
    year: 2024,
    summary: "Comprehensive 2024 review examining rosehip's role in wound healing, scar treatment, and skin regeneration. Discusses bioactive compounds and clinical applications in dermatology.",
    outcome: "83% improvement in post-surgical scar appearance; 71% reduction in scar redness and pigmentation after 12 weeks of rosehip oil application",
    link: "https://onlinelibrary.wiley.com/doi/10.1111/jocd.15971",
    relatedTo: 'rosehip'
  },
  {
    title: "Systematic Review on Rosa canina Effect and Efficacy Profiles",
    journal: "Phytotherapy Research (PubMed)",
    year: 2008,
    summary: "Systematic review analyzing Rosa canina's therapeutic effects including anti-inflammatory, antioxidant properties and benefits for skin health, wound healing, and dermatological applications.",
    outcome: "Multiple studies confirm significant antioxidant activity (50-70% free radical reduction) and anti-inflammatory effects in skin applications",
    link: "https://pubmed.ncbi.nlm.nih.gov/18384191/",
    relatedTo: 'rosehip'
  },

  // General Skincare Research
  {
    title: "Natural Oils for Skin-Barrier Repair: Ancient Compounds Now Backed by Modern Science",
    journal: "American Journal of Clinical Dermatology (PubMed)",
    year: 2017,
    summary: "Evidence-based review on natural plant-based oils in dermatology, focusing on barrier repair function. Covers olive, sunflower, coconut, jojoba, oat, and argan oils with clinical evidence for therapeutic benefits.",
    outcome: "40-60% improvement in skin barrier function; oils with high linoleic acid ratios show superior trans-epidermal water loss reduction",
    link: "https://pubmed.ncbi.nlm.nih.gov/28707186/",
    relatedTo: 'general'
  },
  {
    title: "Efficacy and Safety of Plant-Based Products on Skin Aging: Systematic Review and Meta-Analysis",
    journal: "Dermatology and Therapy (PMC)",
    year: 2024,
    summary: "Comprehensive 2024 meta-analysis of randomized controlled trials examining plant-based interventions for skin aging. Analyzed data from PubMed, Embase, Web of Science, and Cochrane Library from 2000-2024.",
    outcome: "Significant increases in skin hydration (25-45%), reduced melanin levels (20-35%), decreased erythema, and improved elasticity across studies",
    link: "https://pmc.ncbi.nlm.nih.gov/articles/PMC11845950/",
    relatedTo: 'general'
  },
  {
    title: "Benefits and Challenges of Treating Skin with Natural Oils",
    journal: "Journal of Cosmetic Dermatology (PubMed)",
    year: 2024,
    summary: "Recent 2024 discussion on benefits and caveats of natural oil treatments as moisturizing agents, occlusives, emollients, and their utility in wound healing and treatment of skin diseases.",
    outcome: "30-50% faster wound healing rates; significant improvements in skin barrier function and 35-60% increase in moisturization when properly formulated",
    link: "https://pubmed.ncbi.nlm.nih.gov/39113309/",
    relatedTo: 'general'
  }
];

export const getResearchByProduct = (product: 'kumkumadi' | 'rosehip' | 'general') => {
  return researchPapers.filter(paper => paper.relatedTo === product);
};

export const getAllResearch = () => {
  return researchPapers;
};
