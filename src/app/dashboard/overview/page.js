"use client";
import React, { useState, useEffect } from "react";
import { RevenueWidget, TransactionsWidget, ExpensesWidget } from "../widgets";
import CandlestickChart from "../chart/CandlestickChart";
import { Line } from "react-chartjs-2";
import {
  Chart,
  CategoryScale,
  LinearScale,
  LineController,
  BarElement,
  PointElement,
  LineElement,
  Title,
} from "chart.js";

// Register required Chart.js components
Chart.register(
  CategoryScale,
  LinearScale,
  LineController,
  BarElement,
  PointElement,
  LineElement,
  Title
);

const OverviewPage = () => {
  // Dummy data (replace with actual data from your backend)
  const revenueData = {
    todayRevenue: 500,
    monthlyRevenue: 15000,
  };
  const transactionsData = {
    totalTransactions: 50,
  };
  const expensesData = {
    totalExpenses: 2000,
  };

  // Dummy data for new customers (replace with actual data from your backend)
  const [newCustomersData, setNewCustomersData] = useState({
    monthly: [50, 70, 80, 90, 100], // Monthly new customers data
    weekly: [10, 15, 20, 25, 30], // Weekly new customers data
  });

  // Chart.js data and options for new customers graph
  const newCustomersChartOptions = {
    scales: {
      x: {
        type: "category",
        labels: ["Week 1", "Week 2", "Week 3", "Week 4", "Week 5"], // Assuming 5 weeks for weekly data
      },
      y: {
        beginAtZero: true,
      },
    },
  };

  const newCustomersChartData = {
    datasets: [
      {
        label: "Weekly New Customers",
        data: newCustomersData.weekly,
        fill: false,
        backgroundColor: "rgba(75,192,192,0.2)",
        borderColor: "rgba(75,192,192,1)",
      },
      {
        label: "Monthly New Customers",
        data: newCustomersData.monthly,
        fill: false,
        backgroundColor: "rgba(255, 99, 132, 0.2)",
        borderColor: "rgba(255, 99, 132, 1)",
      },
    ],
  };

  return (
    <div className="container mx-auto">
      <h1 className="text-3xl font-bold mb-4">Parking Overview</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Revenue Widget */}
        <RevenueWidget {...revenueData} />

        {/* Transactions Widget */}
        <TransactionsWidget {...transactionsData} />

        {/* Expenses Widget */}
        <ExpensesWidget {...expensesData} />
      </div>
      <section>
        <main className="grid grid-cols-2 gap-5">
          <div className="bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 p-4 mt-3">
            <CandlestickChart />
          </div>
          <div className="bg-white/5 backdrop-blur-md rounded-xl border border-white/10 p-4 mt-3">
            <Line
              data={newCustomersChartData}
              options={newCustomersChartOptions}
            />
          </div>
        </main>
      </section>
    </div>
  );
};

export default OverviewPage;
