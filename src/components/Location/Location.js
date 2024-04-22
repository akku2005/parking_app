import React from "react";

const Contact = () => {
  return (
    <section
      className="text-gray-400  body-font relative ml-10 mr-10"
      id="location"
    >
      <p className="text-center mt-10  text-2xl">Location</p>{" "}
      <div className="container px-5 py-20 mx-auto flex sm:flex-nowrap flex-wrap">
        {" "}
        <div className="lg:w-2/3 md:w-1/2 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10  overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
          {" "}
          <iframe
            style={{
              filter: "grayscale(0) contrast(1.2) opacity(0.16)",
              width: "100%",
              height: "100%",
              scrolling: "no",
              border: 0,
            }}
            title="map"
            className="absolute inset-0"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3743.6241222576723!2d85.7783695!3d20.2329347!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a19a7cfe6ce44f5%3A0x3676e95f012e9faf!2sAIIMS%20Rd%2C%20Bhubaneswar%2C%20Odisha%20751019!5e0!3m2!1sen!2sin!4v1710350916171!5m2!1sen!2sin"
          ></iframe>{" "}
          <div className="bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 relative flex flex-wrap py-6  shadow-md">
            {" "}
            <div className="lg:w-1/2 px-6">
              {" "}
              <h2 className="title-font font-semibold text-white tracking-widest text-xs">
                ADDRESS
              </h2>{" "}
              <p className="mt-1">
                BHUBANESWAR RAILWAY STATION AIIMS HOSPITAL. ROUTE-28
              </p>{" "}
            </div>{" "}
            <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
              {" "}
              <h2 className="title-font font-semibold text-white tracking-widest text-xs">
                EMAIL
              </h2>{" "}
              <a className="text-indigo-400 leading-relaxed">
                asakashsahu20@gmail.com
              </a>{" "}
              <h2 className="title-font font-semibold text-white tracking-widest text-xs mt-4">
                PHONE
              </h2>{" "}
              <p className="leading-relaxed">+91 7420-9877-28</p>{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
        <div className="lg:w-1/3 md:w-1/2 flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
          {" "}
          <h2 className="text-white text-lg mb-1 font-medium title-font">
            Contact
          </h2>{" "}
          <p className="leading-relaxed mb-5">
            Post-ironic portland shabby chic echo park, banjo fashion axe
          </p>{" "}
          <div className="relative mb-4 ">
            {" "}
            <label for="name" className="leading-7 text-sm text-gray-400 ">
              Name
            </label>{" "}
            <input
              type="text"
              id="name"
              name="name"
              className="w-full bg-white/5 backdrop-blur-sm rounded-lg  border-white/10   border  focus:border-rose-500 focus:ring-2 focus:ring-rose-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />{" "}
          </div>{" "}
          <div className="relative mb-4">
            {" "}
            <label for="email" className="leading-7 text-sm text-gray-400">
              Email
            </label>{" "}
            <input
              type="email"
              id="email"
              name="email"
              className="w-full bg-white/5 backdrop-blur-sm rounded-lg  border-white/10   border  focus:border-rose-500 focus:ring-2 focus:ring-rose-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />{" "}
          </div>{" "}
          <div className="relative mb-4">
            {" "}
            <label for="message" className="leading-7 text-sm text-gray-400">
              Message
            </label>{" "}
            <textarea
              id="message"
              name="message"
              className="w-full bg-gray-800 rounded border border-gray-700 focus:border-rose-500 focus:ring-2 focus:ring-rose-900 h-32 text-base outline-none text-gray-100 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
            ></textarea>
          </div>
          <button className="text-white bg-gradient-to-r  from-black via-pink-600 to-black border-0 py-2 px-6 focus:outline-none  rounded text-lg">
            Send
          </button>
          <p className="text-xs text-gray-400 text-opacity-90 mt-3">
            Chicharrones blog helvetica normcore iceland tousled brook viral
            artisan.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
