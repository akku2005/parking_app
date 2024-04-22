import React from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "../../assets/ParkitLogo.png";

const Navbar = () => {
  return (
    <nav className="ml-10 mr-10">
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          <div>
            <Link href="/">
              <Image
                src={logo}
                alt="parkit"
                style={{ width: 140, height: 130 }}
              />
            </Link>
          </div>
          <div className="hidden md:flex items-center space-x-4 list-none font-medium gap-5">
            <li>Home</li>
            <li>Services</li>
            <li>Contact</li>
            <li>
              <Link href="#location">
                <li>Locations</li>
              </Link>
            </li>
          </div>
          <div className="hidden md:flex items-center space-x-4">
            <Link href="/login">
              <button className="text-white px-4 py-2 rounded hover:text-gray-200">
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
