import React from 'react';

const AccountSupport = () => {
  return (
    <div className="bg-gray-800 rounded-lg p-6 text-white">
      <h3 className="text-lg font-semibold mb-6">Account Support</h3>
      
      <div className="flex items-center space-x-3">
        {/* Support Agent Avatars */}
        <div className="flex -space-x-2">
          <div className="w-10 h-10 rounded-full bg-gradient-to-r from-orange-400 to-pink-400 border-2 border-white flex items-center justify-center">
            <span className="text-sm font-medium">A</span>
          </div>
          <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-400 to-purple-400 border-2 border-white flex items-center justify-center">
            <span className="text-sm font-medium">B</span>
          </div>
        </div>
        
        <span className="text-white font-medium">Chat Support</span>
      </div>
    </div>
  );
};

export default AccountSupport;