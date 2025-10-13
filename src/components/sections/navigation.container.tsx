import { useState, useEffect } from 'react';
import { NAVIGATION } from '../../constants';

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const ArrowIcon = ({ fill = 'white', stroke = '#121212' }: { fill?: string; stroke?: string }) => (
    <svg className="w-full h-full" fill="none" viewBox="0 0 30 30">
      <circle cx="15" cy="15" fill={fill} r="15" />
      <path d="M12 10l6 5-6 5" stroke={stroke} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" fill="none" />
    </svg>
  );

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300 ${
      isScrolled ? 'bg-black/90 backdrop-blur-sm shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="flex items-center justify-between py-4 relative">
          {/* Left Side - CTA Buttons */}
          <div className="flex items-center space-x-2 sm:space-x-4">
            <button className="bg-[#d99c00] flex items-center gap-2 px-3 py-2 sm:px-4 rounded-full cursor-pointer hover:bg-[#e6a20b] transition-colors">
              <div className="w-5 h-5 sm:w-6 sm:h-6">
                <ArrowIcon />
              </div>
              <span className="text-white text-xs sm:text-sm font-medium">{NAVIGATION.cta.primary}</span>
            </button>
            
            <button className="bg-[#070707] border border-[#e6a20b] hover:border-[#ffaa00] flex items-center gap-2 px-3 py-2 sm:px-4 rounded-full transition-colors group">
              <div className="w-5 h-5 sm:w-6 sm:h-6">
                <ArrowIcon fill="#FFBB00" stroke="white" />
              </div>
              <span className="text-white text-xs sm:text-sm font-medium">{NAVIGATION.cta.secondary}</span>
            </button>
          </div>

          {/* Right Side - Navigation Links & Menu */}
          <div className="flex items-center space-x-4">
            <div className="hidden md:flex items-center space-x-2 sm:space-x-4">
              {NAVIGATION.links.map((link) => (
                <button key={link.href} className="bg-[#070707] px-4 py-2 rounded-full hover:bg-[#1a1a1a] transition-colors">
                  <a href={link.href} className="text-[#c9c9c9] hover:text-white transition-colors text-sm font-medium">
                    {link.label}
                  </a>
                </button>
              ))}
            </div>

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

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-[#070707] rounded-lg mt-2 p-4">
            <div className="flex flex-col items-center space-y-4">
              {NAVIGATION.links.map((link) => (
                <a 
                  key={link.href}
                  href={link.href} 
                  className="text-[#c9c9c9] hover:text-white transition-colors text-sm font-medium text-center"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

