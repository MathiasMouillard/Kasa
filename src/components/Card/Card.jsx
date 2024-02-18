import React from "react";
import { Link } from "react-router-dom";
import "./card.css";

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
