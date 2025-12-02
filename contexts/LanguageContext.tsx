'use client';

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

type Language = 'en' | 'es';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>('en');

  useEffect(() => {
    // Load language from localStorage
    const savedLanguage = localStorage.getItem('language') as Language;
    if (savedLanguage && (savedLanguage === 'en' || savedLanguage === 'es')) {
      setLanguageState(savedLanguage);
    }
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('language', lang);
  };

  const t = (key: string): string => {
    const keys = key.split('.');
    let value: any = translations[language];
    
    for (const k of keys) {
      if (value && typeof value === 'object') {
        value = value[k];
      } else {
        return key; // Return key if translation not found
      }
    }
    
    return typeof value === 'string' ? value : key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}

// Translation dictionaries
const translations = {
  en: {
    nav: {
      products: 'Products',
      about: 'About Us',
      launchApp: 'Launch App',
      viewAll: 'View All Products',
    },
    hero: {
      title: 'Institutional',
      titleHighlight: 'DeFi Solutions',
      titleSuffix: 'for LATAM',
      subtitle: 'Access international funding through tokenized corporate bonds and institutional-grade digital asset services',
      getStarted: 'Get Started',
      exploreProducts: 'Explore Products',
      aiPowered: 'AI-Powered',
      aiPoweredSub: 'Credit Scoring',
      nft: 'NFT',
      nftSub: 'Evaluation Certificates',
      uniswap: 'Uniswap V4',
      uniswapSub: 'Integration',
      chainlink: 'Chainlink',
      chainlinkSub: 'Oracles',
    },
    coinWidget: {
      title: 'Live Market Prices',
    },
    cryptoRails: {
      badge: 'THE FUTURE OF FINANCE',
      title: 'Why International Crypto Rails Matter',
      description1: 'Traditional cross-border payment systems are slow, expensive, and opaque. Crypto rails offer a revolutionary alternative: instant settlement, transparent pricing, and 24/7 availability. For businesses in Latin America, this isn\'t just convenient—it\'s transformative.',
      description2: 'With blockchain-based payment rails, LATAM enterprises can access international markets without the traditional barriers. No more waiting 3-5 days for wire transfers. No more losing 3-7% to intermediary fees. No more dealing with banking hour restrictions.',
      cta: 'Explore Our Treasury Solutions',
      instantTitle: 'Instant Settlement',
      instantDesc: 'Transfer value globally in seconds, not days. No more waiting for bank clearances.',
      lowerCostsTitle: 'Lower Costs',
      lowerCostsDesc: 'Save up to 80% on international transfer fees compared to traditional banking.',
      globalTitle: 'Global Access',
      globalDesc: 'Reach any market, any time. True 24/7 financial operations without borders.',
      transparentTitle: 'Full Transparency',
      transparentDesc: 'Every transaction is traceable and verifiable on the blockchain. Complete audit trails.',
      settlementTime: 'Average Settlement Time',
      lowerFees: 'Lower Transaction Fees',
      available: 'Always Available',
      countries: 'Countries Accessible',
    },
    fundingGap: {
      badge: 'THE LATAM OPPORTUNITY',
      title: 'Bridging the LATAM Funding Gap',
      subtitle: 'Latin America faces a massive funding gap. We\'re here to change that.',
      challengeTitle: 'The Challenge',
      challenge1Title: 'Limited Access to Capital',
      challenge1Desc: 'SMEs in LATAM face rejection rates of up to 40% for traditional bank loans, even when creditworthy.',
      challenge2Title: 'High Cost of Capital',
      challenge2Desc: 'Interest rates in LATAM can be 2-3x higher than in developed markets, stifling growth.',
      challenge3Title: 'Currency Volatility',
      challenge3Desc: 'Local currency depreciation makes international funding risky and unpredictable.',
      challenge4Title: 'Complex Processes',
      challenge4Desc: 'Traditional international funding involves mountains of paperwork and months of waiting.',
      solutionTitle: 'The Solution',
      solution1Title: 'Tokenized Corporate Bonds',
      solution1Desc: 'Access international investors through blockchain-based corporate bonds with transparent pricing.',
      solution2Title: 'AI-Powered Credit Scoring',
      solution2Desc: 'Fair, transparent evaluation that looks beyond traditional credit scores to assess true potential.',
      solution3Title: 'Stablecoin Infrastructure',
      solution3Desc: 'Mitigate currency risk with USDC, EURC, and local stablecoins like ECOP for Colombia.',
      solution4Title: 'Streamlined Digital Process',
      solution4Desc: 'Complete evaluation and funding in weeks, not months, with full digital workflow.',
      impactTitle: 'The Impact of the Funding Gap',
      stat1: 'LATAM SME Credit Gap',
      stat1Desc: 'Annual funding shortage for small and medium enterprises',
      stat2: 'SMEs Are Credit Constrained',
      stat2Desc: 'Cannot access the capital they need to grow',
      stat3: 'Average Interest Rates',
      stat3Desc: 'Significantly higher than developed markets',
      ctaTitle: 'Ready to Access International Funding?',
      ctaDesc: 'Join leading LATAM enterprises leveraging blockchain technology for growth',
      ctaButton: 'Explore Tokenized Bonds',
    },
    products: {
      title: 'Our Products',
      subtitle: 'Comprehensive institutional DeFi solutions designed for LATAM enterprises',
      learnMore: 'Learn More',
      tokenizedBonds: {
        title: 'Tokenized Corporate Bonds',
        description: 'Access international funding through compliant, tokenized corporate bonds. Our comprehensive evaluation process includes Sumsub verification and AI-powered credit scoring.',
        feature1: 'AI-generated credit score with NFT certification',
        feature2: 'Sumsub compliant evaluation',
        feature3: 'Focus on solid enterprises needing working capital',
        feature4: 'Scale your current operations with international funding',
        feature5: 'Transparent and secure bond tokenization',
      },
      treasury: {
        title: 'Digital Assets Treasury',
        description: 'Seamlessly trade local stablecoins with international stablecoins like USDC and EURC. Manage your digital asset treasury with institutional-grade tools.',
        feature1: 'Easy conversion to USDC and EURC',
        feature2: 'Local stablecoin support',
        feature3: 'Competitive exchange rates',
        feature4: 'Institutional-grade security',
        feature5: 'Real-time portfolio management',
      },
      stablecoins: {
        title: 'Local Stablecoins for LATAM',
        description: 'Introducing ECOP for Colombia, powered by Uniswap V4 and Chainlink oracles. Access localized stablecoins designed for LATAM markets.',
        feature1: 'ECOP - Colombian Peso stablecoin',
        feature2: 'Powered by Uniswap V4',
        feature3: 'Chainlink price feeds',
        feature4: 'Designed for LATAM markets',
        feature5: 'Regulatory-compliant infrastructure',
      },
      otc: {
        title: 'OTC Services',
        description: 'Fast, private, and secure trading of digital assets with our professional traders. Get personalized service for large volume trades.',
        feature1: 'Professional trader support',
        feature2: 'Private and secure transactions',
        feature3: 'Fast execution',
        feature4: 'Competitive pricing for large volumes',
        feature5: 'White-glove service',
      },
      payments: {
        title: 'Payments',
        description: 'Streamline your business payments. Save payment information and pay contractors and suppliers using stablecoins.',
        feature1: 'Pay contractors with stablecoins',
        feature2: 'Supplier payment management',
        feature3: 'Secure payment information storage',
        feature4: 'Automated payment scheduling',
        feature5: 'Multi-currency support',
      },
    },
    footer: {
      description: 'Institutional DeFi solutions connecting LATAM enterprises with global capital markets.',
      productsTitle: 'Products',
      companyTitle: 'Company',
      copyright: 'All rights reserved',
    },
  },
  es: {
    nav: {
      products: 'Productos',
      about: 'Nosotros',
      launchApp: 'Abrir App',
      viewAll: 'Ver Todos los Productos',
    },
    hero: {
      title: 'Soluciones',
      titleHighlight: 'DeFi Institucionales',
      titleSuffix: 'para LATAM',
      subtitle: 'Accede a financiamiento internacional a través de bonos corporativos tokenizados y servicios de activos digitales de grado institucional',
      getStarted: 'Comenzar',
      exploreProducts: 'Explorar Productos',
      aiPowered: 'Inteligencia Artificial',
      aiPoweredSub: 'Scoring Crediticio',
      nft: 'NFT',
      nftSub: 'Certificados de Evaluación',
      uniswap: 'Uniswap V4',
      uniswapSub: 'Integración',
      chainlink: 'Chainlink',
      chainlinkSub: 'Oráculos',
    },
    coinWidget: {
      title: 'Precios en Tiempo Real',
    },
    cryptoRails: {
      badge: 'EL FUTURO DE LAS FINANZAS',
      title: 'Por Qué Importan los Rieles Cripto Internacionales',
      description1: 'Los sistemas de pago transfronterizos tradicionales son lentos, costosos y opacos. Los rieles cripto ofrecen una alternativa revolucionaria: liquidación instantánea, precios transparentes y disponibilidad 24/7. Para las empresas en América Latina, esto no es solo conveniente—es transformador.',
      description2: 'Con rieles de pago basados en blockchain, las empresas LATAM pueden acceder a mercados internacionales sin las barreras tradicionales. No más esperas de 3-5 días para transferencias. No más pérdida del 3-7% en comisiones intermediarias. No más restricciones de horarios bancarios.',
      cta: 'Explorar Soluciones de Tesorería',
      instantTitle: 'Liquidación Instantánea',
      instantDesc: 'Transfiere valor globalmente en segundos, no días. Sin esperas por compensaciones bancarias.',
      lowerCostsTitle: 'Costos Más Bajos',
      lowerCostsDesc: 'Ahorra hasta 80% en comisiones de transferencias internacionales comparado con la banca tradicional.',
      globalTitle: 'Acceso Global',
      globalDesc: 'Alcanza cualquier mercado, en cualquier momento. Operaciones financieras 24/7 sin fronteras.',
      transparentTitle: 'Transparencia Total',
      transparentDesc: 'Cada transacción es rastreable y verificable en la blockchain. Auditorías completas.',
      settlementTime: 'Tiempo Promedio de Liquidación',
      lowerFees: 'Menores Comisiones de Transacción',
      available: 'Siempre Disponible',
      countries: 'Países Accesibles',
    },
    fundingGap: {
      badge: 'LA OPORTUNIDAD LATAM',
      title: 'Cerrando la Brecha de Financiamiento en LATAM',
      subtitle: 'América Latina enfrenta una brecha de financiamiento masiva. Estamos aquí para cambiar eso.',
      challengeTitle: 'El Desafío',
      challenge1Title: 'Acceso Limitado al Capital',
      challenge1Desc: 'Las PYMEs en LATAM enfrentan tasas de rechazo de hasta 40% para préstamos bancarios tradicionales, incluso siendo solventes.',
      challenge2Title: 'Alto Costo del Capital',
      challenge2Desc: 'Las tasas de interés en LATAM pueden ser 2-3x más altas que en mercados desarrollados, sofocando el crecimiento.',
      challenge3Title: 'Volatilidad Cambiaria',
      challenge3Desc: 'La depreciación de moneda local hace que el financiamiento internacional sea riesgoso e impredecible.',
      challenge4Title: 'Procesos Complejos',
      challenge4Desc: 'El financiamiento internacional tradicional implica montañas de papeleo y meses de espera.',
      solutionTitle: 'La Solución',
      solution1Title: 'Bonos Corporativos Tokenizados',
      solution1Desc: 'Accede a inversores internacionales a través de bonos corporativos basados en blockchain con precios transparentes.',
      solution2Title: 'Scoring Crediticio con IA',
      solution2Desc: 'Evaluación justa y transparente que va más allá de los puntajes crediticios tradicionales para evaluar el verdadero potencial.',
      solution3Title: 'Infraestructura de Stablecoins',
      solution3Desc: 'Mitiga el riesgo cambiario con USDC, EURC y stablecoins locales como ECOP para Colombia.',
      solution4Title: 'Proceso Digital Simplificado',
      solution4Desc: 'Completa la evaluación y financiamiento en semanas, no meses, con flujo de trabajo totalmente digital.',
      impactTitle: 'El Impacto de la Brecha de Financiamiento',
      stat1: 'Brecha Crediticia PYMEs LATAM',
      stat1Desc: 'Déficit anual de financiamiento para pequeñas y medianas empresas',
      stat2: 'PYMEs con Restricción Crediticia',
      stat2Desc: 'No pueden acceder al capital que necesitan para crecer',
      stat3: 'Tasas de Interés Promedio',
      stat3Desc: 'Significativamente más altas que mercados desarrollados',
      ctaTitle: '¿Listo para Acceder a Financiamiento Internacional?',
      ctaDesc: 'Únete a empresas LATAM líderes aprovechando la tecnología blockchain para crecer',
      ctaButton: 'Explorar Bonos Tokenizados',
    },
    products: {
      title: 'Nuestros Productos',
      subtitle: 'Soluciones DeFi institucionales integrales diseñadas para empresas LATAM',
      learnMore: 'Conocer Más',
      tokenizedBonds: {
        title: 'Bonos Corporativos Tokenizados',
        description: 'Accede a financiamiento internacional a través de bonos corporativos tokenizados y cumplimiento normativo. Nuestro proceso de evaluación integral incluye verificación Sumsub y scoring crediticio con IA.',
        feature1: 'Puntaje crediticio generado por IA con certificación NFT',
        feature2: 'Evaluación conforme con Sumsub',
        feature3: 'Enfoque en empresas sólidas que necesitan capital de trabajo',
        feature4: 'Escala tus operaciones actuales con financiamiento internacional',
        feature5: 'Tokenización de bonos transparente y segura',
      },
      treasury: {
        title: 'Tesorería de Activos Digitales',
        description: 'Intercambia sin problemas stablecoins locales con stablecoins internacionales como USDC y EURC. Administra tu tesorería de activos digitales con herramientas de grado institucional.',
        feature1: 'Conversión fácil a USDC y EURC',
        feature2: 'Soporte para stablecoins locales',
        feature3: 'Tipos de cambio competitivos',
        feature4: 'Seguridad de grado institucional',
        feature5: 'Gestión de portafolio en tiempo real',
      },
      stablecoins: {
        title: 'Stablecoins Locales para LATAM',
        description: 'Presentamos ECOP para Colombia, impulsado por Uniswap V4 y oráculos Chainlink. Accede a stablecoins localizadas diseñadas para mercados LATAM.',
        feature1: 'ECOP - Stablecoin de Peso Colombiano',
        feature2: 'Impulsado por Uniswap V4',
        feature3: 'Feeds de precios Chainlink',
        feature4: 'Diseñado para mercados LATAM',
        feature5: 'Infraestructura conforme a regulaciones',
      },
      otc: {
        title: 'Servicios OTC',
        description: 'Comercio rápido, privado y seguro de activos digitales con nuestros traders profesionales. Obtén servicio personalizado para operaciones de gran volumen.',
        feature1: 'Soporte de traders profesionales',
        feature2: 'Transacciones privadas y seguras',
        feature3: 'Ejecución rápida',
        feature4: 'Precios competitivos para grandes volúmenes',
        feature5: 'Servicio premium',
      },
      payments: {
        title: 'Pagos',
        description: 'Optimiza tus pagos empresariales. Guarda información de pago y paga a contratistas y proveedores usando stablecoins.',
        feature1: 'Paga a contratistas con stablecoins',
        feature2: 'Gestión de pagos a proveedores',
        feature3: 'Almacenamiento seguro de información de pago',
        feature4: 'Programación automatizada de pagos',
        feature5: 'Soporte multi-moneda',
      },
    },
    footer: {
      description: 'Soluciones DeFi institucionales conectando empresas LATAM con mercados de capital globales.',
      productsTitle: 'Productos',
      companyTitle: 'Empresa',
      copyright: 'Todos los derechos reservados',
    },
  },
};

