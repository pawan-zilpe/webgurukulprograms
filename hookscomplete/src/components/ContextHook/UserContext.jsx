import React, { createContext, useState } from "react";
import Login from "./Login";
import User from "./User";

export const AppContext = createContext(null);

const UserContext = () => {
  const [username, setUsername] = useState("");

  return (
    <AppContext.Provider value={{ username, setUsername }}>
      <Login />
      <hr />
      <User />
    </AppContext.Provider>
  );
};

export default UserContext;
