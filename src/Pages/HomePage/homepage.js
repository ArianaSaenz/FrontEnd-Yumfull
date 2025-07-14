import React from "react";
import plateImage from "./imagenes1/plato1.png";
import "./homepage.css";

function Home() {
  const percentage = 72;
  const strokeDasharray = 440;
  const strokeDashoffset = strokeDasharray - (strokeDasharray * percentage) / 100;

  return (
    <>
      <section className="banner">
        <div className="container-home">
          <div className="text-section">
            <h1>
              Full of yum <br /> Full of life
            </h1>
            <button className="start-button">Welcome!</button>
          </div>

          <div className="image-section">
            <div className="green-background"></div>
            <img src={plateImage} alt="Healthy Plate" className="plate-image" />
          </div>
        </div>
      </section>
      <br></br>
      <br></br>
      <section className="smart-body-mode">
        <h2 className="fw-bold">Wanna check your daily health state?</h2>
        <br></br>
        <div>
          <div className="row">
            <div className="col-md-6">
              <div className="calorie-tracker">
                <svg className="circles" width="200" height="200">
                  <circle
                    cx="50%"
                    cy="50%"
                    r="85"
                    stroke="#ffffff"
                    strokeWidth="15"
                    fill="none"
                  />
                  <circle
                    cx="50%"
                    cy="50%"
                    r="70"
                    stroke="#023b00ff"
                    strokeWidth="17"
                    fill="none"
                    strokeDasharray={strokeDasharray}
                    strokeDashoffset={strokeDashoffset}
                    strokeLinecap="round"
                  />
                </svg>
                <h4 className="text-white text-3xl font-bold mt-2">1470 kcal</h4>
              </div>
            </div>
            <div className="col-md-6">
              <div className="trackers">
                  <div className="tracks col-mb-4">
                    <h3 className="fw-bold">78 bpm ❤️</h3>
                    <p className="bold">Heart rate</p>
                    <div>
                      <h3 className="fw-bold">60% 🔥</h3>
                      <p className="bold">Stress level</p>
                    </div>
                  </div>
                  <div className="tracks col-mb-4">
                    <div>
                      <h3 className="fw-bold">7h 45m 🌙</h3>
                      <p className="bold">Sleep hours</p>
                    </div>
                    <div>
                      <h3 className="fw-bold">8500 steps🚶</h3>
                      <p className="bold">Steps track</p>
                    </div>
                  </div>
                  <div className="tracks col-mb-4">
                    <div>
                      <h3 className="fw-bold">High⚡</h3>
                      <p className="bold">Activity</p>
                    </div>
                    <div>
                      <h3 className="fw-bold">Day 14💧</h3>
                      <p className="bold">Cycle</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
      </section >
    </>
  );
}

export default Home;
