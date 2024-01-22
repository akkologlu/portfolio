import React, { useState, useRef } from "react";
import { NavLink } from "react-router-dom";
import "../style/navbar.css";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const btnRef = useRef(null);

  const handleToggleMenu = () => {
    setIsMenuOpen((prevState) => !prevState);
    btnRef.current.classList.toggle("open");
  };

  const handleMenuItemClick = () => {
    setIsMenuOpen(false);
    btnRef.current.classList.remove("open");
  };

  return (
    <div>
      <nav className="container relative mx-auto " id="navbar">
        <div className="flex items-center justify-between  ">
          <div className="z-30">
            <a href="/">
              <p className="font-poppins text-3xl font-bold text-gray-700">
                Akkologlu
              </p>
            </a>
          </div>
          <div className="md:flex hidden space-x-4 text-blue-600 font-roboto text-xl ">
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
          <div className="md:hidden">
            <button
              ref={btnRef}
              type="button"
              className="z-40 block hamburger md:hidden focus:outline-none"
              onClick={handleToggleMenu}
            >
              <span className="hamburger-top"></span>
              <span className="hamburger-middle"></span>
              <span className="hamburger-bottom"></span>
            </button>
          </div>
          <div className="md:block hidden rounded-xl  shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px] px-6 py-3 text-blue-600 text-xl font-roboto hover:scale-110 duration-100">
            <a href="mailto:abdullahakkol@gmail.com">Contact</a>
          </div>
        </div>
      </nav>
      <div
        ref={menuRef}
        className={`z-10 absolute top-0 bottom-0 left-0 flex-col self-end w-full min-h-screen py-1 pt-40 pl-12 space-y-3 text-lg text-primary uppercase bg-white ${
          isMenuOpen ? "flex" : "hidden"
        }`}
      >
        <NavLink
          to="/"
          className=" hover:text-secondary"
          onClick={handleMenuItemClick}
        >
          home
        </NavLink>
        <NavLink
          to="/portfolio"
          className=" hover:text-secondary"
          onClick={handleMenuItemClick}
        >
          portfolio
        </NavLink>
        <NavLink
          to="/about"
          className=" hover:text-secondary"
          onClick={handleMenuItemClick}
        >
          about
        </NavLink>
      </div>
    </div>
  );
}

export default Navbar;
