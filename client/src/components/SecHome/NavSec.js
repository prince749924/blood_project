import React, { useState } from "react";
import "./Nav.css";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function NavSec() {
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.users);
  const [mobileMenuVisible, setMobileMenuVisible] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const handleDropdownToggle = () => {
    setIsOpen(!isOpen);
  };

  const toggleMobileMenu = () => {
    setMobileMenuVisible(!mobileMenuVisible);
  };

  const handleProfileClick = () => {
    if (user && user.role === "user") {
      navigate("/profile");
    } else {
      navigate("/admin");
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  if (!user) {
    return null; // Return null or a loading spinner if user data is not available yet
  }

  return (
    <>
      <nav className="p-1 bg-white text-white w-full sticky top-0 shadow-md">
        <div className="flex justify-between items-center">
          <div className="flex items-center pl-8">
            <div className="fst-italic fs-2">
              <a
                href="/home"
                className=" text-yellow-500"
                style={{ textDecoration: "none" }}
              >
                <img src="./images/logo.png" style={{width:"8rem", height:"3rem"}} alt=""/>
              </a>
            </div>
          </div>

          {/* MOBILE NAV ICON */}
          <div className="md:hidden block absolute top-4 right-8">
            <button
              aria-label="navigation"
              type="button"
              className="md:hidden text-black-500 transition duration-300 focus:outline-none focus:text-black hover:text-red"
              onClick={toggleMobileMenu}
            >
              <i className="fas fa-bars text-3xl text-black-200" id="bars"></i>{" "}
            </button>
          </div>

          {/* NAVIGATION - LARGE SCREENS */}
          <div className="hidden md:flex">
            <ul className="hidden md:flex">
              <div className="text-lg pr-8">
                <a
                  href="/home"
                  className="transition duration-300 text-black hover:text-yellow-500"
                  style={{ textDecoration: "none" }}
                >
                  Home
                </a>
              </div>

              <div className="text-lg pr-8">
                <a
                  href="/bestSelling"
                  className="transition duration-300 ms-5 text-black hover:text-yellow-500"
                  style={{ textDecoration: "none" }}
                >
                  About Us
                </a>
              </div>
              <div className="text-lg pr-8">
                <a
                  href="/campaign"
                  className="transition duration-300 ms-5 text-black hover:text-yellow-500"
                  style={{ textDecoration: "none" }}
                >
                  Campaign
                </a>


                 
              </div>

              <div className="text-lg pr-8">
                <a
                  href="/donars"
                  className="transition duration-300 ms-5 text-black hover:text-yellow-500"
                  style={{ textDecoration: "none" }}
                >
                  Donars
                </a>


                 
              </div>
            </ul>
          </div>

          <div className="md:flex">
            <a href="/profile">
              <button
                type="button"
                className="text-white fs-5 bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
              >
                Donate
              </button>
            </a>

            {/* <!-- Dropdown menu --> */}
            <div className="relative inline-block text-left ">
              <button
                type="button"
                className="inline-flex items-center text-black justify-center w-full px-4 py-2 text-sm font-medium text-white bg-black border border-transparent rounded-md   focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                onClick={handleDropdownToggle}
              >
                Profile
                <svg
                  className="w-4 h-4 ml-2 -mr-1"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              {isOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg">
                  <ul className="py-1">
                    <div>
                      <button
                        type="button"
                        className=" w-full text-sm text-black hover:bg-gray-100 mb-2 border border-none bg-white"
                        onClick={handleProfileClick}
                      >
                        Dashboards
                      </button>
                    </div>
                    <div>
                      <button
                        type="button"
                        className=" w-full py-2 text-sm text-black hover:bg-gray-100 border border-none bg-white"
                        onClick={handleLogout}
                      >
                        Sign out
                      </button>
                    </div>
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* MOBILE MENU */}
        <div
          id="mobileMenu"
          className={`${
            mobileMenuVisible ? "flex" : "hidden"
          } w-full mx-auto py-8 text-center`}
        >
          <div className="flex flex-col justify-center items-center w-full">
            <a
              href="/home"
              className="text-black cursor-pointer py-3 transition duration-300 hover:text-yellow-500" style={{ textDecoration: "none" }}
            >
              Home
            </a>
            <a
              href="/bestSelling"
              className="text-black cursor-pointer mt-1 py-3 transition duration-300 hover:text-yellow-500" style={{ textDecoration: "none" }}
            >
            About Us 
            </a>

            <a
              href="/campaign"
              className="text-black cursor-pointer mt-1 py-3 transition duration-300 hover:text-yellow-500" style={{ textDecoration: "none" }}
            >
              Campaign
            </a>

            <a
              href="/donars"
              className=" text-black cursor-pointer mt-1 py-3 transition duration-300     hover:text-yellow-500" style={{ textDecoration: "none" }}
            >
              Donars
            </a>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavSec;
