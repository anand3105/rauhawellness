"use client";

import React from 'react';

export default function AnnouncementBar() {
  try {
    return (
      <div className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-rauha-accent via-rauha-subtle to-rauha-accent text-rauha-light overflow-hidden py-2 sm:py-2.5 group">
        <div className="flex whitespace-nowrap">
          <div className="flex items-center gap-4 sm:gap-8 px-4 sm:px-8 animate-scroll group-hover:[animation-play-state:paused]">
            <span className="font-medium text-xs sm:text-sm tracking-wide">
              ✨ Rauha is launching a research-backed skincare breakthrough this December
            </span>
            <span className="text-rauha-light/60">•</span>
            <span className="font-medium text-xs sm:text-sm tracking-wide">
              🎁 Enter our giveaway to win premium oils + ₹500 gift card!
            </span>
            <span className="text-rauha-light/60">•</span>
            <span className="font-medium text-xs sm:text-sm tracking-wide">
              Extensively Researched. Expert-Finalized Formulations.
            </span>
            <span className="text-rauha-light/60">•</span>
            <span className="font-medium text-xs sm:text-sm tracking-wide">
              Subscribe now & unlock your exclusive 15% early bird offer
            </span>
            <span className="text-rauha-light/60">•</span>
          </div>
          <div className="flex items-center gap-4 sm:gap-8 px-4 sm:px-8 animate-scroll group-hover:[animation-play-state:paused]" aria-hidden="true">
            <span className="font-medium text-xs sm:text-sm tracking-wide">
              ✨ Rauha is launching a research-backed skincare breakthrough this December
            </span>
            <span className="text-rauha-light/60">•</span>
            <span className="font-medium text-xs sm:text-sm tracking-wide">
              🎁 Enter our giveaway to win premium oils + ₹500 gift card!
            </span>
            <span className="text-rauha-light/60">•</span>
            <span className="font-medium text-xs sm:text-sm tracking-wide">
              Extensively Researched. Expert-Finalized Formulations.
            </span>
            <span className="text-rauha-light/60">•</span>
            <span className="font-medium text-xs sm:text-sm tracking-wide">
              Subscribe now & unlock your exclusive 15% early bird offer
            </span>
            <span className="text-rauha-light/60">•</span>
          </div>
        </div>
      </div>
    );
  } catch (error) {
    console.error('Error rendering AnnouncementBar:', error);
    return null;
  }
}
