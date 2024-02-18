import React from "react";
import CustomCollapse from "../../components/Collapse/Collapse";
import data from "../../data/rentalData.json";

const Rental = () => {
  const { description, equipments } = data; // Obtenez la description et les équipements depuis vos données JSON

  return (
    <div>
      <CustomCollapse title="Description" id="description">
        {description}
      </CustomCollapse>
      <CustomCollapse title="Équipements" id="equipments">
        <ul>
          {equipments.map((equipment, index) => (
            <li key={index}>{equipment}</li>
          ))}
        </ul>
      </CustomCollapse>
    </div>
  );
};

export default Rental;
