import React from "react";
import plateImage from "./imagenes1/plateImage.png";
import chooseIcon from "./imagenes1/chooseIcon.png";
import choosenIcon from "./imagenes1/choosenIcon.png";
import purposeIcon from "./imagenes1/purposeIcon.png";

import "./homepage.css";

function Home() {
    return (
        <div className="container-home">
            <div className="text-section">
                <h1>
                    Full of yum <br /> Full of life
                </h1>
                <p className="subtitle">Welcome to this amazing experience!</p>
                <button className="start-button">Start Now</button>
            </div>

            <div className="image-section">
                <div className="green-background"></div>
                <img src={plateImage} alt="Healthy Plate" className="plate-image" />
            </div>

            <div className="info-section">
                <div className="info-block">
                    <div className="info-icon">
                        <img src={purposeIcon} alt="Our purpose" style={{ width: 45, height: 45 }} />
                    </div>
                    <h3>Our purpose</h3>
                    <p>At YumFull we believe in conscious, accessible food, designed for you. Our goal is to accompany you in every stage of your life, offering you the best of healthy eating.</p>
                </div>
                <div className="info-block">
                    <div className="info-icon">
                        <img src={chooseIcon} alt="Why choose YumFull?" style={{ width: 45, height: 45 }} />
                    </div>
                    <h3>Why choose YumFull?</h3>
                    <p>Because your well-being is our priority. We offer natural and practical options designed especially for you, with real, balanced foods that fit your lifestyle.</p>
                </div>
                <div className="info-block">
                    <div className="info-icon">
                        <img src={choosenIcon} alt="They have already chosen it" style={{ width: 45, height: 45 }} />
                    </div>
                    <h3>They have already chosen it</h3>
                    <p>Since I discovered YumFull, eating healthy is no longer boring. I love their recipes and how they take care of me at every stage of my cycle. – Anna, 22 years old.</p>
                </div>
            </div>
        </div>
    );
}

export default Home;

