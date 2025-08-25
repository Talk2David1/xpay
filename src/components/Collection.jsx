import React from 'react';

const Collection = ({ amount = '$20,000.32' }) => {
  return (
    <div className="bg-gray-800 rounded-2xl p-6 text-white">
      <div className="flex items-center space-x-3 mb-4">
        <div className="w-10 h-10 rounded-full bg-gray-600 flex items-center justify-center">
          <svg 
            className="w-5 h-5 text-white" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M19 14l-7 7m0 0l-7-7m7 7V3" 
            />
          </svg>
        </div>
      </div>
      
      <div className="mb-2">
        <h3 className="text-lg font-medium text-gray-300">Collection</h3>
      </div>
      
      <div className="text-3xl font-bold">
        {amount}
      </div>
    </div>
  );
};

export default Collection;