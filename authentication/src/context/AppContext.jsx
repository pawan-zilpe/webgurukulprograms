import React, { createContext, useState } from "react";
export const UserContext = createContext(null);

const AppContext = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(
    window.localStorage.getItem("isloggedin")
  );

  // setlogin
  const setLogin = () => {
    window.localStorage.setItem("isloggedin", true);
  };
  // logout
  const logout = () => {
    window.localStorage.removeItem("isloggedin");
  };

  //checklogin
  const checklogin = () => {
    let data = window.localStorage.getItem("isloggedin");
    if (data) {
      return true;
    }
    return false;
  };
  return (
    <UserContext.Provider
      value={{ isLoggedIn, setIsLoggedIn, setLogin, logout, checklogin }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default AppContext;
