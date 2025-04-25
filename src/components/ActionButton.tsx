
import React from 'react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface ActionButtonProps {
  icon: React.ReactNode;
  label: string;
  onClick: () => void;
  className?: string;
}

const ActionButton = ({ icon, label, onClick, className }: ActionButtonProps) => {
  return (
    <div className={cn('flex flex-col items-center', className)} onClick={onClick}>
      <div className="w-14 h-14 rounded-full bg-white shadow-md flex items-center justify-center mb-2 hover:bg-gray-50 transition-colors cursor-pointer">
        {icon}
      </div>
      <span className="text-sm font-medium">{label}</span>
    </div>
  );
};

export default ActionButton;
