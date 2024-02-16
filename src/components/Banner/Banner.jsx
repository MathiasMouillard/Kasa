import React from 'react';
import './banner.css';

const Banner = ({ image, text, showText }) => {
  return (
    <div className="banner-container">
      <div className="banner-image" style={{backgroundImage: `url(${image})`}}>
        {showText && <div className="banner-text">{text}</div>}
      </div>
    </div>
  );
};

export default Banner;
