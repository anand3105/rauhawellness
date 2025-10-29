export default function HeroSection() {
  return (
    <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto text-center">
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-rauha-dark mb-8 leading-tight">
          10 Years of Skin Science.<br />
          <span className="text-rauha-accent">Coming Soon.</span>
        </h1>

        <div className="max-w-3xl mx-auto space-y-6">
          <p className="text-lg sm:text-xl text-rauha-text leading-relaxed">
            Rauha is dedicated to <strong>science-based skincare</strong>, powered by a decade of relentless research.
            Our mission is to transform your skin using only the most <strong>researched and expert-finalized ingredients</strong>.
          </p>

          <p className="text-base sm:text-lg text-rauha-subtle italic font-light">
            Skin is our only focus. Science is our only guide.
          </p>
        </div>
      </div>
    </section>
  );
}
