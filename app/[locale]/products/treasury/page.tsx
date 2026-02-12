'use client';

import { Link } from '@/navigation';
import Image from 'next/image';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useTranslations } from 'next-intl';

export default function TreasuryPage() {
  const t = useTranslations();

  const services = [
    {
      title: 'OTC Orders',
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
    },
    {
      title: 'Swaps with Uniswap V4',
      description: 'Swap and be a liquidity provider in Private Persistent and Compliant Liquidity Pools with Uniswap V4.',
      features: [
        '0.3% spread on swaps',
        'Private Persistent Pools',
        'Compliant Liquidity Pools',
        'Based on Google API Price (USD-COP)',
      ],
      provider: { logo: '/providers/uniswap.png', alt: 'Uniswap', link: 'https://uniswap.org' },
      priceLink: 'https://www.google.com/finance/quote/USD-COP',
    },
    {
      title: 'Monetization of Local Stablecoins',
      description: 'Redeem and claim local stablecoins powered by Chainlink Cross-Chain Interoperability Protocol (CCIP).',
      features: [
        'Chainlink CCIP powered',
        'Local stablecoin redemption',
        'Cross-chain interoperability',
        'Secure and reliable',
      ],
      provider: { logo: '/providers/chainlink.png', alt: 'Chainlink', link: 'https://chainlink.com' },
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
              <div className="heading-section mb-6">Treasury Services</div>
              <h1 className="heading-xl text-primary-text mb-6">
                OTC Orders, Swaps & Stablecoin Monetization
              </h1>
              <p className="text-base text-muted-light leading-relaxed mb-6">
                Comprehensive treasury services for institutional clients, powered by leading DeFi protocols
                and compliance infrastructure.
              </p>
              <div className="inline-block bg-authority-blue/10 border-l-2 border-authority-blue px-4 py-3 rounded">
                <p className="text-sm font-medium text-primary-text">Private ID verification required for all services</p>
              </div>
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="section-padding border-b border-border">
          <div className="section-container">
            <div className="max-w-3xl mx-auto mb-12 text-center">
              <div className="heading-section mb-4">Services</div>
              <h2 className="heading-lg text-primary-text mb-4">
                Enterprise Treasury Operations
              </h2>
              <p className="body-text">
                Choose the service that fits your institutional needs
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {services.map((service, index) => (
                <div key={index} className="card p-6">
                  <h3 className="text-lg font-medium text-primary-text mb-3">
                    {service.title}
                  </h3>
                  <p className="text-sm text-muted-light mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  {service.contactMethods && (
                    <div className="mb-6 pb-6 border-b border-border">
                      <p className="text-xs text-muted uppercase tracking-[0.15em] mb-3">Contact via</p>
                      <div className="flex items-center gap-3">
                        {service.contactMethods.map((method, idx) => (
                          <div key={idx} className="relative w-8 h-8 opacity-70 hover:opacity-100 transition-opacity">
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
                    <div className="mb-6 pb-6 border-b border-border">
                      <Link
                        href={service.provider.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block hover:opacity-70 transition-opacity"
                      >
                        <div className="relative w-20 h-10">
                          <Image
                            src={service.provider.logo}
                            alt={service.provider.alt}
                            fill
                            className="object-contain opacity-80"
                          />
                        </div>
                      </Link>
                    </div>
                  )}

                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
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
                        <span className="text-sm text-muted-light">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {service.priceLink && (
                    <Link
                      href={service.priceLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-authority-blue hover:text-data-blue inline-flex items-center gap-1"
                    >
                      View Market Price (USD-COP)
                      <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="section-padding border-b border-border">
          <div className="section-container">
            <div className="max-w-3xl mx-auto mb-12 text-center">
              <div className="heading-section mb-4">Process</div>
              <h2 className="heading-lg text-primary-text mb-4">
                How to Get Started
              </h2>
              <p className="body-text">
                Simple steps to access treasury services
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <div className="card p-6 text-center">
                <div className="w-12 h-12 rounded bg-authority-blue/10 flex items-center justify-center mx-auto mb-4">
                  <span className="text-lg font-medium text-authority-blue">1</span>
                </div>
                <h3 className="text-base font-medium text-primary-text mb-2">Get Private ID</h3>
                <p className="text-sm text-muted-light">
                  Verify your identity with zkPassport to receive a private persistent NFT
                </p>
              </div>

              <div className="card p-6 text-center">
                <div className="w-12 h-12 rounded bg-authority-blue/10 flex items-center justify-center mx-auto mb-4">
                  <span className="text-lg font-medium text-authority-blue">2</span>
                </div>
                <h3 className="text-base font-medium text-primary-text mb-2">Choose Service</h3>
                <p className="text-sm text-muted-light">
                  Select OTC orders, Uniswap V4 swaps, or local stablecoin monetization
                </p>
              </div>

              <div className="card p-6 text-center">
                <div className="w-12 h-12 rounded bg-authority-blue/10 flex items-center justify-center mx-auto mb-4">
                  <span className="text-lg font-medium text-authority-blue">3</span>
                </div>
                <h3 className="text-base font-medium text-primary-text mb-2">Start Trading</h3>
                <p className="text-sm text-muted-light">
                  Begin using treasury services with secure, compliant transactions
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section-padding">
          <div className="section-container">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="heading-lg text-primary-text mb-4">
                Ready to Access Treasury Services?
              </h2>
              <p className="body-text mb-8">
                Get your Private ID and start using our treasury services today
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
