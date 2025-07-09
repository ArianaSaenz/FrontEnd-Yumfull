import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
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

    const settings = {
    dots: true,
    infinite: true, // permite repetición
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 2
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 1
            }
        }
    ]
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
                <Slider {...settings}>
                    {Object.keys(recipeImages).map((name, i) => (
                        <div className="recipe-card" key={i}>
                            <img src={recipeImages[name]} alt={name} />
                            <h3>{name.replace(/([a-z])([A-Z])/g, '$1 $2').replace(/^./, str => str.toUpperCase())}</h3>
                            <h5>Kcal. 00</h5>
                            <button>Recipe</button>
                        </div>
                    ))}
                </Slider>
            </section>
        </div>
        
    );
}

export default Lunch;
