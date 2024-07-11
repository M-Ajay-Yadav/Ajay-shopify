import React from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <div className="HeaderComponent flex">
      <div className="HeaderSection flex">
        <div className="icon flex">
          <img src="img" alt="img" />
        </div>

        <div className="HeaderContainer flex">
          <div className="ContainerSet flex">
            <ul className="Set flex">
              <li className="flex list">
                <NavLink className="link" to="/">
                  home
                </NavLink>
              </li>
              <li className="flex list">
                <NavLink className="link" to="/Products">
                  Products
                </NavLink>
              </li>
              <li className="flex list">
                <NavLink className="link" to="/category">
                  Category
                </NavLink>
              </li>
              <li className="flex list">
                <NavLink className="link" to="/about">
                  About us
                </NavLink>
              </li>
              <li className="flex list">
                <NavLink className="link" to="/contact">
                  Contacts Us
                </NavLink>
              </li>
              <li className="flex list">
                <NavLink className="link" to="/Signup">
                  SignUp
                </NavLink>
              </li>
              <li className="flex list">
                <NavLink className="link" to="/login">
                  Login
                </NavLink>
              </li>
            </ul>
          </div>
        </div>

        <div className="icon flex">icon</div>
      </div>
    </div>
  );
};

export default Header;
