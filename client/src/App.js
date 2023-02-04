import React from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Plans from "./pages/Plans";
import Revolution from "./pages/Revolution";
import Trainers from "./pages/Trainers";
import About from "./pages/Revolution";
import Login from "./pages/Login";
import Register from "./pages/Register";
import httpService from "./http";

const http = new httpService();

const App = () => {
  return (
    <HashRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/plans" element={<Plans />} />
        <Route path="/revolution" element={<Revolution />} />
        <Route path="/trainers" element={<Trainers />} />
        <Route path="/about" element={<About />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </HashRouter>
  );
};

export default App;
export { http };
