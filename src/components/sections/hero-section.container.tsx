import { Navigation } from './navigation.container';
import { Button } from '../component';
import { images } from '../../assets/images';
import { CONTENT } from '../../constants';
import svgPaths from '../../imports/svg-gfdvud67i5';

export function HeroSection() {
  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  const StarRating = () => (
    <div className="flex justify-center lg:justify-end gap-1">
      {[...Array(5)].map((_, i) => (
        <svg key={i} className="w-6 h-6 sm:w-7 sm:h-7 lg:w-7 lg:h-7 xl:w-8 xl:h-8 text-yellow-400 drop-shadow-lg" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src={images.heroBanner} 
          alt="Hero banner background" 
          className="w-full h-full object-cover object-[center_20%]"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-black/40 via-black/30 to-black/50"></div>
      </div>
      
      {/* Background Design Elements */}
      <div className="hidden lg:block absolute bg-gradient-to-br from-[rgba(26,26,26,0.3)] via-[rgba(42,42,42,0.2)] to-[rgba(18,18,18,0.4)] h-[972px] left-[-162px] rounded-[20px] top-0 w-[1674px]" />
      
      {/* Gradient Blur Effect */}
      <div className="hidden xl:flex absolute h-[1693.295px] items-center justify-center left-[-305.86px] top-[-444.61px] w-[1865.98px]">
        <div className="flex-none rotate-[341.476deg]">
          <div className="h-[1268.9px] relative w-[1542.79px]">
            <div className="absolute inset-[-23.64%_-19.45%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2143 1869">
                <g filter="url(#filter0_f_3_507)">
                  <path d={svgPaths.p11c5a500} fill="black" />
                </g>
                <defs>
                  <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="1868.9" id="filter0_f_3_507" width="2142.79" x="1.27712e-06" y="0">
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
                    <feGaussianBlur result="effect1_foregroundBlur_3_507" stdDeviation="150" />
                  </filter>
                </defs>
              </svg>
            </div>
          </div>
        </div>
      </div>

      <Navigation />

      {/* Hero Content */}
      <div className="relative z-20 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 sm:pt-28 lg:pt-32 pb-8">
        <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between gap-8 lg:gap-12">
          
          {/* Left - Hero Text */}
          <div className="text-center lg:text-left lg:flex-1 lg:pt-12">
            <h1 
              className="text-[#FFC20E] text-6xl sm:text-7xl md:text-8xl lg:text-9xl xl:text-[100px] font-bold leading-none mb-4 sm:mb-6"
              style={{
                fontFamily: "'Alex Brush', 'Great Vibes', 'Dancing Script', 'Allura', cursive",
                textShadow: "4px 4px 8px rgba(0, 0, 0, 0.9), 0 0 30px rgba(0, 0, 0, 0.6)",
                filter: "drop-shadow(3px 3px 6px rgba(0, 0, 0, 1))",
                fontWeight: "400",
                letterSpacing: "2px"
              }}
            >
              {CONTENT.hero.title}
            </h1>

            <div className="font-staatliches text-lg sm:text-xl md:text-2xl lg:text-[26px] text-white uppercase tracking-[0.3em] sm:tracking-[0.4em] mb-4 sm:mb-6">
              <p className="leading-tight drop-shadow-lg">{CONTENT.hero.subtitle}</p>
            </div>
            
            <div className="font-staatliches text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-[100px] text-white uppercase leading-[0.9] mb-8 sm:mb-12">
              {CONTENT.hero.headline.map((line, i) => (
                <p key={i} className="drop-shadow-lg">{line}</p>
              ))}
            </div>

            <Button 
              variant="gradient"
              size="lg"
              onClick={() => scrollToSection('pricing')}
              className="mx-auto lg:mx-0"
              icon={
                <div className="w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center bg-black rounded-full">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="white" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              }
            >
              {CONTENT.hero.ctaText}
            </Button>
          </div>

          {/* Right - Profile Image */}
          <div className="relative flex flex-col items-center lg:items-end lg:flex-none w-full lg:w-auto max-w-[400px] lg:max-w-none">
            <div className="relative w-full max-w-[320px] sm:max-w-[340px] lg:max-w-[360px]">
              <img 
                src={images.profileImage} 
                alt="Rafaelo profile" 
                className="w-full h-auto object-contain"
              />
              
              {/* Banner */}
              <div className="absolute top-52 sm:top-56 lg:top-64 left-1/2 transform -translate-x-1/2 bg-[#FFC20E] border-2 border-black rounded-[25px] px-8 py-5 shadow-xl w-[calc(100%+60px)] max-w-[380px] sm:max-w-[420px] z-10">
                <h2 className="font-staatliches text-3xl sm:text-4xl md:text-[44px] text-black font-bold text-center leading-tight tracking-wide uppercase">
                  {CONTENT.hero.banner}
                </h2>
              </div>
            </div>

            {/* Members Count - Mobile */}
            <div className="lg:hidden flex flex-col items-center mt-8 space-y-4">
              <div className="font-staatliches text-3xl sm:text-4xl text-white font-bold leading-tight tracking-wide uppercase drop-shadow-lg text-center">
                {CONTENT.hero.members}
              </div>
              <StarRating />
            </div>
          </div>
        </div>

        {/* Members Count - Desktop */}
        <div className="hidden lg:block absolute bottom-12 right-8 xl:right-12 text-right z-10">
          <div className="font-staatliches text-5xl xl:text-6xl text-white font-bold leading-tight tracking-wide uppercase drop-shadow-lg mb-2">
            {CONTENT.hero.members}
          </div>
          <StarRating />
        </div>
      </div>
    </section>
  );
}

