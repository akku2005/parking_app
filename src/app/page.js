import React from "react";
import Navbar from "@/components/Navbar/Navbar";
import Hero from "../components/Hero/Hero";
import Main from "../components/Main/Main";
import Features from "@/components/Features/Features";
import Pricing from "@/components/Pricing/Pricing";
import Location from "@/components/Location/Location";
import Footer from "@/components/Footer/Footer";

const page = () => {
  return (
    <div className="bg-black">
      <Navbar />
      <Main />
      <Features />
      <Pricing />
      <Location />
      <Hero />
      <Footer />
    </div>
  );
};

export default page;
