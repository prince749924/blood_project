import React, { useEffect } from "react";
import "./Product.css";
import { message } from "antd";
import { SetLoader } from "../../redux/loaderSlice";
import { GetProducts } from "../../apicalls/products";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Filters from "./Category";

 
 

function Product() {
  const [showFilters, setShowFilters] = React.useState(true);
  const [products, setProducts] = React.useState([]);

  const [filters, setFilters] = React.useState({
    status: "approved",
    category: [],
  });
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.users);
  const dispatch = useDispatch();

  const getData = async () => {
    try {
      dispatch(SetLoader(true));
      const response = await GetProducts(filters);
      dispatch(SetLoader(false));
      if (response.success) {
        setProducts(response.data);
      } else {
        throw new Error(response.message);
      }
    } catch (error) {
      dispatch(SetLoader(false));
      message.error(error.message);
    }
  };

  // Uncomment the following block if you want to navigate based on the user's role
  // if (user.role === "admin") {
  //   navigate("/admin");
  // } else {
  //   navigate("/home");
  // }

  useEffect(() => {
    getData();
  }, [filters]);

  return (
    <>
      <section className="product ">
        <div className="gap-5">
          {showFilters && (
            <Filters
              showFilters={showFilters}
              setShowFilters={setShowFilters}
              filters={filters}
              setFilters={setFilters}
            />
          )}
          <div className="flex flex-col gap-5">
            <div className="flex gap-5 items-center">
              {!showFilters && (
                <i
                  className="ri-equalizer-line text-xl cursor-pointer"
                  onClick={() => setShowFilters(!showFilters)}
                ></i>
              )}
            </div>
            <div
              className={`grid gap-5 ${
                showFilters ? "grid-cols-4" : "grid-cols-5"
              }`}
            ></div>
          </div>
        </div>
         
        <div className="container">
          <section className=" mx-auto grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 justify-items-center justify-center gap-y-20   mt-10 mb-5">
            {/* <!--   ✅ Product card 1 - Starts Here 👇 --> */}
            {products.map((product) => (
              <div className="w-72  shadow-md rounded-xl  cursor-pointer bg-red-100 border border-danger border-3 ">
                <div
                  key={product._id}
                  onClick={() => navigate(`/product/${product._id}`)}
                >
                   <h1 className="text-danger">{product.category}</h1>
                  <div class="px-4 py-3 w-72">
                    <p class="flex text-lg font-bold text-black truncate  capitalize">
                     FullName:  {product.name}
                    </p>

                    <p class="flex text-lg  text-black truncate  capitalize">
                      Address: {product.seller.address} 
                    </p>
                    <div class="flex">
                      <p class="text-lg   text-black cursor-auto ">
                      Quantity: {product.price} (ML)
                      </p>

                      {/* <div class="ml-auto">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          fill="currentColor"
                          class="bi bi-bag-plus"
                          viewBox="0 0 16 16"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M8 7.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0v-1.5H6a.5.5 0 0 1 0-1h1.5V8a.5.5 0 0 1 .5-.5z"
                          />
                          <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
                        </svg>
                      </div> */}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </section>
        </div>
      </section>
    </>
  );
}

export default Product;
