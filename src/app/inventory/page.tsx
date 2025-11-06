import Card from "../components/Card";
import ProductTable from "../components/ProductTable";

export default function InventoryPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-xl font-semibold">Inventory Management</h1>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card title="Total Products" value="1,284" trend="+12%" />
        <Card title="Total Revenue" value="$45,231" trend="+8%" />
        <Card title="Low Stock Items" value="23" subtext="5 critical" />
        <Card title="Sales This Month" value="892" trend="+15%" />
      </div>
      <ProductTable />
    </div>
  );
}
