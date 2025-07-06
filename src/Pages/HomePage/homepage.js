import React from 'react';
import './homepage.css';
import plateImage from './imagenes1/plateImage.png';
import avocadotacos from './imagenes1/avocadotacos.png';
import broccolichicken from './imagenes1/broccolichicken.png';
import omelette from './imagenes1/omelette.png';
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
                        <a href="/recipes" className="cta-button">Find Recipes</a>
                    </div>
                </div>
                <div className="hero-image">
                    <img src={plateImage} alt="Healthy Bowl" />
                </div>
            </header>

            <section className="features-section">
                <div className="feature-card">
                    <h2>Personalized Recipes</h2>
                    <p>Get recipes based on your dietary preferences or health conditions. Whether you’re vegan, gluten-free, or managing diabetes, we have options for you.</p>
                </div>
                <div className="feature-card">
                    <h2>Smart Ingredient Lists</h2>
                    <p>See exactly what you need for each recipe, with nutrition info and easy shopping lists.</p>
                </div>
                <div className="feature-card">
                    <h2>Girls' Spot</h2>
                    <p>Explore our Girls' Spot for expert tips, community support, and resources on women's health, nutrition, and wellness during every stage of life.</p>
                </div>
            </section>

            <section className="featured-recipes-section">
                <h2>Featured Recipes</h2>
                <div className="featured-recipes">
                    <div className="recipe-card">
                        <img src={avocadotacos} alt="Avocado Tacos" />
                        <h3>Avocado Tacos</h3>
                        <p>Fresh, creamy, and full of flavor. Perfect for a light lunch!</p>
                        <a href="/recipes" className="cta-button">View Recipe</a>
                    </div>
                    <div className="recipe-card">
                        <img src={broccolichicken} alt="Broccoli Chicken" />
                        <h3>Broccoli & Chicken</h3>
                        <p>High-protein, low-carb, and packed with nutrients.</p>
                        <a href="/recipes" className="cta-button">View Recipe</a>
                    </div>
                    <div className="recipe-card">
                        <img src={omelette} alt="Omelette" />
                        <h3>Omelette</h3>
                        <p>Fluffy eggs with your favorite veggies. A protein-packed breakfast!</p>
                        <a href="/recipes" className="cta-button">View Recipe</a>
                    </div>
                    <div className="recipe-card">
                        <img src={yogurtapple} alt="Yogurt Apple" />
                        <h3>Yogurt Apple</h3>
                        <p>Creamy yogurt with crisp apples and a touch of honey. Refreshing and healthy!</p>
                        <a href="/recipes" className="cta-button">View Recipe</a>
                    </div>
                </div>
            </section>

            <footer className="homepage-footer">
                <p>© {new Date().getFullYear()} Yumfull. Eat healthy, be happy.</p>
            </footer>
        </div>
    );
};

export default HomePage;
