import { FC } from "react";
import {
  PieChart,
  Pie,
  Sector,
  Cell,
  ResponsiveContainer,
  PieLabel,
  Tooltip,
} from "recharts";
import { CountryPopularity } from "../../../../hooks/useCountriesPopularity";

interface Props {
  countries: CountryPopularity[];
}

export const UserCountryChart: FC<Props> = ({ countries }) => {
  return (
    <ResponsiveContainer width="100%" height={200}>
      <PieChart width={400} height={400}>
        <Pie
          dataKey="count"
          isAnimationActive={false}
          data={countries}
          cx="50%"
          cy="50%"
          outerRadius={80}
          fill="#8884d8"
          label
        />
        <Tooltip />
      </PieChart>
    </ResponsiveContainer>
  );
};
