'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProductsOpen, setIsProductsOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  const products = [
    { name: 'Digital IDs', href: '/products/digital-ids' },
    { name: 'Treasury Services', href: '/products/treasury' },
    { name: 'Stablecoins', href: '/products/stablecoins' },
    { name: 'E-LOANS', href: '/products/eloans' },
    { name: 'Real Estate Vaults', href: '/products/real-estate-vaults' },
    { name: 'P2Pay', href: '/products/p2pay' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-base/90 backdrop-blur-sm border-b border-border">
      <div className="section-container">
        <div className="flex justify-between items-center h-14">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <Image
              src="/branding/convexohorizontal.png"
              alt="Convexo"
              width={140}
              height={36}
              className="h-6 w-auto opacity-90"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="/"
              className="text-xs font-medium uppercase tracking-[0.15em] text-primary-text/70 hover:text-primary-text transition-colors duration-150"
            >
              {t('nav.home')}
            </Link>

            {/* Products Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setIsProductsOpen(true)}
              onMouseLeave={() => setIsProductsOpen(false)}
            >
              <button className="text-xs font-medium uppercase tracking-[0.15em] text-primary-text/70 hover:text-primary-text transition-colors duration-150 flex items-center">
                {t('nav.products')}
                <svg
                  className={`ml-1 w-3 h-3 transition-transform duration-150 ${isProductsOpen ? 'rotate-180' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {isProductsOpen && (
                <div className="absolute top-full left-0 mt-1 w-52 bg-layer border border-border rounded-lg overflow-hidden shadow-2xl shadow-black/20">
                  <div className="py-1">
                    {products.map((product) => (
                      <Link
                        key={product.href}
                        href={product.href}
                        className="block px-4 py-2.5 text-xs text-primary-text/60 hover:text-primary-text hover:bg-surface-hover transition-colors duration-100"
                      >
                        {product.name}
                      </Link>
                    ))}
                  </div>
                  <div className="border-t border-border px-4 py-2.5">
                    <Link
                      href="/#products"
                      className="text-xs text-data-blue hover:text-primary-text transition-colors"
                    >
                      {t('nav.viewAll')} &rarr;
                    </Link>
                  </div>
                </div>
              )}
            </div>

            <Link
              href="/technology"
              className="text-xs font-medium uppercase tracking-[0.15em] text-primary-text/70 hover:text-primary-text transition-colors duration-150"
            >
              Technology
            </Link>

            <Link
              href="/about"
              className="text-xs font-medium uppercase tracking-[0.15em] text-primary-text/70 hover:text-primary-text transition-colors duration-150"
            >
              {t('nav.about')}
            </Link>

            {/* Language */}
            <button
              onClick={() => setLanguage(language === 'en' ? 'es' : 'en')}
              className="text-xs font-medium text-primary-text/40 hover:text-primary-text/70 transition-colors duration-150 uppercase tracking-[0.15em]"
            >
              {language === 'en' ? 'ES' : 'EN'}
            </button>

            <Link
              href="https://protocol.convexo.xyz"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-xs py-2 px-5"
            >
              {t('nav.launchApp')}
            </Link>
          </div>

          {/* Mobile */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-muted p-2"
            >
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-layer border-t border-border">
          <div className="px-6 py-5 space-y-1">
            <Link
              href="/"
              onClick={() => setIsMenuOpen(false)}
              className="block py-2.5 text-xs font-medium uppercase tracking-[0.15em] text-primary-text"
            >
              {t('nav.home')}
            </Link>

            <div className="py-3">
              <div className="heading-section text-[10px] mb-3">{t('nav.products')}</div>
              {products.map((product) => (
                <Link
                  key={product.href}
                  href={product.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="block py-2 text-xs text-muted hover:text-primary-text"
                >
                  {product.name}
                </Link>
              ))}
            </div>

            <div className="divider" />

            <Link
              href="/technology"
              onClick={() => setIsMenuOpen(false)}
              className="block py-2.5 text-xs font-medium uppercase tracking-[0.15em] text-primary-text"
            >
              Technology
            </Link>

            <Link
              href="/about"
              onClick={() => setIsMenuOpen(false)}
              className="block py-2.5 text-xs font-medium uppercase tracking-[0.15em] text-primary-text"
            >
              {t('nav.about')}
            </Link>

            <div className="flex items-center gap-4 pt-3">
              <button
                onClick={() => {
                  setLanguage(language === 'en' ? 'es' : 'en');
                  setIsMenuOpen(false);
                }}
                className="text-xs text-muted"
              >
                {language === 'en' ? 'Español' : 'English'}
              </button>
            </div>

            <div className="pt-4">
              <Link
                href="https://protocol.convexo.xyz"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary w-full text-center text-xs"
              >
                {t('nav.launchApp')}
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
