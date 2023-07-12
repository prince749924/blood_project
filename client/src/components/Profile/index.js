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
                <div className="col-md-12">
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
