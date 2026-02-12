'use client';

import Link from 'next/link';
import Image from 'next/image';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
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
    },
    {
      tier: 3,
      titleKey: 'digitalIds.tier3.title',
      descriptionKey: 'digitalIds.tier3.description',
      providers: [],
      requirements: ['digitalIds.tier3.req1', 'digitalIds.tier3.req2'],
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
              <div className="heading-section mb-6">Identity Verification</div>
              <h1 className="heading-xl text-primary-text mb-6">
                Digital Identity Tiers
              </h1>
              <p className="text-base text-muted-light leading-relaxed mb-8">
                Progressive verification system with multiple tiers of identity verification and compliance,
                ensuring secure access to institutional DeFi services.
              </p>
            </div>
          </div>
        </section>

        {/* Tier System */}
        <section className="section-padding border-b border-border">
          <div className="section-container">
            <div className="max-w-3xl mx-auto mb-12 text-center">
              <div className="heading-section mb-4">Verification System</div>
              <h2 className="heading-lg text-primary-text mb-4">
                Progressive Access Levels
              </h2>
              <p className="body-text">
                Start with Private ID and progress through verification levels to unlock more features and services
              </p>
            </div>

            <div className="space-y-8 max-w-4xl mx-auto">
              {tiers.map((tierData) => (
                <div key={tierData.tier} className="card p-8">
                  <div className="flex items-start gap-6 mb-6">
                    <div className="w-12 h-12 rounded bg-authority-blue/10 flex items-center justify-center flex-shrink-0">
                      <span className="text-xl font-medium text-authority-blue">{tierData.tier}</span>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-medium text-primary-text mb-2">
                        {t(tierData.titleKey)}
                      </h3>
                      <p className="text-sm text-muted-light">
                        {t(tierData.descriptionKey)}
                      </p>
                    </div>
                  </div>

                  {tierData.providers && tierData.providers.length > 0 && (
                    <div className="mb-6 pb-6 border-b border-border">
                      <h4 className="text-sm font-medium text-primary-text mb-4 uppercase tracking-[0.1em]">Powered By</h4>
                      <div className="flex flex-wrap gap-4">
                        {tierData.providers.map((provider, idx) => (
                          <Link
                            key={idx}
                            href={provider.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-primary-text rounded-lg p-4 hover:opacity-90 transition-opacity"
                          >
                            <div className="relative w-20 h-10">
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
                    <div className="mb-6 pb-6 border-b border-border">
                      <h4 className="text-sm font-medium text-primary-text mb-4 uppercase tracking-[0.1em]">Verification Options</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {tierData.subTiers.map((subTier, idx) => (
                          <div key={idx} className="bg-layer rounded-lg p-5">
                            <h5 className="text-base font-medium text-primary-text mb-2">
                              {t(subTier.name)}
                            </h5>
                            <p className="text-sm text-muted-light mb-4">
                              {t(subTier.description)}
                            </p>
                            <Link
                              href={subTier.provider.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-block"
                            >
                              <div className="bg-primary-text rounded-lg p-3 hover:opacity-90 transition-opacity">
                                <div className="relative w-16 h-8">
                                  <Image
                                    src={subTier.provider.logo}
                                    alt={subTier.provider.alt}
                                    fill
                                    className="object-contain"
                                  />
                                </div>
                              </div>
                            </Link>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {tierData.requirements && (
                    <div>
                      <h4 className="text-sm font-medium text-primary-text mb-3 uppercase tracking-[0.1em]">Requirements</h4>
                      <ul className="space-y-2">
                        {tierData.requirements.map((reqKey, idx) => (
                          <li key={idx} className="flex items-start gap-3">
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
                            <span className="text-sm text-muted-light">{t(reqKey)}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section-padding">
          <div className="section-container">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="heading-lg text-primary-text mb-4">
                Start Your Verification Journey
              </h2>
              <p className="body-text mb-8">
                Get your Private ID with zkPassport and unlock access to all Convexo Protocol services
              </p>
              <Link
                href="https://protocol.convexo.xyz"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary inline-flex items-center"
              >
                Get Started
                <svg className="w-3.5 h-3.5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
