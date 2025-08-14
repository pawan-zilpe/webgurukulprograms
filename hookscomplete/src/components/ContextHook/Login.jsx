import React, { useContext } from "react";
import { AppContext } from "./UserContext";

const Login = () => {
  const { setUsername } = useContext(AppContext);
  return (
    <div>
      Login
      <input
        type="text"
        placeholder="Enter something"
        onChange={(e) => setUsername(e.target.value)}
      />
    </div>
  );
};

export default Login;
