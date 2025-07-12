import React from 'react';
import './Store.css';
import basketImage from './Images/basket.png';
import { useNavigate } from 'react-router-dom';


function Store() {
    const navigate = useNavigate();
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
                    { name: "brocoli", price: "$2.02" },
                    { name: "tomato", price: "$1.78" },
                    { name: "lettuce", price: "$2.39" },
                    { name: "carrot", price: "$0.65" },
                    { name: "potato", price: "$0.65" },
                    { name: "cucumber", price: "$0.54" },
                    { name: "Apples", price: "$2.97" },
                    { name: "Oranges", price: "$1.98" },
                    { name: "Banana", price: "$0.67" },
                    { name: "kiwi", price: "$2.59" },
                    { name: "Peaches", price: "$2.46" },
                    { name: "Onions", price: "$1.20" },
                    { name: "radish", price: "$1.20" },
                    { name: "corn", price: "$1.20" },
                    { name: "pumpkin", price: "$0.60" },
                    { name: "avocado", price: "$0.20" },
                    { name: "Strawberry", price: "$0.20" },
                    { name: "watermelon", price: "$0.50" },
                    { name: "eggplant", price: "$0.50" },
                    { name: "eggs", price: "$0.33" }
                ].map(({ name, price }, i) => (
                    <div className="product-card" key={i}>
                        <img src={`/images/Store/${name}.png`} alt={name} />
                        <h3>{name.charAt(0).toUpperCase() + name.slice(1)}</h3>
                        <h5>{price}</h5>
                        <h4>See store</h4>
                        <button onClick={() => navigate("/products")}>+</button>
                        
                        </div>
                    ))}
            </section>
        </div >
    );
}

export default Store;

