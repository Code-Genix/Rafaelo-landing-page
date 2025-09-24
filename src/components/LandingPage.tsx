import svgPaths from "../imports/svg-gfdvud67i5";

// Navigation Component
function Navigation() {
  return (
    <div className="absolute content-stretch flex items-center justify-between left-[115px] top-[34px] w-[1289px] z-50">
      <div className="content-stretch flex gap-[23px] items-center justify-start relative shrink-0">
        <div className="bg-[#d99c00] box-border content-stretch flex gap-[15px] items-center justify-start pl-[5px] pr-[15px] py-[5px] relative rounded-[24px] shrink-0 cursor-pointer hover:bg-[#e6a20b] transition-colors">
          <div className="relative shrink-0 size-[30px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 30 30">
              <circle cx="15" cy="15" fill="white" r="15" />
              <path d="M12 10l6 5-6 5" stroke="#121212" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" fill="none" />
            </svg>
          </div>
          <div className="capitalize font-dm-sans font-normal leading-[0] relative shrink-0 text-[16px] text-nowrap text-white">
            <p className="leading-[1.32] whitespace-pre">Get the access</p>
          </div>
        </div>
        
        <div className="bg-[#070707] box-border content-stretch flex flex-col gap-[10px] items-start justify-start px-[24px] py-[9px] relative rounded-[24px] shrink-0">
          <div className="capitalize font-['DM_Sans:Regular',_sans-serif] font-normal grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0 text-[#c9c9c9] text-[16px] text-nowrap">
            <div className="[grid-area:1_/_1] ml-0 mt-0 relative cursor-pointer hover:text-white transition-colors" style={{ fontVariationSettings: "'opsz' 14" }}>
              <p className="leading-[1.32] text-nowrap whitespace-pre">About me</p>
            </div>
            <div className="[grid-area:1_/_1] ml-[104px] mt-0 relative cursor-pointer hover:text-white transition-colors" style={{ fontVariationSettings: "'opsz' 14" }}>
              <p className="leading-[1.32] text-nowrap whitespace-pre">Benefits</p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#070707] box-border content-stretch flex gap-[15px] items-center justify-start pl-[5px] pr-[15px] py-[5px] relative rounded-[24px] shrink-0 cursor-pointer hover:bg-[#1a1a1a] transition-colors group">
        <div aria-hidden="true" className="absolute border border-[#e6a20b] border-solid inset-0 pointer-events-none rounded-[24px] group-hover:border-[#ffaa00] transition-colors" />
        <div className="relative shrink-0 size-[30px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 30 30">
            <circle cx="15" cy="15" fill="#FFBB00" r="15" />
            <path d="M12 10l6 5-6 5" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" fill="none" />
          </svg>
        </div>
        <div className="capitalize font-['DM_Sans:Regular',_sans-serif] font-normal leading-[0] relative shrink-0 text-[16px] text-nowrap text-white" style={{ fontVariationSettings: "'opsz' 14" }}>
          <p className="leading-[1.32] whitespace-pre">Get Started</p>
        </div>
      </div>
    </div>
  );
}

// Hero Section Component
function HeroSection() {
  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="relative min-h-screen overflow-visible">
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-[972px]">
        <img 
          src="/Hero Banner Image.png" 
          alt="Hero banner background" 
          className="w-full h-full object-cover"
        />
        {/* Gradient overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/40 via-black/30 to-black/50"></div>
      </div>
      
      {/* Additional background elements for design consistency */}
      <div className="absolute bg-gradient-to-br from-[rgba(26,26,26,0.3)] via-[rgba(42,42,42,0.2)] to-[rgba(18,18,18,0.4)] h-[972px] left-[-162px] rounded-[20px] top-0 w-[1674px]" />
      
      {/* Gradient Blur Effect */}
      <div className="absolute flex h-[1693.295px] items-center justify-center left-[-305.86px] top-[-444.61px] w-[1865.98px]">
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

      {/* Hero Content */}
      <div className="absolute font-['Staatliches:Regular',_sans-serif] left-[115px] not-italic text-[25.946px] text-white top-[280px] tracking-[10.1189px] uppercase w-[412px] h-[100px] flex items-center z-10">
        <p className="leading-[1.2] drop-shadow-lg">TikTok Masterclass</p>
      </div>
      
      <div className="absolute font-['Staatliches:Regular',_sans-serif] leading-[0.79] left-[110px] not-italic text-[100px] text-white top-[389.71px] tracking-[-2.6px] uppercase w-[617px] z-10">
        <p className="mb-0 drop-shadow-lg">Zero to</p>
        <p className="drop-shadow-lg">8 Million</p>
      </div>

      {/* CTA Button */}
      <div 
        className="absolute bg-gradient-to-r box-border content-stretch flex from-[#d99c00] gap-[46.654px] items-center justify-start left-[111.17px] pl-[23.327px] pr-[6.998px] py-[5.832px] rounded-[27.992px] to-[#ffaa00] top-[595px] cursor-pointer hover:from-[#e6a20b] hover:to-[#ffbb00] transition-all transform hover:scale-105 z-10"
        onClick={() => scrollToSection('pricing')}
      >
        <div className="font-['DM_Sans:Regular',_sans-serif] font-normal leading-[0] relative shrink-0 text-[18.662px] text-black text-nowrap text-right" style={{ fontVariationSettings: "'opsz' 14" }}>
          <p className="leading-[1.32] whitespace-pre">I'm Interested</p>
        </div>
        <div className="relative shrink-0 size-[34.99px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 35 35">
            <circle cx="17.4953" cy="17.4953" fill="black" r="16.9121" stroke="black" strokeWidth="1.16635" />
            <path d="M14 12l6 5.5-6 5.5" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" fill="none" />
          </svg>
        </div>
      </div>
    </div>
  );
}

// Main Landing Page Component
export default function LandingPage() {
  return (
    <div className="bg-[#121212] relative size-full overflow-x-hidden overflow-y-visible min-h-screen">
      {/* Hero Section */}
      <HeroSection />
      

      {/* Framework Section */}
      <div className="absolute font-['Staatliches:Regular',_sans-serif] leading-[0] left-[375px] not-italic text-[50px] text-white top-[1166px] tracking-[-2.349px] w-[783px]">
        <p className="leading-[1.32]">READY-TO-WORK FRAMEWORK</p>
      </div>
      
      {/* Framework Cards */}
      <div className="absolute content-stretch flex gap-[23px] items-center justify-start top-[1363px] translate-x-[-50%]" style={{ left: "calc(50% + 10.5px)" }}>
        {/* Left Side Card */}
        <div className="h-[347px] relative shrink-0 w-[314px]">
          <div className="absolute bg-[#c4c4c4] h-[347px] left-0 rounded-[30px] top-0 w-[314px]" />
        </div>
        
        {/* Center Card with Profile Image */}
        <div className="h-[459px] relative shrink-0 w-[415px]">
          {/* Full Background Image Container */}
          <div className="absolute h-[459px] left-0 rounded-[30px] top-0 w-[415px] overflow-hidden">
            <img 
              src="/About Us Image Background.png" 
              alt="Background" 
              className="w-full h-full object-cover"
            />
            {/* Dark overlay for better contrast */}
            <div className="absolute inset-0 bg-black/30"></div>
          </div>
          
          {/* Original gradient overlay for additional depth */}
          <div className="absolute bg-gradient-to-l from-[rgba(37,37,37,0.6)] h-[459px] left-0 rounded-[30px] to-[rgba(37,37,37,0.6)] top-0 via-[51.923%] via-[rgba(0,0,0,0.2)] w-[415px] z-10" />
          
          {/* White Profile Card Container */}
          <div className="absolute left-[5px] top-[10px] w-[341px] h-[300px] flex items-center justify-center p-4 z-20">
            <img 
              src="/image 1.png" 
              alt="Profile card showcase" 
              className="max-w-full max-h-full object-contain rounded-[20px] "
            />
          </div>
          
          <div className="absolute bg-clip-text bg-gradient-to-r capitalize font-['Staatliches:Regular',_sans-serif] from-[#d99c00] left-[37px] not-italic text-[40px] to-[#ffaa00] top-[287px] w-[318px]" style={{ WebkitTextFillColor: "transparent" }}>
            <p className="leading-[1.32]">Proven Growth</p>
          </div>
          
          <div className="absolute font-['DM_Sans:Regular',_sans-serif] font-normal left-[37px] lowercase text-[20px] text-white top-[357px] w-[315px]" style={{ fontVariationSettings: "'opsz' 14" }}>
            <p className="leading-[1.32]">From 0 to 8M</p>
          </div>
        </div>
        
        {/* Right Side Card */}
        <div className="h-[347px] relative shrink-0 w-[342px]">
          <div className="absolute bg-[#c4c4c4] h-[347px] left-0 rounded-[30px] top-0 w-[342px]" />
        </div>
      </div>

      {/* Portfolio Section - Refactored */}
      <div className="absolute left-0 top-[1900px] w-full h-[1200px] ">
        {/* Background Image with Dark Overlay */}
        <div className="absolute inset-0">
          <img 
            src="/image 3.png" 
            alt="Portfolio background" 
            className="w-full h-full object-cover scale-110"
          />
        </div>
        
        {/* Content Container */}
        <div className="relative z-10 flex items-center justify-between h-full px-8 md:px-16 lg:px-24">
          {/* Left Side - Text and Button */}
          <div className="flex flex-col items-start max-w-lg">
            {/* Main Headline */}
            <h2 className="font-['Staatliches:Regular',_sans-serif] text-3xl md:text-4xl font-bold uppercase leading-tight text-white mb-8">
              <span>FOLLOWERS = </span>
              <span className="text-[#FFC20E]">CLOUT.</span>
              <br />
              <span>CLOUT = </span>
              <span className="text-[#FFC20E]">CASH.</span>
              <br />
              <span>HERE'S THE GAME</span>
            </h2>
            
            {/* Yellow Button */}
            <button className="bg-[#FFC20E] hover:bg-[#e6a20b] text-black font-medium text-sm md:text-base px-6 py-3 rounded-full transition-colors duration-300">
              Discover Your Earnings
            </button>
          </div>
          
          {/* Right Side - Follower Tiers */}
          <div className="flex flex-col space-y-6">
            {/* Header Icons */}
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-2">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z"/>
                </svg>
              </div>
              <div className="flex items-center space-x-2">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
            </div>
            
            {/* 10K Tier */}
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <span className="text-white text-lg md:text-xl font-bold">10K</span>
              </div>
              <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
              <span className="text-[#FFC20E] text-lg md:text-xl font-bold">$1 000 / MONTH</span>
            </div>
            
            {/* 100K Tier */}
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <span className="text-white text-lg md:text-xl font-bold">100K</span>
              </div>
              <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
              <span className="text-[#FFC20E] text-lg md:text-xl font-bold">$5 000 / MONTH</span>
            </div>
            
            {/* 1M Tier */}
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <span className="text-white text-lg md:text-xl font-bold">1M</span>
              </div>
              <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
              <span className="text-[#FFC20E] text-lg md:text-xl font-bold">$20 000 / MONTH</span>
            </div>
            
            {/* 8M Tier */}
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <span className="text-white text-lg md:text-xl font-bold">8M</span>
              </div>
              <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
              <span className="text-[#FFC20E] text-lg md:text-xl font-bold">$100 000+ / MONTH</span>
            </div>
          </div>
        </div>
      </div>

      {/* New Earnings Calculator Section */}
      <div className="absolute left-0 top-[2800px] w-full h-[700px] overflow-hidden">
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
        <div className="relative z-10 flex items-center justify-center h-full">
          <div className="flex flex-col items-center space-y-12">
          {/* Header */}
          <div className="text-center">
            <h2 className="font-['Staatliches:Regular',_sans-serif] text-4xl md:text-5xl font-bold uppercase text-white tracking-wider">
              ESTIMATE YOUR EARNINGS
            </h2>
          </div>
          
          {/* Two Cards Container */}
          <div className="flex space-x-6">
            {/* Followers/Views Card */}
            <div className="bg-[#1a1a1a] border border-[#333] rounded-[20px] p-8 w-[280px] h-[200px] flex flex-col items-center justify-center">
              <div className="mb-4">
                <svg className="w-10 h-10 text-white mx-auto" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z"/>
                </svg>
              </div>
              <h3 className="text-white text-lg font-medium mb-2">Followers/Views</h3>
              <p className="text-white text-3xl font-bold">10 000</p>
            </div>

            {/* Arrow */}
            <div className="flex items-center">
              <svg className="w-8 h-8 text-[#FFC20E]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>

            {/* Est. Income Card */}
            <div className="bg-[#1a1a1a] border border-[#FFC20E] rounded-[20px] p-8 w-[280px] h-[200px] flex flex-col items-center justify-center">
              <div className="mb-4">
                <svg className="w-10 h-10 text-white mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <h3 className="text-white text-lg font-medium mb-2">Est. Income</h3>
              <p className="text-[#FFC20E] text-3xl font-bold">10 000</p>
            </div>
          </div>

          {/* Join Button */}
          <button className="bg-[#FFC20E] hover:bg-[#e6a20b] text-black font-semibold text-lg px-10 py-4 rounded-full transition-colors duration-300 shadow-lg">
            Join Now To Start Earning
          </button>
          </div>
        </div>
      </div>

      {/* Course Modules Section - Redesigned */}
      <div className="absolute left-0 top-[3600px] w-full bg-[#121212] py-16" id="modules">
        <div className="max-w-6xl mx-auto px-8">
          
          {/* Module 1 - Highlighted */}
          <div className="flex items-center justify-between mb-8 pb-8 border-b-2 border-[#FFC20E]">
            <div className="flex items-center space-x-6">
              <span className="text-[#FFC20E] text-2xl font-bold">01</span>
              <h3 className="text-[#FFC20E] text-6xl font-['Staatliches:Regular',_sans-serif] uppercase">MODULE 1</h3>
              <p className="text-[#FFC20E] text-lg ml-8">Orem Ipsum Dolor Sit Amet,<br/>Consectetur Adipiscing Elit</p>
            </div>
            <div className="w-32 h-20 bg-gradient-to-br from-[#444] to-[#666] rounded-lg overflow-hidden">
              <img src="/Hero Banner Image.png" alt="Module 1" className="w-full h-full object-cover" />
            </div>
          </div>

          {/* Modules 2-10 */}
          {[2, 3, 4, 5, 6, 7, 8, 9, 10].map((moduleNumber) => (
            <div key={moduleNumber} className="flex items-center justify-between mb-8 pb-8 border-b border-gray-600">
              <div className="flex items-center space-x-6">
                <span className="text-white text-2xl font-bold">{moduleNumber.toString().padStart(2, '0')}</span>
                <h3 className="text-white text-6xl font-['Staatliches:Regular',_sans-serif] uppercase">MODULE {moduleNumber}</h3>
                <p className="text-white text-lg ml-8">Orem Ipsum Dolor Sit Amet,<br/>Consectetur Adipiscing Elit</p>
              </div>
            </div>
          ))}
          
        </div>
      </div>

      {/* Community Section */}
      <div className="absolute contents left-[99px] top-[6140px]">
        <div className="absolute bg-gradient-to-br from-[#333] to-[#555] h-[721px] left-[99px] top-[6140px] w-[832px]" />
        
        <div className="absolute font-['Staatliches:Regular',_sans-serif] h-[230.651px] leading-[0] left-[166px] not-italic text-[#e6a20b] text-[126.858px] top-[6916px] w-[602px]">
          <p className="leading-[111.481px]">COMMUNITY OF HUSTLERS</p>
        </div>
        
        <div className="absolute contents left-[964px] top-[6363px]">
          <div className="absolute font-['Staatliches:Regular',_sans-serif] left-[964px] text-[#e6a20b] text-[96px] text-nowrap top-[6363px]">
            <p className="leading-[1.15] whitespace-pre">2000</p>
          </div>
          <div className="absolute font-['Staatliches:Regular',_sans-serif] h-[25.975px] left-[1150px] text-[#e6a20b] text-[43.357px] top-[6405px] w-[27px]">
            <p className="leading-[38.101px]">+</p>
          </div>
          <div className="absolute font-['Poppins:Regular',_sans-serif] left-[969px] text-[24px] text-[rgba(255,255,255,0.8)] text-nowrap top-[6457px]">
            <p className="leading-[1.55] whitespace-pre">Members</p>
          </div>
        </div>
      </div>

      {/* Pricing Section */}
      <div id="pricing" className="absolute contents left-[3374px] top-[6538px]">
        <div className="absolute flex flex-col font-['DM_Sans:Regular',_sans-serif] font-normal justify-center leading-[0] left-[4036px] text-[64px] text-center text-white top-[6622px] translate-x-[-50%] translate-y-[-50%] w-[860px]" style={{ fontVariationSettings: "'opsz' 14" }}>
          <p className="leading-[1.32]">Simple, Transparent, and Scalable Pricing</p>
        </div>
        
        {/* Pricing Cards */}
        <div className="absolute content-stretch flex gap-[21px] items-center justify-start top-[6766px] translate-x-[-50%]" style={{ left: "calc(50% + 3266px)" }}>
          {/* Starter Plan */}
          <div className="bg-[#070707] h-[292px] relative rounded-[20px] shrink-0 w-[418px] hover:scale-105 transition-transform cursor-pointer">
            <div aria-hidden="true" className="absolute border border-[#ffeff1] border-solid inset-0 pointer-events-none rounded-[20px]" />
            
            <div className="absolute h-[21px] left-[18px] top-[22px] w-[210px]">
              <div className="absolute box-border content-stretch flex gap-[10px] items-center justify-center left-[97px] px-[20px] py-[12px] rounded-[9202px] top-[8px] w-[204px]">
                <div aria-hidden="true" className="absolute border border-solid border-white inset-[-1px] pointer-events-none rounded-[9203px]" />
                <div className="font-['DM_Sans:Regular',_sans-serif] font-normal leading-[0] relative shrink-0 text-[16px] text-nowrap text-white" style={{ fontVariationSettings: "'opsz' 14" }}>
                  <p className="leading-[normal] whitespace-pre">Start with Starter</p>
                </div>
              </div>
            </div>
            
            <div className="absolute flex flex-col font-['Poppins:Regular',_sans-serif] justify-center leading-[0] left-[21px] not-italic text-[0px] text-white top-[151px] translate-y-[-50%] w-[353px]">
              <p className="font-['DM_Sans:Regular',_sans-serif] font-normal leading-[normal]">
                <span className="text-[55px]" style={{ fontVariationSettings: "'opsz' 14" }}>
                  $99
                </span>
                <span className="text-[20px]" style={{ fontVariationSettings: "'opsz' 14" }}> / project</span>
              </p>
            </div>
            
            <div className="absolute bg-[#121212] h-[41px] left-[21px] rounded-[11px] top-[222px] w-[384px] hover:bg-[#1a1a1a] transition-colors">
              <div className="box-border content-stretch flex gap-[10px] h-[41px] items-center justify-center overflow-clip px-[151px] py-[12px] relative w-[384px]">
                <div className="flex flex-col font-['DM_Sans:Medium',_sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[16px] text-center text-nowrap text-white" style={{ fontVariationSettings: "'opsz' 14" }}>
                  <p className="leading-[normal] whitespace-pre">Get This Plan</p>
                </div>
              </div>
            </div>
          </div>

          {/* Growth Plan - Featured */}
          <div className="bg-[#730002] h-[292px] relative rounded-[20px] shrink-0 w-[418px] hover:scale-105 transition-transform cursor-pointer">
            <div aria-hidden="true" className="absolute border border-[#ffeff1] border-solid inset-0 pointer-events-none rounded-[20px]" />
            
            <div className="absolute h-[21px] left-[18px] top-[22px] w-[210px]">
              <div className="absolute box-border content-stretch flex gap-[10px] items-center justify-center left-[97px] px-[20px] py-[12px] rounded-[9202px] top-[8px] w-[204px]">
                <div aria-hidden="true" className="absolute border border-solid border-white inset-[-1px] pointer-events-none rounded-[9203px]" />
                <div className="font-['DM_Sans:Regular',_sans-serif] font-normal leading-[0] relative shrink-0 text-[16px] text-nowrap text-white" style={{ fontVariationSettings: "'opsz' 14" }}>
                  <p className="leading-[normal] whitespace-pre">Choose Growth</p>
                </div>
              </div>
            </div>
            
            <div className="absolute flex flex-col font-['Poppins:Regular',_sans-serif] justify-center leading-[0] left-[21px] not-italic text-[0px] text-white top-[151px] translate-y-[-50%] w-[353px]">
              <p className="font-['DM_Sans:Regular',_sans-serif] font-normal leading-[normal]">
                <span className="text-[55px]" style={{ fontVariationSettings: "'opsz' 14" }}>$299 </span>
                <span className="text-[20px]" style={{ fontVariationSettings: "'opsz' 14" }}>
                  / project
                </span>
              </p>
            </div>
            
            <div className="absolute bg-white h-[41px] left-[21px] rounded-[11px] top-[222px] w-[384px] hover:bg-gray-100 transition-colors">
              <div className="box-border content-stretch flex gap-[10px] h-[41px] items-center justify-center overflow-clip px-[151px] py-[12px] relative w-[384px]">
                <div className="flex flex-col font-['DM_Sans:Medium',_sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#121212] text-[16px] text-center text-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
                  <p className="leading-[normal] whitespace-pre">Get This Plan</p>
                </div>
              </div>
            </div>
          </div>

          {/* Pro Plan */}
          <div className="bg-[#070707] h-[292px] relative rounded-[20px] shrink-0 w-[418px] hover:scale-105 transition-transform cursor-pointer">
            <div aria-hidden="true" className="absolute border border-[#ffeff1] border-solid inset-0 pointer-events-none rounded-[20px]" />
            
            <div className="absolute h-[21px] left-[18px] top-[22px] w-[210px]">
              <div className="absolute box-border content-stretch flex gap-[10px] items-center justify-center left-[97px] px-[20px] py-[12px] rounded-[9202px] top-[8px] w-[204px]">
                <div aria-hidden="true" className="absolute border border-solid border-white inset-[-1px] pointer-events-none rounded-[9203px]" />
                <div className="font-['DM_Sans:Regular',_sans-serif] font-normal leading-[0] relative shrink-0 text-[16px] text-nowrap text-white" style={{ fontVariationSettings: "'opsz' 14" }}>
                  <p className="leading-[normal] whitespace-pre">Start with Pro</p>
                </div>
              </div>
            </div>
            
            <div className="absolute flex flex-col font-['Poppins:Regular',_sans-serif] justify-center leading-[0] left-[21px] not-italic text-[0px] text-white top-[151px] translate-y-[-50%] w-[353px]">
              <p className="font-['DM_Sans:Regular',_sans-serif] font-normal leading-[normal]">
                <span className="text-[55px]" style={{ fontVariationSettings: "'opsz' 14" }}>$499 </span>
                <span className="text-[20px]" style={{ fontVariationSettings: "'opsz' 14" }}>
                  / project
                </span>
              </p>
            </div>
            
            <div className="absolute bg-[#121212] h-[41px] left-[21px] rounded-[11px] top-[222px] w-[384px] hover:bg-[#1a1a1a] transition-colors">
              <div className="box-border content-stretch flex gap-[10px] h-[41px] items-center justify-center overflow-clip px-[151px] py-[12px] relative w-[384px]">
                <div className="flex flex-col font-['DM_Sans:Medium',_sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[16px] text-center text-nowrap text-white" style={{ fontVariationSettings: "'opsz' 14" }}>
                  <p className="leading-[normal] whitespace-pre">Get This Plan</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Final CTA Section */}
      <div className="absolute contents left-[-113px] top-[8485px]">
        <div className="absolute bg-gradient-to-br from-[#222] to-[#444] h-[936px] left-[-113px] mix-blend-lighten top-[8506px] w-[1670px]" />
        
        <div className="absolute font-badrock h-[231px] leading-[0] left-[743.5px] not-italic text-[#e6a20b] text-[126.858px] text-center top-[8485px] translate-x-[-50%] w-[955px]">
          <p className="leading-[111.481px]">$100</p>
        </div>
        
        <div className="absolute h-[91.867px] left-[401px] top-[8604px] w-[689.651px]">
          <div className="absolute bg-gradient-to-r box-border content-stretch flex from-[#d99c00] gap-[13.333px] items-center justify-center px-[63.999px] py-[23.29px] rounded-[77.634px] to-[#ffaa00] top-[-11px] translate-x-[-50%] w-[176px] cursor-pointer hover:from-[#e6a20b] hover:to-[#ffbb00] transition-all transform hover:scale-105" style={{ left: "calc(50% + 0.019px)" }}>
            <div className="flex flex-col font-['Poppins:SemiBold',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[21.996px] text-black text-center text-nowrap">
              <p className="leading-none whitespace-pre">BUY NOW</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Profile Image - positioned to match the image */}
      <div className="absolute left-[990px] top-[200px] z-20 overflow-visible">
        <img 
          src="/image 1.png" 
          alt="Profile showcase" 
          className="w-[380px] h-auto object-contain rounded-[20px] shadow-[0px_20px_60px_rgba(0,0,0,0.3)]"
        />
      </div>

      {/* Yellow Banner - positioned on top of the card profile */}
      <div className="absolute bg-[#ffb700] left-[955px] rounded-[25px] top-[52%] w-[450px] h-[100px] z-30 overflow-visible shadow-[0px_10px_30px_rgba(0,0,0,0.3)]">
        <div aria-hidden="true" className="absolute border border-black border-solid inset-0 pointer-events-none rounded-[25px]" />
        <div className="absolute inset-0 flex items-center justify-center px-6">
          <p className="font-['Staatliches:Regular',_sans-serif] text-[44px] text-black font-bold leading-[1] text-center tracking-[0.5px] uppercase">
            WAY TO $50K/MONTH
          </p>
        </div>
      </div>

      {/* Members Count with Stars */}
      <div className="absolute right-[100px] top-[700px] z-10 text-right">
        <div className="font-['Staatliches:Regular',_sans-serif] text-[72px] text-white font-bold leading-[0.8] tracking-[2px] uppercase drop-shadow-lg">
          +1000 MEMBERS
        </div>
        <div className="flex justify-end gap-1 mt-2">
          {[...Array(5)].map((_, i) => (
            <svg key={i} className="w-8 h-8 text-yellow-400 drop-shadow-lg" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          ))}
        </div>
      </div>
    </div>
  );
}

