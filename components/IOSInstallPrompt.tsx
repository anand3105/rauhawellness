'use client';

import { useState, useEffect } from 'react';
import { X, Share, Plus } from 'lucide-react';

export default function IOSInstallPrompt() {
  const [showPrompt, setShowPrompt] = useState(false);
  const [isIOS, setIsIOS] = useState(false);
  const [isInStandaloneMode, setIsInStandaloneMode] = useState(false);

  useEffect(() => {
    // Detect iOS
    const userAgent = window.navigator.userAgent.toLowerCase();
    const isIOSDevice = /iphone|ipad|ipod/.test(userAgent);

    // Check if already installed (standalone mode)
    const isStandalone = window.matchMedia('(display-mode: standalone)').matches ||
                        (window.navigator as any).standalone === true;

    setIsIOS(isIOSDevice);
    setIsInStandaloneMode(isStandalone);

    // Check if user has dismissed the prompt before
    const dismissed = localStorage.getItem('ios-install-dismissed');
    const dismissedTime = dismissed ? parseInt(dismissed) : 0;
    const daysSinceDismissed = (Date.now() - dismissedTime) / (1000 * 60 * 60 * 24);

    // Show prompt if:
    // 1. User is on iOS
    // 2. Not already installed
    // 3. Haven't dismissed in last 7 days
    if (isIOSDevice && !isStandalone && daysSinceDismissed > 7) {
      // Show after 8 seconds (to not conflict with main PWA prompt)
      setTimeout(() => {
        setShowPrompt(true);
      }, 8000);
    }
  }, []);

  const handleDismiss = () => {
    setShowPrompt(false);
    localStorage.setItem('ios-install-dismissed', Date.now().toString());
  };

  // Don't show if not iOS, already installed, or user dismissed
  if (!isIOS || isInStandaloneMode || !showPrompt) {
    return null;
  }

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 animate-in slide-in-from-bottom">
      <div className="bg-white rounded-2xl shadow-2xl border border-rauha-accent/20 overflow-hidden max-w-md mx-auto">
        <div className="p-5">
          <div className="flex items-start gap-3">
            <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-rauha-accent to-rauha-taupe rounded-xl flex items-center justify-center">
              <Plus className="w-6 h-6 text-white" />
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-start justify-between mb-2">
                <h3 className="text-base font-bold text-rauha-dark">
                  Install Rauha Wellness App
                </h3>
                <button
                  onClick={handleDismiss}
                  className="ml-2 p-1 text-gray-400 hover:text-gray-600 transition-colors -mt-1"
                  aria-label="Dismiss"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              <p className="text-sm text-gray-600 mb-4 leading-relaxed">
                Add Rauha to your home screen for quick access, offline browsing, and the best mobile experience!
              </p>

              {/* iOS Installation Steps */}
              <div className="bg-rauha-light/40 rounded-xl p-4 mb-4 space-y-3">
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 bg-rauha-accent rounded-full flex items-center justify-center text-white text-xs font-bold">
                    1
                  </div>
                  <div className="flex-1">
                    <p className="text-sm text-rauha-dark">
                      Tap the <strong>Share</strong> button{' '}
                      <span className="inline-flex items-center justify-center w-6 h-6 bg-blue-500 rounded text-white text-xs ml-1">
                        <Share className="w-3 h-3" />
                      </span>
                      {' '}below
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 bg-rauha-accent rounded-full flex items-center justify-center text-white text-xs font-bold">
                    2
                  </div>
                  <div className="flex-1">
                    <p className="text-sm text-rauha-dark">
                      Scroll and tap <strong>"Add to Home Screen"</strong>{' '}
                      <span className="inline-flex items-center justify-center w-6 h-6 bg-gray-200 rounded text-gray-700 text-xs ml-1">
                        <Plus className="w-3 h-3" />
                      </span>
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 bg-rauha-accent rounded-full flex items-center justify-center text-white text-xs font-bold">
                    3
                  </div>
                  <div className="flex-1">
                    <p className="text-sm text-rauha-dark">
                      Tap <strong>"Add"</strong> to install
                    </p>
                  </div>
                </div>
              </div>

              <button
                onClick={handleDismiss}
                className="w-full text-sm text-rauha-accent font-semibold hover:text-rauha-accent/80 transition-colors"
              >
                Maybe Later
              </button>
            </div>
          </div>
        </div>

        {/* Benefits Footer */}
        <div className="bg-gradient-to-r from-rauha-accent/5 to-rauha-taupe/5 px-5 py-3 border-t border-rauha-accent/10">
          <div className="flex items-center gap-2 text-xs text-gray-600">
            <span className="inline-block w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
            <span>Offline access • Faster loading • Home screen icon</span>
          </div>
        </div>
      </div>
    </div>
  );
}
