import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'OTC Services | Convexo Protocol',
  description: 'Fast, private, and secure over-the-counter trading of digital assets with professional traders and white-glove service.',
};

export default function OTCPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-convexo-purple via-convexo-navy to-convexo-blue py-24">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
            backgroundSize: '40px 40px'
          }}></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="text-6xl mb-6">🤝</div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              OTC Services
            </h1>
            <p className="text-xl md:text-2xl text-convexo-lightblue mb-8 max-w-3xl mx-auto">
              Professional over-the-counter trading with personalized service and competitive pricing
            </p>
            <Link
              href="https://fund.convexo.xyz"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-convexo-cream text-convexo-navy px-8 py-4 rounded-lg font-bold text-lg hover:shadow-2xl hover:shadow-convexo-cream/30 transition-all duration-300 transform hover:scale-105"
            >
              Contact OTC Desk
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
                White-Glove Digital Asset Trading
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                Our OTC desk provides institutional and high-net-worth clients with personalized service for large-volume digital asset trades. Execute significant transactions with minimal market impact while maintaining privacy and security.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                With experienced professional traders, deep liquidity access, and dedicated account management, we ensure seamless execution for your most important trades.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white rounded-lg p-4 shadow-md">
                  <div className="text-2xl font-bold text-convexo-purple mb-1">$1M+</div>
                  <div className="text-sm text-gray-600">Minimum Trade Size</div>
                </div>
                <div className="bg-white rounded-lg p-4 shadow-md">
                  <div className="text-2xl font-bold text-convexo-blue mb-1">24/7</div>
                  <div className="text-sm text-gray-600">Support</div>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-2xl shadow-xl p-8 border-t-4 border-convexo-purple">
              <h3 className="text-2xl font-bold text-convexo-navy mb-6">Why Choose Our OTC Desk</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="bg-convexo-purple/10 rounded-full p-2 mr-4">
                    <svg className="w-5 h-5 text-convexo-purple" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-convexo-navy mb-1">Deep Liquidity</h4>
                    <p className="text-gray-600 text-sm">Access to multiple liquidity sources for best execution</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-convexo-blue/10 rounded-full p-2 mr-4">
                    <svg className="w-5 h-5 text-convexo-blue" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-convexo-navy mb-1">Competitive Pricing</h4>
                    <p className="text-gray-600 text-sm">Better rates for large volume trades</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-convexo-lightblue/20 rounded-full p-2 mr-4">
                    <svg className="w-5 h-5 text-convexo-blue" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-convexo-navy mb-1">Privacy & Security</h4>
                    <p className="text-gray-600 text-sm">Confidential execution with institutional security</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-convexo-navy mb-12 text-center">Our OTC Services</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-convexo-cream rounded-xl p-8">
              <div className="bg-convexo-purple/10 rounded-lg w-16 h-16 flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-convexo-purple" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-convexo-navy mb-4">Block Trades</h3>
              <p className="text-gray-700 mb-4">
                Execute large block trades with minimal market impact. Our professional traders ensure optimal execution through our extensive liquidity network.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <span className="text-convexo-purple mr-2">•</span>
                  <span>Minimal slippage</span>
                </li>
                <li className="flex items-start">
                  <span className="text-convexo-purple mr-2">•</span>
                  <span>Pre-negotiated pricing</span>
                </li>
                <li className="flex items-start">
                  <span className="text-convexo-purple mr-2">•</span>
                  <span>Fast settlement</span>
                </li>
              </ul>
            </div>

            <div className="bg-convexo-cream rounded-xl p-8">
              <div className="bg-convexo-blue/10 rounded-lg w-16 h-16 flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-convexo-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-convexo-navy mb-4">Cross-Asset Swaps</h3>
              <p className="text-gray-700 mb-4">
                Swap between different digital assets directly with our desk, avoiding multiple exchange hops and saving on fees.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <span className="text-convexo-blue mr-2">•</span>
                  <span>Direct asset conversion</span>
                </li>
                <li className="flex items-start">
                  <span className="text-convexo-blue mr-2">•</span>
                  <span>Better rates</span>
                </li>
                <li className="flex items-start">
                  <span className="text-convexo-blue mr-2">•</span>
                  <span>Single transaction</span>
                </li>
              </ul>
            </div>

            <div className="bg-convexo-cream rounded-xl p-8">
              <div className="bg-convexo-lightblue/20 rounded-lg w-16 h-16 flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-convexo-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-convexo-navy mb-4">Scheduled Purchases</h3>
              <p className="text-gray-700 mb-4">
                Set up regular purchase schedules to build positions over time without manual intervention.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <span className="text-convexo-blue mr-2">•</span>
                  <span>Dollar-cost averaging</span>
                </li>
                <li className="flex items-start">
                  <span className="text-convexo-blue mr-2">•</span>
                  <span>Automated execution</span>
                </li>
                <li className="flex items-start">
                  <span className="text-convexo-blue mr-2">•</span>
                  <span>Flexible schedules</span>
                </li>
              </ul>
            </div>

            <div className="bg-convexo-cream rounded-xl p-8">
              <div className="bg-convexo-purple/10 rounded-lg w-16 h-16 flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-convexo-purple" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-convexo-navy mb-4">Custom Solutions</h3>
              <p className="text-gray-700 mb-4">
                Need something specific? Our team can develop custom trading solutions tailored to your requirements.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <span className="text-convexo-purple mr-2">•</span>
                  <span>Bespoke strategies</span>
                </li>
                <li className="flex items-start">
                  <span className="text-convexo-purple mr-2">•</span>
                  <span>Flexible terms</span>
                </li>
                <li className="flex items-start">
                  <span className="text-convexo-purple mr-2">•</span>
                  <span>Dedicated support</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-convexo-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-convexo-navy mb-4">How It Works</h2>
            <p className="text-xl text-gray-600">Simple process for complex trades</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-gradient-to-br from-convexo-purple to-convexo-blue rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl text-white font-bold">1</span>
              </div>
              <h3 className="text-xl font-bold text-convexo-navy mb-3">Request Quote</h3>
              <p className="text-gray-600">
                Contact our OTC desk with your trade requirements
              </p>
            </div>

            <div className="text-center">
              <div className="bg-gradient-to-br from-convexo-blue to-convexo-lightblue rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl text-white font-bold">2</span>
              </div>
              <h3 className="text-xl font-bold text-convexo-navy mb-3">Get Pricing</h3>
              <p className="text-gray-600">
                Receive competitive pricing from our traders
              </p>
            </div>

            <div className="text-center">
              <div className="bg-gradient-to-br from-convexo-lightblue to-convexo-purple rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl text-white font-bold">3</span>
              </div>
              <h3 className="text-xl font-bold text-convexo-navy mb-3">Confirm Trade</h3>
              <p className="text-gray-600">
                Review terms and confirm your transaction
              </p>
            </div>

            <div className="text-center">
              <div className="bg-gradient-to-br from-convexo-purple to-convexo-navy rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl text-white font-bold">4</span>
              </div>
              <h3 className="text-xl font-bold text-convexo-navy mb-3">Settlement</h3>
              <p className="text-gray-600">
                Fast, secure settlement to your wallet
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-convexo-navy mb-12 text-center">Benefits</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="bg-convexo-purple/10 rounded-full w-24 h-24 flex items-center justify-center mx-auto mb-6">
                <span className="text-4xl">🎯</span>
              </div>
              <h3 className="text-xl font-bold text-convexo-navy mb-3">Best Execution</h3>
              <p className="text-gray-600">
                Professional traders ensure you get the best possible price for your trades
              </p>
            </div>

            <div className="text-center p-6">
              <div className="bg-convexo-blue/10 rounded-full w-24 h-24 flex items-center justify-center mx-auto mb-6">
                <span className="text-4xl">🔒</span>
              </div>
              <h3 className="text-xl font-bold text-convexo-navy mb-3">Privacy First</h3>
              <p className="text-gray-600">
                Trade privately without revealing your positions to the public market
              </p>
            </div>

            <div className="text-center p-6">
              <div className="bg-convexo-lightblue/20 rounded-full w-24 h-24 flex items-center justify-center mx-auto mb-6">
                <span className="text-4xl">⚡</span>
              </div>
              <h3 className="text-xl font-bold text-convexo-navy mb-3">Fast & Reliable</h3>
              <p className="text-gray-600">
                Quick execution and settlement with professional service
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-convexo-purple via-convexo-navy to-convexo-blue">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Trade Large Volumes?
          </h2>
          <p className="text-xl text-convexo-lightblue mb-8">
            Contact our OTC desk for personalized service and competitive pricing
          </p>
          <Link
            href="https://fund.convexo.xyz"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-white text-convexo-navy px-8 py-4 rounded-lg font-bold text-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
          >
            Contact OTC Desk
          </Link>
        </div>
      </section>
    </div>
  );
}

