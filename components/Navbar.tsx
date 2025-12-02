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
    { name: 'Tokenized Corporate Bonds', href: '/products/tokenized-bonds', icon: '🏦' },
    { name: 'Digital Assets Treasury', href: '/products/treasury', icon: '💱' },
    { name: 'Local Stablecoins', href: '/products/stablecoins', icon: '🪙' },
    { name: 'OTC Services', href: '/products/otc', icon: '🤝' },
    { name: 'Payments', href: '/products/payments', icon: '💳' },
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-convexo-navy/95 backdrop-blur-sm border-b border-convexo-blue/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0 flex items-center">
            <Image
              src="/branding/logologo.png"
              alt="Convexo Protocol"
              width={180}
              height={50}
              className="h-12 w-auto"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">


            {/* Language Toggle */}
            <button
              onClick={() => setLanguage(language === 'en' ? 'es' : 'en')}
              className="text-convexo-cream hover:text-convexo-lightblue transition-colors duration-200 font-medium flex items-center space-x-2"
              aria-label="Toggle language"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
              </svg>
              <span className="uppercase font-semibold">{language === 'en' ? 'ES' : 'EN'}</span>
            </button>

            {/* Home Link */}
            <Link
              href="/"
              className="text-convexo-cream hover:text-convexo-lightblue transition-colors duration-200 font-medium"
            >
              {t('nav.home')}
            </Link>

            {/* Products Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setIsProductsOpen(true)}
              onMouseLeave={() => setIsProductsOpen(false)}
            >
              <button
                className="text-convexo-cream hover:text-convexo-lightblue transition-colors duration-200 font-medium flex items-center"
              >
                {t('nav.products')}
                <svg 
                  className={`ml-1 w-4 h-4 transition-transform duration-200 ${isProductsOpen ? 'rotate-180' : ''}`}
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {/* Dropdown Menu */}
              {isProductsOpen && (
                <div className="absolute top-full left-0 mt-2 w-72 bg-white rounded-xl shadow-2xl overflow-hidden border border-convexo-blue/10">
                  <div className="py-2">
                    {products.map((product) => (
                      <Link
                        key={product.href}
                        href={product.href}
                        className="flex items-center px-4 py-3 hover:bg-convexo-cream transition-colors duration-150"
                      >
                        <span className="text-2xl mr-3">{product.icon}</span>
                        <span className="text-convexo-navy font-medium">{product.name}</span>
                      </Link>
                    ))}
                  </div>
                  <div className="border-t border-convexo-blue/10 bg-convexo-cream/50 px-4 py-3">
                    <Link 
                      href="/#products"
                      className="text-sm text-convexo-blue hover:text-convexo-purple font-medium"
                    >
                      {t('nav.viewAll')} →
                    </Link>
                  </div>
                </div>
              )}
            </div>

            <Link
              href="/about"
              className="text-convexo-cream hover:text-convexo-lightblue transition-colors duration-200 font-medium"
            >
              {t('nav.about')}
            </Link>

            <Link
              href="https://fund.convexo.xyz"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-convexo-purple to-convexo-blue text-white px-6 py-2.5 rounded-lg font-semibold hover:shadow-lg hover:shadow-convexo-purple/50 transition-all duration-300 transform hover:scale-105"
            >
              {t('nav.launchApp')}
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-convexo-cream p-2 rounded-md hover:bg-convexo-blue/20"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-convexo-navy border-t border-convexo-blue/20">
          <div className="px-4 pt-2 pb-4 space-y-2">
            {/* Home Link Mobile */}
            <Link
              href="/"
              onClick={() => setIsMenuOpen(false)}
              className="block w-full text-left px-4 py-3 text-convexo-cream hover:bg-convexo-blue/20 rounded-lg transition-colors duration-200 font-semibold"
            >
              {t('nav.home')}
            </Link>

            {/* Language Toggle Mobile */}
            <button
              onClick={() => {
                setLanguage(language === 'en' ? 'es' : 'en');
                setIsMenuOpen(false);
              }}
              className="flex items-center justify-center w-full px-4 py-3 text-convexo-cream bg-convexo-blue/20 rounded-lg transition-colors duration-200 space-x-2"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
              </svg>
              <span className="font-semibold">{language === 'en' ? 'Cambiar a Español' : 'Switch to English'}</span>
            </button>

            <div className="border-t border-convexo-blue/20 my-2"></div>

            {/* Mobile Products Section */}
            <div className="space-y-2">
              <div className="text-convexo-lightblue font-semibold px-4 py-2 text-sm uppercase tracking-wide">
                {t('nav.products')}
              </div>
              {products.map((product) => (
                <Link
                  key={product.href}
                  href={product.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="flex items-center px-4 py-3 text-convexo-cream hover:bg-convexo-blue/20 rounded-lg transition-colors duration-200"
                >
                  <span className="text-xl mr-3">{product.icon}</span>
                  <span className="text-sm">{product.name}</span>
                </Link>
              ))}
            </div>

            <div className="border-t border-convexo-blue/20 my-2"></div>

            <Link
              href="/about"
              onClick={() => setIsMenuOpen(false)}
              className="block w-full text-left px-4 py-3 text-convexo-cream hover:bg-convexo-blue/20 rounded-lg transition-colors duration-200"
            >
              {t('nav.about')}
            </Link>
            
            <Link
              href="https://fund.convexo.xyz"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full text-center bg-gradient-to-r from-convexo-purple to-convexo-blue text-white px-4 py-3 rounded-lg font-semibold mt-2"
            >
              {t('nav.launchApp')}
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
