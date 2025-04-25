
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Search, Home, History as HistoryIcon, QrCode, User } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import TransactionCard, { Transaction } from '@/components/TransactionCard';

const History = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  
  // Mock data
  const transactions: Transaction[] = [
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
    {
      id: "4",
      type: "send",
      amount: "1.5",
      counterparty: "blocklover",
      timestamp: "2023-04-20T12:10:00Z",
      status: "completed"
    },
    {
      id: "5",
      type: "receive",
      amount: "0.3",
      counterparty: "web3wizard",
      timestamp: "2023-04-18T16:25:00Z",
      status: "completed"
    },
    {
      id: "6",
      type: "send",
      amount: "0.05",
      counterparty: "ethmaxi",
      timestamp: "2023-04-15T08:30:00Z",
      status: "failed"
    },
    {
      id: "7",
      type: "send",
      amount: "0.1",
      counterparty: "defiking",
      timestamp: "2023-04-10T19:45:00Z",
      status: "pending"
    },
  ];
  
  const handleGoBack = () => {
    navigate(-1);
  };
  
  const handleBottomNavigation = (path: string) => {
    navigate(path);
  };
  
  const filterTransactions = (type: string) => {
    let filtered = transactions;
    
    if (type !== 'all') {
      filtered = transactions.filter(t => t.type === type);
    }
    
    if (searchQuery) {
      filtered = filtered.filter(t => 
        t.counterparty.toLowerCase().includes(searchQuery.toLowerCase()) || 
        t.amount.includes(searchQuery)
      );
    }
    
    return filtered;
  };

  return (
    <div className="min-h-screen bg-crypi-bg">
      {/* Header */}
      <div className="bg-gradient-primary text-white p-4 flex items-center">
        <button onClick={handleGoBack}>
          <ArrowLeft className="mr-4" />
        </button>
        <h1 className="font-poppins text-lg font-medium">Transaction History</h1>
      </div>
      
      {/* Main content */}
      <div className="p-4 pb-24">
        {/* Search */}
        <div className="relative mb-4">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3">
            <Search size={18} className="text-crypi-text-secondary" />
          </div>
          <Input 
            type="text"
            placeholder="Search transactions"
            className="pl-10 h-12 bg-white"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        
        {/* Tabs */}
        <Tabs defaultValue="all" className="mb-6">
          <TabsList className="grid grid-cols-3 bg-white h-12">
            <TabsTrigger value="all" className="data-[state=active]:bg-crypi-purple/10 data-[state=active]:text-crypi-purple">
              All
            </TabsTrigger>
            <TabsTrigger value="receive" className="data-[state=active]:bg-crypi-purple/10 data-[state=active]:text-crypi-purple">
              Received
            </TabsTrigger>
            <TabsTrigger value="send" className="data-[state=active]:bg-crypi-purple/10 data-[state=active]:text-crypi-purple">
              Sent
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="all" className="mt-4 space-y-3">
            {filterTransactions('all').length > 0 ? 
              filterTransactions('all').map(transaction => (
                <TransactionCard key={transaction.id} transaction={transaction} />
              )) :
              <div className="text-center py-8 text-crypi-text-secondary">
                No transactions found
              </div>
            }
          </TabsContent>
          
          <TabsContent value="receive" className="mt-4 space-y-3">
            {filterTransactions('receive').length > 0 ? 
              filterTransactions('receive').map(transaction => (
                <TransactionCard key={transaction.id} transaction={transaction} />
              )) :
              <div className="text-center py-8 text-crypi-text-secondary">
                No received transactions found
              </div>
            }
          </TabsContent>
          
          <TabsContent value="send" className="mt-4 space-y-3">
            {filterTransactions('send').length > 0 ? 
              filterTransactions('send').map(transaction => (
                <TransactionCard key={transaction.id} transaction={transaction} />
              )) :
              <div className="text-center py-8 text-crypi-text-secondary">
                No sent transactions found
              </div>
            }
          </TabsContent>
        </Tabs>
      </div>
      
      {/* Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 flex justify-around py-3 px-6">
        <button 
          className="flex flex-col items-center text-crypi-text-secondary"
          onClick={() => handleBottomNavigation('/dashboard')}
        >
          <Home size={20} />
          <span className="text-xs mt-1">Home</span>
        </button>
        <button 
          className="flex flex-col items-center text-crypi-purple"
          onClick={() => handleBottomNavigation('/history')}
        >
          <HistoryIcon size={20} />
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

export default History;
