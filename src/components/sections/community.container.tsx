import { Button } from '../component';
import { images } from '../../assets/images';
import { CONTENT } from '../../constants';

export function CommunitySection() {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
          
          {/* Left - Phone with Assets */}
          <div className="flex-1 flex justify-center items-center relative order-1 lg:order-1">
            {/* Grey Background Box */}
            <div className="absolute w-[350px] sm:w-[500px] lg:w-[450px] h-[220px] sm:h-[240px] lg:h-[280px] bg-[#d9d9d9] rounded-[20px] drop-shadow-[0_28px_80px_rgba(0,0,0,0.6)] z-10 -mt-28 sm:-mt-4 lg:-mt-9 -ml-8 sm:ml-0 lg:-ml-8">
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_right,transparent_55%,rgba(255,255,255,0.02)_100%)] rounded-[20px] pointer-events-none" />
            </div>
            
            {/* Hands-Phone Image */}
            <div className="relative z-20 flex items-center justify-center">
              <img 
                src={images.handsPhone} 
                alt="Hands holding phone" 
                className="w-[300px] sm:w-[400px] lg:w-[400px] h-auto object-contain scale-125 sm:scale-150 lg:scale-125 -translate-y-28 sm:-translate-y-24 lg:-translate-y-24 -translate-x-4"
              />
            </div>
            
            {/* Blue Messenger Overlay */}
            <div className="absolute left-[-25%] sm:left-[5%] lg:left-[5%] -top-36 sm:-top-32 lg:-top-30 w-[260px] sm:w-[170px] lg:w-[210px] xl:w-[280px] z-50 pointer-events-none" aria-hidden="true">
              <img 
                src={images.blueMessenger} 
                alt="Messenger icon" 
                className="w-full h-full object-contain filter drop-shadow-[0_8px_24px_rgba(0,0,0,0.35)]"
              />
            </div>
          </div>

          {/* Right - Text Content */}
          <div className="w-full lg:flex-1 flex flex-col items-start lg:items-start text-left space-y-4 order-2 lg:order-2">
            {/* Members Count */}
            <div className="flex flex-col items-end sm:items-start lg:items-start w-full -mt-24 sm:mt-0 lg:mt-0">
              <div className="flex items-baseline space-x-1">
                <span className="font-bold text-6xl sm:text-7xl lg:text-8xl text-[#FFC20E] leading-none">
                  {CONTENT.community.members.replace('+', '')}
                </span>
                <span className="font-bold text-3xl sm:text-4xl lg:text-5xl text-[#FFC20E] leading-none">+</span>
              </div>
              <span className="text-lg sm:text-xl text-white font-normal mt-1">Members</span>
            </div>

            {/* Join Button */}
            <Button 
              variant="primary" 
              size="md" 
              className="w-auto mx-auto lg:mx-0 lg:rounded-lg"
            >
              {CONTENT.community.ctaText}
            </Button>

            {/* Mobile Content */}
            <div className="lg:hidden mt-8 flex flex-col items-start text-left space-y-6">
              <div className="text-[#c9c9c9] text-lg font-bold uppercase tracking-wide leading-tight">
                {CONTENT.community.subtitle.split(', ').map((line, i) => (
                  <p key={i}>{line}{i === 0 ? ',' : ''}</p>
                ))}
              </div>
              <div className="text-[#FFC20E] text-4xl font-bold uppercase leading-tight">
                {CONTENT.community.title.split(' OF ').map((line, i) => (
                  <p key={i}>{line}{i === 0 ? ' OF' : ''}</p>
                ))}
              </div>
              <p className="text-[#c9c9c9] text-base leading-relaxed">
                {CONTENT.community.description}
              </p>
            </div>

            {/* Desktop Lorem Ipsum */}
            <div className="hidden lg:block text-white text-base sm:text-lg font-bold uppercase tracking-wide leading-tight mt-6">
              {CONTENT.community.subtitle.split(', ').map((line, i) => (
                <p key={i}>{line}{i < CONTENT.community.subtitle.split(', ').length - 1 ? ',' : ''}</p>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Section - Desktop Only */}
        <div className="hidden lg:flex mt-8 sm:mt-10 lg:mt-12 flex-col lg:flex-row items-start lg:items-end justify-between gap-8 lg:gap-12">
          <div className="flex-1 text-left -ml-2 sm:-ml-4 lg:-ml-6">
            <h2 className="font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-[#FFC20E] leading-none uppercase">
              {CONTENT.community.title.split(' OF ').map((line, i) => (
                <span key={i}>{line}{i === 0 && <br />}OF{i === 1 && ' '}</span>
              ))}
            </h2>
          </div>
          <div className="flex-1 lg:pl-16 -mt-20 sm:-mt-24 lg:-mt-28 -ml-16 sm:-ml-20 lg:-ml-24">
            <p className="text-white text-base sm:text-lg lg:text-xl leading-relaxed text-left">
              {CONTENT.community.description}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

