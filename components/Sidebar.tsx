'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { X, ChevronDown, ChevronUp } from 'lucide-react';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

interface MenuItem {
  title: string;
  href?: string;
  items?: { label: string; href: string }[];
}

export default function Sidebar({ isOpen, onClose }: SidebarProps) {
  const [expandedSections, setExpandedSections] = useState<Set<string>>(new Set());
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const toggleSection = (title: string) => {
    const newExpanded = new Set(expandedSections);
    if (newExpanded.has(title)) {
      newExpanded.delete(title);
    } else {
      newExpanded.add(title);
    }
    setExpandedSections(newExpanded);
  };

  const menuItems: MenuItem[] = [
    {
      title: 'PRODUCTS',
      items: [
        { label: 'Kumkumadi Oil', href: '/products/kumkumadi-oil' },
        { label: 'Rosehip Oil', href: '/products/rosehip-oil' },
      ],
    },
    {
      title: 'WHY RAUHA',
      href: '/why-rauha',
    },
    {
      title: 'SKIN QUIZ',
      href: '/skin-quiz',
    },
    {
      title: 'GIVEAWAY 🎁',
      href: '/giveaway',
    },
    {
      title: 'CAREERS',
      href: '/careers',
    },
  ];

  if (!mounted) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className={`fixed inset-0 bg-rauha-dark/60 backdrop-blur-sm z-[60] transition-opacity duration-500 ${
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-full w-full sm:w-[400px] bg-rauha-light z-[70] shadow-2xl transform transition-all duration-500 ease-out ${
          isOpen ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'
        }`}
        aria-label="Navigation sidebar"
      >
        <div className="h-full flex flex-col">
          {/* Header */}
          <div className="relative border-b border-rauha-subtle/20 bg-gradient-to-b from-rauha-light to-rauha-light/95">
            <div className="px-6 py-6 flex items-center justify-between">
              <h2 className="text-xl font-semibold tracking-wider text-rauha-dark">
                MENU
              </h2>
              <button
                onClick={onClose}
                className="p-2 hover:bg-rauha-subtle/10 rounded-full transition-all duration-300 group"
                aria-label="Close menu"
              >
                <X className="w-6 h-6 text-rauha-dark group-hover:rotate-90 transition-transform duration-300" />
              </button>
            </div>
            {/* Decorative line */}
            <div className="absolute bottom-0 left-6 right-6 h-[1px] bg-gradient-to-r from-transparent via-rauha-accent to-transparent opacity-50" />
          </div>

          {/* Menu Items */}
          <nav className="flex-1 overflow-y-auto px-6 py-8 space-y-1 scrollbar-custom">
            {menuItems.map((item, index) => (
              <div
                key={item.title}
                className="border-b border-rauha-subtle/10 last:border-b-0"
                style={{
                  animation: isOpen
                    ? `slideInFromRight 0.4s ease-out forwards ${index * 0.08}s`
                    : 'none',
                  opacity: isOpen ? 1 : 0,
                }}
              >
                {item.href ? (
                  // Simple link item
                  <Link
                    href={item.href}
                    onClick={onClose}
                    className="block py-4 text-rauha-dark hover:text-rauha-accent font-medium tracking-wide transition-all duration-300 hover:translate-x-2 group"
                  >
                    <span className="flex items-center justify-between">
                      <span className="text-sm">{item.title}</span>
                      <ChevronDown className="w-4 h-4 -rotate-90 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </span>
                  </Link>
                ) : (
                  // Expandable section
                  <div>
                    <button
                      onClick={() => toggleSection(item.title)}
                      className="w-full py-4 text-rauha-dark hover:text-rauha-accent font-medium tracking-wide transition-colors duration-300 text-left group"
                      aria-expanded={expandedSections.has(item.title)}
                    >
                      <span className="flex items-center justify-between">
                        <span className="text-sm">{item.title}</span>
                        {expandedSections.has(item.title) ? (
                          <ChevronUp className="w-4 h-4 text-rauha-accent transition-transform duration-300" />
                        ) : (
                          <ChevronDown className="w-4 h-4 transition-transform duration-300 group-hover:translate-y-0.5" />
                        )}
                      </span>
                    </button>

                    {/* Submenu */}
                    <div
                      className={`overflow-hidden transition-all duration-500 ease-in-out ${
                        expandedSections.has(item.title)
                          ? 'max-h-96 opacity-100'
                          : 'max-h-0 opacity-0'
                      }`}
                    >
                      <div className="pl-4 pr-2 pb-3 space-y-1">
                        {item.items?.map((subItem, subIndex) => (
                          <Link
                            key={subItem.label}
                            href={subItem.href}
                            onClick={onClose}
                            className="block py-2.5 px-4 text-rauha-text/80 hover:text-rauha-accent hover:bg-rauha-accent/5 rounded-lg transition-all duration-300 text-sm hover:translate-x-1 border-l-2 border-transparent hover:border-rauha-accent"
                            style={{
                              animation: expandedSections.has(item.title)
                                ? `fadeInUp 0.3s ease-out forwards ${subIndex * 0.05}s`
                                : 'none',
                            }}
                          >
                            {subItem.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Footer CTA */}
          <div className="border-t border-rauha-subtle/20 px-6 py-6 bg-gradient-to-t from-rauha-light to-rauha-light/95">
            <a
              href="/#waitlist"
              onClick={onClose}
              className="block w-full bg-rauha-accent hover:bg-rauha-accent/90 text-rauha-dark font-semibold px-6 py-4 rounded-full transition-all duration-300 hover:shadow-xl text-center tracking-wide hover:scale-[1.02] active:scale-[0.98]"
            >
              UNLOCK THE SECRET
            </a>
            <div className="mt-4 text-center">
              <p className="text-xs text-rauha-text/60 tracking-wider">
                Experience Luxury Wellness
              </p>
            </div>
          </div>
        </div>
      </aside>

      <style jsx>{`
        @keyframes slideInFromRight {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .scrollbar-custom::-webkit-scrollbar {
          width: 6px;
        }

        .scrollbar-custom::-webkit-scrollbar-track {
          background: transparent;
        }

        .scrollbar-custom::-webkit-scrollbar-thumb {
          background: #C98A53;
          border-radius: 3px;
        }

        .scrollbar-custom::-webkit-scrollbar-thumb:hover {
          background: #b07744;
        }
      `}</style>
    </>
  );
}
