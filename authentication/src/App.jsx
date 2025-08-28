import React from "react";
import { BrowserRouter, Routes, Route } from "react-router";
import Login from "./pages/Login";
import Welcome from "./pages/Welcome";
import DashboardLayout from "./layouts/DashboardLayout";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import AppContext from "./context/AppContext";
import Leads from "./pages/Leads";
import ContactSignup from "./pages/ContactSignup";
import Products from "./pages/Products";
import Profile from "./pages/Profile";


import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';



const App = () => {
  return (
    <>
      <AppContext>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route element={<DashboardLayout />}>
            <Route path="/welcome" element={<Welcome />} />
            <Route path="/leads" element={<Leads />} />
            <Route path="/contact" element={<ContactSignup />} />
            <Route path="/products" element={<Products />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/about" element={<About />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </AppContext></>
  );
};

export default App;
