import { Button } from '../component';
import { images } from '../../assets/images';
import { CONTENT } from '../../constants';

export function PricingSection() {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Text Content */}
        <div className="flex flex-col items-center justify-center text-center space-y-6 sm:space-y-8 max-w-4xl mx-auto">
          {/* Headlines */}
          <div className="space-y-3 sm:space-y-4">
            <h2 className="text-[#FFC20E] text-3xl sm:text-4xl md:text-5xl font-bold uppercase tracking-wider">
              {CONTENT.pricing.title}
            </h2>
            <h3 className="text-white text-3xl sm:text-4xl md:text-5xl font-bold uppercase tracking-wider">
              {CONTENT.pricing.subtitle}
            </h3>
          </div>
          
          {/* Description */}
          <p className="text-white text-sm sm:text-base md:text-lg leading-relaxed max-w-3xl">
            {CONTENT.pricing.description}
          </p>
          
          {/* Price */}
          <div className="text-[#FFC20E] text-5xl sm:text-6xl md:text-7xl font-bold">
            {CONTENT.pricing.price}
          </div>
          
          {/* CTA */}
          <Button 
            variant="gradient" 
            size="lg"
            className="hover:scale-105"
          >
            {CONTENT.pricing.ctaText}
          </Button>
        </div>
        
        {/* Background Image */}
        <div className="mt-12 sm:mt-16 lg:mt-20 flex items-center justify-center">
          <img 
            src={images.lifetimeAccess} 
            alt="Lifetime access background" 
            className="w-full max-w-4xl h-auto object-contain"
          />
        </div>
      </div>
    </section>
  );
}

