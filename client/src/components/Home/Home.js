import React, { useEffect } from "react";
import "./Home.css";
 
import Header from "../Partials/Header";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import HomeInfo from "./HomeInfo";
import Banner from "./Banner";

function Home() {
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.users);

  useEffect(() => {
    if (user && user.role === "user") {
      navigate("/home");
    } else if(user && user.role === "admin"){
      navigate("/admin");
    }else{
      navigate("/");
    }
  }, [user]);
  return (
    <>
    {/* calling the navbar */}
      <Header />
      <Banner/>
    <HomeInfo/>
       
    </>
  );
}

export default Home;
