import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Privacy Policy | Convexo Protocol',
  description: 'Convexo Protocol Privacy Policy — how we collect, use, and protect your data.',
};

const sections = [
  {
    title: 'Data Collection',
    content: 'We collect information you provide directly (name, email, wallet address, identity documents for KYC), information collected automatically (IP address, browser type, usage data), and blockchain data (public wallet addresses, transaction history).',
  },
  {
    title: 'Use of Information',
    content: 'We use your information to provide and improve our services, process transactions, comply with legal obligations (KYC/AML/CFT), communicate with you about your account, and detect and prevent fraud.',
  },
  {
    title: 'Sharing of Information',
    content: 'We do not sell your personal data. We may share information with identity verification providers (Veriff, Sumsub, zkPassport), compliance tools (OpenSanctions), and as required by law or regulation.',
  },
  {
    title: 'Blockchain Data',
    content: 'Transactions executed on-chain are publicly visible on the blockchain. This includes wallet addresses and transaction amounts. We cannot remove or modify blockchain records.',
  },
  {
    title: 'Security',
    content: 'We implement industry-standard security measures including encryption at rest and in transit, multi-signature custody, and regular third-party security audits of our smart contracts.',
  },
  {
    title: 'Your Rights',
    content: 'You have the right to access, correct, or delete your personal data (subject to legal retention requirements). You may also request data portability or restrict processing. Contact legal@convexo.xyz to exercise your rights.',
  },
  {
    title: 'Cookies',
    content: 'We use essential cookies to maintain session state and security. We do not use tracking or advertising cookies. You may disable cookies in your browser settings, though this may affect functionality.',
  },
  {
    title: 'Data Retention',
    content: 'We retain personal data for as long as necessary to provide our services and comply with legal obligations. KYC/AML records are retained for a minimum of 5 years as required by applicable law.',
  },
  {
    title: 'Third-Party Services',
    content: 'Our platform integrates with third-party services (Chainlink, Uniswap, CoinGecko, etc.). Their use of data is governed by their own privacy policies. We are not responsible for third-party data practices.',
  },
  {
    title: 'Changes to This Policy',
    content: 'We may update this Privacy Policy from time to time. We will notify you of material changes via email or through the platform. Continued use of our services after changes constitutes acceptance.',
  },
  {
    title: 'Contact',
    content: 'For privacy-related inquiries, contact our legal team at legal@convexo.xyz. For general inquiries, contact hello@convexo.xyz.',
  },
];

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-surface text-on-surface">
      <Navbar />
      <main className="pt-20">
        {/* Hero */}
        <section className="section-container pt-24 pb-16 border-b border-outline-variant/10">
          <div className="flex flex-wrap gap-3 mb-8">
            <span className="chip">Legal</span>
            <span className="chip">Last updated March 4, 2025</span>
          </div>
          <h1 className="heading-display text-[clamp(2.5rem,6vw,5rem)] text-on-surface mb-6">
            Privacy <span className="text-primary">Policy</span>
          </h1>
          <p className="body-text text-base max-w-2xl">
            This policy explains how Convexo Protocol collects, uses, and protects your
            personal information. By using our services, you agree to the practices
            described herein.
          </p>
        </section>

        {/* Sections */}
        <section className="section-container py-20">
          <div className="max-w-3xl space-y-10">
            {sections.map((s, i) => (
              <div key={s.title} className="flex gap-8">
                <span className="label-institutional text-primary flex-shrink-0 mt-1 w-6">{String(i + 1).padStart(2, '0')}</span>
                <div>
                  <h2 className="font-headline text-base font-black uppercase tracking-tight text-on-surface mb-4">{s.title}</h2>
                  <p className="body-text leading-relaxed">{s.content}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
