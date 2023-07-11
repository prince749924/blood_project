import React from "react";
import { Tabs } from "antd";
import Products from "./Products";

import UserBids from "./UserBids";
import { useSelector } from "react-redux";
import NavSec from "../SecHome/NavSec";

function Profile() {
  const { user } = useSelector((state) => state.users);
  return (
    <>
      <NavSec />
      <div className="container  mt-5">
        <Tabs defaultActiveKey="1">
          <Tabs.TabPane tab="Products" key="1">
            <Products />
          </Tabs.TabPane>

          <Tabs.TabPane tab="Message" key="3">
            <UserBids />
          </Tabs.TabPane>
          <Tabs.TabPane tab="Profile" key="4">
            <div className="container border border-dark rounded">
              <div className="row">
                <div className="col-md-8">
                  <h1>
                    Hi, <span className="text-danger">{user.name}</span>
                  </h1>

                  <h3 className="mt-2 text-success mb-2">
                    {" "}
                    Here are your Profile details...{" "}
                  </h3>
                  <h4>Email: {user.email}</h4>
                  <h4>Address: {user.address}</h4>
                  <h4>Phone: {user.phone}</h4>
                  <p className="fs-3 mt-2"> Customize your profile page Here</p>
                  <a
                    href="/"
                    className="btn btn-dark  ms-2 fw-bold fs-5 "
                    type="submit"
                  >
                    Update
                  </a>
                  <a
                    href="/"
                    className="btn btn-dark  ms-2 fw-bold fs-5 "
                    type="submit"
                  >
                    Upload Image
                  </a>
                </div>
                <div className="col-md-4">
                  <img
                    src="https://www.pngmart.com/files/22/User-Avatar-Profile-PNG.png"
                    style={{ width: "20rem", height: "20rem" }}
                    alt=""
                  />
                </div>
              </div>
            </div>
          </Tabs.TabPane>
        </Tabs>
      </div>
    </>
  );
}

export default Profile;
