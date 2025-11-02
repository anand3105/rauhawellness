import Image from 'next/image';
import Link from 'next/link';
import { Mail, ArrowRight, Users, Heart, Lightbulb, TrendingUp } from 'lucide-react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Careers - Join Our Team | Rauha Wellness',
  description: 'Join the Rauha Wellness team and help us create science-backed skincare that transforms lives. Explore career opportunities and be part of our research-driven journey.',
  keywords: ['careers', 'jobs', 'rauha wellness careers', 'skincare jobs', 'research careers', 'wellness careers'],
  alternates: {
    canonical: 'https://rauhawellness.com/careers',
  },
};

const jobOpenings = [
  {
    title: 'Senior Skincare Formulation Scientist',
    department: 'Research & Development',
    location: 'India',
    type: 'Full-time',
    description: 'Lead our research initiatives in developing breakthrough skincare formulations backed by scientific evidence.',
    requirements: [
      'PhD or Master\'s in Chemistry, Biochemistry, or related field',
      '5+ years in skincare formulation',
      'Deep understanding of botanical ingredients',
      'Published research in dermatology or cosmetic science'
    ]
  },
  {
    title: 'Digital Marketing Specialist',
    department: 'Marketing',
    location: 'India / Remote',
    type: 'Full-time',
    description: 'Drive our digital presence and help communicate the science behind our products to our community.',
    requirements: [
      '3+ years in digital marketing',
      'Experience with skincare or wellness brands',
      'Strong content creation skills',
      'Data-driven approach to marketing'
    ]
  },
  {
    title: 'Customer Experience Specialist',
    department: 'Customer Success',
    location: 'India / Remote',
    type: 'Full-time',
    description: 'Be the voice of Rauha, helping customers discover the perfect skincare solutions for their needs.',
    requirements: [
      '2+ years in customer service',
      'Passion for skincare and wellness',
      'Excellent communication skills',
      'Problem-solving mindset'
    ]
  },
  {
    title: 'Supply Chain & Operations Manager',
    department: 'Operations',
    location: 'India',
    type: 'Full-time',
    description: 'Ensure our high-quality products reach customers efficiently while maintaining our commitment to excellence.',
    requirements: [
      '4+ years in supply chain management',
      'Experience with beauty or wellness products',
      'Strong analytical and organizational skills',
      'Knowledge of quality control processes'
    ]
  }
];

const values = [
  {
    icon: Lightbulb,
    title: 'Research-Driven',
    description: 'We base every decision on scientific evidence, not trends. Our 10-year research foundation guides everything we do.'
  },
  {
    icon: Heart,
    title: 'Customer-Obsessed',
    description: 'Your skin is our only focus. We are committed to creating products that truly transform lives.'
  },
  {
    icon: Users,
    title: 'Collaborative Spirit',
    description: 'We believe the best innovations come from diverse minds working together toward a common goal.'
  },
  {
    icon: TrendingUp,
    title: 'Continuous Growth',
    description: 'We invest in our team development, encouraging learning and professional advancement at every step.'
  }
];

export default function CareersPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="pt-32 sm:pt-40 pb-16 sm:pb-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-rauha-taupe/20 to-white">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-rauha-dark mb-6 leading-tight">
            Join the <span className="text-rauha-accent">Rauha</span> Family
          </h1>
          <p className="text-xl sm:text-2xl text-rauha-text leading-relaxed mb-8">
            Help us revolutionize skincare through science, research, and genuine care for people's wellbeing.
          </p>
          <div className="inline-flex items-center gap-2 bg-rauha-accent/10 px-6 py-3 rounded-full">
            <span className="text-rauha-dark font-semibold">10 years of research.</span>
            <span className="text-rauha-text">Endless possibilities ahead.</span>
          </div>
        </div>
      </section>

      {/* Why Join Us */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 relative">
        <div className="absolute inset-0 z-0">
          <Image
            src="/skinoil1.jpg"
            alt="Background"
            fill
            className="object-cover opacity-[0.08]"
          />
        </div>
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-rauha-dark mb-6">
              Why Work at <span className="text-rauha-accent">Rauha Wellness</span>?
            </h2>
            <p className="text-xl text-rauha-text max-w-3xl mx-auto">
              We're not just building a skincare company. We're creating a movement toward science-based beauty that truly delivers results.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-rauha-taupe/10 p-8 rounded-2xl hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-rauha-accent rounded-xl flex items-center justify-center mb-4">
                  <value.icon className="w-6 h-6 text-rauha-dark" />
                </div>
                <h3 className="text-xl font-bold text-rauha-dark mb-3">{value.title}</h3>
                <p className="text-rauha-text leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Culture */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-rauha-dark text-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold mb-6">
                Our <span className="text-rauha-accent">Culture</span>
              </h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-2">Work That Matters</h3>
                  <p className="text-white/80">
                    Every product we create has the potential to improve someone's confidence and quality of life. Your work here makes a real difference.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Flexibility & Balance</h3>
                  <p className="text-white/80">
                    We understand that great work comes from balanced lives. Enjoy flexible hours and remote work options where applicable.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Learning & Development</h3>
                  <p className="text-white/80">
                    Access to industry conferences, research publications, and continuous training to keep you at the forefront of skincare science.
                  </p>
                </div>
              </div>
            </div>
            <div className="relative h-80 md:h-96 rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/d5bb04ee-c10b-4d57-bd92-52976284f3ac.jpg"
                alt="Rauha Wellness team culture"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 relative bg-white">
        <div className="absolute inset-0 z-0">
          <Image
            src="/kumkumadi.jpg"
            alt="Background"
            fill
            className="object-cover opacity-[0.08]"
          />
        </div>
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-rauha-dark mb-6">
              Open <span className="text-rauha-accent">Positions</span>
            </h2>
            <p className="text-xl text-rauha-text max-w-3xl mx-auto">
              Explore opportunities to join our team and help shape the future of science-based skincare.
            </p>
          </div>

          <div className="space-y-6">
            {jobOpenings.map((job, index) => (
              <div key={index} className="bg-white border border-rauha-subtle/30 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 hover:border-rauha-accent/50">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-rauha-dark mb-2">{job.title}</h3>
                    <div className="flex flex-wrap gap-3">
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-rauha-accent/10 text-rauha-dark">
                        {job.department}
                      </span>
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-rauha-taupe/20 text-rauha-text">
                        {job.location}
                      </span>
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-rauha-dark/10 text-rauha-dark">
                        {job.type}
                      </span>
                    </div>
                  </div>
                </div>

                <p className="text-rauha-text mb-6 leading-relaxed">{job.description}</p>

                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-rauha-dark mb-3">Key Requirements:</h4>
                  <ul className="space-y-2">
                    {job.requirements.map((req, reqIndex) => (
                      <li key={reqIndex} className="flex items-start gap-2 text-sm text-rauha-text">
                        <ArrowRight className="w-4 h-4 text-rauha-accent mt-0.5 flex-shrink-0" />
                        <span>{req}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <a
                  href="#apply"
                  className="inline-flex items-center gap-2 bg-rauha-accent hover:bg-rauha-accent/90 text-rauha-dark font-semibold px-6 py-3 rounded-full transition-all duration-300 hover:shadow-lg"
                >
                  Apply Now
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-rauha-taupe/10 relative">
        <div className="absolute inset-0 z-0">
          <Image
            src="/oil dropper.jpg"
            alt="Background"
            fill
            className="object-cover opacity-[0.08]"
          />
        </div>
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-rauha-dark mb-6">
              Perks & <span className="text-rauha-accent">Benefits</span>
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: 'Competitive Salary',
                description: 'Industry-leading compensation packages'
              },
              {
                title: 'Health & Wellness',
                description: 'Comprehensive health insurance for you and your family'
              },
              {
                title: 'Product Discounts',
                description: 'Exclusive access to all Rauha products'
              },
              {
                title: 'Flexible Work',
                description: 'Remote work options and flexible schedules'
              },
              {
                title: 'Learning Budget',
                description: 'Annual allowance for courses and conferences'
              },
              {
                title: 'Team Events',
                description: 'Regular team building and wellness activities'
              }
            ].map((benefit, index) => (
              <div key={index} className="bg-white p-6 rounded-xl">
                <h3 className="text-lg font-bold text-rauha-dark mb-2">{benefit.title}</h3>
                <p className="text-sm text-rauha-text">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Section */}
      <section id="apply" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-rauha-taupe/20 relative">
        <div className="absolute inset-0 z-0">
          <Image
            src="/b632bc7b-2ea6-4866-9fb3-f2c19c51b822.jpg"
            alt="Background"
            fill
            className="object-cover opacity-5"
          />
        </div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-3xl sm:text-4xl font-bold text-rauha-dark mb-6">
            Ready to Join <span className="text-rauha-accent">Rauha</span>?
          </h2>
          <p className="text-xl text-rauha-text mb-8 leading-relaxed">
            We're always looking for talented individuals who share our passion for science-based skincare and making a real difference in people's lives.
          </p>

          <div className="bg-white rounded-2xl shadow-xl p-8 sm:p-12 mb-8">
            <div className="flex items-center justify-center gap-3 mb-6">
              <Mail className="w-8 h-8 text-rauha-accent" />
              <h3 className="text-2xl font-bold text-rauha-dark">Submit Your Application</h3>
            </div>

            <p className="text-rauha-text mb-8 leading-relaxed">
              Send your resume/CV along with a cover letter explaining why you'd be a great fit for Rauha Wellness.
            </p>

            <div className="bg-rauha-taupe/10 border-2 border-rauha-accent/30 rounded-xl p-6 mb-8">
              <p className="text-lg font-semibold text-rauha-dark mb-2">Email your application to:</p>
              <a
                href="mailto:hr@rauhawellness.com"
                className="text-2xl font-bold text-rauha-accent hover:text-rauha-accent/80 transition-colors inline-flex items-center gap-2"
              >
                hr@rauhawellness.com
                <ArrowRight className="w-6 h-6" />
              </a>
            </div>

            <div className="text-left space-y-4 text-sm text-rauha-text">
              <p className="font-semibold text-rauha-dark">What to include in your email:</p>
              <ul className="space-y-2 ml-4">
                <li className="flex items-start gap-2">
                  <ArrowRight className="w-4 h-4 text-rauha-accent mt-0.5 flex-shrink-0" />
                  <span>Subject line: Application for [Position Title]</span>
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRight className="w-4 h-4 text-rauha-accent mt-0.5 flex-shrink-0" />
                  <span>Your updated resume/CV (PDF format preferred)</span>
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRight className="w-4 h-4 text-rauha-accent mt-0.5 flex-shrink-0" />
                  <span>A brief cover letter explaining your interest and relevant experience</span>
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRight className="w-4 h-4 text-rauha-accent mt-0.5 flex-shrink-0" />
                  <span>Portfolio or work samples (if applicable)</span>
                </li>
              </ul>
            </div>
          </div>

          <p className="text-sm text-rauha-text/70 italic">
            We review all applications carefully and will reach out to candidates who best match our requirements. Thank you for your interest in Rauha Wellness!
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-rauha-dark text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Don't See Your Role?
          </h2>
          <p className="text-xl text-white/80 mb-10 leading-relaxed">
            We're always open to hearing from exceptional talent. Send us your resume and tell us how you'd like to contribute to Rauha's mission.
          </p>
          <a
            href="mailto:hr@rauhawellness.com"
            className="inline-flex items-center gap-2 bg-rauha-accent hover:bg-rauha-accent/90 text-rauha-dark font-semibold px-10 py-4 rounded-full transition-all duration-300 hover:shadow-xl hover:scale-105 text-lg"
          >
            <Mail className="w-5 h-5" />
            Send Your Resume
          </a>
        </div>
      </section>
    </main>
  );
}
