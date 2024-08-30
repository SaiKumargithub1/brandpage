import React from "react";
import "./Hero.css";

const Hero = () => {
  return (
    <main className="hero">
      <div className="hero-content">
        <h1 className="hero-title">
          YOUR FEET <br />
          DESERVE <br />
          THE BEST
        </h1>

        <p className="hero-description">
          YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
          SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
          SHOES.
        </p>

        <div className="hero-btn">
          <button className="shopnow">Shop Now</button>
          <button className="category">Category</button>
        </div>

        <div className="shopping">
          <p>Also Available On</p>
          <div className="brand-icon">
            <img src="./images/amazon.png" alt="Amazon" />
            <img src="./images/flipkart.png" alt="Flipkart" />
          </div>
        </div>
      </div>
      <div className="hero-img">
        <img src="./images/shoe_image.png" alt="Shoe" />
      </div>
    </main>
  );
};

export default Hero;
