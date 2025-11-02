import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Learn how Rauha Wellness collects, uses, and protects your personal information.',
};

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <h1 className="text-4xl font-bold text-rauha-text mb-8">Privacy Policy</h1>
        <p className="text-gray-600 mb-8">Last Updated: November 2, 2025</p>

        <div className="prose prose-lg max-w-none">
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-rauha-text mb-4">1. Introduction</h2>
            <p className="text-gray-700 leading-relaxed">
              Welcome to Rauha Wellness. We are committed to protecting your personal information and your right to privacy.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-rauha-text mb-4">2. Information We Collect</h2>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li><strong>Personal Information:</strong> Name, email address, phone number</li>
              <li><strong>Browser Data:</strong> When you accept cookies, we collect email and phone from your browser autofill</li>
              <li><strong>Form Submissions:</strong> Newsletter subscriptions, waitlist registrations, quiz responses</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-rauha-text mb-4">3. Contact Us</h2>
            <div className="mt-4 p-4 bg-rauha-light rounded-lg">
              <p className="text-gray-700"><strong>Email:</strong> info@rauhawellness.com</p>
              <p className="text-gray-700"><strong>Phone:</strong> +91-9410863777</p>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
