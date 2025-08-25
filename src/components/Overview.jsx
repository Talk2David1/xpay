import React from 'react';
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer } from 'recharts';
import { ChevronDown, Calendar } from 'lucide-react';

const Overview = () => {
  const data = [
    { month: 'JAN', payout: 25000, collection: 30000 },
    { month: 'FEB', payout: 35000, collection: 40000 },
    { month: 'MAR', payout: 30000, collection: 35000 },
    { month: 'APR', payout: 45000, collection: 50000 },
    { month: 'MAY', payout: 40000, collection: 45000 },
    { month: 'JUN', payout: 50000, collection: 55000 },
    { month: 'JUL', payout: 35000, collection: 40000 },
    { month: 'AUG', payout: 45000, collection: 50000 },
    { month: 'SEP', payout: 55000, collection: 60000 },
  ];

  return (
    <div className="bg-white rounded-lg p-6 border border-gray-200">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold">Overview</h3>
        <div className="flex items-center space-x-2">
          <button className="flex items-center space-x-1 text-sm text-gray-600 hover:text-gray-900">
            <span>This week</span>
            <ChevronDown className="w-4 h-4" />
          </button>
          <button className="p-2 text-gray-400 hover:text-gray-600">
            <Calendar className="w-4 h-4" />
          </button>
        </div>
      </div>
      
      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
            <XAxis 
              dataKey="month" 
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 12, fill: '#6B7280' }}
            />
            <YAxis hide />
            <Bar dataKey="payout" fill="#6B7280" radius={[2, 2, 0, 0]} />
            <Bar dataKey="collection" fill="#1F2937" radius={[2, 2, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
      
      <div className="flex items-center justify-center space-x-6 mt-4">
        <div className="flex items-center space-x-2">
          <div className="w-3 h-3 bg-gray-600 rounded-full"></div>
          <span className="text-sm text-gray-600">Payout</span>
        </div>
        <div className="flex items-center space-x-2">
          <div className="w-3 h-3 bg-gray-900 rounded-full"></div>
          <span className="text-sm text-gray-600">Collection</span>
        </div>
      </div>
    </div>
  );
};

export default Overview;