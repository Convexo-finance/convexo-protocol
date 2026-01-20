'use client';

import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext';

export default function ELoansPage() {
  const { t } = useLanguage();

  const services = [
    {
      titleKey: 'eloans.credits.title',
      descriptionKey: 'eloans.credits.description',
      icon: '💰',
      features: [
        'eloans.credits.feature1',
        'eloans.credits.feature2',
        'eloans.credits.feature3',
        'eloans.credits.feature4',
      ],
      framework: 'eloans.credits.framework',
      frameworkLink: 'https://eips.ethereum.org/EIPS/eip-4626',
      gradient: 'from-convexo-purple to-convexo-blue',
    },
    {
      titleKey: 'eloans.contracts.title',
      descriptionKey: 'eloans.contracts.description',
      icon: '📝',
      features: [
        'eloans.contracts.feature1',
        'eloans.contracts.feature2',
        'eloans.contracts.feature3',
        'eloans.contracts.feature4',
      ],
      apy: 'eloans.contracts.apy',
      gradient: 'from-convexo-blue to-convexo-lightblue',
    },
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-convexo-purple via-convexo-navy to-convexo-blue py-24">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
            backgroundSize: '40px 40px'
          }}></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="text-6xl mb-6">💳</div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              E-LOANS
            </h1>
            <p className="text-xl md:text-2xl text-convexo-lightblue mb-8 max-w-3xl mx-auto">
              Electronic Credit and Contract services for verified Tier 3 users
            </p>
            <div className="inline-block bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700 p-4 rounded mb-8">
              <p className="font-semibold">{t('eloans.requirement')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* E-LOANS Services */}
      <section className="py-20 bg-convexo-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-convexo-navy mb-4">Our E-LOANS Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Create loans, attach legal contracts, and manage your electronic credit portfolio
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className={`h-2 bg-gradient-to-r ${service.gradient}`}></div>
                <div className="p-8">
                  <div className="text-5xl mb-4">{service.icon}</div>
                  <h3 className="text-3xl font-bold text-convexo-navy mb-4">
                    {t(service.titleKey)}
                  </h3>
                  <p className="text-convexo-blue mb-6 text-lg">
                    {t(service.descriptionKey)}
                  </p>

                  {service.framework && (
                    <div className="mb-6 p-4 bg-convexo-cream rounded-lg">
                      <p className="text-sm text-gray-600 mb-2">
                        <span className="font-semibold">{t('eloans.framework')}:</span>
                      </p>
                      <Link
                        href={service.frameworkLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-convexo-purple hover:text-convexo-blue font-semibold inline-flex items-center"
                      >
                        {t(service.framework)}
                        <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </Link>
                    </div>
                  )}

                  {service.apy && (
                    <div className="mb-6 p-4 bg-convexo-cream rounded-lg">
                      <p className="text-2xl font-bold text-convexo-purple">
                        {t(service.apy)}
                      </p>
                    </div>
                  )}

                  <ul className="space-y-3 mb-6">
                    {service.features.map((featureKey, idx) => (
                      <li key={idx} className="flex items-start">
                        <svg
                          className="w-6 h-6 text-convexo-purple mr-3 flex-shrink-0 mt-0.5"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <span className="text-gray-700">{t(featureKey)}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-convexo-navy mb-4">How E-LOANS Work</h2>
            <p className="text-xl text-gray-600">Simple process for electronic credit creation</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-gradient-to-br from-convexo-purple to-convexo-blue rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl text-white font-bold">1</span>
              </div>
              <h3 className="text-xl font-bold text-convexo-navy mb-3">Reach Tier 3</h3>
              <p className="text-gray-600">
                Complete Private ID, KYC/KYB, and get your credit score
              </p>
            </div>

            <div className="text-center">
              <div className="bg-gradient-to-br from-convexo-blue to-convexo-lightblue rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl text-white font-bold">2</span>
              </div>
              <h3 className="text-xl font-bold text-convexo-navy mb-3">Create E-Credit</h3>
              <p className="text-gray-600">
                Create a loan using the EIP-4626 standard vault framework
              </p>
            </div>

            <div className="text-center">
              <div className="bg-gradient-to-br from-convexo-lightblue to-convexo-purple rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl text-white font-bold">3</span>
              </div>
              <h3 className="text-xl font-bold text-convexo-navy mb-3">Attach Contract</h3>
              <p className="text-gray-600">
                Fill out legal contract details as the borrower
              </p>
            </div>

            <div className="text-center">
              <div className="bg-gradient-to-br from-convexo-purple to-convexo-navy rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl text-white font-bold">4</span>
              </div>
              <h3 className="text-xl font-bold text-convexo-navy mb-3">Lender Approval</h3>
              <p className="text-gray-600">
                Lender signs contract to activate and release funds
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Requirements */}
      <section className="py-20 bg-convexo-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h2 className="text-3xl font-bold text-convexo-navy mb-6 text-center">Tier 3 Requirements</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center p-6 bg-convexo-cream rounded-xl">
                <div className="text-4xl mb-4">🔐</div>
                <h3 className="text-xl font-bold text-convexo-navy mb-2">Private ID</h3>
                <p className="text-gray-600">zkPassport verification for Personhood and age +18</p>
              </div>
              <div className="text-center p-6 bg-convexo-cream rounded-xl">
                <div className="text-4xl mb-4">✅</div>
                <h3 className="text-xl font-bold text-convexo-navy mb-2">KYC/KYB</h3>
                <p className="text-gray-600">Veriff for individuals or Sumsub for enterprises</p>
              </div>
              <div className="text-center p-6 bg-convexo-cream rounded-xl">
                <div className="text-4xl mb-4">📊</div>
                <h3 className="text-xl font-bold text-convexo-navy mb-2">Credit Score</h3>
                <p className="text-gray-600">AI-powered credit profile analysis</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-convexo-purple via-convexo-navy to-convexo-blue">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Create E-LOANS?
          </h2>
          <p className="text-xl text-convexo-lightblue mb-8">
            Reach Tier 3 verification and start creating electronic credits and contracts
          </p>
          <Link
            href="https://protocol.convexo.xyz"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-white text-convexo-navy px-8 py-4 rounded-lg font-bold text-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
          >
            Get Started
          </Link>
        </div>
      </section>
    </div>
  );
}
