import React from "react";

// Revenue Widget Component
const RevenueWidget = ({ todayRevenue, monthlyRevenue }) => {
  return (
    <div className="bg-white/5 backdrop-blur-sm  border border-white/10 p-4 rounded-lg shadow-md">
      <h2 className="text-lg font-semibold mb-2">Revenue</h2>
      <p>Today's Revenue: ${todayRevenue}</p>
      <p>Monthly Revenue: ${monthlyRevenue}</p>
    </div>
  );
};

// Transactions Widget Component
const TransactionsWidget = ({ totalTransactions }) => {
  return (
    <div className="bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 p-4  shadow-md">
      <h2 className="text-lg font-semibold mb-2">Transactions</h2>
      <p>Total Transactions: {totalTransactions}</p>
    </div>
  );
};

// Expenses Widget Component
const ExpensesWidget = ({ totalExpenses }) => {
  return (
    <div className="bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 p-4 shadow-md">
      <h2 className="text-lg font-semibold mb-2">Expenses</h2>
      <p>Total Expenses: {totalExpenses}</p>
    </div>
  );
};

export { RevenueWidget, TransactionsWidget, ExpensesWidget };
