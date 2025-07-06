import React from 'react';
import './homepage.css';
import plateImage from './imagenes1/plateImage.png';

const HomePage = () => {
  return (
    <div className="homepage-container">
      <header className="hero-section">
        <div className="hero-content">
          <h1>
            Eat Well, Live Well
          </h1>
          <p className="hero-subtitle">
            Discover healthy, delicious recipes tailored to your diet or health needs. 
            Shop ingredients, track your progress, and enjoy a better lifestyle with Yumfull.
          </p>
          <div className="hero-buttons">
            <a href="/recipes" className="cta-button">Find Recipes</a>
            <a href="/Login" className="cta-button secondary">Login</a>
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
          <h2>Store Locator</h2>
          <p>Find local stores where you can buy fresh, healthy ingredients—fast and easy.</p>
        </div>
      </section>

      <section className="featured-recipes-section">
        <h2>Featured Recipes</h2>
        <div className="featured-recipes">
          <div className="recipe-card">
            <img src={plateImage} alt="Avocado Tacos" />
            <h3>Avocado Tacos</h3>
            <p>Fresh, creamy, and full of flavor. Perfect for a light lunch!</p>
            <a href="/recipes" className="view-recipe-link">View Recipe</a>
          </div>
          <div className="recipe-card">
            <img src={plateImage} alt="Broccoli Chicken" />
            <h3>Broccoli Chicken</h3>
            <p>High-protein, low-carb, and packed with nutrients.</p>
            <a href="/recipes" className="view-recipe-link">View Recipe</a>
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
