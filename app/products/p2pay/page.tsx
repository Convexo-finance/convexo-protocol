'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useLanguage } from '@/contexts/LanguageContext';

export default function P2PayPage() {
  const { t } = useLanguage();

  const features = [
    {
      titleKey: 'p2pay.features.agent.title',
      descriptionKey: 'p2pay.features.agent.description',
    },
    {
      titleKey: 'p2pay.features.reputation.title',
      descriptionKey: 'p2pay.features.reputation.description',
    },
    {
      titleKey: 'p2pay.features.escrow.title',
      descriptionKey: 'p2pay.features.escrow.description',
    },
    {
      titleKey: 'p2pay.features.telegram.title',
      descriptionKey: 'p2pay.features.telegram.description',
    },
  ];

  const howItWorks = [
    {
      step: 1,
      titleKey: 'p2pay.howItWorks.step1.title',
      descriptionKey: 'p2pay.howItWorks.step1.description',
      type: 'buyer',
    },
    {
      step: 2,
      titleKey: 'p2pay.howItWorks.step2.title',
      descriptionKey: 'p2pay.howItWorks.step2.description',
      type: 'agent',
    },
    {
      step: 3,
      titleKey: 'p2pay.howItWorks.step3.title',
      descriptionKey: 'p2pay.howItWorks.step3.description',
      type: 'seller',
    },
    {
      step: 4,
      titleKey: 'p2pay.howItWorks.step4.title',
      descriptionKey: 'p2pay.howItWorks.step4.description',
      type: 'agent',
    },
    {
      step: 5,
      titleKey: 'p2pay.howItWorks.step5.title',
      descriptionKey: 'p2pay.howItWorks.step5.description',
      type: 'complete',
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
        
        {/* Network Lines */}
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
                  <linearGradient id="p2p-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#BAD6EB" />
                    <stop offset="100%" stopColor="#FFF9EF" />
                  </linearGradient>
                </defs>
                <circle cx="7" cy="12" r="3" fill="url(#p2p-gradient)" />
                <circle cx="17" cy="12" r="3" fill="url(#p2p-gradient)" />
                <circle cx="12" cy="12" r="2" fill="url(#p2p-gradient)" />
                <path d="M10 12L7 12M14 12L17 12" stroke="url(#p2p-gradient)" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              {t('p2pay.hero.title')}
            </h1>
            <p className="text-xl md:text-2xl text-convexo-lightblue mb-8 max-w-3xl mx-auto">
              {t('p2pay.hero.subtitle')}
            </p>

            {/* Key Stats */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-8">
              <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl px-8 py-4">
                <div className="text-4xl font-bold text-white mb-1">0.1%</div>
                <div className="text-convexo-lightblue text-sm font-semibold">Trading Commission</div>
              </div>
              <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl px-8 py-4">
                <div className="text-4xl font-bold text-white mb-1">24/7</div>
                <div className="text-convexo-lightblue text-sm font-semibold">AI Agent Availability</div>
              </div>
              <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl px-8 py-4">
                <div className="text-4xl font-bold text-white mb-1">ERC-8004</div>
                <div className="text-convexo-lightblue text-sm font-semibold">On-Chain Reputation</div>
              </div>
            </div>
            
            {/* Verification Requirement Badge */}
            <div className="inline-flex items-center bg-yellow-100 border-l-4 border-yellow-500 px-6 py-3 rounded-lg">
              <svg className="w-6 h-6 text-yellow-600 mr-3" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
              </svg>
              <span className="text-yellow-800 font-semibold">
                {t('p2pay.requirement.tier1')}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works - Agentic Process */}
      <section className="py-20 bg-gradient-to-b from-convexo-cream to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-convexo-navy mb-4">
              {t('p2pay.howItWorks.title')}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t('p2pay.howItWorks.subtitle')}
            </p>
          </div>

          <div className="relative">
            {/* Center Agent Visualization */}
            <div className="hidden lg:block absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
              <div className="w-32 h-32 bg-gradient-to-br from-convexo-purple to-convexo-navy rounded-full flex items-center justify-center shadow-2xl border-4 border-white">
                <svg className="w-16 h-16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2L2 7v10c0 5.55 3.84 10.74 8 12 4.16-1.26 8-6.45 8-12V7l-10-5z" fill="white" opacity="0.9" />
                  <circle cx="12" cy="12" r="3" fill="#401777" />
                </svg>
              </div>
              <div className="text-center mt-3">
                <div className="text-sm font-bold text-convexo-navy bg-white px-3 py-1 rounded-full shadow-md">
                  AI Agent
                </div>
              </div>
            </div>

            {/* Steps Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
              {howItWorks.map((step, index) => (
                <div key={index} className="relative">
                  <div className={`bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border-2 ${
                    step.type === 'agent' ? 'border-convexo-purple' : 
                    step.type === 'complete' ? 'border-green-500' :
                    'border-convexo-lightblue'
                  }`}>
                    <div className={`flex items-center justify-center w-12 h-12 rounded-full font-bold text-xl mb-4 mx-auto shadow-lg ${
                      step.type === 'agent' ? 'bg-gradient-to-br from-convexo-purple to-convexo-navy text-white' :
                      step.type === 'complete' ? 'bg-gradient-to-br from-green-500 to-green-600 text-white' :
                      'bg-gradient-to-br from-convexo-blue to-convexo-lightblue text-white'
                    }`}>
                      {step.step}
                    </div>
                    <h3 className="text-lg font-bold text-convexo-navy mb-3 text-center">
                      {t(step.titleKey)}
                    </h3>
                    <p className="text-gray-600 text-center text-sm">
                      {t(step.descriptionKey)}
                    </p>
                  </div>
                  
                  {/* Connection Arrow */}
                  {index < howItWorks.length - 1 && (
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
        </div>
      </section>

      {/* Key Features */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-convexo-navy mb-4">
              {t('p2pay.features.title')}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t('p2pay.features.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-convexo-cream to-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-convexo-lightblue"
              >
                <h3 className="text-2xl font-bold text-convexo-navy mb-4">
                  {t(feature.titleKey)}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {t(feature.descriptionKey)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Agent Architecture */}
      <section className="py-20 bg-gradient-to-br from-convexo-navy via-convexo-purple to-convexo-blue">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              {t('p2pay.architecture.title')}
            </h2>
            <p className="text-xl text-convexo-lightblue max-w-3xl mx-auto">
              {t('p2pay.architecture.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
              <div className="w-20 h-20 bg-gradient-to-br from-convexo-lightblue to-white rounded-xl flex items-center justify-center mb-6 mx-auto">
                <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2M12 11a4 4 0 100-8 4 4 0 000 8z" stroke="#081F5C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-3 text-center">
                {t('p2pay.architecture.wallet.title')}
              </h3>
              <p className="text-convexo-lightblue text-center text-sm">
                {t('p2pay.architecture.wallet.description')}
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
              <div className="w-20 h-20 bg-gradient-to-br from-convexo-lightblue to-white rounded-xl flex items-center justify-center mb-6 mx-auto">
                <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="3" y="11" width="18" height="11" rx="2" stroke="#081F5C" strokeWidth="2" />
                  <path d="M7 11V7a5 5 0 0110 0v4" stroke="#081F5C" strokeWidth="2" strokeLinecap="round" />
                  <circle cx="12" cy="16" r="1" fill="#081F5C" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-3 text-center">
                {t('p2pay.architecture.escrow.title')}
              </h3>
              <p className="text-convexo-lightblue text-center text-sm">
                {t('p2pay.architecture.escrow.description')}
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
              <div className="w-20 h-20 bg-gradient-to-br from-convexo-lightblue to-white rounded-xl flex items-center justify-center mb-6 mx-auto">
                <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2v20M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6" stroke="#081F5C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-3 text-center">
                {t('p2pay.architecture.pricing.title')}
              </h3>
              <p className="text-convexo-lightblue text-center text-sm">
                {t('p2pay.architecture.pricing.description')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Supported Currencies */}
      <section className="py-20 bg-convexo-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-convexo-navy mb-4">
              {t('p2pay.currencies.title')}
            </h2>
            <p className="text-xl text-gray-600">
              {t('p2pay.currencies.subtitle')}
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-6">
            {['COP', 'ARS', 'MXN', 'BRL', 'CLP', 'PEN'].map((currency) => (
              <div
                key={currency}
                className="bg-white rounded-xl px-8 py-4 shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-convexo-lightblue"
              >
                <div className="text-2xl font-bold text-convexo-navy">{currency}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-convexo-navy mb-6">
            {t('p2pay.cta.title')}
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            {t('p2pay.cta.description')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="https://t.me/convexobot"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-gradient-to-r from-convexo-navy to-convexo-purple text-white px-8 py-4 rounded-lg font-bold text-lg hover:shadow-2xl hover:shadow-convexo-purple/30 transition-all duration-300 transform hover:scale-105"
            >
              <svg className="w-6 h-6 mr-3" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.74-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .38z"/>
              </svg>
              {t('p2pay.cta.startTrading')}
            </Link>
            <Link
              href="/products/digital-ids"
              className="inline-flex items-center justify-center border-2 border-convexo-navy text-convexo-navy px-8 py-4 rounded-lg font-bold text-lg hover:bg-convexo-navy hover:text-white transition-all duration-300"
            >
              {t('p2pay.cta.getVerified')}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
