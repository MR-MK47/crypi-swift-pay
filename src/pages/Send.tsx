
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Search, Info } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const Send = () => {
  const navigate = useNavigate();
  const [recipient, setRecipient] = useState('');
  const [amount, setAmount] = useState('');
  const [memo, setMemo] = useState('');
  
  const recentContacts = [
    { handle: 'alexcrypto', name: 'Alex' },
    { handle: 'satoshi42', name: 'Satoshi' },
    { handle: 'cryptokitty', name: 'Catherine' },
    { handle: 'blocklover', name: 'Mike' },
  ];
  
  const handleGoBack = () => {
    navigate(-1);
  };
  
  const handleReview = () => {
    navigate('/confirm-send', { 
      state: { 
        recipient,
        amount,
        memo,
        fee: '0.000005'
      } 
    });
  };

  return (
    <div className="min-h-screen bg-crypi-bg">
      {/* Header */}
      <div className="bg-gradient-primary text-white p-4 flex items-center">
        <button onClick={handleGoBack}>
          <ArrowLeft className="mr-4" />
        </button>
        <h1 className="font-poppins text-lg font-medium">Send Payment</h1>
      </div>
      
      {/* Main content */}
      <div className="p-4">
        {/* Recipient Input */}
        <div className="bg-white rounded-xl p-4 mb-6 shadow-sm">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3">
              <Search size={18} className="text-crypi-text-secondary" />
            </div>
            <Input 
              type="text"
              placeholder="Search or enter @username"
              className="pl-10 h-12 bg-crypi-bg"
              value={recipient}
              onChange={(e) => setRecipient(e.target.value)}
            />
          </div>
          
          {/* Recent Contacts */}
          <div className="mt-4">
            <h3 className="text-sm font-medium text-crypi-text-secondary mb-2">Recent</h3>
            <div className="flex space-x-3 overflow-x-auto pb-2">
              {recentContacts.map((contact) => (
                <button 
                  key={contact.handle}
                  className="flex flex-col items-center min-w-[60px]"
                  onClick={() => setRecipient(contact.handle)}
                >
                  <div className="w-12 h-12 rounded-full bg-crypi-purple/10 flex items-center justify-center mb-1">
                    <span className="text-crypi-purple font-medium">{contact.name[0]}</span>
                  </div>
                  <span className="text-xs truncate">{contact.name}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
        
        {/* Amount Input */}
        <div className="bg-white rounded-xl p-4 mb-6 shadow-sm">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-sm font-medium text-crypi-text-secondary">Amount</h3>
            <div className="text-xs bg-crypi-purple/10 text-crypi-purple px-2 py-1 rounded-full">
              SOL
            </div>
          </div>
          
          <div className="relative">
            <Input 
              type="number"
              placeholder="0.00"
              className="text-2xl font-semibold h-16 text-center"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
            />
            <div className="text-center text-sm text-crypi-text-secondary mt-1">
              ≈ ${amount ? (parseFloat(amount) * 42.83).toFixed(2) : "0.00"} USD
            </div>
          </div>
          
          {/* Quick Amount Buttons */}
          <div className="flex justify-between mt-4">
            {["0.1", "0.5", "1", "5"].map((quickAmount) => (
              <button
                key={quickAmount}
                className="bg-crypi-bg rounded-lg py-2 px-4 hover:bg-gray-200 transition-colors"
                onClick={() => setAmount(quickAmount)}
              >
                {quickAmount}
              </button>
            ))}
          </div>
        </div>
        
        {/* Memo Input */}
        <div className="bg-white rounded-xl p-4 mb-6 shadow-sm">
          <h3 className="text-sm font-medium text-crypi-text-secondary mb-2">What's it for? (Optional)</h3>
          <Input 
            type="text"
            placeholder="Add a note"
            className="bg-crypi-bg"
            value={memo}
            onChange={(e) => setMemo(e.target.value)}
          />
        </div>
        
        {/* Transaction Fee */}
        <div className="bg-white rounded-xl p-4 mb-8 shadow-sm">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <h3 className="text-sm font-medium text-crypi-text-secondary">Network Fee</h3>
              <button className="ml-1">
                <Info size={14} className="text-crypi-text-secondary" />
              </button>
            </div>
            <p className="text-sm">0.000005 SOL</p>
          </div>
        </div>
      </div>
      
      {/* Bottom Action */}
      <div className="fixed bottom-0 left-0 right-0 p-4 bg-white border-t border-gray-200">
        <Button 
          className="w-full h-12 rounded-xl bg-crypi-purple hover:bg-crypi-purple/90 disabled:opacity-50"
          onClick={handleReview}
          disabled={!recipient || !amount || parseFloat(amount) <= 0}
        >
          Review
        </Button>
      </div>
    </div>
  );
};

export default Send;
