import './Recipes.css';
import salvadorantipico from './images/salvadorantipico.png';
import eggavocado from './images/eggavocado.png';
import fruittoast from './images/fruittoast.png';
import omelette from './images/omelette.png';
import broccolichicken from './images/broccolichicken.png';
import broccolishrimp from './images/broccolishrimp.png';
import chickenvegetable from './images/chickenvegetable.png';
import vegetablepasta from './images/vegetablepasta.png';
import pupusas from './images/pupusas.png';
import tunasalad from './images/tunasalad.png';
import sandwich from './images/sandwich.png';
import avocadotacos from './images/avocadotacos.png';
import yogurtapple from './images/yogurtapple.png';
import oatsfruit from './images/oatsfruit.png';
import granolabar from './images/granolabar.png';
import peanutbuttercookie from './images/peanutbuttercookie.png';


function Recipes() {
    return (
        <>            
            <header>
                <div className="top-bar">
                    <button className="menu-icon">☰</button>
                    <div className="search-bar">
                        <input type="text" placeholder="" />
                    </div>
                </div>
                <h1>

                    Reci<span className="highlight">pes</span>
                </h1>
            </header>
            <main>
                <section className="category">
                    <h2>Breakfast</h2>
                    <div className="recipe-grid">
                        <div className="recipe-card">
                            <img src={salvadorantipico} alt='Salvadoran Tipico'/>
                            <h3>Salvadoran Típico</h3>
                            <p>Kcal. 00 </p>
                            <div className="rating">
                                <span>★</span>
                                <span>★</span>
                                <span>★</span>
                                <span>★</span>
                                <span>★</span>
                            </div>
                        </div>
                        <div className="recipe-card">
                            <img src={eggavocado} alt='Egg&Avocado'/>
                            <h3>Egg&Avocado</h3>
                            <p>Kcal. 00 </p>
                            <div className="rating">
                                <span>★</span>
                                <span>★</span>
                                <span>★</span>
                                <span>★</span>
                                <span>★</span>
                            </div>
                        </div>
                        <div className="recipe-card">
                            <img src={fruittoast} alt='Fruit Toast'/>
                            <h3>Fruit Toast</h3>
                            <p>Kcal. 00 </p>
                            <div className="rating">
                                <span>★</span>
                                <span>★</span>
                                <span>★</span>
                                <span>★</span>
                                <span>★</span>
                            </div>
                        </div>
                        <div className="recipe-card">
                            <img src={omelette} alt='Omelette'/>
                            <h3>Omelette</h3>
                            <p>Kcal. 00 </p>
                            <div className="rating">
                                <span>★</span>
                                <span>★</span>
                                <span>★</span>
                                <span>★</span>
                                <span>★</span>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="category">
                    <h2>Lunch</h2>
                    <div className="recipe-grid">
                        <div className="recipe-card">
                            <img src={broccolichicken} alt='Broccoli&Chicken'/>
                            <h3>Broccoli&Chicken</h3>
                            <p>Kcal. 00 </p>
                            <div className="rating">
                                <span>★</span>
                                <span>★</span>
                                <span>★</span>
                                <span>★</span>
                                <span>★</span>
                            </div>
                        </div>
                        <div className="recipe-card">
                            <img src={broccolishrimp} alt='Broccoli&Shrimp'/>
                            <h3>Broccoli&Shrimp</h3>
                            <p>Kcal. 00 </p>
                            <div className="rating">
                                <span>★</span>
                                <span>★</span>
                                <span>★</span>
                                <span>★</span>
                                <span>★</span>
                            </div>
                        </div>
                        <div className="recipe-card">
                            <img src={chickenvegetable} alt='Chicken&Vegetable'/>
                            <h3>Chicken&Vegetable</h3>
                            <p>Kcal. 00 </p>
                            <div className="rating">
                                <span>★</span>
                                <span>★</span>
                                <span>★</span>
                                <span>★</span>
                                <span>★</span>
                            </div>
                        </div>
                        <div className="recipe-card">
                            <img src={vegetablepasta} alt='V Pasta'/>
                            <h3>Vegetable Pasta</h3>
                            <p>Kcal. 00 </p>
                            <div className="rating">
                                <span>★</span>
                                <span>★</span>
                                <span>★</span>
                                <span>★</span>
                                <span>★</span>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="category">
                    <h2>Dinner</h2>
                    <div className="recipe-grid">
                        <div className="recipe-card">
                            <img src={pupusas} alt='Pupusas'/>
                            <h3>Pupusas</h3>
                            <p>Kcal. 00 </p>
                            <div className="rating">
                                <span>★</span>
                                <span>★</span>
                                <span>★</span>
                                <span>★</span>
                                <span>★</span>
                            </div>
                        </div>
                        <div className="recipe-card">
                            <img src={tunasalad} alt='T Salad'/>
                            <h3>Tuna Salad</h3>
                            <p>Kcal. 00 </p>
                            <div className="rating">
                                <span>★</span>
                                <span>★</span>
                                <span>★</span>
                                <span>★</span>
                                <span>★</span>
                            </div>
                        </div>
                        <div className="recipe-card">
                            <img src={sandwich} alt='H Sandwich'/>
                            <h3>Ham Sandwich</h3>
                            <p>Kcal. 00 </p>
                            <div className="rating">
                                <span>★</span>
                                <span>★</span>
                                <span>★</span>
                                <span>★</span>
                                <span>★</span>
                            </div>
                        </div>
                        <div className="recipe-card">
                            <img src={avocadotacos} alt='Avocado Tacos'/>
                            <h3>Avocado Tacos</h3>
                            <p>Kcal. 00 </p>
                            <div className="rating">
                                <span>★</span>
                                <span>★</span>
                                <span>★</span>
                                <span>★</span>
                                <span>★</span>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="category">
                    <h2>Snacks and Desserts</h2>
                    <div className="recipe-grid">
                        <div className="recipe-card">
                            <img src={yogurtapple} alt='Yogurt&Apple'/>
                            <h3>Yogurt&Apple</h3>
                            <p>Kcal. 00 </p>
                            <div className="rating">
                                <span>★</span>
                                <span>★</span>
                                <span>★</span>
                                <span>★</span>
                                <span>★</span>
                            </div>
                        </div>
                        <div className="recipe-card">
                            <img src={oatsfruit} alt='Oats&Fruit'/>
                            <h3>Oats&Fruit</h3>
                            <p>Kcal. 00 </p>
                            <div className="rating">
                                <span>★</span>
                                <span>★</span>
                                <span>★</span>
                                <span>★</span>
                                <span>★</span>
                            </div>
                        </div>
                        <div className="recipe-card">
                            <img src={granolabar} alt='Granola Bar'/>
                            <h3>Granola Bar</h3>
                            <p>Kcal. 00 </p>
                            <div className="rating">
                                <span>★</span>
                                <span>★</span>
                                <span>★</span>
                                <span>★</span>
                                <span>★</span>
                            </div>
                        </div>
                        <div className="recipe-card">
                            <img src={peanutbuttercookie} alt='PB Cookie'/>
                            <h3>Peanutbutter Cookie</h3>
                            <p>Kcal. 00 </p>
                            <div className="rating">
                                <span>★</span>
                                <span>★</span>
                                <span>★</span>
                                <span>★</span>
                                <span>★</span>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}

export default Recipes;