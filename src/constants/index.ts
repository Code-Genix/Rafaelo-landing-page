// Design tokens and constants

export const COLORS = {
  primary: '#FFC20E',
  primaryHover: '#e6a20b',
  secondary: '#d99c00',
  secondaryHover: '#ffaa00',
  black: '#070707',
  darkGray: '#1a1a1a',
  gray: '#c9c9c9',
  white: '#ffffff',
  gradientFrom: '#d99c00',
  gradientTo: '#ffaa00',
} as const;

export const BREAKPOINTS = {
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  '2xl': '1536px',
} as const;

export const ANIMATIONS = {
  transition: 'transition-all duration-300',
  transitionColors: 'transition-colors duration-300',
  transitionTransform: 'transition-all transform',
  scrollSpeed: '40s',
} as const;

export const CONTENT = {
  hero: {
    title: 'Rafaelo',
    subtitle: 'TikTok Masterclass',
    headline: ['Zero to', '8 Million'],
    ctaText: "I'm Interested",
    members: '+1000 MEMBERS',
    banner: 'WAY TO $50K/MONTH',
  },
  framework: {
    title: 'READY-TO-WORK FRAMEWORK',
    cards: {
      center: {
        title: 'Proven Growth',
        description: 'From 0 to 8M',
      },
    },
  },
  portfolio: {
    title: ['FOLLOWERS = CLOUT.', 'CLOUT = CASH.', "HERE'S THE GAME"],
    ctaText: 'Discover Your Earnings',
    tiers: [
      { followers: '10K', earnings: '$1,000 / MONTH' },
      { followers: '100K', earnings: '$5,000 / MONTH' },
      { followers: '1M', earnings: '$20,000 / MONTH' },
      { followers: '8M', earnings: '$100,000+ / MONTH' },
    ],
  },
  calculator: {
    title: 'ESTIMATE YOUR EARNINGS',
    defaultFollowers: '10,000',
    defaultEarnings: '$10,000',
    ctaText: 'Join Now To Start Earning',
  },
  modules: {
    title: 'Course Modules',
    moduleCount: 10,
    placeholder: {
      title: 'Orem Ipsum Dolor Sit Amet,',
      subtitle: 'Consectetur Adipiscing Elit',
    },
  },
  community: {
    members: '2000+',
    title: 'COMMUNITY OF HUSTLERS',
    subtitle: 'LOREM IPSUM DOLOR SIT AMET, CONSECTETUR ADIPISCING ELIT',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elitorem ipsum dolor sit amet, consectetur adipiscing elitorem ipsum dolor sit amet, consectetur adipiscing elitorem ipsum dolor sit amet, consectetur adipiscing elit.',
    ctaText: 'Join Community',
  },
  testimonial: {
    quote: "THIS COURSE IS 100% MY SYSTEM, BUILT WITH LOVE, HUSTLE, AND REAL RESULTS",
    signature: 'Rafaelo',
    ctaText: 'Start The Journey',
  },
  pricing: {
    title: 'LIFETIME ACCESS.',
    subtitle: 'ONE-TIME PAYMENT.',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elitorem ipsum dolor sit amet, consectetur adipiscing elitorem ipsum dolor sit amet, consectetur adipiscing elitorem ipsum dolor sit amet, consectetur adipiscing elit',
    price: '$100',
    ctaText: 'BUY NOW',
  },
} as const;

export const NAVIGATION = {
  links: [
    { label: 'About me', href: '#about' },
    { label: 'Benefits', href: '#benefits' },
  ],
  cta: {
    primary: 'Get The Access',
    secondary: 'Get Started',
  },
} as const;

