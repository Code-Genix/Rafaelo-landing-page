import "./index.css";
import { HeroSection } from "./components/sections/hero-section.container";
import { TestimonialsSection } from "./components/sections/testimonials.container";
import { FrameworkSection } from "./components/sections/framework.container";
import { PortfolioSection } from "./components/sections/portfolio.container";
import { CalculatorSection } from "./components/sections/calculator.container";
import { ModulesSection } from "./components/sections/modules.container";
import { CommunitySection } from "./components/sections/community.container";
import { TestimonialQuoteSection } from "./components/sections/testimonial-quote.container";
import { PricingSection } from "./components/sections/pricing.container";

export default function App() {
  return (
    <div className="w-full bg-black min-h-screen">
      <HeroSection />
      <TestimonialsSection />
      <FrameworkSection />
      <PortfolioSection />
      <CalculatorSection />
      <ModulesSection />
      <CommunitySection />
      <TestimonialQuoteSection />
      <PricingSection />
    </div>
  );
}
