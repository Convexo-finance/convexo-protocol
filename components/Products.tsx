'use client';

import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext';

export default function Products() {
  const { t } = useLanguage();
  
  const products = [
    {
      titleKey: 'products.tokenizedBonds.title',
      icon: '🏦',
      descriptionKey: 'products.tokenizedBonds.description',
      featureKeys: [
        'products.tokenizedBonds.feature1',
        'products.tokenizedBonds.feature2',
        'products.tokenizedBonds.feature3',
        'products.tokenizedBonds.feature4',
        'products.tokenizedBonds.feature5',
      ],
      gradient: 'from-convexo-purple to-convexo-blue',
      href: '/products/tokenized-bonds',
    },
    {
      titleKey: 'products.treasury.title',
      icon: '💱',
      descriptionKey: 'products.treasury.description',
      featureKeys: [
        'products.treasury.feature1',
        'products.treasury.feature2',
        'products.treasury.feature3',
        'products.treasury.feature4',
        'products.treasury.feature5',
      ],
      gradient: 'from-convexo-blue to-convexo-lightblue',
      href: '/products/treasury',
    },
    {
      titleKey: 'products.stablecoins.title',
      icon: '🪙',
      descriptionKey: 'products.stablecoins.description',
      featureKeys: [
        'products.stablecoins.feature1',
        'products.stablecoins.feature2',
        'products.stablecoins.feature3',
        'products.stablecoins.feature4',
        'products.stablecoins.feature5',
      ],
      gradient: 'from-convexo-lightblue to-convexo-purple',
      href: '/products/stablecoins',
    },
    {
      titleKey: 'products.otc.title',
      icon: '🤝',
      descriptionKey: 'products.otc.description',
      featureKeys: [
        'products.otc.feature1',
        'products.otc.feature2',
        'products.otc.feature3',
        'products.otc.feature4',
        'products.otc.feature5',
      ],
      gradient: 'from-convexo-purple to-convexo-navy',
      href: '/products/otc',
    },
    {
      titleKey: 'products.payments.title',
      icon: '💳',
      descriptionKey: 'products.payments.description',
      featureKeys: [
        'products.payments.feature1',
        'products.payments.feature2',
        'products.payments.feature3',
        'products.payments.feature4',
        'products.payments.feature5',
      ],
      gradient: 'from-convexo-navy to-convexo-blue',
      href: '/products/payments',
    },
  ];

  return (
    <section id="products" className="py-24 bg-convexo-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-convexo-navy mb-4">
            {t('products.title')}
          </h2>
          <p className="text-xl text-convexo-blue max-w-3xl mx-auto">
            {t('products.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {products.map((product, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className={`h-2 bg-gradient-to-r ${product.gradient}`}></div>
              <div className="p-8">
                <div className="text-5xl mb-4">{product.icon}</div>
                <h3 className="text-3xl font-bold text-convexo-navy mb-4">
                  {t(product.titleKey)}
                </h3>
                <p className="text-convexo-blue mb-6 text-lg">
                  {t(product.descriptionKey)}
                </p>
                <ul className="space-y-3">
                  {product.featureKeys.map((featureKey, idx) => (
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
                <div className="mt-6 pt-6 border-t border-gray-200">
                  <Link
                    href={product.href}
                    className="inline-flex items-center text-convexo-purple hover:text-convexo-blue font-semibold transition-colors duration-200"
                  >
                    {t('products.learnMore')}
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

