'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { Menu } from 'lucide-react';
import SearchDropdown from './SearchDropdown';
import Sidebar from './Sidebar';

export default function Header() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  try {
    return (
      <>
        <header className="fixed top-[40px] sm:top-[44px] left-0 right-0 z-40 bg-rauha-light/95 backdrop-blur-sm border-b border-rauha-subtle/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16 sm:h-20">
              {/* Menu Button Only */}
              <button
                onClick={() => setSidebarOpen(!sidebarOpen)}
                className="p-2 text-rauha-dark hover:text-rauha-accent transition-colors"
                aria-label="Toggle menu"
              >
                <Menu className="w-6 h-6" />
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

        {/* Sidebar Component */}
        <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
      </>
    );
  } catch (error) {
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
