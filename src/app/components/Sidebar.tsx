"use client";
import { FaRegUserCircle } from "react-icons/fa";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  Package,
  BarChart2,
  Users,
  FileText,
  TrendingUp,
  Settings,
} from "lucide-react";
import Link from "next/link";
import { useMemo } from "react";

const menu = [
  { name: "Dashboard", href: "/", icon: LayoutDashboard },
  { name: "Inventory", href: "/inventory", icon: Package },
  { name: "Sales", href: "/sales", icon: BarChart2 },
  { name: "Analytics", href: "/analytics", icon: TrendingUp },
  { name: "Customers", href: "/customers", icon: Users },
  { name: "Reports", href: "/reports", icon: FileText },
  { name: "Forecast", href: "/forecast", icon: TrendingUp },
  { name: "Settings", href: "/settings", icon: Settings },
];

export default function Sidebar() {
  const pathname = usePathname();

  const user = { name: "John Doe", role: "Admin" };

  // Automatically get initials (e.g., "John Doe" → "JD")
  const initials = useMemo(() => {
    return user.name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase();
  }, [user.name]);

  return (
    <aside className="w-64 bg-white border-r border-gray-200 flex flex-col">
      <div className="p-4 sm:p-6 lg:p-8 text-lg sm:text-xl lg:text-2xl font-bold border-b border-gray-200 pb-8 sm:pb-10">
        Inventory Pro
        <p className="text-sm text-gray-500">Management System</p>
      </div>

      <nav className="flex-1 space-y-1">
        {menu.map((item) => {
          const Icon = item.icon;
          const active = pathname === item.href;
          return (
            <Link
              key={item.name}
              href={item.href}
              className={`flex items-center gap-3 px-5 py-2 text-sm transition-colors duration-150 ${
                active
                  ? "bg-blue-100 text-blue-500 font-medium hover:bg-blue-100"
                  : "text-gray-600 hover:bg-gray-100"
              }`}
            >
              <Icon size={18} />
              {item.name}
            </Link>
          );
        })}
      </nav>
      <div className="p-4 border-t border-gray-200 text-sm text-gray-600">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            {/* Profile Circle with Initials */}
            <div className="flex items-center justify-center w-9 h-9 rounded-full bg-blue-200 text-blue-500 font-semibold">
              {initials}
            </div>

            {/* User Info */}
            <div>
              <div className="font-medium text-gray-800">{user.name}</div>
              <span className="text-gray-400 text-xs">{user.role}</span>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
}
