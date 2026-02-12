import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Image from 'next/image';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Technology Stack | Convexo Protocol',
  description: 'Built on proven infrastructure: Ethereum, Base, UniChain, Chainlink, Uniswap, and institutional-grade custody providers.',
};

export default function TechnologyPage() {
  const providers = [
    {
      name: 'Chainlink',
      logo: '/providers/chainlink.png',
      category: 'Oracles',
      description: 'Decentralized oracle network for price feeds and proof of reserves',
    },
    {
      name: 'Uniswap',
      logo: '/providers/uniswap.png',
      category: 'DEX Infrastructure',
      description: 'Uniswap V4 powers our liquidity pools and stablecoin swaps',
    },
    {
      name: 'Sumsub',
      logo: '/providers/sumsub.jpg',
      category: 'KYB Verification',
      description: 'Enterprise KYB/KYC verification for institutional clients',
    },
    {
      name: 'Veriff',
      logo: '/providers/verifffondoblanco.png',
      category: 'Identity Verification',
      description: 'Individual identity verification with AI-powered authentication',
    },
    {
      name: 'zkPassport',
      logo: '/providers/zkpassportid.png',
      category: 'Privacy Identity',
      description: 'Zero-knowledge proof identity for privacy-persistent verification',
    },
    {
      name: 'Safe',
      logo: '/providers/safe_logo.png',
      category: 'Custody',
      description: 'Multi-signature smart contract wallets for institutional security',
    },
    {
      name: 'Circle USDC',
      logo: '/providers/acceptusdc.png',
      category: 'Stablecoins',
      description: 'USD Coin for fiat-backed stablecoin infrastructure',
    },
    {
      name: 'CoinGecko',
      logo: '/providers/CoinGecko.png',
      category: 'Price Oracles',
      description: 'Real-time cryptocurrency price data and market analytics',
    },
    {
      name: 'HashKey',
      logo: '/providers/hashkey_logo.png',
      category: 'Custody',
      description: 'Institutional-grade digital asset custody and infrastructure',
    },
    {
      name: 'OKX',
      logo: '/providers/okx_logo.png',
      category: 'Liquidity',
      description: 'Deep liquidity provider for institutional trading',
    },
  ];

  const chains = [
    {
      name: 'Ethereum',
      logo: '/providers/chains/ethereum.png',
      description: 'Primary settlement layer for tokenized assets',
    },
    {
      name: 'Base',
      logo: '/providers/chains/base_logo.svg',
      description: 'Coinbase L2 for efficient transaction execution',
    },
    {
      name: 'UniChain',
      logo: '/providers/chains/unichain.png',
      description: 'Uniswap native chain for optimized DEX operations',
    },
  ];

  return (
    <main className="min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="section-padding pt-32 border-b border-border">
        <div className="section-container">
          <div className="max-w-2xl">
            <div className="heading-section mb-6">Technology Stack</div>
            <h1 className="heading-xl text-primary-text mb-6">
              Built on Proven Infrastructure
            </h1>
            <p className="text-base text-muted-light leading-relaxed">
              Convexo Protocol integrates best-in-class blockchain infrastructure,
              institutional custody, and compliance providers to deliver sovereign-grade
              financial services.
            </p>
          </div>
        </div>
      </section>

      {/* Blockchain Networks */}
      <section className="section-padding border-b border-border">
        <div className="section-container">
          <div className="mb-12">
            <div className="heading-section mb-4">Blockchain Networks</div>
            <h2 className="heading-lg text-primary-text mb-4">
              Multi-Chain Architecture
            </h2>
            <p className="body-text max-w-xl">
              Deployed across Ethereum, Base, and UniChain for maximum accessibility
              and efficiency.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {chains.map((chain, index) => (
              <div key={index} className="card p-8 text-center">
                <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Image
                    src={chain.logo}
                    alt={chain.name}
                    width={64}
                    height={64}
                    className="object-contain opacity-80"
                  />
                </div>
                <h3 className="text-base font-medium text-primary-text mb-2">
                  {chain.name}
                </h3>
                <p className="text-xs text-muted-light leading-relaxed">
                  {chain.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Infrastructure Providers */}
      <section className="section-padding">
        <div className="section-container">
          <div className="mb-12">
            <div className="heading-section mb-4">Infrastructure Partners</div>
            <h2 className="heading-lg text-primary-text mb-4">
              Enterprise-Grade Integrations
            </h2>
            <p className="body-text max-w-xl">
              We partner with leading institutional infrastructure providers for
              custody, compliance, oracles, and identity verification.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {providers.map((provider, index) => (
              <div
                key={index}
                className="bg-base p-6 rounded-lg border border-border hover:border-border-hover transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="w-16 h-16 rounded-lg bg-white flex items-center justify-center p-3">
                    <Image
                      src={provider.logo}
                      alt={provider.name}
                      width={48}
                      height={48}
                      className="object-contain"
                    />
                  </div>
                  <div className="text-[9px] font-semibold uppercase tracking-[0.15em] text-authority-blue">
                    {provider.category}
                  </div>
                </div>
                <h3 className="text-sm font-medium text-primary-text mb-2">
                  {provider.name}
                </h3>
                <p className="text-xs text-muted leading-relaxed">
                  {provider.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Stack */}
      <section className="section-padding border-t border-border">
        <div className="section-container">
          <div className="max-w-3xl mx-auto">
            <div className="heading-section mb-6 text-center">Technical Architecture</div>
            <h2 className="heading-lg text-primary-text mb-8 text-center">
              Sovereign-Grade Infrastructure
            </h2>

            <div className="space-y-6">
              <div className="card p-6">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded bg-authority-blue/10 flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-4 h-4 text-authority-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-primary-text mb-2">Security First</h3>
                    <p className="text-xs text-muted-light leading-relaxed">
                      Multi-signature custody, zero-knowledge proofs, and institutional-grade
                      key management ensure sovereign control of digital assets.
                    </p>
                  </div>
                </div>
              </div>

              <div className="card p-6">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded bg-authority-blue/10 flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-4 h-4 text-authority-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-primary-text mb-2">Compliance Native</h3>
                    <p className="text-xs text-muted-light leading-relaxed">
                      KYC/KYB verification, AML screening, and regulatory compliance built
                      into every layer of the protocol.
                    </p>
                  </div>
                </div>
              </div>

              <div className="card p-6">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded bg-authority-blue/10 flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-4 h-4 text-authority-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-primary-text mb-2">High Performance</h3>
                    <p className="text-xs text-muted-light leading-relaxed">
                      Sub-second settlement, L2 scaling, and optimized smart contracts for
                      institutional trading volumes.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
