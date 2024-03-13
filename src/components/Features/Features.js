import React from "react";

const Features = () => {
  return (
    <section className="text-center mt-28">
      <main>
        <div>
          <h2 className="font-bold text-gray-400">FEATURES</h2>
          <h1 className="text-6xl mt-10 h-20  bg-gradient-to-r from-black via-pink-600 to-black bg-clip-text text-transparent">
            Convenient Features for Your Parking Needs
          </h1>
          <p className="text-2xl font-sans mt-4 text-gray-400">
            Explore the features that make parking hassle-free and secure
          </p>
        </div>
        <div className="grid grid-cols-2 gap-16 mt-20 m-5 ml-16 mr-16">
          {" "}
          <div className="group p-14 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 transition-transform duration-300 transform hover:scale-105">
            {" "}
            <div className="flex items-center group ">
              {" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 text-gray-400 group-hover:text-gray-600 transition-colors duration-300"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12c.441.439-.441 1.152 0 1.591L10.046 22.046C9.607 22.488 9 22.18 9 21.75V12h1.25z"
                />{" "}
              </svg>{" "}
              <h2 className="text-xl text-white ml-4 group-hover:text-gray-400 transition-colors duration-300">
                Easy Booking
              </h2>{" "}
            </div>{" "}
            <p className="text-gray-600 group-hover:text-rose-500 transition-colors duration-300">
              Quickly reserve your parking spot online <span className="text-lime-400 text-2xl"> .</span>
            </p>{" "}
          </div>{" "}
          <div className="group p-14 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 transition-transform duration-300 transform hover:scale-105">
            {" "}
            <div className="flex items-center group ">
              {" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 text-gray-400 group-hover:text-gray-600 transition-colors duration-300"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12c.441.439-.441 1.152 0 1.591L10.046 22.046C9.607 22.488 9 22.18 9 21.75V12h1.25z"
                />{" "}
              </svg>{" "}
              <h2 className="text-xl text-white ml-4 group-hover:text-gray-400 transition-colors duration-300">
                Secure Payments
              </h2>{" "}
            </div>{" "}
            <p className="text-gray-600 group-hover:text-rose-500 transition-colors duration-300">
              Safe and secure payment options available <span className="text-lime-400 text-2xl"> .</span>
            </p>{" "}
          </div>{" "}
          <div className="group p-14 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 transition-transform duration-300 transform hover:scale-105">
            {" "}
            <div className="flex items-center group ">
              {" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 text-gray-400 group-hover:text-gray-600 transition-colors duration-300"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12c.441.439-.441 1.152 0 1.591L10.046 22.046C9.607 22.488 9 22.18 9 21.75V12h1.25z"
                />{" "}
              </svg>{" "}
              <h2 className="text-xl text-white ml-4 group-hover:text-gray-400 transition-colors duration-300">
                24/7 Access
              </h2>{" "}
            </div>{" "}
            <p className="text-gray-600 group-hover:text-rose-500 transition-colors duration-300">
              Park your vehicle anytime with round-the-clock access <span className="text-lime-400 text-2xl"> .</span>
            </p>{" "}
          </div>{" "}
          <div className="group p-14 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 transition-transform duration-300 transform hover:scale-105">
            {" "}
            <div className="flex items-center group ">
              {" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 text-gray-400 group-hover:text-gray-600 transition-colors duration-300"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12c.441.439-.441 1.152 0 1.591L10.046 22.046C9.607 22.488 9 22.18 9 21.75V12h1.25z"
                />{" "}
              </svg>{" "}
              <h2 className="text-xl text-white ml-4 group-hover:text-gray-400 transition-colors duration-300">
                Location Tracking
              </h2>{" "}
            </div>{" "}
            <p className="text-gray-600 group-hover:text-rose-500 transition-colors duration-300">
              Track the location of your parked vehicle for added security <span className="text-lime-400 text-2xl"> .</span>
            </p>{" "}
          </div>{" "}
        </div>
      </main>
    </section>
  );
};

export default Features;
