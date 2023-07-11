import React from "react";

function Banner() {
  return (
    <div className="container bg-black  rounded " style={{height:"40rem"}}>
      <div className="row">
        
        <div className="col-md-6">
          <img
            src="./images/k.jpg"
            style={{ width: "30rem" }}
            alt=""
            className="img-fluid"
          />
        </div>
        <div className="col-md-5 py-5">
          <h1 className="mt-3 text-danger flex mt-5 ">A DROP OF BLOOD </h1>
          <h1 className="mt-1 text-danger flex">FOR LIFE</h1>
          <h3 className="text-light mt-3 flex">
            LETS BE A BLOOD DONOR FOR GOOD
          </h3>
         
          <div className="flex mt-5">
          <a href="/profile">
              <button class=" ms-2 bg-danger text-light font-semibold  py-2 px-4 border rounded">
                Donate Now
              </button>
            </a>

            <a href="/donars">
              <button class=" ms-2 bg-light text-red-500 font-semibold  py-2 px-4 border   rounded">
                Donors
              </button>
            </a>
          </div>
         
        </div>
      </div>
    </div>
  );
}

export default Banner;
