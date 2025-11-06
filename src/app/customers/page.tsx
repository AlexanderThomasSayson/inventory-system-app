"use client";
import { FaUserFriends } from "react-icons/fa";
import UnderDevelopment from "../components/UnderDevelopment";

export default function CustomerPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-xl font-semibold">Customer Management</h1>
        <p className="text-sm text-gray-500">
          View and manage customer information
        </p>
      </div>
      <div>
        <UnderDevelopment
          icon={<FaUserFriends />}
          title="Customers Coming Soon"
          subtext="This section is currently under development. Check back soon for updates."
        />
      </div>
    </div>
  );
}
