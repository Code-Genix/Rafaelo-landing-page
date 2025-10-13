import { useState, useEffect, useCallback } from 'react';
import { IconButton, Card } from '../component';
import { images } from '../../assets/images';
import { CONTENT } from '../../constants';

export function FrameworkSection() {
  const [currentSlide, setCurrentSlide] = useState(1);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const goToSlide = useCallback((slideIndex: number) => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentSlide(slideIndex);
    setTimeout(() => setIsTransitioning(false), 300);
  }, [isTransitioning]);

  const goToPrevious = useCallback(() => {
    goToSlide(currentSlide === 0 ? 2 : currentSlide - 1);
  }, [currentSlide, goToSlide]);

  const goToNext = useCallback(() => {
    goToSlide(currentSlide === 2 ? 0 : currentSlide + 1);
  }, [currentSlide, goToSlide]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'ArrowLeft') goToPrevious();
      else if (event.key === 'ArrowRight') goToNext();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [goToPrevious, goToNext]);

  const FeaturedCard = () => (
    <>
      <div className="absolute inset-0 rounded-[30px] overflow-hidden">
        <img 
          src={images.aboutUsBackground} 
          alt="Background" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/30"></div>
      </div>
      <div className="absolute inset-0 bg-gradient-to-l from-[rgba(37,37,37,0.6)] to-[rgba(37,37,37,0.6)] via-[51.923%] via-[rgba(0,0,0,0.2)] rounded-[30px] z-10" />
      <div className="absolute left-1 top-2 w-[calc(100%-8px)] h-[200px] flex items-center justify-center p-2 z-20">
        <img 
          src={images.profileImage} 
          alt="Profile card showcase" 
          className="max-w-full max-h-full object-contain rounded-[20px]"
        />
      </div>
      <div className="absolute bottom-4 left-4 right-4 z-20">
        <div className="bg-clip-text bg-gradient-to-r from-[#d99c00] to-[#ffaa00] font-staatliches text-xl font-bold uppercase" style={{ WebkitTextFillColor: "transparent" }}>
          <p className="leading-tight">{CONTENT.framework.cards.center.title}</p>
        </div>
        <div className="font-dm-sans text-sm text-white mt-2">
          <p className="leading-tight">{CONTENT.framework.cards.center.description}</p>
        </div>
      </div>
    </>
  );

  return (
    <section className="py-16 sm:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="font-staatliches text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-white uppercase tracking-wide">
            {CONTENT.framework.title}
          </h2>
        </div>
        
        {/* Navigation */}
        <div className="flex justify-center gap-4 mb-6 sm:mb-8">
          <IconButton
            className="bg-transparent border-2 border-white hover:bg-white/10 focus:ring-white"
            aria-label="Previous slide"
            onClick={goToPrevious}
          >
            <svg className="w-5 h-5 sm:w-6 sm:h-6 mx-auto" fill="none" stroke="white" viewBox="0 0 24 24" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </IconButton>
          <IconButton
            className="bg-[#FFC20E] hover:bg-[#e6a20b] focus:ring-[#FFC20E]"
            aria-label="Next slide"
            onClick={goToNext}
          >
            <svg className="w-5 h-5 sm:w-6 sm:h-6 mx-auto" fill="none" stroke="black" viewBox="0 0 24 24" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </IconButton>
        </div>
        
        {/* Desktop Carousel */}
        <div className="hidden sm:block">
          <div className="flex items-center justify-center gap-4 lg:gap-6 relative">
            {[0, 1, 2].map((idx) => (
              <div 
                key={idx}
                className={`relative transition-all duration-500 ease-in-out ${
                  idx === 1 ? 'w-[280px] h-[240px] lg:w-[320px] lg:h-[320px]' : 'w-[240px] h-[200px] lg:w-[280px] lg:h-[240px]'
                } ${
                  currentSlide === idx ? 'scale-100 opacity-100 z-30 shadow-2xl' : 'scale-90 opacity-60 grayscale z-10'
                }`}
              >
                {idx === 1 ? <FeaturedCard /> : <Card className="absolute inset-0" />}
              </div>
            ))}
          </div>
        </div>

        {/* Mobile Carousel */}
        <div className="sm:hidden overflow-hidden">
          <div 
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {[0, 1, 2].map((idx) => (
              <div key={idx} className="w-full flex-shrink-0 px-4">
                <div className={`w-full max-w-[320px] mx-auto relative ${idx === 1 ? 'h-64 shadow-2xl' : 'h-64'}`}>
                  {idx === 1 ? <FeaturedCard /> : <Card className="absolute inset-0" />}
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="sr-only" aria-live="polite" aria-atomic="true">
          {currentSlide === 0 && "Showing left card"}
          {currentSlide === 1 && "Showing center card with profile information"}
          {currentSlide === 2 && "Showing right card"}
        </div>
      </div>
    </section>
  );
}

