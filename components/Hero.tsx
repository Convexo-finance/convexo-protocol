'use client';

import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext';

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background gradient layers */}
      <div className="absolute inset-0 bg-gradient-to-b from-accent-purple/8 via-base to-layer/30" />
      <div className="absolute inset-0 bg-gradient-to-br from-accent-purple/5 via-transparent to-authority-blue/5" />

      {/* Subtle radial glow - top right */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-authority-blue/4 rounded-full blur-[120px] animate-glow-pulse" />

      {/* Grid lines overlay */}
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: `
          linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
          linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
        `,
        backgroundSize: '80px 80px',
      }} />

      {/* Content */}
      <div className="relative z-10 section-container pt-32 pb-24 md:pt-40 md:pb-32">
        <div className="max-w-3xl">
          <div className="animate-fade-in-up">
            {/* Badge */}
            <div className="heading-section mb-10">
              Institutional Financial Infrastructure
            </div>

            {/* Headline */}
            <h1 className="heading-xl text-primary-text mb-8">
              {t('hero.title')}{' '}
              <span className="text-data-blue">
                {t('hero.titleHighlight')}
              </span>
              <br />
              {t('hero.titleSuffix')}
            </h1>

            {/* Subtitle */}
            <p className="text-base md:text-lg text-muted-light max-w-xl mb-12 leading-relaxed font-light">
              {t('hero.subtitle')}
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-start gap-4">
              <Link
                href="https://protocol.convexo.xyz"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                {t('hero.getStarted')}
                <svg className="w-3.5 h-3.5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <Link
                href="#products"
                className="btn-secondary"
              >
                View Products
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom data bar */}
        <div className="mt-24 md:mt-32 grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-border pt-8">
          <div>
            <div className="text-xs text-muted-dark uppercase tracking-[0.15em] mb-1">Networks</div>
            <div className="text-sm font-medium text-primary-text">Ethereum, Base, UniChain</div>
          </div>
          <div>
            <div className="text-xs text-muted-dark uppercase tracking-[0.15em] mb-1">Settlement</div>
            <div className="text-sm font-medium text-primary-text">~15 minutes</div>
          </div>
          <div>
            <div className="text-xs text-muted-dark uppercase tracking-[0.15em] mb-1">Coverage</div>
            <div className="text-sm font-medium text-primary-text">20 countries</div>
          </div>
          <div>
            <div className="text-xs text-muted-dark uppercase tracking-[0.15em] mb-1">Availability</div>
            <div className="text-sm font-medium text-primary-text">24 / 7 / 365</div>
          </div>
        </div>
      </div>
    </section>
  );
}
