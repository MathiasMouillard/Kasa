import React from "react";
import "./About.css";
import Banner from "../../components/Banner/Banner";
import imgMontagne from "../../assets/images/Montagne.png";

const About = () => {
  return (
    <div>
      <Banner image={imgMontagne} showText={false} />
    </div>
  );
};

export default About;
