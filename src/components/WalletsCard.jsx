import React from "react";

const WalletsCard = () => {
  return (
    <div className="bg-white rounded-lg p-6 shadow-lg">
      {/* Ghana Wallet */}
      <div className="space-y-3">
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 rounded-full border-2 flex items-center justify-center">
            <img src="/Nigeria.png" alt="Ghana" className="w-4 h-6" />
          </div>
          <span className="text-gray-700 font-medium">Ghana Wallet</span>
        </div>
        <div className="text-3xl font-bold text-gray-900">N10,050.02</div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-200 my-6"></div>

      {/* USDT Wallet */}
      <div className="space-y-3">
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 rounded-full flex items-center justify-center">
            <img src="/tron.jpg" alt="USDT" className="w-4 h-4" />
          </div>
          <span className="text-gray-700 font-medium">USDT Wallet</span>
        </div>
        <div className="text-3xl font-bold text-gray-900">$20,000.32</div>
      </div>
    </div>
  );
};

export default WalletsCard;
