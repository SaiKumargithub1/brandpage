import React from "react";

const Navigation = () => {
  return (
    <nav>
      <div className="logo">
        <img src="./images/brand_logo.png" alt="Brand Logo" />
      </div>

      <ul>
        <li>MENU</li>
        <li>LOCATION</li>
        <li>ABOUT</li>
        <li>CONTACT US</li>
      </ul>

      <button>LOG IN</button>
    </nav>
  );
};

export default Navigation;
