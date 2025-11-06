"use client";
import { FaFileAlt } from "react-icons/fa";
import UnderDevelopment from "../components/UnderDevelopment";

export default function ReportPages() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-xl font-semibold">Reports</h1>
        <p className="text-sm text-gray-500">
          Generate and view business reports
        </p>
      </div>
      <div>
        <UnderDevelopment
          icon={<FaFileAlt />}
          title="Reports Coming Soon"
          subtext="This section is currently under development. Check back soon for updates."
        />
      </div>
    </div>
  );
}
