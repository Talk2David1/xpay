import React from "react";
import { ChevronDown } from "lucide-react";
import Nigeria from "../assets/images/Nigeria.png";
import tron from "../assets/images/tron.jpg";
import swap from "../assets/images/swap.png";

const SwapRates = () => {
  return (
    <div className="bg-gray-900 rounded-lg p-3 text-white">
      <div className="flex items-center space-x-6">
        {/* Title Section */}
        <div className="flex items-center space-x-2">
          <img src={swap} alt="Swap" className="w-5 h-5" />
          <span className="text-sm font-medium">Swap Rates</span>
        </div>

        {/* First Currency Pair */}
        <div className="flex items-center space-x-3">
          <div className="flex items-center space-x-1">
            <img src={Nigeria} alt="Nigeria" className="w-5 h-5 rounded-full" />
            <img src={tron} alt="Tron" className="w-5 h-5 rounded-full" />
            <ChevronDown className="w-4 h-4 text-gray-300" />
          </div>
          <span className="text-sm font-medium">$1 = NGN 1500.00</span>
        </div>

        {/* Second Currency Pair */}
        <div className="flex items-center space-x-3">
          <div className="flex items-center space-x-1">
            <img src={tron} alt="Tron" className="w-5 h-5 rounded-full" />
            <img src={Nigeria} alt="Nigeria" className="w-5 h-5 rounded-full" />
            <ChevronDown className="w-4 h-4 text-gray-300" />
          </div>
          <span className="text-sm font-medium">$1 = NGN 1450.00</span>
        </div>
      </div>
    </div>
  );
};

export default SwapRates;
