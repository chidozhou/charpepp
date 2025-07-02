import React from "react";
import "./Hero.css";
import dark_arrow from "../../assets/dark-arrow.png";

const Hero = () => {
  return (
    <div className="hero container">
      <div className="hero-text">
        <h1>Supporting Your Loved Ones with Compassionate Care</h1>
        <p>
          Charpepp Private Home Care Services offers expert support for your
          loved ones' daily living needs. From personal care and medical
          assistance to emotional support, we provide holistic care with
          dedication and compassion.
        </p>
        <button className="btn">
          Explore more <img src={dark_arrow} alt="" />
        </button>
      </div>
    </div>
  );
};

export default Hero;
