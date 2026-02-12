'use client';

import Link from 'next/link';
import Image from 'next/image';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useLanguage } from '@/contexts/LanguageContext';

export default function StablecoinsPage() {
  const { t } = useLanguage();

  const chainlinkFeatures = [
    {
      title: 'Cross-Chain Interoperability Protocol (CCIP)',
      description: 'Enable cross-chain functionality with instant access to cross-chain transfers powered by Chainlink CCIP. Move data and value across any blockchain securely.',
      features: [
        'Cross-Chain Token (CCT) functionality',
        'Secure cross-chain transfers',
        'Multi-chain support',
      ],
      link: 'https://chain.link/cross-chain',
    },
    {
      title: 'Proof of Reserves',
      description: 'Real-time, secure verification for digital assets. Chainlink Proof of Reserve provides automated, tamper-proof reserve monitoring ensuring your stablecoins are fully backed.',
      features: [
        'Automated reserve verification',
        'Real-time transparency',
        '1:1 collateralization guarantee',
      ],
      link: 'https://chain.link/proof-of-reserve',
    },
    {
      title: 'Market & Data Feeds',
      description: 'Industry-leading data feeds powering onchain finance. Chainlink Data Feeds provide ultra-secure onchain data for USD-COP pricing, using Google API as reference.',
      features: [
        'USD-COP price feeds',
        'Google API as reference',
        'High-frequency market data',
      ],
      link: 'https://chain.link/data-feeds',
    },
  ];

  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="relative section-padding pt-32 border-b border-border">
          <div className="absolute inset-0 bg-gradient-to-b from-accent-purple/8 via-base to-layer/30" />
          
          <div className="relative z-10 section-container">
            <div className="max-w-2xl">
              <div className="heading-section mb-6">Local Stablecoins</div>
              <h1 className="heading-xl text-primary-text mb-6">
                Cross-Chain Tokens Powered by Chainlink
              </h1>
              <p className="text-base text-muted-light leading-relaxed mb-6">
                Cross-chain stablecoins with Chainlink CCIP, Proof of Reserves, and Data Feeds
                for secure, transparent, and interoperable digital assets.
              </p>
              <div className="flex items-center gap-6 mb-6">
                <div className="relative w-24 h-12">
                  <Image
                    src="/providers/chainlink.png"
                    alt="Chainlink"
                    fill
                    className="object-contain opacity-80"
                  />
                </div>
              </div>
              <div className="inline-block bg-authority-blue/10 border-l-2 border-authority-blue px-4 py-3 rounded">
                <p className="text-sm font-medium text-primary-text">Private ID verification required</p>
              </div>
            </div>
          </div>
        </section>

        {/* Chainlink Technologies */}
        <section className="section-padding border-b border-border">
          <div className="section-container">
            <div className="max-w-3xl mx-auto mb-12 text-center">
              <div className="heading-section mb-4">Powered by Chainlink Technology</div>
              <h2 className="heading-lg text-primary-text mb-4">
                Enterprise-Grade Infrastructure
              </h2>
              <p className="body-text">
                Our local stablecoins leverage industry-leading Chainlink infrastructure for security,
                transparency, and cross-chain functionality
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {chainlinkFeatures.map((feature, index) => (
                <div key={index} className="card p-6">
                  <h3 className="text-base font-medium text-primary-text mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-muted-light mb-6 leading-relaxed">
                    {feature.description}
                  </p>
                  <ul className="space-y-2 mb-6">
                    {feature.features.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <svg
                          className="w-4 h-4 text-authority-blue mt-0.5 flex-shrink-0"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <span className="text-sm text-muted-light">{item}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    href={feature.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-authority-blue hover:text-data-blue inline-flex items-center gap-1"
                  >
                    Learn More
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Cross-Chain Token (CCT) */}
        <section className="section-padding border-b border-border">
          <div className="section-container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <div className="heading-section mb-4">Cross-Chain Token</div>
                <h2 className="heading-lg text-primary-text mb-6">
                  CCT Functionality
                </h2>
                <p className="body-text mb-6">
                  Our local stablecoins are Cross-Chain Tokens (CCT) that enable instant access to cross-chain
                  functionality powered by Chainlink CCIP. This allows seamless movement of stablecoins across
                  different blockchain networks.
                </p>
                <p className="body-text mb-8">
                  With CCIP, you can transfer, redeem, and claim your local stablecoins across Base, Ethereum,
                  and other supported chains with the same security and reliability as single-chain operations.
                </p>
                <div className="card p-6">
                  <h3 className="text-base font-medium text-primary-text mb-4">CCT Benefits</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <svg className="w-4 h-4 text-authority-blue mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-sm text-muted-light">Instant cross-chain transfers</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <svg className="w-4 h-4 text-authority-blue mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-sm text-muted-light">Multi-chain liquidity access</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <svg className="w-4 h-4 text-authority-blue mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-sm text-muted-light">Unified cross-chain experience</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="card p-8 text-center">
                <div className="relative w-32 h-16 mx-auto mb-6">
                  <Image
                    src="/providers/chainlink.png"
                    alt="Chainlink"
                    fill
                    className="object-contain opacity-80"
                  />
                </div>
                <h3 className="text-lg font-medium text-primary-text mb-6">Chainlink Technology Stack</h3>
                <div className="space-y-3">
                  <Link
                    href="https://chain.link/cross-chain"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block btn-primary text-center"
                  >
                    CCIP - Cross-Chain Protocol
                  </Link>
                  <Link
                    href="https://chain.link/proof-of-reserve"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block btn-secondary text-center"
                  >
                    Proof of Reserves
                  </Link>
                  <Link
                    href="https://chain.link/data-feeds"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block btn-secondary text-center"
                  >
                    Market & Data Feeds
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Price Reference */}
        <section className="section-padding border-b border-border">
          <div className="section-container">
            <div className="max-w-3xl mx-auto mb-12 text-center">
              <div className="heading-section mb-4">USD-COP Price Reference</div>
              <h2 className="heading-lg text-primary-text mb-4">
                Reliable Pricing Infrastructure
              </h2>
              <p className="body-text">
                Our stablecoin pricing uses Chainlink Data Feeds with Google Finance API as the reference source
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              <div className="card p-6">
                <h3 className="text-base font-medium text-primary-text mb-3">Chainlink Data Feeds</h3>
                <p className="text-sm text-muted-light mb-4 leading-relaxed">
                  Industry-leading data feeds with decentralized infrastructure, proven reliability, and
                  industry-leading security. Data is sourced from multiple premium, authenticated APIs.
                </p>
                <Link
                  href="https://chain.link/data-feeds"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-authority-blue hover:text-data-blue inline-flex items-center gap-1"
                >
                  Explore Data Feeds
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </Link>
              </div>
              <div className="card p-6">
                <h3 className="text-base font-medium text-primary-text mb-3">Google Finance Reference</h3>
                <p className="text-sm text-muted-light mb-4 leading-relaxed">
                  USD-COP exchange rates are referenced from Google Finance API, ensuring accurate and
                  up-to-date pricing for all stablecoin operations.
                </p>
                <Link
                  href="https://www.google.com/finance/quote/USD-COP"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-authority-blue hover:text-data-blue inline-flex items-center gap-1"
                >
                  View USD-COP Rate
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section-padding">
          <div className="section-container">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="heading-lg text-primary-text mb-4">
                Start Using Cross-Chain Stablecoins
              </h2>
              <p className="body-text mb-8">
                Get your Private ID and access secure, transparent, and cross-chain ready stablecoins
              </p>
              <Link
                href="https://protocol.convexo.xyz"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary inline-flex items-center"
              >
                Get Started
                <svg className="w-3.5 h-3.5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
