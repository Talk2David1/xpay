import React from 'react';

const Transactions = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-900">Transactions</h1>
        <div className="flex space-x-2">
          <button className="border border-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-50">
            Filter
          </button>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
            Export
          </button>
        </div>
      </div>
      
      <div className="bg-white rounded-lg p-6 border border-gray-200">
        <p className="text-gray-500">Transaction history interface coming soon...</p>
      </div>
    </div>
  );
};

export default Transactions;