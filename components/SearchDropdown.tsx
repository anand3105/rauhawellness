'use client';

import { useState, useRef, useEffect } from 'react';
import { Search, X, Clock } from 'lucide-react';
import Link from 'next/link';

export default function SearchDropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const dropdownRef = useRef<HTMLDivElement>(null);

  const recentSearches = [
    { name: 'Kumkumadi Oil', link: '/products/kumkumadi-oil' },
    { name: 'Rosehip Oil', link: '/products/rosehip-oil' },
  ];

  const allProducts = [
    { name: 'Kumkumadi Oil', link: '/products/kumkumadi-oil', description: 'The Elixir of Luminosity' },
    { name: 'Rosehip Oil', link: '/products/rosehip-oil', description: 'The Potent Superfood' },
  ];

  const filteredProducts = searchQuery
    ? allProducts.filter(product =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : [];

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 text-rauha-dark hover:text-rauha-accent transition-colors"
        aria-label="Search"
      >
        <Search className="w-5 h-5" />
      </button>

      {isOpen && (
        <div className="absolute right-0 top-12 w-80 bg-white rounded-lg shadow-2xl border border-rauha-subtle/20 z-50 overflow-hidden animate-fadeIn">
          {/* Search Input */}
          <div className="p-4 border-b border-rauha-subtle/20">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-rauha-subtle" />
              <input
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-10 py-2 border border-rauha-subtle/30 rounded-lg focus:outline-none focus:border-rauha-accent focus:ring-1 focus:ring-rauha-accent"
                autoFocus
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-rauha-subtle hover:text-rauha-dark"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>
          </div>

          {/* Search Results or Recent Searches */}
          <div className="max-h-80 overflow-y-auto">
            {searchQuery ? (
              // Show search results
              filteredProducts.length > 0 ? (
                <div className="p-2">
                  {filteredProducts.map((product, index) => (
                    <Link
                      key={index}
                      href={product.link}
                      onClick={() => {
                        setIsOpen(false);
                        setSearchQuery('');
                      }}
                      className="block p-3 hover:bg-rauha-taupe/20 rounded-lg transition-colors"
                    >
                      <div className="font-medium text-rauha-dark">{product.name}</div>
                      <div className="text-sm text-rauha-subtle">{product.description}</div>
                    </Link>
                  ))}
                </div>
              ) : (
                <div className="p-6 text-center text-rauha-subtle">
                  No products found
                </div>
              )
            ) : (
              // Show recent searches
              <div className="p-2">
                <div className="px-3 py-2 text-xs font-semibold text-rauha-subtle uppercase tracking-wide">
                  Recent Searches
                </div>
                {recentSearches.map((search, index) => (
                  <Link
                    key={index}
                    href={search.link}
                    onClick={() => {
                      setIsOpen(false);
                    }}
                    className="flex items-center gap-3 p-3 hover:bg-rauha-taupe/20 rounded-lg transition-colors opacity-60 hover:opacity-100"
                  >
                    <Clock className="w-4 h-4 text-rauha-subtle" />
                    <span className="text-rauha-text">{search.name}</span>
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Quick Links */}
          <div className="border-t border-rauha-subtle/20 p-3 bg-rauha-taupe/10">
            <Link
              href="/skin-quiz"
              onClick={() => setIsOpen(false)}
              className="block text-center text-sm text-rauha-accent hover:text-rauha-dark font-medium transition-colors"
            >
              Take the Skin Survey →
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
