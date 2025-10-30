'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import SearchDropdown from './SearchDropdown';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  try {
    return (
      <>
        <header className="fixed top-[40px] sm:top-[44px] left-0 right-0 z-40 bg-rauha-light/95 backdrop-blur-sm border-b border-rauha-subtle/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16 sm:h-20">
              {/* Left Navigation (Desktop) */}
              <nav className="hidden md:flex items-center gap-4">
                <Link
                  href="/why-rauha"
                  className="text-rauha-dark hover:text-rauha-accent font-medium transition-colors text-sm"
                >
                  Why Rauha
                </Link>
                <Link
                  href="/skin-quiz"
                  className="text-rauha-dark hover:text-rauha-accent font-medium transition-colors text-sm"
                >
                  Skin Survey
                </Link>
              </nav>

              {/* Mobile Menu Button (Left side on mobile) */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden p-2 text-rauha-dark hover:text-rauha-accent transition-colors z-50"
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>

              {/* Centered Logo */}
              <Link
                href="/"
                className="absolute left-1/2 transform -translate-x-1/2 hover:opacity-80 z-50 logo-link"
                style={{ animation: 'none' }}
              >
                <Image
                  src="/Rauha_Black.png"
                  alt="Rauha Wellness"
                  width={120}
                  height={40}
                  className="h-8 sm:h-10 w-auto logo-image"
                  priority
                />
              </Link>

              {/* Right Navigation (Desktop) */}
              <nav className="hidden md:flex items-center gap-4 ml-auto">
                <SearchDropdown />
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

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="fixed inset-0 z-30 md:hidden">
            <div
              className="fixed inset-0 bg-rauha-dark/50 backdrop-blur-sm"
              onClick={() => setMobileMenuOpen(false)}
            />
            <nav className="fixed top-[96px] sm:top-[108px] right-0 left-0 bg-rauha-light border-b border-rauha-subtle/20 shadow-xl">
              <div className="px-4 py-6 space-y-4">
                <Link
                  href="/why-rauha"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block text-rauha-dark hover:text-rauha-accent font-medium transition-colors text-base py-3 px-4 rounded-lg hover:bg-rauha-taupe/20"
                >
                  Why Rauha
                </Link>
                <Link
                  href="/skin-quiz"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block text-rauha-dark hover:text-rauha-accent font-medium transition-colors text-base py-3 px-4 rounded-lg hover:bg-rauha-taupe/20"
                >
                  Skin Survey
                </Link>
                <a
                  href="/#waitlist"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block bg-rauha-accent hover:bg-rauha-accent/90 text-rauha-dark font-medium px-4 py-3 rounded-lg transition-all duration-300 text-center"
                >
                  Unlock the Secret
                </a>
              </div>
            </nav>
          </div>
        )}
      </>
    );
  } catch (error) {
    console.error('Error rendering Header:', error);
    return (
      <header className="fixed top-[40px] sm:top-[44px] left-0 right-0 z-40 bg-rauha-light/95 backdrop-blur-sm border-b border-rauha-subtle/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center h-16 sm:h-20">
            <Link href="/">
              <Image
                src="/Rauha_Black.png"
                alt="Rauha Wellness"
                width={120}
                height={40}
                className="h-8 sm:h-10 w-auto"
              />
            </Link>
          </div>
        </div>
      </header>
    );
  }
}
