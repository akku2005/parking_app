"use client";
import React, { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import { FiEye, FiEyeOff } from "react-icons/fi"; 
import gsap from "gsap";
import Link from "next/link";

const SignUpPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false); 
  const router = useRouter();
  const handleButtonHover = () => {
    gsap.to(".sign-up-button", { scale: 1.05, duration: 0.3 }); // Example animation (scale up)
  };

  const handleSubmit = async (e) => {
    // Your form submission logic here
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword); // Toggle the state to show/hide password
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-black text-white">
      <div className="w-full max-w-md p-8 space-y-3  bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 shadow-xl">
        <h1 className="text-2xl font-bold text-center">Sign Up</h1>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-white">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email id"
              className="w-full px-3 py-2 mt-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg sm:text-sm"
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-white">
              Password
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter password"
                className=" w-full px-3 py-2 mt-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg sm:text-sm pr-10" 
              />
              {/* Eye button to toggle password visibility */}
              <button
                type="button"
                onClick={togglePasswordVisibility}
                className="item-center absolute inset-y-0 right-0 flex items-center px-2 py-1 text-white "
              >
                {showPassword ? <FiEyeOff /> : <FiEye />}
              </button>
            </div>
          </div>
          <div>
            <label htmlFor="username" className="block text-sm font-medium text-white">
              Username
            </label>
            <input
              type="text"
              name="username"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Enter username"
              className="w-full px-3 py-2 mt-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg sm:text-sm"
            />
          </div>
          <button
            type="submit"
            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-gradient-to-r from-black via-rose-700 to-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sign-up-button"
            onMouseEnter={handleButtonHover} // Attach hover animation function
            onMouseLeave={() => gsap.to(".sign-up-button", { scale: 1, duration: 0.3 })} // Reset scale on hover out
          >
            Sign Up
          </button>
        </form>
        {error && <p className="text-red-500">{error}</p>}
        <p className="text-center text-sm text-gray-500">
          Already have an account?{" "}
          <Link href="/login">
          <button className="text-rose-600 hover:text-rose-700">Sign In</button>
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignUpPage;
