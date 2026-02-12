'use client';

import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext';

export default function Products() {
  const { t } = useLanguage();

  const products = [
    {
      titleKey: 'products.digitalIds.title',
      descriptionKey: 'products.digitalIds.description',
      featureKeys: [
        'products.digitalIds.feature1',
        'products.digitalIds.feature2',
        'products.digitalIds.feature3',
        'products.digitalIds.feature4',
      ],
      href: '/products/digital-ids',
      tag: 'Identity',
    },
    {
      titleKey: 'products.treasury.title',
      descriptionKey: 'products.treasury.description',
      featureKeys: [
        'products.treasury.feature1',
        'products.treasury.feature2',
        'products.treasury.feature3',
        'products.treasury.feature4',
      ],
      href: '/products/treasury',
      tag: 'Treasury',
    },
    {
      titleKey: 'products.stablecoins.title',
      descriptionKey: 'products.stablecoins.description',
      featureKeys: [
        'products.stablecoins.feature1',
        'products.stablecoins.feature2',
        'products.stablecoins.feature3',
        'products.stablecoins.feature4',
      ],
      href: '/products/stablecoins',
      tag: 'Currency',
    },
    {
      titleKey: 'products.eloans.title',
      descriptionKey: 'products.eloans.description',
      featureKeys: [
        'products.eloans.feature1',
        'products.eloans.feature2',
        'products.eloans.feature3',
        'products.eloans.feature4',
      ],
      href: '/products/eloans',
      tag: 'Credit',
    },
    {
      titleKey: 'products.realEstateVaults.title',
      descriptionKey: 'products.realEstateVaults.description',
      featureKeys: [
        'products.realEstateVaults.feature1',
        'products.realEstateVaults.feature2',
        'products.realEstateVaults.feature3',
        'products.realEstateVaults.feature4',
      ],
      href: '/products/real-estate-vaults',
      tag: 'RWA',
    },
    {
      titleKey: 'products.p2pai.title',
      descriptionKey: 'products.p2pai.description',
      featureKeys: [
        'products.p2pai.feature1',
        'products.p2pai.feature2',
        'products.p2pai.feature3',
        'products.p2pai.feature4',
      ],
      href: '/products/p2pay',
      tag: 'Payments',
    },
  ];

  return (
    <section id="products" className="section-padding border-t border-border">
      <div className="section-container">
        {/* Header */}
        <div className="mb-16">
          <div className="heading-section mb-4">Solutions</div>
          <h2 className="heading-lg text-primary-text mb-4">
            {t('products.title')}
          </h2>
          <p className="body-text max-w-lg">
            {t('products.subtitle')}
          </p>
        </div>

        {/* Product grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-border rounded-lg overflow-hidden">
          {products.map((product, index) => (
            <Link
              key={index}
              href={product.href}
              className="bg-base p-7 hover:bg-surface-hover transition-colors duration-300 group cursor-pointer block"
            >
              {/* Tag */}
              <div className="text-[10px] font-semibold uppercase tracking-[0.2em] text-authority-blue mb-4">
                {product.tag}
              </div>

              {/* Title */}
              <h3 className="text-base font-medium text-primary-text mb-3 group-hover:text-data-blue transition-colors">
                {t(product.titleKey)}
              </h3>

              {/* Description */}
              <p className="text-xs text-muted-light leading-relaxed mb-5">
                {t(product.descriptionKey)}
              </p>

              {/* Features */}
              <ul className="space-y-2">
                {product.featureKeys.map((featureKey, idx) => (
                  <li key={idx} className="flex items-start text-xs">
                    <span className="w-1 h-1 rounded-full bg-authority-blue/80 mr-2.5 mt-1.5 flex-shrink-0" />
                    <span className="text-muted">{t(featureKey)}</span>
                  </li>
                ))}
              </ul>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
