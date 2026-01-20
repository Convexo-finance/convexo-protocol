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
      home: 'Home',
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
      digitalIds: {
        title: 'Digital Identity Tiers',
        description: 'Progressive verification system with 4 tiers: Private ID, Limited Partners (Individuals & Enterprises), and E-Credit.',
        feature1: 'Tier 1: Private ID with zkPassport',
        feature2: 'Tier 2: Limited Partners (Veriff/Sumsub)',
        feature3: 'Tier 3: E-Credit with AI scoring',
        feature4: 'Privacy persistent verification',
      },
      eloans: {
        title: 'E-LOANS',
        description: 'Electronic Credit and Contract services using EIP-4626 framework. Create loans with legal contracts and minimum 12% APY.',
        feature1: 'E-Credits using EIP-4626 standard',
        feature2: 'E-Contracts with legal documents',
        feature3: 'Minimum 12% APY',
        feature4: 'Tier 3 verification required',
      },
    },
    footer: {
      description: 'Institutional DeFi solutions connecting LATAM enterprises with global capital markets.',
      productsTitle: 'Products',
      companyTitle: 'Company',
      copyright: 'All rights reserved',
    },
    chains: {
      deployed: 'Deployed On',
      subtitle: 'Convexo Protocol is available on leading blockchain networks',
      base: 'Base',
      ethereum: 'Ethereum',
      unichain: 'UniChain',
    },
    digitalIds: {
      title: 'Digital Identity Tiers',
      subtitle: 'Progressive verification system with 4 tiers of identity verification and compliance',
      learnMore: 'Learn More About Digital IDs',
      tier1: {
        title: 'Private ID',
        description: 'Private persistent NFT created using zkPassport that verifies Personhood, age +18, and KYC users using OpenSanctions.',
        req1: 'zkPassport verification for Personhood',
        req2: 'Age verification (18+)',
        req3: 'OpenSanctions KYC screening',
      },
      tier2: {
        title: 'Limited Partners',
        description: 'Enhanced verification for individuals and enterprises',
        individuals: {
          title: 'Individuals',
          description: 'Verified with Veriff for individual identity validation',
        },
        enterprises: {
          title: 'Enterprises',
          description: 'Verified with Sumsub for business entity validation',
        },
      },
      tier3: {
        title: 'E-Credit',
        description: 'AI-powered credit profile using Business Model Information and Financial Information analyzed by an open-source AI model with open criteria.',
        req1: 'Complete business model information',
        req2: 'Financial information analysis',
      },
    },
    treasury: {
      title: 'Treasury Services',
      subtitle: 'All treasury functions require at least Private ID verification',
      requirement: 'Requirement',
      learnMore: 'Learn More',
      otc: {
        title: 'OTC Orders',
        description: 'Cash-in and cash-out using Telegram, WhatsApp, and Signal. We charge a fixed spread of 1.5% over market price with secure cash delivery.',
        contactVia: 'Contact via',
        feature1: '1.5% fixed spread over market price',
        feature2: 'Secure cash delivery',
        feature3: 'Privacy persistent with zkPassport',
        feature4: 'Direct contact via messaging apps',
        requirement: 'Private ID verification required',
      },
      swaps: {
        title: 'Swaps with Uniswap V4',
        description: 'Swap and be a liquidity provider in Private Persistent and Compliant Liquidity Pools with Uniswap V4.',
        feature1: '0.3% spread on swaps',
        feature2: 'Private Persistent Pools',
        feature3: 'Compliant Liquidity Pools',
        feature4: 'Based on Google API Price (USD-COP)',
        requirement: 'Private ID verification required',
      },
      monetization: {
        title: 'Monetization of Local Stablecoins',
        description: 'Redeem and claim local stablecoins powered by Chainlink Cross-Chain Interoperability Protocol (CCIP).',
        feature1: 'Chainlink CCIP powered',
        feature2: 'Local stablecoin redemption',
        feature3: 'Cross-chain interoperability',
        requirement: 'Private ID verification required',
      },
    },
    eloans: {
      title: 'E-LOANS',
      subtitle: 'Electronic Credit and Contract services for verified Tier 3 users',
      requirement: 'Requires Tier 3: Private ID + KYC/KYB + Credit Score',
      learnMore: 'Learn More About E-LOANS',
      framework: 'Framework',
      credits: {
        title: 'E-Credits',
        description: 'Users create loans to be fulfilled by counterparties using the EIP-4626 framework standard.',
        feature1: 'EIP-4626 standard implementation',
        feature2: 'User-created loans',
        feature3: 'Counterparty fulfillment',
        feature4: 'Open and transparent lending',
        framework: 'EIP-4626 Tokenized Vault Standard',
      },
      contracts: {
        title: 'E-Contracts',
        description: 'Each vault must be attached to a predefined contract to activate the loan. Contracts are built from strong legal documents filled by the borrower and signed by the lender.',
        feature1: 'Legal document-based contracts',
        feature2: 'Borrower fills contract details',
        feature3: 'Lender signature required for activation',
        feature4: 'Funds only accessible after lender approval',
        apy: 'Minimum APY: 12%',
      },
    },
  },
  es: {
    nav: {
      home: 'Inicio',
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
      digitalIds: {
        title: 'Niveles de Identidad Digital',
        description: 'Sistema de verificación progresivo con 4 niveles: ID Privado, Socios Limitados (Individuos y Empresas), y E-Crédito.',
        feature1: 'Nivel 1: ID Privado con zkPassport',
        feature2: 'Nivel 2: Socios Limitados (Veriff/Sumsub)',
        feature3: 'Nivel 3: E-Crédito con scoring IA',
        feature4: 'Verificación privada persistente',
      },
      eloans: {
        title: 'E-PRÉSTAMOS',
        description: 'Servicios de Crédito y Contrato Electrónicos usando marco EIP-4626. Crea préstamos con contratos legales y APY mínimo del 12%.',
        feature1: 'E-Créditos usando estándar EIP-4626',
        feature2: 'E-Contratos con documentos legales',
        feature3: 'APY mínimo del 12%',
        feature4: 'Se requiere verificación Nivel 3',
      },
    },
    footer: {
      description: 'Soluciones DeFi institucionales conectando empresas LATAM con mercados de capital globales.',
      productsTitle: 'Productos',
      companyTitle: 'Empresa',
      copyright: 'Todos los derechos reservados',
    },
    chains: {
      deployed: 'Desplegado En',
      subtitle: 'Convexo Protocol está disponible en las principales redes blockchain',
      base: 'Base',
      ethereum: 'Ethereum',
      unichain: 'UniChain',
    },
    digitalIds: {
      title: 'Niveles de Identidad Digital',
      subtitle: 'Sistema de verificación progresivo con 4 niveles de verificación de identidad y cumplimiento',
      learnMore: 'Conoce Más Sobre Identidades Digitales',
      tier1: {
        title: 'ID Privado',
        description: 'NFT privado persistente creado usando zkPassport que verifica Personhood, edad +18, y usuarios KYC usando OpenSanctions.',
        req1: 'Verificación zkPassport para Personhood',
        req2: 'Verificación de edad (18+)',
        req3: 'Screening KYC de OpenSanctions',
      },
      tier2: {
        title: 'Socios Limitados',
        description: 'Verificación mejorada para individuos y empresas',
        individuals: {
          title: 'Individuos',
          description: 'Verificado con Veriff para validación de identidad individual',
        },
        enterprises: {
          title: 'Empresas',
          description: 'Verificado con Sumsub para validación de entidades comerciales',
        },
      },
      tier3: {
        title: 'E-Crédito',
        description: 'Perfil crediticio con IA usando Información del Modelo de Negocio e Información Financiera analizada por un modelo de IA de código abierto con criterios abiertos.',
        req1: 'Información completa del modelo de negocio',
        req2: 'Análisis de información financiera',
      },
    },
    treasury: {
      title: 'Servicios de Tesorería',
      subtitle: 'Todas las funciones de tesorería requieren al menos verificación de ID Privado',
      requirement: 'Requisito',
      learnMore: 'Conocer Más',
      otc: {
        title: 'Órdenes OTC',
        description: 'Cash-in y cash-out usando Telegram, WhatsApp y Signal. Cobramos un spread fijo del 1.5% sobre el precio de mercado con entrega segura en efectivo.',
        contactVia: 'Contacto vía',
        feature1: '1.5% de spread fijo sobre precio de mercado',
        feature2: 'Entrega segura en efectivo',
        feature3: 'Privacidad persistente con zkPassport',
        feature4: 'Contacto directo vía aplicaciones de mensajería',
        requirement: 'Se requiere verificación de ID Privado',
      },
      swaps: {
        title: 'Swaps con Uniswap V4',
        description: 'Intercambia y sé proveedor de liquidez en Pools de Liquidez Privadas Persistentes y Cumplidoras con Uniswap V4.',
        feature1: '0.3% de spread en swaps',
        feature2: 'Pools Privadas Persistentes',
        feature3: 'Pools de Liquidez Cumplidoras',
        feature4: 'Basado en Precio API de Google (USD-COP)',
        requirement: 'Se requiere verificación de ID Privado',
      },
      monetization: {
        title: 'Monetización de Stablecoins Locales',
        description: 'Redime y reclama stablecoins locales potenciadas por Chainlink Cross-Chain Interoperability Protocol (CCIP).',
        feature1: 'Potenciado por Chainlink CCIP',
        feature2: 'Redención de stablecoins locales',
        feature3: 'Interoperabilidad cross-chain',
        requirement: 'Se requiere verificación de ID Privado',
      },
    },
    eloans: {
      title: 'E-PRÉSTAMOS',
      subtitle: 'Servicios de Crédito y Contrato Electrónicos para usuarios verificados Nivel 3',
      requirement: 'Requiere Nivel 3: ID Privado + KYC/KYB + Puntuación Crediticia',
      learnMore: 'Conoce Más Sobre E-PRÉSTAMOS',
      framework: 'Marco',
      credits: {
        title: 'E-Créditos',
        description: 'Los usuarios crean préstamos para ser cumplidos por contrapartes usando el marco estándar EIP-4626.',
        feature1: 'Implementación estándar EIP-4626',
        feature2: 'Préstamos creados por usuarios',
        feature3: 'Cumplimiento por contrapartes',
        feature4: 'Préstamos abiertos y transparentes',
        framework: 'Estandar EIP-4626 Tokenized Vault',
      },
      contracts: {
        title: 'E-Contratos',
        description: 'Cada bóveda debe estar adjunta a un contrato predefinido para activar el préstamo. Los contratos se construyen a partir de documentos legales sólidos completados por el prestatario y firmados por el prestamista.',
        feature1: 'Contratos basados en documentos legales',
        feature2: 'El prestatario completa los detalles del contrato',
        feature3: 'Firma del prestamista requerida para activación',
        feature4: 'Fondos solo accesibles después de aprobación del prestamista',
        apy: 'APY Mínimo: 12%',
      },
    },
  },
};

