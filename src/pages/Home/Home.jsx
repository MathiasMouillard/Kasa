import React from "react";
import { useState, useEffect } from "react";
import "./home.css";
import Banner from "../../components/Banner/Banner";
import imgLittoral from "../../assets/images/Littoral.png";
import Card from "../../components/Card/Card";
import rentalData from "../../data/rentalData.json";

const Home = () => {
  const [rentals, setRentals] = useState([]);

  useEffect(() => {
    setRentals(rentalData);
  }, []);

  return (
    <div className="home-content">
      <Banner
        image={imgLittoral}
        text="Chez vous, partout et ailleurs"
        showText={true}
      />
      <div className="rental-cards">
        {rentals.map((rental, index) => (
          <Card rental={rental} key={index} />
        ))}
      </div>
    </div>
  );
};

export default Home;
