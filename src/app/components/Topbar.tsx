import { Bell, Plus } from "lucide-react";

export default function Topbar() {
  return (
    <header className="flex items-center justify-between p-4 bg-white border-b border-gray-200">
      <input
        type="text"
        placeholder="Search products, SKU, or category..."
        className="w-1/2 px-4 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-gray-100 focus:bg-black-50 bg-gray-100"
      />
      <div className="flex items-center gap-4">
        <div className="relative">
          <Bell className="text-gray-500" />
          <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
            3
          </span>
        </div>
        <button className="flex items-center gap-2 bg-black text-white px-4 py-2 rounded-md hover:bg-gray-800 text-sm">
          <Plus size={16} /> Add Product
        </button>
      </div>
    </header>
  );
}
