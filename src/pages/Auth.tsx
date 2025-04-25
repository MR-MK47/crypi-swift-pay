
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import GradientBackground from '@/components/GradientBackground';
import Logo from '@/components/Logo';

const Auth = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Simulate auth process
    const timer = setTimeout(() => {
      // Navigate to username selection after "auth"
      navigate('/username');
    }, 2000);
    
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <GradientBackground>
      <div className="min-h-screen flex flex-col items-center justify-center">
        <Logo size="md" className="text-white mb-10" />
        
        <div className="glass-card p-8 rounded-xl w-11/12 max-w-md">
          <h2 className="text-xl font-medium text-center mb-6">Creating your secure wallet...</h2>
          
          <div className="flex justify-center">
            <div className="w-10 h-10 border-4 border-crypi-purple border-t-transparent rounded-full animate-spin"></div>
          </div>
          
          <ul className="mt-8 space-y-4">
            <li className="flex items-center">
              <div className="w-5 h-5 rounded-full bg-crypi-green flex items-center justify-center mr-3">
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10 3L4.5 8.5L2 6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <span>Connecting to Web3Auth</span>
            </li>
            <li className="flex items-center">
              <div className="w-5 h-5 rounded-full bg-crypi-green flex items-center justify-center mr-3">
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10 3L4.5 8.5L2 6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <span>Establishing secure connection</span>
            </li>
            <li className="flex items-center text-crypi-purple">
              <div className="w-5 h-5 rounded-full border-2 border-crypi-purple border-t-transparent animate-spin mr-3"></div>
              <span>Creating your wallet</span>
            </li>
            <li className="flex items-center text-crypi-text-secondary">
              <div className="w-5 h-5 rounded-full bg-gray-200 mr-3"></div>
              <span>Setting up encryption</span>
            </li>
          </ul>
        </div>
      </div>
    </GradientBackground>
  );
};

export default Auth;
