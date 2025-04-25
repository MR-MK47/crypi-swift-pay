
import React from 'react';
import { cn } from '@/lib/utils';

interface GradientBackgroundProps {
  children: React.ReactNode;
  className?: string;
}

const GradientBackground = ({ children, className }: GradientBackgroundProps) => {
  return (
    <div className={cn('min-h-screen bg-gradient-primary overflow-auto', className)}>
      {children}
    </div>
  );
};

export default GradientBackground;
