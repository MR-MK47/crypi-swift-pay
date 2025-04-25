
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Copy, Share2, PlusCircle } from 'lucide-react';
import { toast } from 'sonner';

import QRCode from '@/components/QRCode';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const Receive = () => {
  const navigate = useNavigate();
  const [amount, setAmount] = useState('');
  const [showAmountInput, setShowAmountInput] = useState(false);
  
  const handle = "cryptolover";
  
  const handleGoBack = () => {
    navigate(-1);
  };
  
  const handleCopy = () => {
    navigator.clipboard.writeText(`@${handle}`);
    toast.success("Username copied to clipboard!");
  };
  
  const handleShare = () => {
    // This would use the Web Share API in a real implementation
    toast.success("QR code shared!");
  };
  
  const toggleAmountInput = () => {
    setShowAmountInput(!showAmountInput);
  };
  
  const handleQuickAmount = (value: string) => {
    setAmount(value);
  };

  return (
    <div className="min-h-screen bg-crypi-bg">
      {/* Header */}
      <div className="bg-gradient-primary text-white p-4 flex items-center">
        <button onClick={handleGoBack}>
          <ArrowLeft className="mr-4" />
        </button>
        <h1 className="font-poppins text-lg font-medium">Receive Payment</h1>
      </div>
      
      {/* Main content */}
      <div className="flex flex-col items-center px-4 py-8">
        {/* QR Code */}
        <QRCode 
          value={amount ? `${handle}:${amount}` : handle} 
          size="lg"
          className="mb-6 hover:scale-105 transition-transform cursor-pointer"
        />
        
        {/* Handle */}
        <div className="flex items-center justify-center mb-8">
          <h2 className="text-2xl font-semibold mr-2">@{handle}</h2>
          <button onClick={handleCopy} className="text-crypi-purple">
            <Copy size={18} />
          </button>
        </div>
        
        {/* Actions */}
        <div className="flex space-x-4 mb-8">
          <Button 
            variant="outline" 
            className="border-crypi-purple text-crypi-purple"
            onClick={handleCopy}
          >
            <Copy size={18} className="mr-2" />
            Copy
          </Button>
          
          <Button 
            variant="outline"
            className="border-crypi-purple text-crypi-purple"
            onClick={handleShare}
          >
            <Share2 size={18} className="mr-2" />
            Share
          </Button>
        </div>
        
        {/* Request Specific Amount */}
        <div className="w-full max-w-md">
          <button 
            className="flex items-center text-crypi-purple mb-4"
            onClick={toggleAmountInput}
          >
            <PlusCircle size={18} className="mr-2" />
            {showAmountInput ? 'Hide Amount Options' : 'Request Specific Amount'}
          </button>
          
          {showAmountInput && (
            <div className="bg-white rounded-xl p-4 shadow-sm">
              <div className="mb-4">
                <Input 
                  type="number"
                  placeholder="0.00"
                  className="text-xl text-center h-14"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                />
                <div className="text-center text-sm text-crypi-text-secondary mt-1">
                  SOL
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-3">
                {["0.1", "0.5", "1", "2", "5", "10"].map((quickAmount) => (
                  <button
                    key={quickAmount}
                    className="bg-crypi-bg rounded-lg py-3 hover:bg-gray-200 transition-colors"
                    onClick={() => handleQuickAmount(quickAmount)}
                  >
                    {quickAmount} SOL
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Receive;
