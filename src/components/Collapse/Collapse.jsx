import React, { useState, useEffect } from "react";
import "./collapse.css";
import arrowIcon from "../../assets/icons/Vector_top.png";

const CustomCollapse = ({ title, children, icon, id }) => {
  const [open, setOpen] = useState(false);
  const [rotate, setRotate] = useState(() => {
    const storedState = localStorage.getItem(`collapse_${id}`);
    return storedState ? JSON.parse(storedState) : false;
  });

  const toggleCollapse = () => {
    setOpen(!open);
    setRotate(!rotate);
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
    <div className="collapse-container about-collapse">
      <div className="collapse-style" onClick={toggleCollapse}>
        <h2>{title}</h2>
        {icon ? (
          <img
            src={icon}
            alt="Icone de flèche"
            className={`arrow-icon ${rotate ? "down" : ""}`}
          />
        ) : (
          <img
            src={arrowIcon}
            alt="Icone de flèche"
            className={`arrow-icon ${rotate ? "down" : ""}`}
          />
        )}
      </div>
      <div className={`collapse-content ${open ? "open" : ""}`}>
        <div className="content-inner">{children}</div>
      </div>
    </div>
  );
};

export default CustomCollapse;
