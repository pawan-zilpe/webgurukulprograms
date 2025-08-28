import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../context/AppContext";
import { useNavigate } from "react-router";

const Login = () => {
  // fetch from user context
  const { checklogin, isLoggedIn, setLogin } = useContext(UserContext);
  //use to redirect the page
  const navigate = useNavigate();
  // usestate to store the login data
  // if user is already loggedin

  useEffect(() => {
    if (checklogin()) {
      navigate("/welcome");
    }
  }, [isLoggedIn]);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  // this function will be called when user submit the data
  const handleSubmit = (e) => {
    e.preventDefault();

    if (email == "pawanzilpe1099@gmail.com" && password == 1099) {
      setLogin();
      setError("");
      navigate("/welcome");
    } if (email == "pawanzilpe@gmail.com" && password == 123) {
      setLogin();
      setError("");
      navigate("/welcome");
    } else {
      setError("Email or password is incorrect!");
    }
  };
  return (
    <div>
      <h2>Login Page</h2>
      {error && <p>{error}</p>}
      <form onSubmit={handleSubmit}>
        <p>
          <input
            type="email"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </p>
        <p>
          <input
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </p>
        <input type="submit" value="Login" />
      </form>
    </div>
  );
};

export default Login;
