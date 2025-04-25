
import React from 'react';
import { cn } from '@/lib/utils';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

const Logo = ({ className, size = 'md' }: LogoProps) => {
  const sizeClasses = {
    sm: 'text-xl',
    md: 'text-2xl',
    lg: 'text-4xl',
  };

  return (
    <div className={cn('font-poppins font-bold flex items-center', sizeClasses[size], className)}>
      <span className="text-crypi-purple">Cry</span>
      <span className="text-crypi-teal">PI</span>
      <span className="ml-1 text-crypi-text-primary text-sm font-normal">Swift Pay</span>
    </div>
  );
};

export default Logo;
