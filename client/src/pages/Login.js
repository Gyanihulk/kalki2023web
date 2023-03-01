import { React, useState } from "react";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
import { http } from "../App";
import { useStateContext } from "../context/FirebaseContext";

const Login = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
const {loginWithPopUpGoogle}=useStateContext()
 
  return (
    <>

      <div className="flex h-screen justify-center items-center">
        <div className="w-full max-w-xs">
          <form
            className="bg-black shadow-md rounded px-8 pt-6 pb-6 mb-4"
            onSubmit={loginWithPopUpGoogle}
          >
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
                type="text"
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
                Sign In
              </button>
              <a
                className="inline-block align-baseline text-sm text-gray-200 hover:underline"
                href="/"
              >
                Forgot Password?
              </a>
            </div>
            <div className="flex justify-center mt-5">
              <Link
                to="/register"
                className="hover:underline text-gray-200 cursor-pointer"
              >
                Create account?
              </Link>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
