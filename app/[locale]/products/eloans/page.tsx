'use client';

import { Link } from '@/navigation';
import { useTranslations } from 'next-intl';

export default function ELoansPage() {
  const t = useTranslations();

  const services = [
    {
      titleKey: 'eloans.credits.title',
      descriptionKey: 'eloans.credits.description',
      features: [
        'eloans.credits.feature1',
        'eloans.credits.feature2',
        'eloans.credits.feature3',
        'eloans.credits.feature4',
      ],
      framework: 'eloans.credits.framework',
      frameworkLink: 'https://eips.ethereum.org/EIPS/eip-4626',
    },
    {
      titleKey: 'eloans.contracts.title',
      descriptionKey: 'eloans.contracts.description',
      features: [
        'eloans.contracts.feature1',
        'eloans.contracts.feature2',
        'eloans.contracts.feature3',
        'eloans.contracts.feature4',
      ],
      apy: 'eloans.contracts.apy',
    },
  ];

  return (
    <main className="min-h-screen">
        {/* Hero Section */}
        <section className="relative section-padding pt-32 border-b border-border">
          <div className="absolute inset-0 bg-gradient-to-b from-accent-purple/8 via-base to-layer/30" />
          
          <div className="relative z-10 section-container">
            <div className="max-w-2xl">
              <div className="heading-section mb-6">E-LOANS</div>
              <h1 className="heading-xl text-primary-text mb-6">
                Electronic Credit & Contract Services
              </h1>
              <p className="text-base text-muted-light leading-relaxed mb-6">
                Create electronic credit lines and attach legal contracts for verified Tier 3 users,
                powered by EIP-4626 vault standard.
              </p>
              <div className="inline-block bg-authority-blue/10 border-l-2 border-authority-blue px-4 py-3 rounded">
                <p className="text-sm font-medium text-primary-text">{t('eloans.requirement')}</p>
              </div>
            </div>
          </div>
        </section>

        {/* E-LOANS Services */}
        <section className="section-padding border-b border-border">
          <div className="section-container">
            <div className="max-w-3xl mx-auto mb-12 text-center">
              <div className="heading-section mb-4">Services</div>
              <h2 className="heading-lg text-primary-text mb-4">
                Electronic Credit Portfolio Management
              </h2>
              <p className="body-text">
                Create loans, attach legal contracts, and manage your electronic credit portfolio
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-5xl mx-auto">
              {services.map((service, index) => (
                <div key={index} className="card p-8">
                  <h3 className="text-xl font-medium text-primary-text mb-3">
                    {t(service.titleKey)}
                  </h3>
                  <p className="text-sm text-muted-light mb-6 leading-relaxed">
                    {t(service.descriptionKey)}
                  </p>

                  {service.framework && (
                    <div className="mb-6 pb-6 border-b border-border">
                      <p className="text-xs text-muted uppercase tracking-[0.15em] mb-2">
                        {t('eloans.framework')}
                      </p>
                      <Link
                        href={service.frameworkLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-authority-blue hover:text-data-blue inline-flex items-center gap-1"
                      >
                        {t(service.framework)}
                        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </Link>
                    </div>
                  )}

                  {service.apy && (
                    <div className="mb-6 pb-6 border-b border-border">
                      <p className="text-lg font-medium text-authority-blue">
                        {t(service.apy)}
                      </p>
                    </div>
                  )}

                  <ul className="space-y-2">
                    {service.features.map((featureKey, idx) => (
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
                        <span className="text-sm text-muted-light">{t(featureKey)}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="section-padding border-b border-border">
          <div className="section-container">
            <div className="max-w-3xl mx-auto mb-12 text-center">
              <div className="heading-section mb-4">Process</div>
              <h2 className="heading-lg text-primary-text mb-4">
                How E-LOANS Work
              </h2>
              <p className="body-text">
                Simple process for electronic credit creation
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
              <div className="card p-6 text-center">
                <div className="w-12 h-12 rounded bg-authority-blue/10 flex items-center justify-center mx-auto mb-4">
                  <span className="text-lg font-medium text-authority-blue">1</span>
                </div>
                <h3 className="text-base font-medium text-primary-text mb-2">Reach Tier 3</h3>
                <p className="text-sm text-muted-light">
                  Complete Private ID, KYC/KYB, and get your credit score
                </p>
              </div>

              <div className="card p-6 text-center">
                <div className="w-12 h-12 rounded bg-authority-blue/10 flex items-center justify-center mx-auto mb-4">
                  <span className="text-lg font-medium text-authority-blue">2</span>
                </div>
                <h3 className="text-base font-medium text-primary-text mb-2">Create E-Credit</h3>
                <p className="text-sm text-muted-light">
                  Create a loan using the EIP-4626 standard vault framework
                </p>
              </div>

              <div className="card p-6 text-center">
                <div className="w-12 h-12 rounded bg-authority-blue/10 flex items-center justify-center mx-auto mb-4">
                  <span className="text-lg font-medium text-authority-blue">3</span>
                </div>
                <h3 className="text-base font-medium text-primary-text mb-2">Attach Contract</h3>
                <p className="text-sm text-muted-light">
                  Fill out legal contract details as the borrower
                </p>
              </div>

              <div className="card p-6 text-center">
                <div className="w-12 h-12 rounded bg-authority-blue/10 flex items-center justify-center mx-auto mb-4">
                  <span className="text-lg font-medium text-authority-blue">4</span>
                </div>
                <h3 className="text-base font-medium text-primary-text mb-2">Lender Approval</h3>
                <p className="text-sm text-muted-light">
                  Lender signs contract to activate and release funds
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Requirements */}
        <section className="section-padding border-b border-border">
          <div className="section-container">
            <div className="max-w-3xl mx-auto mb-12 text-center">
              <div className="heading-section mb-4">Tier 3 Requirements</div>
              <h2 className="heading-lg text-primary-text mb-4">
                Verification Prerequisites
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <div className="card p-6 text-center">
                <div className="w-12 h-12 rounded bg-authority-blue/10 flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-authority-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <h3 className="text-base font-medium text-primary-text mb-2">Private ID</h3>
                <p className="text-sm text-muted-light">zkPassport verification for Personhood and age +18</p>
              </div>
              <div className="card p-6 text-center">
                <div className="w-12 h-12 rounded bg-authority-blue/10 flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-authority-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-base font-medium text-primary-text mb-2">KYC/KYB</h3>
                <p className="text-sm text-muted-light">Veriff for individuals or Sumsub for enterprises</p>
              </div>
              <div className="card p-6 text-center">
                <div className="w-12 h-12 rounded bg-authority-blue/10 flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-authority-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h3 className="text-base font-medium text-primary-text mb-2">Credit Score</h3>
                <p className="text-sm text-muted-light">AI-powered credit profile analysis</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section-padding">
          <div className="section-container">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="heading-lg text-primary-text mb-4">
                Ready to Create E-LOANS?
              </h2>
              <p className="body-text mb-8">
                Reach Tier 3 verification and start creating electronic credits and contracts
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
  );
}
