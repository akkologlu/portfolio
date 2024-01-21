import React from "react";
import { NavLink } from "react-router-dom";
import "../style/navbar.css";

function Navbar() {
  return (
    <nav className="flex justify-between items-center" id="navbar">
      <div>
        <a href="/">
          <p className="font-poppins text-3xl font-bold text-gray-700">
            Akkologlu
          </p>
        </a>
      </div>
      <div className="flex space-x-4 text-blue-600 font-roboto text-xl ">
        <NavLink
          to="/"
          className=" hover:bg-[#dbeafea6] rounded-xl py-2 px-4 ease-in-out duration-200"
        >
          home
        </NavLink>
        <NavLink
          to="/portfolio"
          className="rounded-xl py-2 px-4 hover:bg-[#dbeafea6] ease-in-out duration-200"
        >
          portfolio
        </NavLink>
        <NavLink
          to="/about"
          className="rounded-xl py-2 px-4 hover:bg-[#dbeafea6] ease-in-out duration-200"
        >
          about
        </NavLink>
      </div>
      <div className="rounded-xl  shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px] px-6 py-3 text-blue-600 text-xl font-roboto hover:scale-110 duration-100">
        <a href="mailto:abdullahakkol@gmail.com">Contact</a>
      </div>
    </nav>
  );
}

export default Navbar;
