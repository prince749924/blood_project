import React, { useEffect, useState } from "react";
import { message } from "antd";
import { useNavigate } from "react-router-dom";
import { GetCurrentUser } from "../apicalls/users";
import { useDispatch, useSelector } from "react-redux";
import { SetLoader } from "../redux/loaderSlice";
import { SetUser } from "../redux/userSlice";

// import Notifications from "./Notifications";
// import { GetAllNotifications } from "../apicalls/notifications";

function ProtectedPage({ children }) {
  // const [notifications, setNotifications] = useState([]);
  // const [showNotifications, setShowNotifications] = useState(false);
  const { user } = useSelector((state) => state.users);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const validateToken = async () => {
    try {
      dispatch(SetLoader(true));
      const response = await GetCurrentUser();
      dispatch(SetLoader(false));
      if (response.success) {
        dispatch(SetUser(response.data));
      } else {
        navigate("/login");
        message.error(response.message);
      }
    } catch (error) {
      dispatch(SetLoader(false));
      navigate("/login");
      message.error(error.message);
    }
  };

  // const getNotifications = async () => {
  //   try {
  //     dispatch(SetLoader(true));
  //     const response = await GetAllNotifications();
  //     dispatch(SetLoader(false));
  //     if (response.success) {
  //       setNotifications(response.data);
  //     } else {
  //       throw new Error(response.message);
  //     }
  //   } catch (error) {
  //     dispatch(SetLoader(false));
  //     message.error(error.message);
  //   }
  // };

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      validateToken();
      // getNotifications();
    } else {
      navigate("/login");
    }
  }, []);

  if (!user) {
    return null; // Return null or a loading spinner if user data is not available yet
  }

  return (
    <div>
      <div>{children}</div>
    </div>
  );
}

export default ProtectedPage;
