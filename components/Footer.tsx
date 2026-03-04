'use client';

import { Link } from '@/navigation';
import Image from 'next/image';
import { useTranslations } from 'next-intl';

export default function Footer() {
  const t = useTranslations();

  const productLinks = [
    { nameKey: 'products.digitalIds.title', href: '/products/digital-ids' },
    { nameKey: 'products.treasury.title', href: '/products/treasury' },
    { nameKey: 'products.stablecoins.title', href: '/products/stablecoins' },
    { nameKey: 'products.eloans.title', href: '/products/eloans' },
    { nameKey: 'products.realEstateVaults.title', href: '/products/real-estate-vaults' },
    { nameKey: 'products.p2pai.title', href: '/products/p2pay' },
  ];

  const socialLinks = [
    {
      name: 'X',
      href: 'https://x.com/convexoprotocol',
      icon: <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />,
    },
    {
      name: 'LinkedIn',
      href: 'https://www.linkedin.com/company/convexo-protocol/',
      icon: <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />,
    },
    {
      name: 'GitHub',
      href: 'https://github.com/Convexo-finance',
      icon: <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />,
    },
  ];

  return (
    <footer className="border-t border-border">
      <div className="section-container py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          {/* Brand */}
          <div className="md:col-span-5">
            <Image
              src="/branding/convexoblanco.png"
              alt="Convexo"
              width={150}
              height={50}
              className="w-auto opacity-90 mb-5"
            />
            <p className="text-xs text-muted max-w-xs leading-relaxed mb-6">
              {t('footer.description')}
            </p>
            <div className="flex items-center gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-dark hover:text-muted transition-colors duration-200"
                  aria-label={social.name}
                >
                  <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                    {social.icon}
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Products */}
          <div className="md:col-span-3">
            <h3 className="text-[10px] font-semibold uppercase tracking-[0.2em] text-muted-dark mb-4">
              {t('footer.productsTitle')}
            </h3>
            <ul className="space-y-2">
              {productLinks.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-xs text-muted hover:text-primary-text transition-colors duration-200"
                  >
                    {t(item.nameKey)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div className="md:col-span-2">
            <h3 className="text-[10px] font-semibold uppercase tracking-[0.2em] text-muted-dark mb-4">
              {t('footer.companyTitle')}
            </h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-xs text-muted hover:text-primary-text transition-colors duration-200">
                  {t('footer.about')}
                </Link>
              </li>
              <li>
                <a href="https://protocol.convexo.xyz" target="_blank" rel="noopener noreferrer" className="text-xs text-muted hover:text-primary-text transition-colors duration-200">
                  {t('footer.launchApp')}
                </a>
              </li>
              <li>
                <Link href="/privacy" className="text-xs text-muted hover:text-primary-text transition-colors duration-200">
                  {t('footer.privacy')}
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-xs text-muted hover:text-primary-text transition-colors duration-200">
                  {t('footer.terms')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div className="md:col-span-2">
            <h3 className="text-[10px] font-semibold uppercase tracking-[0.2em] text-muted-dark mb-4">
              {t('footer.connect')}
            </h3>
            <ul className="space-y-2">
              <li>
                <a href="https://x.com/convexoprotocol" target="_blank" rel="noopener noreferrer" className="text-xs text-muted hover:text-primary-text transition-colors duration-200">
                  X / Twitter
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/company/convexo-protocol/" target="_blank" rel="noopener noreferrer" className="text-xs text-muted hover:text-primary-text transition-colors duration-200">
                  LinkedIn
                </a>
              </li>
              <li>
                <a href="https://github.com/Convexo-finance" target="_blank" rel="noopener noreferrer" className="text-xs text-muted hover:text-primary-text transition-colors duration-200">
                  GitHub
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-[10px] text-muted-dark uppercase tracking-[0.15em]">
            &copy; 2024 Convexo Protocol. {t('footer.copyright')}.
          </p>
          <p className="text-[10px] text-muted-dark uppercase tracking-[0.15em]">
            {t('footer.tagline')}
          </p>
        </div>
      </div>
    </footer>
  );
}
