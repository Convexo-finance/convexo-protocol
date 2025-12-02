'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext';

export default function Hero() {
  const { t } = useLanguage();
  
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-convexo-navy via-convexo-purple to-convexo-blue">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
        <div className="animate-fade-in-up">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            {t('hero.title')}
            <span className="block bg-gradient-to-r from-convexo-lightblue to-convexo-cream bg-clip-text text-transparent">
              {t('hero.titleHighlight')}
            </span>
            {t('hero.titleSuffix')}
          </h1>
          
          <p className="text-xl md:text-2xl text-convexo-lightblue mb-12 max-w-3xl mx-auto">
            {t('hero.subtitle')}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="https://fund.convexo.xyz"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-convexo-cream text-convexo-navy px-8 py-4 rounded-lg font-bold text-lg hover:shadow-2xl hover:shadow-convexo-cream/30 transition-all duration-300 transform hover:scale-105"
            >
              {t('hero.getStarted')}
            </Link>
            <button
              onClick={() => document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' })}
              className="border-2 border-convexo-cream text-convexo-cream px-8 py-4 rounded-lg font-bold text-lg hover:bg-convexo-cream hover:text-convexo-navy transition-all duration-300"
            >
              {t('hero.exploreProducts')}
            </button>
          </div>

          {/* Trust Indicators */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-4xl font-bold text-convexo-cream mb-2">{t('hero.aiPowered')}</div>
              <div className="text-convexo-lightblue">{t('hero.aiPoweredSub')}</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-convexo-cream mb-2">{t('hero.nft')}</div>
              <div className="text-convexo-lightblue">{t('hero.nftSub')}</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-convexo-cream mb-2">{t('hero.uniswap')}</div>
              <div className="text-convexo-lightblue">{t('hero.uniswapSub')}</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-convexo-cream mb-2">{t('hero.chainlink')}</div>
              <div className="text-convexo-lightblue">{t('hero.chainlinkSub')}</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg
          className="w-6 h-6 text-convexo-cream"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </div>
    </section>
  );
}

