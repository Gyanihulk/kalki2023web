import React from "react";
import { BrowserRouter, HashRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Plans from "./pages/Plans";
import Revolution from "./pages/Revolution";
import Trainers from "./pages/Trainers";
import About from "./pages/Revolution";
import Login from "./pages/Login";
import Register from "./pages/Register";
import httpService from "./http";
import { useStateContext } from "./context/FirebaseContext";
import Dashboard from "./pages/Dashboard";
import Navbar from "./components/Navbar";
import "./style/main.css";
import Error from "./components/Error";
const http = new httpService();

const App = () => {
  const { isLoggedIn } = useStateContext();
  console.log("user from home", isLoggedIn);
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/plans" element={<Plans />} />
        <Route path="/revolution" element={<Revolution />} />
        <Route path="/trainers" element={<Trainers />} />
        <Route path="/about" element={<About />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        {/* <Route path="/dashboard" element={<Dashboard />} /> */}
        {isLoggedIn ? (
          <>
            <Route path="/dashboard" element={<Dashboard />} />
          </>
        ) : (
          <Route path="/error" element={<Error />} />
        )}
      </Routes>

      {/* <BrowserRouter>
      
        
      </BrowserRouter> */}
    </>
  );
};

export default App;
export { http };
