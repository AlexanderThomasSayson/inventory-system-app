import SalesPerformance from "../components/SalesPerformance";

export default function SalesPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-xl font-semibold">Sales Overview</h1>
        <p className="text-sm text-gray-500">Track your sales performance</p>
      </div>
      <div>
        <SalesPerformance />
      </div>
    </div>
  );
}
