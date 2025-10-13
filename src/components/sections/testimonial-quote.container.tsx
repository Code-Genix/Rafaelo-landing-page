import { Button } from '../component';
import { images } from '../../assets/images';
import { CONTENT } from '../../constants';

export function TestimonialQuoteSection() {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative w-full max-w-[1000px] h-[400px] sm:h-[500px] lg:h-[600px] rounded-[20px] overflow-hidden mx-auto">
          {/* Background */}
          <img 
            src={images.testimonialBackground} 
            alt="Testimonial background" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50"></div>
          
          {/* Content */}
          <div className="absolute inset-0 flex items-center">
            <div className="flex-1 max-w-lg pl-8 sm:pl-12 lg:pl-16 mt-16 sm:mt-20 lg:mt-24">
              <div className="flex flex-col space-y-6 text-left">
                {/* Quote with Image */}
                <div className="relative mb-6 -mt-32 sm:-mt-36 lg:-mt-40 -ml-12 sm:-ml-16 lg:-ml-20">
                  <img 
                    src={images.quoteImage} 
                    alt="Stylized quotation marks" 
                    className="w-[200px] sm:w-[250px] lg:w-[300px] h-[120px] sm:h-[150px] lg:h-[200px] object-contain"
                    style={{
                      filter: "brightness(1.5) contrast(1.3) invert(0.1)",
                      opacity: "1.0"
                    }}
                  />
                  <div className="absolute top-32 sm:top-36 lg:top-40 left-2 sm:left-4 right-2 sm:right-4 text-white text-lg sm:text-xl lg:text-2xl xl:text-3xl font-bold uppercase leading-tight z-10">
                    <p>{CONTENT.testimonial.quote}</p>
                  </div>
                </div>
                
                {/* Signature */}
                <div 
                  className="text-[#FFC20E] text-3xl sm:text-4xl lg:text-5xl font-bold text-left"
                  style={{
                    fontFamily: "'Alex Brush', 'Great Vibes', 'Dancing Script', cursive",
                    letterSpacing: "-1px",
                    marginTop: "80px"
                  }}
                >
                  {CONTENT.testimonial.signature}
                </div>
                
                {/* CTA */}
                <Button variant="primary" size="lg" className="w-fit">
                  {CONTENT.testimonial.ctaText}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

