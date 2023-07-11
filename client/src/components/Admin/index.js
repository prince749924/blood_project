import React, { useEffect } from "react";
import { Tabs } from "antd";
import Products from "./Products";
import Users from "./Users";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import AdminDashboard from "./adminDashboard";
import Advertisement from "./Advertisement";

function Admin() {
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.users);

  useEffect(() => {
    if (user.role !== "admin") {
      navigate("/adminDashboard");
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <>
      <div className="flex justify-between items-center bg-black p-3  sticky-top">
        <h1 className="text-2xl  cursor-pointer text-white text-center">
          Welcome to admin Dashboard
        </h1>

        <div className="bg-white py-2 px-5 rounded flex gap-1 items-center">
          <span
            className="underline  uppercase"
            style={{ textDecoration: "none" }}
          >
            {user.name}
          </span>
          <i
            class="bi bi-box-arrow-right cursor-pointer ms-3 text-red-500"
            onClick={handleLogout}
          ></i>
        </div>
      </div>

      <div className="container mt-5">
        <Tabs>
          <Tabs.TabPane tab="Products" key="1">
            <AdminDashboard />
          </Tabs.TabPane>
          <Tabs.TabPane tab="Donation Request" key="2">
            <Products />
          </Tabs.TabPane>
          <Tabs.TabPane tab="Users" key="3">
            <Users />
          </Tabs.TabPane>
          <Tabs.TabPane tab="Campaign" key="4">
            <Advertisement />
          </Tabs.TabPane>
        </Tabs>
      </div>
    </>
  );
}

export default Admin;
