import React from "react";
import plateImage from "./imagenes1/plato_home.png"; // Asegúrate de poner tu imagen aquí

function Home() {
  return (
    <div className="container-home">
      <div className="text-section">
        <h1>
          Full of yum <br /> Full of life
        </h1>
        <button className="start-button">Let’s get started</button>
      </div>

      <div className="image-section">
        <div className="green-background"></div>
        <img src={plateImage} alt="Healthy Plate" className="plate-image" />
      </div>
    </div>
  );
}

export default Home;
