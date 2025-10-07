import React, { useContext, useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { userContext } from "../context/AppContext";

const AuthLayout = () => {
  const { isloggedIn } = useContext(userContext);
  const navigate = useNavigate();
  const checkLogin = () => {
    if (isloggedIn == false) {
      navigate("/");
    }
  };

  useEffect(() => {
    checkLogin();
  }, [isloggedIn]);
  return (
    <div>
      AuthLayout
      <Outlet />
    </div>
  );
};

export default AuthLayout;
