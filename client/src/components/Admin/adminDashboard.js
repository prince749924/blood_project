import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { SetLoader } from "../../redux/loaderSlice";
import Divider from "../../MainComponents/Divider";
import { message } from "antd";
import { GetProducts } from "../../apicalls/products";
import { useNavigate } from "react-router-dom";

function AdminDashboard() {
  const [showFilters, setShowFilters] = useState(true);
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();
  const [filters, setFilters] = useState({
    status: "approved",
    category: [],
  });

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

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="flex gap-5">
      <div className="flex flex-col gap-5 w-full">
        <div
          className={`grid gap-5 ${
            showFilters ? "grid-cols-4" : "grid-cols-5"
          }`}
        >
          {products.map((product) => (
            <div
              className="border border-gray-400 rounded border-solid flex-col gap-2 cursor-pointer"
              key={product._id}
              onClick={() => navigate(`/product/${product._id}`)}
            >
              <img
                src={product.images[0]}
                alt="product"
                className="w-full h-40 p-3 rounded-md"
              />
              <Divider />
              <div className="px-3 flex flex-col gap-1">
                <h2 className="font-semibold pb-2 flex">{product.name}</h2>
                <h5 className="font-normal pb-1 flex">
                  Age: {product.condition}
                </h5>
                <h4 className="text-green-900 font-normal pb-2 flex">
                  Quantity: {product.price} (ML)
                </h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default AdminDashboard;
