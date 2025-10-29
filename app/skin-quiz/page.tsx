import SkinQuiz from '@/components/SkinQuiz';

export const metadata = {
  title: 'Skin Survey | Rauha Wellness',
  description: 'Take our science-backed skin quiz to find your perfect oil match.',
};

export default function SkinQuizPage() {
  return (
    <main className="min-h-screen pt-20">
      <SkinQuiz />
    </main>
  );
}
