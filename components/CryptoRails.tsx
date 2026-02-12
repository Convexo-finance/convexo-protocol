'use client';

import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext';

export default function CryptoRails() {
  const { t } = useLanguage();

  const features = [
    {
      title: t('cryptoRails.instantTitle'),
      description: t('cryptoRails.instantDesc'),
      icon: (
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
    },
    {
      title: t('cryptoRails.lowerCostsTitle'),
      description: t('cryptoRails.lowerCostsDesc'),
      icon: (
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      title: t('cryptoRails.globalTitle'),
      description: t('cryptoRails.globalDesc'),
      icon: (
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      title: t('cryptoRails.transparentTitle'),
      description: t('cryptoRails.transparentDesc'),
      icon: (
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
    },
  ];

  const stats = [
    { value: '<1 min', label: t('cryptoRails.settlementTime') },
    { value: '80%+', label: t('cryptoRails.lowerFees') },
    { value: '24/7', label: t('cryptoRails.available') },
    { value: '195+', label: t('cryptoRails.countries') },
  ];

  return (
    <section className="section-padding">
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left content */}
          <div>
            <div className="heading-section mb-6">
              {t('cryptoRails.badge')}
            </div>
            <h2 className="heading-lg text-primary-text mb-6">
              {t('cryptoRails.title')}
            </h2>
            <p className="body-text mb-4">
              {t('cryptoRails.description1')}
            </p>
            <p className="body-text mb-8">
              {t('cryptoRails.description2')}
            </p>
            <Link
              href="/products/treasury"
              className="inline-flex items-center text-sm font-medium text-authority-blue hover:text-data-blue transition-colors duration-200"
            >
              {t('cryptoRails.cta')}
              <svg className="w-3.5 h-3.5 ml-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>

          {/* Right: Feature cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {features.map((feature, index) => (
              <div key={index} className="card p-5">
                <div className="w-8 h-8 rounded bg-authority-blue/10 flex items-center justify-center text-authority-blue mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-sm font-medium text-primary-text mb-2">{feature.title}</h3>
                <p className="text-xs text-muted-light leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-border pt-10">
          {stats.map((stat, index) => (
            <div key={index}>
              <div className="text-2xl font-medium text-primary-text mb-1">{stat.value}</div>
              <div className="text-xs text-muted-dark uppercase tracking-[0.1em]">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
