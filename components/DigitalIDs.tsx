'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext';

export default function DigitalIDs() {
  const { t } = useLanguage();

  const tiers = [
    {
      tier: 1,
      titleKey: 'digitalIds.tier1.title',
      descriptionKey: 'digitalIds.tier1.description',
      providers: [
        { logo: '/providers/zkpassportid.png', alt: 'zkPassport', link: 'https://zkpassport.id/' },
        { logo: '/opensantionsfondoblanco.png', alt: 'OpenSanctions', link: 'https://www.opensanctions.org/' },
      ],
      requirements: ['digitalIds.tier1.req1', 'digitalIds.tier1.req2', 'digitalIds.tier1.req3'],
      gradient: 'from-convexo-purple to-convexo-blue',
    },
    {
      tier: 2,
      titleKey: 'digitalIds.tier2.title',
      descriptionKey: 'digitalIds.tier2.description',
      subTiers: [
        {
          name: 'digitalIds.tier2.individuals.title',
          description: 'digitalIds.tier2.individuals.description',
          provider: { logo: '/providers/verifffondoblanco.png', alt: 'Veriff', link: 'https://www.veriff.com/' },
        },
        {
          name: 'digitalIds.tier2.enterprises.title',
          description: 'digitalIds.tier2.enterprises.description',
          provider: { logo: '/providers/sumsub.jpg', alt: 'Sumsub', link: 'https://sumsub.com/' },
        },
      ],
      gradient: 'from-convexo-blue to-convexo-lightblue',
    },
    {
      tier: 3,
      titleKey: 'digitalIds.tier3.title',
      descriptionKey: 'digitalIds.tier3.description',
      providers: [],
      requirements: ['digitalIds.tier3.req1', 'digitalIds.tier3.req2'],
      gradient: 'from-convexo-lightblue to-convexo-purple',
    },
  ];

  return (
    <section id="digital-ids" className="py-24 bg-convexo-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-convexo-navy mb-4">
            {t('digitalIds.title')}
          </h2>
          <p className="text-xl text-convexo-blue max-w-3xl mx-auto">
            {t('digitalIds.subtitle')}
          </p>
        </div>

        <div className="space-y-12">
          {tiers.map((tierData) => (
            <div
              key={tierData.tier}
              className="bg-white rounded-2xl shadow-lg overflow-hidden"
            >
              <div className={`h-2 bg-gradient-to-r ${tierData.gradient}`}></div>
              <div className="p-8">
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${tierData.gradient} text-white rounded-full font-bold text-2xl mr-6`}>
                      {tierData.tier}
                    </div>
                    <h3 className="text-3xl font-bold text-convexo-navy mb-2">
                      {t(tierData.titleKey)}
                    </h3>
                    <p className="text-lg text-gray-700">
                      {t(tierData.descriptionKey)}
                    </p>
                  </div>
                </div>

                {tierData.providers && tierData.providers.length > 0 && (
                  <div className="flex flex-wrap gap-6 mb-6">
                    {tierData.providers.map((provider, idx) => (
                      <Link
                        key={idx}
                        href={provider.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-3 hover:opacity-80 transition-opacity"
                      >
                        <div className="relative w-24 h-12">
                          <Image
                            src={provider.logo}
                            alt={provider.alt}
                            fill
                            className="object-contain"
                          />
                        </div>
                      </Link>
                    ))}
                  </div>
                )}

                {tierData.subTiers && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                    {tierData.subTiers.map((subTier, idx) => (
                      <div key={idx} className="bg-convexo-cream rounded-xl p-6">
                        <h4 className="text-xl font-bold text-convexo-navy mb-3">
                          {t(subTier.name)}
                        </h4>
                        <p className="text-gray-700 mb-4">
                          {t(subTier.description)}
                        </p>
                        <Link
                          href={subTier.provider.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center space-x-2 hover:opacity-80 transition-opacity"
                        >
                          <div className="relative w-20 h-10">
                            <Image
                              src={subTier.provider.logo}
                              alt={subTier.provider.alt}
                              fill
                              className="object-contain"
                            />
                          </div>
                        </Link>
                      </div>
                    ))}
                  </div>
                )}

                {tierData.requirements && (
                  <ul className="space-y-3 mt-6">
                    {tierData.requirements.map((reqKey, idx) => (
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
                        <span className="text-gray-700">{t(reqKey)}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/products/digital-ids"
            className="inline-flex items-center text-convexo-purple hover:text-convexo-blue font-semibold text-lg transition-colors duration-200"
          >
            {t('digitalIds.learnMore')}
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
