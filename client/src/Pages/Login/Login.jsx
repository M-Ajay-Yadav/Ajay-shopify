import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "./Login.css";

const Login = () => {
  return (
    <div className="LoginSection">
      <div className="Section">
        <h1>Login</h1>
        <form action="">
          <div className="container">
            <label htmlFor="Email">Email</label>
            <input
              className="inputbox"
              type="Email"
              name="Email"
              autoFocus
              placeholder="Enter your name"
            />
          </div>
          <div className="container">
            <label htmlFor="Password">Password</label>
            <input
              className="inputbox"
              type="Password"
              name="Password"
              autoFocus
              placeholder="Enter your name"
            />
          </div>
          <button className="btn" onClick="Submit">
            Submit
          </button>
        </form>
        <ToastContainer />
      </div>
    </div>
  );
};

export default Login;
