import React from "react";
import "../herosection/herosection.css";
import LeftModel from "../../assets/wounyoung.png"; // Path to left model image
import RightModel from "../../assets/sana.png"; // Path to right model image

const HeroSection = () => {
  return (
    <section className="hero-section">
      {/* Left Image */}
      <img
        src={LeftModel}
        alt="Left Model"
        className="hero-image left-image"
      />

      {/* Center Text */}
      <div className="hero-text">
        <h1>Beojnamu</h1>
        <p className="subtitle">벗나무</p>
        <div className="line"></div>
        <p className="description">
          We make your dreams come true through each piece of clothing.
        </p>
       
        <button className="hero-button">
  <i className="fas fa-shopping-basket" aria-hidden="true"></i> Shop Now
</button>

      </div>

      {/* Right Image */}
      <img
        src={RightModel}
        alt="Right Model"
        className="hero-image right-image"
      />
    </section>
  );
};

export default HeroSection;
