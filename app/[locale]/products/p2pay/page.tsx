'use client';

import { Link } from '@/navigation';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useTranslations } from 'next-intl';

export default function P2PAIPage() {
  const t = useTranslations();

  const features = [
    {
      titleKey: 'p2pai.features.agent.title',
      descriptionKey: 'p2pai.features.agent.description',
    },
    {
      titleKey: 'p2pai.features.reputation.title',
      descriptionKey: 'p2pai.features.reputation.description',
    },
    {
      titleKey: 'p2pai.features.escrow.title',
      descriptionKey: 'p2pai.features.escrow.description',
    },
    {
      titleKey: 'p2pai.features.telegram.title',
      descriptionKey: 'p2pai.features.telegram.description',
    },
  ];

  const howItWorks = [
    {
      step: 1,
      titleKey: 'p2pai.howItWorks.step1.title',
      descriptionKey: 'p2pai.howItWorks.step1.description',
    },
    {
      step: 2,
      titleKey: 'p2pai.howItWorks.step2.title',
      descriptionKey: 'p2pai.howItWorks.step2.description',
    },
    {
      step: 3,
      titleKey: 'p2pai.howItWorks.step3.title',
      descriptionKey: 'p2pai.howItWorks.step3.description',
    },
    {
      step: 4,
      titleKey: 'p2pai.howItWorks.step4.title',
      descriptionKey: 'p2pai.howItWorks.step4.description',
    },
    {
      step: 5,
      titleKey: 'p2pai.howItWorks.step5.title',
      descriptionKey: 'p2pai.howItWorks.step5.description',
    },
  ];

  const currencies = ['COP', 'ARS', 'MXN', 'BRL', 'CLP', 'PEN'];

  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="relative section-padding pt-32 border-b border-border">
          <div className="absolute inset-0 bg-gradient-to-b from-accent-purple/8 via-base to-layer/30" />
          
          <div className="relative z-10 section-container">
            <div className="max-w-2xl">
              <div className="heading-section mb-6">P2P-AI</div>
              <h1 className="heading-xl text-primary-text mb-6">
                {t('p2pai.hero.title')}
              </h1>
              <p className="text-base text-muted-light leading-relaxed mb-8">
                {t('p2pai.hero.subtitle')}
              </p>

              {/* Key Stats */}
              <div className="grid grid-cols-3 gap-4 mb-6">
                <div className="card p-4 text-center">
                  <div className="text-2xl font-medium text-primary-text mb-1">0.1%</div>
                  <div className="text-xs text-muted uppercase tracking-[0.1em]">Commission</div>
                </div>
                <div className="card p-4 text-center">
                  <div className="text-2xl font-medium text-primary-text mb-1">24/7</div>
                  <div className="text-xs text-muted uppercase tracking-[0.1em]">AI Agent</div>
                </div>
                <div className="card p-4 text-center">
                  <div className="text-2xl font-medium text-primary-text mb-1">ERC-8004</div>
                  <div className="text-xs text-muted uppercase tracking-[0.1em]">Reputation</div>
                </div>
              </div>

              <div className="inline-block bg-authority-blue/10 border-l-2 border-authority-blue px-4 py-3 rounded">
                <p className="text-sm font-medium text-primary-text">{t('p2pai.requirement.tier1')}</p>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="section-padding border-b border-border">
          <div className="section-container">
            <div className="max-w-3xl mx-auto mb-12 text-center">
              <div className="heading-section mb-4">Process</div>
              <h2 className="heading-lg text-primary-text mb-4">
                {t('p2pai.howItWorks.title')}
              </h2>
              <p className="body-text">
                {t('p2pai.howItWorks.subtitle')}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-4 max-w-6xl mx-auto">
              {howItWorks.map((step, index) => (
                <div key={index} className="card p-5 text-center">
                  <div className="w-10 h-10 rounded bg-primary-text flex items-center justify-center mx-auto mb-3">
                    <span className="text-base font-medium text-base">{step.step}</span>
                  </div>
                  <h3 className="text-sm font-medium text-primary-text mb-2">
                    {t(step.titleKey)}
                  </h3>
                  <p className="text-xs text-muted-light">
                    {t(step.descriptionKey)}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Key Features */}
        <section className="section-padding border-b border-border">
          <div className="section-container">
            <div className="max-w-3xl mx-auto mb-12 text-center">
              <div className="heading-section mb-4">Features</div>
              <h2 className="heading-lg text-primary-text mb-4">
                {t('p2pai.features.title')}
              </h2>
              <p className="body-text">
                {t('p2pai.features.subtitle')}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {features.map((feature, index) => (
                <div key={index} className="card p-6">
                  <h3 className="text-base font-medium text-primary-text mb-3">
                    {t(feature.titleKey)}
                  </h3>
                  <p className="text-sm text-muted-light leading-relaxed">
                    {t(feature.descriptionKey)}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Supported Currencies */}
        <section className="section-padding border-b border-border">
          <div className="section-container">
            <div className="max-w-3xl mx-auto mb-12 text-center">
              <div className="heading-section mb-4">Currencies</div>
              <h2 className="heading-lg text-primary-text mb-4">
                {t('p2pai.currencies.title')}
              </h2>
              <p className="body-text">
                {t('p2pai.currencies.subtitle')}
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-4 max-w-3xl mx-auto">
              {currencies.map((currency) => (
                <div
                  key={currency}
                  className="card px-6 py-4"
                >
                  <div className="text-lg font-medium text-primary-text">{currency}</div>
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
                {t('p2pai.cta.title')}
              </h2>
              <p className="body-text mb-8">
                {t('p2pai.cta.description')}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="https://t.me/convexobot"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary inline-flex items-center justify-center"
                >
                  <svg className="w-4 h-4 mr-2" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.74-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .38z"/>
                  </svg>
                  {t('p2pai.cta.startTrading')}
                </Link>
                <Link
                  href="/products/digital-ids"
                  className="btn-secondary inline-flex items-center justify-center"
                >
                  {t('p2pai.cta.getVerified')}
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
