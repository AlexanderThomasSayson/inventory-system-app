"use client";

type Activity = {
  status: "success" | "warning" | "info" | "error";
  title: string;
  detail: string;
  time: string;
};

const activities: Activity[] = [
  {
    status: "success",
    title: "New order received",
    detail: "Order #1234 - $299.99",
    time: "2m ago",
  },
  {
    status: "warning",
    title: "Low stock alert",
    detail: "Mechanical Keyboard - 12 left",
    time: "15m ago",
  },
  {
    status: "info",
    title: "Product restocked",
    detail: "Wireless Mouse - 50 units added",
    time: "1h ago",
  },
  {
    status: "error",
    title: "Product out of stock",
    detail: "USB-C Cable - Needs reorder",
    time: "2h ago",
  },
];

const statusColor = {
  success: "bg-green-500",
  warning: "bg-yellow-500",
  info: "bg-blue-500",
  error: "bg-red-500",
};

export default function ActivityList() {
  return (
    <div className="bg-white border border-gray-200 rounded-xl p-4 flex flex-col">
      <h2 className="text-md font-semibold mb-3">Recent Activity</h2>
      <ul className="space-y-3">
        {activities.map((a, i) => (
          <li
            key={i}
            className="flex justify-between items-start border-b border-gray-100 pb-2 last:border-none"
          >
            <div className="flex items-start gap-3">
              <span
                className={`w-2 h-2 mt-2 rounded-full ${statusColor[a.status]}`}
              ></span>
              <div>
                <p className="text-sm font-medium">{a.title}</p>
                <p className="text-xs text-gray-500">{a.detail}</p>
              </div>
            </div>
            <span className="text-xs text-gray-400">{a.time}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
