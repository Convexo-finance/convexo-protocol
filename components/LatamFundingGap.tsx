'use client';

import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext';

export default function LatamFundingGap() {
  const { t } = useLanguage();
  
  return (
    <section className="py-20 bg-convexo-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-block bg-convexo-blue/10 text-convexo-blue px-4 py-2 rounded-full text-sm font-semibold mb-4">
            {t('fundingGap.badge')}
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-convexo-navy mb-6">
            {t('fundingGap.title')}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('fundingGap.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="order-2 lg:order-1">
            <div className="bg-white rounded-2xl p-8 shadow-xl">
              <h3 className="text-2xl font-bold text-convexo-navy mb-6">The Challenge</h3>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-red-100 rounded-full p-2 mr-4 flex-shrink-0">
                    <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-convexo-navy mb-1">Limited Access to Capital</h4>
                    <p className="text-gray-600">SMEs in LATAM face rejection rates of up to 40% for traditional bank loans, even when creditworthy.</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-red-100 rounded-full p-2 mr-4 flex-shrink-0">
                    <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-convexo-navy mb-1">High Cost of Capital</h4>
                    <p className="text-gray-600">Interest rates in LATAM can be 2-3x higher than in developed markets, stifling growth.</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-red-100 rounded-full p-2 mr-4 flex-shrink-0">
                    <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-convexo-navy mb-1">Currency Volatility</h4>
                    <p className="text-gray-600">Local currency depreciation makes international funding risky and unpredictable.</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-red-100 rounded-full p-2 mr-4 flex-shrink-0">
                    <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-convexo-navy mb-1">Complex Processes</h4>
                    <p className="text-gray-600">Traditional international funding involves mountains of paperwork and months of waiting.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <div className="bg-gradient-to-br from-convexo-purple to-convexo-blue rounded-2xl p-8 text-white shadow-xl">
              <h3 className="text-2xl font-bold mb-6">The Solution</h3>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-green-400 rounded-full p-2 mr-4 flex-shrink-0">
                    <svg className="w-6 h-6 text-green-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Tokenized Corporate Bonds</h4>
                    <p className="text-white/90">Access international investors through blockchain-based corporate bonds with transparent pricing.</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-green-400 rounded-full p-2 mr-4 flex-shrink-0">
                    <svg className="w-6 h-6 text-green-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">AI-Powered Credit Scoring</h4>
                    <p className="text-white/90">Fair, transparent evaluation that looks beyond traditional credit scores to assess true potential.</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-green-400 rounded-full p-2 mr-4 flex-shrink-0">
                    <svg className="w-6 h-6 text-green-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Stablecoin Infrastructure</h4>
                    <p className="text-white/90">Mitigate currency risk with USDC, EURC, and local stablecoins like ECOP for Colombia.</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-green-400 rounded-full p-2 mr-4 flex-shrink-0">
                    <svg className="w-6 h-6 text-green-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Streamlined Digital Process</h4>
                    <p className="text-white/90">Complete evaluation and funding in weeks, not months, with full digital workflow.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Key Statistics */}
        <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg">
          <h3 className="text-3xl font-bold text-convexo-navy mb-8 text-center">{t('fundingGap.impactTitle')}</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-convexo-cream rounded-xl">
              <div className="text-5xl font-bold text-convexo-purple mb-2">$2.5T</div>
              <div className="text-gray-600 font-medium">{t('fundingGap.stat1')}</div>
              <p className="text-sm text-gray-500 mt-2">{t('fundingGap.stat1Desc')}</p>
            </div>
            <div className="text-center p-6 bg-convexo-cream rounded-xl">
              <div className="text-5xl font-bold text-convexo-blue mb-2">67%</div>
              <div className="text-gray-600 font-medium">{t('fundingGap.stat2')}</div>
              <p className="text-sm text-gray-500 mt-2">{t('fundingGap.stat2Desc')}</p>
            </div>
            <div className="text-center p-6 bg-convexo-cream rounded-xl">
              <div className="text-5xl font-bold text-convexo-purple mb-2">15-25%</div>
              <div className="text-gray-600 font-medium">{t('fundingGap.stat3')}</div>
              <p className="text-sm text-gray-500 mt-2">{t('fundingGap.stat3Desc')}</p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <h3 className="text-2xl font-bold text-convexo-navy mb-4">
            {t('fundingGap.ctaTitle')}
          </h3>
          <p className="text-lg text-gray-600 mb-6">
            {t('fundingGap.ctaDesc')}
          </p>
          <Link
            href="/products/tokenized-bonds"
            className="inline-block bg-gradient-to-r from-convexo-purple to-convexo-blue text-white px-8 py-4 rounded-lg font-bold text-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
          >
            {t('fundingGap.ctaButton')}
          </Link>
        </div>
      </div>
    </section>
  );
}

