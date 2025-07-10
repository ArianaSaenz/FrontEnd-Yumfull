import React from 'react';
import './homepage.css';
import plateImage from './imagenes1/plateImage.png';
import avocadotacos from './imagenes1/avocadotacos.png';
import broccolichicken from './imagenes1/broccolichicken.png';
import yogurtapple from './imagenes1/yogurtapple.png';
import brain from './imagenes1/brain.png';
import salad from './imagenes1/salad.png';
import chart from './imagenes1/combo-chart.png';


const HomePage = () => {
    return (
        <div className="homepage-container">
            <header className="hero-section">
                <div className="hero-content">
                    <h1>
                        Full of yum<br />
                        Full of life
                    </h1>
                    <p className="hero-subtitle">
                        Discover healthy, delicious recipes tailored to your diet or health needs.
                        Shop ingredients, track your progress, and enjoy a better lifestyle with Yumfull.
                    </p>
                    <div className="hero-buttons">
                        <button className="boton">Find Recipes</button>
                    </div>
                </div>
                <div className="hero-image">
                    <img src={plateImage} alt="Healthy Bowl" />
                </div>
            </header>

            <section className="featured-recipes-section">
                <h2>Recomendations for today</h2>
                <div className="featured-recipes">
                    <div className="recipe-card">
                        <img src={avocadotacos} alt="Avocado Tacos" />
                        <h3>Avocado Tacos</h3>
                        <p>Fresh, creamy, and full of flavor. Perfect for a light lunch!</p>
                        <button className="boton">View Recipe</button>
                    </div>
                    <div className="recipe-card">
                        <img src={broccolichicken} alt="Broccoli Chicken" />
                        <h3>Broccoli & Chicken</h3>
                        <p>High-protein, low-carb, and packed with nutrients.</p>
                        <button className="boton">View Recipe</button>
                    </div>
                    <div className="recipe-card">
                        <img src={yogurtapple} alt="Yogurt Apple" />
                        <h3>Yogurt Apple</h3>
                        <p>Creamy yogurt with crisp apples and a touch of honey. Refreshing and healthy!</p>
                        <button className="boton">View Recipe</button>
                    </div>
                </div>
            </section>

            <section className="progreso-smart-section">
                <div className="progreso-container">
                    <div className="titulo">Your progress this week</div>
                    <div className="mensaje">
                        You've been eating according to your body state for 4 days. That’s helping to regulate your energy and focus!
                    </div>
                    <div className="mensaje">✅ 3 out of 5 balanced meals per day</div>
                    <div className="mensaje">✅ 2 anti-stress snacks added</div>
                    <div className="mensaje">✅ 1 day with optimal hydration</div>
                    <div className="sugerencia">💡 We suggest sleeping 1 hour more tonight</div>
                    <button className="boton">View full progress</button>
                </div>

                <div className="progreso-container menstrual">
                    <div className="titulo">Your menstrual summary</div>
                    <div className="mensaje">
                        You've been eating according to your body state for 4 days. That’s helping to regulate your energy and focus!
                    </div>
                    <div className="mensaje">Current Phase: Luteal</div>
                    <div className="mensaje">Days until next period: 5</div>
                    <div className="mensaje">Symptoms: Mild cramps, mood swings</div>
                    <div className="sugerencia">🌿 Eat magnesium-rich foods like spinach & seeds</div>
                    <button className="boton">View full recommendations</button>
                </div>
            </section>


            <section className="how-it-works-section">
                <h2>How YumFull Helps You</h2>
                <p className="how-it-works-subtitle">
                    From your body to your plate — here’s how we make it easy.
                </p>
                <div className="how-it-works-steps">
                    <div className="step-card">
                        <img src={brain} alt="Brain" />
                        <h3>Understand Your Needs</h3>
                        <p>We analyze your stress, sleep, energy and cravings.</p>
                    </div>
                    <div className="step-card">
                        <img src={salad} alt="Meal" />
                        <h3>Get Custom Meals</h3>
                        <p>Receive daily meal recommendations tailored to you.</p>
                    </div>
                    <div className="step-card">
                        <img src={chart} alt="Progress" />
                        <h3>Track and Improve</h3>
                        <p>See your progress with goals and smart feedback.</p>
                    </div>
                </div>

            </section>
        </div>
    );
};

export default HomePage;
