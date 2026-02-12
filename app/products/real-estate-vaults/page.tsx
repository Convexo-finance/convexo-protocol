'use client';

import Link from 'next/link';
import Image from 'next/image';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useLanguage } from '@/contexts/LanguageContext';

export default function RealEstateVaultsPage() {
  const { t } = useLanguage();

  const propertyTypes = [
    {
      titleKey: 'realEstateVaults.properties.commercial.title',
      descriptionKey: 'realEstateVaults.properties.commercial.description',
      image: '/products/rwa/AIN2402_AO_TTA_YAV_AV_947_ZonasComunes_04.jpg',
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
      features: [
        'realEstateVaults.properties.mixedUse.feature1',
        'realEstateVaults.properties.mixedUse.feature2',
        'realEstateVaults.properties.mixedUse.feature3',
      ],
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
    <>
      <Navbar />
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="relative section-padding pt-32 border-b border-border">
          <div className="absolute inset-0 bg-gradient-to-b from-accent-purple/8 via-base to-layer/30" />
          
          <div className="relative z-10 section-container">
            <div className="max-w-2xl">
              <div className="heading-section mb-6">Real Estate Vaults</div>
              <h1 className="heading-xl text-primary-text mb-6">
                {t('realEstateVaults.hero.title')}
              </h1>
              <p className="text-base text-muted-light leading-relaxed mb-8">
                {t('realEstateVaults.hero.subtitle')}
              </p>

              {/* APY Stats */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="card p-4 text-center">
                  <div className="text-2xl font-medium text-primary-text mb-1">18%</div>
                  <div className="text-xs text-muted uppercase tracking-[0.1em]">Annual APY</div>
                </div>
                <div className="card p-4 text-center">
                  <div className="text-2xl font-medium text-primary-text mb-1">70%</div>
                  <div className="text-xs text-muted uppercase tracking-[0.1em]">5-Year Return</div>
                </div>
              </div>

              <div className="inline-block bg-authority-blue/10 border-l-2 border-authority-blue px-4 py-3 rounded">
                <p className="text-sm font-medium text-primary-text">{t('realEstateVaults.requirement.tier2')}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Property Types Grid */}
        <section className="section-padding border-b border-border">
          <div className="section-container">
            <div className="max-w-3xl mx-auto mb-12 text-center">
              <div className="heading-section mb-4">Property Types</div>
              <h2 className="heading-lg text-primary-text mb-4">
                {t('realEstateVaults.properties.title')}
              </h2>
              <p className="body-text">
                {t('realEstateVaults.properties.subtitle')}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {propertyTypes.map((property, index) => (
                <div key={index} className="card overflow-hidden group">
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={property.image}
                      alt={t(property.titleKey)}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-base/80 to-transparent"></div>
                    <div className="absolute bottom-4 left-4">
                      <div className="text-sm font-medium text-primary-text bg-authority-blue/10 backdrop-blur-sm px-3 py-1 rounded">
                        {t(property.titleKey)}
                      </div>
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-base font-medium text-primary-text mb-3">
                      {t(property.titleKey)}
                    </h3>
                    <p className="text-sm text-muted-light mb-4">
                      {t(property.descriptionKey)}
                    </p>
                    
                    <ul className="space-y-2">
                      {property.features.map((featureKey, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <svg
                            className="w-4 h-4 text-authority-blue mt-0.5 flex-shrink-0"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                              clipRule="evenodd"
                            />
                          </svg>
                          <span className="text-xs text-muted-light">{t(featureKey)}</span>
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
        <section className="section-padding border-b border-border">
          <div className="section-container">
            <div className="max-w-3xl mx-auto mb-12 text-center">
              <div className="heading-section mb-4">Process</div>
              <h2 className="heading-lg text-primary-text mb-4">
                {t('realEstateVaults.process.title')}
              </h2>
              <p className="body-text">
                {t('realEstateVaults.process.subtitle')}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
              {[1, 2, 3, 4].map((step) => (
                <div key={step} className="card p-6 text-center">
                  <div className="w-12 h-12 rounded bg-authority-blue/10 flex items-center justify-center mx-auto mb-4">
                    <span className="text-lg font-medium text-authority-blue">{step}</span>
                  </div>
                  <h3 className="text-base font-medium text-primary-text mb-2">
                    {t(`realEstateVaults.process.step${step}.title`)}
                  </h3>
                  <p className="text-sm text-muted-light">
                    {t(`realEstateVaults.process.step${step}.description`)}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="section-padding border-b border-border">
          <div className="section-container">
            <div className="max-w-3xl mx-auto mb-12 text-center">
              <div className="heading-section mb-4">Benefits</div>
              <h2 className="heading-lg text-primary-text mb-4">
                {t('realEstateVaults.benefits.title')}
              </h2>
              <p className="body-text">
                {t('realEstateVaults.benefits.subtitle')}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
              {benefits.map((benefit, index) => (
                <div key={index} className="card p-6 text-center">
                  <h3 className="text-base font-medium text-primary-text mb-3">
                    {t(benefit.titleKey)}
                  </h3>
                  <p className="text-sm text-muted-light">
                    {t(benefit.descriptionKey)}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Technology Stack */}
        <section className="section-padding border-b border-border">
          <div className="section-container">
            <div className="max-w-3xl mx-auto mb-12 text-center">
              <div className="heading-section mb-4">Technology</div>
              <h2 className="heading-lg text-primary-text mb-4">
                {t('realEstateVaults.technology.title')}
              </h2>
              <p className="body-text">
                {t('realEstateVaults.technology.subtitle')}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <div className="card p-6 text-center">
                <div className="w-12 h-12 rounded bg-authority-blue/10 flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-authority-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 9h16M4 15h16M10 3L8 21M16 3l-2 18" />
                  </svg>
                </div>
                <h3 className="text-base font-medium text-primary-text mb-3">
                  {t('realEstateVaults.technology.blockchain.title')}
                </h3>
                <p className="text-sm text-muted-light">
                  {t('realEstateVaults.technology.blockchain.description')}
                </p>
              </div>

              <div className="card p-6 text-center">
                <div className="w-12 h-12 rounded bg-authority-blue/10 flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-authority-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <h3 className="text-base font-medium text-primary-text mb-3">
                  {t('realEstateVaults.technology.erc4626.title')}
                </h3>
                <p className="text-sm text-muted-light">
                  {t('realEstateVaults.technology.erc4626.description')}
                </p>
              </div>

              <div className="card p-6 text-center">
                <div className="w-12 h-12 rounded bg-authority-blue/10 flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-authority-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-base font-medium text-primary-text mb-3">
                  {t('realEstateVaults.technology.oracles.title')}
                </h3>
                <p className="text-sm text-muted-light">
                  {t('realEstateVaults.technology.oracles.description')}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section-padding">
          <div className="section-container">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="heading-lg text-primary-text mb-4">
                {t('realEstateVaults.cta.title')}
              </h2>
              <p className="body-text mb-8">
                {t('realEstateVaults.cta.description')}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="https://protocol.convexo.xyz"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary inline-flex items-center justify-center"
                >
                  {t('realEstateVaults.cta.getStarted')}
                  <svg className="w-3.5 h-3.5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
                <Link
                  href="/products/digital-ids"
                  className="btn-secondary inline-flex items-center justify-center"
                >
                  {t('realEstateVaults.cta.learnVerification')}
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
