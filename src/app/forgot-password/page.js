"use client";

import React, { useState } from "react";
import Image from "next/image";
import forGerPass from "../../assets/forgerPass.jpg";
import Link from "next/link";

const Page = () => {
  const [email, setEmail] = useState("");
  const [verificationCode, setVerificationCode] = useState("");
  const [showVerification, setShowVerification] = useState(false);

  const handleEmailSubmit = (e) => {
    e.preventDefault();
    // Here you can implement your logic to send the verification code to the provided email
    // For now, let's just set a dummy verification code
    setVerificationCode("123456"); // Dummy verification code
    setShowVerification(true);
  };

  const handleVerificationSubmit = (e) => {
    e.preventDefault();
    // Here you can implement your logic to verify the entered code
    // For now, let's just log it
    console.log("Verification code submitted:", verificationCode);
  };

  return (
    <div className="bg-black h-screen flex justify-center items-center">
      <div className="grid grid-cols-1 sm:grid-cols-2 w-full">
        <div className="hidden sm:block h-full">
          <Image
            className="w-full h-full object-cover"
            src={forGerPass}
            alt="forget-password"
          />
        </div>
        <div className="flex flex-col justify-center items-center sm:h-full">
          {!showVerification ? (
            <form
              className="max-w-[400px] w-full mx-auto rounded-lg bg-white/5 backdrop-blur-sm border border-white/5 p-8 px-8"
              onSubmit={handleEmailSubmit}
            >
              <h2 className="text-3xl text-white font-sans text-center">
                Forgot Password{" "}
              </h2>
              <div className="flex flex-col text-white py-2">
                <label>Email</label>
                <input
                  className="rounded-lg bg-white/5 backdrop-blur-sm border border-white/10 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  placeholder="Enter your email"
                />
              </div>

              <div className="py-2">
                <button
                  type="submit"
                  className="w-full my-5 py-2 bg-gradient-to-r from-black via-pink-500 to-black shadow-rose-500 text-white font-semibold rounded-lg"
                >
                  Send Verification Code
                </button>
              </div>
              <div className="py-2">
                <Link href="/login">
                  <button className="hover:text-pink-500">Login..?</button>
                </Link>
              </div>
            </form>
          ) : (
            <form
              className="max-w-[400px] w-full mx-auto rounded-lg bg-white/5 backdrop-blur-sm border border-white/5 p-8 px-8"
              onSubmit={handleVerificationSubmit}
            >
              <h2 className="text-3xl dark:text-white font-sans text-center">
                Enter Verification Code
              </h2>
              <div className="flex flex-col text-white py-2">
                <label>Verification Code</label>
                <input
                  className="rounded-lg bg-white/5 backdrop-blur-sm border border-white/10 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none"
                  type="text"
                  value={verificationCode}
                  onChange={(e) => setVerificationCode(e.target.value)}
                  required
                  placeholder="Enter verification code"
                  maxLength={6}
                />
              </div>

              <div className="py-2">
                <button
                  type="submit"
                  className="w-full my-5 py-2 bg-gradient-to-r from-black via-pink-500 to-black shadow-rose-500 text-white font-semibold rounded-lg"
                >
                  Verify
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default Page;
