import type { Dictionary } from './es';

export const en = {
  meta: {
    siteName: 'Cosmos Compass',
    tagline: 'Software for real operations',
    home: {
      title: 'Systems that put real work in order',
      description:
        'We design custom software to organize operations across domotics, agriculture, industry and health. Solutions built on the real process, not industry packages.',
    },
    contact: {
      title: 'Contact',
      description:
        'Tell us what process you want to organize, automate or scale. We reply within two business days.',
    },
    privacy: {
      title: 'Privacy',
      description: 'How we handle the data we receive through the contact form.',
    },
  },
  nav: {
    home: 'Home',
    solutions: 'Solutions',
    solutionsList: 'Solutions',
    menuNote:
      'We do not sell an industry package: we build the software and design the solution with your team.',
    allProjects: 'View projects',
    tellUs: "Let's talk",
    contact: 'Contact',
    company: 'Studio',
    cta: "Let's talk",
    menu: 'Menu',
    close: 'Close',
    language: 'Language',
  },
  window: {
    screenTitle: 'Control panel',
    osdTitle: 'Selector',
    clock: '09:41',
    unit: {
      openPage: 'Open the area page',
      solutionsTitle: 'What we build here',
      workingTitle: 'We are working on the first product of this unit.',
      workingBody:
        'We have not published products here yet. We are mapping real operations in this sector to build the system it needs: if you operate in this industry, tell us what you want to put in order.',
      contact: 'Tell us your case',
    },
    contactPanel: {
      formTitle: 'Write to us',
      note: 'We reply within two business days.',
    },
  },
  common: {
    viewProjects: 'View projects',
    viewProject: 'View product',
    talkToUs: "Let's talk",
    comingSoon: 'Coming soon',
    active: 'Active',
    exploration: 'In exploration',
    email: 'Email',
    project: 'project',
    status: 'Status',
    stack: 'Stack',
    domotics: 'Domotics',
    industrial: 'Industrial',
    agriculture: 'Agriculture',
    medical: 'Health',
  },
  home: {
    hero: {
      title: 'Systems that put real work in order.',
      titleAccent: 'in order',
      subtitle:
        'We build custom software to put operations in order across domotics, agriculture, industry and health. Fewer parallel spreadsheets, fewer ownerless data points and fewer blind decisions.',
      note: 'We map the operation, build the system and run it with evidence.',
      primaryCta: 'See the products',
      secondaryCta: "Let's talk",
      valuesLabel: 'How we work',
      value1: 'Domain-first: we map the real process before writing code',
      value2: 'Security & traceability built in from day one',
      value3: 'Custom software, not industry packages',
      value4: 'We ship, measure, and iterate with evidence',
      valuesNote: 'Four principles. Every project.',
    },
    units: {
      domotics: 'Devices, access and spaces',
      industrial: 'Line, logistics and quality',
      agriculture: 'Crops, alerts and traceability',
      medical: 'Scheduling, records and documents',
    },
    company: {
      teaser:
        'We are a software studio that works on real operations: we map the process, order the domain and build the system with your team, not an industry package.',
      title: 'Studio and method.',
      body: 'Cosmos Compass builds custom software for four real operations: domotics, agriculture, industry and health. We do not resell third-party products: we write the system your operation needs, put it in place and keep it running with evidence.',
      cta: 'Learn more',
    },
    domains: {
      title: 'Four areas. Custom software in each one.',
      subtitle:
        'We do not sell a package per industry: we build the system your operation needs. Each area has its own rules, data and way of working.',
      viewArea: 'View area',
      customTitle: 'Your operation does not fit an area?',
      customText:
        'We also build custom software from scratch: we map the process and design the solution with you.',
      customCta: "Let's talk",
    },
    projects: {
      label: 'Products',
      title: 'Software already at work.',
      subtitle:
        'Smart House, Fitness Center and Health consultory: custom systems for homes, gyms and clinics.',
      cta: 'View all projects',
    },
    approach: {
      title: 'The problem first. Then the system.',
      subtitle: 'A short method to move from intuition to a measurable operation.',
      steps: [
        {
          number: '01',
          title: 'We understand the operation',
          description:
            'We map the real flow, the risks and the decisions that slow the team down today. Still no code.',
        },
        {
          number: '02',
          title: 'We build the core',
          description:
            'Data model, permissions and traceability first. The interface rests on a foundation that holds up as you grow.',
        },
        {
          number: '03',
          title: 'We operate and measure',
          description:
            'We ship, observe and adjust with evidence. The software keeps living after launch.',
        },
      ],
    },
    cta: {
      title: 'Does your operation need a system that holds up?',
      subtitle:
        'Tell us what is breaking, what is reconciled by hand or what you cannot see. We reply with an initial diagnosis.',
      button: "Let's talk about your case",
    },
  },
  project: {
    challenge: 'The challenge',
    approach: 'Our approach',
    capabilities: 'What it includes',
    tech: 'Technical sheet',
    ctaTitle: 'Interested in this product?',
    ctaSubtitle: 'Tell us about your case and we will see if it fits what we have already built.',
    ctaButton: "Let's talk",
    ctaButtonBuy: 'Buy now',
    ctaButtonDemo: 'Request demo',
    customTitle: "Not what you're looking for?",
    customSubtitle:
      'We offer custom development for your operation. Tell us your case and we will design the solution you need.',
    customButton: 'Request custom development',
    paymentTitle: 'Payment methods',
    paymentMethods: {
      online: 'Online payment (card)',
      transfer: 'Bank deposit / Transfer',
      transferNote: 'Send proof of payment',
      paypal: 'PayPal',
      mercadolibre: 'MercadoLibre',
    },
    payment: {
      selectMethod: 'Choose how to pay',
      amount: 'Total to pay',
      card: {
        title: 'Card (Stripe)',
        description: 'Secure credit/debit card payment',
      },
      transfer: {
        title: 'Bank Transfer / Deposit',
        description: 'Bank deposit, send proof of payment',
        instructions: 'Bank details',
        uploadProof: 'Upload proof',
        pending: 'Proof received, we verify in 24h',
      },
      paypal: {
        title: 'PayPal',
        description: 'Pay with your PayPal account',
      },
      mercadopago: {
        title: 'MercadoLibre / MercadoPago',
        description: 'Installments or balance',
      },
      success: 'Payment confirmed!',
      cancel: 'Payment cancelled',
      error: 'An error occurred, please try again',
      confirmEmailSent: 'We sent the confirmation to your email.',
    },
    next: 'Next project',
    live: 'In operation',
    tutorialsTitle: 'Tutorials & guides',
    tutorialsSubtitle: 'Learn to configure and get the most out of your system.',
    specsTitle: 'Technical specifications',
    screenshots: 'System screenshots',
    viewSuite: 'View system suite',
    buyNow: 'Buy now',
    requestDemo: 'Request demo',
    techSpecs: 'Technical specs',
    file: 'File',
    version: 'Version',
    size: 'Size',
    platform: 'Platform',
    architecture: 'Architecture',
    dependencies: 'Dependencies',
    checksum: 'Checksum',
  },
  licensing: {
    title: 'License & module comparison',
    subtitle:
      'Each license unlocks modules based on your operation maturity. The traceability and audit core is included in all.',
    module: 'Module',
    basic: 'Basic',
    professional: 'Professional',
    enterprise: 'Enterprise',
    included: 'Included',
    note: 'Licenses per organization. No mandatory recurring fees. Updates included for 12 months.',
  },
  contact: {
    title: "Let's talk about your operation.",
    subtitle:
      'Tell us what process you want to organize, automate or scale. We reply within two business days.',
    form: {
      name: 'Name',
      namePlaceholder: 'Your name',
      email: 'Email',
      emailPlaceholder: 'you@company.com',
      company: 'Company',
      companyPlaceholder: 'Company name',
      project: 'Project of interest',
      projectPlaceholder: 'Not specified',
      projectOptional: 'Optional',
      projectOther: 'Other',
      message: 'Message',
      messagePlaceholder: 'Briefly tell us what you want to solve.',
      consent: 'I agree that Cosmos Compass may use this data to reply to my inquiry.',
      submit: 'Send message',
      submitting: 'Sending…',
      successTitle: 'Message sent',
      successBody: 'Thanks for reaching out. We will reply within two business days.',
      errorTitle: 'We could not send your message',
      errorBody: 'Please try again or email us directly.',
      fallback: 'The form is not configured yet. Your email client will open with the message.',
      requiredHint: 'Fields marked with * are required.',
      honeypot: 'Do not fill this field',
    },
    direct: {
      title: 'Direct contact',
      subtitle: 'If you prefer to write without the form, this is the way.',
      emailLabel: 'Email',
      responseLabel: 'Response time',
      responseValue: '2 business days',
    },
    privacyNote: 'By submitting the form you accept our privacy policy.',
  },
  privacy: {
    title: 'How we handle your data.',
    updated: 'Last updated: October 2026',
    intro:
      'This policy describes what information we receive when you use the contact form and how we use it.',
    sections: [
      {
        title: 'What data we receive',
        body: 'Name, email, company, project of interest (optional) and the message you choose to send. We do not ask for sensitive data.',
      },
      {
        title: 'What we use it for',
        body: 'Only to reply to your inquiry and evaluate a possible collaboration. We do not sell or share your data with third parties for marketing.',
      },
      {
        title: 'Where it is processed',
        body: 'The form is processed by Formspree, which delivers the message to our email. You can review its privacy policy at formspree.io.',
      },
      {
        title: 'How long we keep it',
        body: 'We keep the inquiry for as long as needed to reply and, afterwards, for a reasonable period to follow up. You can request its deletion at any time.',
      },
      {
        title: 'Your rights',
        body: 'You can request access, correction or deletion of your data by writing to hola@cosmoscompass.com.',
      },
    ],
  },
  domain: {
    productsTitle: 'Products',
  },
  designs: {
    title: 'Three design directions.',
    subtitle:
      'The same brand, three visual worlds built to compare in the browser. Pick the one that stays.',
    current: 'Current direction',
    labels: {
      esfera: 'Celestial sphere',
      planetario: 'Orbital planetarium',
      skeuomorphic: 'Skeuomorphic celestial sphere',
    },
    descriptions: {
      esfera:
        'An observatory globe under a glass dome: deep space blue, a white star map and a gold meridian.',
      planetario: 'A central compass with the four units orbiting the instrument like planets.',
      skeuomorphic:
        'The same celestial sphere with skeuomorphism at full strength: chrome, bevels, glass and physical depth.',
    },
    visit: 'Open this direction',
    banner: 'You are viewing',
    switch: 'Switch direction',
  },
  footer: {
    tagline: 'Software for real industries.',
    explore: 'Explore',
    units: 'Units',
    designs: 'Design directions',
    contact: 'Contact',
    legal: 'Legal',
    rights: 'All rights reserved.',
    privacy: 'Privacy',
    email: 'Email',
    madeWith: 'Designed and built by Cosmos Compass.',
  },
  notFound: {
    title: 'This page does not exist.',
    subtitle: 'The link may have changed, or the page has not been published yet.',
    cta: 'Back home',
  },
  a11y: {
    skipToContent: 'Skip to content',
    openMenu: 'Open menu',
    closeMenu: 'Close menu',
    switchLanguage: 'Switch language',
  },
} satisfies Dictionary;
