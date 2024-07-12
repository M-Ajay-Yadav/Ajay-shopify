import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "./Login.css";

const Login = () => {
  const handleLogin = () => {
    alert("login successful");
  };
  return (
    <div className="LoginSection">
      <div className="Section">
        <h1>Login</h1>
        <form action="" onSubmit={handleLogin}>
          <div className="container">
            <label htmlFor="email">Email</label>
            <input
              className="inputbox"
              type="Email"
              name="Email"
              autoFocus
              placeholder="Enter your name"
            />
          </div>
          <div className="container">
            <label htmlFor="password">Password</label>
            <input
              className="inputbox"
              type="Password"
              name="Password"
              placeholder="Enter your name"
            />
          </div>
          <button className="btn" type="submit">
            Submit
          </button>
          <p className="text">
            I Don't have an account <a href="/signup">signup</a>
          </p>
        </form>
        <ToastContainer />
      </div>
    </div>
  );
};

export default Login;
