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

const http = new httpService();

const App = () => {
  const { user } = useStateContext();
  console.log("user",user);
  return (
    <BrowserRouter>
      <Routes>
      <Route exact path="/" element={<Home />} />
        <Route path="/plans" element={<Plans />} />
        <Route path="/revolution" element={<Revolution />} />
        <Route path="/trainers" element={<Trainers />} />
        <Route path="/about" element={<About />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        {user!=="no user" ? (
          <>
            <Route path="/defa" element={<Dashboard />} />
          </>
        ) : null}
        
      </Routes>
    </BrowserRouter>
  );
};

export default App;
export { http };
