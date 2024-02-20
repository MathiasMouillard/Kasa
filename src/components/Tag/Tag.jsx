import React from "react";
import "./tag.css";

/**
 * Composant représentant un tag.
 * @param {string} tag - Le contenu du tag à afficher.
 */

const Tag = ({ tag }) => {
  return <div className="tag">{tag}</div>;
};

export default Tag;
