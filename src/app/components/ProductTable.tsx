"use client";

const products = [
  {
    name: "Wireless Mouse",
    sku: "WM-001",
    category: "Electronics",
    stock: 145,
    price: 29.99,
    status: "In Stock",
  },
  {
    name: "Mechanical Keyboard",
    sku: "KB-002",
    category: "Electronics",
    stock: 12,
    price: 89.99,
    status: "Low Stock",
  },
  {
    name: "USB-C Cable",
    sku: "CB-003",
    category: "Accessories",
    stock: 0,
    price: 12.99,
    status: "Out of Stock",
  },
];

export default function ProductTable() {
  return (
    <div className="bg-white border rounded-xl p-4">
      <div className="flex justify-between items-center mb-4">
        <div className="space-x-2">
          <button className="px-3 py-1 border rounded-md text-sm">
            All Products
          </button>
          <button className="px-3 py-1 border rounded-md text-sm">
            Low Stock
          </button>
          <button className="px-3 py-1 border rounded-md text-sm">
            Out of Stock
          </button>
        </div>
        <div className="space-x-2">
          <button className="px-3 py-1 border rounded-md text-sm">
            Export
          </button>
          <button className="px-3 py-1 border rounded-md text-sm">
            Filter
          </button>
        </div>
      </div>
      <table className="w-full text-sm">
        <thead>
          <tr className="text-left text-gray-500 border-b">
            <th className="py-2">Product Name</th>
            <th>SKU</th>
            <th>Category</th>
            <th>Stock</th>
            <th>Price</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {products.map((p) => (
            <tr key={p.sku} className="border-b hover:bg-gray-50">
              <td className="py-2">{p.name}</td>
              <td>{p.sku}</td>
              <td>{p.category}</td>
              <td>{p.stock}</td>
              <td>${p.price.toFixed(2)}</td>
              <td>
                <span
                  className={`px-2 py-1 rounded-full text-xs ${
                    p.status === "In Stock"
                      ? "bg-green-100 text-green-700"
                      : p.status === "Low Stock"
                      ? "bg-yellow-100 text-yellow-700"
                      : "bg-red-100 text-red-700"
                  }`}
                >
                  {p.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
