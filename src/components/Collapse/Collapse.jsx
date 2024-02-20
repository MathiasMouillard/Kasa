import React, { useState, useEffect } from "react";
import "./collapse.css";
import arrowIcon from "../../assets/icons/Vector_top.png";

/**
 * Composant représentant un collapsible.
 * @param {string} title - Le titre du collapsible.
 * @param {React.ReactNode} children - Les éléments enfants du collapsible.
 * @param {string} [icon] - L'URL de la flèche à afficher dans le collapsible.
 * @param {string} id - L'identifiant unique du collapsible.
 */

const CustomCollapse = ({ title, children, icon, id }) => {
  // État pour suivre si le collapsible est ouvert ou fermé
  const [open, setOpen] = useState(false);
  // État pour suivre la rotation de l'icône
  const [rotate, setRotate] = useState(() => {
    // Récupération de l'état de rotation depuis le stockage local, s'il existe
    const storedState = localStorage.getItem(`collapse_${id}`);
    return storedState ? JSON.parse(storedState) : false;
  });

  // Fonction pour basculer l'état d'ouverture du collapsible
  const toggleCollapse = () => {
    setOpen(!open);
    setRotate(!rotate);
  };

  // Effet pour récupérer l'état d'ouverture depuis le stockage local lors du chargement du composant
  useEffect(() => {
    const storedState = localStorage.getItem(`collapse_${id}`);
    if (storedState) {
      setOpen(JSON.parse(storedState));
    }
  }, [id]);

  // Effet pour sauvegarder l'état d'ouverture dans le stockage local lorsqu'il change
  useEffect(() => {
    localStorage.setItem(`collapse_${id}`, JSON.stringify(open));
  }, [open, id]);

  return (
    <div className="collapse-container about-collapse">
      <div className="collapse-style" onClick={toggleCollapse}>
        <h2>{title}</h2>
        <img
          src={arrowIcon}
          alt="Icone de flèche"
          className={`arrow-icon ${rotate ? "down" : ""}`}
        />
      </div>
      <div className={`collapse-content ${open ? "open" : ""}`}>
        <div className="content-inner">{children}</div>
      </div>
    </div>
  );
};

export default CustomCollapse;
