import React from 'react';
import Group from '../assets/images/Group.png';

const AccountSupport = () => {
  return (
    <div className="bg-gray-800 rounded-lg p-6 text-white">
      <h3 className="text-lg font-semibold mb-6">Account Support</h3>
      
      <div className="flex items-center space-x-3">
        {/* Support Agent Avatars */}
        <div className="flex">
          <img 
            src={Group} 
            alt="Support Group" 
            className="w-16 h-10 object-contain"
          />
        </div>
        
        <span className="text-white font-medium">Chat Support</span>
      </div>
    </div>
  );
};

export default AccountSupport;