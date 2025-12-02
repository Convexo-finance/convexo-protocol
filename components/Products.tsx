'use client';

export default function Products() {
  const products = [
    {
      title: 'Tokenized Corporate Bonds',
      icon: '🏦',
      description: 'Access international funding through compliant, tokenized corporate bonds. Our comprehensive evaluation process includes Sumsub verification and AI-powered credit scoring.',
      features: [
        'AI-generated credit score with NFT certification',
        'Sumsub compliant evaluation',
        'Focus on solid enterprises needing working capital',
        'Scale your current operations with international funding',
        'Transparent and secure bond tokenization',
      ],
      gradient: 'from-convexo-purple to-convexo-blue',
    },
    {
      title: 'Digital Assets Treasury',
      icon: '💱',
      description: 'Seamlessly trade local stablecoins with international stablecoins like USDC and EURC. Manage your digital asset treasury with institutional-grade tools.',
      features: [
        'Easy conversion to USDC and EURC',
        'Local stablecoin support',
        'Competitive exchange rates',
        'Institutional-grade security',
        'Real-time portfolio management',
      ],
      gradient: 'from-convexo-blue to-convexo-lightblue',
    },
    {
      title: 'Local Stablecoins for LATAM',
      icon: '🪙',
      description: 'Introducing ECOP for Colombia, powered by Uniswap V4 and Chainlink oracles. Access localized stablecoins designed for LATAM markets.',
      features: [
        'ECOP - Colombian Peso stablecoin',
        'Powered by Uniswap V4',
        'Chainlink price feeds',
        'Designed for LATAM markets',
        'Regulatory-compliant infrastructure',
      ],
      gradient: 'from-convexo-lightblue to-convexo-purple',
    },
    {
      title: 'OTC Services',
      icon: '🤝',
      description: 'Fast, private, and secure trading of digital assets with our professional traders. Get personalized service for large volume trades.',
      features: [
        'Professional trader support',
        'Private and secure transactions',
        'Fast execution',
        'Competitive pricing for large volumes',
        'White-glove service',
      ],
      gradient: 'from-convexo-purple to-convexo-navy',
    },
    {
      title: 'Payments',
      icon: '💳',
      description: 'Streamline your business payments. Save payment information and pay contractors and suppliers using stablecoins.',
      features: [
        'Pay contractors with stablecoins',
        'Supplier payment management',
        'Secure payment information storage',
        'Automated payment scheduling',
        'Multi-currency support',
      ],
      gradient: 'from-convexo-navy to-convexo-blue',
    },
  ];

  return (
    <section id="products" className="py-24 bg-convexo-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-convexo-navy mb-4">
            Our Products
          </h2>
          <p className="text-xl text-convexo-blue max-w-3xl mx-auto">
            Comprehensive institutional DeFi solutions designed for LATAM enterprises
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {products.map((product, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className={`h-2 bg-gradient-to-r ${product.gradient}`}></div>
              <div className="p-8">
                <div className="text-5xl mb-4">{product.icon}</div>
                <h3 className="text-3xl font-bold text-convexo-navy mb-4">
                  {product.title}
                </h3>
                <p className="text-convexo-blue mb-6 text-lg">
                  {product.description}
                </p>
                <ul className="space-y-3">
                  {product.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <svg
                        className="w-6 h-6 text-convexo-purple mr-3 flex-shrink-0 mt-0.5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

