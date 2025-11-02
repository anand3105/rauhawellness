'use client';

import { useState, FormEvent } from 'react';
import Image from 'next/image';
import { ChevronRight, Sparkles, ArrowLeft } from 'lucide-react';

interface QuizData {
  email: string;
  skinType: string;
  skinConcerns: string[];
  skinGoals: string[];
  ageRange: string;
}

export default function SkinQuiz() {
  const [step, setStep] = useState(0);
  const [quizData, setQuizData] = useState<QuizData>({
    email: '',
    skinType: '',
    skinConcerns: [],
    skinGoals: [],
    ageRange: '',
  });
  const [recommendation, setRecommendation] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const questions = [
    {
      id: 'skinType',
      question: 'What is your skin type?',
      type: 'single',
      backgroundImage: '/004e3c07-4982-4a5e-b366-a73f5534d55b.jpg',
      options: [
        { value: 'dry', label: 'Dry', description: 'Feels tight and flaky' },
        { value: 'oily', label: 'Oily', description: 'Shiny with visible pores' },
        { value: 'combination', label: 'Combination', description: 'Oily T-zone, dry cheeks' },
        { value: 'normal', label: 'Normal', description: 'Balanced and clear' },
        { value: 'sensitive', label: 'Sensitive', description: 'Easily irritated' },
      ],
    },
    {
      id: 'skinConcerns',
      question: 'What are your main skin concerns?',
      subtitle: 'Select all that apply',
      type: 'multiple',
      backgroundImage: '/a15ad3cd-c8af-44b3-9987-6d959e5f715b.jpg',
      options: [
        { value: 'dullness', label: 'Dullness & Uneven Tone' },
        { value: 'pigmentation', label: 'Dark Spots & Pigmentation' },
        { value: 'aging', label: 'Fine Lines & Wrinkles' },
        { value: 'acne', label: 'Acne & Blemishes' },
        { value: 'dryness', label: 'Dryness & Dehydration' },
        { value: 'texture', label: 'Rough Texture' },
      ],
    },
    {
      id: 'skinGoals',
      question: 'What are your skin goals?',
      subtitle: 'Select all that apply',
      type: 'multiple',
      backgroundImage: '/ec41a3e3-7846-4108-87a7-10672992cc90.jpg',
      options: [
        { value: 'radiance', label: 'Glowing, Radiant Skin' },
        { value: 'evenTone', label: 'Even Skin Tone' },
        { value: 'antiAging', label: 'Reduce Signs of Aging' },
        { value: 'firmness', label: 'Improve Firmness & Elasticity' },
        { value: 'hydration', label: 'Deep Hydration' },
        { value: 'repair', label: 'Repair & Rejuvenate' },
      ],
    },
    {
      id: 'ageRange',
      question: 'What is your age range?',
      type: 'single',
      backgroundImage: '/d5bb04ee-c10b-4d57-bd92-52976284f3ac.jpg',
      options: [
        { value: '18-25', label: '18-25' },
        { value: '26-35', label: '26-35' },
        { value: '36-45', label: '36-45' },
        { value: '46-55', label: '46-55' },
        { value: '55+', label: '55+' },
      ],
    },
    {
      id: 'email',
      question: 'Enter your email to get your personalized recommendation',
      type: 'email',
      backgroundImage: '/2b1f3ef7-bb63-4cfc-970a-76f307087f6f.jpg',
    },
  ];

  const handleSingleSelect = (field: keyof QuizData, value: string) => {
    setQuizData({ ...quizData, [field]: value });
  };

  const handleMultipleSelect = (field: keyof QuizData, value: string) => {
    const currentValues = quizData[field] as string[];
    const newValues = currentValues.includes(value)
      ? currentValues.filter((v) => v !== value)
      : [...currentValues, value];
    setQuizData({ ...quizData, [field]: newValues });
  };

  const getRecommendation = (): string => {
    const concerns = quizData.skinConcerns;
    const goals = quizData.skinGoals;

    const kumkumadiScore =
      (concerns.includes('dullness') ? 2 : 0) +
      (concerns.includes('pigmentation') ? 2 : 0) +
      (goals.includes('radiance') ? 2 : 0) +
      (goals.includes('evenTone') ? 2 : 0) +
      (goals.includes('repair') ? 1 : 0);

    const rosehipScore =
      (concerns.includes('aging') ? 2 : 0) +
      (concerns.includes('texture') ? 2 : 0) +
      (concerns.includes('dryness') ? 1 : 0) +
      (goals.includes('antiAging') ? 2 : 0) +
      (goals.includes('firmness') ? 2 : 0) +
      (goals.includes('hydration') ? 1 : 0);

    return kumkumadiScore >= rosehipScore ? 'Kumkumadi Oil' : 'Rosehip Oil';
  };

  const handleNext = () => {
    const currentQuestion = questions[step];

    if (currentQuestion.type === 'single' && !quizData[currentQuestion.id as keyof QuizData]) {
      return;
    }

    if (currentQuestion.type === 'multiple') {
      const values = quizData[currentQuestion.id as keyof QuizData] as string[];
      if (values.length === 0) return;
    }

    if (step < questions.length - 1) {
      setStep(step + 1);
    }
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!quizData.email) return;

    setIsSubmitting(true);

    const recommendedProduct = getRecommendation();

    try {
      const response = await fetch('/api/quiz', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: quizData.email,
          skin_type: quizData.skinType,
          skin_concerns: quizData.skinConcerns,
          skin_goals: quizData.skinGoals,
          age_range: quizData.ageRange,
          recommended_product: recommendedProduct,
        }),
      });

      if (!response.ok) {
        // Still show recommendation even if save fails
      }

      setRecommendation(recommendedProduct);
    } catch (error) {
      // Still show recommendation even if there's an error
      setRecommendation(recommendedProduct);
    } finally {
      setIsSubmitting(false);
    }
  };

  const canProceed = () => {
    const currentQuestion = questions[step];
    if (currentQuestion.type === 'single') {
      return !!quizData[currentQuestion.id as keyof QuizData];
    }
    if (currentQuestion.type === 'multiple') {
      const values = quizData[currentQuestion.id as keyof QuizData] as string[];
      return values.length > 0;
    }
    return true;
  };

  if (recommendation) {
    return (
      <section className="py-12 sm:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-rauha-accent/10 via-rauha-light to-rauha-taupe/20">
        <div className="max-w-3xl mx-auto text-center">
          <div className="mb-6 sm:mb-8">
            <Sparkles className="w-12 h-12 sm:w-16 sm:h-16 mx-auto text-rauha-accent mb-3 sm:mb-4" />
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-rauha-dark mb-4 sm:mb-6 px-2">
              Your Perfect Match
            </h2>
          </div>

          <div className="bg-white rounded-2xl shadow-2xl p-6 sm:p-10 lg:p-12">
            <div className="mb-6 sm:mb-8">
              <span className="inline-block bg-rauha-subtle text-rauha-dark text-[10px] sm:text-xs font-semibold px-3 sm:px-4 py-1.5 sm:py-2 rounded-full uppercase tracking-wide mb-4 sm:mb-6">
                Personalized for You
              </span>
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-rauha-dark mb-3 sm:mb-4 px-2">
                {recommendation === 'Kumkumadi Oil' ? 'The Elixir of Luminosity' : 'The Potent Superfood'}
              </h3>
              <p className="text-lg sm:text-xl md:text-2xl text-rauha-accent font-bold mb-4 sm:mb-6">{recommendation}</p>
            </div>

            {recommendation === 'Kumkumadi Oil' ? (
              <div className="text-left space-y-3 sm:space-y-4 text-rauha-text">
                <p className="text-sm sm:text-base leading-relaxed">
                  Based on your skin profile, <strong>Kumkumadi Oil</strong> is your ideal companion.
                  This ancient elixir, perfected by modern science, targets your concerns with precision.
                </p>
                <div className="bg-rauha-light rounded-xl p-4 sm:p-6 space-y-2">
                  <p className="font-semibold text-rauha-dark text-sm sm:text-base">Perfect for:</p>
                  <ul className="list-disc list-inside space-y-1 text-sm sm:text-base">
                    <li>Brightening dull, uneven skin tone</li>
                    <li>Fading dark spots and pigmentation</li>
                    <li>Achieving a radiant, luminous glow</li>
                    <li>Cell repair and rejuvenation</li>
                  </ul>
                </div>
              </div>
            ) : (
              <div className="text-left space-y-3 sm:space-y-4 text-rauha-text">
                <p className="text-sm sm:text-base leading-relaxed">
                  Based on your skin profile, <strong>Rosehip Oil</strong> is your perfect match.
                  Clinically proven and packed with essential fatty acids for transformative results.
                </p>
                <div className="bg-rauha-light rounded-xl p-4 sm:p-6 space-y-2">
                  <p className="font-semibold text-rauha-dark text-sm sm:text-base">Perfect for:</p>
                  <ul className="list-disc list-inside space-y-1 text-sm sm:text-base">
                    <li>Reducing fine lines and wrinkles</li>
                    <li>Boosting natural collagen production</li>
                    <li>Improving skin firmness and elasticity</li>
                    <li>Deep hydration and texture refinement</li>
                  </ul>
                </div>
              </div>
            )}

            <div className="mt-6 sm:mt-8 pt-6 sm:pt-8 border-t border-rauha-subtle/30">
              <p className="text-sm sm:text-base text-rauha-text mb-4 sm:mb-6 px-2">
                Join our waitlist now to receive <strong className="text-rauha-accent">15% OFF</strong> your {recommendation} at launch!
              </p>
              <a
                href="/#waitlist"
                className="inline-block bg-rauha-accent hover:bg-rauha-accent/90 text-rauha-dark font-bold px-6 sm:px-8 py-3 sm:py-4 rounded-xl transition-all duration-300 hover:shadow-lg text-sm sm:text-base"
              >
                Claim Your Discount
              </a>
            </div>
          </div>
        </div>
      </section>
    );
  }

  const currentQuestion = questions[step];

  try {
    return (
      <section className="min-h-screen pt-[88px] sm:pt-[100px]">
        {/* Split Screen Layout */}
        <div className="flex flex-col md:flex-row min-h-[calc(100vh-88px)] sm:min-h-[calc(100vh-100px)]">
          {/* Left Side - Background Image */}
          <div className="hidden md:block md:w-1/2 relative">
            <Image
              src={currentQuestion.backgroundImage || '/004e3c07-4982-4a5e-b366-a73f5534d55b.jpg'}
              alt="Quiz background"
              fill
              className="object-cover"
              priority={step === 0}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent to-rauha-dark/20" />
          </div>

          {/* Right Side - Quiz Content */}
          <div className="w-full md:w-1/2 bg-white flex items-center justify-center p-4 sm:p-8 lg:p-12 relative">
            {/* Mobile Background Image */}
            <div className="absolute inset-0 md:hidden">
              <Image
                src={currentQuestion.backgroundImage || '/004e3c07-4982-4a5e-b366-a73f5534d55b.jpg'}
                alt="Quiz background"
                fill
                className="object-cover opacity-10"
              />
            </div>

            <div className="w-full max-w-xl relative z-10">
              {/* Progress Bar */}
              <div className="mb-8 sm:mb-12">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs sm:text-sm font-medium text-rauha-text">
                    Question {step + 1} of {questions.length}
                  </span>
                  <span className="text-xs sm:text-sm font-semibold text-rauha-accent">
                    {Math.round(((step + 1) / questions.length) * 100)}%
                  </span>
                </div>
                <div className="w-full bg-rauha-subtle/30 rounded-full h-2.5">
                  <div
                    className="bg-rauha-accent h-2.5 rounded-full transition-all duration-500"
                    style={{ width: `${((step + 1) / questions.length) * 100}%` }}
                  />
                </div>
              </div>

              {/* Question Container */}
              <div>
            <h3 className="text-xl sm:text-2xl font-bold text-rauha-dark mb-2">
              {currentQuestion.question}
            </h3>
            {currentQuestion.subtitle && (
              <p className="text-rauha-subtle text-xs sm:text-sm mb-4 sm:mb-6">{currentQuestion.subtitle}</p>
            )}

            {currentQuestion.type === 'email' ? (
              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                <input
                  type="email"
                  value={quizData.email}
                  onChange={(e) => setQuizData({ ...quizData, email: e.target.value })}
                  placeholder="your@email.com"
                  required
                  className="w-full px-4 sm:px-5 py-3 sm:py-4 border-2 border-rauha-subtle/40 rounded-xl focus:border-rauha-accent focus:ring-2 focus:ring-rauha-accent/20 outline-none transition-all text-rauha-text text-base sm:text-lg"
                />
                <button
                  type="submit"
                  disabled={isSubmitting || !quizData.email}
                  className="w-full bg-rauha-accent hover:bg-rauha-accent/90 text-rauha-dark font-bold py-3 sm:py-4 px-6 sm:px-8 rounded-xl transition-all duration-300 hover:shadow-lg flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed text-sm sm:text-base"
                >
                  {isSubmitting ? 'Analyzing...' : 'Get My Recommendation'}
                  <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
                </button>
              </form>
            ) : currentQuestion.type === 'single' ? (
              <div className="space-y-3">
                {currentQuestion.options?.map((option) => (
                  <button
                    key={option.value}
                    onClick={() => handleSingleSelect(currentQuestion.id as keyof QuizData, option.value)}
                    className={`w-full text-left p-4 sm:p-5 border-2 rounded-xl transition-all duration-200 ${
                      quizData[currentQuestion.id as keyof QuizData] === option.value
                        ? 'border-rauha-accent bg-rauha-accent/10'
                        : 'border-rauha-subtle/40 hover:border-rauha-accent/50 hover:bg-rauha-light'
                    }`}
                  >
                    <div className="font-semibold text-rauha-dark text-sm sm:text-base">{option.label}</div>
                    {'description' in option && option.description && (
                      <div className="text-xs sm:text-sm text-rauha-text mt-1">{option.description}</div>
                    )}
                  </button>
                ))}
              </div>
            ) : (
              <div className="space-y-3">
                {currentQuestion.options?.map((option) => {
                  const isSelected = (quizData[currentQuestion.id as keyof QuizData] as string[]).includes(option.value);
                  return (
                    <button
                      key={option.value}
                      onClick={() => handleMultipleSelect(currentQuestion.id as keyof QuizData, option.value)}
                      className={`w-full text-left p-4 sm:p-5 border-2 rounded-xl transition-all duration-200 ${
                        isSelected
                          ? 'border-rauha-accent bg-rauha-accent/10'
                          : 'border-rauha-subtle/40 hover:border-rauha-accent/50 hover:bg-rauha-light'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div className={`w-4 h-4 sm:w-5 sm:h-5 rounded border-2 flex items-center justify-center flex-shrink-0 ${
                          isSelected ? 'border-rauha-accent bg-rauha-accent' : 'border-rauha-subtle'
                        }`}>
                          {isSelected && (
                            <svg className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                            </svg>
                          )}
                        </div>
                        <span className="font-semibold text-rauha-dark text-sm sm:text-base">{option.label}</span>
                      </div>
                    </button>
                  );
                })}
              </div>
            )}

            {currentQuestion.type !== 'email' && (
              <div className="mt-8 sm:mt-10 flex gap-3 sm:gap-4">
                {step > 0 && (
                  <button
                    onClick={() => setStep(step - 1)}
                    className="px-6 sm:px-8 py-3 sm:py-4 border-2 border-rauha-subtle text-rauha-dark rounded-xl hover:bg-rauha-light transition-all text-sm sm:text-base font-medium flex items-center gap-2"
                  >
                    <ArrowLeft className="w-4 h-4" />
                    Back
                  </button>
                )}
                <button
                  onClick={handleNext}
                  disabled={!canProceed()}
                  className="flex-1 bg-rauha-accent hover:bg-rauha-accent/90 text-rauha-dark font-bold py-3 sm:py-4 px-6 sm:px-8 rounded-xl transition-all duration-300 hover:shadow-lg flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed text-sm sm:text-base"
                >
                  {step === questions.length - 2 ? 'Get Results' : 'Next'}
                  <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
                </button>
              </div>
            )}
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  } catch (error) {
    return (
      <section className="pt-28 sm:pt-36 pb-12 sm:pb-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-rauha-text">Unable to load quiz. Please refresh the page.</p>
        </div>
      </section>
    );
  }
}
