import './Products.css';
import { useNavigate } from "react-router-dom";
import brocoli from './Images/brocoli.png';
import romaine from './Images/romaine lettuce.png';
import corn from './Images/corn.png';
import cucumber from './Images/cucumber.png';
import eggplant from './Images/eggplant.png';
import tomato from './Images/tomato.png';

import { CgArrowDownO } from "react-icons/cg";
import { CgArrowUpO } from "react-icons/cg";
import { IoArrowUndoCircle } from "react-icons/io5";
import { CgShoppingCart } from "react-icons/cg";


function Products() {
    const navigate = useNavigate();
    return (
        <div className="product-page">
            <main className="product-main">
                < button className="back-button" onClick={() => navigate("/Store")}>
                    < IoArrowUndoCircle />
                </button>

                <section className="product-details">
                    <div className="product-card">
                        <img className="product-img" src={brocoli} alt='brocoli' />
                    </div>

                    <div className="product-info">
                        <h1>Fresh Broccoli</h1>
                        <div className="stars">⭐⭐⭐⭐⭐</div>
                        <div className="price-range">
                            <p className="price-title">Price Range</p>
                            <div className="prices">
                                <span>$1.25 <CgArrowDownO className="price-icon" /> </span>
                                <span>$2.25 <CgArrowUpO className="price-icon" /> </span>
                            </div>

                            <div className="description">
                                <h2>Product description</h2>
                                <p>
                                    Crunchy and green, this veggie fits into any cozy recipe. From quick stir-fries to slow Sunday meals it’s always a good idea.
                                </p>
                            </div>



                        </div>
                    </div>
                </section>

                <section className="purchase-section">
                    <p>You can easily find the stores that have available this product</p>
                    <button className="purchase-button">
                        Purchase <CgShoppingCart />
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
                        <div className="veggie-card">
                            <img src={tomato} alt='tomate' />
                            <p>Tomato</p>
                            <p>$0.15 - $0.50</p>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
}

export default Products;