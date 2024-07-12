import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "./Contact.css";

const Contact = () => {
  const handleContact = () => {
    // alert("contact data sent");
    console.log("user");
  };
  return (
    <div className="ContactSection">
      <div className="Section">
        <h1>Contact</h1>
        <form action="" onSubmit={handleContact}>
          <div className="container">
            <label htmlFor="name">Name</label>
            <input
              className="inputbox"
              type="text"
              name="name"
              // autoFocus
              placeholder="Enter your name"
            />
          </div>
          <div className="container">
            <label htmlFor="email">Email</label>
            <input
              className="inputbox"
              type="Email"
              name="Email"
              // autoFocus
              placeholder="Enter your name"
            />
          </div>
          <div className="container">
            <label htmlFor="message">MESSAGE</label>
            <textarea
              className="inputbox"
              type="text"
              name="text"
              autoFocus
              placeholder="Enter your name"
            />
          </div>
          <button className="btn" type="submit">
            Submit
          </button>
        </form>
        <ToastContainer />
      </div>
    </div>
  );
};

export default Contact;
