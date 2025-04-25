
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Scan = () => {
  const navigate = useNavigate();
  const [scanning, setScanning] = useState(true);
  const [scannedHandle, setScannedHandle] = useState<string | null>(null);
  
  const handleGoBack = () => {
    navigate(-1);
  };
  
  const handleManualEntry = () => {
    navigate('/send');
  };
  
  const handleScanResult = () => {
    // Simulate successful scan after 3 seconds
    setTimeout(() => {
      setScanning(false);
      setScannedHandle('satoshi42');
    }, 3000);
  };
  
  useEffect(() => {
    handleScanResult();
  }, []);
  
  const handleProceed = () => {
    navigate('/send', { state: { recipient: scannedHandle } });
  };

  return (
    <div className="min-h-screen bg-black flex flex-col">
      {/* Header */}
      <div className="bg-black bg-opacity-50 text-white p-4 flex items-center z-10">
        <button onClick={handleGoBack}>
          <ArrowLeft className="mr-4" />
        </button>
        <h1 className="font-poppins text-lg font-medium">Scan QR Code</h1>
      </div>
      
      {/* Scanner View */}
      <div className="relative flex-1 flex flex-col">
        {scanning ? (
          <>
            <div className="flex-1 relative">
              {/* Simulated camera view */}
              <div className="absolute inset-0 bg-gray-900">
                {/* Scan frame */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 border-2 border-white">
                  <div className="absolute top-0 left-0 w-10 h-10 border-t-2 border-l-2 border-crypi-purple"></div>
                  <div className="absolute top-0 right-0 w-10 h-10 border-t-2 border-r-2 border-crypi-purple"></div>
                  <div className="absolute bottom-0 left-0 w-10 h-10 border-b-2 border-l-2 border-crypi-purple"></div>
                  <div className="absolute bottom-0 right-0 w-10 h-10 border-b-2 border-r-2 border-crypi-purple"></div>
                </div>
                
                {/* Scanning animation */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64">
                  <div className="h-px bg-crypi-purple animate-[scan_2s_ease-in-out_infinite]"></div>
                </div>
              </div>
            </div>
            
            {/* Bottom action */}
            <div className="p-6">
              <button 
                className="text-white text-center w-full"
                onClick={handleManualEntry}
              >
                Enter @handle instead
              </button>
            </div>
          </>
        ) : (
          <div className="flex-1 flex flex-col items-center justify-center p-6 bg-crypi-bg">
            <div className="bg-white rounded-xl p-6 w-full max-w-md shadow-md">
              <h2 className="text-xl font-medium mb-4">QR Code Scanned</h2>
              
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 rounded-full bg-crypi-purple/10 flex items-center justify-center mr-4">
                  <span className="text-crypi-purple font-medium">S</span>
                </div>
                <div>
                  <p className="font-medium">@{scannedHandle}</p>
                  <p className="text-sm text-crypi-text-secondary">Ready to send payment</p>
                </div>
              </div>
              
              <div className="flex space-x-4">
                <Button 
                  variant="outline" 
                  className="flex-1"
                  onClick={handleGoBack}
                >
                  Cancel
                </Button>
                <Button 
                  className="flex-1 bg-crypi-purple hover:bg-crypi-purple/90"
                  onClick={handleProceed}
                >
                  Continue
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Scan;
