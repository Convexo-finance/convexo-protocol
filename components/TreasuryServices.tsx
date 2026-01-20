'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext';

export default function TreasuryServices() {
  const { t } = useLanguage();

  const services = [
    {
      titleKey: 'treasury.otc.title',
      descriptionKey: 'treasury.otc.description',
      icon: '🤝',
      features: [
        'treasury.otc.feature1',
        'treasury.otc.feature2',
        'treasury.otc.feature3',
        'treasury.otc.feature4',
      ],
      contactMethods: [
        { logo: '/contacts/telegram.png', alt: 'Telegram', link: '#' },
        { logo: '/contacts/whatsapp.png', alt: 'WhatsApp', link: '#' },
        { logo: '/contacts/signal.png', alt: 'Signal', link: '#' },
      ],
      gradient: 'from-convexo-purple to-convexo-blue',
      requirement: 'treasury.otc.requirement',
    },
    {
      titleKey: 'treasury.swaps.title',
      descriptionKey: 'treasury.swaps.description',
      icon: '🔄',
      features: [
        'treasury.swaps.feature1',
        'treasury.swaps.feature2',
        'treasury.swaps.feature3',
        'treasury.swaps.feature4',
      ],
      provider: { logo: '/providers/uniswap.png', alt: 'Uniswap', link: 'https://uniswap.org' },
      gradient: 'from-convexo-blue to-convexo-lightblue',
      requirement: 'treasury.swaps.requirement',
    },
    {
      titleKey: 'treasury.monetization.title',
      descriptionKey: 'treasury.monetization.description',
      icon: '💱',
      features: [
        'treasury.monetization.feature1',
        'treasury.monetization.feature2',
        'treasury.monetization.feature3',
      ],
      provider: { logo: '/providers/chainlink.png', alt: 'Chainlink', link: 'https://chainlink.com' },
      gradient: 'from-convexo-lightblue to-convexo-purple',
      requirement: 'treasury.monetization.requirement',
    },
  ];

  return (
    <section id="treasury" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-convexo-navy mb-4">
            {t('treasury.title')}
          </h2>
          <p className="text-xl text-convexo-blue max-w-3xl mx-auto">
            {t('treasury.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-convexo-cream rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className={`h-2 bg-gradient-to-r ${service.gradient}`}></div>
              <div className="p-8">
                <div className="text-5xl mb-4">{service.icon}</div>
                <h3 className="text-2xl font-bold text-convexo-navy mb-4">
                  {t(service.titleKey)}
                </h3>
                <p className="text-convexo-blue mb-6 text-lg">
                  {t(service.descriptionKey)}
                </p>

                {service.contactMethods && (
                  <div className="flex items-center space-x-4 mb-6">
                    <span className="text-sm text-gray-600">{t('treasury.otc.contactVia')}:</span>
                    {service.contactMethods.map((method, idx) => (
                      <div key={idx} className="relative w-10 h-10 hover:scale-110 transition-transform">
                        <Image
                          src={method.logo}
                          alt={method.alt}
                          fill
                          className="object-contain"
                        />
                      </div>
                    ))}
                  </div>
                )}

                {service.provider && (
                  <div className="mb-6">
                    <Link
                      href={service.provider.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center space-x-2 hover:opacity-80 transition-opacity"
                    >
                      <div className="relative w-24 h-12">
                        <Image
                          src={service.provider.logo}
                          alt={service.provider.alt}
                          fill
                          className="object-contain"
                        />
                      </div>
                    </Link>
                  </div>
                )}

                <ul className="space-y-3 mb-6">
                  {service.features.map((featureKey, idx) => (
                    <li key={idx} className="flex items-start">
                      <svg
                        className="w-6 h-6 text-convexo-purple mr-3 flex-shrink-0 mt-0.5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="text-gray-700">{t(featureKey)}</span>
                    </li>
                  ))}
                </ul>

                {service.requirement && (
                  <div className="pt-6 border-t border-gray-200">
                    <p className="text-sm text-gray-600">
                      <span className="font-semibold">{t('treasury.requirement')}:</span> {t(service.requirement)}
                    </p>
                  </div>
                )}

                <div className="mt-6 pt-6 border-t border-gray-200">
                  <Link
                    href="/products/treasury"
                    className="inline-flex items-center text-convexo-purple hover:text-convexo-blue font-semibold transition-colors duration-200"
                  >
                    {t('treasury.learnMore')}
                    <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
