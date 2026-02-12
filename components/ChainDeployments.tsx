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
    <section className="py-16 border-t border-b border-border">
      <div className="section-container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="heading-section text-[10px]">
            {t('chains.deployed')}
          </div>

          <div className="flex items-center gap-12 md:gap-16">
            {chains.map((chain, index) => (
              <a
                key={index}
                href={chain.link}
                target={chain.link !== '#' ? '_blank' : undefined}
                rel={chain.link !== '#' ? 'noopener noreferrer' : undefined}
                className="group flex items-center gap-3 opacity-40 hover:opacity-80 transition-opacity duration-300"
              >
                <div className="relative w-8 h-8 flex items-center justify-center">
                  {chain.logo.endsWith('.svg') ? (
                    <img
                      src={chain.logo}
                      alt={chain.alt}
                      className="w-full h-full object-contain brightness-0 invert opacity-80"
                    />
                  ) : (
                    <Image
                      src={chain.logo}
                      alt={chain.alt}
                      width={32}
                      height={32}
                      className="object-contain brightness-0 invert opacity-80"
                    />
                  )}
                </div>
                <span className="text-xs font-medium text-primary-text/70 group-hover:text-primary-text transition-colors hidden sm:block">
                  {chain.name}
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
