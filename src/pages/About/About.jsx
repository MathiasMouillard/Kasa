import React from "react";
import "./About.css";
import Banner from "../../components/Banner/Banner";
import imgMontagne from "../../assets/images/Montagne.png";
import CustomCollapse from "../../components/Collapse/Collapse";

const About = () => {
  return (
    <div>
      <Banner image={imgMontagne} showText={false} />
      <CustomCollapse title="Fiabilité" id="collapse1">
        Les annonces postées sur Kasa garantissent une fiabilité totale. Les
        photos sont conformes aux logements, et toutes les informations sont
        régulièrement vérifiées par nos équipes.
      </CustomCollapse>
      <CustomCollapse title="Respect" id="collapse2">
        La bienveillance fait partie des valeurs fondatrices de Kasa. Tout
        comportement discriminatoire ou de perturbation du voisinage entraînera
        une exclusion de notre plateforme.
      </CustomCollapse>
      <CustomCollapse title="Service" id="collapse3">
        La bienveillance fait partie des valeurs fondatrices de Kasa. Tout
        comportement discriminatoire ou de perturbation du voisinage entraînera
        une exclusion de notre plateforme.
      </CustomCollapse>
      <CustomCollapse title="Sécurité" id="collapse4">
        La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour
        les voyageurs, chaque logement correspond aux critères de sécurité
        établis par nos services. En laissant une note aussi bien à l'hôte qu'au
        locataire, cela permet à nos équipes de vérifier que les standards sont
        bien respectés. Nous organisons également des ateliers sur la sécurité
        domestique pour nos hôtes.
      </CustomCollapse>
    </div>
  );
};

export default About;
