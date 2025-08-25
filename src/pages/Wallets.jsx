import React from 'react';

const Wallets = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-900">Wallets</h1>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
          Add Wallet
        </button>
      </div>
      
      <div className="bg-white rounded-lg p-6 border border-gray-200">
        <p className="text-gray-500">Wallet management interface coming soon...</p>
      </div>
    </div>
  );
};

export default Wallets;