
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import GradientBackground from '@/components/GradientBackground';
import Logo from '@/components/Logo';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const Username = () => {
  const [username, setUsername] = useState('');
  const [isAvailable, setIsAvailable] = useState<boolean | null>(null);
  const [isChecking, setIsChecking] = useState(false);
  const navigate = useNavigate();
  
  const handleUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.toLowerCase().replace(/[^a-z0-9_]/g, '');
    setUsername(value);
    setIsAvailable(null);
    
    if (value.length > 3) {
      setIsChecking(true);
      // Simulate API check with timeout
      setTimeout(() => {
        // For demo, we'll say usernames with odd length are taken
        setIsAvailable(value.length % 2 === 0);
        setIsChecking(false);
      }, 500);
    }
  };
  
  const handleSubmit = () => {
    if (username && isAvailable) {
      navigate('/onboarding-success');
    }
  };

  return (
    <GradientBackground>
      <div className="min-h-screen flex flex-col">
        <div className="p-6">
          <Logo size="sm" className="text-white" />
        </div>
        
        <div className="flex-1 flex flex-col items-center justify-center px-6 pb-20">
          <div className="glass-card p-8 rounded-xl w-full max-w-md">
            <h2 className="text-2xl font-semibold mb-6">Choose your @handle</h2>
            <p className="text-crypi-text-secondary mb-6">
              Your handle is how other users will find you and send you payments.
            </p>
            
            <div className="relative mb-6">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-crypi-text-secondary">
                @
              </div>
              <Input 
                type="text" 
                placeholder="username" 
                className="pl-8 h-12 text-lg bg-white border-2 focus:border-crypi-purple"
                value={username}
                onChange={handleUsernameChange}
              />
              {username.length > 0 && (
                <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                  {isChecking && (
                    <div className="w-5 h-5 border-2 border-crypi-purple border-t-transparent rounded-full animate-spin"></div>
                  )}
                  {isAvailable === true && !isChecking && (
                    <svg className="w-5 h-5 text-crypi-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  )}
                  {isAvailable === false && !isChecking && (
                    <svg className="w-5 h-5 text-crypi-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                    </svg>
                  )}
                </div>
              )}
            </div>
            
            {isAvailable === false && (
              <div className="mb-6 text-crypi-red text-sm">
                This handle is already taken. Try another one.
                
                <div className="mt-2 space-y-2">
                  <p className="text-crypi-text-secondary">Suggestions:</p>
                  <div className="flex flex-wrap gap-2">
                    {[
                      `${username}123`, 
                      `${username}_`, 
                      `${username}2023`
                    ].map((suggestion) => (
                      <button 
                        key={suggestion}
                        className="px-3 py-1 bg-gray-100 rounded-full text-sm hover:bg-gray-200"
                        onClick={() => setUsername(suggestion)}
                      >
                        @{suggestion}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            )}
            
            <p className="text-xs text-crypi-text-secondary mb-8">
              Note: Handles are permanent and cannot be changed later.
            </p>
            
            <Button 
              className="w-full h-12 rounded-xl bg-crypi-purple hover:bg-crypi-purple/90 disabled:opacity-50"
              onClick={handleSubmit}
              disabled={!username || username.length < 3 || !isAvailable}
            >
              Claim Your Handle
            </Button>
          </div>
        </div>
      </div>
    </GradientBackground>
  );
};

export default Username;
