import React from 'react';
import { FileText, Play } from 'lucide-react';

const Resources = () => {
  const resourceItems = [
    {
      icon: FileText,
      label: 'Documentation'
    },
    {
      icon: Play,
      label: 'Watch Video'
    }
  ];

  return (
    <div className="bg-white rounded-lg p-6 shadow-lg">
      <h3 className="text-lg font-semibold text-gray-700 mb-4">Resources</h3>
      <div className="space-y-4">
        {resourceItems.map((item, index) => {
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

export default Resources;