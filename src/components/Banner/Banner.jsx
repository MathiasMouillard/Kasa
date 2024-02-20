import React from "react";
import "./banner.css";

const Banner = ({ image, text }) => {
  return (
    <div className="banner-container">
      <div
        className="banner-image"
        style={{ backgroundImage: `url(${image})` }}
      >
        {text && <div className="banner-text">{text}</div>}
      </div>
    </div>
  );
};

export default Banner;
