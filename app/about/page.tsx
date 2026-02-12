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
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="relative section-padding pt-32 border-b border-border">
          <div className="absolute inset-0 bg-gradient-to-b from-accent-purple/8 via-base to-layer/30" />
          
          <div className="relative z-10 section-container">
            <div className="max-w-2xl">
              <div className="heading-section mb-6">About</div>
              <h1 className="heading-xl text-primary-text mb-6">
                Pioneering Institutional DeFi for Latin America
              </h1>
              <p className="text-base text-muted-light leading-relaxed">
                Building the bridge between traditional finance and decentralized financial systems
                with sovereign-grade infrastructure.
              </p>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="section-padding border-b border-border">
          <div className="section-container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              <div>
                <div className="heading-section mb-4">Mission</div>
                <h2 className="heading-lg text-primary-text mb-6">
                  Democratizing Access to Capital Markets
                </h2>
                <p className="body-text mb-4">
                  At Convexo Protocol, we&apos;re on a mission to democratize access to international capital markets for Latin American enterprises. We believe that solid, established businesses in LATAM deserve the same opportunities as their counterparts in developed markets.
                </p>
                <p className="body-text">
                  By combining cutting-edge blockchain technology with rigorous compliance standards, we&apos;re building the bridge between traditional finance and the future of decentralized financial systems.
                </p>
              </div>
              <div className="card p-8">
                <div className="heading-section mb-4">Vision</div>
                <h3 className="text-xl font-medium text-primary-text mb-4">Leading Institutional DeFi Platform</h3>
                <p className="body-text">
                  To become the leading institutional DeFi platform connecting LATAM enterprises with global capital markets, fostering economic growth and financial innovation across the region. We envision a future where geographical boundaries don&apos;t limit access to funding and where blockchain technology enables transparent, efficient, and inclusive financial services.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Story */}
        <section className="section-padding border-b border-border">
          <div className="section-container">
            <div className="max-w-3xl mx-auto">
              <div className="heading-section mb-6 text-center">Our Story</div>
              <h2 className="heading-lg text-primary-text mb-8 text-center">
                Founded on a Mission to Transform LATAM Finance
              </h2>
              <div className="space-y-6">
                <p className="body-text">
                  Founded in 2025, Convexo Protocol was born from a simple observation: Latin American enterprises face significant barriers when trying to access international capital markets. Traditional financial institutions often overlook the region, and when they do engage, the process is slow, expensive, and opaque.
                </p>
                <p className="body-text">
                  We knew there had to be a better way. By leveraging blockchain technology, artificial intelligence, and decentralized finance protocols, we set out to create a platform that would level the playing field. Our team brings together expertise in traditional finance, blockchain development, artificial intelligence, and regulatory compliance.
                </p>
                <p className="body-text">
                  Today, we&apos;re proud to offer a comprehensive suite of institutional DeFi solutions designed specifically for the LATAM market. From tokenized corporate bonds to local stablecoins, we&apos;re helping businesses access the funding they need to grow and thrive.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Approach */}
        <section className="section-padding border-b border-border">
          <div className="section-container">
            <div className="max-w-3xl mx-auto mb-12">
              <div className="heading-section mb-4 text-center">Our Approach</div>
              <h2 className="heading-lg text-primary-text mb-4 text-center">
                Four Pillars That Guide Everything We Do
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
              <div className="card p-6">
                <div className="w-10 h-10 rounded bg-authority-blue/10 flex items-center justify-center mb-4">
                  <svg className="w-5 h-5 text-authority-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-base font-medium text-primary-text mb-3">Compliance First</h3>
                <p className="text-sm text-muted-light leading-relaxed">
                  We prioritize regulatory compliance through rigorous KYC/KYB verification with Sumsub, ensuring all participants meet the highest standards. Our commitment to compliance builds trust and enables sustainable growth.
                </p>
              </div>

              <div className="card p-6">
                <div className="w-10 h-10 rounded bg-authority-blue/10 flex items-center justify-center mb-4">
                  <svg className="w-5 h-5 text-authority-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h3 className="text-base font-medium text-primary-text mb-3">AI-Powered Innovation</h3>
                <p className="text-sm text-muted-light leading-relaxed">
                  Our proprietary AI algorithms analyze multiple data points to generate accurate credit scores, enabling fair and transparent evaluation of enterprises. Each assessment is certified with an immutable NFT on the blockchain.
                </p>
              </div>

              <div className="card p-6">
                <div className="w-10 h-10 rounded bg-authority-blue/10 flex items-center justify-center mb-4">
                  <svg className="w-5 h-5 text-authority-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <h3 className="text-base font-medium text-primary-text mb-3">Enterprise Focus</h3>
                <p className="text-sm text-muted-light leading-relaxed">
                  We work exclusively with solid, established enterprises that have proven track records. Our focus is on businesses that need working capital to scale their current operations and capture market opportunities.
                </p>
              </div>

              <div className="card p-6">
                <div className="w-10 h-10 rounded bg-authority-blue/10 flex items-center justify-center mb-4">
                  <svg className="w-5 h-5 text-authority-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-base font-medium text-primary-text mb-3">Technology Leadership</h3>
                <p className="text-sm text-muted-light leading-relaxed">
                  We integrate with leading DeFi protocols including Uniswap V4 and Chainlink oracles, ensuring our platform leverages the most advanced and secure blockchain infrastructure available.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="section-padding border-b border-border">
          <div className="section-container">
            <div className="max-w-3xl mx-auto mb-12 text-center">
              <div className="heading-section mb-4">Impact by Numbers</div>
              <h2 className="heading-lg text-primary-text">Delivering Results at Scale</h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-medium text-primary-text mb-2">6</div>
                <div className="text-xs text-muted uppercase tracking-[0.15em]">Products</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-medium text-primary-text mb-2">100%</div>
                <div className="text-xs text-muted uppercase tracking-[0.15em]">Compliant</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-medium text-primary-text mb-2">24/7</div>
                <div className="text-xs text-muted uppercase tracking-[0.15em]">Available</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-medium text-primary-text mb-2">LATAM</div>
                <div className="text-xs text-muted uppercase tracking-[0.15em]">Focused</div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="section-padding border-b border-border">
          <div className="section-container">
            <div className="max-w-3xl mx-auto mb-12 text-center">
              <div className="heading-section mb-4">Why Convexo</div>
              <h2 className="heading-lg text-primary-text mb-4">Built for Institutional Excellence</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              <div className="card p-6 text-center">
                <div className="w-12 h-12 rounded bg-authority-blue/10 flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-authority-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <h3 className="text-base font-medium text-primary-text mb-3">Security & Trust</h3>
                <p className="text-sm text-muted-light leading-relaxed">
                  Institutional-grade security with complete regulatory compliance and transparent operations
                </p>
              </div>

              <div className="card p-6 text-center">
                <div className="w-12 h-12 rounded bg-authority-blue/10 flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-authority-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-base font-medium text-primary-text mb-3">Innovation</h3>
                <p className="text-sm text-muted-light leading-relaxed">
                  Cutting-edge AI and blockchain technology delivering superior financial solutions
                </p>
              </div>

              <div className="card p-6 text-center">
                <div className="w-12 h-12 rounded bg-authority-blue/10 flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-authority-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-base font-medium text-primary-text mb-3">LATAM Expertise</h3>
                <p className="text-sm text-muted-light leading-relaxed">
                  Deep understanding of Latin American markets and local business needs
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
                Ready to Transform Your Business?
              </h2>
              <p className="body-text mb-8">
                Join the future of institutional finance in Latin America
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

