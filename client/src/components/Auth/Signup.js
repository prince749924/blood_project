import React, { useEffect } from "react";
import { Button, Form, Input, Row, message } from "antd";
import { Link, useNavigate } from "react-router-dom";
import Divider from "../../MainComponents/Divider";
import { RegisterUser } from "../../apicalls/users";
import { useDispatch } from "react-redux";
import { SetLoader } from "../../redux/loaderSlice";

const rules = [
  {
    required: true,
    message: "required",
  },
];

function Signup() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onFinish = async (values) => {
    try {
      dispatch(SetLoader(true));
      const response = await RegisterUser(values);

      dispatch(SetLoader(false));
      if (response.success) {
        navigate("/login");
        message.success(response.message);
      } else {
        throw new Error(response.message);
      }
    } catch (error) {
      dispatch(SetLoader(false));
      message.error(error.message);
    }
  };

  useEffect(() => {
    if (localStorage.getItem("token")) {
      navigate("/login");
    }
  }, []);

  return (
    <>
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
      <div className=" bg-white p-4 rounded w-[650px]  border border-dark  border-5">
        <h2 className=" text-center text-black"> Sign up</h2>
         
        
        <Form layout="vertical" onFinish={onFinish}>
          <Form.Item label="Name" name="name" rules={rules}>
            <Input placeholder="Name" />
          </Form.Item>

          <Form.Item label="Address" name="address" rules={rules}>
            <Input placeholder="Address" />
          </Form.Item>
          
          <Form.Item label="Phone" name="phone" rules={rules}>
            <Input placeholder="Phone" />
          </Form.Item>

          <Form.Item label="Email" name="email" rules={rules}>
            <Input placeholder="Email" />
          </Form.Item>

          <Form.Item label="Password" name="password" rules={rules}>
            <Input type="password" placeholder="Password" />
          </Form.Item>

          <Button type="primary" htmlType="submit"  className="bg-green-500 rounded">
            Register
          </Button>
          <div className="mt-2 text-center">
            <span className="text-black">
              Already have an Account?{" "}
              <Link to="/login" className="text-primary">
                Login
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
    </>
    
  );
}

export default Signup;
