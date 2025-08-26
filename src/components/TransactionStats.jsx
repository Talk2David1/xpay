import React from 'react';

const TransactionStats = () => {
  const stats = [
    {
      title: 'Failed Transactions',
      amount: 'N12,324,943',
      count: '12,324',
      type: 'failed'
    },
    {
      title: 'Expired Transactions',
      amount: 'N12,324,943',
      count: '12,324',
      type: 'expired'
    },
    {
      title: 'Pending Transactions',
      amount: 'N12,324,943',
      count: '12,324',
      type: 'pending'
    },
    {
      title: 'Abandoned Transactions',
      amount: 'N12,324,943',
      count: '12,324',
      type: 'abandoned'
    },
    {
      title: 'Mismatched Transactions',
      amount: 'N12,324,943',
      count: '12,324',
      type: 'mismatched'
    },
    {
      title: 'Claimed Transactions',
      amount: 'N12,324,943',
      count: '12,324',
      type: 'claimed'
    }
  ];

  return (
    <div className="bg-white rounded-lg border border-gray-200">
      <div className="flex items-center justify-between p-6 border-b border-gray-200">
        <div className="flex space-x-8">
          <button className="text-lg font-semibold text-gray-900 border-b-2 border-gray-900 pb-2">
            Collection
          </button>
          <button className="text-lg font-medium text-gray-500 pb-2">
            Payout
          </button>
        </div>
        <button className="text-sm text-blue-600 hover:text-blue-700">
          See All
        </button>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
        {stats.map((stat, index) => (
          <div key={index} className="space-y-3">
            <h4 className="text-sm font-medium text-gray-500">{stat.title}</h4>
            <div className="bg-white rounded-lg p-4 flex items-center justify-between shadow-sm border border-gray-100">
              <p className="text-2xl font-bold text-gray-900">{stat.amount}</p>
              <span className="bg-blue-200 text-blue-900 text-sm font-medium px-3 py-1.5 rounded-full">
                {stat.count}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TransactionStats;