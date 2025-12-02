'use client';

import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext';

export default function CryptoRails() {
  const { t } = useLanguage();
  
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-block bg-convexo-purple/10 text-convexo-purple px-4 py-2 rounded-full text-sm font-semibold mb-4">
              {t('cryptoRails.badge')}
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-convexo-navy mb-6">
              {t('cryptoRails.title')}
            </h2>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              {t('cryptoRails.description1')}
            </p>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              {t('cryptoRails.description2')}
            </p>
            <Link
              href="/products/treasury"
              className="inline-flex items-center text-convexo-purple hover:text-convexo-blue font-semibold text-lg transition-colors duration-200"
            >
              {t('cryptoRails.cta')}
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="bg-convexo-cream rounded-xl p-6 hover:shadow-lg transition-shadow duration-300">
              <div className="bg-convexo-purple/10 rounded-lg w-16 h-16 flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-convexo-purple" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-convexo-navy mb-2">{t('cryptoRails.instantTitle')}</h3>
              <p className="text-gray-600">
                {t('cryptoRails.instantDesc')}
              </p>
            </div>

            <div className="bg-convexo-cream rounded-xl p-6 hover:shadow-lg transition-shadow duration-300">
              <div className="bg-convexo-blue/10 rounded-lg w-16 h-16 flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-convexo-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-convexo-navy mb-2">{t('cryptoRails.lowerCostsTitle')}</h3>
              <p className="text-gray-600">
                {t('cryptoRails.lowerCostsDesc')}
              </p>
            </div>

            <div className="bg-convexo-cream rounded-xl p-6 hover:shadow-lg transition-shadow duration-300">
              <div className="bg-convexo-lightblue/20 rounded-lg w-16 h-16 flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-convexo-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-convexo-navy mb-2">{t('cryptoRails.globalTitle')}</h3>
              <p className="text-gray-600">
                {t('cryptoRails.globalDesc')}
              </p>
            </div>

            <div className="bg-convexo-cream rounded-xl p-6 hover:shadow-lg transition-shadow duration-300">
              <div className="bg-convexo-purple/10 rounded-lg w-16 h-16 flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-convexo-purple" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-convexo-navy mb-2">{t('cryptoRails.transparentTitle')}</h3>
              <p className="text-gray-600">
                {t('cryptoRails.transparentDesc')}
              </p>
            </div>
          </div>
        </div>

        {/* Stats Bar */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 bg-gradient-to-r from-convexo-purple/5 to-convexo-blue/5 rounded-2xl p-8">
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-convexo-purple mb-2">&lt;1 min</div>
            <div className="text-gray-600">{t('cryptoRails.settlementTime')}</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-convexo-blue mb-2">80%+</div>
            <div className="text-gray-600">{t('cryptoRails.lowerFees')}</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-convexo-purple mb-2">24/7</div>
            <div className="text-gray-600">{t('cryptoRails.available')}</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-convexo-blue mb-2">195+</div>
            <div className="text-gray-600">{t('cryptoRails.countries')}</div>
          </div>
        </div>
      </div>
    </section>
  );
}

