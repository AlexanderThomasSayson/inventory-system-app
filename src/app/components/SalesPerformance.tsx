"use client";

export default function SalesPerformance() {
  return (
    <div className="bg-white rounded-xl border border-gray-200 p-6 flex flex-col gap-4">
      <h1 className="text-lg font-semibold text-gray-800">Sales Performance</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        <div className="bg-gray-50 rounded-xl border border-gray-200 p-4 flex flex-col gap-1 hover:shadow-md transition-shadow">
          <span className="text-sm text-gray-500">Today's Sales</span>
          <span className="text-2xl font-semibold text-gray-800">$2,450</span>
        </div>

        <div className="bg-gray-50 rounded-xl border border-gray-200 p-4 flex flex-col gap-1 hover:shadow-md transition-shadow">
          <span className="text-sm text-gray-500">Weekly Sales</span>
          <span className="text-2xl font-semibold text-gray-800">$15,230</span>
        </div>

        <div className="bg-gray-50 rounded-xl border border-gray-200 p-4 flex flex-col gap-1 hover:shadow-md transition-shadow">
          <span className="text-sm text-gray-500">Monthly Sales</span>
          <span className="text-2xl font-semibold text-gray-800">$62,480</span>
        </div>
      </div>
    </div>
  );
}
