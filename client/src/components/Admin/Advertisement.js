import React, { useEffect } from "react";
import { Button, message, Table } from "antd";

import { useDispatch, useSelector } from "react-redux";

import moment from "moment";
import { SetLoader } from "../../redux/loaderSlice";
import { DeleteProduct, GetProducts } from "../../apicalls/products";
import ProductsForm from "./AdvertisementForm";

function Advertisement() {
  // const [bids, SetBids] = React.useState([]);
  const [selectedProduct, setSelectedProduct] = React.useState(null);
  const [products, setProducts] = React.useState([]);
  const [showProductForm, setShowProductForm] = React.useState(false);
  const { user } = useSelector((state) => state.users);
  const dispatch = useDispatch();

  // Fetching Data............................
  const getData = async () => {
    try {
      dispatch(SetLoader(true));
      const response = await GetProducts({ seller: user._id }); // Wrap the object inside curly braces
      dispatch(SetLoader(false));
      if (response.success) {
        setProducts(response.data);
      }
    } catch (error) {
      dispatch(SetLoader(false));
      message.error(error.message);
    }
  };
  // Fetching Section Ends........................

  // Delete operation....................
  const deleteProduct = async (id) => {
    try {
      dispatch(SetLoader(true));
      const response = await DeleteProduct(id);
      dispatch(SetLoader(false));
      if (response.success) {
        message.success(response.message);
        getData();
      } else {
        message.error(response.message);
      }
    } catch (error) {
      dispatch(SetLoader(false));
      message.error(error.message);
    }
  };
  // Delete Operation ends....................

  // Assigning Tables......................
  const columns = [
    {
      title: "Name",
      dataIndex: "name",
    },

    {
      title: "Product",
      dataIndex: "image",
      render: (text, record) => {
        return (
          <img
            src={record?.images?.length > 0 ? record.images[0] : ""}
            alt=""
            className="w-20 h-20 object-cover rounded-md"
          />
        );
      },
    },

    {
      title: "Category",
      dataIndex: "category",
    },
    {
      title: "Condition",
      dataIndex: "condition",
    },
    {
      title: "Status",
      dataIndex: "status",
    },
    {
      title: "Added On",
      dataIndex: "createdAt",
      render: (text, record) =>
        moment(record.createdAt).format("DD-MM-YYYY hh:mm A"),
    },
    {
      title: "Action",
      dataIndex: "action",
      render: (text, record) => {
        return (
          <div className="flex gap-5 item-center">
            <i
              className="bi bi-pencil-square cursor-pointer"
              style={{ color: "green" }}
              onClick={() => {
                setSelectedProduct(record);
                setShowProductForm(true);
              }}
            ></i>
            <i
              class="bi bi-archive-fill cursor-pointer"
              style={{ color: "red" }}
              onClick={() => {
                deleteProduct(record._id);
              }}
            ></i>
          </div>
        );
      },
    },
  ];
  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="container">
      <div className="flex justify-end mb-2">
        <Button
          type="default"
          onClick={() => {
            setSelectedProduct(null);
            setShowProductForm(true);
          }}
        >
          Add Product
        </Button>
      </div>
      <Table columns={columns} dataSource={products} />
      {showProductForm && (
        <ProductsForm
          showProductForm={showProductForm}
          setShowProductForm={setShowProductForm}
          selectedProduct={selectedProduct} // Pass the selectedProduct prop
          getData={getData} // Pass the getData function
        />
      )}
    </div>
  );
}

export default Advertisement;
