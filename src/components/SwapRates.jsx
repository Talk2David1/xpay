import React from "react";
import Nigeria from "../assets/images/Nigeria.png";
import tron from "../assets/images/tron.jpg";
import swap from "../assets/images/swap.png";

const SwapRates = () => {
  return (
    <div className="bg-gray-900 rounded-lg p-4 text-white">
      <div className="flex items-center space-x-4">
        {/* Title Section */}
        <div className="flex items-center space-x-1">
          <img src={swap} alt="Swap" className="w-4 h-4" />
          <span className="text-sm font-medium">Swap Rates</span>
          <img src={Nigeria} alt="Nigeria" className="w-4 h-4 rounded-full" />
          <img src={tron} alt="Tron" className="w-4 h-4 rounded-full" />
        </div>

        {/* Rate Sections */}
        <div className="flex items-center space-x-1">
          <select className="bg-gray-800 border border-gray-700 rounded px-1 py-0.5 text-xs">
            <option>1 NGN</option>
          </select>
          <span className="text-sm">$1</span>
          <span className="text-xs text-gray-300">=</span>
          <span className="text-sm">NGN 1500.00</span>
        </div>

        <div className="flex items-center space-x-1">
          <select className="bg-gray-800 border border-gray-700 rounded px-1 py-0.5 text-xs">
            <option>To NGN</option>
          </select>
          <span className="text-sm">$1</span>
          <span className="text-xs text-gray-300">=</span>
          <span className="text-sm">NGN 1450.00</span>
        </div>
      </div>
    </div>
  );
};

export default SwapRates;
