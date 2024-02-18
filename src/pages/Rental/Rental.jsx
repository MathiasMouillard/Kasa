import React from "react";
import { useParams, Navigate } from "react-router-dom";
import "./rental.css";
import CustomCollapse from "../../components/Collapse/Collapse";
import Tag from "../../components/Tag/Tag";
import rentalData from "../../data/rentalData.json";
import StarRated from "../../assets/icons/Star_rated.png";
import StarUnrated from "../../assets/icons/Star_unrated.png";

const Rental = () => {
  const { id } = useParams();
  const rental = rentalData.find((rental) => rental.id === id);

  if (!rental) {
    return <Navigate to="/Error" />;
  }

  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= rating) {
        stars.push(<img key={i} src={StarRated} alt="Rated Star" />);
      } else {
        stars.push(<img key={i} src={StarUnrated} alt="Unrated Star" />);
      }
    }
    return stars;
  };

  const [firstName, lastName] = rental.host.name.split(" ");

  return (
    <div className="rental-content">
      <div className="cover-image-container">
        <img src={rental.cover} alt={rental.title} className="cover-image" />
      </div>
      <div className="rental-location">
        <div className="rental-localisation">
          <h2>{rental.title}</h2>
          <span>{rental.location}</span>
          <div className="rental-tags">
            {rental.tags.map((tag, index) => (
              <Tag key={index} tag={tag} />
            ))}
          </div>
        </div>
        <div>
          <div className="rental-host-info">
            <img src={rental.host.picture} alt={rental.host.name} />
            <div className="rental-host">
              <span>{firstName}</span>
              <span>{lastName}</span>
            </div>
          </div>
          <div className="rental-rating">{renderStars(rental.rating)}</div>
        </div>
      </div>
      <div className="rental-collapse">
        <CustomCollapse title="Description" id={`description_${id}`}>
          <span>{rental.description}</span>
        </CustomCollapse>
        <CustomCollapse title="Equipments" id={`equipments_${id}`}>
          <ul>
            {rental.equipments.map((equipment, index) => (
              <li key={index}>{equipment}</li>
            ))}
          </ul>
        </CustomCollapse>
      </div>
    </div>
  );
};

export default Rental;
