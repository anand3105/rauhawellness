import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Cookie Policy',
  description: 'Learn about how Rauha Wellness uses cookies to enhance your browsing experience and provide personalized content.',
};

export default function CookiePolicyPage() {
  return (
    <main className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <h1 className="text-4xl font-bold text-rauha-text mb-8">Cookie Policy</h1>
        <p className="text-gray-600 mb-8">Last Updated: November 2, 2025</p>

        <div className="prose prose-lg max-w-none">
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-rauha-text mb-4">1. What Are Cookies?</h2>
            <p className="text-gray-700 leading-relaxed">
              Cookies are small text files that are placed on your device when you visit our website. They help us provide you with a better browsing experience by remembering your preferences and understanding how you interact with our site.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-rauha-text mb-4">2. How We Use Cookies</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We use cookies to:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>Remember your cookie consent preferences</li>
              <li>Analyze website traffic and user behavior</li>
              <li>Enhance your browsing experience with personalized content</li>
              <li>Track session information for analytics purposes</li>
              <li>Understand which pages you visit and how long you stay</li>
              <li>Improve our website's functionality and performance</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-rauha-text mb-4">3. Types of Cookies We Use</h2>

            <div className="space-y-6">
              <div className="border-l-4 border-rauha-accent pl-4">
                <h3 className="text-xl font-semibold text-rauha-text mb-2">Essential Cookies</h3>
                <p className="text-gray-700 leading-relaxed">
                  These cookies are necessary for the website to function properly. They enable basic features like page navigation and access to secure areas. The website cannot function properly without these cookies.
                </p>
                <ul className="list-disc pl-6 text-gray-700 space-y-1 mt-2">
                  <li><strong>Session ID:</strong> Unique identifier for your browsing session</li>
                  <li><strong>Cookie Consent:</strong> Stores your cookie preferences</li>
                </ul>
              </div>

              <div className="border-l-4 border-rauha-taupe pl-4">
                <h3 className="text-xl font-semibold text-rauha-text mb-2">Analytics Cookies</h3>
                <p className="text-gray-700 leading-relaxed">
                  These cookies help us understand how visitors interact with our website by collecting and reporting information anonymously.
                </p>
                <ul className="list-disc pl-6 text-gray-700 space-y-1 mt-2">
                  <li><strong>Page Views:</strong> Tracks which pages you visit</li>
                  <li><strong>Time Spent:</strong> Measures how long you spend on each page</li>
                  <li><strong>Referral Source:</strong> Identifies how you arrived at our website</li>
                  <li><strong>User Agent:</strong> Browser and device information</li>
                </ul>
              </div>

              <div className="border-l-4 border-rauha-light pl-4">
                <h3 className="text-xl font-semibold text-rauha-text mb-2">Functionality Cookies</h3>
                <p className="text-gray-700 leading-relaxed">
                  These cookies enable enhanced functionality and personalization, such as remembering your preferences and autofill information.
                </p>
                <ul className="list-disc pl-6 text-gray-700 space-y-1 mt-2">
                  <li><strong>Browser Autofill Data:</strong> Email and phone from browser autofill (only when you accept cookies)</li>
                  <li><strong>Form Interactions:</strong> Information you enter in forms to improve your experience</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-rauha-text mb-4">4. Information We Collect Through Cookies</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              When you accept cookies, we may collect the following information:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li><strong>Contact Information:</strong> Email address and phone number (from browser autofill or form submissions)</li>
              <li><strong>Browsing Behavior:</strong> Pages visited, time spent on pages, navigation patterns</li>
              <li><strong>Technical Information:</strong> Browser type, device type, operating system</li>
              <li><strong>Traffic Source:</strong> How you arrived at our website (direct, search, referral)</li>
              <li><strong>Session Data:</strong> Unique session identifier and timestamp</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-rauha-text mb-4">5. Your Cookie Choices</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              You have the right to choose whether to accept or decline cookies. When you first visit our website, you will see a cookie consent banner allowing you to:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li><strong>Accept All Cookies:</strong> Enables all cookies for enhanced functionality and analytics</li>
              <li><strong>Decline Cookies:</strong> Only essential cookies will be used; analytics and tracking will be disabled</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mt-4">
              You can change your cookie preferences at any time by clearing your browser's local storage and refreshing the page to see the consent banner again.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-rauha-text mb-4">6. Managing Cookies in Your Browser</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Most web browsers allow you to control cookies through their settings. You can:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>View and delete cookies stored on your device</li>
              <li>Block all cookies from being set</li>
              <li>Block third-party cookies</li>
              <li>Clear cookies when you close your browser</li>
              <li>Set exceptions for specific websites</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mt-4">
              Please note that blocking or deleting cookies may impact your experience on our website and limit certain functionality.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-rauha-text mb-4">7. Browser-Specific Instructions</h2>
            <div className="bg-rauha-light/30 p-4 rounded-lg space-y-2 text-sm">
              <p className="text-gray-700">
                <strong>Google Chrome:</strong> Settings → Privacy and security → Cookies and other site data
              </p>
              <p className="text-gray-700">
                <strong>Mozilla Firefox:</strong> Settings → Privacy & Security → Cookies and Site Data
              </p>
              <p className="text-gray-700">
                <strong>Safari:</strong> Preferences → Privacy → Manage Website Data
              </p>
              <p className="text-gray-700">
                <strong>Microsoft Edge:</strong> Settings → Cookies and site permissions → Manage and delete cookies
              </p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-rauha-text mb-4">8. Third-Party Cookies</h2>
            <p className="text-gray-700 leading-relaxed">
              Currently, we do not use third-party cookies or analytics services (such as Google Analytics). All tracking and analytics are handled internally through our own systems. We may update this policy if we introduce third-party services in the future.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-rauha-text mb-4">9. Data Retention</h2>
            <p className="text-gray-700 leading-relaxed">
              Cookie data is stored in your browser's local storage and remains until you clear it or decline cookies. Analytics data collected through cookies is stored on our servers and retained according to our Privacy Policy.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-rauha-text mb-4">10. Updates to This Cookie Policy</h2>
            <p className="text-gray-700 leading-relaxed">
              We may update this Cookie Policy from time to time to reflect changes in our practices or for legal, operational, or regulatory reasons. The "Last Updated" date at the top of this page indicates when this policy was last revised. We encourage you to review this policy periodically.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-rauha-text mb-4">11. Questions and Contact</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              If you have any questions about our use of cookies or this Cookie Policy, please contact us:
            </p>
            <div className="mt-4 p-4 bg-rauha-light rounded-lg">
              <p className="text-gray-700"><strong>Email:</strong> info@rauhawellness.com</p>
              <p className="text-gray-700"><strong>Phone:</strong> +91-9457355886</p>
              <p className="text-gray-700"><strong>Location:</strong> India</p>
            </div>
          </section>

          <div className="mt-8 p-4 bg-rauha-accent/10 rounded-lg border-l-4 border-rauha-accent">
            <p className="text-rauha-dark font-semibold mb-2">Your Privacy Matters</p>
            <p className="text-gray-700 text-sm">
              We are committed to protecting your privacy and being transparent about how we collect and use your data. By using cookies responsibly, we aim to provide you with the best possible experience while respecting your privacy choices.
            </p>
          </div>

          <div className="mt-6 flex flex-col sm:flex-row gap-3">
            <a
              href="/privacy-policy"
              className="inline-block px-6 py-3 bg-rauha-accent text-white rounded-lg font-semibold hover:bg-rauha-accent/90 transition-colors text-center"
            >
              Read Privacy Policy
            </a>
            <a
              href="/terms-and-conditions"
              className="inline-block px-6 py-3 bg-white border-2 border-rauha-accent text-rauha-accent rounded-lg font-semibold hover:bg-rauha-accent/5 transition-colors text-center"
            >
              Read Terms & Conditions
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
