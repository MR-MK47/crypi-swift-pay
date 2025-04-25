
import React from 'react';
import { ArrowDownLeft, ArrowUpRight } from 'lucide-react';
import { cn } from '@/lib/utils';

export interface Transaction {
  id: string;
  type: 'send' | 'receive';
  amount: string;
  counterparty: string;
  timestamp: string;
  status: 'completed' | 'pending' | 'failed';
}

interface TransactionCardProps {
  transaction: Transaction;
  className?: string;
}

const TransactionCard = ({ transaction, className }: TransactionCardProps) => {
  const isReceive = transaction.type === 'receive';
  
  const statusColors = {
    completed: 'text-crypi-green',
    pending: 'text-crypi-amber',
    failed: 'text-crypi-red',
  };

  return (
    <div className={cn('bg-white rounded-xl p-4 shadow-sm flex justify-between items-center', className)}>
      <div className="flex items-center gap-3">
        <div className={cn(
          'w-10 h-10 rounded-full flex items-center justify-center',
          isReceive ? 'bg-crypi-green/10' : 'bg-crypi-purple/10'
        )}>
          {isReceive 
            ? <ArrowDownLeft className="text-crypi-green" /> 
            : <ArrowUpRight className="text-crypi-purple" />}
        </div>
        
        <div>
          <p className="font-medium">{isReceive ? 'Received from' : 'Sent to'}</p>
          <p className="text-crypi-text-secondary text-sm">@{transaction.counterparty}</p>
        </div>
      </div>
      
      <div className="text-right">
        <p className={cn('font-medium', isReceive ? 'text-crypi-green' : 'text-crypi-text-primary')}>
          {isReceive ? '+' : '-'}{transaction.amount} SOL
        </p>
        <p className={cn('text-sm', statusColors[transaction.status])}>
          {transaction.status.charAt(0).toUpperCase() + transaction.status.slice(1)}
        </p>
      </div>
    </div>
  );
};

export default TransactionCard;
