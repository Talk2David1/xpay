import React from 'react';

const WalletCard = ({ title, amount, flagColor, iconText }) => {
  return (
    <div className="bg-white p-6">
      <div className="flex items-center space-x-3 mb-8">
        <div className={`w-12 h-12 rounded-full ${flagColor} flex items-center justify-center`}>
          <span className="text-white font-bold text-lg">{iconText}</span>
        </div>
        <span className="text-xl font-medium text-gray-700">{title}</span>
      </div>
      
      <div className="mb-6">
        <p className="text-5xl font-bold text-gray-900">{amount}</p>
      </div>
    </div>
  );
};

export default WalletCard;