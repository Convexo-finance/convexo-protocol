'use client';

import { useState } from 'react';

type DocId = 'privacy' | 'terms' | 'aml';

const docs: { id: DocId; label: string; icon: string; date: string }[] = [
  { id: 'privacy', label: 'Privacy Policy',    icon: '🔒', date: 'March 4, 2025' },
  { id: 'terms',   label: 'Terms & Conditions',icon: '⚖️', date: 'March 4, 2025' },
  { id: 'aml',     label: 'AML / CFT Policy',  icon: '🏦', date: 'March 4, 2025' },
];

const privacySections = [
  {
    title: '01. Data Collection',
    content: 'We collect information you provide directly (name, email, wallet address, identity documents for KYC), information collected automatically (IP address, browser type, usage data), and blockchain data (public wallet addresses, transaction history).',
  },
  {
    title: '02. Use of Information',
    content: 'We use your information to provide and improve our services, process transactions, comply with legal obligations (KYC/AML/CFT), communicate with you about your account, and detect and prevent fraud.',
  },
  {
    title: '03. Sharing of Information',
    content: 'We do not sell your personal data. We may share information with identity verification providers (Veriff, Sumsub, zkPassport), compliance tools (OpenSanctions), and as required by law or regulation.',
  },
  {
    title: '04. Blockchain Data',
    content: 'Transactions executed on-chain are publicly visible on the blockchain. This includes wallet addresses and transaction amounts. We cannot remove or modify blockchain records.',
  },
  {
    title: '05. Security',
    content: 'We implement industry-standard security measures including encryption at rest and in transit, multi-signature custody, and regular third-party security audits of our smart contracts.',
  },
  {
    title: '06. Your Rights',
    content: 'You have the right to access, correct, or delete your personal data (subject to legal retention requirements). You may also request data portability or restrict processing. Contact legal@convexo.xyz to exercise your rights.',
  },
  {
    title: '07. Cookies',
    content: 'We use essential cookies to maintain session state and security. We do not use tracking or advertising cookies. You may disable cookies in your browser settings, though this may affect functionality.',
  },
  {
    title: '08. Data Retention',
    content: 'We retain personal data for as long as necessary to provide our services and comply with legal obligations. KYC/AML records are retained for a minimum of 5 years as required by applicable law.',
  },
  {
    title: '09. Third-Party Services',
    content: 'Our platform integrates with third-party services (Chainlink, Uniswap, CoinGecko, etc.). Their use of data is governed by their own privacy policies. We are not responsible for third-party data practices.',
  },
  {
    title: '10. Changes to This Policy',
    content: 'We may update this Privacy Policy from time to time. We will notify you of material changes via email or through the platform. Continued use of our services after changes constitutes acceptance.',
  },
  {
    title: '11. Contact',
    content: 'For privacy-related inquiries, contact our legal team at legal@convexo.xyz. For general inquiries, contact hello@convexo.xyz.',
  },
];

const termsSections = [
  { title: '01. Acceptance of Terms', content: 'By accessing or using Convexo Protocol services, you agree to be bound by these Terms and Conditions. If you do not agree, do not use our services.' },
  { title: '02. Eligibility', content: 'You must be at least 18 years old and legally permitted to engage in financial transactions in your jurisdiction. Institutional users must be duly authorized entities.' },
  { title: '03. Services', content: 'Convexo Protocol provides institutional DeFi infrastructure including payments, tokenized credit bonds, real estate vaults, and identity services. Services may be updated or discontinued at any time.' },
  { title: '04. Identity Verification', content: 'Use of certain services requires identity verification (KYC/KYB) via our 3-tier Digital ID system. You agree to provide accurate and complete information during the verification process.' },
  { title: '05. Risks', content: 'DeFi products involve significant risk including smart contract risk, market volatility, liquidity risk, and regulatory risk. You acknowledge you understand and accept these risks.' },
  { title: '06. Prohibited Use', content: 'You may not use our services for money laundering, terrorism financing, sanctions evasion, fraud, market manipulation, or any activity that violates applicable law.' },
  { title: '07. Fees', content: 'Fees vary by product and channel: OTC orders carry a 1.5% spread, DEX swaps carry a 0.3% spread, and P2P AI carries a 0.1% commission. Fees are subject to change with notice.' },
  { title: '08. Intellectual Property', content: 'All content, software, and technology on the Convexo Protocol platform is owned by Convexo Protocol or its licensors. You may not reproduce, distribute, or create derivative works without written permission.' },
  { title: '09. Disclaimers', content: 'Services are provided "as is" without warranty of any kind. We do not guarantee uninterrupted access, accuracy of price data, or specific investment returns.' },
  { title: '10. Limitation of Liability', content: 'To the maximum extent permitted by law, Convexo Protocol shall not be liable for indirect, incidental, or consequential damages arising from use of our services.' },
  { title: '11. Indemnification', content: 'You agree to indemnify and hold harmless Convexo Protocol from any claims arising from your use of the services or violation of these Terms.' },
  { title: '12. Governing Law', content: 'These Terms are governed by the laws of Colombia. Disputes shall be resolved through binding arbitration in Bogotá, Colombia, unless otherwise required by applicable law.' },
  { title: '13. Termination', content: 'We may suspend or terminate your access at any time for violation of these Terms, suspicious activity, regulatory requirements, or at our sole discretion.' },
  { title: '14. Changes to Terms', content: 'We may update these Terms at any time. We will notify you of material changes. Continued use after changes constitutes acceptance of the updated Terms.' },
  { title: '15. Contact', content: 'For questions about these Terms, contact legal@convexo.xyz. For general inquiries, contact hello@convexo.xyz.' },
];

const amlSections = [
  { title: '01. Overview', content: 'Convexo Protocol maintains a strict Anti-Money Laundering (AML) and Counter-Terrorism Financing (CFT) compliance program. We are committed to preventing the use of our platform for financial crimes.' },
  { title: '02. AML Policy', content: 'We implement comprehensive AML procedures including transaction monitoring, suspicious activity reporting, enhanced due diligence for high-risk clients, and regular compliance training for all staff.' },
  { title: '03. CFT Policy', content: 'We screen all users and transactions against international sanctions lists (OFAC, UN, EU) and terrorism financing databases via OpenSanctions. Any matches trigger immediate review and potential account suspension.' },
  { title: '04. KYC — Individual', content: 'Individual users must complete Tier 1 (zkPassport + sanctions screening) for basic access, or Tier 2 (Veriff identity verification) for full product access. Tier 3 (AI credit scoring) is required for lending products.' },
  { title: '05. KYC — Enterprise', content: 'Corporate clients must complete Tier 2 via Sumsub enterprise KYB, providing: certificate of incorporation, beneficial ownership structure (UBOs), authorized signatory documentation, and source of funds declaration.' },
  { title: '06. Transaction Monitoring', content: 'All transactions are monitored in real-time for suspicious patterns including structuring, rapid fund movement, and connections to high-risk jurisdictions. Suspicious activity is reported to relevant authorities.' },
  { title: '07. Reporting', content: 'We file Suspicious Activity Reports (SARs) as required by applicable law. We cooperate fully with law enforcement and regulatory authorities in investigations related to financial crime.' },
  { title: '08. Record Keeping', content: 'KYC/AML records are retained for a minimum of 5 years following account closure, or as required by applicable law. Transaction records are retained for 10 years.' },
  { title: '09. Compliance Updates', content: 'Our AML/CFT program is reviewed and updated regularly to reflect changes in regulatory requirements and emerging financial crime typologies.' },
  { title: '10. Contact', content: 'For compliance-related inquiries, contact our legal and compliance team at legal@convexo.xyz.' },
];

const docContent: Record<DocId, typeof privacySections> = {
  privacy: privacySections,
  terms:   termsSections,
  aml:     amlSections,
};

const docTitles: Record<DocId, string> = {
  privacy: 'Privacy Policy',
  terms:   'Terms & Conditions',
  aml:     'AML / CFT Policy',
};

export default function ComplianceHub() {
  const [active, setActive] = useState<DocId>('privacy');
  const sections = docContent[active];

  return (
    <div className="pt-32 pb-24 px-6 md:px-12 max-w-[1600px] mx-auto">

      {/* Hero Header */}
      <header className="mb-16 relative">
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
        <div className="relative z-10">
          <div className="flex items-center gap-3 mb-6">
            <span className="chip bg-tertiary-container/60 text-on-surface border-none">Institutional Grade</span>
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
            <span className="label-institutional text-primary/60">v2.4.0 Live</span>
          </div>
          <h1 className="heading-display text-[clamp(2.5rem,6vw,5rem)] text-on-surface mb-6">
            Compliance <span className="text-primary">Hub</span>
          </h1>
          <p className="font-body text-on-surface-variant text-lg leading-relaxed max-w-2xl">
            A unified regulatory framework ensuring sovereign privacy, institutional rigor, and decentralized transparency.
            Our protocols are audited for cross-border financial integrity.
          </p>
        </div>
      </header>

      {/* 3-column bento */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-20">

        {/* ── Sidebar ── */}
        <aside className="lg:col-span-3 space-y-4">
          {/* Tab navigation */}
          <div className="bg-surface-container-low p-1 space-y-1">
            {docs.map((d) => (
              <button
                key={d.id}
                onClick={() => setActive(d.id)}
                className={`w-full flex items-center justify-between px-6 py-4 font-label text-xs font-bold uppercase tracking-wider transition-colors ${
                  active === d.id
                    ? 'bg-primary text-on-primary'
                    : 'text-on-surface-variant hover:bg-surface-container-highest'
                }`}
              >
                <span>{d.label}</span>
                <span className="text-base">{d.icon}</span>
              </button>
            ))}
          </div>

          {/* Quick actions */}
          <div className="p-6 glass-panel border border-white/5 space-y-6">
            <span className="label-institutional text-primary block">Quick Actions</span>
            <div className="space-y-4">
              <a
                href={`mailto:legal@convexo.xyz?subject=Download%20PDF%20Request`}
                className="flex items-center gap-3 text-on-surface-variant hover:text-primary transition-colors text-[10px] uppercase tracking-wider"
              >
                <span className="text-base">⬇</span> Download Full PDF
              </a>
              <button className="flex items-center gap-3 text-on-surface-variant hover:text-primary transition-colors text-[10px] uppercase tracking-wider">
                <span className="text-base">📋</span> Version History
              </button>
              <a
                href="mailto:legal@convexo.xyz"
                className="flex items-center gap-3 text-on-surface-variant hover:text-primary transition-colors text-[10px] uppercase tracking-wider"
              >
                <span className="text-base">✉</span> Contact Legal / DPO
              </a>
            </div>
          </div>
        </aside>

        {/* ── Document Canvas ── */}
        <div className="lg:col-span-6">
          <div className="glass-panel border border-white/5 p-8 md:p-12 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/5 blur-[100px] pointer-events-none" />

            {/* Document header */}
            <div className="relative z-10 flex items-start justify-between mb-8 pb-8 border-b border-white/5">
              <div>
                <h2 className="heading-display text-xl text-primary mb-2">{docTitles[active]}</h2>
                <p className="label-institutional text-on-surface-variant">
                  Effective Date: {docs.find(d => d.id === active)?.date}
                </p>
              </div>
              <span className="text-4xl text-primary/20 select-none">
                {docs.find(d => d.id === active)?.icon}
              </span>
            </div>

            {/* Scrollable content */}
            <div
              className="relative z-10 overflow-y-auto pr-2 space-y-10"
              style={{ maxHeight: '640px', scrollbarWidth: 'thin', scrollbarColor: '#B7C4FF transparent' }}
            >
              {sections.map((s) => (
                <section key={s.title}>
                  <h4 className="font-headline text-sm font-black text-on-surface uppercase tracking-tight mb-3">
                    {s.title}
                  </h4>
                  <p className="font-body text-on-surface-variant text-sm leading-relaxed">
                    {s.content}
                  </p>
                </section>
              ))}

              {/* Legal anchor block */}
              <div className="bg-surface-container p-6 border-l-2 border-primary">
                <p className="label-institutional text-primary mb-2">Legal Entity</p>
                <p className="font-body text-xs text-on-surface-variant italic leading-relaxed">
                  &ldquo;The data controller for the purpose of applicable local data protection laws is Convexo Protocol.
                  Registered in Colombia, operating cross-border institutional DeFi infrastructure.&rdquo;
                </p>
              </div>

              {/* Divider */}
              <div className="h-px w-full bg-gradient-to-r from-transparent via-white/5 to-transparent" />

              {/* Prev / Next nav */}
              <div className="flex items-center justify-between pb-4">
                <button
                  onClick={() => {
                    const idx = docs.findIndex(d => d.id === active);
                    if (idx > 0) setActive(docs[idx - 1].id);
                  }}
                  className="label-institutional text-primary hover:text-on-surface transition-colors flex items-center gap-2"
                >
                  ← Previous Document
                </button>
                <button
                  onClick={() => {
                    const idx = docs.findIndex(d => d.id === active);
                    if (idx < docs.length - 1) setActive(docs[idx + 1].id);
                  }}
                  className="label-institutional text-primary hover:text-on-surface transition-colors flex items-center gap-2"
                >
                  Next Document →
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* ── Right panel ── */}
        <div className="lg:col-span-3 space-y-8">

          {/* Protocol Trust */}
          <div className="bg-surface-container-high border border-white/5 p-8 relative">
            <div className="flex items-center justify-between mb-6">
              <span className="label-institutional text-secondary">Protocol Trust</span>
              <span className="text-secondary text-lg">✓</span>
            </div>
            <div className="flex items-end gap-2 mb-2">
              <span className="font-headline text-4xl font-bold text-on-surface">A+</span>
              <span className="label-institutional text-on-surface-variant mb-1">Audit Score</span>
            </div>
            <div className="w-full bg-surface-container-lowest h-1.5 overflow-hidden mb-8">
              <div className="bg-secondary h-full" style={{ width: '94%' }} />
            </div>
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-primary/10 border border-primary/20 flex items-center justify-center flex-shrink-0">
                  <span className="text-primary text-xs font-bold">S2</span>
                </div>
                <div>
                  <p className="label-institutional text-on-surface">SOC2 Type II</p>
                  <p className="font-body text-[9px] text-on-surface-variant uppercase">Certified 2024</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-secondary/10 border border-secondary/20 flex items-center justify-center flex-shrink-0">
                  <span className="text-secondary text-xs font-bold">ISO</span>
                </div>
                <div>
                  <p className="label-institutional text-on-surface">ISO/IEC 27001</p>
                  <p className="font-body text-[9px] text-on-surface-variant uppercase">Data Security</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-tertiary/10 border border-tertiary/20 flex items-center justify-center flex-shrink-0">
                  <span className="text-tertiary text-xs font-bold">ZK</span>
                </div>
                <div>
                  <p className="label-institutional text-on-surface">zkPassport</p>
                  <p className="font-body text-[9px] text-on-surface-variant uppercase">ZK Identity Verified</p>
                </div>
              </div>
            </div>
          </div>

          {/* Network Health */}
          <div className="bg-surface-container-lowest border border-white/5 p-8">
            <span className="label-institutional text-primary block mb-6">Network Health</span>
            <div className="space-y-6">
              {[
                { label: 'KYC Latency',     value: '124ms' },
                { label: 'AML Coverage',    value: '99.9%' },
                { label: 'Node Compliance', value: '100%'  },
                { label: 'Uptime SLA',      value: '99.95%'},
              ].map((m) => (
                <div key={m.label} className="flex justify-between items-center">
                  <span className="font-body text-[10px] uppercase text-on-surface-variant tracking-wider">{m.label}</span>
                  <span className="font-headline text-xs text-primary font-bold">{m.value}</span>
                </div>
              ))}
            </div>
            {/* Pulse bar visual */}
            <div className="mt-8 pt-8 border-t border-white/5">
              <div className="h-12 flex items-end gap-0.5">
                {Array.from({ length: 32 }).map((_, i) => (
                  <div
                    key={i}
                    className="flex-1 bg-primary/30 rounded-sm"
                    style={{ height: `${20 + Math.random() * 80}%`, opacity: 0.3 + i / 48 }}
                  />
                ))}
              </div>
              <p className="font-body text-[8px] text-on-surface-variant uppercase tracking-widest mt-2">
                Live Compliance Signal
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Document Registry + Governance */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="glass-panel border border-white/5 p-8">
          <h3 className="heading-display text-sm text-on-surface mb-8 uppercase tracking-widest">
            Document Registry
          </h3>
          <div className="space-y-8">
            {[
              {
                version: 'v2.4.0',
                title: 'Privacy Patch: ZK-Vault Integration',
                desc: 'Enhanced metadata stripping protocols to ensure 100% compliance with LATAM data sovereignty frameworks.',
                date: 'March 4, 2025',
                hash: 'Hash-0x921',
                opacity: '',
              },
              {
                version: 'v2.3.8',
                title: 'AML Update: Oracle Feed 7',
                desc: 'Integrated real-time sanctioned entity monitoring via Chainlink institutional oracles.',
                date: 'October 12, 2024',
                hash: 'Hash-0x442',
                opacity: 'opacity-50',
              },
              {
                version: 'v2.3.0',
                title: 'Terms: Tokenized C-Bonds Added',
                desc: 'Extended Terms & Conditions to cover on-chain credit bond issuance and secondary market trading.',
                date: 'August 5, 2024',
                hash: 'Hash-0x309',
                opacity: 'opacity-30',
              },
            ].map((r) => (
              <div key={r.version} className={`flex gap-6 items-start ${r.opacity}`}>
                <div className="label-institutional text-primary w-14 flex-shrink-0 pt-1">{r.version}</div>
                <div>
                  <p className="font-label text-xs font-bold text-on-surface uppercase tracking-wider mb-1">{r.title}</p>
                  <p className="font-body text-[11px] text-on-surface-variant leading-relaxed">{r.desc}</p>
                  <span className="font-body text-[9px] text-primary/60 block mt-2">{r.date} · Verified by {r.hash}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="glass-panel border border-white/5 p-8 flex flex-col justify-between">
          <div>
            <h3 className="heading-display text-sm text-on-surface mb-8 uppercase tracking-widest">
              Governance Participation
            </h3>
            <p className="font-body text-on-surface-variant text-sm leading-relaxed mb-8">
              These policies are dynamic and subject to DAO governance. Token holders can propose amendments
              to the Compliance Framework through Sovereign Improvement Proposals (SIPs).
            </p>
            <div className="grid grid-cols-3 gap-4 mb-8">
              {[
                { label: 'Active SIPs',    value: '3'    },
                { label: 'Token Voters',   value: '1,247'},
                { label: 'Quorum',         value: '67%'  },
              ].map((stat) => (
                <div key={stat.label} className="bg-surface-container p-4">
                  <p className="font-headline text-lg font-bold text-on-surface">{stat.value}</p>
                  <p className="font-body text-[9px] text-on-surface-variant uppercase tracking-wider mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex -space-x-3">
              {['C1','C2','C3','+14'].map((c, i) => (
                <div
                  key={c}
                  className="w-10 h-10 rounded-full border-2 border-surface bg-surface-container-highest flex items-center justify-center label-institutional"
                  style={{ zIndex: 4 - i }}
                >
                  {c}
                </div>
              ))}
            </div>
            <a
              href="mailto:legal@convexo.xyz?subject=Governance%20Proposal"
              className="bg-white/5 hover:bg-white/10 text-primary border border-white/5 label-institutional px-6 py-3 transition-all"
            >
              Propose Change
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
