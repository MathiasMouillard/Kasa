import React from "react";
import { Link } from "react-router-dom";
import "./card.css";

/**
 * Composant représentant une carte affichant les détails d'une location.
 * @param {Object} rental - Les détails de la location à afficher dans la carte.
 * @param {string} rental.id - L'identifiant de la location.
 * @param {string} rental.cover - L'URL de l'image de couverture de la location.
 * @param {string} rental.title - Le titre de la location.
 */

const Card = ({ rental }) => {
  return (
    <div className="card-container">
      <div className="card" id={rental.id}>
        <Link to={`/Rental/${rental.id}`} className="card-link">
          <img src={rental.cover} alt={rental.title} />
        </Link>
        <div className="card-body">
          <h3>{rental.title}</h3>
        </div>
      </div>
    </div>
  );
};

export default Card;
