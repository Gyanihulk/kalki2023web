import { React, useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import heroBg from "../assets/video/hero_section.mp4";
import mobileHeroBg from "../assets/video/mobile_hero.mp4";
import "../style/home.css";
import offerImg1 from "../assets/images/home/offer-card/image-1.jpg";
import TestimonialCard from "../components/home/TestimonialCard";
import { GoLocation, GoDeviceMobile, GoMail } from "react-icons/go";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo.png";

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
  return (
    <>
      <Navbar />
      <div className="hero-section">
        <video
          className={`hero-bg ${isMobileWidth ? "top-14" : "top-0"}`}
          src={isMobileWidth ? mobileHeroBg : heroBg}
          autoPlay
          loop
          muted
        ></video>
      </div>

      <div className="service-section uppercase text-center mt-8">
        <h4 className="text-2xl text-orange-500">our services</h4>
        <h4 className="text-3xl font-bold">what we can offer</h4>
        <div className="service-offer grid sm:grid-cols-1 md:grid-cols-2 place-items-center mt-6 gap-y-8 md:mx-10">
          <div
            className="offer-box bg-black w-10/12 h-80 rounded-xl 
                      duration-500 hover:scale-105"
          >
            <img src={offerImg1} alt="" className="w-full h-4/5 rounded-t-lg" />
            <h3 className="mt-2 font-semibold text-md px-2">
              Calisthenics / Gymnastics / mma / kickboxing / slacklining
            </h3>
          </div>
          <div className="offer-box bg-black w-10/12 h-80 rounded-xl duration-500 hover:scale-105">
            <img src={offerImg1} alt="" className="w-full h-4/5 rounded-t-lg" />
            <h3 className="mt-3 md:mt-6 font-semibold text-md ">
              Kids Fitness
            </h3>
          </div>
          <div className="offer-box bg-black w-10/12 h-80 rounded-xl duration-500 hover:scale-105">
            <img src={offerImg1} alt="" className="w-full h-4/5 rounded-t-lg" />
            <h3 className="mt-3 md:mt-6 font-semibold text-md ">
              Fat / weight loss
            </h3>
          </div>
          <div className="offer-box bg-black w-10/12 h-80 rounded-xl duration-500 hover:scale-105">
            <img src={offerImg1} alt="" className="w-full h-4/5 rounded-t-lg" />
            <h3 className="mt-3 md:mt-6 font-semibold text-md ">
              General Fitness
            </h3>
          </div>
        </div>
      </div>

      <div className="mt-10 px-20 mb-10">
        <hr />
        <div className="text-center mt-4">
          <h3 className="text-2xl text-orange-500">OUR PLANS</h3>
          <h3 className="text-3xl font-bold">GENERAL PLANS</h3>
        </div>
        <div className="flex justify-between flex-wrap mt-6">
          <div className="w-80 h-94 border p-6 flex flex-col justify-center bg-gradient-to-t from-gray-900 to-black rounded-md">
            <div className="plan-item text-center">
              <h3 className="text-3xl">1 Month Membership</h3>
              <div className="plan-price mt-1">
                <h2 className="text-3xl font-bold text-orange-500">₹ 1,000</h2>
              </div>
              <button className="bg-slate-800 hover:bg-slate-700 text-white py-2 px-8 rounded mt-5">
                Enroll now
              </button>
              <div className="text-left mt-6">
                <ul className="list-disc pl-6">
                  <li>
                    Different Batches for Fat Loss, General Fitness, Athletic
                    Skills and Kids Fitness
                  </li>
                  <li>Training under expert supervision</li>
                  <li>Batch formation as per fitness level and goals</li>
                  <li>Flexible timing community</li>
                  <li>Free access to workshops and events</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="w-80 h-94 border p-6 flex flex-col justify-center bg-gradient-to-t from-gray-900 to-black rounded-md">
            <div className="plan-item text-center">
              <h3 className="text-3xl">3 Month Membership</h3>
              <div className="plan-price mt-1">
                <h2 className="text-3xl font-bold text-orange-500">₹ 2,000</h2>
              </div>
              <button className="bg-slate-800 hover:bg-slate-700 text-white py-2 px-8 rounded mt-5">
                Enroll now
              </button>
              <div className="text-left mt-6">
                <ul className="list-disc pl-6">
                  <li>
                    Different Batches for Fat Loss, General Fitness, Athletic
                    Skills and Kids Fitness
                  </li>
                  <li>Training under expert supervision</li>
                  <li>Batch formation as per fitness level and goals</li>
                  <li>Flexible timing community</li>
                  <li>Free access to workshops and events</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="w-80 h-94 border p-6 flex flex-col justify-center bg-gradient-to-t from-gray-900 to-black rounded-md">
            <div className="plan-item text-center">
              <h3 className="text-3xl">Annual</h3>
              <h3 className="text-3xl">Membership</h3>
              <div className="plan-price mt-1">
                <h2 className="text-3xl font-bold text-orange-500">₹ 8,000</h2>
              </div>
              <button className="bg-slate-800 hover:bg-slate-700 text-white py-2 px-8 rounded mt-5">
                Enroll now
              </button>
              <div className="text-left mt-6">
                <ul className="list-disc pl-6">
                  <li>
                    Different Batches for Fat Loss, General Fitness, Athletic
                    Skills and Kids Fitness
                  </li>
                  <li>Training under expert supervision</li>
                  <li>Batch formation as per fitness level and goals</li>
                  <li>Flexible timing community</li>
                  <li>Free access to workshops and events</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

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

      <div className="mt-10 px-20 mb-6 testimonials">
        <hr />
        <div className="text-center mt-10">
          <h3 className="text-2xl text-orange-500">WHAT OUR TRAINERS SAYS</h3>
          <h3 className="text-3xl font-bold">TESTIMONIALS</h3>
          <div className="testimonial-card grid sm:grid-cols-1 md:grid-cols-3 place-items-center mt-6 gap-y-8 md:mx-10">
            <TestimonialCard
              data={{
                image: offerImg1,
                name: "Anshul Jha",
                text: "I was just going through Instagram where I found a video of Adamya sir, he was doing muscle ups and some other pull up exercises and he made it look like it is so easy as a piece of cake I was ready to begin my fitness journey.",
              }}
            />
            <TestimonialCard
              data={{
                image: offerImg1,
                name: "Anshul Jha",
                text: "I was just going through Instagram where I found a video of Adamya sir, he was doing muscle ups and some other pull up exercises and he made it look like it is so easy as a piece of cake I was ready to begin my fitness journey.",
              }}
            />
            <TestimonialCard
              data={{
                image: offerImg1,
                name: "Anshul Jha",
                text: "I was just going through Instagram where I found a video of Adamya sir, he was doing muscle ups and some other pull up exercises and he made it look like it is so easy as a piece of cake I was ready to begin my fitness journey.",
              }}
            />
          </div>
        </div>
        <hr className="mt-10" />
      </div>

      <div className="contact-section px-20 grid sm:grid-cols-1 md:grid-cols-3 pb-5">
        <div className="flex w-80 h-24 p-5">
          <div>
            <GoLocation className="w-14 h-14 rounded-full bg-orange-600 p-3 mr-3" />
          </div>
          <div className="location align-middle">
            BotFit Academy, CRPF Rd, Kadarpur, Gurugram 122022
          </div>
        </div>
        <div className="flex w-80 h-24 p-5">
          <div>
            <GoDeviceMobile className="w-14 h-14 rounded-full bg-orange-600 p-3 mr-3" />
          </div>
          <div className="mobile align-middle mt-3">+91 9876543210</div>
        </div>
        <div className="flex w-80 h-24 p-5">
          <div>
            <GoMail className="w-14 h-14 rounded-full bg-orange-600 p-3 mr-3" />
          </div>
          <div className="email mt-3">abc@gmail.com</div>
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
