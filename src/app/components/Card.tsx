import { PiPackageThin } from "react-icons/pi";
import { ReactNode } from "react";
type Props = {
  title: string;
  icon: ReactNode;
  value: string;
  trend?: string;
  subtext?: string;
};

export default function Card({ title, icon, value, trend, subtext }: Props) {
  return (
    <div className="bg-white rounded-xl border border-gray-200 p-4 flex flex-col gap-2">
      <div className="flex items-center justify-between">
        <span className="text-sm text-gray-500">{title}</span>
        <span>{icon}</span>
      </div>

      <span className="text-2xl font-semibold">{value}</span>
      {trend && (
        <span className="text-green-600 text-sm">{trend} from last month</span>
      )}
      {subtext && <span className="text-red-500 text-sm">{subtext}</span>}
    </div>
  );
}
