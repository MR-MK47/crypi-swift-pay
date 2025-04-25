
import React from 'react';
import { useNavigate } from 'react-router-dom';
import GradientBackground from '@/components/GradientBackground';
import Logo from '@/components/Logo';
import { Button } from '@/components/ui/button';

const Welcome = () => {
  const navigate = useNavigate();
  
  const handleContinue = () => {
    // Navigate to auth screen (placeholder)
    navigate('/auth');
  };
  
  const handleSkip = () => {
    // Skip to username selection or directly to dashboard
    navigate('/username');
  };

  return (
    <GradientBackground>
      <div className="min-h-screen flex flex-col">
        {/* Top section with illustration */}
        <div className="flex-1 flex flex-col items-center justify-center pt-20">
          <Logo size="lg" className="text-white mb-10" />
          
          <div className="w-72 h-72 mx-auto mb-6 relative">
            <div className="w-20 h-20 bg-crypi-amber rounded-full absolute top-0 right-12 animate-float" style={{ animationDelay: '0.5s' }}></div>
            <div className="w-24 h-24 bg-crypi-purple rounded-full absolute top-20 left-6 animate-float" style={{ animationDelay: '0s' }}></div>
            <div className="w-16 h-16 bg-crypi-teal rounded-full absolute bottom-10 right-10 animate-float" style={{ animationDelay: '0.3s' }}></div>
            
            <div className="absolute w-full text-center top-24 text-white font-light">
              <p className="text-2xl">Simple</p>
              <p className="text-2xl">Fast</p>
              <p className="text-2xl">Secure</p>
            </div>
          </div>
        </div>
        
        {/* Bottom card with actions */}
        <div className="animate-slide-up w-full">
          <div className="bg-white rounded-t-3xl px-6 py-8 shadow-md">
            <h2 className="text-2xl font-semibold text-center mb-6">Get Started</h2>
            
            <Button 
              className="w-full h-12 mb-4 rounded-xl bg-crypi-purple hover:bg-crypi-purple/90"
              onClick={handleContinue}
            >
              Continue with Google
            </Button>
            
            <div className="text-center mt-6">
              <button 
                className="text-crypi-text-secondary text-sm hover:text-crypi-purple"
                onClick={handleSkip}
              >
                Skip for now / About CryPI
              </button>
            </div>
          </div>
        </div>
      </div>
    </GradientBackground>
  );
};

export default Welcome;
