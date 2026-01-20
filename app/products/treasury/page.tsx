'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useLanguage } from '@/contexts/LanguageContext';

export default function TreasuryPage() {
  const { t } = useLanguage();

  const services = [
    {
      title: 'OTC Orders',
      icon: '🤝',
      description: 'Cash-in and cash-out using Telegram, WhatsApp, and Signal. We charge a fixed spread of 1.5% over the market price.',
      features: [
        'Fixed spread of 1.5% over market price',
        'Secure cash delivery for your crypto',
        'Contact via Telegram, WhatsApp, or Signal',
        'Based on Google Finance USD-COP price',
      ],
      contactMethods: [
        { logo: '/contacts/telegram.png', alt: 'Telegram' },
        { logo: '/contacts/whatsapp.png', alt: 'WhatsApp' },
        { logo: '/contacts/signal.png', alt: 'Signal' },
      ],
      priceLink: 'https://www.google.com/finance/quote/USD-COP',
      gradient: 'from-convexo-purple to-convexo-blue',
    },
    {
      title: 'Swaps with Uniswap V4',
      icon: '🔄',
      description: 'Swap and be a liquidity provider in Private Persistent and Compliant Liquidity Pools with Uniswap V4.',
      features: [
        '0.3% spread on swaps',
        'Private Persistent Pools',
        'Compliant Liquidity Pools',
        'Based on Google API Price (USD-COP)',
      ],
      provider: { logo: '/providers/uniswap.png', alt: 'Uniswap', link: 'https://uniswap.org' },
      priceLink: 'https://www.google.com/finance/quote/USD-COP',
      gradient: 'from-convexo-blue to-convexo-lightblue',
    },
    {
      title: 'Monetization of Local Stablecoins',
      icon: '💱',
      description: 'Redeem and claim local stablecoins powered by Chainlink Cross-Chain Interoperability Protocol (CCIP).',
      features: [
        'Chainlink CCIP powered',
        'Local stablecoin redemption',
        'Cross-chain interoperability',
        'Secure and reliable',
      ],
      provider: { logo: '/providers/chainlink.png', alt: 'Chainlink', link: 'https://chainlink.com' },
      gradient: 'from-convexo-lightblue to-convexo-purple',
    },
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-convexo-blue via-convexo-lightblue to-convexo-purple py-24">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
            backgroundSize: '40px 40px'
          }}></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="text-6xl mb-6">💱</div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Treasury Services
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto">
              OTC orders, Uniswap V4 swaps, and local stablecoin monetization
            </p>
            <div className="inline-block bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700 p-4 rounded mb-8">
              <p className="font-semibold">Private ID verification required for all services</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-convexo-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-convexo-navy mb-4">Our Treasury Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              All treasury functions require at least Private ID verification. Choose the service that fits your needs.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className={`h-2 bg-gradient-to-r ${service.gradient}`}></div>
                <div className="p-8">
                  <div className="text-5xl mb-4">{service.icon}</div>
                  <h3 className="text-2xl font-bold text-convexo-navy mb-4">
                    {service.title}
                  </h3>
                  <p className="text-convexo-blue mb-6 text-lg">
                    {service.description}
                  </p>

                  {service.contactMethods && (
                    <div className="mb-6">
                      <p className="text-sm text-gray-600 mb-3">Contact via:</p>
                      <div className="flex items-center space-x-4">
                        {service.contactMethods.map((method, idx) => (
                          <div key={idx} className="relative w-12 h-12 hover:scale-110 transition-transform">
                            <Image
                              src={method.logo}
                              alt={method.alt}
                              fill
                              className="object-contain"
                            />
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {service.provider && (
                    <div className="mb-6">
                      <Link
                        href={service.provider.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center space-x-2 hover:opacity-80 transition-opacity"
                      >
                        <div className="relative w-24 h-12">
                          <Image
                            src={service.provider.logo}
                            alt={service.provider.alt}
                            fill
                            className="object-contain"
                          />
                        </div>
                      </Link>
                    </div>
                  )}

                  <ul className="space-y-3 mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <svg
                          className="w-6 h-6 text-convexo-purple mr-3 flex-shrink-0 mt-0.5"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {service.priceLink && (
                    <div className="pt-6 border-t border-gray-200">
                      <Link
                        href={service.priceLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-convexo-blue hover:text-convexo-purple inline-flex items-center"
                      >
                        View Market Price (USD-COP)
                        <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </Link>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-convexo-navy mb-4">How to Get Started</h2>
            <p className="text-xl text-gray-600">Simple steps to access treasury services</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-gradient-to-br from-convexo-purple to-convexo-blue rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl text-white font-bold">1</span>
              </div>
              <h3 className="text-xl font-bold text-convexo-navy mb-3">Get Private ID</h3>
              <p className="text-gray-600">
                Verify your identity with zkPassport to receive a private persistent NFT
              </p>
            </div>

            <div className="text-center">
              <div className="bg-gradient-to-br from-convexo-blue to-convexo-lightblue rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl text-white font-bold">2</span>
              </div>
              <h3 className="text-xl font-bold text-convexo-navy mb-3">Choose Service</h3>
              <p className="text-gray-600">
                Select OTC orders, Uniswap V4 swaps, or local stablecoin monetization
              </p>
            </div>

            <div className="text-center">
              <div className="bg-gradient-to-br from-convexo-lightblue to-convexo-purple rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl text-white font-bold">3</span>
              </div>
              <h3 className="text-xl font-bold text-convexo-navy mb-3">Start Trading</h3>
              <p className="text-gray-600">
                Begin using treasury services with secure, compliant transactions
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-convexo-blue to-convexo-purple">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Access Treasury Services?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Get your Private ID and start using our treasury services today
          </p>
          <Link
            href="https://protocol.convexo.xyz"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-white text-convexo-blue px-8 py-4 rounded-lg font-bold text-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
          >
            Get Started
          </Link>
        </div>
      </section>
    </div>
  );
}
