import React from "react";
import Image from "next/image";
import car from "../../assets/carMain.png";

const Main = () => {
  return (
    <section className="relative text-center justify-center mt-5 ">
      <main>
        <div className="relative grid grid-cols-[4fr_1fr] ">
          <Image
            className='mix-blend-screen mt-10 ml-10 rounded-full shadow-sm relative w-full h-[300px] bg-gradient-to-r from-black via-slate-50 to-black">'
            style={{
              width: "40%",
              height: "100%",
              overflow: "hidden",
              blur: "2px",
            }}
            src={car}
            alt="Car"
            objectFit="cover"
          />
          <div className="absolute top-1/2 ml-10 left-1/2 transform -translate-x-1/2 -translate-y-1/2  ">
            <h1 className="text-8xl text-gray-400 font-semibold bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent">
              Find the Perfect Parking Spot
            </h1>
            <p className="text-gray-500 text-2xl  ">
              Easy and Convenient Vehicle Parking Solutions
            </p>
          </div>
        </div>
        <div className="gap-5 flex justify-center text-center mt-24">
        <button className="border p-4 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent hover:animate-pulse"> Get Started </button>
          <button>Learn More →</button>
        </div>
      </main>
    </section>
  );
};

export default Main;
