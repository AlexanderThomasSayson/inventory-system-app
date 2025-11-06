"use client";

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

const menu = [
  { name: "Dashboard", href: "/", icon: LayoutDashboard },
  { name: "Inventory", href: "/inventory", icon: Package },
  { name: "Sales", href: "#", icon: BarChart2 },
  { name: "Analytics", href: "#", icon: TrendingUp },
  { name: "Customers", href: "#", icon: Users },
  { name: "Reports", href: "#", icon: FileText },
  { name: "Forecast", href: "#", icon: TrendingUp },
  { name: "Settings", href: "#", icon: Settings },
];

export default function Sidebar() {
  const pathname = usePathname();

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
              className={`flex items-center gap-3 px-5 py-2 text-sm hover:bg-gray-100 ${
                active ? "bg-gray-100 font-medium" : ""
              }`}
            >
              <Icon size={18} />
              {item.name}
            </Link>
          );
        })}
      </nav>
      <div className="p-4 border-t border-gray-200 text-sm text-gray-600">
        John Doe
        <br />
        <span className="text-gray-400">Admin</span>
      </div>
    </aside>
  );
}
