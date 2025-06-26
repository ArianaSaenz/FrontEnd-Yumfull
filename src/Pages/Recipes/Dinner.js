import React from 'react';
//dinner images
import avocadotacos from './images/avocadotacos.png';
import pupusas from './images/pupusas.png';
import salvadorantipico from './images/salvadorantipico.png';
import tunasalad from './images/tunasalad.png';
import sandwich from './images/sandwich.png';
import './Recipes.css';

function Dinner() {
    // Mapeo e imágenes
    const recipeImages = {
       avocadoTacos: avocadotacos,
       pupusas:pupusas,
       salvadoranTípico: salvadorantipico,
       tunaSalad: tunasalad,
       hamSandwich: sandwich
    };

    return (
        <div className="dinner-page">
            <header>
                <div className="top-bar">
                    <button className="menu-icon">☰</button>
                    <div className="search-bar">
                        <input type="text" placeholder="" />
                    </div>
                </div>
                <h1>Dinner</h1>
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

export default Dinner;
