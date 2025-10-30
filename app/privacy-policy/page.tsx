export const metadata = {
  title: 'Privacy Policy | Rauha Wellness',
  description: 'Privacy Policy for Rauha Wellness - Learn how we collect, use, and protect your personal information.',
};

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen pt-32 sm:pt-40 pb-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl sm:text-5xl font-bold text-rauha-dark mb-8">Privacy Policy</h1>
        <p className="text-sm text-rauha-subtle mb-8">Last Updated: December 2024</p>

        <div className="prose prose-lg max-w-none space-y-8">
          <section>
            <h2 className="text-2xl font-bold text-rauha-dark mb-4">1. Introduction</h2>
            <p className="text-rauha-text leading-relaxed">
              Welcome to Rauha Wellness ("we," "our," or "us"). We are committed to protecting your personal information and your right to privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website rauhawellness.com.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-rauha-dark mb-4">2. Information We Collect</h2>
            <p className="text-rauha-text leading-relaxed mb-4">
              We collect personal information that you voluntarily provide to us when you:
            </p>
            <ul className="list-disc pl-6 text-rauha-text space-y-2">
              <li>Join our waitlist</li>
              <li>Subscribe to our newsletter</li>
              <li>Complete our skin survey/quiz</li>
              <li>Contact us via email or phone</li>
            </ul>
            <p className="text-rauha-text leading-relaxed mt-4">
              The personal information we collect may include: email address, phone number, name, skin concerns, and preferences.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-rauha-dark mb-4">3. How We Use Your Information</h2>
            <p className="text-rauha-text leading-relaxed mb-4">
              We use your personal information for the following purposes:
            </p>
            <ul className="list-disc pl-6 text-rauha-text space-y-2">
              <li>To notify you about product launches and updates</li>
              <li>To send you newsletters and marketing communications</li>
              <li>To provide personalized skincare recommendations</li>
              <li>To respond to your inquiries and provide customer support</li>
              <li>To improve our website and services</li>
              <li>To comply with legal obligations</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-rauha-dark mb-4">4. Information Sharing and Disclosure</h2>
            <p className="text-rauha-text leading-relaxed">
              We do not sell, trade, or rent your personal information to third parties. We may share your information only in the following circumstances:
            </p>
            <ul className="list-disc pl-6 text-rauha-text space-y-2 mt-4">
              <li>With your consent</li>
              <li>With service providers who assist us in operating our website</li>
              <li>To comply with legal requirements or protect our rights</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-rauha-dark mb-4">5. Data Security</h2>
            <p className="text-rauha-text leading-relaxed">
              We implement appropriate technical and organizational measures to protect your personal information. However, no method of transmission over the Internet is 100% secure, and we cannot guarantee absolute security.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-rauha-dark mb-4">6. Your Privacy Rights</h2>
            <p className="text-rauha-text leading-relaxed mb-4">
              You have the right to:
            </p>
            <ul className="list-disc pl-6 text-rauha-text space-y-2">
              <li>Access and receive a copy of your personal data</li>
              <li>Rectify or update your personal information</li>
              <li>Request deletion of your personal data</li>
              <li>Withdraw consent for marketing communications at any time</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-rauha-dark mb-4">7. Cookies and Tracking Technologies</h2>
            <p className="text-rauha-text leading-relaxed">
              We may use cookies and similar tracking technologies to enhance your experience on our website. You can control cookie preferences through your browser settings.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-rauha-dark mb-4">8. Children's Privacy</h2>
            <p className="text-rauha-text leading-relaxed">
              Our services are not directed to individuals under the age of 18. We do not knowingly collect personal information from children.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-rauha-dark mb-4">9. Changes to This Privacy Policy</h2>
            <p className="text-rauha-text leading-relaxed">
              We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-rauha-dark mb-4">10. Contact Us</h2>
            <p className="text-rauha-text leading-relaxed mb-4">
              If you have any questions about this Privacy Policy, please contact us:
            </p>
            <div className="bg-rauha-taupe/10 p-6 rounded-lg">
              <p className="text-rauha-text">
                <strong>Email:</strong> info@rauhawellness.com<br />
                <strong>Phone:</strong> +91-1234567890<br />
                <strong>Location:</strong> India
              </p>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
