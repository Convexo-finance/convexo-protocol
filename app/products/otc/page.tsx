'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useLanguage } from '@/contexts/LanguageContext';

export default function OTCPage() {
  const { t } = useLanguage();

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
              OTC Orders
            </h1>
            <p className="text-xl md:text-2xl text-convexo-lightblue mb-8 max-w-3xl mx-auto">
              Privacy-persistent cash-in and cash-out with secure cash delivery
            </p>
            <div className="inline-block bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700 p-4 rounded mb-8">
              <p className="font-semibold">Private ID verification required (zkPassport)</p>
            </div>
          </div>
        </div>
      </section>

      {/* Privacy Persistent Section */}
      <section className="py-20 bg-convexo-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center mb-6">
                <div className="relative w-16 h-16 mr-4">
                  <Image
                    src="/providers/zkpassportid.png"
                    alt="zkPassport"
                    fill
                    className="object-contain"
                  />
                </div>
                <h2 className="text-4xl font-bold text-convexo-navy">
                  Privacy Persistent with zkPassport
                </h2>
              </div>
              <p className="text-lg text-gray-700 mb-6">
                Our OTC service leverages zkPassport for privacy-persistent identity verification. Your identity is verified without exposing personal data, ensuring complete privacy while maintaining compliance.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                With zkPassport, you get a private persistent NFT that proves your identity without revealing sensitive information. This enables secure, private transactions while meeting all regulatory requirements.
              </p>
              <div className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="text-xl font-bold text-convexo-navy mb-4">How It Works</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-convexo-purple mr-3 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">Verify your identity once with zkPassport</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-convexo-purple mr-3 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">Receive a private persistent NFT as proof</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-convexo-purple mr-3 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">Use your verified identity for all OTC transactions</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-convexo-purple mr-3 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">Your personal data remains private and secure</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="bg-white rounded-2xl shadow-xl p-8 border-t-4 border-convexo-purple">
              <h3 className="text-2xl font-bold text-convexo-navy mb-6">Key Features</h3>
              <div className="space-y-6">
                <div>
                  <h4 className="text-xl font-semibold text-convexo-purple mb-2">1.5% Fixed Spread</h4>
                  <p className="text-gray-700">We charge a fixed spread of 1.5% over the market price from Google Finance (USD-COP). Transparent pricing with no hidden fees.</p>
                  <Link
                    href="https://www.google.com/finance/quote/USD-COP"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-convexo-blue hover:text-convexo-purple text-sm mt-2 inline-flex items-center"
                  >
                    View Market Price
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </Link>
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-convexo-purple mb-2">Secure Cash Delivery</h4>
                  <p className="text-gray-700">We deliver securely in cash. All transactions are handled with the highest security standards and verified delivery.</p>
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-convexo-purple mb-4">Contact Methods</h4>
                  <div className="flex items-center space-x-6">
                    <a href="#" className="hover:opacity-80 transition-opacity">
                      <div className="relative w-14 h-14">
                        <Image
                          src="/contacts/telegram.png"
                          alt="Telegram"
                          fill
                          className="object-contain"
                        />
                      </div>
                    </a>
                    <a href="#" className="hover:opacity-80 transition-opacity">
                      <div className="relative w-14 h-14">
                        <Image
                          src="/contacts/whatsapp.png"
                          alt="WhatsApp"
                          fill
                          className="object-contain"
                        />
                      </div>
                    </a>
                    <a href="#" className="hover:opacity-80 transition-opacity">
                      <div className="relative w-14 h-14">
                        <Image
                          src="/contacts/signal.png"
                          alt="Signal"
                          fill
                          className="object-contain"
                        />
                      </div>
                    </a>
                  </div>
                  <p className="text-sm text-gray-600 mt-3">Contact us via Telegram, WhatsApp, or Signal for private OTC orders</p>
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
            <h2 className="text-4xl font-bold text-convexo-navy mb-4">How OTC Orders Work</h2>
            <p className="text-xl text-gray-600">Simple process for secure transactions</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
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
              <h3 className="text-xl font-bold text-convexo-navy mb-3">Contact Us</h3>
              <p className="text-gray-600">
                Reach out via Telegram, WhatsApp, or Signal with your order details
              </p>
            </div>

            <div className="text-center">
              <div className="bg-gradient-to-br from-convexo-lightblue to-convexo-purple rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl text-white font-bold">3</span>
              </div>
              <h3 className="text-xl font-bold text-convexo-navy mb-3">Get Quote</h3>
              <p className="text-gray-600">
                Receive a quote based on market price (USD-COP) + 1.5% spread
              </p>
            </div>

            <div className="text-center">
              <div className="bg-gradient-to-br from-convexo-purple to-convexo-navy rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl text-white font-bold">4</span>
              </div>
              <h3 className="text-xl font-bold text-convexo-navy mb-3">Secure Delivery</h3>
              <p className="text-gray-600">
                Complete transaction with secure cash delivery or crypto transfer
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-convexo-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-convexo-navy mb-12 text-center">Benefits</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-white rounded-xl shadow-lg">
              <div className="bg-convexo-purple/10 rounded-full w-24 h-24 flex items-center justify-center mx-auto mb-6">
                <span className="text-4xl">🔒</span>
              </div>
              <h3 className="text-xl font-bold text-convexo-navy mb-3">Privacy Persistent</h3>
              <p className="text-gray-600">
                Your identity is verified with zkPassport without exposing personal data. Privacy is maintained throughout all transactions.
              </p>
            </div>

            <div className="text-center p-6 bg-white rounded-xl shadow-lg">
              <div className="bg-convexo-blue/10 rounded-full w-24 h-24 flex items-center justify-center mx-auto mb-6">
                <span className="text-4xl">💵</span>
              </div>
              <h3 className="text-xl font-bold text-convexo-navy mb-3">Secure Cash Delivery</h3>
              <p className="text-gray-600">
                We deliver securely in cash for your cash-out needs. All transactions are handled with the highest security standards.
              </p>
            </div>

            <div className="text-center p-6 bg-white rounded-xl shadow-lg">
              <div className="bg-convexo-lightblue/20 rounded-full w-24 h-24 flex items-center justify-center mx-auto mb-6">
                <span className="text-4xl">📱</span>
              </div>
              <h3 className="text-xl font-bold text-convexo-navy mb-3">Private Communication</h3>
              <p className="text-gray-600">
                Use Telegram, WhatsApp, or Signal for private, end-to-end encrypted communication with our OTC desk.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-convexo-purple via-convexo-navy to-convexo-blue">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready for Private OTC Trading?
          </h2>
          <p className="text-xl text-convexo-lightblue mb-8">
            Get your Private ID with zkPassport and start trading securely
          </p>
          <Link
            href="https://protocol.convexo.xyz"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-white text-convexo-navy px-8 py-4 rounded-lg font-bold text-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
          >
            Get Started
          </Link>
        </div>
      </section>
    </div>
  );
}
