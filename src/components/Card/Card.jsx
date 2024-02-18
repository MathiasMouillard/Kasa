import React from "react";
import { Link } from "react-router-dom";
import "./card.css";

const Card = ({ rental }) => {
  return (
    <Link to={`/Rental/${rental.id}`} className="card-link">
      <div className="card" id={rental.id}>
        <img src={rental.cover} alt={rental.title} />
        <div className="card-body">
          <h2>{rental.title}</h2>
        </div>
      </div>
    </Link>
  );
};

export default Card;
