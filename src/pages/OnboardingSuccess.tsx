
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import confetti from 'canvas-confetti';
import GradientBackground from '@/components/GradientBackground';
import Logo from '@/components/Logo';
import { Button } from '@/components/ui/button';
import QRCode from '@/components/QRCode';

const OnboardingSuccess = () => {
  const navigate = useNavigate();
  
  useEffect(() => {
    // Launch confetti animation on component mount
    const duration = 3000;
    const animationEnd = Date.now() + duration;
    
    const randomInRange = (min: number, max: number) => {
      return Math.random() * (max - min) + min;
    };
    
    const runConfetti = () => {
      const timeLeft = animationEnd - Date.now();
      
      if (timeLeft <= 0) {
        return;
      }
      
      const particleCount = 50 * (timeLeft / duration);
      
      confetti({
        particleCount,
        spread: randomInRange(50, 70),
        origin: { y: 0.6 }
      });
      
      requestAnimationFrame(runConfetti);
    };
    
    runConfetti();
  }, []);
  
  const handleExplore = () => {
    navigate('/dashboard');
  };

  return (
    <GradientBackground>
      <div className="min-h-screen flex flex-col items-center justify-center p-6">
        <div className="glass-card p-8 rounded-xl w-full max-w-md text-center">
          <Logo size="md" className="mx-auto mb-6" />
          
          <h1 className="text-3xl font-bold mb-2">Welcome @cryptolover</h1>
          <p className="text-crypi-text-secondary mb-8">Your crypto wallet is ready</p>
          
          <div className="mb-8">
            <QRCode value="cryptolover" size="sm" />
            <p className="text-sm text-crypi-text-secondary mt-2">Your personal payment code</p>
          </div>
          
          <Button 
            className="w-full h-12 rounded-xl bg-crypi-purple hover:bg-crypi-purple/90"
            onClick={handleExplore}
          >
            Start Exploring
          </Button>
        </div>
      </div>
    </GradientBackground>
  );
};

export default OnboardingSuccess;
