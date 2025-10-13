import { ReactNode, ButtonHTMLAttributes } from 'react';
import { ANIMATIONS } from '../../constants';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'gradient';
  size?: 'sm' | 'md' | 'lg';
  children: ReactNode;
  icon?: ReactNode;
  fullWidth?: boolean;
}

export function Button({ 
  variant = 'primary', 
  size = 'md', 
  children, 
  icon,
  fullWidth = false,
  className = '',
  ...props 
}: ButtonProps) {
  const baseStyles = `font-semibold rounded-full ${ANIMATIONS.transitionColors} shadow-lg inline-flex items-center justify-center gap-2 sm:gap-3`;
  
  const variants = {
    primary: 'bg-[#FFC20E] hover:bg-[#e6a20b] text-black',
    secondary: 'bg-[#070707] border border-[#e6a20b] hover:border-[#ffaa00] text-white',
    outline: 'bg-[#070707] hover:bg-[#1a1a1a] text-[#c9c9c9] hover:text-white',
    gradient: 'bg-gradient-to-r from-[#d99c00] to-[#ffaa00] hover:from-[#e6a20b] hover:to-[#ffbb00] text-white',
  };
  
  const sizes = {
    sm: 'px-4 py-2 text-xs sm:text-sm',
    md: 'px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base',
    lg: 'px-8 sm:px-10 py-3 sm:py-4 text-base sm:text-lg',
  };

  const widthClass = fullWidth ? 'w-full' : '';
  
  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${widthClass} ${className}`}
      {...props}
    >
      <span>{children}</span>
      {icon && <div className="flex-shrink-0">{icon}</div>}
    </button>
  );
}

export function IconButton({ 
  children, 
  className = '',
  'aria-label': ariaLabel,
  ...props 
}: ButtonHTMLAttributes<HTMLButtonElement> & { 'aria-label': string }) {
  return (
    <button
      className={`w-11 h-11 sm:w-12 sm:h-12 lg:w-[60px] lg:h-[60px] rounded-full ${ANIMATIONS.transitionColors} focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-black ${className}`}
      aria-label={ariaLabel}
      {...props}
    >
      {children}
    </button>
  );
}

