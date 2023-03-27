import { React, useState, useEffect } from "react";
import heroBg from "../assets/video/hero_section.mp4";
import mobileHeroBg from "../assets/video/mobile_hero.mp4";
import "../style/home.css";

import { GoLocation, GoDeviceMobile, GoMail } from "react-icons/go";
import { Link } from "react-router-dom";

import { useStateContext } from "../context/FirebaseContext";

import CategoryContainer from "../components/home/CategoryContainer";
import PlansContainer from "../components/home/PlansContainer";
import TestimonialContainer from "../components/home/TestimonialContainer";
import Footer from "../components/Footer";

const Home = () => {
  const [isMobileWidth, setIsMobileWidth] = useState(false);
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    window.addEventListener("resize", () => setWidth(window.innerWidth));
    if (width < 766) {
      setIsMobileWidth(true);
    } else {
      setIsMobileWidth(false);
    }
  }, [width]);
  const { user } = useStateContext();

  return (
    <>
      <div className="hero-section">
        <video
          className={`hero-bg ${isMobileWidth ? "top-14" : "top-0"}`}
          src={isMobileWidth ? mobileHeroBg : heroBg}
          autoPlay
          loop
          muted
        ></video>
      </div>

      <CategoryContainer />
      <PlansContainer />
      <TestimonialContainer />
      <Footer />
    </>
  );
};

export default Home;
