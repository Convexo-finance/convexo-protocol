import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Digital Assets Treasury | Convexo Protocol',
  description: 'Trade local stablecoins with international stablecoins like USDC and EURC with institutional-grade security and competitive rates.',
};

export default function TreasuryPage() {
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
              Digital Assets Treasury
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto">
              Seamlessly trade local and international stablecoins with institutional-grade tools and security
            </p>
            <Link
              href="https://fund.convexo.xyz"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-white text-convexo-blue px-8 py-4 rounded-lg font-bold text-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
            >
              Start Trading
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
                Enterprise Treasury Management
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                Our Digital Assets Treasury platform provides enterprises with the tools they need to efficiently manage their digital asset holdings, convert between local and international stablecoins, and optimize their treasury operations.
              </p>
              <p className="text-lg text-gray-700">
                With support for USDC, EURC, and local LATAM stablecoins, you can execute trades quickly and securely while maintaining full visibility into your digital asset portfolio.
              </p>
            </div>
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h3 className="text-2xl font-bold text-convexo-navy mb-6">Supported Assets</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-convexo-cream rounded-lg">
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-convexo-blue/10 rounded-full flex items-center justify-center mr-4">
                      <span className="text-xl">💵</span>
                    </div>
                    <div>
                      <div className="font-semibold text-convexo-navy">USDC</div>
                      <div className="text-sm text-gray-600">USD Coin</div>
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-between p-4 bg-convexo-cream rounded-lg">
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-convexo-purple/10 rounded-full flex items-center justify-center mr-4">
                      <span className="text-xl">💶</span>
                    </div>
                    <div>
                      <div className="font-semibold text-convexo-navy">EURC</div>
                      <div className="text-sm text-gray-600">Euro Coin</div>
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-between p-4 bg-convexo-cream rounded-lg">
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-convexo-lightblue/20 rounded-full flex items-center justify-center mr-4">
                      <span className="text-xl">🪙</span>
                    </div>
                    <div>
                      <div className="font-semibold text-convexo-navy">Local Stablecoins</div>
                      <div className="text-sm text-gray-600">LATAM currencies</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-convexo-navy mb-12 text-center">Platform Features</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-convexo-cream rounded-xl p-8">
              <div className="bg-convexo-blue/10 rounded-lg w-16 h-16 flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-convexo-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-convexo-navy mb-4">Competitive Rates</h3>
              <p className="text-gray-700">
                Access the best exchange rates in the market with our optimized liquidity aggregation system
              </p>
            </div>

            <div className="bg-convexo-cream rounded-xl p-8">
              <div className="bg-convexo-purple/10 rounded-lg w-16 h-16 flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-convexo-purple" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-convexo-navy mb-4">Institutional Security</h3>
              <p className="text-gray-700">
                Bank-grade security measures protect your assets with multi-signature wallets and cold storage
              </p>
            </div>

            <div className="bg-convexo-cream rounded-xl p-8">
              <div className="bg-convexo-lightblue/20 rounded-lg w-16 h-16 flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-convexo-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-convexo-navy mb-4">Instant Execution</h3>
              <p className="text-gray-700">
                Execute trades instantly with our high-performance matching engine and deep liquidity pools
              </p>
            </div>

            <div className="bg-convexo-cream rounded-xl p-8">
              <div className="bg-convexo-blue/10 rounded-lg w-16 h-16 flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-convexo-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-convexo-navy mb-4">Real-time Analytics</h3>
              <p className="text-gray-700">
                Monitor your portfolio with comprehensive dashboards and real-time performance metrics
              </p>
            </div>

            <div className="bg-convexo-cream rounded-xl p-8">
              <div className="bg-convexo-purple/10 rounded-lg w-16 h-16 flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-convexo-purple" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-convexo-navy mb-4">Multi-currency Support</h3>
              <p className="text-gray-700">
                Support for multiple stablecoins including USDC, EURC, and regional LATAM currencies
              </p>
            </div>

            <div className="bg-convexo-cream rounded-xl p-8">
              <div className="bg-convexo-lightblue/20 rounded-lg w-16 h-16 flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-convexo-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-convexo-navy mb-4">Detailed Reporting</h3>
              <p className="text-gray-700">
                Generate comprehensive reports for accounting, compliance, and financial analysis
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-20 bg-convexo-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-convexo-navy mb-12 text-center">Use Cases</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-convexo-navy mb-4">International Payments</h3>
              <p className="text-gray-700 mb-6">
                Convert local currency to USDC or EURC for seamless international payments with lower fees and faster settlement times compared to traditional banking.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <span className="text-convexo-blue mr-2">✓</span>
                  <span>Instant cross-border transfers</span>
                </li>
                <li className="flex items-start">
                  <span className="text-convexo-blue mr-2">✓</span>
                  <span>Reduced transaction fees</span>
                </li>
                <li className="flex items-start">
                  <span className="text-convexo-blue mr-2">✓</span>
                  <span>24/7 availability</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-convexo-navy mb-4">Treasury Optimization</h3>
              <p className="text-gray-700 mb-6">
                Optimize your company's treasury by holding assets in stable currencies and earning yields while maintaining liquidity for operational needs.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <span className="text-convexo-purple mr-2">✓</span>
                  <span>Yield generation opportunities</span>
                </li>
                <li className="flex items-start">
                  <span className="text-convexo-purple mr-2">✓</span>
                  <span>Currency diversification</span>
                </li>
                <li className="flex items-start">
                  <span className="text-convexo-purple mr-2">✓</span>
                  <span>Liquidity management</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-convexo-navy mb-4">Hedging & Risk Management</h3>
              <p className="text-gray-700 mb-6">
                Protect your business from currency volatility by converting to stablecoins and maintaining purchasing power across different markets.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <span className="text-convexo-blue mr-2">✓</span>
                  <span>Currency risk mitigation</span>
                </li>
                <li className="flex items-start">
                  <span className="text-convexo-blue mr-2">✓</span>
                  <span>Stable value preservation</span>
                </li>
                <li className="flex items-start">
                  <span className="text-convexo-blue mr-2">✓</span>
                  <span>Predictable costs</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-convexo-navy mb-4">Working Capital Management</h3>
              <p className="text-gray-700 mb-6">
                Efficiently manage working capital by quickly converting between currencies to pay suppliers, contractors, and manage operational expenses.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <span className="text-convexo-purple mr-2">✓</span>
                  <span>Fast conversions</span>
                </li>
                <li className="flex items-start">
                  <span className="text-convexo-purple mr-2">✓</span>
                  <span>Reduced FX fees</span>
                </li>
                <li className="flex items-start">
                  <span className="text-convexo-purple mr-2">✓</span>
                  <span>Streamlined operations</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-convexo-blue to-convexo-purple">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Start Managing Your Digital Treasury
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Access institutional-grade treasury management tools today
          </p>
          <Link
            href="https://fund.convexo.xyz"
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

