import React from "react";
import './Products.css';
import { useNavigate } from "react-router-dom";
import brocoli from './Images/brocoli.png';
import romaine from './Images/romaine lettuce.png';
import corn from './Images/corn.png';
import cucumber from './Images/cucumber.png';
import eggplant from './Images/eggplant.png';

function Products() {
    const navigate = useNavigate();
    return (
        <div className="product-page">
            <main className="product-main">
                <button className="back-button" onClick={() => navigate("/Store")}>
                    ← Back
                </button>

                <section className="product-details">
                    <img src={brocoli} alt='brocoli' />

                    <div className="product-info">
                        <h1>Fresh Broccoli</h1>
                        <div className="stars">⭐⭐⭐⭐⭐</div>
                        <p className="price-range">
                            Price Range: <span className="price1">$1.25</span> <span className="price2">$2.25</span>
                        </p>
                        <p className="description">
                            Crunchy and green, this veggie fits into any cozy recipe. From quick stir-fries to slow Sunday meals it’s always a good idea.
                        </p>
                    </div>
                </section>

                <section className="purchase-section">
                    <p>You can easily find the stores that have available this product</p>
                    <button className="purchase-button">
                        Purchase 🛒
                    </button>
                </section>

                <section className="more-vegetables">
                    <h2>More vegetables</h2>
                    <div className="veggie-cards">
                        <div className="veggie-card">
                            <img src={romaine} alt='romaine' />
                            <p>Romaine Lettuce</p>
                            <p>$1.25 - $2.25</p>
                        </div>
                        <div className="veggie-card">
                            <img src={corn} alt='corn' />
                            <p>Ears of Corn</p>
                            <p>$1.50 - $2.00</p>
                        </div>
                        <div className="veggie-card">
                            <img src={cucumber} alt='cucumber' />
                            <p>Cucumber</p>
                            <p>$0.90 - $1.80</p>
                        </div>
                        <div className="veggie-card">
                            <img src={eggplant} alt='eggplant' />
                            <p>Eggplant</p>
                            <p>$1.00 - $2.00</p>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
}

export default Products;