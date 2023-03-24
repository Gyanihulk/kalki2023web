import React, { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import { http } from "../App";
import { useStateContext } from "../context/FirebaseContext";
import Login from "./Login";

const Register = () => {
  const [user, setUser] = useState({
    name: "",
    phone: "",
    email: "",
    password: "",
  });
  const { signUp } = useStateContext();
  const handleSubmit = async (e) => {
    e.preventDefault();
    // const res = await http.post("auth/register", user);
    // console.log(res);
    await signUp(user.email, user.password);
  };
  const [showLoginForm, setShowLoginForm] = useState(false);
  return (
    <>
      <div
        id="registerScreen"
        className="flex h-screen justify-center items-center"
      >
        <div className="w-full max-w-xs">
          <form
            className="bg-black shadow-md rounded px-8 pt-6 pb-6 mb-4"
            onSubmit={handleSubmit}
          >
            <div className="mb-4">
              <label
                className="block text-gray-200 text-sm font-bold mb-2"
                htmlFor="name"
              >
                Name
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="name"
                type="text"
                placeholder="Enter name"
                onChange={(e) => setUser({ ...user, name: e.target.value })}
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-200 text-sm font-bold mb-2"
                htmlFor="phone"
              >
                Phone
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="phone"
                type="text"
                placeholder="Enter phone"
                onChange={(e) => setUser({ ...user, phone: e.target.value })}
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-200 text-sm font-bold mb-2"
                htmlFor="email"
              >
                Email
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="email"
                type="email"
                placeholder="Enter email"
                onChange={(e) => setUser({ ...user, email: e.target.value })}
              />
            </div>
            <div className="mb-3">
              <label
                className="block text-gray-200 text-sm font-bold mb-2"
                htmlFor="password"
              >
                Password
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                id="password"
                type="password"
                placeholder="Enter password"
                onChange={(e) => setUser({ ...user, password: e.target.value })}
              />
            </div>
            <div className="flex items-center justify-between">
              <button
                className="bg-orange-600 hover:bg-orange-700 text-gray-200 py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Sign Up
              </button>
            </div>
            <div className="flex justify-center mt-5">
              <Link className="hover:underline text-gray-200 cursor-pointer"   onClick={() => setShowLoginForm(!showLoginForm)}>
                Already have account?
              </Link>
            </div>
          </form>
        </div>
      </div>
      {showLoginForm
        ? ((document.getElementById("registerScreen").style.display = "none"),
          (<Login />))
        : ""}
    </>
  );
};

export default Register;
