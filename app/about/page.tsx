import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'About Us | Convexo Protocol',
  description: 'Learn about Convexo Protocol - pioneering institutional DeFi solutions for Latin American enterprises with AI-powered credit scoring and blockchain technology.',
};

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-20">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-convexo-navy via-convexo-blue to-convexo-purple py-24">
          <div className="absolute inset-0 opacity-5">
            <div className="absolute inset-0" style={{
              backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
              backgroundSize: '40px 40px'
            }}></div>
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              About Convexo Protocol
            </h1>
            <p className="text-xl md:text-2xl text-convexo-lightblue max-w-3xl mx-auto">
              Pioneering institutional DeFi solutions for Latin America
            </p>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold text-convexo-navy mb-6">
                  Our Mission
                </h2>
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  At Convexo Protocol, we're on a mission to democratize access to international capital markets for Latin American enterprises. We believe that solid, established businesses in LATAM deserve the same opportunities as their counterparts in developed markets.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  By combining cutting-edge blockchain technology with rigorous compliance standards, we're building the bridge between traditional finance and the future of decentralized financial systems.
                </p>
              </div>
              <div className="bg-convexo-cream rounded-2xl p-8">
                <h3 className="text-3xl font-bold text-convexo-purple mb-6">Our Vision</h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                  To become the leading institutional DeFi platform connecting LATAM enterprises with global capital markets, fostering economic growth and financial innovation across the region. We envision a future where geographical boundaries don't limit access to funding and where blockchain technology enables transparent, efficient, and inclusive financial services.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Story */}
        <section className="py-20 bg-convexo-cream">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-convexo-navy mb-4">Our Story</h2>
              <div className="w-24 h-1 bg-convexo-purple mx-auto"></div>
            </div>
            <div className="max-w-4xl mx-auto">
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Founded in 2025, Convexo Protocol was born from a simple observation: Latin American enterprises face significant barriers when trying to access international capital markets. Traditional financial institutions often overlook the region, and when they do engage, the process is slow, expensive, and opaque.
              </p>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                We knew there had to be a better way. By leveraging blockchain technology, artificial intelligence, and decentralized finance protocols, we set out to create a platform that would level the playing field. Our team brings together expertise in traditional finance, blockchain development, artificial intelligence, and regulatory compliance.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Today, we're proud to offer a comprehensive suite of institutional DeFi solutions designed specifically for the LATAM market. From tokenized corporate bonds to local stablecoins, we're helping businesses access the funding they need to grow and thrive.
              </p>
            </div>
          </div>
        </section>

        {/* Our Approach */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-convexo-navy mb-4">Our Approach</h2>
              <p className="text-xl text-gray-600">Four pillars that guide everything we do</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-convexo-cream rounded-xl p-8">
                <div className="bg-convexo-purple/10 rounded-lg w-16 h-16 flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-convexo-purple" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-convexo-navy mb-4">Compliance First</h3>
                <p className="text-gray-700">
                  We prioritize regulatory compliance through rigorous KYC/KYB verification with Sumsub, ensuring all participants meet the highest standards. Our commitment to compliance builds trust and enables sustainable growth.
                </p>
              </div>

              <div className="bg-convexo-cream rounded-xl p-8">
                <div className="bg-convexo-blue/10 rounded-lg w-16 h-16 flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-convexo-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-convexo-navy mb-4">AI-Powered Innovation</h3>
                <p className="text-gray-700">
                  Our proprietary AI algorithms analyze multiple data points to generate accurate credit scores, enabling fair and transparent evaluation of enterprises. Each assessment is certified with an immutable NFT on the blockchain.
                </p>
              </div>

              <div className="bg-convexo-cream rounded-xl p-8">
                <div className="bg-convexo-lightblue/20 rounded-lg w-16 h-16 flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-convexo-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-convexo-navy mb-4">Enterprise Focus</h3>
                <p className="text-gray-700">
                  We work exclusively with solid, established enterprises that have proven track records. Our focus is on businesses that need working capital to scale their current operations and capture market opportunities.
                </p>
              </div>

              <div className="bg-convexo-cream rounded-xl p-8">
                <div className="bg-convexo-purple/10 rounded-lg w-16 h-16 flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-convexo-purple" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-convexo-navy mb-4">Technology Leadership</h3>
                <p className="text-gray-700">
                  We integrate with leading DeFi protocols including Uniswap V4 and Chainlink oracles, ensuring our platform leverages the most advanced and secure blockchain infrastructure available.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="py-20 bg-gradient-to-r from-convexo-purple via-convexo-navy to-convexo-blue">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-white mb-4">Impact by Numbers</h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-5xl font-bold text-convexo-cream mb-2">5</div>
                <div className="text-convexo-lightblue text-lg">Products</div>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold text-convexo-cream mb-2">100%</div>
                <div className="text-convexo-lightblue text-lg">Compliant</div>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold text-convexo-cream mb-2">24/7</div>
                <div className="text-convexo-lightblue text-lg">Support</div>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold text-convexo-cream mb-2">LATAM</div>
                <div className="text-convexo-lightblue text-lg">Focused</div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-convexo-navy mb-4">Why Choose Convexo</h2>
              <p className="text-xl text-gray-600">The best of both worlds</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center p-6">
                <div className="bg-convexo-purple/10 rounded-full w-24 h-24 flex items-center justify-center mx-auto mb-6">
                  <span className="text-4xl">🔒</span>
                </div>
                <h3 className="text-xl font-bold text-convexo-navy mb-3">Security & Trust</h3>
                <p className="text-gray-600">
                  Institutional-grade security with complete regulatory compliance and transparent operations
                </p>
              </div>

              <div className="text-center p-6">
                <div className="bg-convexo-blue/10 rounded-full w-24 h-24 flex items-center justify-center mx-auto mb-6">
                  <span className="text-4xl">🚀</span>
                </div>
                <h3 className="text-xl font-bold text-convexo-navy mb-3">Innovation</h3>
                <p className="text-gray-600">
                  Cutting-edge AI and blockchain technology delivering superior financial solutions
                </p>
              </div>

              <div className="text-center p-6">
                <div className="bg-convexo-lightblue/20 rounded-full w-24 h-24 flex items-center justify-center mx-auto mb-6">
                  <span className="text-4xl">🌎</span>
                </div>
                <h3 className="text-xl font-bold text-convexo-navy mb-3">LATAM Expertise</h3>
                <p className="text-gray-600">
                  Deep understanding of Latin American markets and local business needs
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-convexo-cream">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-bold text-convexo-navy mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-700 mb-8">
              Join the future of institutional finance in Latin America
            </p>
            <Link
              href="https://fund.convexo.xyz"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-gradient-to-r from-convexo-purple to-convexo-blue text-white px-8 py-4 rounded-lg font-bold text-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
            >
              Get Started
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

