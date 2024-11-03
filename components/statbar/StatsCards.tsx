import React from 'react'

const StatsCards = () => (
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:hidden lg:grid-cols-3 gap-4">
    <div className="bg-white p-4 rounded shadow">
      <h4 className="text-gray-500">Open Jobs</h4>
      <p className="text-2xl font-bold">13</p>
    </div>
    <div className="bg-white p-4 rounded shadow">
      <h4 className="text-gray-500">Closed Jobs</h4>
      <p className="text-2xl font-bold">125</p>
    </div>
    <div className="bg-white p-4 rounded shadow">
      <h4 className="text-gray-500">Overdue Jobs</h4>
      <p className="text-2xl font-bold">2</p>
    </div>
  </div>
);


export default StatsCards