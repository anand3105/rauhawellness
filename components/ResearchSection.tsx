import { ExternalLink, FileText } from 'lucide-react';
import Image from 'next/image';

interface ResearchPaper {
  title: string;
  journal: string;
  year: number;
  summary: string;
  link: string;
  outcome: string;
}

interface ResearchSectionProps {
  papers: ResearchPaper[];
  title?: string;
  description?: string;
  layout?: 'grid' | 'horizontal';
  maxDisplay?: number;
  showBackgroundImage?: boolean;
}

export default function ResearchSection({
  papers,
  title = "Backed by Science",
  description = "Our formulations are supported by peer-reviewed research from leading scientific journals.",
  layout = 'grid',
  maxDisplay,
  showBackgroundImage = false
}: ResearchSectionProps) {
  const displayPapers = maxDisplay ? papers.slice(0, maxDisplay) : papers;

  return (
    <section className="relative py-16 sm:py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {showBackgroundImage && (
        <>
          <div className="absolute inset-0 z-0">
            <Image
              src="/b632bc7b-2ea6-4866-9fb3-f2c19c51b822.jpg"
              alt="Research laboratory background"
              fill
              className="object-cover opacity-50"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-b from-white/50 via-white/40 to-white/50 z-0" />
        </>
      )}

      {!showBackgroundImage && (
        <div className="absolute inset-0 bg-gradient-to-b from-white to-rauha-taupe/10" />
      )}

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-rauha-dark mb-4">
            {title}
          </h2>
          <p className="text-lg text-rauha-text max-w-3xl mx-auto">
            {description}
          </p>
        </div>

        <div className={layout === 'horizontal'
          ? "grid md:grid-cols-2 gap-6"
          : "grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        }>
          {displayPapers.map((paper, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-rauha-subtle/20 hover:border-rauha-accent/40 group"
            >
              <div className="flex items-start gap-3 mb-4">
                <div className="p-2 bg-rauha-accent/10 rounded-lg group-hover:bg-rauha-accent/20 transition-colors">
                  <FileText className="w-5 h-5 text-rauha-accent" />
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-rauha-dark mb-2 leading-tight text-base group-hover:text-rauha-accent transition-colors">
                    {paper.title}
                  </h3>
                  <p className="text-xs text-rauha-subtle">
                    {paper.journal} • {paper.year}
                  </p>
                </div>
              </div>

              <div className="mb-4">
                <div className="inline-block bg-green-100 text-green-800 text-xs font-semibold px-3 py-1 rounded-full mb-3">
                  ✓ Positive Outcome
                </div>
                <p className="text-sm text-rauha-text leading-relaxed mb-2">
                  <strong className="text-rauha-dark">Key Finding:</strong> {paper.outcome}
                </p>
                <p className="text-sm text-rauha-text leading-relaxed">
                  {paper.summary}
                </p>
              </div>

              <a
                href={paper.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-rauha-accent hover:text-rauha-dark font-medium text-sm transition-colors group-hover:gap-3"
              >
                Read Full Paper
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <p className="text-sm text-rauha-subtle italic">
            All research papers are from peer-reviewed journals and publicly accessible scientific databases.
          </p>
        </div>
      </div>
    </section>
  );
}
