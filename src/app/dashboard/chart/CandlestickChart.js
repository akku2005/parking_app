"use client";
import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

const CandlestickChart = () => {
  // Sample data for the candlestick chart
  const data = [
    { name: "Jan", revenue: 1000 }, // Sample data point
    { name: "Feb", revenue: 1500 }, // Sample data point
    { name: "Mar", revenue: 1200 }, // Sample data point
    { name: "Apr", revenue: 1800 }, // Sample data point
    { name: "May", revenue: 2000 }, // Sample data point
    { name: "Jun", revenue: 1700 }, // Sample data point
  ];

  return (
    <LineChart
      width={500}
      height={300}
      data={data}
      margin={{ top: 10, right: 30, left: 20, bottom: 5 }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Line type="monotone" dataKey="revenue" stroke="#8884d8" />
    </LineChart>
  );
};

export default CandlestickChart;
