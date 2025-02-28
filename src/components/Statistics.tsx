import { FC } from "react";

type StatisticsProps = {
  name: string;
  lastValue: number;
  totalValue: number;
  totalClicked: number;
};

export const Statistics: FC<StatisticsProps> = ({
  name,
  lastValue,
  totalValue,
  totalClicked,
}) => {
  return (
    <div className="flex flex-col gap-2 w-52 border border-slate-300 shadow-sm rounded-sm p-2.5">
      <p className="font-semibold capitalize">{name}</p>
      <p className="text-sm">
        Last Value: <span className="font-bold">{lastValue}</span>
      </p>
      <p className="text-sm">
        Total Value: <span className="font-bold">{totalValue}</span>
      </p>
      <p className="text-sm">
        Total Clicked: <span className="font-bold">{totalClicked}</span>
      </p>
    </div>
  );
};

Statistics.displayName = "Statistics";
