import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Link } from '@/navigation';

export const metadata: Metadata = {
  title: 'About | Convexo Protocol',
  description: 'Learn about Convexo Protocol — institutional DeFi infrastructure for Latin America.',
};

const values = [
  { label: '01', title: 'Innovation',   desc: 'We implement emerging technologies not as a trend, but as a tool to redefine financial efficiency.' },
  { label: '02', title: 'Security',     desc: 'In a decentralized environment, security is our highest promise. We apply the most rigorous standards.' },
  { label: '03', title: 'Research',     desc: 'Every decision is based on data and technical analysis. We anticipate market movements and validate protocols.' },
  { label: '04', title: 'Transparency', desc: 'We operate under absolute clarity. In financial and crypto markets, transparency is the only path to an unbreakable institutional reputation.' },
  { label: '05', title: 'Excellence',   desc: 'We pursue perfection in execution. Every touchpoint — from product interfaces to advisory — must reflect superior quality.' },
  { label: '06', title: 'Education',    desc: 'We empower clients through knowledge. An educated market is a stronger market, more prone to adopting financial innovations.' },
];

const pillars = [
  {
    title: 'Compliance-First',
    desc: 'Every product is built with regulatory compliance as the foundation. KYC, AML, and CFT frameworks are embedded at the protocol level, not bolted on.',
  },
  {
    title: 'AI-Powered',
    desc: 'Proprietary AI models drive credit scoring, OTC order routing, and P2P arbitration — giving institutional clients a technological edge across LATAM markets.',
  },
  {
    title: 'Enterprise-Grade',
    desc: 'Built for executives, corporations, and High-Net-Worth Individuals who demand institutional precision, not consumer-grade DeFi products.',
  },
];

const locations = [
  { city: 'Bogotá', country: 'Colombia', region: 'Latin America HQ' },
  { city: 'Miami',  country: 'United States', region: 'North America' },
  { city: 'Hong Kong', country: 'Hong Kong', region: 'Asia Pacific' },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-surface text-on-surface overflow-x-hidden">
      <Navbar />

      <main className="pt-20">
        {/* Radial glows */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[900px] bg-secondary/8 rounded-full blur-[140px] pointer-events-none" />

        {/* ── HERO ─────────────────────────────────────────────── */}
        <section className="relative min-h-[60vh] flex flex-col items-center justify-center px-6 sm:px-8 lg:px-12 overflow-hidden py-32">
          <div className="absolute inset-0 technical-grid opacity-30 pointer-events-none" />
          <div className="relative z-10 text-center max-w-4xl">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-primary-container/30 border border-primary/20 rounded-sm mb-10">
              <span className="label-institutional text-primary">Institutional Grade Since 2023</span>
            </div>
            <h1 className="heading-display text-[clamp(3rem,8vw,6rem)] text-on-surface mb-8">
              The Sovereign<br />
              <span className="text-primary">Protocol</span>
            </h1>
            <p className="font-body text-lg text-on-surface-variant font-light leading-relaxed max-w-2xl mx-auto">
              Convexo Protocol bridges traditional finance and decentralized infrastructure across
              Latin America — bringing institutional rigor, AI intelligence, and blockchain
              transparency to capital markets that need it most.
            </p>
          </div>
        </section>

        {/* ── MISSION & VISION ─────────────────────────────────── */}
        <section className="section-container section-padding">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-surface-container-high p-12 rounded-xl metallic-edge">
              <span className="label-institutional text-primary block mb-6">Mission</span>
              <h2 className="font-headline text-2xl font-black uppercase tracking-tight text-on-surface mb-6">
                Leading the Convergence
              </h2>
              <p className="body-text leading-relaxed">
                Our mission is to lead the convergence of traditional finance and disruptive
                technologies — applying Crypto, Blockchain, and Artificial Intelligence with
                institutional rigor. We foster a growth ecosystem through constant research
                and strategic partnerships with governments, academic institutions, and global
                infrastructure protocols.
              </p>
            </div>
            <div className="bg-surface-container-high p-12 rounded-xl metallic-edge">
              <span className="label-institutional text-secondary block mb-6">Vision</span>
              <h2 className="font-headline text-2xl font-black uppercase tracking-tight text-on-surface mb-6">
                Sovereign Financial Infrastructure
              </h2>
              <p className="body-text leading-relaxed">
                To become the definitive institutional DeFi infrastructure layer for Latin
                America — where every SME, financial institution, and high-net-worth individual
                can access sovereign-grade financial products with full compliance, full
                transparency, and full control over their assets.
              </p>
            </div>
          </div>
        </section>

        {/* ── OUR APPROACH ─────────────────────────────────────── */}
        <section className="w-full bg-surface-container-low py-32">
          <div className="section-container">
            <h2 className="heading-lg text-2xl mb-16 flex items-center gap-6">
              <span className="section-rule" />
              Our Approach
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pillars.map((p) => (
                <div key={p.title} className="group p-10 bg-surface-container-highest rounded-xl metallic-edge hover:bg-surface-variant transition-all duration-300">
                  <h3 className="font-headline text-lg font-black uppercase tracking-tight text-on-surface mb-5 group-hover:text-primary transition-colors">
                    {p.title}
                  </h3>
                  <p className="body-text leading-relaxed">{p.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CORE VALUES ──────────────────────────────────────── */}
        <section className="section-container section-padding">
          <h2 className="heading-lg text-2xl mb-16 flex items-center gap-6">
            <span className="section-rule" />
            Core Values
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((v) => (
              <div key={v.label} className="flex gap-6 p-8 bg-surface-container-high rounded-xl metallic-edge group hover:bg-surface-container-highest transition-all">
                <span className="label-institutional text-primary flex-shrink-0 mt-1">{v.label}</span>
                <div>
                  <h3 className="font-headline text-sm font-black uppercase tracking-tight text-on-surface mb-3 group-hover:text-primary transition-colors">
                    {v.title}
                  </h3>
                  <p className="font-body text-xs text-on-surface-variant leading-relaxed">{v.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── GLOBAL LOCATIONS ─────────────────────────────────── */}
        <section className="w-full bg-surface-container-lowest py-32">
          <div className="section-container">
            <h2 className="heading-lg text-2xl mb-16 flex items-center gap-6">
              <span className="section-rule" />
              Global Presence
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {locations.map((l) => (
                <div key={l.city} className="p-10 bg-surface-container-high rounded-xl metallic-edge">
                  <span className="label-institutional text-primary block mb-4">{l.region}</span>
                  <h3 className="font-headline text-2xl font-black uppercase tracking-tight text-on-surface mb-1">{l.city}</h3>
                  <p className="font-body text-sm text-on-surface-variant">{l.country}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CONTACT ──────────────────────────────────────────── */}
        <section className="section-container section-padding">
          <div className="bg-gradient-to-br from-primary-container/15 to-secondary-container/15 rounded-3xl p-px metallic-edge">
            <div className="bg-surface-container-low rounded-3xl p-12 md:p-20">
              <h2 className="heading-display text-[clamp(2rem,4vw,3.5rem)] text-on-surface mb-6">
                Get in <span className="text-primary">Touch</span>
              </h2>
              <p className="body-text text-base max-w-xl mb-14">
                We work exclusively with institutional clients, corporations, and
                high-net-worth individuals. Reach out through your preferred channel.
              </p>
              <div className="flex flex-wrap gap-6">
                <a
                  href="mailto:hello@convexo.xyz"
                  className="btn-secondary"
                >
                  hello@convexo.xyz
                </a>
                <a
                  href="https://t.me/convexoprotocol"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary"
                >
                  Telegram
                </a>
                <a
                  href="https://wa.me/573186766035"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary"
                >
                  WhatsApp
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
