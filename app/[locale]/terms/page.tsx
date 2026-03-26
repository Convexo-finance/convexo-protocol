import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Terms & Conditions | Convexo Protocol',
  description: 'Convexo Protocol Terms and Conditions governing the use of our institutional DeFi services.',
};

const sections = [
  { title: 'Acceptance of Terms', content: 'By accessing or using Convexo Protocol services, you agree to be bound by these Terms and Conditions. If you do not agree, do not use our services.' },
  { title: 'Eligibility', content: 'You must be at least 18 years old and legally permitted to engage in financial transactions in your jurisdiction. Institutional users must be duly authorized entities.' },
  { title: 'Services', content: 'Convexo Protocol provides institutional DeFi infrastructure including payments, tokenized credit bonds, real estate vaults, and identity services. Services may be updated or discontinued at any time.' },
  { title: 'Identity Verification', content: 'Use of certain services requires identity verification (KYC/KYB) via our 3-tier Digital ID system. You agree to provide accurate and complete information during the verification process.' },
  { title: 'Risks', content: 'DeFi products involve significant risk including smart contract risk, market volatility, liquidity risk, and regulatory risk. You acknowledge you understand and accept these risks.' },
  { title: 'Prohibited Use', content: 'You may not use our services for money laundering, terrorism financing, sanctions evasion, fraud, market manipulation, or any activity that violates applicable law.' },
  { title: 'Fees', content: 'Fees vary by product and channel: OTC orders carry a 1.5% spread, DEX swaps carry a 0.3% spread, and P2P AI carries a 0.1% commission. Fees are subject to change with notice.' },
  { title: 'Intellectual Property', content: 'All content, software, and technology on the Convexo Protocol platform is owned by Convexo Protocol or its licensors. You may not reproduce, distribute, or create derivative works without written permission.' },
  { title: 'Disclaimers', content: 'Services are provided "as is" without warranty of any kind. We do not guarantee uninterrupted access, accuracy of price data, or specific investment returns.' },
  { title: 'Limitation of Liability', content: 'To the maximum extent permitted by law, Convexo Protocol shall not be liable for indirect, incidental, or consequential damages arising from use of our services.' },
  { title: 'Indemnification', content: 'You agree to indemnify and hold harmless Convexo Protocol from any claims arising from your use of the services or violation of these Terms.' },
  { title: 'Governing Law', content: 'These Terms are governed by the laws of Colombia. Disputes shall be resolved through binding arbitration in Bogotá, Colombia, unless otherwise required by applicable law.' },
  { title: 'Termination', content: 'We may suspend or terminate your access at any time for violation of these Terms, suspicious activity, regulatory requirements, or at our sole discretion.' },
  { title: 'Changes to Terms', content: 'We may update these Terms at any time. We will notify you of material changes. Continued use after changes constitutes acceptance of the updated Terms.' },
  { title: 'Contact', content: 'For questions about these Terms, contact legal@convexo.xyz. For general inquiries, contact hello@convexo.xyz.' },
];

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-surface text-on-surface">
      <Navbar />
      <main className="pt-20">
        <section className="section-container pt-24 pb-16 border-b border-outline-variant/10">
          <div className="flex flex-wrap gap-3 mb-8">
            <span className="chip">Legal</span>
          </div>
          <h1 className="heading-display text-[clamp(2.5rem,6vw,5rem)] text-on-surface mb-6">
            Terms &amp; <span className="text-primary">Conditions</span>
          </h1>
          <p className="body-text text-base max-w-2xl">
            These Terms and Conditions govern your access to and use of Convexo Protocol
            services. Please read them carefully before using our platform.
          </p>
        </section>
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
