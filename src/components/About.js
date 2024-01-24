import React from "react";
import aboutphotos from "../assets/aboutphotos.png";
import {
  FaLinkedinIn,
  FaGithub,
  FaMedium,
  FaInstagram,
  FaXTwitter,
  FaCodepen,
  FaDiscord,
  FaSpotify,
} from "react-icons/fa6";
import { SiBuymeacoffee } from "react-icons/si";

function About() {
  return (
    <div className="flex xl:flex-row  w-full my-auto flex-col-reverse mt-6">
      <div className="xl:w-2/5 xl:min-w-[510px]">
        <img src={aboutphotos} alt="" />
      </div>
      <div className="xl:w-3/5 flex flex-col space-y-10 my-auto mx-auto">
        <h1 className="text-5xl font-poppins text-gray-700 font-bold">
          👀 About Me
        </h1>
        <p className="text-xl font-roboto text-gray-600 text-justify">
          Hello, I am Abdullah. I was born in 2000 in Bolu, Turkey. After living
          in Bolu for 19 years, I moved to Muğla for my university education. I
          am currently a final year student in the Computer Engineering
          department at Muğla Sıtkı Koçman University. I am developing projects
          in the field of web development and especially working with MERN Stack
          technologies. I am also learning blockchain technologies and taking
          part in related projects. I am trying to explore the Web3 world and
          aim to continue my career in these areas.
        </p>
        <p className="text-xl font-roboto text-gray-600 text-justify">
          During my internship period, I worked at HAVELSAN, one of the leading
          technology companies in Turkey. This experience was much more than
          just an intern for me. By taking part in HAVELSAN's corporate culture,
          I had the chance to play an active role in real projects. In this
          process, I had the opportunity to improve my technical skills and
          increase my cooperation and communication skills by taking
          responsibility in a team.
        </p>
        <p className="text-xl font-roboto text-gray-600 text-justify">
          My interest in technology and the experiences I gained during my
          internship period motivate me even more. Taking part in creative
          projects, mastering new technologies and shaping my career in this
          field has become a lifestyle for me. I aim to take advantage of growth
          opportunities by sharing the knowledge and experience I have gained
          throughout my education life with you and signing more beautiful
          projects together. Are you ready to join this journey with me? Let's
          work together.
        </p>
        <div className="flex items-center md:items-start md:space-y-0 space-y-3 md:flex-row flex-col md:space-x-2 space-x-0">
          <div className="flex space-x-2">
            <a
              href="https://akkologluresume.s3.eu-north-1.amazonaws.com/akkologlu_cv.pdf"
              target="_blank"
              rel="noreferrer"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 md:font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800;"
            >
              Resume
            </a>
            <a
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 md:font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800;"
              href="mailto:abdullahakkol@gmail.com"
            >
              Contact
            </a>
          </div>
          <div className="flex space-x-1">
            <a
              href="https://www.linkedin.com/in/akkologlu/"
              target="_blank"
              rel="noreferrer"
              className="text-2xl bg-blue-700 text-white rounded-full p-2 hover:bg-white hover:text-blue-700 ease-in-out duration-200"
            >
              <FaLinkedinIn />
            </a>
            <a
              href="https://github.com/akkologlu"
              target="_blank"
              rel="noreferrer"
              className="text-2xl bg-black text-white rounded-full p-2 hover:bg-white hover:text-black ease-in-out duration-200"
            >
              <FaGithub />
            </a>
            <a
              href="https://medium.com/@akkologlu"
              target="_blank"
              rel="noreferrer"
              className="text-2xl bg-black text-white rounded-full p-2 hover:bg-white hover:text-black ease-in-out duration-200"
            >
              <FaMedium />
            </a>
            <a
              href="https://www.instagram.com/akkologluu"
              target="_blank"
              rel="noreferrer"
              className="text-2xl bg-red-600 text-white rounded-full p-2 hover:bg-white hover:text-red-600 ease-in-out duration-200"
            >
              <FaInstagram />
            </a>
            <a
              href="https://www.x.com/akkologluu"
              target="_blank"
              rel="noreferrer"
              className="text-2xl bg-black text-white rounded-full p-2 hover:bg-white hover:text-black ease-in-out duration-200"
            >
              <FaXTwitter />
            </a>
            <a
              href="https://www.buymeacoffee.com/akkologlu"
              target="_blank"
              rel="noreferrer"
              className="text-2xl bg-yellow-400 text-white rounded-full p-2 hover:bg-white hover:text-yellow-400 ease-in-out duration-200"
            >
              <SiBuymeacoffee />
            </a>
            <a
              href="https://codepen.io/akkologlu"
              target="_blank"
              rel="noreferrer"
              className="text-2xl bg-black text-white rounded-full p-2 hover:bg-white hover:text-black ease-in-out duration-200"
            >
              <FaCodepen />
            </a>
            <a
              href="discordapp.com/users/477908109013024768"
              target="_blank"
              rel="noreferrer"
              className="text-2xl bg-[#5865f2] text-white rounded-full p-2 hover:bg-white hover:text-[#5865f2] ease-in-out duration-200"
            >
              <FaDiscord />
            </a>
            <a
              href="https://open.spotify.com/user/akkologluu?si=666a92a60803446e"
              target="_blank"
              rel="noreferrer"
              className="text-2xl bg-[#1ED760] text-white rounded-full p-2 hover:bg-white hover:text-[#1ED760] ease-in-out duration-200"
            >
              <FaSpotify />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
