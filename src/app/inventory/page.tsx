import Card from "../components/Card";
import ProductTable from "../components/ProductTable";
import { PiPackageThin } from "react-icons/pi";
import { LuDollarSign } from "react-icons/lu";
import { CiWarning } from "react-icons/ci";
import { BsGraphUpArrow } from "react-icons/bs";

export default function InventoryPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-xl font-semibold">Inventory Management</h1>
        <p className="text-sm text-gray-500">
          Manage your products and stock levels
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 ">
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
      <ProductTable />
    </div>
  );
}
