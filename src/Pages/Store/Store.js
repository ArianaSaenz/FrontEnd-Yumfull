import React from 'react';
import './Store.css';
import basketImage from './Images/basket.png';


function Store() {
    return (
        /*<div className="store-page">
          <header className="header">
            <nav className="navbar">
              <div className="menu-icon">☰</div>
              <div className="search-bar">
                <input type="text" placeholder="Search..." />
                <button>🔍</button>
              </div>
            </nav>*/
        <div className="store-page">

            <img className="floating-basket" src={basketImage} alt="Basket" />

            <header className="header">

                <section className="hero">
                    <div className="hero-text">
                        <h1>Store</h1>
                        <p>
                            See the featured product and the store where it's available, with
                            key details to find it easily.
                        </p>
                    </div>
                </section>
            </header >




            <section className="product-grid">
                {[
                    "brocoli",
                    "tomato",
                    "lettuce",
                    "carrot",
                    "potato",
                    "cucumber",
                    "Apples",
                    "Oranges",
                    "Banana",
                    "kiwi",
                    "Peaches",
                    "Onions",
                    "radish",
                    "corn",
                    "pumpkin",
                    "avocado",
                    "Strawberry",
                    "watermelon",
                    "eggplant",
                    "eggs"
                ].map((name, i) => (
                    <div className="product-card" key={i}>
                        <img src={`/images/Store/${name}.png`} alt={name} />
                        <h3>{name.charAt(0).toUpperCase() + name.slice(1)}</h3>
                        <h5>$15.00</h5>
                        <h4>See store</h4>
                        <button>+</button>
                    </div>
                ))}
            </section>
        </div >
    );
}

export default Store;

