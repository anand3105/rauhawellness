"use client";

import React from 'react';
import { Shield, Award, Leaf, Heart, MapPin, Ban, Recycle } from 'lucide-react';

export default function CertificationBanner() {
  const certifications = [
    { icon: Shield, text: "ISO Certified" },
    { icon: Award, text: "GMP Approved" },
    { icon: Leaf, text: "100% Organic Ingredients" },
    { icon: Heart, text: "Cruelty-Free" },
    { icon: MapPin, text: "Handcrafted in India" },
    { icon: Ban, text: "Paraben & Silicone Free" },
    { icon: Recycle, text: "Eco-Conscious Packaging" },
  ];

  try {
    return (
      <div className="bg-rauha-light py-3 sm:py-4 overflow-hidden border-y border-rauha-subtle/30">
        <div className="flex whitespace-nowrap">
          {/* First set */}
          <div className="flex items-center gap-8 sm:gap-12 px-6 sm:px-10 animate-scroll-slow">
            {certifications.map((cert, index) => {
              const Icon = cert.icon;
              return (
                <div key={index} className="flex items-center gap-2 sm:gap-3">
                  <Icon className={`w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0 ${
                    cert.text.includes('Organic') || cert.text.includes('Eco-Conscious') ? 'text-rauha-green' : 'text-rauha-accent'
                  }`} />
                  <span className="text-xs sm:text-sm font-medium text-rauha-text tracking-wide">
                    {cert.text}
                  </span>
                </div>
              );
            })}
          </div>

          {/* Duplicate for seamless loop */}
          <div className="flex items-center gap-8 sm:gap-12 px-6 sm:px-10 animate-scroll-slow" aria-hidden="true">
            {certifications.map((cert, index) => {
              const Icon = cert.icon;
              return (
                <div key={`duplicate-${index}`} className="flex items-center gap-2 sm:gap-3">
                  <Icon className={`w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0 ${
                    cert.text.includes('Organic') || cert.text.includes('Eco-Conscious') ? 'text-rauha-green' : 'text-rauha-accent'
                  }`} />
                  <span className="text-xs sm:text-sm font-medium text-rauha-text tracking-wide">
                    {cert.text}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  } catch (error) {
    console.error('Error rendering CertificationBanner:', error);
    return null;
  }
}
