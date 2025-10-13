// Central asset management for all images
// This allows for easy importing and better tree-shaking

// Hero Section
import heroBanner from './hero-banner-image.png';
import profileImage from './image-1.png';

// Framework Section
import aboutUsBackground from './about-us-background.png';
import frameworkImage from './framework.png';

// Portfolio Section
import portfolioBackground from './image-3.png';

// Calculator Section
import calculatorBackground from './vector-3.png';

// Community Section
import handsPhone from './hands-phone.png';
import blueMessenger from './blue-messenger.png';

// Testimonials
import testimonialsGroup from './group-4.png';
import testimonialBackground from './group-24.png';
import quoteImage from './quote-marks.png';

// Other Assets
import lifetimeAccess from './image-5.png';
import group1 from './group-1.png';
import frame37 from './frame-37.png';

// Export all images as a named object for easy access
export const images = {
  // Hero
  heroBanner,
  profileImage,
  
  // Framework
  aboutUsBackground,
  frameworkImage,
  
  // Portfolio
  portfolioBackground,
  
  // Calculator
  calculatorBackground,
  
  // Community
  handsPhone,
  blueMessenger,
  
  // Testimonials
  testimonialsGroup,
  testimonialBackground,
  quoteImage,
  
  // Other
  lifetimeAccess,
  group1,
  frame37,
} as const;

// Export individual images for direct imports
export {
  heroBanner,
  profileImage,
  aboutUsBackground,
  frameworkImage,
  portfolioBackground,
  calculatorBackground,
  handsPhone,
  blueMessenger,
  testimonialsGroup,
  testimonialBackground,
  quoteImage,
  lifetimeAccess,
  group1,
  frame37,
};
