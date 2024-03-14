import React from "react";
import Image from "next/image";
import forGerPass from "../../assets/forgerPass.jpg";
import Link from "next/link";

const page = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 justify-center">
      <div className="hidden sm:block">
        <Image
          className="w-full h-full object-cover"
          src={forGerPass}
          alt="forget-password "
          style={{
            position: "absolute",
            width: "50%",
            height: "100%",
          }}
        ></Image>
      </div>
      <div className="flex flex-col justify-center items-center mt-36">
  <form className="max-w-[400px] w-full mx-auto rounded-lg bg-white/5 backdrop-blur-sm  border border-white/10 p-8 px-8">
    <h2 className="text-3xl dark:text-white font-sans text-center">
      Forgot Password{" "}
    </h2>
    <div className="flex flex-col text-gray-400 py-2">
      <label>Email</label>
      <input
        className="rounded-lg bg-white/5 backdrop-blur-sm  border border-white/10 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none"
        type="email"
        required
        placeholder="Enter your email"
      />
    </div>
          <div className="py-2">
          <button className="w-full my-5 py-2 bg-gradient-to-r from-black via-pink-500 to-black shadow-rose-500 text-white font-semibold rounded-lg">
            Login
          </button>
          <Link href="/login">
          <button className="hover:text-pink-500 " >Login..?</button>
          </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default page;
