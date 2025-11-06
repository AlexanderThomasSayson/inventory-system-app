"use client";
import { VscGraph } from "react-icons/vsc";
import UnderDevelopment from "../components/UnderDevelopment";

export default function AnalyticsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-xl font-semibold">Analytics</h1>
        <p className="text-sm text-gray-500">Analyze your business data</p>
      </div>
      <div>
        <UnderDevelopment
          icon={<VscGraph />}
          title="Analytics Coming Soon"
          subtext="This section is currently under development. Check back soon for updates."
        />
      </div>
    </div>
  );
}
