import React from 'react';
import { RefreshCw } from 'lucide-react';

const SwapRates = () => {
  return (
    <div className="bg-gray-900 rounded-lg p-6 text-white">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-2">
          <RefreshCw className="w-5 h-5" />
          <span className="font-medium">Swap Rates</span>
        </div>
        <div className="flex items-center space-x-2">
          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
          <span className="text-sm text-gray-300">Live</span>
        </div>
      </div>
      
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <span className="text-lg">$1</span>
            <span className="text-sm text-gray-300">=</span>
            <span className="text-lg">NGN 1500.00</span>
          </div>
          <select className="bg-gray-800 border border-gray-700 rounded px-2 py-1 text-sm">
            <option>1 NGN</option>
          </select>
        </div>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <span className="text-lg">$1</span>
            <span className="text-sm text-gray-300">=</span>
            <span className="text-lg">NGN 1450.00</span>
          </div>
          <select className="bg-gray-800 border border-gray-700 rounded px-2 py-1 text-sm">
            <option>To NGN</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default SwapRates;