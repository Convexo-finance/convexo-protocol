'use client';

import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext';

export default function ELoans() {
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
    <section id="eloans" className="py-24 bg-convexo-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-convexo-navy mb-4">
            {t('eloans.title')}
          </h2>
          <p className="text-xl text-convexo-blue max-w-3xl mx-auto mb-6">
            {t('eloans.subtitle')}
          </p>
          <div className="inline-block bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700 p-4 rounded">
            <p className="font-semibold">{t('eloans.requirement')}</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
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
                      className="text-convexo-purple hover:text-convexo-blue font-semibold"
                    >
                      {t(service.framework)}
                    </Link>
                  </div>
                )}

                {service.apy && (
                  <div className="mb-6 p-4 bg-convexo-cream rounded-lg">
                    <p className="text-lg font-bold text-convexo-purple">
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

                <div className="mt-6 pt-6 border-t border-gray-200">
                  <Link
                    href="/products/eloans"
                    className="inline-flex items-center text-convexo-purple hover:text-convexo-blue font-semibold transition-colors duration-200"
                  >
                    {t('eloans.learnMore')}
                    <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
