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

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Replace this with your actual login logic
    if (username === "user" && password === "password") {
      // Redirect to the main page
      window.location.href = "/";
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
          <div className="flex flex-col text-gray-400 py-2">
            <label>Password</label>

            <input
              className="p-2 rounded-lg bg-white/5 backdrop-blur-sm  border border-white/10 mt-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none"
              type="password"
            />
          </div>
          <div className="flex justify-between text-gray-400 py-2">
            <p className="flex items-center">
              <input className="mr-2" type="checkbox" /> Remember Me
            </p>
            <Link href={"/forgot-password"}>
            <button className="hover:text-pink-500">
  Forgot Password
</button>
            </Link>
          </div>
          <button className="w-full my-5 py-2 bg-gradient-to-r from-black via-pink-500 to-black shadow-rose-500 text-white font-semibold rounded-lg">
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
