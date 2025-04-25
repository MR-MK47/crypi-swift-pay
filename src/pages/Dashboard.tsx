
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowUpRight, ArrowDownLeft, QrCode, History, Home, User } from 'lucide-react';

import BalanceCard from '@/components/BalanceCard';
import ActionButton from '@/components/ActionButton';
import TransactionCard, { Transaction } from '@/components/TransactionCard';

const Dashboard = () => {
  const navigate = useNavigate();
  
  // Mock data
  const walletAddress = "8xhMUb4sR3Qt5vJ7TxpHhHe2Z6iNLJzH4TZrE6z1X3G9";
  const solBalance = "2.458";
  const usdBalance = "105.26";
  
  const recentTransactions: Transaction[] = [
    {
      id: "1",
      type: "receive",
      amount: "0.5",
      counterparty: "alexcrypto",
      timestamp: "2023-04-25T14:30:00Z",
      status: "completed"
    },
    {
      id: "2",
      type: "send",
      amount: "0.2",
      counterparty: "satoshi42",
      timestamp: "2023-04-24T09:15:00Z",
      status: "completed"
    },
    {
      id: "3",
      type: "receive",
      amount: "0.75",
      counterparty: "cryptokitty",
      timestamp: "2023-04-22T18:45:00Z",
      status: "completed"
    },
  ];
  
  const handleSend = () => {
    navigate('/send');
  };
  
  const handleReceive = () => {
    navigate('/receive');
  };
  
  const handleScan = () => {
    navigate('/scan');
  };
  
  const handleViewAllTransactions = () => {
    navigate('/history');
  };
  
  const handleBottomNavigation = (path: string) => {
    navigate(path);
  };

  return (
    <div className="min-h-screen bg-crypi-bg pb-20">
      {/* Top status bar */}
      <div className="bg-gradient-primary text-white p-4 flex justify-between items-center">
        <h1 className="font-poppins text-lg font-medium">@cryptolover</h1>
        <div className="flex items-center text-xs">
          <div className="w-2 h-2 rounded-full bg-crypi-green mr-1 animate-pulse"></div>
          Solana Devnet
        </div>
      </div>
      
      {/* Main content */}
      <div className="px-4 py-6">
        {/* Balance Card */}
        <BalanceCard 
          solBalance={solBalance}
          usdBalance={usdBalance}
          walletAddress={walletAddress}
          className="mb-8"
        />
        
        {/* Quick Actions */}
        <div className="flex justify-around mb-8">
          <ActionButton 
            icon={<ArrowUpRight className="text-crypi-purple" />} 
            label="Send" 
            onClick={handleSend} 
          />
          <ActionButton 
            icon={<ArrowDownLeft className="text-crypi-green" />} 
            label="Receive" 
            onClick={handleReceive} 
          />
          <ActionButton 
            icon={<QrCode className="text-crypi-purple" />} 
            label="Scan" 
            onClick={handleScan} 
          />
        </div>
        
        {/* Recent Activity */}
        <div className="mb-6">
          <div className="flex justify-between items-center mb-3">
            <h2 className="text-lg font-medium">Recent Activity</h2>
            <button 
              className="text-sm text-crypi-purple"
              onClick={handleViewAllTransactions}
            >
              See All
            </button>
          </div>
          
          <div className="space-y-3">
            {recentTransactions.map(transaction => (
              <TransactionCard key={transaction.id} transaction={transaction} />
            ))}
          </div>
        </div>
      </div>
      
      {/* Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 flex justify-around py-3 px-6">
        <button 
          className="flex flex-col items-center text-crypi-purple"
          onClick={() => handleBottomNavigation('/dashboard')}
        >
          <Home size={20} />
          <span className="text-xs mt-1">Home</span>
        </button>
        <button 
          className="flex flex-col items-center text-crypi-text-secondary"
          onClick={() => handleBottomNavigation('/history')}
        >
          <History size={20} />
          <span className="text-xs mt-1">History</span>
        </button>
        <button 
          className="flex flex-col items-center text-crypi-text-secondary"
          onClick={() => handleBottomNavigation('/scan')}
        >
          <QrCode size={20} />
          <span className="text-xs mt-1">Scan</span>
        </button>
        <button 
          className="flex flex-col items-center text-crypi-text-secondary"
          onClick={() => handleBottomNavigation('/profile')}
        >
          <User size={20} />
          <span className="text-xs mt-1">Profile</span>
        </button>
      </div>
    </div>
  );
};

export default Dashboard;
