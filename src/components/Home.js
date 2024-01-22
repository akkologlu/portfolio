import React from "react";
import image from "../assets/programmingsvg.svg";

function Home() {
  return (
    <div className="flex-grow flex flex-col xl:flex-row items-center w-full xl:justify-between justify-center ">
      <div className=" xl:space-y-10 xl:w-3/5 xl:text-start text-center flex flex-col xl:items-start items-center space-y-6">
        <h1 className="2xl:text-7xl xl:6xl md:text-6xl text-4xl font-poppins text-gray-700  ">
          👋 Hi, I'm <span className="text-blue-600">Abdullah</span>
        </h1>
        <p className="md:text-2xl text-lg text-gray-500 font-roboto xl:w-full w-3/4">
          I'm a passionate web developer who loves crafting digital experiences
          that make a difference.
        </p>
        <button className="rounded-2xl md:px-12 md:py-6 bg-blue-600 text-white px-6 py-3 md:text-2xl text-lg">
          <a href="/portfolio">Browse Portfolio</a>
        </button>
      </div>
      <div className="xl:w-2/5 hidden xl:block">
        <img src={image} alt="" />
      </div>
      <div className="md:hidden block mt-6 rounded-xl  shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px] px-6 py-3 text-blue-600 text-xl font-roboto hover:scale-110 duration-100">
        <a href="mailto:abdullahakkol@gmail.com">Contact</a>
      </div>
    </div>
  );
}

export default Home;
