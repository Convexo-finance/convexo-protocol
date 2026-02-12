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
    <section className="py-12 border-t border-border/50">
      <div className="section-container">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <span className="text-xs text-muted uppercase tracking-[0.15em]">
            {t('chains.deployed')}
          </span>

          <div className="flex items-center gap-4">
            {chains.map((chain, index) => (
              <a
                key={index}
                href={chain.link}
                target={chain.link !== '#' ? '_blank' : undefined}
                rel={chain.link !== '#' ? 'noopener noreferrer' : undefined}
                className="flex items-center gap-2 bg-layer/50 rounded-lg px-3 py-2 hover:bg-layer transition-all duration-200"
              >
                <div className="w-5 h-5 flex items-center justify-center">
                  <Image
                    src={chain.logo}
                    alt={chain.alt}
                    width={20}
                    height={20}
                    className="object-contain opacity-70"
                  />
                </div>
                <span className="text-xs text-primary-text/70 font-medium hidden sm:block">
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
