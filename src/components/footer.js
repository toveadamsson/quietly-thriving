import React from "react";
import Instagram from "../images/instagram-brands.svg";
import Facebook from "../images/facebook-square-brands.svg";
const Footer = () => {
  //   const GoToI = () => {
  //    console.log("instagram klickades")
  //   };
  //   const GoToF = () => {
  //     console.log("facebook klickades")

  //   };
  return (
    <div className="footer">
      <p>nataschavejenhenriksen@gmail.com</p>
      {/* <img onClick={GoToI} className="logo" src={Instagram} />
      <img onClick={GoToF} className="logo" src={Facebook} /> */}
      <a href="http://www.instagram.com">
        <img alt="Instagram" src={Instagram} className="logo" />
      </a>
      <a href="https://www.facebook.com/groups/quietlythriving">
        <img alt="facebook" src={Facebook} className="logo"/>
      </a>
    </div>
  );
};

export default Footer;

// width="50" height="50" color="blue"