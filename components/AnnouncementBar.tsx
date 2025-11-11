"use client";

import React from 'react';

export default function AnnouncementBar() {
  try {
    return (
      <div className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-rauha-green via-rauha-accent to-rauha-green text-rauha-light overflow-hidden py-2 sm:py-2.5 group">
        <div className="flex whitespace-nowrap">
          <div className="flex items-center gap-4 sm:gap-8 px-4 sm:px-8 animate-scroll group-hover:[animation-play-state:paused]">
            <span className="font-medium text-xs sm:text-sm tracking-wide">
              🌿 Healing What the World Has Taken
            </span>
            <span className="text-rauha-light/60">•</span>
            <span className="font-medium text-xs sm:text-sm tracking-wide">
              Made in small batches from herbs grown in Indian soil
            </span>
            <span className="text-rauha-light/60">•</span>
            <span className="font-medium text-xs sm:text-sm tracking-wide">
              Purity, patience, peace — skincare that listens
            </span>
            <span className="text-rauha-light/60">•</span>
            <span className="font-medium text-xs sm:text-sm tracking-wide">
              ✨ Join the waitlist for exclusive early access
            </span>
            <span className="text-rauha-light/60">•</span>
          </div>
          <div className="flex items-center gap-4 sm:gap-8 px-4 sm:px-8 animate-scroll group-hover:[animation-play-state:paused]" aria-hidden="true">
            <span className="font-medium text-xs sm:text-sm tracking-wide">
              🌿 Healing What the World Has Taken
            </span>
            <span className="text-rauha-light/60">•</span>
            <span className="font-medium text-xs sm:text-sm tracking-wide">
              Made in small batches from herbs grown in Indian soil
            </span>
            <span className="text-rauha-light/60">•</span>
            <span className="font-medium text-xs sm:text-sm tracking-wide">
              Purity, patience, peace — skincare that listens
            </span>
            <span className="text-rauha-light/60">•</span>
            <span className="font-medium text-xs sm:text-sm tracking-wide">
              ✨ Join the waitlist for exclusive early access
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
