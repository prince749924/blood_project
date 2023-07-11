import React, { useEffect } from "react";
import Product from "../Home/Product";
import NavSec from "./NavSec";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function HomeSec() {
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.users);

  useEffect(() => {
    if (user && user.role === "admin") {
      navigate("/admin");
    } else {
      navigate("/home");
    }
  }, [navigate, user]);

  return (
    <div>
      <NavSec />
      <Product />
    </div>
  );
}

export default HomeSec;
