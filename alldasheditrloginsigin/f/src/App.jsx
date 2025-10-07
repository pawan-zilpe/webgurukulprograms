import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Login from "./pages/Auth/Login";
import Register from "./pages/Auth/Register";
import { ToastContainer, toast } from "react-toastify";
import AppContext from "./context/AppContext";
import AdminDashboard from "./pages/Admin/AdminDashboard";
import AuthLayout from "./layout/AuthLayout";

const App = () => {
  return (
    <AppContext>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          {/* after login */}
          <Route element={<AuthLayout />}>
            <Route path="/admin-dashboard" element={<AdminDashboard />} />
          </Route>
        </Routes>
      </Router>
      <ToastContainer />
    </AppContext>
  );
};

export default App;
