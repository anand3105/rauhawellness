import './globals.css';
import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Rauha Wellness | 10 Years of Skin Science - Coming Soon',
  description: 'Science-based skincare powered by a decade of relentless research. Discover Kumkumadi and Rosehip oils, expertly finalized for transformative results.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-rauha-light font-sans antialiased">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
