"use client";
import {
  LineChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Line,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const Chart = ({ data }: { data: any }) => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <LineChart
        data={data}
        margin={{
          left: -5,
        }}
      >
        <CartesianGrid
          strokeDasharray="3"
          horizontal={false}
          stroke="#F4F5F7"
        />
        <XAxis dataKey="month" strokeWidth={0} />
        <YAxis strokeWidth={0} />
        <Tooltip
          contentStyle={{
            background: "white",
            borderRadius: "10px",
            border: "1px solid #F4F5F7",
          }}
        />
        <Line
          type="monotone"
          dataKey="value"
          stroke="#0756FF"
          strokeWidth={3}
        />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default Chart;
