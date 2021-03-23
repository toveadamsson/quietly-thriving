import React from "react";
// import { NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="header">
      <h1 className="logo">
          QUIETLY <br /> THRIVING
        </h1>
        <h3 className="logo2">WITH NATASCHA HENRIKSEN</h3>
      {/* <NavLink className="buttons" exact to={"/"}>
        Home
      </NavLink>

      <NavLink className="buttons" exact to={"/about"}>
        About
      </NavLink>

      <NavLink className="buttons" exact to={"/selection"}>
        Book a meeting
      </NavLink>

      <NavLink className="buttons" exact to={"/contact"}>
        Contact
      </NavLink> */}
    </div>
  );
};

export default Navbar;

// function Header() {
// return (
//     <div className="header">
//         {/* <div className="header-content"> */}
//         <h1>Her skal der være logo?</h1>
//         <button className="header-buttons">Home</button>
//         <button className="header-buttons">About</button>
//         <button className="header-buttons">Selection</button>
//         <button className="header-buttons">Contact</button>
//         {/* </div> */}
//     </div>
// )
// }

// export default Header;
