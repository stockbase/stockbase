"use client";

import { LineChart, Line } from "recharts";

interface SimpleLineChartProps {
  color: string;
  data: {
    name: string;
    uv: number;
    pv: number;
    amt: number;
  }[];
}

export function SimpleLineChart({ color, data }: SimpleLineChartProps) {
  return (
    <LineChart width={300} height={100} data={data}>
      <Line
        type="monotone"
        dataKey="pv"
        stroke={color}
        strokeWidth={2}
        dot={false}
      />
    </LineChart>
  );
}
