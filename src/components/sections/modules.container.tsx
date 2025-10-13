import { images } from '../../assets/images';
import { CONTENT } from '../../constants';

interface ModuleItemProps {
  number: number;
  highlighted?: boolean;
}

function ModuleItem({ number, highlighted = false }: ModuleItemProps) {
  const numberStr = number.toString().padStart(2, '0');
  const colorClass = highlighted ? 'text-[#FFC20E]' : 'text-white';
  const borderClass = highlighted ? 'border-b-2 border-[#FFC20E]' : 'border-b border-gray-600';

  return (
    <div className={`flex flex-col sm:flex-row items-start sm:items-center justify-between mb-6 sm:mb-8 pb-6 sm:pb-8 ${borderClass} gap-4 sm:gap-6`}>
      {highlighted ? (
        <>
          {/* Mobile Layout */}
          <div className="sm:hidden flex items-start gap-4 w-full">
            <div className="flex flex-col space-y-2 flex-1">
              <span className={`${colorClass} text-2xl sm:text-3xl font-bold`}>{numberStr}</span>
              <h3 className={`${colorClass} text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-staatliches uppercase`}>
                MODULE {number}
              </h3>
              <p className={`${colorClass} text-base sm:text-lg lg:text-xl`}>
                {CONTENT.modules.placeholder.title}<br/>{CONTENT.modules.placeholder.subtitle}
              </p>
            </div>
            <div className="w-32 h-24 bg-gradient-to-br from-[#444] to-[#666] rounded-lg overflow-hidden flex-shrink-0">
              <img src={images.heroBanner} alt={`Module ${number}`} className="w-full h-full object-cover" />
            </div>
          </div>
          
          {/* Desktop Layout */}
          <div className="hidden sm:flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-6 w-full sm:w-auto">
            <span className={`${colorClass} text-2xl sm:text-3xl font-bold`}>{numberStr}</span>
            <h3 className={`${colorClass} text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-staatliches uppercase`}>
              MODULE {number}
            </h3>
            <p className={`${colorClass} text-base sm:text-lg lg:text-xl ml-0 sm:ml-8`}>
              {CONTENT.modules.placeholder.title}<br/>{CONTENT.modules.placeholder.subtitle}
            </p>
          </div>
          <div className="hidden sm:block w-full sm:w-48 lg:w-56 h-32 sm:h-40 lg:h-48 bg-gradient-to-br from-[#444] to-[#666] rounded-lg overflow-hidden flex-shrink-0">
            <img src={images.heroBanner} alt={`Module ${number}`} className="w-full h-full object-cover" />
          </div>
        </>
      ) : (
        <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-6 w-full sm:w-auto">
          <span className={`${colorClass} text-xl sm:text-2xl font-bold`}>{numberStr}</span>
          <h3 className={`${colorClass} text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-staatliches uppercase`}>
            MODULE {number}
          </h3>
          <p className={`${colorClass} text-sm sm:text-base lg:text-lg ml-0 sm:ml-8`}>
            {CONTENT.modules.placeholder.title}<br/>{CONTENT.modules.placeholder.subtitle}
          </p>
        </div>
      )}
    </div>
  );
}

export function ModulesSection() {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-black" id="modules">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ModuleItem number={1} highlighted />
        {Array.from({ length: CONTENT.modules.moduleCount - 1 }, (_, i) => (
          <ModuleItem key={i + 2} number={i + 2} />
        ))}
      </div>
    </section>
  );
}

