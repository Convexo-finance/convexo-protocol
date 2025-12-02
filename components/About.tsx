'use client';

export default function About() {
  return (
    <section id="about" className="py-24 bg-gradient-to-br from-convexo-navy via-convexo-blue to-convexo-purple relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-white mb-4">
            About Us
          </h2>
          <div className="w-24 h-1 bg-convexo-cream mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-convexo-cream">
              Empowering LATAM Enterprises with Institutional DeFi
            </h3>
            <p className="text-lg text-convexo-lightblue leading-relaxed">
              Convexo Protocol is pioneering institutional-grade decentralized finance solutions specifically designed for Latin American enterprises. We bridge traditional finance with blockchain technology, providing sophisticated tools that enable businesses to access global capital markets.
            </p>
            <p className="text-lg text-convexo-lightblue leading-relaxed">
              Our mission is to democratize access to international funding while maintaining the highest standards of compliance, security, and operational excellence. We work exclusively with solid, established enterprises that require working capital to scale their operations.
            </p>
            <p className="text-lg text-convexo-lightblue leading-relaxed">
              Through cutting-edge technology including AI-powered credit scoring, blockchain tokenization, and integration with leading DeFi protocols like Uniswap V4 and Chainlink, we're building the financial infrastructure for the next generation of Latin American businesses.
            </p>
          </div>

          <div className="space-y-6">
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-convexo-lightblue/20">
              <h4 className="text-2xl font-bold text-convexo-cream mb-4">Our Vision</h4>
              <p className="text-convexo-lightblue">
                To become the leading institutional DeFi platform connecting LATAM enterprises with global capital markets, fostering economic growth and financial innovation across the region.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-convexo-lightblue/20">
              <h4 className="text-2xl font-bold text-convexo-cream mb-4">Our Approach</h4>
              <ul className="space-y-3 text-convexo-lightblue">
                <li className="flex items-start">
                  <span className="text-convexo-cream mr-2">✓</span>
                  <span>Compliance-first: Rigorous evaluation with Sumsub verification</span>
                </li>
                <li className="flex items-start">
                  <span className="text-convexo-cream mr-2">✓</span>
                  <span>AI-powered: Advanced credit scoring technology</span>
                </li>
                <li className="flex items-start">
                  <span className="text-convexo-cream mr-2">✓</span>
                  <span>Enterprise-focused: Serving solid, established businesses</span>
                </li>
                <li className="flex items-start">
                  <span className="text-convexo-cream mr-2">✓</span>
                  <span>Innovation-driven: Leveraging leading DeFi protocols</span>
                </li>
              </ul>
            </div>

            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-convexo-lightblue/20">
              <h4 className="text-2xl font-bold text-convexo-cream mb-4">Why Choose Us</h4>
              <p className="text-convexo-lightblue">
                We combine the transparency and efficiency of blockchain technology with the rigor and reliability of traditional institutional finance, offering the best of both worlds for growing enterprises.
              </p>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-5xl font-bold text-convexo-cream mb-2">100%</div>
            <div className="text-convexo-lightblue">Compliant</div>
          </div>
          <div className="text-center">
            <div className="text-5xl font-bold text-convexo-cream mb-2">24/7</div>
            <div className="text-convexo-lightblue">Support</div>
          </div>
          <div className="text-center">
            <div className="text-5xl font-bold text-convexo-cream mb-2">Secure</div>
            <div className="text-convexo-lightblue">Infrastructure</div>
          </div>
          <div className="text-center">
            <div className="text-5xl font-bold text-convexo-cream mb-2">LATAM</div>
            <div className="text-convexo-lightblue">Focused</div>
          </div>
        </div>
      </div>
    </section>
  );
}

