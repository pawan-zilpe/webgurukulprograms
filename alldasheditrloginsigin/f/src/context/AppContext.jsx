import React, { createContext, useState } from "react";

export const userContext = createContext(null);
const AppContext = ({ children }) => {
  // to check user is loggedIn
  const [isloggedIn, setIsLoggedIn] = useState(false);
  console.log("AppContext");
  return (
    <userContext.Provider value={{ isloggedIn, setIsLoggedIn }}>
      {children}
    </userContext.Provider>
  );
};

export default AppContext;
