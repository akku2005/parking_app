import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="m-5 p-4">
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          <div className="text-white font-bold text-xl">
            <h1>PARKIT <span className="text-rose-500 text-3xl">.</span> </h1>
          </div>
          <div className="hidden md:flex items-center space-x-4 list-none font-medium gap-5">
            <li>Home</li>
            <li>Services</li>
            <li>Contact</li>
            <li>Locations</li>
          </div>
          <div className="hidden md:flex items-center space-x-4">
            <Link href="/login">
            <button className=" text-white px-4 py-2 rounded hover:text-gray-200">
              Login
            </button>
            </Link>
            <Link href="/signup">
            <button className="bg-rose-500 text-gray-800 px-4 py-2 rounded hover:bg-rose-400">
              Register
            </button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
