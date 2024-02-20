import React, { useState, useEffect } from "react";
import "./carousel.css";
import ArrowLeft from "../../assets/icons/Vector_left.png";
import ArrowRight from "../../assets/icons/Vector_right.png";

function Carousel({ images }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalImages = images.length;

  useEffect(() => {
    setCurrentIndex(0);
  }, [images]);

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === totalImages - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? totalImages - 1 : prevIndex - 1
    );
  };

  const currentImageNumber = currentIndex + 1;

  return (
    <div className="carousel-container">
      {totalImages > 1 && (
        <button onClick={handlePrevious} className="arrow-button left-arrow">
          <img src={ArrowLeft} alt="Previous" />
        </button>
      )}
      <img
        src={images[currentIndex]}
        alt={`Img ${currentImageNumber}`}
        className="carousel-image"
      />
      {totalImages > 1 && (
        <button onClick={handleNext} className="arrow-button right-arrow">
          <img src={ArrowRight} alt="Next" />
        </button>
      )}
      {totalImages > 1 && (
        <div className="image-counter">{`${currentImageNumber}/${totalImages}`}</div>
      )}
    </div>
  );
}

export default Carousel;
