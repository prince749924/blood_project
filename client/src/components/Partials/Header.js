import React, { useState } from "react";
import "./header.css";
import { useSelector } from "react-redux";

function Header() {
  const { user } = useSelector((state) => state.users);
  const [mobileMenuVisible, setMobileMenuVisible] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuVisible(!mobileMenuVisible);
  };

  return (
    <>
      <nav className="p-1 bg-white text-gray-200 w-full  shadow-md sticky-top">
        <div className="flex justify-between items-center">
          <div className="flex items-center pl-8">
            <div className=" fst-italic">
              <a
                href="/"
                className="transition duration-300 fs-1 text-yellow-500 "
                style={{ textDecoration: "none" }}
              >
               <img src="./images/logo.png" style={{width:"8rem", height:"3rem"}} alt=""/>
              </a>
            </div>
          </div>

          {/* MOBILE NAV ICON */}
          <div className="md:hidden block absolute top-4 right-8 ">
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
                  href="/"
                  className="transition duration-300 text-black   hover:text-yellow-500"
                  style={{ textDecoration: "none" }}
                >
                  Home
                </a>
              </div>

              <div className="text-lg pr-8">
                <a
                  href="#aboutus"
                  className="transition duration-300 ms-5  text-black   hover:text-yellow-500"
                  style={{ textDecoration: "none" }}
                >
                  About Us
                </a>
              </div>
              <div className="text-lg pr-8">
                <a
                  href="/campaign"
                  className="transition duration-300 ms-5 text-black  hover:text-yellow-500"
                  style={{ textDecoration: "none" }}
                >
                  Campaign
                </a>

                 
              </div>

              <div className="text-lg pr-8">
                <a
                  href="/donars"
                  className="transition duration-300 ms-5 text-black  hover:text-yellow-500"
                  style={{ textDecoration: "none" }}
                >
                  Donars
                </a>

                 
              </div>
            </ul>
          </div>

          <div className=" md:flex">
            

            <a href="/login">
              <button class=" ms-2 bg-dark text-white font-semibold  py-2 px-4 border   rounded">
                Login
              </button>
            </a>

            <a href="/register">
              <button class=" ms-2 bg-red-500 text-white font-semibold  py-2 px-4 border   rounded">
                Signup
              </button>
            </a>
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
              href="/"
              className=" text-black cursor-pointer py-3 transition duration-300     hover:text-yellow-500" style={{ textDecoration: "none" }}
            >
              Home
            </a>
            <a
              href="/bestSelling"
              className=" text-black cursor-pointer mt-1 py-3 transition duration-300    hover:text-yellow-500" style={{ textDecoration: "none" }}
            >
              About US
            </a>

            <a
              href="/campaign"
              className=" text-black cursor-pointer mt-1 py-3 transition duration-300     hover:text-yellow-500" style={{ textDecoration: "none" }}
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
          <div className=" md:flex">
            

            <a href="/login">
              <button class=" ms-2 bg-black text-white font-semibold  py-2 px-4 border   rounded">
                Login
              </button>
            </a>

            <a href="/register">
              <button class=" ms-2 bg-blue-700 text-white font-semibold  py-2 px-4 border   rounded">
                Signup
              </button>
            </a>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Header;
