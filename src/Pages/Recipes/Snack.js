import React from 'react';
//breakfast images
import granolabar from './images/granolabar.png';
import oatsfruit from './images/oatsfruit.png';
import peanutbuttercookie from './images/peanutbuttercookie.png';
import yogurtapple from './images/yogurtapple.png';
import applecake from './images/applecake.png';
import './Recipes.css';

function Snack() {
    // Mapeo e imágenes
    const recipeImages = {
    granolaBar: granolabar,
    oatsFruit: oatsfruit,
    peanutButterCookie: peanutbuttercookie,
    yogurtApple: yogurtapple,
    appleCake: applecake
    };


    return (
        <div className="snack-page">
            <header>
                <div className="top-bar">
                    <button className="menu-icon">☰</button>
                    <div className="search-bar">
                        <input type="text" placeholder="" />
                    </div>
                </div>
                <h1>Snacks and Desserts</h1>
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

export default Snack;
