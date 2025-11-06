"use client";

type Product = {
  name: string;
  sales: number;
  change: number; // percentage
};

const topProducts: Product[] = [
  { name: "Monitor 27”", sales: 145, change: 12 },
  { name: "Mechanical Keyboard", sales: 132, change: 8 },
  { name: "Wireless Mouse", sales: 98, change: 15 },
  { name: "Webcam HD", sales: 76, change: -3 },
];

export default function TopProducts() {
  return (
    <div className="bg-white border rounded-xl p-4 flex flex-col">
      <h2 className="text-md font-semibold mb-3">Top Products</h2>
      <ul className="space-y-3">
        {topProducts.map((p, i) => (
          <li
            key={i}
            className="flex justify-between text-sm border-b pb-2 last:border-none"
          >
            <div>
              <p className="font-medium">{p.name}</p>
              <p className="text-gray-500 text-xs">{p.sales} sales</p>
            </div>
            <span
              className={`text-xs font-medium ${
                p.change >= 0 ? "text-green-600" : "text-red-600"
              }`}
            >
              {p.change >= 0 ? `+${p.change}%` : `${p.change}%`}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
