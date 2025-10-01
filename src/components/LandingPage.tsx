import svgPaths from "../imports/svg-gfdvud67i5";
import { useState, useEffect } from "react";

// Navigation Component
function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="flex items-center justify-between py-4 relative">
          
          {/* Left Side - Get the Access and Get Started Buttons (iPad/Web) */}
          <div className="flex items-center space-x-2 sm:space-x-4">
            {/* Get the access Button - Visible on all screens */}
            <button className="bg-[#d99c00] flex items-center gap-2 px-3 py-2 sm:px-4 rounded-full cursor-pointer hover:bg-[#e6a20b] transition-colors">
              <div className="w-5 h-5 sm:w-6 sm:h-6">
                <svg className="w-full h-full" fill="none" viewBox="0 0 30 30">
                  <circle cx="15" cy="15" fill="white" r="15" />
                  <path d="M12 10l6 5-6 5" stroke="#121212" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" fill="none" />
                </svg>
              </div>
              <span className="text-white text-xs sm:text-sm font-medium">Get The Access</span>
            </button>
            
            {/* Get Started Button - Visible on all screens */}
            <button className="bg-[#070707] border border-[#e6a20b] hover:border-[#ffaa00] flex items-center gap-2 px-3 py-2 sm:px-4 rounded-full transition-colors group">
              <div className="w-5 h-5 sm:w-6 sm:h-6">
                <svg className="w-full h-full" fill="none" viewBox="0 0 30 30">
                  <circle cx="15" cy="15" fill="#FFBB00" r="15" />
                  <path d="M12 10l6 5-6 5" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" fill="none" />
                </svg>
              </div>
              <span className="text-white text-xs sm:text-sm font-medium">Get Started</span>
            </button>
          </div>

          {/* Right Side - About/Benefits (iPad/Web) and Mobile Menu Button */}
          <div className="flex items-center space-x-4">
            {/* About me / Benefits - Only on iPad and larger screens */}
            <div className="hidden md:block bg-[#070707] px-4 py-2 rounded-full">
              <div className="flex space-x-8">
                <a href="#about" className="text-[#c9c9c9] hover:text-white transition-colors text-sm font-medium">About me</a>
                <a href="#benefits" className="text-[#c9c9c9] hover:text-white transition-colors text-sm font-medium">Benefits</a>
              </div>
            </div>

            {/* Mobile menu button - Only on mobile */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-white hover:text-[#FFC20E] transition-colors p-2 border-2 border-[#d99c00] rounded-lg"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  {isMenuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-[#070707] rounded-lg mt-2 p-4">
            <div className="flex flex-col space-y-4">
              <a href="#about" className="text-[#c9c9c9] hover:text-white transition-colors text-sm font-medium">About me</a>
              <a href="#benefits" className="text-[#c9c9c9] hover:text-white transition-colors text-sm font-medium">Benefits</a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

// Hero Section Component
function HeroSection() {
  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src="/Hero Banner Image.png" 
          alt="Hero banner background" 
          className="w-full h-full object-cover object-[center_20%]"
        />
        {/* Gradient overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/40 via-black/30 to-black/50"></div>
      </div>
      
      {/* Additional background elements for design consistency - hidden on mobile */}
      <div className="hidden lg:block absolute bg-gradient-to-br from-[rgba(26,26,26,0.3)] via-[rgba(42,42,42,0.2)] to-[rgba(18,18,18,0.4)] h-[972px] left-[-162px] rounded-[20px] top-0 w-[1674px]" />
      
      {/* Gradient Blur Effect - hidden on mobile and tablet */}
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

      {/* Navigation */}
      <Navigation />

      {/* Hero Content Container */}
      <div className="relative z-20 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 sm:pt-28 lg:pt-32 pb-8">
        <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between gap-8 lg:gap-12">
          
          {/* Left Side - Hero Text (Mobile: Center, Desktop: Left) */}
          <div className="text-center lg:text-left lg:flex-1 lg:pt-12">
            {/* Main Rafaelo Title */}
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
              Rafaelo
            </h1>

            {/* Subtitle */}
            <div className="font-staatliches text-lg sm:text-xl md:text-2xl lg:text-[26px] text-white uppercase tracking-[0.3em] sm:tracking-[0.4em] mb-4 sm:mb-6">
              <p className="leading-tight drop-shadow-lg">TikTok Masterclass</p>
            </div>
            
            {/* Main Headline */}
            <div className="font-staatliches text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-[100px] text-white uppercase leading-[0.9] mb-8 sm:mb-12">
              <p className="drop-shadow-lg">Zero to</p>
              <p className="drop-shadow-lg">8 Million</p>
            </div>

            {/* CTA Button */}
            <button 
              className="bg-gradient-to-r from-[#d99c00] to-[#ffaa00] hover:from-[#e6a20b] hover:to-[#ffbb00] text-black font-semibold text-base sm:text-lg px-8 sm:px-10 py-3 sm:py-4 rounded-full transition-all transform hover:scale-105 shadow-lg flex items-center gap-3 sm:gap-4 mx-auto lg:mx-0"
              onClick={() => scrollToSection('pricing')}
            >
              <span>I'm Interested</span>
              <div className="w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center bg-black rounded-full">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="white" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </button>
          </div>

          {/* Right Side - Profile Image & Banner (Mobile: Below, Desktop: Right) */}
          <div className="relative flex flex-col items-center lg:items-end lg:flex-none w-full lg:w-auto max-w-[400px] lg:max-w-none">
            
            {/* Profile Image */}
            <div className="relative w-full max-w-[320px] sm:max-w-[340px] lg:max-w-[360px]">
              <img 
                src="/image 1.png" 
                alt="Rafaelo profile" 
                className="w-full h-auto object-contain"
              />
              
              {/* Yellow Banner - Way to $50K/Month - Positioned above image */}
              <div className="absolute top-48 sm:top-50 lg:top-56 left-1/2 transform -translate-x-1/2 bg-[#FFC20E] border-2 border-black rounded-[25px] px-8 py-5 shadow-xl w-[calc(100%+60px)] max-w-[380px] sm:max-w-[420px] z-10">
                <h2 className="font-staatliches text-3xl sm:text-4xl md:text-[44px] text-black font-bold text-center leading-tight tracking-wide uppercase">
                  WAY TO $50K/MONTH
                </h2>
              </div>
            </div>

            {/* Members Count with Stars - Mobile Only, Below Profile Image */}
            <div className="lg:hidden flex flex-col items-center mt-8 space-y-4">
              <div className="font-staatliches text-3xl sm:text-4xl text-white font-bold leading-tight tracking-wide uppercase drop-shadow-lg text-center">
                +1000 MEMBERS
              </div>
              <div className="flex justify-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-6 h-6 sm:w-7 sm:h-7 text-yellow-400 drop-shadow-lg" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Members Count with Stars - Desktop Only, Bottom Right */}
        <div className="hidden lg:block absolute bottom-12 right-8 xl:right-12 text-right z-10">
          <div className="font-staatliches text-5xl xl:text-6xl text-white font-bold leading-tight tracking-wide uppercase drop-shadow-lg mb-2">
            +1000 MEMBERS
          </div>
          <div className="flex justify-end gap-1">
            {[...Array(5)].map((_, i) => (
              <svg key={i} className="w-7 h-7 xl:w-8 xl:h-8 text-yellow-400 drop-shadow-lg" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// Framework Section Component with Carousel
function FrameworkSection() {
  const [currentSlide, setCurrentSlide] = useState(1); // 0 = left, 1 = center, 2 = right
  const [isTransitioning, setIsTransitioning] = useState(false);

  const goToSlide = (slideIndex: number) => {
    if (isTransitioning) return;
    
    setIsTransitioning(true);
    setCurrentSlide(slideIndex);
    
    // Reset transition state after animation completes
    setTimeout(() => {
      setIsTransitioning(false);
    }, 300);
  };

  const goToPrevious = () => {
    const newSlide = currentSlide === 0 ? 2 : currentSlide - 1;
    goToSlide(newSlide);
  };

  const goToNext = () => {
    const newSlide = currentSlide === 2 ? 0 : currentSlide + 1;
    goToSlide(newSlide);
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'ArrowLeft') {
        goToPrevious();
      } else if (event.key === 'ArrowRight') {
        goToNext();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentSlide, isTransitioning]);

  return (
    <section className="py-16 sm:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="font-staatliches text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-white uppercase tracking-wide">
            READY-TO-WORK FRAMEWORK
          </h2>
        </div>
        
        {/* Navigation Controls */}
        <div className="flex justify-center gap-4 mb-6 sm:mb-8">
          <button 
            className="w-11 h-11 sm:w-12 sm:h-12 lg:w-[60px] lg:h-[60px] bg-[#FFC20E] rounded-full border-2 border-black/20 shadow-lg hover:bg-[#e6a20b] transition-colors focus:outline-none focus:ring-2 focus:ring-[#FFC20E] focus:ring-offset-2 focus:ring-offset-black"
            aria-label="Previous slide"
            onClick={goToPrevious}
          >
            <svg className="w-5 h-5 sm:w-6 sm:h-6 mx-auto" fill="none" stroke="white" viewBox="0 0 24 24" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button 
            className="w-11 h-11 sm:w-12 sm:h-12 lg:w-[60px] lg:h-[60px] bg-[#FFC20E] rounded-full border-2 border-black/20 shadow-lg hover:bg-[#e6a20b] transition-colors focus:outline-none focus:ring-2 focus:ring-[#FFC20E] focus:ring-offset-2 focus:ring-offset-black"
            aria-label="Next slide"
            onClick={goToNext}
          >
            <svg className="w-5 h-5 sm:w-6 sm:h-6 mx-auto" fill="none" stroke="white" viewBox="0 0 24 24" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
        
        {/* Framework Cards Container */}
        <div className="relative">
          {/* Desktop Grid - Hidden on mobile/tablet */}
          <div className="hidden lg:grid grid-cols-3 gap-4 lg:gap-6 items-center justify-items-center">
            {/* Left Side Card */}
            <div className="w-[280px] h-[240px] relative">
              <div className="absolute inset-0 bg-[#c4c4c4] rounded-[30px] shadow-lg" />
            </div>
            
            {/* Center Card with Profile Image - Featured */}
            <div className="w-[320px] h-[320px] relative">
              {/* Full Background Image Container */}
              <div className="absolute inset-0 rounded-[30px] overflow-hidden">
                <img 
                  src="/About Us Image Background.png" 
                  alt="Background" 
                  className="w-full h-full object-cover"
                />
                {/* Dark overlay for better contrast */}
                <div className="absolute inset-0 bg-black/30"></div>
              </div>
              
              {/* Original gradient overlay for additional depth */}
              <div className="absolute inset-0 bg-gradient-to-l from-[rgba(37,37,37,0.6)] to-[rgba(37,37,37,0.6)] via-[51.923%] via-[rgba(0,0,0,0.2)] rounded-[30px] z-10" />
              
              {/* White Profile Card Container */}
              <div className="absolute left-1 top-2 w-[calc(100%-8px)] h-[200px] flex items-center justify-center p-2 z-20">
                <img 
                  src="/image 1.png" 
                  alt="Profile card showcase" 
                  className="max-w-full max-h-full object-contain rounded-[20px]"
                />
              </div>
              
              {/* Text Content */}
              <div className="absolute bottom-4 left-4 right-4 z-20">
                <div className="bg-clip-text bg-gradient-to-r from-[#d99c00] to-[#ffaa00] font-staatliches text-xl font-bold uppercase" style={{ WebkitTextFillColor: "transparent" }}>
                  <p className="leading-tight">Proven Growth</p>
                </div>
                
                <div className="font-dm-sans text-sm text-white mt-2">
                  <p className="leading-tight">From 0 to 8M</p>
                </div>
              </div>
            </div>
            
            {/* Right Side Card */}
            <div className="w-[280px] h-[240px] relative">
              <div className="absolute inset-0 bg-[#c4c4c4] rounded-[30px] shadow-lg" />
            </div>
          </div>

          {/* Mobile/Tablet Carousel - Visible on mobile/tablet */}
          <div className="lg:hidden relative overflow-hidden">
            <div 
              className="flex transition-transform duration-300 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {/* Left Card */}
              <div className="w-full flex-shrink-0 px-4">
                <div className="w-full h-64 sm:h-80 bg-[#c4c4c4] rounded-[30px] shadow-lg mx-auto max-w-[280px]" />
              </div>
              
              {/* Center Card */}
              <div className="w-full flex-shrink-0 px-4">
                <div className="w-full h-80 sm:h-96 relative mx-auto max-w-[320px]">
                  {/* Full Background Image Container */}
                  <div className="absolute inset-0 rounded-[30px] overflow-hidden">
                    <img 
                      src="/About Us Image Background.png" 
                      alt="Background" 
                      className="w-full h-full object-cover"
                    />
                    {/* Dark overlay for better contrast */}
                    <div className="absolute inset-0 bg-black/30"></div>
                  </div>
                  
                  {/* Original gradient overlay for additional depth */}
                  <div className="absolute inset-0 bg-gradient-to-l from-[rgba(37,37,37,0.6)] to-[rgba(37,37,37,0.6)] via-[51.923%] via-[rgba(0,0,0,0.2)] rounded-[30px] z-10" />
                  
                  {/* White Profile Card Container */}
                  <div className="absolute left-1 top-2 w-[calc(100%-8px)] h-48 sm:h-64 flex items-center justify-center p-2 z-20">
                    <img 
                      src="/image 1.png" 
                      alt="Profile card showcase" 
                      className="max-w-full max-h-full object-contain rounded-[20px]"
                    />
                  </div>
                  
                  {/* Text Content */}
                  <div className="absolute bottom-4 left-4 right-4 z-20">
                    <div className="bg-clip-text bg-gradient-to-r from-[#d99c00] to-[#ffaa00] font-staatliches text-2xl sm:text-3xl font-bold uppercase" style={{ WebkitTextFillColor: "transparent" }}>
                      <p className="leading-tight">Proven Growth</p>
                    </div>
                    
                    <div className="font-dm-sans text-sm sm:text-base text-white mt-2">
                      <p className="leading-tight">From 0 to 8M</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Right Card */}
              <div className="w-full flex-shrink-0 px-4">
                <div className="w-full h-64 sm:h-80 bg-[#c4c4c4] rounded-[30px] shadow-lg mx-auto max-w-[280px]" />
              </div>
            </div>
          </div>
        </div>

        {/* Screen reader announcements */}
        <div className="sr-only" aria-live="polite" aria-atomic="true">
          {currentSlide === 0 && "Showing left card"}
          {currentSlide === 1 && "Showing center card with profile information"}
          {currentSlide === 2 && "Showing right card"}
        </div>
      </div>
    </section>
  );
}

// Main Landing Page Component
export default function LandingPage() {
  return (
    <div className="bg-black min-h-screen">
      {/* Hero Section */}
      <HeroSection />
      
      {/* Framework Section */}
      <FrameworkSection />

      {/* Portfolio Section - Refactored */}
      <section className="relative py-16 sm:py-20 lg:py-24 overflow-hidden">
        {/* Background Image with Dark Overlay */}
        <div className="absolute inset-0">
          <img 
            src="/image 3.png" 
            alt="Portfolio background" 
            className="w-full h-full object-cover scale-110"
          />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        
        {/* Content Container */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
            {/* Left Side - Text and Button */}
            <div className="flex flex-col items-center lg:items-start text-center lg:text-left max-w-lg">
              {/* Main Headline */}
              <h2 className="font-staatliches text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold uppercase leading-tight text-white mb-6 sm:mb-8">
                <span>FOLLOWERS = </span>
                <span className="text-[#FFC20E]">CLOUT.</span>
                <br />
                <span>CLOUT = </span>
                <span className="text-[#FFC20E]">CASH.</span>
                <br />
                <span>HERE'S THE GAME</span>
              </h2>
              
              {/* Yellow Button */}
              <button className="bg-[#FFC20E] hover:bg-[#e6a20b] text-black font-medium text-sm sm:text-base px-6 py-3 rounded-full transition-colors duration-300 shadow-lg">
                Discover Your Earnings
              </button>
            </div>
            
            {/* Right Side - Follower Tiers */}
            <div className="flex flex-col space-y-4 sm:space-y-6 w-full max-w-md">
              {/* Header Icons */}
              <div className="flex items-center justify-center lg:justify-end mb-4">
                <div className="flex items-center space-x-4">
                  <div className="flex items-center space-x-2">
                    <svg className="w-6 h-6 sm:w-8 sm:h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z"/>
                    </svg>
                  </div>
                  <div className="flex items-center space-x-2">
                    <svg className="w-6 h-6 sm:w-8 sm:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                  </div>
                </div>
              </div>
              
              {/* Follower Tiers */}
              <div className="space-y-3 sm:space-y-4">
                {/* 10K Tier */}
                <div className="flex items-center justify-between bg-black/20 backdrop-blur-sm rounded-lg p-3 sm:p-4">
                  <span className="text-white text-base sm:text-lg font-bold">10K</span>
                  <svg className="w-4 h-4 text-white mx-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                  <span className="text-[#FFC20E] text-base sm:text-lg font-bold">$1,000 / MONTH</span>
                </div>
                
                {/* 100K Tier */}
                <div className="flex items-center justify-between bg-black/20 backdrop-blur-sm rounded-lg p-3 sm:p-4">
                  <span className="text-white text-base sm:text-lg font-bold">100K</span>
                  <svg className="w-4 h-4 text-white mx-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                  <span className="text-[#FFC20E] text-base sm:text-lg font-bold">$5,000 / MONTH</span>
                </div>
                
                {/* 1M Tier */}
                <div className="flex items-center justify-between bg-black/20 backdrop-blur-sm rounded-lg p-3 sm:p-4">
                  <span className="text-white text-base sm:text-lg font-bold">1M</span>
                  <svg className="w-4 h-4 text-white mx-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                  <span className="text-[#FFC20E] text-base sm:text-lg font-bold">$20,000 / MONTH</span>
                </div>
                
                {/* 8M Tier */}
                <div className="flex items-center justify-between bg-black/20 backdrop-blur-sm rounded-lg p-3 sm:p-4">
                  <span className="text-white text-base sm:text-lg font-bold">8M</span>
                  <svg className="w-4 h-4 text-white mx-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                  <span className="text-[#FFC20E] text-base sm:text-lg font-bold">$100,000+ / MONTH</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* New Earnings Calculator Section */}
      <section className="relative py-16 sm:py-20 lg:py-24 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img 
            src="/Vector 3.png" 
            alt="Earnings background" 
            className="w-full h-full object-cover"
          />
          {/* Dark overlay for better text readability */}
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        
        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center space-y-8 sm:space-y-12">
            {/* Header */}
            <div className="text-center">
              <h2 className="font-staatliches text-3xl sm:text-4xl md:text-5xl font-bold uppercase text-white tracking-wider">
                ESTIMATE YOUR EARNINGS
              </h2>
            </div>
            
            {/* Two Cards Container */}
            <div className="flex flex-col sm:flex-row items-center gap-6 sm:gap-8 w-full max-w-4xl">
              {/* Followers/Views Card */}
              <div className="bg-[#1a1a1a] border border-[#333] rounded-[20px] p-6 sm:p-8 w-full sm:w-[280px] h-[180px] sm:h-[200px] flex flex-col items-center justify-center">
                <div className="mb-4">
                  <svg className="w-8 h-8 sm:w-10 sm:h-10 text-white mx-auto" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z"/>
                  </svg>
                </div>
                <h3 className="text-white text-base sm:text-lg font-medium mb-2 text-center">Followers/Views</h3>
                <p className="text-white text-2xl sm:text-3xl font-bold">10,000</p>
              </div>

              {/* Arrow */}
              <div className="flex items-center rotate-90 sm:rotate-0">
                <svg className="w-6 h-6 sm:w-8 sm:h-8 text-[#FFC20E]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>

              {/* Est. Income Card */}
              <div className="bg-[#1a1a1a] border border-[#FFC20E] rounded-[20px] p-6 sm:p-8 w-full sm:w-[280px] h-[180px] sm:h-[200px] flex flex-col items-center justify-center">
                <div className="mb-4">
                  <svg className="w-8 h-8 sm:w-10 sm:h-10 text-white mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </div>
                <h3 className="text-white text-base sm:text-lg font-medium mb-2 text-center">Est. Income</h3>
                <p className="text-[#FFC20E] text-2xl sm:text-3xl font-bold">$10,000</p>
              </div>
            </div>

            {/* Join Button */}
            <button className="bg-[#FFC20E] hover:bg-[#e6a20b] text-black font-semibold text-base sm:text-lg px-8 sm:px-10 py-3 sm:py-4 rounded-full transition-colors duration-300 shadow-lg">
              Join Now To Start Earning
            </button>
          </div>
        </div>
      </section>

      {/* Course Modules Section - Redesigned */}
      <section className="py-16 sm:py-20 lg:py-24 bg-black" id="modules">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Module 1 - Highlighted */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-8 pb-8 border-b-2 border-[#FFC20E] gap-4 sm:gap-6">
            <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-6 w-full sm:w-auto">
              <span className="text-[#FFC20E] text-xl sm:text-2xl font-bold">01</span>
              <h3 className="text-[#FFC20E] text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-staatliches uppercase">MODULE 1</h3>
              <p className="text-[#FFC20E] text-sm sm:text-base lg:text-lg ml-0 sm:ml-8">Orem Ipsum Dolor Sit Amet,<br/>Consectetur Adipiscing Elit</p>
            </div>
            <div className="w-full sm:w-32 h-20 sm:h-20 bg-gradient-to-br from-[#444] to-[#666] rounded-lg overflow-hidden flex-shrink-0">
              <img src="/Hero Banner Image.png" alt="Module 1" className="w-full h-full object-cover" />
            </div>
          </div>

          {/* Modules 2-10 */}
          {[2, 3, 4, 5, 6, 7, 8, 9, 10].map((moduleNumber) => (
            <div key={moduleNumber} className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-6 sm:mb-8 pb-6 sm:pb-8 border-b border-gray-600 gap-4 sm:gap-6">
              <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-6 w-full sm:w-auto">
                <span className="text-white text-xl sm:text-2xl font-bold">{moduleNumber.toString().padStart(2, '0')}</span>
                <h3 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-staatliches uppercase">MODULE {moduleNumber}</h3>
                <p className="text-white text-sm sm:text-base lg:text-lg ml-0 sm:ml-8">Orem Ipsum Dolor Sit Amet,<br/>Consectetur Adipiscing Elit</p>
              </div>
            </div>
          ))}
          
        </div>
      </section>

      {/* Community of Hustlers Section - After Modules */}
      <section className="py-16 sm:py-20 lg:py-24 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
            
            {/* Left Side - Phone with Hands and Messenger Icon */}
            <div className="flex-1 flex justify-center items-center relative order-2 lg:order-1">
              {/* Background container for phone and hands - more rectangular */}
              <div className="relative w-full max-w-[400px] h-[250px] sm:h-[300px] bg-gray-200 rounded-[8px] flex items-center justify-center">
                {/* Phone with hands image */}
                <img 
                  src="/20230430_img_4123_cr2_dxo_deepprime1 1.png" 
                  alt="Hands holding phone" 
                  className="w-full h-full object-contain rounded-[4px]"
                />
                
                {/* Blue messenger icon floating above phone - bigger size */}
                <div className="absolute -top-8 sm:-top-10 -left-8 sm:-left-10 w-12 h-12 sm:w-16 sm:h-16">
                  <img 
                    src="/88cb0ad5-2b53-43dd-bbeb-432016899127 1.png" 
                    alt="Messenger icon" 
                    className="w-full h-full object-contain filter blur-sm"
                  />
                </div>
              </div>
            </div>

            {/* Right Side - Text Content */}
            <div className="flex-1 flex flex-col items-center lg:items-start text-center lg:text-left space-y-6 order-1 lg:order-2">
              {/* 2000+ Members */}
              <div className="flex flex-col items-center lg:items-start">
                <div className="flex items-baseline space-x-2">
                  <span className="font-staatliches text-6xl sm:text-8xl lg:text-[120px] text-[#FFC20E] font-bold leading-none">2000</span>
                  <span className="font-staatliches text-3xl sm:text-4xl lg:text-[60px] text-[#FFC20E] font-bold leading-none">+</span>
                </div>
                <span className="font-poppins text-lg sm:text-xl lg:text-[32px] text-white/80 font-medium">Members</span>
              </div>

              {/* Join Community Button */}
              <button className="bg-[#FFC20E] hover:bg-[#e6a20b] text-black font-semibold text-lg sm:text-xl px-6 sm:px-8 py-3 sm:py-4 rounded-full transition-colors duration-300 shadow-lg">
                Join Community
              </button>

              {/* Lorem Ipsum Text - Stacked vertically as in image */}
              <div className="text-white text-lg sm:text-xl lg:text-2xl font-bold uppercase tracking-wider leading-tight">
                <p>LOREM IPSUM</p>
                <p>DOLOR SIT AMET,</p>
                <p>CONSECTETUR</p>
                <p>ADIPISCING ELIT</p>
              </div>
            </div>
          </div>

          {/* Bottom Section - Main Title and Description */}
          <div className="mt-12 sm:mt-16 lg:mt-20 flex flex-col lg:flex-row items-center lg:items-end justify-between gap-8 lg:gap-12">
            {/* Left - Main Title */}
            <div className="flex-1 text-center lg:text-left">
              <h2 className="font-staatliches text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[80px] text-[#FFC20E] font-bold leading-none uppercase">
                COMMUNITY
                <br />
                OF HUSTLERS
              </h2>
            </div>

            {/* Right - Description */}
            <div className="flex-1 lg:pl-16">
              <p className="text-white text-base sm:text-lg leading-relaxed text-center lg:text-left">
                Lorem ipsum dolor sit amet, consectetur adipiscing elitorem ipsum dolor sit amet, consectetur adipiscing elitorem ipsum dolor sit amet, consectetur adipiscing elitorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Section - Rafaelo Quote */}
      <section className="py-16 sm:py-20 lg:py-24 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-12">
            {/* Background Image Container - Centered */}
            <div className="relative w-full max-w-[1000px] h-[300px] sm:h-[400px] lg:h-[500px] rounded-[20px] overflow-hidden order-2 lg:order-1">
              <img 
                src="/Group 24.png" 
                alt="Testimonial background" 
                className="w-full h-full object-cover"
              />
              {/* Dark overlay for text readability */}
              <div className="absolute inset-0 bg-black/40"></div>
            </div>
            
            {/* Text Content - Positioned to the left of the image container */}
            <div className="flex-1 max-w-lg order-1 lg:order-2">
              {/* Quote Text - Left Aligned */}
              <div className="flex flex-col space-y-6 text-center lg:text-left">
                {/* Quotation Marks with Text Overlay */}
                <div className="relative mb-6">
                  <img 
                    src={'/1".png'} 
                    alt="Stylized quotation marks" 
                    className="w-[200px] sm:w-[250px] lg:w-[300px] h-[120px] sm:h-[150px] lg:h-[200px] object-contain mx-auto lg:mx-0"
                    style={{
                      filter: "brightness(1.5) contrast(1.3) invert(0.1)",
                      opacity: "1.0"
                    }}
                  />
                  {/* Main Quote - Positioned over the image */}
                  <div className="absolute top-8 sm:top-12 lg:top-17 left-2 sm:left-4 right-2 sm:right-4 text-white text-lg sm:text-xl lg:text-2xl xl:text-3xl font-bold uppercase leading-tight z-10">
                    <p>THIS COURSE IS 100% MY SYSTEM, BUILT WITH LOVE, HUSTLE, AND REAL RESULTS</p>
                  </div>
                </div>
                
                {/* Signature - Different Format */}
                <div 
                  className="text-[#FFC20E] text-3xl sm:text-4xl lg:text-5xl font-bold text-center lg:text-left"
                  style={{
                    fontFamily: "'Alex Brush', 'Great Vibes', 'Dancing Script', cursive",
                    letterSpacing: "-1px",
                    marginTop: "80px"
                  }}
                >
                  Rafaelo
                </div>
                
                {/* CTA Button */}
                <button 
                  className="bg-[#FFC20E] hover:bg-[#e6a20b] text-black font-semibold text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 rounded-full transition-colors duration-300 shadow-lg w-fit mx-auto lg:mx-0"
                >
                  Start The Journey
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Lifetime Access Section */}
      <section className="py-16 sm:py-20 lg:py-24 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Text Content - Positioned at top */}
          <div className="flex flex-col items-center justify-center text-center space-y-6 sm:space-y-8 max-w-4xl mx-auto">
            {/* Headlines */}
            <div className="space-y-3 sm:space-y-4">
              <h2 className="text-[#FFC20E] text-3xl sm:text-4xl md:text-5xl font-bold uppercase tracking-wider">
                LIFETIME ACCESS.
              </h2>
              <h3 className="text-white text-3xl sm:text-4xl md:text-5xl font-bold uppercase tracking-wider">
                ONE-TIME PAYMENT.
              </h3>
            </div>
            
            {/* Description */}
            <p className="text-white text-sm sm:text-base md:text-lg leading-relaxed max-w-3xl">
              Lorem ipsum dolor sit amet, consectetur adipiscing elitorem ipsum dolor sit amet, consectetur adipiscing elitorem ipsum dolor sit amet, consectetur adipiscing elitorem ipsum dolor sit amet, consectetur adipiscing elit
            </p>
            
            {/* Price */}
            <div className="text-[#FFC20E] text-5xl sm:text-6xl md:text-7xl font-bold">
              $100
            </div>
            
            {/* CTA Button */}
            <button className="bg-gradient-to-r from-[#FFC20E] to-[#FF8C00] hover:from-[#e6a20b] hover:to-[#e67e00] text-white font-bold text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 rounded-full transition-all duration-300 shadow-lg transform hover:scale-105">
              BUY NOW
            </button>
          </div>
          
          {/* Background Image - Positioned below text */}
          <div className="mt-12 sm:mt-16 lg:mt-20 flex items-center justify-center">
            <img 
              src="/image 5.png" 
              alt="Lifetime access background" 
              className="w-full max-w-4xl h-auto object-contain"
            />
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-16 sm:py-20 lg:py-24 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Title */}
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="font-dm-sans text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white font-normal">
              Simple, Transparent, and Scalable Pricing
            </h2>
          </div>
          
          {/* Pricing Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
            {/* Starter Plan */}
            <div className="bg-[#070707] h-[280px] sm:h-[292px] relative rounded-[20px] hover:scale-105 transition-transform cursor-pointer p-6">
              <div className="border border-[#ffeff1] border-solid inset-0 pointer-events-none rounded-[20px] absolute" />
              
              <div className="mb-6">
                <div className="border border-solid border-white rounded-full px-4 py-2 w-fit">
                  <p className="font-dm-sans text-sm sm:text-base text-white">Start with Starter</p>
                </div>
              </div>
              
              <div className="mb-8">
                <p className="font-dm-sans text-4xl sm:text-5xl text-white font-normal">
                  <span>$99</span>
                  <span className="text-lg sm:text-xl"> / project</span>
                </p>
              </div>
              
              <button className="bg-[#121212] hover:bg-[#1a1a1a] text-white font-medium text-sm sm:text-base px-6 py-3 rounded-lg transition-colors w-full">
                Get This Plan
              </button>
            </div>

            {/* Growth Plan - Featured */}
            <div className="bg-[#730002] h-[280px] sm:h-[292px] relative rounded-[20px] hover:scale-105 transition-transform cursor-pointer p-6">
              <div className="border border-[#ffeff1] border-solid inset-0 pointer-events-none rounded-[20px] absolute" />
              
              <div className="mb-6">
                <div className="border border-solid border-white rounded-full px-4 py-2 w-fit">
                  <p className="font-dm-sans text-sm sm:text-base text-white">Choose Growth</p>
                </div>
              </div>
              
              <div className="mb-8">
                <p className="font-dm-sans text-4xl sm:text-5xl text-white font-normal">
                  <span>$299</span>
                  <span className="text-lg sm:text-xl"> / project</span>
                </p>
              </div>
              
              <button className="bg-white hover:bg-gray-100 text-[#121212] font-medium text-sm sm:text-base px-6 py-3 rounded-lg transition-colors w-full">
                Get This Plan
              </button>
            </div>

            {/* Pro Plan */}
            <div className="bg-[#070707] h-[280px] sm:h-[292px] relative rounded-[20px] hover:scale-105 transition-transform cursor-pointer p-6 md:col-span-2 lg:col-span-1">
              <div className="border border-[#ffeff1] border-solid inset-0 pointer-events-none rounded-[20px] absolute" />
              
              <div className="mb-6">
                <div className="border border-solid border-white rounded-full px-4 py-2 w-fit">
                  <p className="font-dm-sans text-sm sm:text-base text-white">Start with Pro</p>
                </div>
              </div>
              
              <div className="mb-8">
                <p className="font-dm-sans text-4xl sm:text-5xl text-white font-normal">
                  <span>$499</span>
                  <span className="text-lg sm:text-xl"> / project</span>
                </p>
              </div>
              
              <button className="bg-[#121212] hover:bg-[#1a1a1a] text-white font-medium text-sm sm:text-base px-6 py-3 rounded-lg transition-colors w-full">
                Get This Plan
              </button>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}

