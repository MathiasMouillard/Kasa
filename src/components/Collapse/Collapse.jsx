import React, { useState, useEffect } from "react";
import "./collapse.css";
import arrowIcon from "../../assets/icons/Vector_top.png";

const CustomCollapse = ({ title, children, icon, id }) => {
  const [open, setOpen] = useState(false);
  const [rotate, setRotate] = useState(false);

  const toggleCollapse = () => {
    setOpen(!open);
    setRotate(!rotate); // Inverse l'état de rotation
  };

  useEffect(() => {
    const storedState = localStorage.getItem(`collapse_${id}`);
    if (storedState) {
      setOpen(JSON.parse(storedState));
    }
  }, [id]);

  useEffect(() => {
    localStorage.setItem(`collapse_${id}`, JSON.stringify(open));
  }, [open, id]);

  return (
    <div className="collapse-container">
      <div className="collapse-style">
        <h2>{title}</h2>
        {icon ? (
          <img
            src={icon}
            alt="Icone de flèche"
            className={`rotate ${rotate ? "down" : ""}`}
            onClick={toggleCollapse}
          />
        ) : (
          <img
            src={arrowIcon}
            alt="Icone de flèche"
            className={`rotate ${rotate ? "down" : ""}`}
            onClick={toggleCollapse}
          />
        )}
      </div>
      {open && <div className="collapse-content">{children}</div>}
    </div>
  );
};

export default CustomCollapse;
