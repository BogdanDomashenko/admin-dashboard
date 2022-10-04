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
    sales: 233,
  },
  {
    name: "April",
    sales: 140,
  },
  {
    name: "May",
    sales: 367,
  },
  {
    name: "June",
    sales: 398,
  },
  {
    name: "July",
    sales: 502,
  },
  {
    name: "August",
    sales: 411,
  },
  {
    name: "September",
    sales: 401,
  },
];

export const SalesChart: FC = () => {
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
        <Line type="monotone" dataKey="sales" stroke="#8884d8" />
      </LineChart>
    </ResponsiveContainer>
  );
};
