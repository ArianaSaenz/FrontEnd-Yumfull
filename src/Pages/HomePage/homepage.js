import React from 'react';
import './homepage.css';
import plateImage from './imagenes1/plateImage.png';
import avocadotacos from './imagenes1/avocadotacos.png';
import broccolichicken from './imagenes1/broccolichicken.png';
import yogurtapple from './imagenes1/yogurtapple.png';



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
                        <button href="/recipes" className="boton">Find Recipes</button>
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
                        <button href="/recipes" className="boton">View Recipe</button>
                    </div>
                    <div className="recipe-card">
                        <img src={broccolichicken} alt="Broccoli Chicken" />
                        <h3>Broccoli & Chicken</h3>
                        <p>High-protein, low-carb, and packed with nutrients.</p>
                        <button href="/recipes" className="boton">View Recipe</button>
                    </div>
                    <div className="recipe-card">
                        <img src={yogurtapple} alt="Yogurt Apple" />
                        <h3>Yogurt Apple</h3>
                        <p>Creamy yogurt with crisp apples and a touch of honey. Refreshing and healthy!</p>
                        <button href="/recipes" className="boton">View Recipe</button>
                    </div>
                </div>
            </section>

            <section className="progreso-smart-section">
                <div className="progreso-container">
                    <div className="titulo">Your progress this week</div>
                    <div className="mensaje">
                        You've been eating according to your body state for 4 days. That’s helping to regulate your energy and focus!
                    </div>
                    <div className="item">✅ 3 out of 5 balanced meals per day</div>
                    <div className="item">✅ 2 anti-stress snacks added</div>
                    <div className="item">✅ 1 day with optimal hydration</div>
                    <div className="sugerencia">💡 We suggest sleeping 1 hour more tonight</div>
                    <button className="boton">View full progress</button>
                </div>

                <div className="progreso-container">
                    <div className="titulo">Smart Body Modes</div>
                    <div className="mensaje">
                        Slept 5h 32min → Low energy levels
                    </div>
                    <div className="mensaje">
                        Heart rate: slightly elevated
                    </div>
                    <div className="mensaje">
                        Stress: moderate due to recent activity
                    </div>
                    <div className="mensaje">
                        We suggest a tryptophan-rich meal
                    </div>
                    <div className="sugerencia">🧠 We suggest a tryptophan-rich meal</div>
                    <button className="boton">View recommendations</button>
                </div>
            </section>
        </div>

    );
};

export default HomePage;
