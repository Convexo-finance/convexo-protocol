import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Tokenized Corporate Bonds | Convexo Protocol',
  description: 'Access international funding through compliant, tokenized corporate bonds with AI-powered credit scoring and NFT certification.',
};

export default function TokenizedBondsPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-convexo-navy via-convexo-purple to-convexo-blue py-24">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
            backgroundSize: '40px 40px'
          }}></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="text-6xl mb-6">🏦</div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Tokenized Corporate Bonds
            </h1>
            <p className="text-xl md:text-2xl text-convexo-lightblue mb-8 max-w-3xl mx-auto">
              Access international funding through compliant, tokenized corporate bonds with AI-powered credit scoring
            </p>
            <Link
              href="https://fund.convexo.xyz"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-convexo-cream text-convexo-navy px-8 py-4 rounded-lg font-bold text-lg hover:shadow-2xl hover:shadow-convexo-cream/30 transition-all duration-300 transform hover:scale-105"
            >
              Get Started
            </Link>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-20 bg-convexo-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-convexo-navy mb-6">
                Institutional-Grade Funding for LATAM Enterprises
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                Our tokenized corporate bond platform bridges the gap between traditional finance and blockchain technology, providing solid enterprises with access to international capital markets while maintaining the highest standards of compliance and security.
              </p>
              <p className="text-lg text-gray-700">
                Through our comprehensive evaluation process, including AI-powered credit scoring and Sumsub verification, we ensure that only qualified enterprises gain access to funding while providing investors with transparent, secure investment opportunities.
              </p>
            </div>
            <div className="bg-white rounded-2xl shadow-xl p-8 border-t-4 border-convexo-purple">
              <h3 className="text-2xl font-bold text-convexo-navy mb-6">Quick Facts</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="bg-convexo-purple/10 rounded-lg p-3 mr-4">
                    <svg className="w-6 h-6 text-convexo-purple" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-convexo-navy">AI-Powered</h4>
                    <p className="text-gray-600">Advanced credit scoring technology</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-convexo-blue/10 rounded-lg p-3 mr-4">
                    <svg className="w-6 h-6 text-convexo-blue" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
                      <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-convexo-navy">NFT Certified</h4>
                    <p className="text-gray-600">Blockchain-verified evaluations</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-convexo-lightblue/20 rounded-lg p-3 mr-4">
                    <svg className="w-6 h-6 text-convexo-blue" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-convexo-navy">Fully Compliant</h4>
                    <p className="text-gray-600">Sumsub KYC/KYB verification</p>
                  </div>
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
            <h2 className="text-4xl font-bold text-convexo-navy mb-4">How It Works</h2>
            <p className="text-xl text-gray-600">A streamlined process from application to funding</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-gradient-to-br from-convexo-purple to-convexo-blue rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl text-white font-bold">1</span>
              </div>
              <h3 className="text-xl font-bold text-convexo-navy mb-3">Apply</h3>
              <p className="text-gray-600">
                Submit your application with company financials and documentation
              </p>
            </div>

            <div className="text-center">
              <div className="bg-gradient-to-br from-convexo-blue to-convexo-lightblue rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl text-white font-bold">2</span>
              </div>
              <h3 className="text-xl font-bold text-convexo-navy mb-3">Evaluation</h3>
              <p className="text-gray-600">
                AI-powered credit scoring and Sumsub compliance verification
              </p>
            </div>

            <div className="text-center">
              <div className="bg-gradient-to-br from-convexo-lightblue to-convexo-purple rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl text-white font-bold">3</span>
              </div>
              <h3 className="text-xl font-bold text-convexo-navy mb-3">NFT Certificate</h3>
              <p className="text-gray-600">
                Receive your blockchain-verified evaluation certificate
              </p>
            </div>

            <div className="text-center">
              <div className="bg-gradient-to-br from-convexo-purple to-convexo-navy rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl text-white font-bold">4</span>
              </div>
              <h3 className="text-xl font-bold text-convexo-navy mb-3">Get Funded</h3>
              <p className="text-gray-600">
                Access international capital markets and scale your operations
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-20 bg-convexo-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-convexo-navy mb-12 text-center">Key Features</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="bg-convexo-purple/10 rounded-lg w-16 h-16 flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-convexo-purple" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-convexo-navy mb-4">AI Credit Scoring</h3>
              <p className="text-gray-700 mb-4">
                Our proprietary AI algorithm analyzes multiple data points to generate accurate credit scores, ensuring fair evaluation of your enterprise's financial health and potential.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <span className="text-convexo-purple mr-2">•</span>
                  <span>Comprehensive financial analysis</span>
                </li>
                <li className="flex items-start">
                  <span className="text-convexo-purple mr-2">•</span>
                  <span>Industry-specific metrics</span>
                </li>
                <li className="flex items-start">
                  <span className="text-convexo-purple mr-2">•</span>
                  <span>Real-time scoring updates</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="bg-convexo-blue/10 rounded-lg w-16 h-16 flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-convexo-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-convexo-navy mb-4">Sumsub Compliance</h3>
              <p className="text-gray-700 mb-4">
                Complete KYC and KYB verification through Sumsub ensures all parties meet regulatory requirements and maintain the highest standards of compliance.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <span className="text-convexo-blue mr-2">•</span>
                  <span>Identity verification</span>
                </li>
                <li className="flex items-start">
                  <span className="text-convexo-blue mr-2">•</span>
                  <span>Business verification</span>
                </li>
                <li className="flex items-start">
                  <span className="text-convexo-blue mr-2">•</span>
                  <span>AML screening</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="bg-convexo-lightblue/20 rounded-lg w-16 h-16 flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-convexo-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-convexo-navy mb-4">NFT Certificates</h3>
              <p className="text-gray-700 mb-4">
                Each evaluation generates a unique NFT certificate stored on the blockchain, providing immutable proof of your credit assessment and compliance verification.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <span className="text-convexo-blue mr-2">•</span>
                  <span>Immutable verification</span>
                </li>
                <li className="flex items-start">
                  <span className="text-convexo-blue mr-2">•</span>
                  <span>Transferable credentials</span>
                </li>
                <li className="flex items-start">
                  <span className="text-convexo-blue mr-2">•</span>
                  <span>Transparent history</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="bg-convexo-purple/10 rounded-lg w-16 h-16 flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-convexo-purple" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-convexo-navy mb-4">International Funding</h3>
              <p className="text-gray-700 mb-4">
                Access global capital markets and secure funding from international investors looking to support solid LATAM enterprises with growth potential.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <span className="text-convexo-purple mr-2">•</span>
                  <span>Global investor access</span>
                </li>
                <li className="flex items-start">
                  <span className="text-convexo-purple mr-2">•</span>
                  <span>Competitive rates</span>
                </li>
                <li className="flex items-start">
                  <span className="text-convexo-purple mr-2">•</span>
                  <span>Flexible terms</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Who It's For */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-convexo-navy mb-4">Who It's For</h2>
            <p className="text-xl text-gray-600">Designed for established LATAM enterprises</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="bg-convexo-purple/10 rounded-full w-24 h-24 flex items-center justify-center mx-auto mb-6">
                <span className="text-4xl">🏢</span>
              </div>
              <h3 className="text-xl font-bold text-convexo-navy mb-3">Established Enterprises</h3>
              <p className="text-gray-600">
                Companies with proven track records and solid operational foundations seeking to scale
              </p>
            </div>

            <div className="text-center p-6">
              <div className="bg-convexo-blue/10 rounded-full w-24 h-24 flex items-center justify-center mx-auto mb-6">
                <span className="text-4xl">📈</span>
              </div>
              <h3 className="text-xl font-bold text-convexo-navy mb-3">Growth-Stage Companies</h3>
              <p className="text-gray-600">
                Businesses requiring working capital to expand operations and capture market opportunities
              </p>
            </div>

            <div className="text-center p-6">
              <div className="bg-convexo-lightblue/20 rounded-full w-24 h-24 flex items-center justify-center mx-auto mb-6">
                <span className="text-4xl">🌎</span>
              </div>
              <h3 className="text-xl font-bold text-convexo-navy mb-3">LATAM Focused</h3>
              <p className="text-gray-600">
                Latin American companies looking to access international capital markets
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-convexo-purple to-convexo-blue">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Access International Funding?
          </h2>
          <p className="text-xl text-convexo-lightblue mb-8">
            Start your evaluation today and unlock growth opportunities for your enterprise
          </p>
          <Link
            href="https://fund.convexo.xyz"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-white text-convexo-navy px-8 py-4 rounded-lg font-bold text-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
          >
            Start Application
          </Link>
        </div>
      </section>
    </div>
  );
}

