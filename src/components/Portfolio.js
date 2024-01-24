import React from "react";
import dvlimage from "../assets/dvlimage.png";
import flypqs from "../assets/flypqs.png";
import words from "../assets/2000words.png";
import coverletter from "../assets/coverletter.png";
import watchlyst from "../assets/watchlyst.png";
import skyhub from "../assets/skyhub.png";
import havelsan from "../assets/havelsan.jpg";
import "../style/portfolio.css";

function Portfolio() {
  return (
    <div className="flex flex-col space-y-12 mt-12 w-full mb-12">
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
      <div className="portfolioRow">
        <div className="portfolioImg">
          <img src={havelsan} alt="" />
        </div>
        <div className="portfolioContent">
          <h1>Intership Task</h1>
          <p className="title ">
            During my internship at HAVELSAN A.Ş., I contributed to a digital
            transformation project. I developed a system that allows a company
            to view and organise personnel and project data through a management
            panel. In this management panel, I designed an interface that lists
            the details of projects and added sorting, filtering and file upload
            features to improve data retrieval. I also created a multi-step form
            to add new projects. The challenges I faced in the project included
            file upload and profile photo upload processes using the FormData
            function. Integrating the login page and authentication process into
            the project also came with its own challenges, but I successfully
            completed it by following these steps. I believe that the
            experiences I gained in this project will form an important
            foundation in my future professional life.
          </p>
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
            2000Words is a practical and interactive educational platform for
            learning the basic 2000 words in the English language. Users can
            easily learn and practice unfamiliar words with smart flash cards.
            Enrich your language skills and make your communication more
            effective with the power of 2000 words.
          </p>
          <div className="buttons">
            <div className="button">
              <a
                href="https://github.com/akkologlu/2000Words"
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
                href="https://github.com/akkologlu/2000Words"
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
          <img src={coverletter} alt="" />
        </div>
        <div className="portfolioContent">
          <h1>Cover Letter Generator</h1>
          <p className="title ">
            This project aims to develop a software application that provides
            users with the opportunity to create a resume cover letter quickly
            and effectively. After entering their personal information and
            relevant details about the position they are applying for, users
            will have a professionally crafted cover letter generated by
            artificial intelligence.
          </p>
          <div className="buttons">
            <div className="button">
              <a
                href="https://coverletteraigenerator.netlify.app/"
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
                href="https://github.com/akkologlu/coverLetterAI"
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
              src="https://img.shields.io/badge/OpenAI-412991?logo=openai&logoColor=fff&style=flat-square"
              alt="OpenAI Badge"
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
          <img src={watchlyst} alt="" />
        </div>
        <div className="portfolioContent">
          <h1>Watchlyst</h1>
          <p className="title ">
            Watchlyst, using the TMDB API, is a React-based platform allowing
            users to easily create and manage personalized watchlists. Discover
            the latest and popular movies, search for specific titles, and
            access detailed information on individual movie pages. Tailwind CSS
            ensures a sleek design. After watching, effortlessly remove movies
            from your watchlist. Streamlining movie discovery and user control,
            Watchlyst offers a concise and user-friendly experience.
          </p>
          <div className="buttons">
            <div className="button">
              <a
                href="https://watchlyst.netlify.app/"
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
                href="https://github.com/akkologlu/watchlist"
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
              src="https://img.shields.io/badge/The%20Movie%20Database-01B4E4?logo=themoviedatabase&logoColor=fff&style=flat-square"
              alt="The Movie Database Badge"
              className="badge"
            />
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
            <img
              src="https://img.shields.io/badge/Swiper-6332F6?logo=swiper&logoColor=fff&style=flat-square"
              alt="Swiper Badge"
              className="badge"
            ></img>
          </div>
        </div>
      </div>
      <hr />
      <div className="portfolioRow ">
        <div className="portfolioImg">
          <img src={skyhub} alt="" />
        </div>
        <div className="portfolioContent">
          <h1>SkyHub</h1>
          <p className="title ">
            In this project, a user-friendly website has been crafted, allowing
            users to seamlessly view the current weather page alongside location
            information. The search page enables effortless checking of the
            weather for any desired location. Importantly, cities can be
            favorited, streamlining the tracking of weather information for
            preferred locations
          </p>
          <div className="buttons">
            <div className="button">
              <a
                href="https://skyhub.netlify.app/"
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
                href="https://github.com/akkologlu/SkyHub"
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
    </div>
  );
}

export default Portfolio;
