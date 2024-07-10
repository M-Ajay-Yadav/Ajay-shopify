import React from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <div className="HeaderComponent">
      <div className="HeaderSection flex">
        <div className="icon flex">
          <img src="img" alt="img" />
        </div>

        <div className="HeaderContainer flex">
          <div className="ContainerSet flex">
            <ul className="Set flex">
              <li className="flex list">
                <NavLink className="link" href="">
                  home
                </NavLink>
              </li>
              <li className="flex list">
                <NavLink className="link" href="">
                  Products
                </NavLink>
              </li>
              <li className="flex list">
                <NavLink className="link" href="">
                  Category
                </NavLink>
              </li>
              <li className="flex list">
                <NavLink className="link" href="">
                  About us
                </NavLink>
              </li>
              <li className="flex list">
                <NavLink className="link" href="">
                  Contacts Us
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
