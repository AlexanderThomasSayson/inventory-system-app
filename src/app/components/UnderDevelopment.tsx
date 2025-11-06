import { ReactNode } from "react";

type Props = {
  icon: ReactNode;
  title: string;
  subtext?: string;
};

export default function UnderDevelopment({ icon, title, subtext }: Props) {
  return (
    <div className="bg-white rounded-xl border border-gray-200 p-10 flex flex-col items-center justify-center text-center gap-3 shadow-sm">
      <div className="text-5xl text-gray-400">{icon}</div>
      <h1 className="text-lg font-semibold text-gray-800">{title}</h1>
      {subtext && <p className="text-sm text-gray-500 max-w-sm">{subtext}</p>}
    </div>
  );
}
