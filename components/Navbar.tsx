'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Link } from '@/navigation';
import { useTranslations } from 'next-intl';
import { LanguageSwitcher } from './LanguageSwitcher';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProductsOpen, setIsProductsOpen] = useState(false);
  const t = useTranslations();

  const products = [
    { nameKey: 'products.digitalIds.title', href: '/products/digital-ids' },
    { nameKey: 'products.treasury.title', href: '/products/treasury' },
    { nameKey: 'products.stablecoins.title', href: '/products/stablecoins' },
    { nameKey: 'products.eloans.title', href: '/products/eloans' },
    { nameKey: 'products.realEstateVaults.title', href: '/products/real-estate-vaults' },
    { nameKey: 'products.p2pai.title', href: '/products/p2pay' },
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
              width={160}
              height={40}
              className="h-7 sm:h-8 w-auto opacity-90"
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
              className="relative group"
              onMouseEnter={() => setIsProductsOpen(true)}
              onMouseLeave={() => setIsProductsOpen(false)}
            >
              <button className="text-xs font-medium uppercase tracking-[0.15em] text-primary-text/70 hover:text-primary-text transition-colors duration-150 flex items-center py-2">
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
                <div className="absolute top-full left-0 pt-2 w-52">
                  <div className="bg-layer border border-border rounded-lg overflow-hidden shadow-2xl shadow-black/20">
                    <div className="py-1">
                      {products.map((product) => (
                        <Link
                          key={product.href}
                          href={product.href}
                          className="block px-4 py-2.5 text-xs text-primary-text/60 hover:text-primary-text hover:bg-surface-hover transition-colors duration-100"
                        >
                          {t(product.nameKey)}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>

            <Link
              href="/technology"
              className="text-xs font-medium uppercase tracking-[0.15em] text-primary-text/70 hover:text-primary-text transition-colors duration-150"
            >
              {t('nav.technology')}
            </Link>

            <Link
              href="/about"
              className="text-xs font-medium uppercase tracking-[0.15em] text-primary-text/70 hover:text-primary-text transition-colors duration-150"
            >
              {t('nav.about')}
            </Link>

            {/* Language Switcher */}
            <LanguageSwitcher />

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
          <div className="px-5 py-4 space-y-1">
            <Link
              href="/"
              onClick={() => setIsMenuOpen(false)}
              className="block py-3 text-sm font-medium text-primary-text active:bg-surface-hover transition-colors rounded-md"
            >
              {t('nav.home')}
            </Link>

            <div className="py-2">
              <div className="heading-section text-[10px] mb-2 px-0">{t('nav.products')}</div>
              <div className="space-y-0.5">
                {products.map((product) => (
                  <Link
                    key={product.href}
                    href={product.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="block py-2.5 px-3 text-sm text-muted hover:text-primary-text hover:bg-surface-hover active:bg-surface-hover transition-colors rounded-md"
                  >
                    {t(product.nameKey)}
                  </Link>
                ))}
              </div>
            </div>

            <div className="divider my-3" />

            <Link
              href="/technology"
              onClick={() => setIsMenuOpen(false)}
              className="block py-3 text-sm font-medium text-primary-text active:bg-surface-hover transition-colors rounded-md"
            >
              {t('nav.technology')}
            </Link>

            <Link
              href="/about"
              onClick={() => setIsMenuOpen(false)}
              className="block py-3 text-sm font-medium text-primary-text active:bg-surface-hover transition-colors rounded-md"
            >
              {t('nav.about')}
            </Link>

            <div className="flex items-center gap-4 pt-2 pb-1">
              <LanguageSwitcher />
            </div>

            <div className="pt-3 pb-2">
              <Link
                href="https://protocol.convexo.xyz"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsMenuOpen(false)}
                className="btn-primary w-full text-center text-sm py-3 block"
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
