'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { useLocale } from 'next-intl';
import { Link, usePathname, useRouter } from '@/navigation';

const products = [
  { name: 'Payments Convexo',  href: '/products/payments',    tag: 'Live', desc: 'International settlements & OTC' },
  { name: 'Tokenized C-Bonds', href: '/products/c-bonds',     tag: 'Live', desc: 'On-chain credit bonds, 12%+ APY' },
  { name: 'Real Estate Vaults',href: '/products/real-estate', tag: 'Soon', desc: 'Tokenized LATAM property, 18% APY' },
  { name: 'ETH Fund Convexo',  href: '/products/eth-fund',    tag: 'Soon', desc: 'Institutional ETH yield fund' },
  { name: 'P2P AI',            href: '/products/p2p',         tag: 'Soon', desc: 'AI-powered peer-to-peer payments' },
];

export default function Navbar() {
  const [scrolled,           setScrolled]           = useState(false);
  const [productsOpen,       setProductsOpen]       = useState(false);
  const [mobileOpen,         setMobileOpen]         = useState(false);
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false);
  const pathname    = usePathname();
  const router      = useRouter();
  const locale      = useLocale();
  const dropdownRef = useRef<HTMLDivElement>(null);

  const switchLocale = (next: 'en' | 'es') => {
    router.replace(pathname, { locale: next });
  };

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setProductsOpen(false);
      }
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  useEffect(() => { setMobileOpen(false); }, [pathname]);

  const navLink = (href: string) =>
    `font-label text-xs font-bold uppercase tracking-[0.15em] transition-colors duration-200 ${
      pathname?.includes(href)
        ? 'text-primary'
        : 'text-on-surface/60 hover:text-on-surface'
    }`;

  return (
    <>
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-surface/95 backdrop-blur-xl shadow-[0_12px_40px_rgba(0,0,0,0.25)]'
            : 'bg-surface/80 backdrop-blur-md'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="flex items-center justify-between h-16 md:h-20">

            {/* Logo */}
            <Link href="/" className="flex-shrink-0">
              <Image
                src="/branding/convexoblanco.png"
                alt="Convexo Protocol"
                width={140}
                height={32}
                className="h-7 w-auto object-contain"
                priority
              />
            </Link>

            {/* Desktop nav links */}
            <div className="hidden md:flex items-center gap-10">

              {/* Products dropdown */}
              <div ref={dropdownRef} className="relative">
                <button
                  onClick={() => setProductsOpen(p => !p)}
                  className={`flex items-center gap-1.5 font-label text-xs font-bold uppercase tracking-[0.15em] transition-colors duration-200 ${
                    productsOpen || pathname?.includes('/products')
                      ? 'text-primary'
                      : 'text-on-surface/60 hover:text-on-surface'
                  }`}
                >
                  Products
                  <svg
                    className={`w-3 h-3 transition-transform duration-200 ${productsOpen ? 'rotate-180' : ''}`}
                    fill="none" stroke="currentColor" viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {productsOpen && (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 mt-4 w-72 bg-surface-container-high rounded-lg metallic-edge shadow-[0_12px_40px_rgba(0,0,0,0.4)] overflow-hidden">
                    <div className="p-1">
                      {products.map((p) => (
                        <Link
                          key={p.href}
                          href={p.href}
                          onClick={() => setProductsOpen(false)}
                          className="flex items-start gap-3 px-4 py-3 rounded-md hover:bg-surface-container-highest transition-colors group"
                        >
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-2">
                              <span className="font-label text-xs font-bold text-on-surface group-hover:text-primary transition-colors">
                                {p.name}
                              </span>
                              <span className={`text-[9px] font-bold uppercase tracking-wider px-1.5 py-0.5 rounded-sm ${
                                p.tag === 'Live'
                                  ? 'bg-primary/10 text-primary'
                                  : 'bg-outline-variant/30 text-on-surface/40'
                              }`}>
                                {p.tag}
                              </span>
                            </div>
                            <p className="text-[11px] text-on-surface-variant mt-0.5 truncate">{p.desc}</p>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              <Link href="/technology"  className={navLink('/technology')}>Technology</Link>
              <Link href="/about"       className={navLink('/about')}>About</Link>
              <Link href="/compliance"  className={navLink('/compliance')}>Compliance</Link>
            </div>

            {/* Desktop right */}
            <div className="hidden md:flex items-center gap-4">
              {/* EN / ES switcher */}
              <div className="flex items-center gap-1 bg-surface-container border border-outline-variant/20 p-0.5">
                {(['en', 'es'] as const).map((l) => (
                  <button
                    key={l}
                    onClick={() => switchLocale(l)}
                    className={`px-3 py-1.5 font-label text-[10px] font-black uppercase tracking-widest transition-all ${
                      locale === l
                        ? 'bg-primary text-on-primary'
                        : 'text-on-surface/40 hover:text-on-surface'
                    }`}
                  >
                    {l}
                  </button>
                ))}
              </div>
              <a
                href="https://protocol.convexo.xyz"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary py-2.5"
              >
                Launch App
              </a>
            </div>

            {/* Mobile hamburger */}
            <button
              onClick={() => setMobileOpen(p => !p)}
              className="md:hidden flex flex-col justify-center gap-1.5 p-2 text-on-surface"
              aria-label="Toggle menu"
            >
              <span className={`block w-5 h-0.5 bg-current transition-all duration-300 ${mobileOpen ? 'rotate-45 translate-y-2' : ''}`} />
              <span className={`block w-5 h-0.5 bg-current transition-all duration-300 ${mobileOpen ? 'opacity-0' : ''}`} />
              <span className={`block w-5 h-0.5 bg-current transition-all duration-300 ${mobileOpen ? '-rotate-45 -translate-y-2' : ''}`} />
            </button>
          </div>
        </div>

        {/* Bottom gradient line */}
        <div className="h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
      </nav>

      {/* Mobile overlay */}
      {mobileOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm md:hidden"
          onClick={() => setMobileOpen(false)}
        />
      )}

      {/* Mobile slide-in panel */}
      <div
        className={`fixed top-0 right-0 z-50 h-full w-80 bg-surface-container-low flex flex-col md:hidden transition-transform duration-300 ${
          mobileOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Panel header */}
        <div className="flex items-center justify-between px-6 h-16 border-b border-outline-variant/20">
          <Image
            src="/branding/convexoblanco.png"
            alt="Convexo Protocol"
            width={120}
            height={28}
            className="h-6 w-auto object-contain"
          />
          <button onClick={() => setMobileOpen(false)} className="text-on-surface/60 hover:text-on-surface p-1">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Panel links */}
        <div className="flex-1 overflow-y-auto px-6 py-8 space-y-1">
          <button
            onClick={() => setMobileProductsOpen(p => !p)}
            className="w-full flex items-center justify-between py-3 font-label text-xs font-bold uppercase tracking-[0.15em] text-on-surface/60"
          >
            Products
            <svg className={`w-4 h-4 transition-transform ${mobileProductsOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          {mobileProductsOpen && (
            <div className="pl-4 space-y-1 pb-2">
              {products.map((p) => (
                <Link
                  key={p.href}
                  href={p.href}
                  className="flex items-center gap-2 py-2.5 font-label text-xs text-on-surface-variant hover:text-primary transition-colors"
                >
                  {p.name}
                  {p.tag === 'Soon' && (
                    <span className="text-[9px] bg-outline-variant/30 text-on-surface/40 px-1.5 py-0.5 rounded-sm uppercase font-bold tracking-wider">Soon</span>
                  )}
                </Link>
              ))}
            </div>
          )}

          <Link href="/technology" className="block py-3 font-label text-xs font-bold uppercase tracking-[0.15em] text-on-surface/60 hover:text-on-surface transition-colors">
            Technology
          </Link>
          <Link href="/about" className="block py-3 font-label text-xs font-bold uppercase tracking-[0.15em] text-on-surface/60 hover:text-on-surface transition-colors">
            About
          </Link>
          <Link href="/compliance" className="block py-3 font-label text-xs font-bold uppercase tracking-[0.15em] text-on-surface/60 hover:text-primary transition-colors">
            Compliance Hub
          </Link>
        </div>

        {/* Panel footer */}
        <div className="px-6 py-6 border-t border-outline-variant/20 space-y-4">
          {/* Mobile language switcher */}
          <div className="flex items-center gap-1 bg-surface-container border border-outline-variant/20 p-0.5 w-fit">
            {(['en', 'es'] as const).map((l) => (
              <button
                key={l}
                onClick={() => switchLocale(l)}
                className={`px-4 py-2 font-label text-[10px] font-black uppercase tracking-widest transition-all ${
                  locale === l
                    ? 'bg-primary text-on-primary'
                    : 'text-on-surface/40 hover:text-on-surface'
                }`}
              >
                {l}
              </button>
            ))}
          </div>
          <a
            href="https://protocol.convexo.xyz"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary w-full justify-center"
          >
            Launch App
          </a>
        </div>
      </div>
    </>
  );
}
