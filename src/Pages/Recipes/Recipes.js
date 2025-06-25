import React from 'react';
//breakfast images
import eggavocado from './images/eggavocado.png';
import eggberries from './images/eggberries.png';
import eggtoast from './images/eggtoast.png';
import fruittoast from './images/fruittoast.png';
import salvadorantipico from './images/salvadorantipico.png';
import './Recipes.css';

function Recipes() {
    // Mapeo e imágenes
    const recipeImages = {
        eggavocado,
        eggberries,
        eggtoast,
        fruittoast,
        salvadorantipico
    };

    return (
        <div className="breakfast-page">
            <header>
                <div className="top-bar">
                    <button className="menu-icon">☰</button>
                    <div className="search-bar">
                        <input type="text" placeholder="" />
                    </div>
                </div>
                <h1>Breakfast</h1>
            </header>

            <section className="recipes-grid">
                {Object.keys(recipeImages).map((name, i) => (
                    <div className="recipe-card" key={i}>
                        <img src={recipeImages[name]} alt={name} />
                        <h3>{name.charAt(0).toUpperCase() + name.slice(1)}</h3>
                        <h5>Kcal. 00</h5>
                        <button>Recipe</button>
                    </div>
                ))}
            </section>
        </div>
        
    );
}

export default Recipes;
