import React, { useEffect } from "react";
import Error from "../components/Error";
import { useStateContext } from "../context/FirebaseContext";
import { useNavigate } from "react-router";
const Dashboard = () => {
  const { isLoggedIn } = useStateContext();
  const navigate = useNavigate();
  useEffect(() => {
    if (!isLoggedIn) {
      navigate("/error");
    }
  }, [isLoggedIn]);

  return   <h3 className="text-3xl font-bold mt-20">Dashboard</h3>;
};

export default Dashboard;
