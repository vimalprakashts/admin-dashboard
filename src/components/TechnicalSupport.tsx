import React from 'react';

const TechnicalSupport: React.FC = () => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 md:p-6">
      <h3 className="text-lg md:text-xl font-semibold mb-4">Technical Support</h3>
      <div className="mb-4">
        <h4 className="text-base md:text-lg font-semibold mb-2">New Accounts since 2018</h4>
        <div className="flex items-center">
          <span className="text-2xl md:text-3xl font-bold mr-2">78%</span>
          <span className="text-green-500">+14</span>
        </div>
      </div>
      <div>
        <h4 className="text-base md:text-lg font-semibold mb-2">Sales Progress</h4>
        <div className="flex items-center justify-between mb-2">
          <span>Total Orders</span>
          <span className="font-bold text-green-500">$1896</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2.5">
          <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: '45%' }}></div>
        </div>
      </div>
    </div>
  );
};

export default TechnicalSupport;