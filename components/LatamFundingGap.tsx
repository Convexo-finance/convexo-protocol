'use client';

import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext';

export default function LatamFundingGap() {
  const { t } = useLanguage();

  const challenges = [
    { title: t('fundingGap.challenge1Title'), desc: t('fundingGap.challenge1Desc') },
    { title: t('fundingGap.challenge2Title'), desc: t('fundingGap.challenge2Desc') },
    { title: t('fundingGap.challenge3Title'), desc: t('fundingGap.challenge3Desc') },
    { title: t('fundingGap.challenge4Title'), desc: t('fundingGap.challenge4Desc') },
  ];

  const solutions = [
    { title: t('fundingGap.solution1Title'), desc: t('fundingGap.solution1Desc') },
    { title: t('fundingGap.solution2Title'), desc: t('fundingGap.solution2Desc') },
    { title: t('fundingGap.solution3Title'), desc: t('fundingGap.solution3Desc') },
    { title: t('fundingGap.solution4Title'), desc: t('fundingGap.solution4Desc') },
  ];

  const stats = [
    { value: '$2.5T', label: t('fundingGap.stat1'), desc: t('fundingGap.stat1Desc') },
    { value: '67%', label: t('fundingGap.stat2'), desc: t('fundingGap.stat2Desc') },
    { value: '15–25%', label: t('fundingGap.stat3'), desc: t('fundingGap.stat3Desc') },
  ];

  return (
    <section className="section-padding">
      <div className="section-container">
        {/* Header */}
        <div className="mb-16">
          <div className="heading-section mb-4">
            {t('fundingGap.badge')}
          </div>
          <h2 className="heading-lg text-primary-text mb-4">
            {t('fundingGap.title')}
          </h2>
          <p className="body-text max-w-xl">
            {t('fundingGap.subtitle')}
          </p>
        </div>

        {/* Challenge vs Solution */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-px bg-border rounded-lg overflow-hidden mb-20">
          {/* Challenges */}
          <div className="bg-base p-8">
            <h3 className="text-sm font-medium text-primary-text mb-6 uppercase tracking-[0.1em]">
              {t('fundingGap.challengeTitle')}
            </h3>
            <div className="space-y-5">
              {challenges.map((item, idx) => (
                <div key={idx} className="flex items-start">
                  <div className="w-5 h-5 rounded-sm bg-red-500/10 flex items-center justify-center flex-shrink-0 mr-3 mt-0.5">
                    <svg className="w-2.5 h-2.5 text-red-400/70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-xs font-medium text-primary-text mb-0.5">{item.title}</h4>
                    <p className="text-xs text-muted leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Solutions */}
          <div className="bg-layer/40 p-8">
            <h3 className="text-sm font-medium text-data-blue mb-6 uppercase tracking-[0.1em]">
              {t('fundingGap.solutionTitle')}
            </h3>
            <div className="space-y-5">
              {solutions.map((item, idx) => (
                <div key={idx} className="flex items-start">
                  <div className="w-5 h-5 rounded-sm bg-authority-blue/15 flex items-center justify-center flex-shrink-0 mr-3 mt-0.5">
                    <svg className="w-2.5 h-2.5 text-authority-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-xs font-medium text-primary-text mb-0.5">{item.title}</h4>
                    <p className="text-xs text-muted leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="mb-16">
          <h3 className="text-sm font-medium text-primary-text mb-8 uppercase tracking-[0.1em] text-center">
            {t('fundingGap.impactTitle')}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 border-t border-border pt-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl font-medium text-data-blue mb-1">{stat.value}</div>
                <div className="text-xs font-medium text-primary-text mb-1">{stat.label}</div>
                <p className="text-[11px] text-muted-dark">{stat.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center card p-10">
          <h3 className="text-lg font-medium text-primary-text mb-3">
            {t('fundingGap.ctaTitle')}
          </h3>
          <p className="body-text max-w-md mx-auto mb-6">
            {t('fundingGap.ctaDesc')}
          </p>
          <Link href="/products/tokenized-bonds" className="btn-primary">
            {t('fundingGap.ctaButton')}
          </Link>
        </div>
      </div>
    </section>
  );
}
