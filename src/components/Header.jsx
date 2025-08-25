import React from 'react';
import { ChevronDown, User } from 'lucide-react';

const Header = () => {
  return (
    <header className="bg-slate-800 px-6 py-3">
      <div className="flex items-center justify-between">
        {/* Left side - Logo */}
        <div className="flex items-center space-x-2">
          <div className="flex items-center space-x-1">
            <div className="w-6 h-6 bg-white rounded flex items-center justify-center">
              <span className="text-slate-800 font-bold text-xs">//</span>
            </div>
            <span className="text-white font-semibold text-lg">xxxPay</span>
          </div>
        </div>

        {/* Center - Country flags */}
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 rounded-full overflow-hidden border-2 border-white/20">
            <div className="w-full h-full bg-gradient-to-r from-blue-500 to-white flex items-center justify-center">
              <span className="text-xs">🇳🇬</span>
            </div>
          </div>
          <div className="w-8 h-8 rounded-full overflow-hidden border-2 border-white/20">
            <div className="w-full h-full bg-gradient-to-r from-red-500 via-yellow-500 to-green-500 flex items-center justify-center">
              <span className="text-xs">🇬🇭</span>
            </div>
          </div>
          <div className="w-8 h-8 rounded-full overflow-hidden border-2 border-white/20">
            <div className="w-full h-full bg-gradient-to-r from-red-600 via-white to-red-600 flex items-center justify-center">
              <span className="text-xs">🇨🇦</span>
            </div>
          </div>
          <div className="w-8 h-8 rounded-full overflow-hidden border-2 border-white/20 bg-gray-600 flex items-center justify-center">
            <span className="text-white text-xs">+</span>
          </div>
        </div>

        {/* Right side - User profile */}
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 rounded-full overflow-hidden">
            <div className="w-full h-full bg-gradient-to-br from-pink-400 to-purple-500"></div>
          </div>
          <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
            <User className="w-4 h-4 text-white" />
          </div>
          <ChevronDown className="w-4 h-4 text-white/70" />
        </div>
      </div>
    </header>
  );
};

export default Header;