import React, { useEffect } from "react";
import { Button, Form, Input, message } from "antd";
import { Link, useNavigate } from "react-router-dom";

import "./index.css"
 
import { LoginUser } from "../../apicalls/users";
import { useDispatch } from "react-redux";
import { SetLoader } from "../../redux/loaderSlice";

const rules = [
  {
    required: true,
    message: "required",
  },
];

function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onFinish = async (values) => {
    try {
      dispatch(SetLoader(true));
      const response = await LoginUser(values);
      dispatch(SetLoader(false));
      if (response.success) {
        message.success(response.message);
        localStorage.setItem("token", response.data);
        navigate("/home");
      } else {
        throw new Error(response.message);
      }
    } catch (error) {
      dispatch(SetLoader(false));
      message.error(error.message);
    }
  };

  const gotoHomme = () => {
    navigate("/");
  };
  useEffect(() => {
    if (localStorage.getItem("token")) {
      navigate("/home");
    }
  }, []);

  return (
    <>

<section>
        {/* Navbar */}
        {/* Jumbotron */}
        <div
          className="relative overflow-hidden bg-cover img-fluid bg-fixed "
          style={{
            backgroundPosition: '30%',
            backgroundImage:
              'url("https://e0.pxfuel.com/wallpapers/598/193/desktop-wallpaper-blood-bank-blood-donation.jpg")',
            height: '42rem',
          }}
        >
          <div className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-[hsla(0,0%,0%,0.75)] ">
            <div className="flex h-full items-center justify-center">
            <div className="h-screen    flex justify-center items-center rounded   " >
            
      <div className=" bg-white p-5 rounded w-[550px]  border border-dark  border-5">
      
        <h2 className=" text-center text-black"> Sign in</h2>
        <Form layout="vertical" onFinish={onFinish}>
          <Form.Item label="Email" name="email" rules={rules}>
            <Input placeholder="Email" />
          </Form.Item>

          <Form.Item label="Password" name="password" rules={rules}>
            <Input type="password" placeholder="Password" />
          </Form.Item>

          <Button type="primary" htmlType="submit"  className="mt-2 bg-green-500 text-white rounded">
            Login
          </Button>
          <div className="mt-5 text-center">
            <span className="text-black">
              Don't have an Account?{" "}
              <Link to="/register" className="text-primary">
                Register
              </Link>
            </span>
          </div>
        </Form>
      </div>
    </div>
            </div>
          </div>
        </div>
        {/* Jumbotron */}
      </section>
    
    </>
   
  );
}

export default Login;
