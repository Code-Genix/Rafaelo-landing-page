import { Button } from '../component';
import { images } from '../../assets/images';
import { CONTENT } from '../../constants';

export function PortfolioSection() {
  return (
    <section className="relative py-16 sm:py-20 lg:py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img 
          src={images.portfolioBackground} 
          alt="Portfolio background" 
          className="w-full h-full object-cover scale-110"
        />
        <div className="absolute inset-0 bg-black/40"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
          {/* Left - Text */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left max-w-lg">
            <h2 className="font-staatliches text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold uppercase leading-tight text-white mb-6 sm:mb-8">
              {CONTENT.portfolio.title.map((line, i) => {
                const parts = line.split('=');
                return (
                  <span key={i}>
                    {parts[0]}
                    {parts[1] && (
                      <>
                        = <span className="text-[#FFC20E]">{parts[1]}</span>
                      </>
                    )}
                    <br />
                  </span>
                );
              })}
            </h2>
            
            <Button variant="primary" size="md" className="hidden sm:block">
              {CONTENT.portfolio.ctaText}
            </Button>
          </div>
          
          {/* Right - Tiers */}
          <div className="flex flex-col space-y-4 sm:space-y-6 w-full max-w-md">
            {/* Header Icons */}
            <div className="flex items-center justify-center lg:justify-end mb-4">
              <div className="flex items-center space-x-4">
                <svg className="w-6 h-6 sm:w-8 sm:h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z"/>
                </svg>
                <svg className="w-6 h-6 sm:w-8 sm:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
            </div>
            
            {/* Tiers */}
            <div className="space-y-3 sm:space-y-4">
              {CONTENT.portfolio.tiers.map((tier, i) => (
                <div key={i} className="flex items-center bg-black/20 backdrop-blur-sm rounded-lg p-3 sm:p-4">
                  <span className="text-white text-base sm:text-lg font-bold w-16">{tier.followers}</span>
                  <div className="flex-1 flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                  <span className="text-[#FFC20E] text-base sm:text-lg font-bold text-right flex-1">{tier.earnings}</span>
                </div>
              ))}
            </div>

            <Button variant="primary" size="md" className="sm:hidden w-full mt-6">
              {CONTENT.portfolio.ctaText}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

