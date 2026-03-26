import Image from 'next/image';
import { Link } from '@/navigation';

const productLinks = [
  { name: 'Payments Convexo',  href: '/products/payments' },
  { name: 'Tokenized C-Bonds', href: '/products/c-bonds' },
  { name: 'Real Estate Vaults',href: '/products/real-estate' },
  { name: 'ETH Fund Convexo',  href: '/products/eth-fund' },
  { name: 'P2P AI',            href: '/products/p2p' },
];

const technologyLinks = [
  { name: 'Our Technology',          href: '/technology' },
  { name: 'Infrastructure Providers',href: '/technology#providers' },
];

const legalLinks = [
  { name: 'Compliance Hub',    href: '/compliance' },
  { name: 'Privacy Policy',    href: '/privacy' },
  { name: 'Terms & Conditions',href: '/terms' },
  { name: 'AML/CFT Policy',    href: '/aml-cft' },
];

const socialLinks = [
  { name: 'X',        short: 'X',    href: 'https://x.com/convexoprotocol' },
  { name: 'LinkedIn', short: 'LI',   href: 'https://www.linkedin.com/company/convexo-protocol/' },
  { name: 'GitHub',   short: 'GH',   href: 'https://github.com/Convexo-finance' },
  { name: 'Telegram', short: 'TG',   href: 'https://t.me/convexoprotocol' },
];

const contactLinks = [
  { name: 'hello@convexo.xyz', href: 'mailto:hello@convexo.xyz' },
  { name: 'WhatsApp',          href: 'https://wa.me/573186766035' },
  { name: 'About Us',          href: '/about', internal: true },
];

const verificationBadges = [
  { label: 'SOC2 Type II',   sub: 'Certified 2024', code: 'S2'  },
  { label: 'ISO/IEC 27001',  sub: 'Data Security',  code: 'ISO' },
  { label: 'zkPassport',     sub: 'ZK Identity',    code: 'ZK'  },
];

export default function Footer() {
  return (
    <footer className="w-full bg-surface-container-lowest border-t border-outline-variant/10">

      {/* ── Main footer grid ── */}
      <div className="max-w-[1600px] mx-auto px-8 md:px-12 py-20">
        <div className="grid grid-cols-2 md:grid-cols-12 gap-x-8 gap-y-12">

          {/* Brand column — 3 cols */}
          <div className="col-span-2 md:col-span-3 flex flex-col gap-8">
            {/* Akira wordmark */}
            <div>
              <span className="font-headline text-xl font-black text-primary tracking-widest uppercase block mb-3">
                Convexo Protocol
              </span>
              <Image
                src="/branding/convexoblanco.png"
                alt="Convexo Protocol"
                width={100}
                height={22}
                className="h-5 w-auto object-contain opacity-40"
              />
            </div>
            <p className="font-body text-xs text-on-surface/40 leading-relaxed max-w-[200px]">
              Institutional DeFi Infrastructure for Latin America. Sovereign, compliant, on-chain.
            </p>
            {/* Social row */}
            <div className="flex gap-3 flex-wrap">
              {socialLinks.map((s) => (
                <a
                  key={s.name}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={s.name}
                  className="w-8 h-8 bg-surface-container border border-outline-variant/20 flex items-center justify-center label-institutional text-on-surface/50 hover:text-primary hover:border-primary/30 transition-all"
                >
                  {s.short}
                </a>
              ))}
            </div>
          </div>

          {/* Products — 2 cols */}
          <div className="md:col-span-2 flex flex-col gap-4">
            <span className="label-institutional text-primary">Products</span>
            {productLinks.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="font-body text-xs text-on-surface/40 hover:text-primary transition-colors"
              >
                {l.name}
              </Link>
            ))}
          </div>

          {/* Technology — 2 cols */}
          <div className="md:col-span-2 flex flex-col gap-4">
            <span className="label-institutional text-primary">Technology</span>
            {technologyLinks.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="font-body text-xs text-on-surface/40 hover:text-primary transition-colors"
              >
                {l.name}
              </Link>
            ))}
          </div>

          {/* Legal — 2 cols */}
          <div className="md:col-span-2 flex flex-col gap-4">
            <span className="label-institutional text-primary">Legal</span>
            {legalLinks.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="font-body text-xs text-on-surface/40 hover:text-primary transition-colors"
              >
                {l.name}
              </Link>
            ))}
          </div>

          {/* Connect — 1.5 cols + Verification — 1.5 cols */}
          <div className="md:col-span-3 flex flex-col gap-8">
            {/* Connect */}
            <div className="flex flex-col gap-4">
              <span className="label-institutional text-primary">Connect</span>
              {contactLinks.map((l) =>
                l.internal ? (
                  <Link
                    key={l.name}
                    href={l.href}
                    className="font-body text-xs text-on-surface/40 hover:text-primary transition-colors"
                  >
                    {l.name}
                  </Link>
                ) : (
                  <a
                    key={l.name}
                    href={l.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-body text-xs text-on-surface/40 hover:text-primary transition-colors"
                  >
                    {l.name}
                  </a>
                )
              )}
            </div>

            {/* Verification badges */}
            <div className="flex flex-col gap-4">
              <span className="label-institutional text-primary">Verification</span>
              {verificationBadges.map((b) => (
                <div key={b.label} className="flex items-center gap-3">
                  <div className="w-7 h-7 bg-surface-container border border-outline-variant/20 flex items-center justify-center flex-shrink-0">
                    <span className="font-headline text-[8px] font-black text-primary">{b.code}</span>
                  </div>
                  <div>
                    <p className="font-body text-[10px] text-on-surface/60 font-semibold">{b.label}</p>
                    <p className="font-body text-[9px] text-on-surface/30 uppercase">{b.sub}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ── Bottom bar ── */}
      <div className="border-t border-outline-variant/10">
        <div className="max-w-[1600px] mx-auto px-8 md:px-12 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-body text-[10px] text-on-surface/25 uppercase tracking-wider">
            © 2025 Convexo Protocol — Sovereign Vault Institutional DeFi
          </p>
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
              <span className="label-institutional text-on-surface/30">Live Operational Network</span>
            </div>
            <Link
              href="/compliance"
              className="label-institutional text-on-surface/25 hover:text-primary transition-colors"
            >
              Compliance Hub →
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
