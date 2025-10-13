import { images } from '../../assets/images';
import { ANIMATIONS } from '../../constants';

export function TestimonialsSection() {
  return (
    <section className="w-full py-6 sm:py-8 overflow-hidden bg-black">
      <div className="relative w-full flex items-center" style={{ height: '100px' }}>
        <div 
          className="flex absolute left-0 animate-scroll"
          style={{
            width: 'max-content',
            animation: `scroll ${ANIMATIONS.scrollSpeed} linear infinite`
          }}
        >
          {[...Array(3)].map((_, i) => (
            <img 
              key={i}
              src={images.testimonialsGroup} 
              alt="Customer testimonials" 
              className="h-[80px] sm:h-[100px] w-auto object-contain"
            />
          ))}
        </div>
      </div>
      
      <style>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.333%); }
        }
      `}</style>
    </section>
  );
}

