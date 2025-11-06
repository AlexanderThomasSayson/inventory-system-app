"use client";
import { CiSettings } from "react-icons/ci";
import UnderDevelopment from "../components/UnderDevelopment";

export default function SettingsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-xl font-semibold">Settings</h1>
        <p className="text-sm text-gray-500">
          Configure your system preferences
        </p>
      </div>
      <div>
        <UnderDevelopment
          icon={<CiSettings />}
          title="Settings Coming Soon"
          subtext="This section is currently under development. Check back soon for updates."
        />
      </div>
    </div>
  );
}
