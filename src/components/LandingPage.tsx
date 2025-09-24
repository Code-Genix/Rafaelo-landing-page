import { useState } from 'react';
import svgPaths from "../imports/svg-gfdvud67i5";

// Import SVG components using SVGR - Temporarily commented out for debugging
// import PlusIcon from '../assets/icons/plus-icon.svg?react';
// import ArrowIcon from '../assets/icons/arrow-icon.svg?react';
// import MenuLines from '../assets/icons/menu-lines.svg?react';

// Navigation Component
function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  // Temporarily using these variables to avoid TypeScript errors
  console.log('Menu open state:', isMenuOpen, setIsMenuOpen);

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

// Interactive Earnings Calculator Component
function EarningsCalculator() {
  const [followers, setFollowers] = useState(10000);
  const [estimatedEarnings, setEstimatedEarnings] = useState(1000);

  const calculateEarnings = (followerCount: number) => {
    if (followerCount >= 8000000) return 100000;
    if (followerCount >= 1000000) return 20000;
    if (followerCount >= 100000) return 5000;
    if (followerCount >= 10000) return 1000;
    return Math.floor(followerCount * 0.1);
  };

  const handleFollowerChange = (value: number) => {
    setFollowers(value);
    setEstimatedEarnings(calculateEarnings(value));
  };

  return (
    <div className="relative py-20">
      <div className="absolute contents left-[403px] top-[2964px]">
        <div className="absolute backdrop-blur-[37px] backdrop-filter bg-[rgba(185,169,201,0.05)] h-[392px] rounded-[20px] top-[2964px] translate-x-[-50%] w-[350px]" style={{ left: "calc(50% - 178px)" }}>
          <div aria-hidden="true" className="absolute border-[0.5px] border-[rgba(255,255,255,0.6)] border-solid inset-0 pointer-events-none rounded-[20px]" />
        </div>
        
        <div className="absolute backdrop-blur-[37px] backdrop-filter bg-[rgba(32,32,32,0.16)] left-[434px] rounded-[13px] size-[57.906px] top-[3000px]">
          <div aria-hidden="true" className="absolute border-[0.2px] border-solid border-white inset-0 pointer-events-none rounded-[13px] shadow-[0px_4px_44px_0px_rgba(0,0,0,0.59)]" />
        </div>
        
        <div className="absolute left-[446px] overflow-clip size-[34px] top-[3014px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 34 30">
            <path d={svgPaths.p30e80100} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="2" />
            <path d={svgPaths.p2bf2c00} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="2" />
            <path d={svgPaths.p2eec6f00} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="2" />
          </svg>
        </div>
        
        <div className="absolute capitalize font-['Poppins:Regular',_sans-serif] leading-[0] left-[434px] not-italic text-[24px] text-white top-[3126px] tracking-[-0.48px] w-[267px]">
          <p className="leading-[44px]">{followers.toLocaleString()} followers/views</p>
        </div>
        
        <input 
          type="range" 
          min="1000" 
          max="10000000" 
          value={followers}
          onChange={(e) => handleFollowerChange(parseInt(e.target.value))}
          className="absolute left-[434px] top-[3080px] w-[200px] accent-[#e9a200]"
        />
      </div>

      <div className="absolute contents left-[780px] top-[2964px]">
        <div className="absolute backdrop-blur-[37px] backdrop-filter bg-[rgba(185,169,201,0.05)] h-[392px] rounded-[20px] top-[2964px] translate-x-[-50%] w-[350px]" style={{ left: "calc(50% + 199px)" }}>
          <div aria-hidden="true" className="absolute border-[#e9a200] border-[0.5px] border-solid inset-0 pointer-events-none rounded-[20px]" />
        </div>
        
        <div className="absolute capitalize font-['Poppins:Regular',_sans-serif] leading-[0] left-[819px] not-italic text-[24px] text-white top-[3122px] tracking-[-0.48px] w-[267px]">
          <p className="leading-[44px]">est. income</p>
        </div>
        
        <div className="absolute font-badrock leading-[0] left-[824px] not-italic text-[#e9a200] text-[63.88px] top-[3216px] tracking-[1.9164px] uppercase w-[131px]">
          <p className="leading-[0.88]">${estimatedEarnings.toLocaleString()}</p>
        </div>
        
        <div className="absolute backdrop-blur-[37px] backdrop-filter bg-[rgba(0,0,0,0.16)] left-[819px] rounded-[13px] size-[57.906px] top-[3000px]">
          <div aria-hidden="true" className="absolute border-[#e9a200] border-[0.2px] border-solid inset-0 pointer-events-none rounded-[13px] shadow-[0px_4px_44px_0px_rgba(0,0,0,0.59)]" />
        </div>
        
        <div className="absolute left-[825px] size-[45px] top-[3006px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 45 45">
            <path d={svgPaths.p204e1680} fill="white" />
            <path d={svgPaths.p334da980} fill="white" />
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

      
      {/* Navigation Arrows - positioned between framework and profile sections */}
      <div className="absolute top-[1000px] left-1/2 transform -translate-x-1/2 flex gap-[15px] z-30">
        {/* Left Arrow */}
        <button className="w-[50px] h-[50px] bg-[rgba(0,0,0,0.6)] border border-[rgba(255,255,255,0.3)] rounded-full flex items-center justify-center cursor-pointer hover:bg-[rgba(0,0,0,0.8)] hover:border-[rgba(255,255,255,0.5)] transition-all duration-300 group">
          <svg className="w-6 h-6 text-white rotate-180 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>

        {/* Right Arrow */}
        <button className="w-[50px] h-[50px] bg-[#ffb700] border border-[rgba(255,183,0,0.5)] rounded-full flex items-center justify-center cursor-pointer hover:bg-[#e6a20b] hover:border-[rgba(230,162,11,0.8)] transition-all duration-300 group">
          <svg className="w-6 h-6 text-black group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      {/* Framework Section */}
      <div className="absolute font-['Staatliches:Regular',_sans-serif] leading-[0] left-[375px] not-italic text-[50px] text-white top-[1166px] tracking-[-2.349px] w-[783px]">
        <p className="leading-[1.32]">READY-TO-WORK FRAMEWORK</p>
      </div>
      
      {/* Framework Cards */}
      <div className="absolute content-stretch flex gap-[23px] items-center justify-start top-[1363px] translate-x-[-50%]" style={{ left: "calc(50% + 10.5px)" }}>
        <div className="h-[347px] relative shrink-0 w-[314px]">
          <div className="absolute bg-[#c4c4c4] blur-[6.75px] filter h-[347px] left-0 rounded-[30px] top-0 w-[314px]" />
        </div>
        
        <div className="h-[459px] relative shrink-0 w-[415px]">
          <div className="absolute bg-gradient-to-l from-[#252525] h-[459px] left-0 rounded-[30px] to-[#252525] top-0 via-[51.923%] via-[rgba(0,0,0,0)] w-[415px]" />
          
          <div className="absolute bg-gradient-to-br from-[#333] to-[#555] h-[220px] left-[37px] rounded-[41px] top-[42px] w-[221px]">
            <div aria-hidden="true" className="absolute border-2 border-black border-solid inset-0 pointer-events-none rounded-[41px] shadow-[0px_4px_28.3px_0px_rgba(0,0,0,0.25)]" />
          </div>
          
          <div className="absolute bg-clip-text bg-gradient-to-r capitalize font-['Staatliches:Regular',_sans-serif] from-[#d99c00] left-[37px] not-italic text-[40px] to-[#ffaa00] top-[287px] w-[318px]" style={{ WebkitTextFillColor: "transparent" }}>
            <p className="leading-[1.32]">Proven Growth</p>
          </div>
          
          <div className="absolute font-['DM_Sans:Regular',_sans-serif] font-normal left-[37px] lowercase text-[20px] text-white top-[357px] w-[315px]" style={{ fontVariationSettings: "'opsz' 14" }}>
            <p className="leading-[1.32]">From 0 to 8M</p>
          </div>
        </div>
        
        <div className="h-[347px] relative shrink-0 w-[342px]">
          <div className="absolute bg-[#c4c4c4] blur-[10.5px] filter h-[347px] left-0 rounded-[30px] top-0 w-[342px]" />
        </div>
      </div>

      {/* Portfolio Section */}
      <div className="absolute capitalize font-cook-conthic leading-[0] left-[109px] not-italic text-[76.947px] text-white top-[2192px] w-[554px]">
        <p className="font-['Staatliches:Regular',_sans-serif] leading-[0.84]">
          <span>Followers = </span>
          <span className="bg-clip-text bg-gradient-to-r from-[#d99c00] to-[#ffaa00]" style={{ WebkitTextFillColor: "transparent" }}>
            clout
          </span>
          <span>. Clout = </span>
          <span className="bg-clip-text bg-gradient-to-r from-[#d99c00] to-[#ffaa00]" style={{ WebkitTextFillColor: "transparent" }}>
            cash
          </span>
          . Here's the game
        </p>
      </div>

      <div className="absolute capitalize font-['Staatliches:Regular',_sans-serif] leading-[0] left-[466px] not-italic text-[69.799px] text-white top-[2865px] w-[641px]">
        <p className="leading-[0.84]">Estimate your Earnings</p>
      </div>

      {/* Earnings Calculator */}
      <EarningsCalculator />

      {/* Course Modules Section */}
      <div className="absolute contents left-[167px] top-[3706px]" id="modules">
        {/* Module 1 - Active */}
        <div className="absolute h-0 left-[168px] top-[3898px] w-[1175px]">
          <div className="absolute bottom-[-1px] left-0 right-0 top-[-1px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1175 2">
              <path d="M0 1H1175" stroke="#E6A20B" strokeWidth="2" />
            </svg>
          </div>
        </div>
        
        <div className="absolute font-['Staatliches:Regular',_sans-serif] leading-[0] left-[228px] not-italic text-[#e6a20b] text-[128px] text-nowrap top-[3706px]">
          <p className="leading-[normal] whitespace-pre">MODULE 1</p>
        </div>
        
        <div className="absolute font-['Staatliches:Regular',_sans-serif] leading-[0] left-[167px] not-italic text-[#e6a20b] text-[40px] text-nowrap top-[3720px]">
          <p className="leading-[1.15] whitespace-pre">01</p>
        </div>
        
        <div className="absolute capitalize left-[682px] text-[#e6a20b] top-[3732.88px] w-[360px] font-['Poppins:Regular',_sans-serif] text-[24px] tracking-[-0.48px]">
          <p className="leading-[29px]">Content Creation Strategy</p>
        </div>

        <div className="absolute bg-gradient-to-br from-[#444] to-[#666] h-[158px] left-[1086px] rounded-[32px] top-[3708px] w-[257px]" />

        {/* Additional Modules */}
        {[2, 3, 4, 5, 6, 7, 8, 9, 10].map((moduleNumber, index) => (
          <div key={moduleNumber} className={`absolute contents left-[167px] top-[${3706 + (index + 1) * 247}px]`}>
            <div className="absolute h-0 left-[168px] w-[1175px]" style={{ top: `${3898 + (index + 1) * 247}px` }}>
              <div className="absolute bottom-[-1px] left-0 right-0 top-[-1px]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1175 2">
                  <path d="M0 1H1175" stroke="white" strokeOpacity="0.8" strokeWidth="2" />
                </svg>
              </div>
            </div>
            
            <div className="absolute font-['Staatliches:Regular',_sans-serif] leading-[0] left-[228px] not-italic text-[128px] text-[rgba(255,255,255,0.8)] text-nowrap" style={{ top: `${3706 + (index + 1) * 247}px` }}>
              <p className="leading-[normal] whitespace-pre">MODULE {moduleNumber}</p>
            </div>
            
            <div className="absolute font-['Staatliches:Regular',_sans-serif] leading-[0] left-[167px] not-italic text-[40px] text-[rgba(255,255,255,0.8)] text-nowrap" style={{ top: `${3720 + (index + 1) * 247}px` }}>
              <p className="leading-[1.15] whitespace-pre">{moduleNumber.toString().padStart(2, '0')}</p>
            </div>
            
            <div className="absolute capitalize left-[682px] text-white w-[360px] font-['Poppins:Regular',_sans-serif] text-[24px] tracking-[-0.48px]" style={{ top: `${3732.88 + (index + 1) * 247}px` }}>
              <p className="leading-[29px]">Advanced strategies and techniques</p>
            </div>
          </div>
        ))}
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

      {/* Background Image with gradient overlay */}
      <div className="absolute bg-gradient-to-b from-[#121212] via-transparent to-[#121212] h-[904px] left-[5px] top-[1867px] w-[1507px]" />

      {/* Additional decorative elements */}

      
      
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
