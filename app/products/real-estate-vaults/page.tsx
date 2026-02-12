'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useLanguage } from '@/contexts/LanguageContext';

export default function RealEstateVaultsPage() {
  const { t } = useLanguage();

  const propertyTypes = [
    {
      titleKey: 'realEstateVaults.properties.commercial.title',
      descriptionKey: 'realEstateVaults.properties.commercial.description',
      image: '/products/rwa/AIN2402_AO_TTA_YAV_AV_947_ZonasComunes_04.jpg',
      gradient: 'from-convexo-navy to-convexo-blue',
      features: [
        'realEstateVaults.properties.commercial.feature1',
        'realEstateVaults.properties.commercial.feature2',
        'realEstateVaults.properties.commercial.feature3',
      ],
    },
    {
      titleKey: 'realEstateVaults.properties.residential.title',
      descriptionKey: 'realEstateVaults.properties.residential.description',
      image: '/products/rwa/ALH_Taller_Edificio_E_Cam_01_2025_06_07.jpg',
      gradient: 'from-convexo-blue to-convexo-purple',
      features: [
        'realEstateVaults.properties.residential.feature1',
        'realEstateVaults.properties.residential.feature2',
        'realEstateVaults.properties.residential.feature3',
      ],
    },
    {
      titleKey: 'realEstateVaults.properties.mixedUse.title',
      descriptionKey: 'realEstateVaults.properties.mixedUse.description',
      image: '/products/rwa/auctions/ALH_Taller_Edificio_E_Cam_05_2025_06_07.jpg',
      gradient: 'from-convexo-purple to-convexo-lightblue',
      features: [
        'realEstateVaults.properties.mixedUse.feature1',
        'realEstateVaults.properties.mixedUse.feature2',
        'realEstateVaults.properties.mixedUse.feature3',
      ],
    },
  ];

  const tokenizationSteps = [
    {
      step: 1,
      titleKey: 'realEstateVaults.process.step1.title',
      descriptionKey: 'realEstateVaults.process.step1.description',
    },
    {
      step: 2,
      titleKey: 'realEstateVaults.process.step2.title',
      descriptionKey: 'realEstateVaults.process.step2.description',
    },
    {
      step: 3,
      titleKey: 'realEstateVaults.process.step3.title',
      descriptionKey: 'realEstateVaults.process.step3.description',
    },
    {
      step: 4,
      titleKey: 'realEstateVaults.process.step4.title',
      descriptionKey: 'realEstateVaults.process.step4.description',
    },
  ];

  const benefits = [
    {
      titleKey: 'realEstateVaults.benefits.fractional.title',
      descriptionKey: 'realEstateVaults.benefits.fractional.description',
    },
    {
      titleKey: 'realEstateVaults.benefits.liquidity.title',
      descriptionKey: 'realEstateVaults.benefits.liquidity.description',
    },
    {
      titleKey: 'realEstateVaults.benefits.transparent.title',
      descriptionKey: 'realEstateVaults.benefits.transparent.description',
    },
    {
      titleKey: 'realEstateVaults.benefits.institutional.title',
      descriptionKey: 'realEstateVaults.benefits.institutional.description',
    },
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-convexo-navy via-convexo-purple to-convexo-blue py-24 overflow-hidden">
        {/* Cyber Grid Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
            backgroundSize: '40px 40px'
          }}></div>
        </div>
        
        {/* Matrix Lines */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: 'linear-gradient(0deg, transparent 24%, rgba(255, 255, 255, .5) 25%, rgba(255, 255, 255, .5) 26%, transparent 27%, transparent 74%, rgba(255, 255, 255, .5) 75%, rgba(255, 255, 255, .5) 76%, transparent 77%, transparent), linear-gradient(90deg, transparent 24%, rgba(255, 255, 255, .5) 25%, rgba(255, 255, 255, .5) 26%, transparent 27%, transparent 74%, rgba(255, 255, 255, .5) 75%, rgba(255, 255, 255, .5) 76%, transparent 77%, transparent)',
            backgroundSize: '80px 80px'
          }}></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="mb-6 inline-block">
              <svg className="w-20 h-20 mx-auto" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <linearGradient id="building-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#BAD6EB" />
                    <stop offset="100%" stopColor="#FFF9EF" />
                  </linearGradient>
                </defs>
                <path d="M3 21h18v-2H3v2zM3 8v11h5V8H3zm3 9H5v-2h1v2zm0-3H5v-2h1v2zm0-3H5V9h1v2zM10 3v18h5V3h-5zm3 16h-1v-2h1v2zm0-3h-1v-2h1v2zm0-3h-1v-2h1v2zm0-3h-1V8h1v2zm0-3h-1V5h1v2zM16 8v13h5V8h-5zm3 11h-1v-2h1v2zm0-3h-1v-2h1v2zm0-3h-1v-2h1v2z" fill="url(#building-gradient)" />
              </svg>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              {t('realEstateVaults.hero.title')}
            </h1>
            <p className="text-xl md:text-2xl text-convexo-lightblue mb-8 max-w-3xl mx-auto">
              {t('realEstateVaults.hero.subtitle')}
            </p>

            {/* APY Stats */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-8">
              <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl px-8 py-4">
                <div className="text-4xl font-bold text-white mb-1">18%</div>
                <div className="text-convexo-lightblue text-sm font-semibold">Annual APY</div>
              </div>
              <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl px-8 py-4">
                <div className="text-4xl font-bold text-white mb-1">70%</div>
                <div className="text-convexo-lightblue text-sm font-semibold">5-Year Compounded Return</div>
              </div>
            </div>
            
            {/* Verification Requirement Badge */}
            <div className="inline-flex items-center bg-yellow-100 border-l-4 border-yellow-500 px-6 py-3 rounded-lg">
              <svg className="w-6 h-6 text-yellow-600 mr-3" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
              </svg>
              <span className="text-yellow-800 font-semibold">
                {t('realEstateVaults.requirement.tier2')}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Property Types Grid */}
      <section className="py-20 bg-gradient-to-b from-convexo-cream to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-convexo-navy mb-4">
              {t('realEstateVaults.properties.title')}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t('realEstateVaults.properties.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {propertyTypes.map((property, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className={`h-2 bg-gradient-to-r ${property.gradient}`}></div>
                
                {/* Property Image */}
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={property.image}
                    alt={t(property.titleKey)}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-4 left-4">
                    <div className={`inline-block px-4 py-2 bg-gradient-to-r ${property.gradient} text-white font-bold text-sm rounded-lg`}>
                      {t(property.titleKey)}
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-2xl font-bold text-convexo-navy mb-3">
                    {t(property.titleKey)}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {t(property.descriptionKey)}
                  </p>
                  
                  <ul className="space-y-2">
                    {property.features.map((featureKey, idx) => (
                      <li key={idx} className="flex items-start">
                        <svg
                          className="w-5 h-5 text-convexo-purple mr-2 flex-shrink-0 mt-0.5"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <span className="text-sm text-gray-700">{t(featureKey)}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tokenization Process */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-convexo-navy mb-4">
              {t('realEstateVaults.process.title')}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t('realEstateVaults.process.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {tokenizationSteps.map((step, index) => (
              <div key={index} className="relative">
                <div className="bg-gradient-to-br from-convexo-cream to-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-convexo-lightblue">
                  <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-convexo-navy to-convexo-purple text-white rounded-full font-bold text-2xl mb-4 mx-auto shadow-lg">
                    {step.step}
                  </div>
                  <h3 className="text-xl font-bold text-convexo-navy mb-3 text-center">
                    {t(step.titleKey)}
                  </h3>
                  <p className="text-gray-600 text-center text-sm">
                    {t(step.descriptionKey)}
                  </p>
                </div>
                
                {/* Connection Arrow */}
                {index < tokenizationSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 transform -translate-y-1/2 z-10">
                    <svg className="w-6 h-6 text-convexo-blue" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gradient-to-br from-convexo-navy via-convexo-purple to-convexo-blue">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              {t('realEstateVaults.benefits.title')}
            </h2>
            <p className="text-xl text-convexo-lightblue max-w-3xl mx-auto">
              {t('realEstateVaults.benefits.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 hover:bg-white/20 transition-all duration-300 border border-white/20"
              >
                <h3 className="text-xl font-bold text-white mb-3 text-center">
                  {t(benefit.titleKey)}
                </h3>
                <p className="text-convexo-lightblue text-center text-sm">
                  {t(benefit.descriptionKey)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-20 bg-convexo-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-convexo-navy mb-4">
              {t('realEstateVaults.technology.title')}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t('realEstateVaults.technology.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300">
              <div className="w-20 h-20 bg-gradient-to-br from-convexo-blue to-convexo-purple rounded-xl flex items-center justify-center mb-4 mx-auto">
                <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4 9h16M4 15h16M10 3L8 21M16 3l-2 18" stroke="white" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-convexo-navy mb-3 text-center">
                {t('realEstateVaults.technology.blockchain.title')}
              </h3>
              <p className="text-gray-600 text-center">
                {t('realEstateVaults.technology.blockchain.description')}
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300">
              <div className="w-20 h-20 bg-gradient-to-br from-convexo-purple to-convexo-navy rounded-xl flex items-center justify-center mb-4 mx-auto">
                <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="5" y="11" width="14" height="10" rx="1" fill="none" stroke="white" strokeWidth="2" />
                  <path d="M12 11V7M12 7a3 3 0 100-6 3 3 0 000 6z" stroke="white" strokeWidth="2" strokeLinecap="round" />
                  <circle cx="12" cy="16" r="1.5" fill="white" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-convexo-navy mb-3 text-center">
                {t('realEstateVaults.technology.erc4626.title')}
              </h3>
              <p className="text-gray-600 text-center">
                {t('realEstateVaults.technology.erc4626.description')}
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300">
              <div className="w-20 h-20 bg-gradient-to-br from-convexo-navy to-convexo-blue rounded-xl flex items-center justify-center mb-4 mx-auto">
                <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="12" cy="12" r="3" fill="white" />
                  <path d="M12 1v6M12 17v6M23 12h-6M7 12H1" stroke="white" strokeWidth="2" strokeLinecap="round" />
                  <path d="M18.4 5.6l-4.2 4.2M9.8 14.2l-4.2 4.2M18.4 18.4l-4.2-4.2M9.8 9.8L5.6 5.6" stroke="white" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-convexo-navy mb-3 text-center">
                {t('realEstateVaults.technology.oracles.title')}
              </h3>
              <p className="text-gray-600 text-center">
                {t('realEstateVaults.technology.oracles.description')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-convexo-navy mb-6">
            {t('realEstateVaults.cta.title')}
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            {t('realEstateVaults.cta.description')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="https://protocol.convexo.xyz"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-gradient-to-r from-convexo-navy to-convexo-purple text-white px-8 py-4 rounded-lg font-bold text-lg hover:shadow-2xl hover:shadow-convexo-purple/30 transition-all duration-300 transform hover:scale-105"
            >
              {t('realEstateVaults.cta.getStarted')}
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <Link
              href="/products/digital-ids"
              className="inline-flex items-center justify-center border-2 border-convexo-navy text-convexo-navy px-8 py-4 rounded-lg font-bold text-lg hover:bg-convexo-navy hover:text-white transition-all duration-300"
            >
              {t('realEstateVaults.cta.learnVerification')}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
