'use client';

import Link from 'next/link';
import Image from 'next/image';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useLanguage } from '@/contexts/LanguageContext';

export default function OTCPage() {
  const { t } = useLanguage();

  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="relative section-padding pt-32 border-b border-border">
          <div className="absolute inset-0 bg-gradient-to-b from-accent-purple/8 via-base to-layer/30" />
          
          <div className="relative z-10 section-container">
            <div className="max-w-2xl">
              <div className="heading-section mb-6">OTC Orders</div>
              <h1 className="heading-xl text-primary-text mb-6">
                Privacy-Persistent Cash-In and Cash-Out
              </h1>
              <p className="text-base text-muted-light leading-relaxed mb-6">
                Secure OTC trading with privacy-persistent identity verification powered by zkPassport.
                Complete cash delivery service for institutional clients.
              </p>
              <div className="inline-block bg-authority-blue/10 border-l-2 border-authority-blue px-4 py-3 rounded">
                <p className="text-sm font-medium text-primary-text">Private ID verification required (zkPassport)</p>
              </div>
            </div>
          </div>
        </section>

        {/* Privacy Persistent Section */}
        <section className="section-padding border-b border-border">
          <div className="section-container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <div className="flex items-center gap-4 mb-6">
                  <div className="relative w-12 h-12">
                    <Image
                      src="/providers/zkpassportid.png"
                      alt="zkPassport"
                      fill
                      className="object-contain opacity-80"
                    />
                  </div>
                  <h2 className="heading-lg text-primary-text">
                    Privacy Persistent with zkPassport
                  </h2>
                </div>
                <p className="body-text mb-6">
                  Our OTC service leverages zkPassport for privacy-persistent identity verification. Your identity is verified without exposing personal data, ensuring complete privacy while maintaining compliance.
                </p>
                <p className="body-text mb-8">
                  With zkPassport, you get a private persistent NFT that proves your identity without revealing sensitive information. This enables secure, private transactions while meeting all regulatory requirements.
                </p>
                <div className="card p-6">
                  <h3 className="text-base font-medium text-primary-text mb-4">How It Works</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <svg className="w-4 h-4 text-authority-blue mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-sm text-muted-light">Verify your identity once with zkPassport</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <svg className="w-4 h-4 text-authority-blue mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-sm text-muted-light">Receive a private persistent NFT as proof</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <svg className="w-4 h-4 text-authority-blue mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-sm text-muted-light">Use your verified identity for all OTC transactions</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <svg className="w-4 h-4 text-authority-blue mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-sm text-muted-light">Your personal data remains private and secure</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="card p-8">
                <h3 className="text-lg font-medium text-primary-text mb-6">Key Features</h3>
                <div className="space-y-6">
                  <div>
                    <h4 className="text-base font-medium text-authority-blue mb-2">1.5% Fixed Spread</h4>
                    <p className="text-sm text-muted-light mb-2">
                      We charge a fixed spread of 1.5% over the market price from Google Finance (USD-COP). Transparent pricing with no hidden fees.
                    </p>
                    <Link
                      href="https://www.google.com/finance/quote/USD-COP"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-authority-blue hover:text-data-blue inline-flex items-center gap-1"
                    >
                      View Market Price
                      <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </Link>
                  </div>
                  <div className="pt-6 border-t border-border">
                    <h4 className="text-base font-medium text-authority-blue mb-2">Secure Cash Delivery</h4>
                    <p className="text-sm text-muted-light">
                      We deliver securely in cash. All transactions are handled with the highest security standards and verified delivery.
                    </p>
                  </div>
                  <div className="pt-6 border-t border-border">
                    <h4 className="text-base font-medium text-authority-blue mb-4">Contact Methods</h4>
                    <div className="flex items-center gap-4 mb-3">
                      <div className="relative w-10 h-10 opacity-70 hover:opacity-100 transition-opacity">
                        <Image
                          src="/contacts/telegram.png"
                          alt="Telegram"
                          fill
                          className="object-contain"
                        />
                      </div>
                      <div className="relative w-10 h-10 opacity-70 hover:opacity-100 transition-opacity">
                        <Image
                          src="/contacts/whatsapp.png"
                          alt="WhatsApp"
                          fill
                          className="object-contain"
                        />
                      </div>
                      <div className="relative w-10 h-10 opacity-70 hover:opacity-100 transition-opacity">
                        <Image
                          src="/contacts/signal.png"
                          alt="Signal"
                          fill
                          className="object-contain"
                        />
                      </div>
                    </div>
                    <p className="text-xs text-muted">Contact us via Telegram, WhatsApp, or Signal for private OTC orders</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="section-padding border-b border-border">
          <div className="section-container">
            <div className="max-w-3xl mx-auto mb-12 text-center">
              <div className="heading-section mb-4">Process</div>
              <h2 className="heading-lg text-primary-text mb-4">
                How OTC Orders Work
              </h2>
              <p className="body-text">
                Simple process for secure transactions
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
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
                <h3 className="text-base font-medium text-primary-text mb-2">Contact Us</h3>
                <p className="text-sm text-muted-light">
                  Reach out via Telegram, WhatsApp, or Signal with your order details
                </p>
              </div>

              <div className="card p-6 text-center">
                <div className="w-12 h-12 rounded bg-authority-blue/10 flex items-center justify-center mx-auto mb-4">
                  <span className="text-lg font-medium text-authority-blue">3</span>
                </div>
                <h3 className="text-base font-medium text-primary-text mb-2">Get Quote</h3>
                <p className="text-sm text-muted-light">
                  Receive a quote based on market price (USD-COP) + 1.5% spread
                </p>
              </div>

              <div className="card p-6 text-center">
                <div className="w-12 h-12 rounded bg-authority-blue/10 flex items-center justify-center mx-auto mb-4">
                  <span className="text-lg font-medium text-authority-blue">4</span>
                </div>
                <h3 className="text-base font-medium text-primary-text mb-2">Secure Delivery</h3>
                <p className="text-sm text-muted-light">
                  Complete transaction with secure cash delivery or crypto transfer
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="section-padding border-b border-border">
          <div className="section-container">
            <div className="max-w-3xl mx-auto mb-12 text-center">
              <div className="heading-section mb-4">Benefits</div>
              <h2 className="heading-lg text-primary-text mb-4">
                Private & Secure Trading
              </h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <div className="card p-6 text-center">
                <div className="w-12 h-12 rounded bg-authority-blue/10 flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-authority-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <h3 className="text-base font-medium text-primary-text mb-2">Privacy Persistent</h3>
                <p className="text-sm text-muted-light">
                  Your identity is verified with zkPassport without exposing personal data. Privacy is maintained throughout all transactions.
                </p>
              </div>

              <div className="card p-6 text-center">
                <div className="w-12 h-12 rounded bg-authority-blue/10 flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-authority-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-base font-medium text-primary-text mb-2">Secure Cash Delivery</h3>
                <p className="text-sm text-muted-light">
                  We deliver securely in cash for your cash-out needs. All transactions are handled with the highest security standards.
                </p>
              </div>

              <div className="card p-6 text-center">
                <div className="w-12 h-12 rounded bg-authority-blue/10 flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-authority-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                </div>
                <h3 className="text-base font-medium text-primary-text mb-2">Private Communication</h3>
                <p className="text-sm text-muted-light">
                  Use Telegram, WhatsApp, or Signal for private, end-to-end encrypted communication with our OTC desk.
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
                Ready for Private OTC Trading?
              </h2>
              <p className="body-text mb-8">
                Get your Private ID with zkPassport and start trading securely
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
