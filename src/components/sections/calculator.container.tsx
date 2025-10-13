import { Button, InfoCard } from '../component';
import { images } from '../../assets/images';
import { CONTENT } from '../../constants';

export function CalculatorSection() {
  return (
    <section className="relative py-16 sm:py-20 lg:py-24">
      {/* Background */}
      <div className="absolute inset-0">
        <img 
          src={images.calculatorBackground} 
          alt="Earnings background" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center sm:items-end space-y-8 sm:space-y-12">
          {/* Title */}
          <div className="text-center w-full">
            <h2 className="font-staatliches text-3xl sm:text-4xl md:text-5xl font-bold uppercase text-white tracking-wider">
              {CONTENT.calculator.title}
            </h2>
          </div>
          
          {/* Cards */}
          <div className="flex flex-col sm:flex-row items-center gap-6 sm:gap-8 w-full max-w-4xl relative">
            <InfoCard
              icon={
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2" aria-label="Followers/Views">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
                </svg>
              }
              title="Followers/Views"
              value={CONTENT.calculator.defaultFollowers}
              className="w-[320px] h-[320px] sm:w-[280px] sm:h-[200px]"
            />

            {/* Arrow */}
            <div className="flex items-center justify-center z-10">
              <div className="sm:hidden w-0 h-0 border-t-[20px] border-t-[#FFC20E] border-l-[12px] border-l-transparent border-r-[12px] border-r-transparent drop-shadow-lg" aria-label="Arrow pointing down"></div>
              <div className="hidden sm:block w-0 h-0 border-l-[20px] border-l-[#FFC20E] border-t-[12px] border-t-transparent border-b-[12px] border-b-transparent drop-shadow-lg" aria-label="Arrow pointing to income"></div>
            </div>

            <InfoCard
              icon={
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2" aria-label="Estimated Income">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              }
              title="Est. Income"
              value={CONTENT.calculator.defaultEarnings}
              className="w-[320px] h-[320px] sm:w-[280px] sm:h-[200px]"
            />
          </div>

          {/* CTA */}
          <Button 
            variant="primary" 
            size="md" 
            className="w-[90%] sm:w-auto mx-auto sm:ml-auto"
            aria-label="Join Now To Start Earning"
          >
            {CONTENT.calculator.ctaText}
          </Button>
        </div>
      </div>
    </section>
  );
}

