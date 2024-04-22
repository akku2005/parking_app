"use client";
import React from "react";

const TABLE_HEAD = ["Transaction", "Amount", "Date", "Status", "Account", ""];

const TABLE_ROWS = [
  {
    img: "https://docs.material-tailwind.com/img/logos/logo-spotify.svg",
    name: "Spotify",
    amount: "$2,500",
    date: "Wed 3:00pm",
    status: "paid",
    account: "visa",
    accountNumber: "1234",
    expiry: "06/2026",
  },
  {
    img: "https://docs.material-tailwind.com/img/logos/logo-amazon.svg",
    name: "Amazon",
    amount: "$5,000",
    date: "Wed 1:00pm",
    status: "paid",
    account: "master-card",
    accountNumber: "1234",
    expiry: "06/2026",
  },
  {
    img: "https://docs.material-tailwind.com/img/logos/logo-pinterest.svg",
    name: "Pinterest",
    amount: "$3,400",
    date: "Mon 7:40pm",
    status: "pending",
    account: "master-card",
    accountNumber: "1234",
    expiry: "06/2026",
  },
  {
    img: "https://docs.material-tailwind.com/img/logos/logo-google.svg",
    name: "Google",
    amount: "$1,000",
    date: "Wed 5:00pm",
    status: "paid",
    account: "visa",
    accountNumber: "1234",
    expiry: "06/2026",
  },
  {
    img: "https://docs.material-tailwind.com/img/logos/logo-netflix.svg",
    name: "netflix",
    amount: "$14,000",
    date: "Wed 3:30am",
    status: "cancelled",
    account: "visa",
    accountNumber: "1234",
    expiry: "06/2026",
  },
];

const TransactionsTable = () => {
  return (
    <div className="h-full w-full bg-white/5 backdrop-blur-md rounded-xl border border-white/10 p-5 text-white overflow-y-hidden">
      <div>
        <table className="w-full min-w-max table-auto text-left">
          <thead>
            <tr>
              {TABLE_HEAD.map((head, index) => (
                <th
                  key={index}
                  className="border border-blue-gray-100 bg-blue-gray-50/50 p-4"
                >
                  <p className="text-blue-gray font-normal leading-none opacity-70">
                    {head}
                  </p>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {TABLE_ROWS.map((row, index) => (
              <tr key={index}>
                <td className="p-4">
                  <div className="flex items-center gap-3">
                    <img
                      src={row.img}
                      alt={row.name}
                      className="w-8 h-8 border border-blue-gray-50 bg-blue-gray-50 rounded-full"
                    />
                    <p className="text-blue-gray font-bold">{row.name}</p>
                  </div>
                </td>
                <td className="p-4">
                  <p className="text-blue-gray font-normal">{row.amount}</p>
                </td>
                <td className="p-4">
                  <p className="text-blue-gray font-normal">{row.date}</p>
                </td>
                <td className="p-4">
                  <div className="w-max">
                    <span className="text-sm">
                      {row.status === "paid" ? (
                        <span className="text-green-500">Paid</span>
                      ) : row.status === "pending" ? (
                        <span className="text-yellow-500">Pending</span>
                      ) : (
                        <span className="text-red-500">Cancelled</span>
                      )}
                    </span>
                  </div>
                </td>
                <td className="p-4">
                  <div className="flex items-center gap-3">
                    <div className="h-9 w-12 rounded-md border border-blue-gray-50 p-1">
                      <img
                        src={
                          row.account === "visa"
                            ? "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/logos/visa.png"
                            : "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/logos/mastercard.png"
                        }
                        alt={row.account}
                        className="w-full h-full object-contain p-1"
                      />
                    </div>
                    <div className="flex flex-col">
                      <p className="text-white font-normal capitalize">
                        {row.account.split("-").join(" ")} {row.accountNumber}
                      </p>
                      <p className="text-white font-normal opacity-70">
                        {row.expiry}
                      </p>
                    </div>
                  </div>
                </td>
                <td className="p-4">
                  <button className="text-green-500">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12.293 13.707a1 1 0 010 1.414 1 1 0 01-1.414 0l-2-2a1 1 0 111.414-1.414l2 2zM9 4a5 5 0 100 10A5 5 0 009 4z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="flex items-center justify-between border-t border-blue-gray-50 p-4">
        <button className="text-sm text-white bg-slate-600 p-2 rounded-full">
          Previous
        </button>
        <div className="flex items-center gap-5">
          {[1, 2, 3, "...", 8, 9, 10].map((pageNumber, index) => (
            <button
              key={index}
              className="text-sm text-white bg-gray-500 w-7 h-7 rounded-full"
            >
              {pageNumber}
            </button>
          ))}
        </div>
        <button className="text-sm text-white bg-slate-600 p-2 rounded-full">
          Next
        </button>
      </div>
    </div>
  );
};

export default TransactionsTable;
