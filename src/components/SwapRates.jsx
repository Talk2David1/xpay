import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import Nigeria from "../assets/images/Nigeria.png";
import tron from "../assets/images/tron.jpg";
import swap from "../assets/images/swap.png";

const SwapRates = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const handleDropdownClick = (dropdownId) => {
    setActiveDropdown(dropdownId);
    setShowDropdown(true);
  };

  const closeDropdown = () => {
    setShowDropdown(false);
    setActiveDropdown(null);
  };

  return (
    <>
      <div className="bg-gray-900 rounded-lg p-3 text-white relative">
        <div className="flex items-center space-x-6">
          {/* Title Section */}
          <div className="flex items-center space-x-2">
            <img src={swap} alt="Swap" className="w-5 h-5" />
            <span className="text-sm font-medium">Swap Rates</span>
          </div>

          {/* First Currency Pair */}
          <div className="flex items-center space-x-3">
            <div
              className="flex items-center space-x-1 cursor-pointer"
              onClick={() => handleDropdownClick("first")}
            >
              <img
                src={Nigeria}
                alt="Nigeria"
                className="w-5 h-5 rounded-full"
              />
              <img src={tron} alt="Tron" className="w-5 h-5 rounded-full" />
              <ChevronDown className="w-4 h-4 text-gray-300" />
            </div>
            <span className="text-sm font-medium">$1 = NGN 1500.00</span>
          </div>

          {/* Second Currency Pair */}
          <div className="flex items-center space-x-3">
            <div
              className="flex items-center space-x-1 cursor-pointer"
              onClick={() => handleDropdownClick("second")}
            >
              <img src={tron} alt="Tron" className="w-5 h-5 rounded-full" />
              <img
                src={Nigeria}
                alt="Nigeria"
                className="w-5 h-5 rounded-full"
              />
              <ChevronDown className="w-4 h-4 text-gray-300" />
            </div>
            <span className="text-sm font-medium">$1 = NGN 1450.00</span>
          </div>
        </div>
      </div>

      {/* Dropdown Modal */}
      {showDropdown && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
          onClick={closeDropdown}
        >
          <div
            className="bg-white rounded-lg p-4 w-80 mx-4"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="space-y-4">
              {/* From Section */}
              <div>
                <h3 className="text-gray-700 text-base font-medium mb-2">
                  From
                </h3>
                <div className="border border-gray-300 rounded-lg p-2.5 flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <img
                      src={Nigeria}
                      alt="Nigeria"
                      className="w-5 h-5 rounded-full"
                    />
                    <span className="text-gray-800 font-medium">NGN</span>
                  </div>
                  <ChevronDown className="w-4 h-4 text-gray-400" />
                </div>
              </div>

              {/* To Section */}
              <div>
                <h3 className="text-gray-700 text-base font-medium mb-2">To</h3>
                <div className="border border-gray-300 rounded-lg p-2.5 flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <img
                      src={tron}
                      alt="Tron"
                      className="w-5 h-5 rounded-full"
                    />
                    <span className="text-gray-800 font-medium">NGN</span>
                  </div>
                  <ChevronDown className="w-4 h-4 text-gray-400" />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default SwapRates;
