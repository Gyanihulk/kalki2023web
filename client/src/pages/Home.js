import { React, useState, useEffect } from "react";
import heroBg from "../assets/video/hero_section.mp4";
import mobileHeroBg from "../assets/video/mobile_hero.mp4";
import "../style/home.css";


import { GoLocation, GoDeviceMobile, GoMail } from "react-icons/go";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo.png";
import { useStateContext } from "../context/FirebaseContext";

import CategoryContainer from "../components/home/CategoryContainer";
import PlansContainer from "../components/home/PlansContainer";
import TestimonialContainer from "../components/home/TestimonialContainer";

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
  const {user}=useStateContext()

  
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
<PlansContainer/>
    <TestimonialContainer/>

      {/* <div id="default-carousel" class="relative" data-carousel="static">
        <div class="absolute z-30 flex space-x-3 -translate-x-1/2 bottom-5 left-1/2">
          <button
            type="button"
            class="w-3 h-3 rounded-full"
            aria-current="false"
            aria-label="Slide 1"
            data-carousel-slide-to="0"
          ></button>
          <button
            type="button"
            class="w-3 h-3 rounded-full"
            aria-current="false"
            aria-label="Slide 2"
            data-carousel-slide-to="1"
          ></button>
          <button
            type="button"
            class="w-3 h-3 rounded-full"
            aria-current="false"
            aria-label="Slide 3"
            data-carousel-slide-to="2"
          ></button>
         </div>
        <button
          type="button"
          class="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
          data-carousel-prev
        >
          <span class="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg
              aria-hidden="true"
              class="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M15 19l-7-7 7-7"
              ></path>
            </svg>
            <span class="sr-only">Previous</span>
          </span>
        </button>
        <button
          type="button"
          class="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
          data-carousel-next
        >
          <span class="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg
              aria-hidden="true"
              class="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9 5l7 7-7 7"
              ></path>
            </svg>
            <span class="sr-only">Next</span>
          </span>
        </button>
      </div> */}

      

      <div className="contact-section px-20 grid sm:grid-cols-1 md:grid-cols-3 pb-5">
        <div className="flex w-80 h-24 p-5">
          <div>
            <GoLocation className="w-14 h-14 rounded-full bg-orange-600 p-3 mr-3" />
          </div>
          <div className="location align-middle">
          Sitapur Bypass road, Harilok colony, Sitapur, Jwalapur, Uttarakhand 249407
          </div>
        </div>
        <div className="flex w-80 h-24 p-5">
          <div>
            <GoDeviceMobile className="w-14 h-14 rounded-full bg-orange-600 p-3 mr-3" />
          </div>
          <div className="mobile align-middle mt-3">+91 7017368626</div>
        </div>
        <div className="flex w-80 h-24 p-5">
          <div>
            <GoMail className="w-14 h-14 rounded-full bg-orange-600 p-3 mr-3" />
          </div>
          <div className="email mt-3">contact@kalkiakhada.com</div>
        </div>
      </div>

      <footer className="px-20 py-8 h-auto bg-black">
        <div className="flex justify-between flex-wrap">
          <div className="w-96">
            <Link to="/">
              <img width={200} src={logo} alt="Kalki Akhara" />
            </Link>
            <p>
              The Academy which focuses on All-round fitness along with the
              dream physique.
            </p>
            <p>
              Our coaches specialise in workouts that are Bodyweight centric
              that enhance your Strength, Power, endurance and Flexibility.
            </p>
            <p>
              Calisthenics, Gymnastics, Functional, Slacklining, Yoga to name a
              few
            </p>
          </div>
          <div className="">
            <h3 className="text-3xl mb-2">Quick links</h3>
            <ul>
              <Link>
                <li>Terms and Conditions</li>
              </Link>
              <Link>
                <li>Privacy Policy</li>
              </Link>
              <Link>
                <li>Refund Policy</li>
              </Link>
              <Link>
                <li>Contact Us</li>
              </Link>
            </ul>
          </div>
          <div className="">
            <h3 className="text-3xl mb-2">Useful links</h3>
            <ul>
              <Link>
                <li>Login</li>
              </Link>
              <Link>
                <li>Plans</li>
              </Link>
              <Link>
                <li>Free Demo Class</li>
              </Link>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Home;
