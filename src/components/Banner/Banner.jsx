import React from "react";
import "./banner.css";

/**
 * Composant représentant une bannière avec une image en arrière-plan.
 * @param {string} image - L'URL de l'image à afficher en arrière-plan de la bannière.
 * @param {string} [text] - Le texte optionnel à afficher sur la bannière.
 */

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
