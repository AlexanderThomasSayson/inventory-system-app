type Props = {
  title: string;
  value: string;
  trend?: string;
  subtext?: string;
};

export default function Card({ title, value, trend, subtext }: Props) {
  return (
    <div className="bg-white rounded-xl border p-4 flex flex-col gap-2">
      <span className="text-sm text-gray-500">{title}</span>
      <span className="text-2xl font-semibold">{value}</span>
      {trend && (
        <span className="text-green-600 text-sm">{trend} from last month</span>
      )}
      {subtext && <span className="text-red-500 text-sm">{subtext}</span>}
    </div>
  );
}
