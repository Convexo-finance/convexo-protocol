'use client';

import Image from 'next/image';
import { useLanguage } from '@/contexts/LanguageContext';

export default function ChainDeployments() {
  const { t } = useLanguage();

  const chains = [
    {
      name: 'Base',
      logo: '/providers/chains/base_logo.svg',
      alt: 'Base',
      link: 'https://base.org',
    },
    {
      name: 'Ethereum',
      logo: '/providers/chains/ethereum.png',
      alt: 'Ethereum',
      link: 'https://ethereum.org',
    },
    {
      name: 'UniChain',
      logo: '/providers/chains/unichain.png',
      alt: 'UniChain',
      link: '#',
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-convexo-navy mb-4">
            {t('chains.deployed')}
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {t('chains.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {chains.map((chain, index) => (
            <a
              key={index}
              href={chain.link}
              target={chain.link !== '#' ? '_blank' : undefined}
              rel={chain.link !== '#' ? 'noopener noreferrer' : undefined}
              className="group bg-convexo-cream rounded-2xl p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 flex flex-col items-center justify-center"
            >
              <div className="relative w-32 h-32 mb-6 flex items-center justify-center">
                {chain.logo.endsWith('.svg') ? (
                  <img
                    src={chain.logo}
                    alt={chain.alt}
                    className="w-full h-full object-contain"
                  />
                ) : (
                  <Image
                    src={chain.logo}
                    alt={chain.alt}
                    width={128}
                    height={128}
                    className="object-contain"
                  />
                )}
              </div>
              <h3 className="text-2xl font-bold text-convexo-navy mb-2 group-hover:text-convexo-purple transition-colors">
                {chain.name}
              </h3>
              {chain.link !== '#' && (
                <svg
                  className="w-5 h-5 text-convexo-blue opacity-0 group-hover:opacity-100 transition-opacity"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
              )}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
