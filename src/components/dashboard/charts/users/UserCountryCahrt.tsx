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

const COLORS: string[] = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

const renderLabel = (country: CountryPopularity): string => {
  return country.name;
};

export const UserCountryChart: FC<Props> = ({ countries }) => {
  return (
    <ResponsiveContainer width="100%" height={200}>
      <PieChart width={400} height={400}>
        <Pie
          dataKey="count"
          isAnimationActive={false}
          data={countries}
          label={renderLabel}
          cx="50%"
          cy="50%"
          outerRadius={80}
          fill="#8884d8"
        >
          {countries.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
      </PieChart>
    </ResponsiveContainer>
  );
};
