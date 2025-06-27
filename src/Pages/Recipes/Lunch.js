import React from 'react';
//lunch images
import broccolichicken from './images/broccolichicken.png';
import broccolishrimp from './images/broccolishrimp.png';
import chickenvegetable from './images/chickenvegetable.png';
import ricechicken from './images/ricechicken.png';
import vegetablepasta from './images/vegetablepasta.png';
import './Recipes.css';

function Lunch() {
    // Mapeo e imágenes
    const recipeImages = {
        broccoliChicken: broccolichicken,
        broccoliShrimp: broccolishrimp,
        chickenVegetable: chickenvegetable,
        riceChicken: ricechicken,
        vegetablePasta:vegetablepasta
    };

    return (
        <div className="lunch-page">
            <header>
                <div className="top-bar">
                    <button className="menu-icon">☰</button>
                    <div className="search-bar">
                        <input type="text" placeholder="" />
                    </div>
                </div>
                <h1>Lunch</h1>
            </header>

            <section className="recipes-grid">
                {Object.keys(recipeImages).map((name, i) => (
                    <div className="recipe-card" key={i}>
                        <img src={recipeImages[name]} alt={name} />
                        <h3>{name.replace(/([a-z])([A-Z])/g, '$1 $2').replace(/^./, str => str.toUpperCase())}</h3>
                        <h5>Kcal. 00</h5>
                        <button>Recipe</button>
                    </div>
                ))}
            </section>
        </div>
        
    );
}

export default Lunch;
