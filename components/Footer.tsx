import { Instagram, Facebook } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-rauha-dark text-rauha-light py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <p className="text-sm mb-2">
              &copy; 2025 Rauha Wellness. All Rights Reserved.
            </p>
            <p className="text-rauha-subtle text-sm font-light">
              Science | Skin | Wellness.
            </p>
          </div>

          <div className="flex items-center gap-6">
            <a
              href="#"
              aria-label="Instagram"
              className="text-rauha-light hover:text-rauha-accent transition-colors duration-300"
            >
              <Instagram className="w-6 h-6" />
            </a>
            <a
              href="#"
              aria-label="Facebook"
              className="text-rauha-light hover:text-rauha-accent transition-colors duration-300"
            >
              <Facebook className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
