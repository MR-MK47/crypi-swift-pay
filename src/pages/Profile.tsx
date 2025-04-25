
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Home, 
  History, 
  QrCode, 
  User, 
  Settings, 
  Shield, 
  Bell, 
  HelpCircle,
  Info,
  LogOut,
  ChevronRight,
  Copy 
} from 'lucide-react';
import { toast } from 'sonner';

const Profile = () => {
  const navigate = useNavigate();
  
  // Mock data
  const userInfo = {
    handle: "cryptolover",
    walletAddress: "8xhMUb4sR3Qt5vJ7TxpHhHe2Z6iNLJzH4TZrE6z1X3G9",
    solBalance: "2.458",
    usdcBalance: "10.00"
  };
  
  const handleBottomNavigation = (path: string) => {
    navigate(path);
  };
  
  const handleNavigateTo = (path: string) => {
    toast.info(`Navigating to ${path} (not implemented)`);
  };
  
  const handleCopyAddress = () => {
    navigator.clipboard.writeText(userInfo.walletAddress);
    toast.success("Wallet address copied to clipboard!");
  };
  
  const handleLogout = () => {
    navigate('/welcome');
  };

  return (
    <div className="min-h-screen bg-crypi-bg">
      {/* Profile Header */}
      <div className="bg-gradient-primary p-6 pb-16">
        <div className="flex items-center">
          <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center text-2xl font-bold text-crypi-purple mr-4">
            C
          </div>
          <div className="flex-1 text-white">
            <h1 className="text-2xl font-bold">@{userInfo.handle}</h1>
            <div className="flex items-center mt-1">
              <p className="text-sm text-white/80 truncate w-40">
                {userInfo.walletAddress.substring(0, 6)}...{userInfo.walletAddress.substring(userInfo.walletAddress.length - 4)}
              </p>
              <button onClick={handleCopyAddress}>
                <Copy size={14} className="ml-1" />
              </button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Balance Cards */}
      <div className="px-4 -mt-10">
        <div className="bg-white rounded-xl p-4 shadow-sm flex justify-between mb-6">
          <div>
            <p className="text-sm text-crypi-text-secondary">SOL Balance</p>
            <p className="text-xl font-semibold">{userInfo.solBalance} SOL</p>
          </div>
          <div>
            <p className="text-sm text-crypi-text-secondary">USDC Balance</p>
            <p className="text-xl font-semibold">${userInfo.usdcBalance}</p>
          </div>
        </div>
      </div>
      
      {/* Settings Sections */}
      <div className="px-4 pb-24">
        {/* Account Settings */}
        <div className="bg-white rounded-xl shadow-sm overflow-hidden mb-4">
          <h2 className="px-4 py-3 font-medium border-b border-gray-100">Account Settings</h2>
          <MenuItem 
            icon={<Settings size={18} />} 
            label="Account Settings" 
            onClick={() => handleNavigateTo('account-settings')} 
          />
          <MenuItem 
            icon={<Shield size={18} />} 
            label="Security" 
            onClick={() => handleNavigateTo('security')} 
          />
          <MenuItem 
            icon={<Bell size={18} />} 
            label="Notifications" 
            onClick={() => handleNavigateTo('notifications')} 
          />
        </div>
        
        {/* Support */}
        <div className="bg-white rounded-xl shadow-sm overflow-hidden mb-4">
          <h2 className="px-4 py-3 font-medium border-b border-gray-100">Support</h2>
          <MenuItem 
            icon={<HelpCircle size={18} />} 
            label="Help & Support" 
            onClick={() => handleNavigateTo('support')} 
          />
          <MenuItem 
            icon={<Info size={18} />} 
            label="About" 
            onClick={() => handleNavigateTo('about')} 
          />
        </div>
        
        {/* Logout */}
        <div className="bg-white rounded-xl shadow-sm overflow-hidden">
          <MenuItem 
            icon={<LogOut size={18} className="text-crypi-red" />} 
            label="Logout" 
            onClick={handleLogout} 
            textColor="text-crypi-red" 
          />
        </div>
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
          className="flex flex-col items-center text-crypi-text-secondary"
          onClick={() => handleBottomNavigation('/history')}
        >
          <History size={20} />
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
          className="flex flex-col items-center text-crypi-purple"
          onClick={() => handleBottomNavigation('/profile')}
        >
          <User size={20} />
          <span className="text-xs mt-1">Profile</span>
        </button>
      </div>
    </div>
  );
};

// Helper component for menu items
const MenuItem = ({ 
  icon, 
  label, 
  onClick, 
  textColor = "text-crypi-text-primary" 
}: { 
  icon: React.ReactNode; 
  label: string; 
  onClick: () => void;
  textColor?: string;
}) => {
  return (
    <button 
      className="w-full px-4 py-3 flex items-center justify-between hover:bg-gray-50 transition-colors"
      onClick={onClick}
    >
      <div className="flex items-center">
        <div className="text-crypi-text-secondary mr-3">
          {icon}
        </div>
        <span className={textColor}>{label}</span>
      </div>
      <ChevronRight size={18} className="text-crypi-text-secondary" />
    </button>
  );
};

export default Profile;
