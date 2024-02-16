import React from "react";
import "./home.css";
import Banner from "../../components/Banner/Banner";
import imgLittoral from "../../assets/images/Littoral.png"

const Home = () => {
  return (
    <div>
      <Banner
        image={imgLittoral}
        text="Chez vous, partout et ailleurs"
        showText={true}
      />
    </div>
  );
};

export default Home;
