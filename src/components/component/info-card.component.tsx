import { ReactNode } from 'react';

interface CardProps {
  children?: ReactNode;
  className?: string;
  gradient?: boolean;
}

export function Card({ children, className = '', gradient = false }: CardProps) {
  const baseStyles = 'rounded-[30px] shadow-lg overflow-hidden relative';
  const bgStyles = gradient 
    ? 'bg-gradient-to-br from-black/70 to-black/40 border border-white/20' 
    : 'bg-[#c4c4c4]';
  
  return (
    <div className={`${baseStyles} ${bgStyles} ${className}`}>
      {children}
    </div>
  );
}

interface InfoCardProps {
  icon: ReactNode;
  title: string;
  value: string;
  className?: string;
}

export function InfoCard({ icon, title, value, className = '' }: InfoCardProps) {
  return (
    <Card gradient className={`p-6 flex flex-col ${className}`}>
      <div className="flex items-start mb-4">
        <div className="w-9 h-9 bg-white/10 rounded-full flex items-center justify-center mr-3">
          {icon}
        </div>
        <h3 className="text-white text-base font-medium tracking-wide">{title}</h3>
      </div>
      <div className="flex-1 flex items-center justify-center">
        <p className="font-bebas-neue text-[48px] md:text-[56px] font-extrabold text-[#FFC20E] leading-none">
          {value}
        </p>
      </div>
    </Card>
  );
}

