import { React, useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "../style/navbar.css";
import logo from "../assets/images/logo.png";
import { GoThreeBars, GoX } from "react-icons/go";
import Login from "./Login";
import Register from "./Register";
import { useStateContext } from "../context/FirebaseContext";

const Navbar = () => {
  const pathname = useLocation().pathname;
  const [isMobileNav, setIsMobileNav] = useState(false);
  const [isMaxHeight, setIsMaxHeight] = useState(false);
  const [showLoginForm, setShowLoginForm] = useState(false);
  const [showRegisterForm, setShowRegisterForm] = useState(false);
  const { isLoggedIn } = useStateContext();
  useEffect(() => {
    window.addEventListener("scroll", (event) => {
      if (window.scrollY > 400) {
        setIsMaxHeight(true);
      } else {
        setIsMaxHeight(false);
      }
    });
  });
  const navLinks = [
    { label: "Home", pathName: "/" },
    { label: "Plans", pathName: "/" },
    { label: "Revolution", pathName: "/" },
    { label: "Trainers", pathName: "/" },
    { label: "About", pathName: "/" },
  ];
  return (
    <>
      <nav
        className={`${
          pathname === "/" ? "md:bg-gradient-to-b from-black z-10" : "bg-black z-10"
        } ${isMaxHeight ? "bg-black" : ""}`}
      >
        <div className="logo w-40 flex">
          <div className="menu-icon md:hidden">
            {isMobileNav ? (
              <GoX size={26} onClick={() => setIsMobileNav(!isMobileNav)} />
            ) : (
              <GoThreeBars
                size={26}
                onClick={() => setIsMobileNav(!isMobileNav)}
              />
            )}
          </div>
          <Link to="/">
            <img src={logo} alt="Kalki Akhara" />
            {/* {setIsMobileNav(!isMobileNav)} */}
          </Link>
        </div>
        <div
          className={`flex  ${
            isMobileNav ? "mobile-nav" : "navbar justify-between"
          }`}
        >
          <ul>
            {navLinks.map((item) => (
              <li key={item?.label}>
                <button onClick={() => setIsMobileNav(!isMobileNav)}>
                  <Link
                    to={item?.pathName}
                    className={`text-gray-200 font-size-2 text-lg font-thin hover:text-orange-500 uppercase tracking-widest ${
                      pathname === "/" ? "text-orange-500" : ""
                    }`}
                  >
                    {item.label}
                  </Link>
                </button>
              </li>
            ))}
          </ul>
          <div className="flex gap-6 items-center">
            {isLoggedIn ? (
              <Link
                to="dashboard"
                className={`text-gray-200 font-size-2 text-lg font-thin hover:text-orange-500 uppercase tracking-widest `}
                onClick={() =>
                  isMobileNav ? setIsMobileNav(!isMobileNav) : null
                }
              >
                Dashboard
              </Link>
            ) : (
              <>
                <Link
                  className={`text-gray-200 font-size-2 text-lg font-thin hover:text-orange-500 uppercase tracking-widest `}
                  onClick={() => (
                    isMobileNav ? setIsMobileNav(!isMobileNav) : null,
                    setShowLoginForm(!showLoginForm),
                    showRegisterForm
                      ? setShowRegisterForm(!showRegisterForm)
                      : null
                  )}
                >
                  Login
                </Link>
                <Link
                  className={`text-gray-200 font-size-2 text-lg font-thin hover:text-orange-500 uppercase tracking-widest `}
                  onClick={() => (
                    isMobileNav ? setIsMobileNav(!isMobileNav) : null,
                    setShowRegisterForm(!showRegisterForm),
                    showLoginForm ? setShowLoginForm(!showLoginForm) : null
                  )}
                >
                  Sign Up
                </Link>
              </>
            )}
          </div>
        </div>
      </nav>
      {showLoginForm ? <Login /> : ""}
      {showRegisterForm ? <Register /> : ""}
    </>
  );
};

export default Navbar;
