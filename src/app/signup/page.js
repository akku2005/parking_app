"use client";
import React, { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
const SignUpPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();
  const handleSubmit = async (e) => {
    // e.preventDefault();
    // try {
    //   const response = await axios.post("/api/sign-up", {
    //     email,
    //     password,
    //     username,
    //   });
    //   if (response.status === 200) {
    //     router.push("/");
    //   }
    // } catch (error) {
    //   setError(error.response.data.message);
    // }
  };
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-black text-white">
      <div className="w-full max-w-md p-8 space-y-3  bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 shadow-xl">
        {" "}
        <h1 className="text-2xl font-bold text-center">Sign Up</h1>{" "}
        <form onSubmit={handleSubmit} className="space-y-6">
          {" "}
          <div>
            {" "}
            <label
              htmlFor="email"
              className="block text-sm font-medium text-white"
            >
              {" "}
              Email{" "}
            </label>{" "}
            <input
              type="email"
              name="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-3 py-2 placeholder-gray-400 border rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />{" "}
          </div>{" "}
          <div>
            {" "}
            <label
              htmlFor="password"
              className="block text-sm font-medium text-white"
            >
              {" "}
              Password{" "}
            </label>{" "}
            <input
              type="password"
              name="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-3 py-2 placeholder-gray-400 border rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />{" "}
          </div> {" "}
          <div>
            {" "}
            <label
              htmlFor="username"
              className="block text-sm font-medium text-white"
            >
              {" "}
              Username{" "}
            </label>{" "}
            <input
              type="text"
              name="username"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full px-3 py-2 placeholder-gray-400 border rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />{" "}
          </div>{" "}
          <button
            type="submit"
            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            {" "}
            Sign Up{" "}
          </button>{" "}
        </form>{" "}
        {error && <p className="text-red-500">{error}</p>}{" "}
        <p className="text-center text-sm text-gray-500">
          {" "}
          Already have an account?{" "}
          <button className="text-indigo-600 hover:text-indigo-900">Sign In</button>
        </p>{" "}
      </div>{" "}
    </div>
  );
};
export default SignUpPage;


<section class="text-gray-400 bg-gray-900 body-font">
  <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
      <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">Before they sold out
        <br class="hidden lg:inline-block"/>readymade gluten
      </h1>
      <p class="mb-8 leading-relaxed">Copper mug try-hard pitchfork pour-over freegan heirloom neutra air plant cold-pressed tacos poke beard tote bag. Heirloom echo park mlkshk tote bag selvage hot chicken authentic tumeric truffaut hexagon try-hard chambray.</p>
      <div class="flex justify-center">
        <button class="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Button</button>
        <button class="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">Button</button>
      </div>
    </div>
    <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
      <img class="object-cover object-center rounded" alt="hero" src="https://dummyimage.com/720x600"/>
    </div>
  </div>
</section>
