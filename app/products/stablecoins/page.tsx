import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Local Stablecoins for LATAM | Convexo Protocol',
  description: 'ECOP for Colombia and other local stablecoins powered by Uniswap V4 and Chainlink oracles, designed specifically for LATAM markets.',
};

export default function StablecoinsPage() {
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
              Local Stablecoins for LATAM
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto">
              ECOP for Colombia - Powered by Uniswap V4 and Chainlink oracles
            </p>
            <Link
              href="https://fund.convexo.xyz"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-white text-convexo-purple px-8 py-4 rounded-lg font-bold text-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
            >
              Explore ECOP
            </Link>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="py-20 bg-convexo-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-convexo-navy mb-6">
                Introducing ECOP
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                ECOP is our Colombian Peso-backed stablecoin, designed specifically for the LATAM market. Built on cutting-edge blockchain infrastructure using Uniswap V4 and secured by Chainlink oracles, ECOP provides a stable, reliable digital currency solution.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                Our local stablecoin initiative aims to bridge the gap between traditional finance and DeFi in Latin America, providing businesses and individuals with stable digital assets pegged to their local currencies.
              </p>
              <div className="flex items-center space-x-4">
                <div className="bg-white rounded-lg px-6 py-3 shadow-md">
                  <div className="text-2xl font-bold text-convexo-purple">1:1</div>
                  <div className="text-sm text-gray-600">Peso Peg</div>
                </div>
                <div className="bg-white rounded-lg px-6 py-3 shadow-md">
                  <div className="text-2xl font-bold text-convexo-blue">24/7</div>
                  <div className="text-sm text-gray-600">Trading</div>
                </div>
                <div className="bg-white rounded-lg px-6 py-3 shadow-md">
                  <div className="text-2xl font-bold text-convexo-purple">V4</div>
                  <div className="text-sm text-gray-600">Uniswap</div>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-2xl shadow-xl p-8 border-t-4 border-convexo-lightblue">
              <h3 className="text-2xl font-bold text-convexo-navy mb-6">Technology Stack</h3>
              <div className="space-y-6">
                <div>
                  <div className="flex items-center mb-2">
                    <div className="bg-convexo-purple/10 rounded-lg p-2 mr-3">
                      <svg className="w-6 h-6 text-convexo-purple" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" stroke="currentColor" strokeWidth="2" fill="none"/>
                      </svg>
                    </div>
                    <h4 className="font-semibold text-convexo-navy">Uniswap V4</h4>
                  </div>
                  <p className="text-gray-600 text-sm ml-11">
                    Latest DEX protocol for efficient, low-cost swaps
                  </p>
                </div>
                <div>
                  <div className="flex items-center mb-2">
                    <div className="bg-convexo-blue/10 rounded-lg p-2 mr-3">
                      <svg className="w-6 h-6 text-convexo-blue" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                      </svg>
                    </div>
                    <h4 className="font-semibold text-convexo-navy">Chainlink Oracles</h4>
                  </div>
                  <p className="text-gray-600 text-sm ml-11">
                    Reliable price feeds for accurate COP valuation
                  </p>
                </div>
                <div>
                  <div className="flex items-center mb-2">
                    <div className="bg-convexo-lightblue/20 rounded-lg p-2 mr-3">
                      <svg className="w-6 h-6 text-convexo-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                    </div>
                    <h4 className="font-semibold text-convexo-navy">Regulatory Compliance</h4>
                  </div>
                  <p className="text-gray-600 text-sm ml-11">
                    Built with local regulations in mind
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-convexo-navy mb-4">How ECOP Works</h2>
            <p className="text-xl text-gray-600">Simple, transparent, and secure</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-gradient-to-br from-convexo-purple to-convexo-blue rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl text-white font-bold">1</span>
              </div>
              <h3 className="text-xl font-bold text-convexo-navy mb-3">Mint ECOP</h3>
              <p className="text-gray-600">
                Deposit Colombian Pesos to mint ECOP at a 1:1 ratio through our platform
              </p>
            </div>

            <div className="text-center">
              <div className="bg-gradient-to-br from-convexo-blue to-convexo-lightblue rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl text-white font-bold">2</span>
              </div>
              <h3 className="text-xl font-bold text-convexo-navy mb-3">Trade & Use</h3>
              <p className="text-gray-600">
                Use ECOP for payments, trading, or DeFi activities across the ecosystem
              </p>
            </div>

            <div className="text-center">
              <div className="bg-gradient-to-br from-convexo-lightblue to-convexo-purple rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl text-white font-bold">3</span>
              </div>
              <h3 className="text-xl font-bold text-convexo-navy mb-3">Redeem Anytime</h3>
              <p className="text-gray-600">
                Convert ECOP back to Colombian Pesos at any time through our platform
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-convexo-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-convexo-navy mb-12 text-center">Benefits of ECOP</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <div className="flex items-start">
                <div className="bg-convexo-purple/10 rounded-lg p-3 mr-4">
                  <svg className="w-8 h-8 text-convexo-purple" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-convexo-navy mb-3">Stable Value</h3>
                  <p className="text-gray-700">
                    Maintain purchasing power with a 1:1 peg to the Colombian Peso, protected from crypto volatility
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg">
              <div className="flex items-start">
                <div className="bg-convexo-blue/10 rounded-lg p-3 mr-4">
                  <svg className="w-8 h-8 text-convexo-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-convexo-navy mb-3">Fast Transactions</h3>
                  <p className="text-gray-700">
                    Execute instant transfers and payments without traditional banking delays
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg">
              <div className="flex items-start">
                <div className="bg-convexo-lightblue/20 rounded-lg p-3 mr-4">
                  <svg className="w-8 h-8 text-convexo-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-convexo-navy mb-3">Lower Costs</h3>
                  <p className="text-gray-700">
                    Reduce transaction fees compared to traditional banking and payment systems
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg">
              <div className="flex items-start">
                <div className="bg-convexo-purple/10 rounded-lg p-3 mr-4">
                  <svg className="w-8 h-8 text-convexo-purple" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-convexo-navy mb-3">DeFi Access</h3>
                  <p className="text-gray-700">
                    Use ECOP across DeFi protocols for lending, borrowing, and yield generation
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg">
              <div className="flex items-start">
                <div className="bg-convexo-blue/10 rounded-lg p-3 mr-4">
                  <svg className="w-8 h-8 text-convexo-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-convexo-navy mb-3">Transparent</h3>
                  <p className="text-gray-700">
                    All transactions are recorded on-chain for full transparency and auditability
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg">
              <div className="flex items-start">
                <div className="bg-convexo-lightblue/20 rounded-lg p-3 mr-4">
                  <svg className="w-8 h-8 text-convexo-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-convexo-navy mb-3">Regional Focus</h3>
                  <p className="text-gray-700">
                    Designed specifically for LATAM markets with local compliance and support
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-convexo-navy mb-12 text-center">Use Cases</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="bg-convexo-purple/10 rounded-full w-24 h-24 flex items-center justify-center mx-auto mb-6">
                <span className="text-4xl">💼</span>
              </div>
              <h3 className="text-xl font-bold text-convexo-navy mb-3">Business Payments</h3>
              <p className="text-gray-600">
                Pay employees, contractors, and suppliers in ECOP for instant, low-cost settlements
              </p>
            </div>

            <div className="text-center p-6">
              <div className="bg-convexo-blue/10 rounded-full w-24 h-24 flex items-center justify-center mx-auto mb-6">
                <span className="text-4xl">🔄</span>
              </div>
              <h3 className="text-xl font-bold text-convexo-navy mb-3">Remittances</h3>
              <p className="text-gray-600">
                Send money across borders quickly and affordably using ECOP
              </p>
            </div>

            <div className="text-center p-6">
              <div className="bg-convexo-lightblue/20 rounded-full w-24 h-24 flex items-center justify-center mx-auto mb-6">
                <span className="text-4xl">📊</span>
              </div>
              <h3 className="text-xl font-bold text-convexo-navy mb-3">DeFi Integration</h3>
              <p className="text-gray-600">
                Participate in DeFi protocols while maintaining exposure to local currency
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-convexo-lightblue via-convexo-purple to-convexo-navy">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Start Using ECOP Today
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Experience the future of local currency with blockchain technology
          </p>
          <Link
            href="https://fund.convexo.xyz"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-white text-convexo-purple px-8 py-4 rounded-lg font-bold text-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
          >
            Get ECOP
          </Link>
        </div>
      </section>
    </div>
  );
}

