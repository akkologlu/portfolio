import React from "react";
import dvlimage from "../assets/dvlimage.png";
import flypqs from "../assets/flypqs.png";
import words from "../assets/2000words.png";
import "../style/portfolio.css";

function Portfolio() {
  return (
    <div className="flex flex-col space-y-12 mt-12 w-full ">
      <div className="portfolioRow">
        <div className="portfolioImg">
          <img src={dvlimage} alt="" />
        </div>
        <div className="portfolioContent">
          <h1>Digital Vehicle License</h1>
          <p className="title ">
            Digital Vehicle Licence is a project that aims to revolutionise the
            way vehicle records are managed and accessed. Using blockchain
            technology, it enables secure, transparent and unalterable record
            keeping. Features include accident records, maintenance and
            inspection records, past ownership details, and tracking the
            condition of vehicle parts.
          </p>
          <div className="buttons">
            <div className="button">
              <a
                href="https://digitalvehiclelicense.netlify.app/"
                className="link flex items-center"
                target="_blank"
                rel="noreferrer"
              >
                <p>DEMO</p>
                <svg
                  className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 10"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M1 5h12m0 0L9 1m4 4L9 9"
                  />
                </svg>
              </a>
            </div>
            <div className="button">
              <a
                href="https://github.com/akkologlu/DigitalVehicleLicense"
                className="link flex items-center"
                target="_blank"
                rel="noreferrer"
              >
                <p>CODE</p>
                <svg
                  className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 10"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M1 5h12m0 0L9 1m4 4L9 9"
                  />
                </svg>
              </a>
            </div>
          </div>
          <div className="badges">
            <img
              src="https://img.shields.io/badge/Solidity-363636?logo=solidity&logoColor=fff&style=flat-square"
              alt="Solidity Badge"
              className="badge"
            />
            <img
              src="https://img.shields.io/badge/Web3.js-F16822?logo=web3dotjs&logoColor=fff&style=flat-square"
              alt="Web3.js Badge"
              className="badge"
            ></img>
            <img
              src="https://img.shields.io/badge/React-61DAFB?logo=react&logoColor=000&style=flat-square"
              alt="React Badge"
              className="badge"
            />
            <img
              src="https://img.shields.io/badge/Tailwind%20CSS-06B6D4?logo=tailwindcss&logoColor=fff&style=flat-square"
              alt="Tailwind CSS Badge"
              className="badge"
            />
          </div>
        </div>
      </div>
      <hr />
      <div className="portfolioRow ">
        <div className="portfolioImg">
          <img src={words} alt="" />
        </div>
        <div className="portfolioContent">
          <h1>2000 Words</h1>
          <p className="title ">
            FlyPqs is a dynamic web application that enables users to search and
            list flights on specific dates and at airports. It stands out with
            its intuitive interface and visual animation presented at first use.
            Flight information is showcased with easy sorting and filtering
            features, prioritizing user experience.
          </p>
          <div className="buttons">
            <div className="button">
              <a
                href="https://flypqs.netlify.app/"
                className="link flex items-center"
                target="_blank"
                rel="noreferrer"
              >
                <p>DEMO</p>
                <svg
                  className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 10"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M1 5h12m0 0L9 1m4 4L9 9"
                  />
                </svg>
              </a>
            </div>
            <div className="button">
              <a
                href="https://github.com/akkologlu/FlightSearchApplication"
                className="link flex items-center"
                target="_blank"
                rel="noreferrer"
              >
                <p>CODE</p>
                <svg
                  className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 10"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M1 5h12m0 0L9 1m4 4L9 9"
                  />
                </svg>
              </a>
            </div>
          </div>
          <div className="badges">
            <img
              src="https://img.shields.io/badge/Node.js-393?logo=nodedotjs&logoColor=fff&style=flat-square"
              alt="Node.js Badge"
              className="badge"
            ></img>
            <img
              src="https://img.shields.io/badge/Express-000?logo=express&logoColor=fff&style=flat-square"
              alt="Express Badge"
              className="badge"
            ></img>
            <img
              src="https://img.shields.io/badge/React-61DAFB?logo=react&logoColor=000&style=flat-square"
              alt="React Badge"
              className="badge"
            />
            <img
              src="https://img.shields.io/badge/MongoDB-47A248?logo=mongodb&logoColor=fff&style=flat-square"
              alt="MongoDB Badge"
              className="badge"
            ></img>
            <img
              src="https://img.shields.io/badge/Tailwind%20CSS-06B6D4?logo=tailwindcss&logoColor=fff&style=flat-square"
              alt="Tailwind CSS Badge"
              className="badge"
            />
            <img
              src="https://img.shields.io/badge/Axios-5A29E4?logo=axios&logoColor=fff&style=flat-square"
              alt="Axios Badge"
              className="badge"
            ></img>
          </div>
        </div>
      </div>
      <hr />
      <div className="portfolioRow ">
        <div className="portfolioImg">
          <img src={flypqs} alt="" />
        </div>
        <div className="portfolioContent">
          <h1>FlyPqs</h1>
          <p className="title ">
            FlyPqs is a dynamic web application that enables users to search and
            list flights on specific dates and at airports. It stands out with
            its intuitive interface and visual animation presented at first use.
            Flight information is showcased with easy sorting and filtering
            features, prioritizing user experience.
          </p>
          <div className="buttons">
            <div className="button">
              <a
                href="https://flypqs.netlify.app/"
                className="link flex items-center"
                target="_blank"
                rel="noreferrer"
              >
                <p>DEMO</p>
                <svg
                  className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 10"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M1 5h12m0 0L9 1m4 4L9 9"
                  />
                </svg>
              </a>
            </div>
            <div className="button">
              <a
                href="https://github.com/akkologlu/FlightSearchApplication"
                className="link flex items-center"
                target="_blank"
                rel="noreferrer"
              >
                <p>CODE</p>
                <svg
                  className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 10"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M1 5h12m0 0L9 1m4 4L9 9"
                  />
                </svg>
              </a>
            </div>
          </div>
          <div className="badges">
            <img
              src="https://img.shields.io/badge/React-61DAFB?logo=react&logoColor=000&style=flat-square"
              alt="React Badge"
              className="badge"
            />
            <img
              src="https://img.shields.io/badge/Tailwind%20CSS-06B6D4?logo=tailwindcss&logoColor=fff&style=flat-square"
              alt="Tailwind CSS Badge"
              className="badge"
            />
            <img
              src="https://img.shields.io/badge/Axios-5A29E4?logo=axios&logoColor=fff&style=flat-square"
              alt="Axios Badge"
              className="badge"
            ></img>
          </div>
        </div>
      </div>
      <hr />
    </div>
  );
}

export default Portfolio;
