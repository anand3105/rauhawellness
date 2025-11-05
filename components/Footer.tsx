'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { Mail, Phone, MapPin, ArrowRight, Instagram, Linkedin, Twitter } from 'lucide-react';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage('');

    try {
      const response = await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (response.ok) {
        setMessage('Thank you for subscribing! 🎉');
        setEmail('');
      } else {
        setMessage(data.error || 'Something went wrong. Please try again.');
      }
    } catch (error) {
      setMessage('Failed to subscribe. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  try {
    return (
      <footer className="bg-rauha-dark text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {/* Brand Section */}
            <div className="lg:col-span-1">
              <Link href="/" className="inline-block mb-4">
                <Image
                  src="/Rauha_White.png"
                  alt="Rauha Wellness"
                  width={140}
                  height={50}
                  className="h-10 w-auto"
                />
              </Link>
              <p className="text-rauha-light/80 text-sm leading-relaxed mb-4">
                Nature's Messenger for Modern India.
                <br />
                Crafted in small batches from herbs grown in Indian soil.
              </p>
              <p className="text-xs text-rauha-light/60 italic mb-4">
                From forest to face. From earth to essence.
              </p>

              {/* Social Media Icons */}
              <div className="flex items-center gap-3">
                <a
                  href="https://www.linkedin.com/company/rauhawellness/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-rauha-light/10 hover:bg-rauha-accent flex items-center justify-center transition-all duration-300 group"
                  aria-label="Follow us on LinkedIn"
                >
                  <Linkedin className="w-4 h-4 text-rauha-light group-hover:text-rauha-dark transition-colors" />
                </a>
                <a
                  href="https://www.instagram.com/rauhawellness?igsh=am5xNXdxcmZydjVu"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-rauha-light/10 hover:bg-rauha-accent flex items-center justify-center transition-all duration-300 group"
                  aria-label="Follow us on Instagram"
                >
                  <Instagram className="w-4 h-4 text-rauha-light group-hover:text-rauha-dark transition-colors" />
                </a>
                <a
                  href="https://twitter.com/rauhawellness"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-rauha-light/10 hover:bg-rauha-accent flex items-center justify-center transition-all duration-300 group"
                  aria-label="Follow us on Twitter"
                >
                  <Twitter className="w-4 h-4 text-rauha-light group-hover:text-rauha-dark transition-colors" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/giveaway" className="text-rauha-light/80 hover:text-rauha-accent transition-colors text-sm flex items-center gap-1">
                    Giveaway Contest 🎁
                  </Link>
                </li>
                <li>
                  <Link href="/skin-quiz" className="text-rauha-light/80 hover:text-rauha-accent transition-colors text-sm">
                    Skin Survey
                  </Link>
                </li>
                <li>
                  <Link href="/products/kumkumadi-oil" className="text-rauha-light/80 hover:text-rauha-accent transition-colors text-sm">
                    Kumkumadi Oil
                  </Link>
                </li>
                <li>
                  <Link href="/products/rosehip-oil" className="text-rauha-light/80 hover:text-rauha-accent transition-colors text-sm">
                    Rosehip Oil
                  </Link>
                </li>
                <li>
                  <a href="/#waitlist" className="text-rauha-light/80 hover:text-rauha-accent transition-colors text-sm">
                    Join Waitlist
                  </a>
                </li>
                <li>
                  <Link href="/why-rauha" className="text-rauha-light/80 hover:text-rauha-accent transition-colors text-sm">
                    Why Rauha
                  </Link>
                </li>
                <li>
                  <Link href="/careers" className="text-rauha-light/80 hover:text-rauha-accent transition-colors text-sm">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="text-rauha-light/80 hover:text-rauha-accent transition-colors text-sm">
                    About Us
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact & Policies */}
            <div>
              <h3 className="text-lg font-bold mb-4">Contact & Info</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2 text-sm">
                  <Mail className="w-4 h-4 text-rauha-accent mt-0.5 flex-shrink-0" />
                  <a href="mailto:info@rauhawellness.com" className="text-rauha-light/80 hover:text-rauha-accent transition-colors">
                    info@rauhawellness.com
                  </a>
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <Phone className="w-4 h-4 text-rauha-accent mt-0.5 flex-shrink-0" />
                  <a href="tel:+919457355886" className="text-rauha-light/80 hover:text-rauha-accent transition-colors">
                    +91-9457355886
                  </a>
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <MapPin className="w-4 h-4 text-rauha-accent mt-0.5 flex-shrink-0" />
                  <span className="text-rauha-light/80">India</span>
                </li>
              </ul>

              <div className="mt-6 pt-6 border-t border-rauha-light/20">
                <h4 className="text-sm font-semibold mb-2">Legal</h4>
                <ul className="space-y-2">
                  <li>
                    <Link href="/privacy-policy" className="text-rauha-light/80 hover:text-rauha-accent transition-colors text-sm">
                      Privacy Policy
                    </Link>
                  </li>
                  <li>
                    <Link href="/terms-and-conditions" className="text-rauha-light/80 hover:text-rauha-accent transition-colors text-sm">
                      Terms & Conditions
                    </Link>
                  </li>
                  <li>
                    <Link href="/cookie-policy" className="text-rauha-light/80 hover:text-rauha-accent transition-colors text-sm">
                      Cookie Policy
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            {/* Newsletter */}
            <div>
              <h3 className="text-lg font-bold mb-4">Become a Part of Rauha Wellness</h3>
              <p className="text-rauha-light/80 text-sm mb-4">
                Join the waitlist for early access, exclusive rituals, and stories from the land your oils come from.
              </p>
              <form onSubmit={handleNewsletterSubmit} className="space-y-3">
                <div className="relative">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="w-full px-4 py-3 bg-white/10 border border-rauha-light/20 rounded-lg text-white placeholder-rauha-light/50 focus:outline-none focus:border-rauha-accent focus:ring-1 focus:ring-rauha-accent text-sm"
                  />
                </div>
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-rauha-accent hover:bg-rauha-accent/90 text-rauha-dark font-semibold px-4 py-3 rounded-lg transition-all duration-300 hover:shadow-lg flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed text-sm"
                >
                  {loading ? 'Subscribing...' : 'Subscribe'}
                  <ArrowRight className="w-4 h-4" />
                </button>
                {message && (
                  <p className={`text-sm ${message.includes('Thank you') ? 'text-green-400' : 'text-red-400'}`}>
                    {message}
                  </p>
                )}
              </form>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-rauha-light/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-rauha-light/60">
              <p>© {new Date().getFullYear()} Rauha Wellness. All rights reserved.</p>
              <p className="text-xs italic text-center sm:text-right">
                Rauha Wellness — Nature's Messenger for Modern India.
                <br className="hidden sm:inline" />
                <span className="hidden sm:inline"> </span>
                From forest to face. From earth to essence.
              </p>
            </div>
          </div>
        </div>
      </footer>
    );
  } catch (error) {
    return null;
  }
}
