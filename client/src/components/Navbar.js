import { React, useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "../style/navbar.css";
import logo from "../assets/images/logo.png";
import { GoThreeBars, GoX } from "react-icons/go";

const Navbar = () => {
  const pathname = useLocation().pathname;
  const [isMobileNav, setIsMobileNav] = useState(false);
  const [isMaxHeight, setIsMaxHeight] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", (event) => {
      console.log("Scrolling");
      if (window.scrollY > 400) {
        setIsMaxHeight(true);
      } else {
        setIsMaxHeight(false);
      }
    });
  });
  return (
    <>
      <nav
        className={`${
          pathname === "/" ? "md:bg-gradient-to-b from-black" : "bg-black"
        } ${isMaxHeight ? "bg-black" : ""}`}
      >
        <div className="logo w-40">
          <Link to="/">
            <img src={logo} alt="Kalki Akhara" />
          </Link>
        </div>
        <div
          className={`flex justify-between ${
            isMobileNav ? "mobile-nav" : "navbar"
          }`}
        >
          <ul>
            <li>
              <Link
                to="/"
                className={`text-gray-200 font-size-2 text-lg font-thin hover:text-orange-500 uppercase tracking-widest ${
                  pathname === "/" ? "text-orange-500" : ""
                }`}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/plans"
                className={`text-gray-200 font-size-2 text-lg font-thin hover:text-orange-500 uppercase tracking-widest ${
                  pathname === "/plans" ? "text-orange-500" : ""
                }`}
              >
                Plans
              </Link>
            </li>
            <li>
              <Link
                to="/revolution"
                className={`text-gray-200 font-size-2 text-lg font-thin hover:text-orange-500 uppercase tracking-widest ${
                  pathname === "/revolution" ? "text-orange-500" : ""
                }`}
              >
                Revolution
              </Link>
            </li>
            <li>
              <Link
                to="/trainers"
                className={`text-gray-200 font-size-2 text-lg font-thin hover:text-orange-500 uppercase tracking-widest ${
                  pathname === "/trainers" ? "text-orange-500" : ""
                }`}
              >
                Trainers
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className={`text-gray-200 font-size-2 text-lg font-thin hover:text-orange-500 uppercase tracking-widest ${
                  pathname === "/about" ? "text-orange-500" : ""
                }`}
              >
                About
              </Link>
            </li>
          </ul>
          <div className="flex gap-6 items-center">
            <Link
              to="#/login"
              className={`text-gray-200 font-size-2 text-lg font-thin hover:text-orange-500 uppercase tracking-widest ${
                pathname === "/login" ? "text-orange-500" : ""
              }`}
            >
              Login
            </Link>
            <Link
              to="/register"
              className={` ${pathname === "/login" ? "text-orange-500" : ""}`}
            >
              <button
                className="bg-orange-600 font-size-2 text-lg font-thin text-gray-200 tracking-wider py-1 px-3 rounded focus:outline-none focus:shadow-outline"
                type="button"
              >
                Sign Up
              </button>
            </Link>
          </div>
        </div>
        <div className="menu-icon md:hidden pt-2">
          {isMobileNav ? (
            <GoX size={26} onClick={() => setIsMobileNav(!isMobileNav)} />
          ) : (
            <GoThreeBars
              size={26}
              onClick={() => setIsMobileNav(!isMobileNav)}
            />
          )}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
