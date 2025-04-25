
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import GradientBackground from "@/components/GradientBackground";
import Logo from "@/components/Logo";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <GradientBackground>
      <div className="min-h-screen flex flex-col items-center justify-center p-6">
        <Logo size="lg" className="text-white mb-10" />
        <div className="glass-card p-8 rounded-xl w-full max-w-md text-center">
          <h1 className="text-4xl font-bold mb-4">404</h1>
          <p className="text-xl text-crypi-text-secondary mb-6">Oops! Page not found</p>
          <Button
            className="bg-crypi-purple hover:bg-crypi-purple/90"
            onClick={() => navigate("/")}
          >
            Return to Home
          </Button>
        </div>
      </div>
    </GradientBackground>
  );
};

export default NotFound;
