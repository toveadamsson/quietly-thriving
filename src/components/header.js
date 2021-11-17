import React from "react";
import { NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="header">
      <div className="titel">
        <h1>
          QUIETLY <br /> THRIVING
        </h1>
      </div>
      <div className="navigation">
        <h3>WITH NATASCHA HENRIKSEN</h3>
        <NavLink className="nav-buttons" exact to={"/"}>
          Home
        </NavLink>
        <NavLink className="nav-buttons" exact to={"/about"}>
          About Me
        </NavLink>
        
      </div>
    </div>
  );
};

export default Navbar;
