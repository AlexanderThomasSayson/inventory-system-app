"use client";

import { BsGraphUpArrow } from "react-icons/bs";
import UnderDevelopment from "../components/UnderDevelopment";

export default function ForecastPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-xl font-semibold">Inventory Forecast</h1>
        <p className="text-sm text-gray-500">Predict future inventory needs</p>
      </div>
      <div>
        <UnderDevelopment
          icon={<BsGraphUpArrow />}
          title="Forecast Coming Soon"
          subtext="This section is currently under development. Check back soon for updates."
        />
      </div>
    </div>
  );
}
