"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import loginImg from "../../assets/1.png";
import Link from "next/link";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isSubmitDisabled, setIsSubmitDisabled] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Replace this with your actual login logic
    if (username === "user" && password === "password") {
      // Redirect to the main page
      setIsLoggedIn(true);
      window.location.href = "/dashboard"; // Redirect to the dashboard page
    } else {
      setError("Invalid username or password");
    }
  };

  useEffect(() => {
    if (username === "user" && password === "password") {
      setIsSubmitDisabled(false);
    } else {
      setIsSubmitDisabled(true);
    }
  }, [username, password]);

  useEffect(() => {
    // If user is logged in, redirect to dashboard
    if (isLoggedIn) {
      window.location.href = "/dashboard";
    }
  }, [isLoggedIn]);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 h-screen w-full">
      <div className="hidden sm:block">
        <Image className="w-full h-full object-cover" src={loginImg} alt="" />
      </div>

      <div className="flex flex-col justify-center">
        <form
          className="max-w-[400px] w-full mx-auto rounded-lg bg-white/5 backdrop-blur-sm  border border-white/10 p-8 px-8"
          onSubmit={handleSubmit}
        >
          <h2 className="text-3xl dark:text-white font-sans text-center">
            Login{" "}
          </h2>
          <div className="flex flex-col text-gray-400 py-2">
            <label>Username</label>
            <input
              className="rounded-lg bg-white/5 backdrop-blur-sm  border border-white/10 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="flex flex-col text-gray-400 py-2 relative">
            <label>Password</label>
            <input
              className="p-2 rounded-lg bg-white/5 backdrop-blur-sm  border border-white/10 mt-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none"
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button
              type="button"
              className=" justify-center items-center absolute inset-y-0 right-0 flex top-0 bottom-0 translate-y-3 px-2 focus:outline-none"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-6 h-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-6 h-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"
                  />
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                  />
                </svg>
              )}
            </button>
          </div>
          <div className="flex justify-between text-gray-400 py-2">
            <p className="flex items-center">
              <input className="mr-2" type="checkbox" /> Remember Me
            </p>
            <Link href={"/forgot-password"}>
              <button className="hover:text-pink-500">Forgot Password</button>
            </Link>
          </div>
          <button
            className="w-full my-5 py-2 bg-gradient-to-r from-black via-pink-500 to-black shadow-rose-500 text-white font-semibold rounded-lg"
            disabled={isSubmitDisabled}
          >
            Login
          </button>
          <Link href="/">
            <li className="text-end text-1xl text-gray-500 list-none hover:text-gray-600">
              Click to go home page...!
            </li>
          </Link>
        </form>
      </div>
    </div>
  );
}
