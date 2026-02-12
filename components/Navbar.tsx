'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Link } from '@/navigation';
import { useTranslations } from 'next-intl';
import { LanguageSwitcher } from './LanguageSwitcher';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProductsOpen, setIsProductsOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileProductsExpanded, setIsMobileProductsExpanded] = useState(false);
  const [isMobileServicesExpanded, setIsMobileServicesExpanded] = useState(false);
  const t = useTranslations();

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  const products = [
    { nameKey: 'products.digitalIds.title', href: '/products/digital-ids' },
    { nameKey: 'products.stablecoins.title', href: '/products/stablecoins' },
    { nameKey: 'products.eloans.title', href: '/products/eloans' },
  ];

  const services = [
    { nameKey: 'products.treasury.title', href: '/products/treasury' },
    { nameKey: 'products.realEstateVaults.title', href: '/products/real-estate-vaults' },
    { nameKey: 'products.p2pai.title', href: '/products/p2pay' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-base/95 backdrop-blur-md border-b border-border w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex justify-between items-center h-16 w-full">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0 relative z-10">
            <Image
              src="/branding/convexoblanco.png"
              alt="Convexo"
              width={160}
              height={40}
              className="h-8 w-auto"
              priority
            />
          </Link>

          {/* Desktop Navigation - Right Side */}
          <div className="hidden lg:flex items-center gap-1">
            <Link
              href="/"
              className="px-3 py-2 text-[11px] font-medium uppercase tracking-[0.15em] text-primary-text/70 hover:text-primary-text hover:bg-surface-hover rounded-md transition-all duration-150"
            >
              {t('nav.home')}
            </Link>

            {/* Products Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setIsProductsOpen(true)}
              onMouseLeave={() => setIsProductsOpen(false)}
            >
              <button className="px-3 py-2 text-[11px] font-medium uppercase tracking-[0.15em] text-primary-text/70 hover:text-primary-text hover:bg-surface-hover rounded-md transition-all duration-150 flex items-center gap-1">
                {t('nav.products')}
                <svg
                  className={`w-3 h-3 transition-transform duration-200 ${isProductsOpen ? 'rotate-180' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {isProductsOpen && (
                <div className="absolute top-full right-0 mt-1 w-64">
                  <div className="bg-layer/95 backdrop-blur-sm border border-border rounded-lg overflow-hidden shadow-xl">
                    {products.map((product) => (
                      <Link
                        key={product.href}
                        href={product.href}
                        className="block px-4 py-3 text-sm text-primary-text/70 hover:text-primary-text hover:bg-surface-hover transition-all duration-150"
                      >
                        {t(product.nameKey)}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Services Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setIsServicesOpen(true)}
              onMouseLeave={() => setIsServicesOpen(false)}
            >
              <button className="px-3 py-2 text-[11px] font-medium uppercase tracking-[0.15em] text-primary-text/70 hover:text-primary-text hover:bg-surface-hover rounded-md transition-all duration-150 flex items-center gap-1">
                {t('nav.services')}
                <svg
                  className={`w-3 h-3 transition-transform duration-200 ${isServicesOpen ? 'rotate-180' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {isServicesOpen && (
                <div className="absolute top-full right-0 mt-1 w-64">
                  <div className="bg-layer/95 backdrop-blur-sm border border-border rounded-lg overflow-hidden shadow-xl">
                    {services.map((service) => (
                      <Link
                        key={service.href}
                        href={service.href}
                        className="block px-4 py-3 text-sm text-primary-text/70 hover:text-primary-text hover:bg-surface-hover transition-all duration-150"
                      >
                        {t(service.nameKey)}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <Link
              href="/technology"
              className="px-3 py-2 text-[11px] font-medium uppercase tracking-[0.15em] text-primary-text/70 hover:text-primary-text hover:bg-surface-hover rounded-md transition-all duration-150"
            >
              {t('nav.technology')}
            </Link>

            <Link
              href="/about"
              className="px-3 py-2 text-[11px] font-medium uppercase tracking-[0.15em] text-primary-text/70 hover:text-primary-text hover:bg-surface-hover rounded-md transition-all duration-150"
            >
              {t('nav.about')}
            </Link>

            <div className="ml-2">
              <LanguageSwitcher />
            </div>

            <Link
              href="https://protocol.convexo.xyz"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-2 btn-primary text-xs py-2 px-6"
            >
              {t('nav.launchApp')}
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden relative z-[102] p-2 text-primary-text/70 hover:text-primary-text transition-colors"
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden">
          {/* Backdrop */}
          <div 
            className="fixed inset-0 bg-black/80 z-[100]"
            onClick={() => setIsMenuOpen(false)}
            style={{ top: 0, left: 0, right: 0, bottom: 0 }}
          />
          
          {/* Slide-in Panel */}
          <div 
            className="fixed top-0 right-0 bottom-0 w-[320px] max-w-[85vw] bg-base border-l border-border shadow-2xl overflow-y-auto z-[101]"
            style={{ height: '100dvh' }}
          >
            {/* Header */}
            <div className="bg-base border-b border-border">
              <div className="flex items-center justify-between p-5">
                <span className="text-lg font-semibold text-primary-text tracking-wide">MENU</span>
                <button
                  onClick={() => setIsMenuOpen(false)}
                  className="p-2 -mr-2 text-primary-text/60 hover:text-primary-text hover:bg-surface-hover rounded-lg transition-colors"
                  aria-label="Close menu"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Navigation Links */}
            <div className="px-4 py-6 space-y-2">
              <Link
                href="/"
                onClick={() => setIsMenuOpen(false)}
                className="block px-4 py-3 text-sm font-medium text-primary-text hover:bg-surface-hover rounded-lg transition-colors"
              >
                HOME
              </Link>

              {/* Products Expandable */}
              <div>
                <button
                  onClick={() => setIsMobileProductsExpanded(!isMobileProductsExpanded)}
                  className="w-full flex items-center justify-between px-4 py-3 text-sm font-medium text-primary-text hover:bg-surface-hover rounded-lg transition-colors"
                >
                  <span>PRODUCTS</span>
                  <svg
                    className={`w-4 h-4 flex-shrink-0 transition-transform duration-200 ${isMobileProductsExpanded ? 'rotate-180' : ''}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {isMobileProductsExpanded && (
                  <div className="pl-4 pr-2 pt-1 pb-2 space-y-1">
                    {products.map((product) => (
                      <Link
                        key={product.href}
                        href={product.href}
                        onClick={() => {
                          setIsMenuOpen(false);
                          setIsMobileProductsExpanded(false);
                        }}
                        className="block px-4 py-2.5 text-sm text-primary-text/70 hover:text-primary-text hover:bg-surface-hover rounded-lg transition-colors"
                      >
                        {t(product.nameKey)}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* Services Expandable */}
              <div>
                <button
                  onClick={() => setIsMobileServicesExpanded(!isMobileServicesExpanded)}
                  className="w-full flex items-center justify-between px-4 py-3 text-sm font-medium text-primary-text hover:bg-surface-hover rounded-lg transition-colors"
                >
                  <span>SERVICES</span>
                  <svg
                    className={`w-4 h-4 flex-shrink-0 transition-transform duration-200 ${isMobileServicesExpanded ? 'rotate-180' : ''}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {isMobileServicesExpanded && (
                  <div className="pl-4 pr-2 pt-1 pb-2 space-y-1">
                    {services.map((service) => (
                      <Link
                        key={service.href}
                        href={service.href}
                        onClick={() => {
                          setIsMenuOpen(false);
                          setIsMobileServicesExpanded(false);
                        }}
                        className="block px-4 py-2.5 text-sm text-primary-text/70 hover:text-primary-text hover:bg-surface-hover rounded-lg transition-colors"
                      >
                        {t(service.nameKey)}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <Link
                href="/technology"
                onClick={() => setIsMenuOpen(false)}
                className="block px-4 py-3 text-sm font-medium text-primary-text hover:bg-surface-hover rounded-lg transition-colors"
              >
                TECHNOLOGY
              </Link>

              <Link
                href="/about"
                onClick={() => setIsMenuOpen(false)}
                className="block px-4 py-3 text-sm font-medium text-primary-text hover:bg-surface-hover rounded-lg transition-colors"
              >
                ABOUT
              </Link>
            </div>

            {/* Bottom Section */}
            <div className="border-t border-border mt-4">
              <div className="p-5 space-y-4">
                <div className="flex items-center justify-center">
                  <LanguageSwitcher />
                </div>
                <Link
                  href="https://protocol.convexo.xyz"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsMenuOpen(false)}
                  className="block btn-primary text-center text-sm py-3 font-medium"
                >
                  {t('nav.launchApp')}
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
