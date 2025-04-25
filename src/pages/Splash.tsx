
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import GradientBackground from '@/components/GradientBackground';
import Logo from '@/components/Logo';

const Splash = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Auto navigate to welcome page after 2.5 seconds
    const timer = setTimeout(() => {
      navigate('/welcome');
    }, 2500);
    
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <GradientBackground>
      <div className="h-screen flex flex-col items-center justify-center">
        <div className="animate-float">
          <Logo size="lg" className="text-white mb-4" />
        </div>
        
        <div className="animate-pulse-opacity mt-4">
          <div className="w-8 h-8 border-4 border-white border-t-transparent rounded-full animate-spin"></div>
        </div>
        
        <p className="text-white/80 mt-16 font-light">Crypto Payments, Simplified</p>
      </div>
    </GradientBackground>
  );
};

export default Splash;
