import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'AML/CFT Policy | Convexo Protocol',
  description: 'Convexo Protocol Anti-Money Laundering and Counter-Terrorism Financing policy.',
};

const sections = [
  { title: 'Overview', content: 'Convexo Protocol maintains a strict Anti-Money Laundering (AML) and Counter-Terrorism Financing (CFT) compliance program. We are committed to preventing the use of our platform for financial crimes.' },
  { title: 'AML Policy', content: 'We implement comprehensive AML procedures including transaction monitoring, suspicious activity reporting, enhanced due diligence for high-risk clients, and regular compliance training for all staff.' },
  { title: 'CFT Policy', content: 'We screen all users and transactions against international sanctions lists (OFAC, UN, EU) and terrorism financing databases via OpenSanctions. Any matches trigger immediate review and potential account suspension.' },
  {
    title: 'KYC Requirements — Individual',
    content: 'Individual users must complete Tier 1 (zkPassport + sanctions screening) for basic access, or Tier 2 (Veriff identity verification) for full product access. Tier 3 (AI credit scoring) is required for lending products.',
  },
  {
    title: 'KYC Requirements — Enterprise',
    content: 'Corporate clients must complete Tier 2 via Sumsub enterprise KYB, providing: certificate of incorporation, beneficial ownership structure (UBOs), authorized signatory documentation, and source of funds declaration.',
  },
  { title: 'Transaction Monitoring', content: 'All transactions are monitored in real-time for suspicious patterns including structuring, rapid fund movement, and connections to high-risk jurisdictions. Suspicious activity is reported to relevant authorities.' },
  { title: 'Reporting', content: 'We file Suspicious Activity Reports (SARs) as required by applicable law. We cooperate fully with law enforcement and regulatory authorities in investigations related to financial crime.' },
  { title: 'Record Keeping', content: 'KYC/AML records are retained for a minimum of 5 years following account closure, or as required by applicable law. Transaction records are retained for 10 years.' },
  { title: 'Compliance Updates', content: 'Our AML/CFT program is reviewed and updated regularly to reflect changes in regulatory requirements and emerging financial crime typologies.' },
  { title: 'Contact', content: 'For compliance-related inquiries, contact our legal and compliance team at legal@convexo.xyz.' },
];

export default function AmlCftPage() {
  return (
    <div className="min-h-screen bg-surface text-on-surface">
      <Navbar />
      <main className="pt-20">
        <section className="section-container pt-24 pb-16 border-b border-outline-variant/10">
          <div className="flex flex-wrap gap-3 mb-8">
            <span className="chip">Legal</span>
            <span className="chip">Compliance</span>
          </div>
          <h1 className="heading-display text-[clamp(2.5rem,6vw,5rem)] text-on-surface mb-6">
            AML/<span className="text-primary">CFT</span> Policy
          </h1>
          <p className="body-text text-base max-w-2xl">
            Convexo Protocol&apos;s Anti-Money Laundering and Counter-Terrorism Financing
            program. We maintain the highest compliance standards to protect the integrity
            of LATAM financial markets.
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
