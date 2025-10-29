import Link from 'next/link';

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-rauha-light/95 backdrop-blur-sm border-b border-rauha-subtle/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-baseline gap-3 hover:opacity-80 transition-opacity">
            <span className="text-2xl font-bold text-rauha-dark tracking-tight">rauha</span>
            <span className="text-xs text-rauha-text hidden sm:block">rauhawellness.com</span>
          </Link>

          <nav className="flex items-center gap-4">
            <Link
              href="/skin-quiz"
              className="text-rauha-dark hover:text-rauha-accent font-medium transition-colors text-sm hidden sm:block"
            >
              Skin Survey
            </Link>
            <a
              href="/#waitlist"
              className="bg-rauha-accent hover:bg-rauha-accent/90 text-rauha-dark font-medium px-6 py-2.5 rounded-full transition-all duration-300 hover:shadow-lg text-sm"
            >
              Unlock the Secret
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}
