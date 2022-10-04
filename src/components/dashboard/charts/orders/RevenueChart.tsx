import { FC } from "react";
import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const data = [
  {
    name: "March",
    revenue: 145012,
  },
  {
    name: "April",
    revenue: 80931,
  },
  {
    name: "May",
    revenue: 201912,
  },
  {
    name: "June",
    revenue: 234021,
  },
  {
    name: "July",
    revenue: 360920,
  },
  {
    name: "August",
    revenue: 311080,
  },
  {
    name: "September",
    revenue: 299877,
  },
];

export const RevenueChart: FC = () => {
  return (
    <ResponsiveContainer width="100%" height={400}>
      <LineChart
        width={500}
        height={300}
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="revenue" stroke="#6dc876" />
      </LineChart>
    </ResponsiveContainer>
  );
};
