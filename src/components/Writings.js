import React from "react";
import image from "../assets/writing.svg";

function Home() {
  return (
    <div className="flex-grow flex flex-col xl:flex-row items-center w-full xl:justify-between justify-center ">
      <div className=" xl:space-y-5 xl:w-3/5 xl:text-start text-center flex flex-col xl:items-start items-center space-y-6 mr-0 xl:mr-36">
        <h1 className="text-5xl font-poppins text-gray-700 font-bold">
          ✍🏼 Writings
        </h1>
        <a
          className="w-full bg-[#2564eb1e] font-roboto  text-blue-700 rounded-lg px-6 py-3 text-lg"
          href="https://coinsbench.com/writing-the-first-smart-contract-08ecf9b21dc8"
          target="_blank"
          rel="noreferrer"
        >
          Writing the First Smart Contract
        </a>
        <a
          className="w-full bg-[#2564eb1e] font-roboto  text-blue-700 rounded-lg px-6 py-3 text-lg"
          href="https://akkologlu.medium.com/hello-world-the-story-of-the-legendary-first-step-in-programming-bb06a623f7f7"
          target="_blank"
          rel="noreferrer"
        >
          “Hello, World!”: The Story of the Legendary First Step in Programming
        </a>
        <a
          className="w-full bg-[#2564eb1e] font-roboto  text-blue-700 rounded-lg px-6 py-3 text-lg"
          href="https://akkologlu.medium.com/typescript-data-types-b3f844c1b991"
          target="_blank"
          rel="noreferrer"
        >
          Typescript Data Types
        </a>
        <a
          className="w-full bg-[#2564eb1e] font-roboto  text-blue-700 rounded-lg px-6 py-3 text-lg"
          href="https://akkologlu.medium.com/react-formik-and-yup-7f3a43a42454"
          target="_blank"
          rel="noreferrer"
        >
          React Formik and Yup
        </a>
        <a
          className="w-full bg-[#2564eb1e] font-roboto  text-blue-700 rounded-lg px-6 py-3 text-lg"
          href="https://akkologlu.medium.com/react-router-cd2eba75be76"
          target="_blank"
          rel="noreferrer"
        >
          React Router
        </a>
        {/* <div className="group relative inline-block">
          <button className="bg-blue-500 text-white font-semibold py-2 px-4 rounded inline-flex items-center">
            Hover Me
          </button>
          <div className="hidden group-hover:block absolute z-10 mt-2">
            <p className="bg-white shadow-md rounded py-2 px-4">Item 1</p>
            <p className="bg-white shadow-md rounded py-2 px-4">Item 2</p>
            <p className="bg-white shadow-md rounded py-2 px-4">Item 3</p>
          </div>
        </div> */}
      </div>
      <div className="xl:w-2/5 hidden xl:block">
        <img src={image} alt="" />
      </div>
    </div>
  );
}

export default Home;
