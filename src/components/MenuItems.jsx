import React from 'react';
import { PieChart, Wallet, ArrowLeftRight, CreditCard, Settings } from 'lucide-react';

const MenuItems = () => {
  const menuItems = [
    {
      icon: PieChart,
      label: 'Overview',
      path: '/'
    },
    {
      icon: Wallet,
      label: 'Wallets',
      path: '/wallets'
    },
    {
      icon: ArrowLeftRight,
      label: 'Transactions',
      path: '/transactions'
    },
    {
      icon: CreditCard,
      label: 'Payment',
      path: '/payment'
    },
    {
      icon: Settings,
      label: 'Settings',
      path: '/settings'
    }
  ];

  return (
    <div className="bg-white rounded-lg p-6 shadow-lg">
      <div className="space-y-4">
        {menuItems.map((item, index) => {
          const IconComponent = item.icon;
          return (
            <div key={index} className="flex items-center space-x-3">
              <IconComponent size={20} className="text-gray-600" />
              <span className="text-gray-700 font-medium">{item.label}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MenuItems;