import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "./SignUp.css";
import { handleError, handleSuccess } from "../error/error";

const SignUp = () => {
  // e.preventDefault();
  const [userlog, setUserlog] = useState({
    name: "",
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const handleChange = (e) => {
    const { name, value } = e.target;
    // console.log(name, value);
    // console.log(userlog);
    const userInfo = { ...userlog };
    userInfo[name] = value;
    setUserlog(userInfo);
    console.log(userInfo);
  };
  // console.log(userlog);

  const hangleSubmit = async (e) => {
    e.preventDefault();
    console.log(userlog);
    const { name, email, password } = userlog;
    if (!name || !email || !password) {
      return handleError("please enter all the fields");
    }
    // alert(name, ":", value);
    // console.log(name, value);
    // alert("Submited form");
    // console.log("form submited");
    try {
      const url = "http://localhost:5000/auth/signup";
      const response = await fetch(url, {
        method: "post",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(userlog),
      });
      const result = await response.json();
      const { success, msg } = result;
      if (success) {
        handleSuccess(msg);
        setTimeout(() => {
          navigate("/login");
        }, 1000);
      }
      console.log(result);
    } catch (error) {
      handleError(error);
    }
  };
  return (
    <div className="SignupSection">
      <div className="Section">
        <h1>Sign Up</h1>
        <form onSubmit={hangleSubmit}>
          <div className="container">
            <label htmlFor="name">Name</label>
            <input
              className="inputbox"
              onChange={handleChange}
              type="Text"
              name="name"
              value={userlog.name}
              autoFocus
              placeholder="Enter your name"
            />
          </div>
          <div className="container">
            <label htmlFor="email">Email</label>
            <input
              className="inputbox"
              onChange={handleChange}
              type="email"
              name="email"
              value={userlog.email}
              // autoFocus
              placeholder="Enter your name"
            />
          </div>
          <div className="container">
            <label htmlFor="password">Password</label>
            <input
              className="inputbox"
              onChange={handleChange}
              type="password"
              name="password"
              value={userlog.password}
              // autoFocus
              placeholder="Enter your name"
            />
          </div>
          <button className="btn" type="submit">
            Submit
          </button>
          <p className="text">
            I Already have an account <a href="/">Login</a>
          </p>
        </form>
        <ToastContainer />
      </div>
    </div>
  );
};

export default SignUp;
