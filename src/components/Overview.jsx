import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  ResponsiveContainer,
  ReferenceLine,
} from "recharts";
import { ChevronDown, Calendar } from "lucide-react";

const Overview = () => {
  const data = [
    { month: "JAN", payout: 20000, collection: 50000 },
    { month: "FEB", payout: 20000, collection: 50000 },
    { month: "MAR", payout: 20000, collection: 50000 },
    { month: "APR", payout: 20000, collection: 50000 },
    { month: "MAY", payout: 20000, collection: 50000 },
    { month: "JUN", payout: 20000, collection: 50000 },
    { month: "JUL", payout: 20000, collection: 50000 },
    { month: "AUG", payout: 20000, collection: 50000 },
    { month: "SEP", payout: 20000, collection: 50000 },
  ];

  return (
    <div className="bg-white rounded-lg py-2 border border-gray-200 shadow-lg">
      <div className="flex items-center justify-between mb-4">
        <h3
          className="font-bold ml-5"
          style={{
            fontFamily: "Manrope",
            fontWeight: 700,
            fontSize: "24.89px",
            lineHeight: "100%",
            letterSpacing: "0%",
            color: "#6F6F6F",
          }}
        >
          Overview
        </h3>
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
          <BarChart
            data={data}
            margin={{ top: 20, right: 30, left: 5, bottom: 5 }}
            barCategoryGap="20%"
          >
            <ReferenceLine y={5000} stroke="#E5E7EB" strokeDasharray="3 3" />
            <ReferenceLine y={15000} stroke="#E5E7EB" strokeDasharray="3 3" />
            <ReferenceLine y={30000} stroke="#E5E7EB" strokeDasharray="3 3" />
            <ReferenceLine y={50000} stroke="#E5E7EB" strokeDasharray="3 3" />
            <XAxis
              dataKey="month"
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 12, fill: "#9CA3AF" }}
            />
            <YAxis
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 12, fill: "#9CA3AF" }}
              domain={[0, 60000]}
              ticks={[0, 5000, 15000, 30000, 50000]}
              tickFormatter={(value) => `${value / 1000}K`}
            />
            <Bar
              dataKey="collection"
              fill="#1E40AF"
              radius={[4, 4, 4, 4]}
              maxBarSize={12}
            />
            <Bar
              dataKey="payout"
              fill="#374151"
              radius={[4, 4, 4, 4]}
              maxBarSize={12}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div className="flex items-center justify-center space-x-6 mt-3">
        <div className="flex items-center space-x-2">
          <div className="w-3 h-3 bg-gray-700 rounded-sm"></div>
          <span className="text-sm text-gray-600">Payout</span>
        </div>
        <div className="flex items-center space-x-2">
          <div className="w-3 h-3 bg-blue-700 rounded-sm"></div>
          <span className="text-sm text-gray-600">Collection</span>
        </div>
      </div>
    </div>
  );
};

export default Overview;
