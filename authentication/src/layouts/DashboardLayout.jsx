import React, { useContext, useEffect } from "react";
import { Outlet, useNavigate } from "react-router";
import { UserContext } from "../context/AppContext";

const DashboardLayout = () => {
  const { checklogin } = useContext(UserContext);
  const navigate = useNavigate();
  useEffect(() => {
    console.log("Dashboard useeffect called");
    if (!checklogin()) {
      navigate("/");
    }
  }, []);
  return (
    <div className="min-h-screen flex flex-col bg-gray-100 p-4">
  <div className="text-2xl font-bold mb-4">DashboardLayout</div>
  <div className="flex-grow bg-white shadow rounded p-4">
    <Outlet />
  </div>
</div>

  );
};

export default DashboardLayout;
