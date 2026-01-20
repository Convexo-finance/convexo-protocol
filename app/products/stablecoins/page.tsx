'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useLanguage } from '@/contexts/LanguageContext';

export default function StablecoinsPage() {
  const { t } = useLanguage();

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-convexo-lightblue via-convexo-purple to-convexo-navy py-24">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
            backgroundSize: '40px 40px'
          }}></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="text-6xl mb-6">🪙</div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Local Stablecoins
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto">
              Cross-Chain Tokens powered by Chainlink CCIP, Proof of Reserves, and Data Feeds
            </p>
            <div className="flex justify-center items-center space-x-6 mb-8">
              <div className="relative w-32 h-16">
                <Image
                  src="/providers/chainlink.png"
                  alt="Chainlink"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
            <div className="inline-block bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700 p-4 rounded">
              <p className="font-semibold">Private ID verification required</p>
            </div>
          </div>
        </div>
      </section>

      {/* Chainlink Technologies Overview */}
      <section className="py-20 bg-convexo-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-convexo-navy mb-4">Powered by Chainlink Technology</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our local stablecoins leverage industry-leading Chainlink infrastructure for security, transparency, and cross-chain functionality
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* CCIP */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="h-2 bg-gradient-to-r from-convexo-purple to-convexo-blue"></div>
              <div className="p-8">
                <div className="text-4xl mb-4">🌐</div>
                <h3 className="text-2xl font-bold text-convexo-navy mb-4">
                  Cross-Chain Interoperability Protocol (CCIP)
                </h3>
                <p className="text-gray-700 mb-6">
                  Enable cross-chain functionality with instant access to cross-chain transfers powered by Chainlink CCIP. Move data and value across any blockchain securely.
                </p>
                <div className="space-y-3 mb-6">
                  <div className="flex items-start">
                    <svg className="w-6 h-6 text-convexo-purple mr-3 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">Cross-Chain Token (CCT) functionality</span>
                  </div>
                  <div className="flex items-start">
                    <svg className="w-6 h-6 text-convexo-purple mr-3 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">Secure cross-chain transfers</span>
                  </div>
                  <div className="flex items-start">
                    <svg className="w-6 h-6 text-convexo-purple mr-3 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">Multi-chain support</span>
                  </div>
                </div>
                <Link
                  href="https://chain.link/cross-chain"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-convexo-blue hover:text-convexo-purple font-semibold inline-flex items-center"
                >
                  Learn More About CCIP
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </Link>
              </div>
            </div>

            {/* Proof of Reserves */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="h-2 bg-gradient-to-r from-convexo-blue to-convexo-lightblue"></div>
              <div className="p-8">
                <div className="text-4xl mb-4">🔒</div>
                <h3 className="text-2xl font-bold text-convexo-navy mb-4">
                  Proof of Reserves
                </h3>
                <p className="text-gray-700 mb-6">
                  Real-time, secure verification for digital assets. Chainlink Proof of Reserve provides automated, tamper-proof reserve monitoring ensuring your stablecoins are fully backed.
                </p>
                <div className="space-y-3 mb-6">
                  <div className="flex items-start">
                    <svg className="w-6 h-6 text-convexo-blue mr-3 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">Automated reserve verification</span>
                  </div>
                  <div className="flex items-start">
                    <svg className="w-6 h-6 text-convexo-blue mr-3 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">Real-time transparency</span>
                  </div>
                  <div className="flex items-start">
                    <svg className="w-6 h-6 text-convexo-blue mr-3 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">1:1 collateralization guarantee</span>
                  </div>
                </div>
                <Link
                  href="https://chain.link/proof-of-reserve"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-convexo-blue hover:text-convexo-purple font-semibold inline-flex items-center"
                >
                  Learn More About Proof of Reserves
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </Link>
              </div>
            </div>

            {/* Data Feeds */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="h-2 bg-gradient-to-r from-convexo-lightblue to-convexo-purple"></div>
              <div className="p-8">
                <div className="text-4xl mb-4">📊</div>
                <h3 className="text-2xl font-bold text-convexo-navy mb-4">
                  Market & Data Feeds
                </h3>
                <p className="text-gray-700 mb-6">
                  Industry-leading data feeds powering onchain finance. Chainlink Data Feeds provide ultra-secure onchain data for USD-COP pricing, using Google API as reference.
                </p>
                <div className="space-y-3 mb-6">
                  <div className="flex items-start">
                    <svg className="w-6 h-6 text-convexo-purple mr-3 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">USD-COP price feeds</span>
                  </div>
                  <div className="flex items-start">
                    <svg className="w-6 h-6 text-convexo-purple mr-3 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">Google API as reference</span>
                  </div>
                  <div className="flex items-start">
                    <svg className="w-6 h-6 text-convexo-purple mr-3 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">High-frequency market data</span>
                  </div>
                </div>
            <Link
                  href="https://chain.link/data-feeds"
              target="_blank"
              rel="noopener noreferrer"
                  className="text-convexo-blue hover:text-convexo-purple font-semibold inline-flex items-center"
            >
                  Learn More About Data Feeds
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
            </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cross-Chain Token (CCT) Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block bg-convexo-purple/10 text-convexo-purple px-4 py-2 rounded-full text-sm font-semibold mb-4">
                CROSS-CHAIN TOKEN
              </div>
              <h2 className="text-4xl font-bold text-convexo-navy mb-6">
                Cross-Chain Token (CCT) Functionality
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                Our local stablecoins are Cross-Chain Tokens (CCT) that enable instant access to cross-chain functionality powered by Chainlink CCIP. This allows seamless movement of stablecoins across different blockchain networks.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                With CCIP, you can transfer, redeem, and claim your local stablecoins across Base, Ethereum, and other supported chains with the same security and reliability as single-chain operations.
              </p>
              <div className="bg-convexo-cream rounded-lg p-6">
                <h3 className="text-xl font-bold text-convexo-navy mb-4">CCT Benefits</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-convexo-purple mr-3 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">Instant cross-chain transfers</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-convexo-purple mr-3 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">Multi-chain liquidity access</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-convexo-purple mr-3 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">Unified cross-chain experience</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="bg-white rounded-2xl shadow-xl p-8 border-t-4 border-convexo-lightblue">
              <div className="text-center mb-6">
                <div className="relative w-40 h-20 mx-auto mb-4">
                  <Image
                    src="/providers/chainlink.png"
                    alt="Chainlink"
                    fill
                    className="object-contain"
                  />
                </div>
                <h3 className="text-2xl font-bold text-convexo-navy mb-4">Chainlink Technology Stack</h3>
              </div>
              <div className="space-y-4">
                <Link
                  href="https://chain.link/cross-chain"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block bg-convexo-purple text-white px-6 py-3 rounded-lg font-semibold hover:bg-convexo-blue transition-colors text-center mb-3"
                >
                  CCIP - Cross-Chain Protocol
                </Link>
                <Link
                  href="https://chain.link/proof-of-reserve"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block bg-convexo-blue text-white px-6 py-3 rounded-lg font-semibold hover:bg-convexo-purple transition-colors text-center mb-3"
                >
                  Proof of Reserves
                </Link>
                <Link
                  href="https://chain.link/data-feeds"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block bg-convexo-lightblue text-convexo-navy px-6 py-3 rounded-lg font-semibold hover:bg-convexo-blue transition-colors text-center"
                >
                  Market & Data Feeds
                </Link>
              </div>
            </div>
                    </div>
                  </div>
      </section>

      {/* Price Reference Section */}
      <section className="py-20 bg-convexo-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-convexo-navy mb-4">USD-COP Price Reference</h2>
              <p className="text-lg text-gray-600">
                Our stablecoin pricing uses Chainlink Data Feeds with Google Finance API as the reference source
                  </p>
                </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-convexo-cream rounded-xl p-6">
                <h3 className="text-xl font-bold text-convexo-navy mb-3">Chainlink Data Feeds</h3>
                <p className="text-gray-700 mb-4">
                  Industry-leading data feeds with decentralized infrastructure, proven reliability, and industry-leading security. Data is sourced from multiple premium, authenticated APIs.
                </p>
                <Link
                  href="https://chain.link/data-feeds"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-convexo-blue hover:text-convexo-purple font-semibold inline-flex items-center"
                >
                  Explore Data Feeds
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                </Link>
                    </div>
              <div className="bg-convexo-cream rounded-xl p-6">
                <h3 className="text-xl font-bold text-convexo-navy mb-3">Google Finance Reference</h3>
                <p className="text-gray-700 mb-4">
                  USD-COP exchange rates are referenced from Google Finance API, ensuring accurate and up-to-date pricing for all stablecoin operations.
                </p>
                <Link
                  href="https://www.google.com/finance/quote/USD-COP"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-convexo-blue hover:text-convexo-purple font-semibold inline-flex items-center"
                >
                  View USD-COP Rate
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-convexo-navy mb-4">How It Works</h2>
            <p className="text-xl text-gray-600">Secure, transparent, and cross-chain ready</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-gradient-to-br from-convexo-purple to-convexo-blue rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl text-white font-bold">1</span>
              </div>
              <h3 className="text-xl font-bold text-convexo-navy mb-3">Get Private ID</h3>
              <p className="text-gray-600">
                Verify your identity with zkPassport to access stablecoin services
              </p>
            </div>

            <div className="text-center">
              <div className="bg-gradient-to-br from-convexo-blue to-convexo-lightblue rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl text-white font-bold">2</span>
              </div>
              <h3 className="text-xl font-bold text-convexo-navy mb-3">Mint Stablecoins</h3>
              <p className="text-gray-600">
                Create local stablecoins backed by reserves verified with Proof of Reserves
              </p>
            </div>

            <div className="text-center">
              <div className="bg-gradient-to-br from-convexo-lightblue to-convexo-purple rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl text-white font-bold">3</span>
              </div>
              <h3 className="text-xl font-bold text-convexo-navy mb-3">Cross-Chain Transfer</h3>
              <p className="text-gray-600">
                Use CCIP to transfer stablecoins across different blockchain networks
              </p>
            </div>

            <div className="text-center">
              <div className="bg-gradient-to-br from-convexo-purple to-convexo-navy rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl text-white font-bold">4</span>
              </div>
              <h3 className="text-xl font-bold text-convexo-navy mb-3">Redeem & Claim</h3>
              <p className="text-gray-600">
                Redeem or claim your stablecoins with real-time price feeds from Chainlink
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-convexo-lightblue via-convexo-purple to-convexo-navy">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Start Using Cross-Chain Stablecoins
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Get your Private ID and access secure, transparent, and cross-chain ready stablecoins
          </p>
          <Link
            href="https://protocol.convexo.xyz"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-white text-convexo-purple px-8 py-4 rounded-lg font-bold text-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
          >
            Get Started
          </Link>
        </div>
      </section>
    </div>
  );
}
