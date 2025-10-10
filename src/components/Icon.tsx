import React from 'react';

interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * Icon wrapper component for easy SVG usage
 * 
 * Usage:
 * 1. Save your Figma SVG as a .svg file in src/assets/icons/
 * 2. Import: import MyIcon from '@/assets/icons/my-icon.svg?react';
 * 3. Use: <Icon as={MyIcon} size={24} color="blue" />
 */
export const Icon: React.FC<IconProps & { as: React.ComponentType<React.SVGProps<SVGSVGElement>> }> = ({ 
  as: IconComponent, 
  size = 24, 
  color, 
  className = '',
  ...props 
}) => {
  const sizeStyle = typeof size === 'number' ? `${size}px` : size;
  
  return (
    <IconComponent
      width={sizeStyle}
      height={sizeStyle}
      className={`inline-block ${className}`}
      style={{
        color: color || 'currentColor',
        ...props.style,
      }}
      {...props}
    />
  );
};

/**
 * Direct SVG component for inline usage
 * 
 * Usage:
 * <SVG size={24} color="red">
 *   <!-- Paste your Figma SVG content here -->
 *   <path d="..." />
 * </SVG>
 */
export const SVG: React.FC<IconProps & { children: React.ReactNode }> = ({ 
  size = 24, 
  color, 
  className = '',
  children,
  ...props 
}) => {
  const sizeStyle = typeof size === 'number' ? `${size}px` : size;
  
  return (
    <svg
      width={sizeStyle}
      height={sizeStyle}
      viewBox="0 0 24 24"
      fill="none"
      className={`inline-block ${className}`}
      style={{
        color: color || 'currentColor',
        ...props.style,
      }}
      {...props}
    >
      {children}
    </svg>
  );
};

export default Icon;