import React from 'react';
import { DollarSign, TrendingUp, Users } from 'lucide-react';
import PerformanceChart from './PerformanceChart';
import TechnicalSupport from './TechnicalSupport';
import TimelineExample from './TimelineExample';

const Dashboard: React.FC = () => {
  const stats = [
    { icon: DollarSign, title: 'Cash Deposits', value: '1,7M', change: '-54.1% less earnings' },
    { icon: Users, title: 'Invested Dividents', value: '9M', change: 'Grow Rate: +14.1%' },
    { icon: TrendingUp, title: 'Capital Gains', value: '$563', change: 'Increased by +7.35%' },
  ];

  return (
    <div className="p-4 md:p-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-8">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-md p-4 md:p-6"
          >
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-base md:text-lg font-semibold text-gray-600">{stat.title}</h3>
              <stat.icon size={24} className="text-gray-400" />
            </div>
            <p className="text-2xl md:text-3xl font-bold mb-2">{stat.value}</p>
            <p className="text-xs md:text-sm text-gray-500">{stat.change}</p>
          </div>
        ))}
      </div>
      <div className="bg-white rounded-lg shadow-md p-4 md:p-6 mb-8">
        <h3 className="text-lg md:text-xl font-semibold mb-4">Portfolio Performance</h3>
        <PerformanceChart />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6">
        <TechnicalSupport />
        <TimelineExample />
      </div>
    </div>
  );
};

export default Dashboard;