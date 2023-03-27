import React from "react";
import { GoDeviceMobile, GoLocation, GoMail } from "react-icons/go";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo.png";
const Footer = () => {
  return (
    <>
      {" "}
      <div className="contact-section grid sm:grid-cols-1 md:grid-cols-3 pb-5 place-items-center">
        <div className="flex w-80 h-24 p-5">
          <div>
            <GoLocation className="w-14 h-14 rounded-full bg-orange-600 p-3 mr-3" />
          </div>
          <div className="location align-middle">
            Sitapur Bypass road, Harilok colony, Sitapur, Jwalapur, Uttarakhand
            249407
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
      <footer className="px-10 py-8 h-auto bg-black text-center ">
        <div className="flex justify-between flex-wrap place-items-center ">
          <div className="w-96 grid place-items-center">
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

          <div className="w-96">
            <h3 className="text-3xl mb-2 text-orange-600 font-bold">Useful links</h3>
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
              <Link>
                <li>Contact Us</li>
              </Link>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
