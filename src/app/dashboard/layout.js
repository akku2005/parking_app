import React from "react";
import Image from "next/image";
import notificationIcon from "../../assets/icons/bell-iso-premium.png";
import settingsIcon from "../../assets/icons/setting-iso-premium.png";
import avatarIcon from "../../assets/icons/boy-iso-premium.png";
import { AiOutlineCar } from "react-icons/ai";
import { BiSolidReport } from "react-icons/bi";
import { AiOutlineHistory } from "react-icons/ai";
import { AiOutlineUsergroupAdd } from "react-icons/ai";
import { AiOutlineSetting } from "react-icons/ai";
import { MdOutlineSupportAgent } from "react-icons/md";
import { HiOutlineLogout } from "react-icons/hi";
import { BsFillSearchHeartFill } from "react-icons/bs";
import "../../style/layout.css";

const Layout = ({ children }) => {
  return (
    <div className="flex h-screen bg-black">
      {/* Sidebar */}
      <div className="sidebar">
        <div className="p-3">
          <div className="p-0 flex items-center justify-center mb-5 mt-5">
            <h1 className="text-center font-semibold text-3xl text-white ">
              Dashboard
            </h1>
          </div>

          {/* Sidebar Links */}
          <ul className="ml-5 my-list font-semibold">
            <li>
              <a href="/dashboard/overview" className="flex gap-3 items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                  />
                </svg>
                Dashboard Overview
              </a>
            </li>
            <li>
              <a href="/dashboard/parking" className="flex gap-3 items-center">
                <AiOutlineCar
                  style={{ width: "20px", height: "auto", fontWeight: "bold" }}
                />
                Parking Spaces
              </a>
            </li>
            <li>
              <a href="/dashboard/reports" className="flex gap-3 items-center">
                <BiSolidReport
                  style={{ width: "20px", height: "auto", fontWeight: "bold" }}
                />
                Reports
              </a>
            </li>
            <li>
              <a
                href="/dashboard/transactions"
                className="flex gap-3 items-center"
              >
                <AiOutlineHistory
                  style={{ width: "20px", height: "auto", fontWeight: "bold" }}
                />
                Transactions
              </a>
            </li>
            <li>
              <a
                href="/dashboard/customers"
                className="flex gap-3 items-center"
              >
                <AiOutlineUsergroupAdd
                  style={{ width: "20px", height: "auto", fontWeight: "bold" }}
                />
                Customers
              </a>
            </li>
            <li>
              <a href="/dashboard/settings" className="flex gap-3 items-center">
                <AiOutlineSetting
                  style={{ width: "20px", height: "auto", fontWeight: "bold" }}
                />
                Settings
              </a>
            </li>
            <li>
              <a
                href="/dashboard/help-support"
                className="flex gap-3 items-center"
              >
                <MdOutlineSupportAgent
                  style={{ width: "20px", height: "auto", fontWeight: "bold" }}
                />
                Help & Support
              </a>
            </li>
            <li>
              <a href="/dashboard/logout" className="flex gap-3 items-center">
                <HiOutlineLogout
                  style={{ width: "20px", height: "auto", fontWeight: "bold" }}
                />
                Logout
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="flex flex-col flex-1">
        {/* Top Navbar */}
        <nav className="navbar h-14 mt-2">
          {" "}
          {/* Change bg-gray-900 to the desired background color */}
          <div className="container mx-auto flex justify-between items-center h-full">
            {/* Left side with search box */}
            <div className="flex items-center">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search"
                  className="border border-gray-300 rounded-full pl-10 pr-4 py-2 focus:outline-none focus:border-blue-500 text-black"
                  style={{ maxWidth: "200px" }} // Optional: You can adjust the max width as needed
                />
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 text-rose-500">
                  <BsFillSearchHeartFill />
                </div>
              </div>
            </div>
            {/* Right side with notification, settings, and avatar icons */}
            <div className="flex items-center mr-2 gap-5">
              {/* Notification icon */}
              <div className="relative inline-block">
                <Image
                  src={notificationIcon}
                  alt="Notification"
                  width={30}
                  height={30}
                />
                <div className="absolute top-0 right-0 w-3 h-3 bg-green-500 rounded-full"></div>
              </div>

              {/* Settings icon */}
              <Image
                src={settingsIcon}
                alt="Notification"
                width={30}
                height={30}
              />

              {/* Avatar icon */}
              <div className="bg-indigo-300 p-1 rounded-full">
                <Image
                  src={avatarIcon}
                  alt="Notification"
                  width={30}
                  height={30}
                />
              </div>
            </div>
          </div>
        </nav>
        <hr className="mx-6" />
        {/* Main Content */}
        <div
          className="container mx-auto mt-4 flex-1 p-6 text-white"
          style={{ overflowY: "auto", maxHeight: "calc(100vh - 60px)" }}
        >
          {children}
        </div>
      </div>
    </div>
  );
};

export default Layout;
