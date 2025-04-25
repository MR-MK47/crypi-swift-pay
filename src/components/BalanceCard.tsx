
import React from 'react';
import { ArrowUpRight, ArrowDownLeft, Copy } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';

interface BalanceCardProps {
  solBalance: string;
  usdBalance: string;
  walletAddress: string;
  className?: string;
}

const BalanceCard = ({ solBalance, usdBalance, walletAddress, className }: BalanceCardProps) => {
  const copyAddress = () => {
    navigator.clipboard.writeText(walletAddress);
    toast.success("Wallet address copied to clipboard!");
  };

  return (
    <div className={cn('glass-card rounded-xl p-6 w-full', className)}>
      <div className="flex justify-between items-center mb-4">
        <div>
          <h2 className="text-sm font-medium text-crypi-text-secondary">Your Balance</h2>
          <div className="flex items-end gap-2">
            <h1 className="text-3xl font-semibold">{solBalance} SOL</h1>
            <p className="text-crypi-text-secondary mb-1">≈ ${usdBalance} USD</p>
          </div>
        </div>
        <div className="flex items-center text-xs text-crypi-text-secondary bg-white px-2 py-1 rounded-full shadow-sm border border-gray-100">
          <div className="w-2 h-2 rounded-full bg-crypi-green mr-1"></div>
          Solana Devnet
        </div>
      </div>
      
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <p className="text-sm text-crypi-text-secondary truncate w-32">
            {walletAddress.substring(0, 6)}...{walletAddress.substring(walletAddress.length - 4)}
          </p>
          <Button variant="ghost" size="icon" className="h-6 w-6" onClick={copyAddress}>
            <Copy className="h-3 w-3" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default BalanceCard;
