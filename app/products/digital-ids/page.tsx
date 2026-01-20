'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useLanguage } from '@/contexts/LanguageContext';

export default function DigitalIDsPage() {
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
      icon: '🔐',
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
      icon: '👥',
    },
    {
      tier: 3,
      titleKey: 'digitalIds.tier3.title',
      descriptionKey: 'digitalIds.tier3.description',
      providers: [],
      requirements: ['digitalIds.tier3.req1', 'digitalIds.tier3.req2'],
      gradient: 'from-convexo-lightblue to-convexo-purple',
      icon: '💳',
    },
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-convexo-navy via-convexo-purple to-convexo-blue py-24">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
            backgroundSize: '40px 40px'
          }}></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="text-6xl mb-6">🆔</div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Digital Identity Tiers
            </h1>
            <p className="text-xl md:text-2xl text-convexo-lightblue mb-8 max-w-3xl mx-auto">
              Progressive verification system with 4 tiers of identity verification and compliance
            </p>
          </div>
        </div>
      </section>

      {/* Tier System Overview */}
      <section className="py-20 bg-convexo-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-convexo-navy mb-4">Our Tier System</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Start with Private ID and progress through verification levels to unlock more features and services
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
                  <div className="flex items-start mb-6">
                    <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${tierData.gradient} text-white rounded-full font-bold text-2xl mr-6`}>
                      {tierData.tier}
                    </div>
                    <div className="flex-1">
                      <div className="text-4xl mb-3">{tierData.icon}</div>
                      <h3 className="text-3xl font-bold text-convexo-navy mb-3">
                        {t(tierData.titleKey)}
                      </h3>
                      <p className="text-lg text-gray-700">
                        {t(tierData.descriptionKey)}
                      </p>
                    </div>
                  </div>

                  {tierData.providers && tierData.providers.length > 0 && (
                    <div className="mb-6">
                      <h4 className="text-xl font-semibold text-convexo-navy mb-4">Powered By</h4>
                      <div className="flex flex-wrap gap-6">
                        {tierData.providers.map((provider, idx) => (
                          <Link
                            key={idx}
                            href={provider.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center space-x-3 hover:opacity-80 transition-opacity bg-convexo-cream rounded-lg p-4"
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
                    </div>
                  )}

                  {tierData.subTiers && (
                    <div className="mb-6">
                      <h4 className="text-xl font-semibold text-convexo-navy mb-4">Verification Options</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {tierData.subTiers.map((subTier, idx) => (
                          <div key={idx} className="bg-convexo-cream rounded-xl p-6">
                            <h5 className="text-xl font-bold text-convexo-navy mb-3">
                              {t(subTier.name)}
                            </h5>
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
                    </div>
                  )}

                  {tierData.requirements && (
                    <div className="bg-convexo-cream rounded-xl p-6">
                      <h4 className="text-xl font-semibold text-convexo-navy mb-4">Requirements</h4>
                      <ul className="space-y-3">
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
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tier Progression */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-convexo-navy mb-4">Progression Path</h2>
            <p className="text-xl text-gray-600">Build your verified identity step by step</p>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-center space-y-8 md:space-y-0 md:space-x-8">
            {tiers.map((tier, index) => (
              <div key={tier.tier} className="flex flex-col items-center">
                <div className={`w-20 h-20 rounded-full bg-gradient-to-r ${tier.gradient} flex items-center justify-center text-white font-bold text-2xl mb-4`}>
                  {tier.tier}
                </div>
                <h3 className="text-lg font-bold text-convexo-navy mb-2 text-center">
                  {t(tier.titleKey)}
                </h3>
                {index < tiers.length - 1 && (
                  <div className="hidden md:block absolute top-10 left-full w-16 h-0.5 bg-gradient-to-r from-convexo-purple to-convexo-blue transform translate-x-4">
                    <svg className="w-6 h-6 text-convexo-purple absolute right-0 top-1/2 transform -translate-y-1/2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-convexo-purple to-convexo-blue">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Start Your Verification Journey
          </h2>
          <p className="text-xl text-convexo-lightblue mb-8">
            Get your Private ID with zkPassport and unlock access to all Convexo Protocol services
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
