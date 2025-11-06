import Card from "./components/Card";
import TopProducts from "./components/TopProducts";
import ActivityList from "./components/ActivityList";
import { PiPackageThin } from "react-icons/pi";
import { LuDollarSign } from "react-icons/lu";
import { CiWarning } from "react-icons/ci";
import { BsGraphUpArrow } from "react-icons/bs";

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-xl font-semibold">Dashboard Overview</h1>
        <p className="text-sm text-gray-500">
          View your business metrics at a glance
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card
          title="Total Products"
          icon={<PiPackageThin />}
          value="1,284"
          trend="+12%"
        />
        <Card
          title="Total Revenue"
          icon={<LuDollarSign />}
          value="$45,231"
          trend="+8%"
        />
        <Card
          title="Low Stock Items"
          icon={<CiWarning className="text-yellow-500" />}
          value="23"
          subtext="5 critical"
        />
        <Card
          title="Sales This Month"
          icon={<BsGraphUpArrow />}
          value="892"
          trend="+15%"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <ActivityList />
        <TopProducts />
      </div>
    </div>
  );
}
