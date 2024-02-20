import React, { useState, useEffect } from "react";
import "./carousel.css";
import ArrowLeft from "../../assets/icons/Vector_left.png";
import ArrowRight from "../../assets/icons/Vector_right.png";

/**
 * Composant représentant un carrousel d'images.
 * @param {string[]} images - Un tableau contenant les URLs des images à afficher dans le carrousel.
 */

function Carousel({ images }) {
  // Déclaration de l'état pour suivre l'index de l'image actuellement affichée
  const [currentIndex, setCurrentIndex] = useState(0);
  // Calcul du nombre total d'images dans le carrousel
  const totalImages = images.length;

  // Effet pour réinitialiser l'index actuel lorsque les images changent
  useEffect(() => {
    setCurrentIndex(0);
  }, [images]);

  /**
   * Passe à l'image suivante dans le carrousel.
   */
  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === totalImages - 1 ? 0 : prevIndex + 1
    );
  };
  /**
   * Passe à l'image précédente dans le carrousel.
   */
  const handlePrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? totalImages - 1 : prevIndex - 1
    );
  };

  // Calcul du numéro de l'image actuellement affichée
  const currentImageNumber = currentIndex + 1;

  return (
    <div className="carousel-container">
      {/* Bouton pour passer à l'image précédente */}
      {totalImages > 1 && (
        <button onClick={handlePrevious} className="arrow-button left-arrow">
          <img src={ArrowLeft} alt="Previous" />
        </button>
      )}
      {/* Image actuellement affichée */}
      <img
        src={images[currentIndex]}
        alt={`Img ${currentImageNumber}`}
        className="carousel-image"
      />
      {/* Bouton pour passer à l'image suivante */}
      {totalImages > 1 && (
        <button onClick={handleNext} className="arrow-button right-arrow">
          <img src={ArrowRight} alt="Next" />
        </button>
      )}
      {/* Affichage du numéro de l'image actuellement affichée */}
      {totalImages > 1 && (
        <div className="image-counter">{`${currentImageNumber}/${totalImages}`}</div>
      )}
    </div>
  );
}

export default Carousel;
