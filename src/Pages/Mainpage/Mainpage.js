import './Mainpage.css';
import girls from './images/girls.png';
import Bowl from './images/Bowl.png';
import carne from './images/carne.png';
import fruitsalad from './images/fruitsalad.png';
import pasta from './images/pasta.png';
import plato from './images/plato.png';

function Mainpage() {
    return (
        <>
            <section className="hero-section">
                <div className="hero-content">
                    <h1>
                        Ready to IMPROVE
                        <br />
                        your feeding?
                    </h1>
                    <button className="btn-start">Start now!</button>
                </div>
                <div className="hero-image-container">
                    <img
                        src={Bowl}
                        alt="Bowl de granola y frutas"
                        className="hero-bowl-image"
                    />
                    <div className="abstract-shape" />
                </div>
            </section>

            <section className="meal-selection-section">
                <h2>Take a look at the perfect selection!</h2>
                <p className="subtitle">
                    Discover wonderful, colorful and healthy options.
                </p>
                <div className="cards-container">
                    <div className="card">
                        <img src={Bowl} alt="Platillo Color Power" />
                        <p>Granola y frutas</p>
                        <div className="stars">
                            <span>★★★★★</span>
                        </div>
                    </div>
                    <div className="card">
                        <img src={carne} alt="Platillo Share of Energy" />
                        <p>Carne</p>
                        <div className="stars">
                            <span>★★★★★</span>
                        </div>
                    </div>
                    <div className="card">
                        <img src={fruitsalad} alt="Platillo Zucchini Taste" />
                        <p>Fruit Salad</p>
                        <div className="stars">
                            <span>★★★★★</span>
                        </div>
                    </div>
                    <div className="card">
                        <img src={pasta} alt="Platillo Organ Mix" />
                        <p>Pasta</p>
                        <div className="stars">
                            <span>★★★★★</span>
                        </div>
                    </div>
                </div>
            </section>

            <section className="female-health-section">
                <div className="female-image-container">
                    <img
                        src={girls}
                        alt="Grupo de mujeres sonriendo"
                        className="female-group-image"
                    />
                </div>
                <div className="female-content">
                    <h3>Girl, we care about you</h3>
                    <div className="button-group">
                        <div className="btn-row">
                            
                            <p>Teaching how about healthy feeding and body during puberty.</p>
                        </div>
                        <div className="btn-row">
                           
                            <p>Helping you during pregnancy and raising the next generation.</p>
                        </div>
                    </div>
                </div>
            </section>



             <section className="hero-section">
                <div className="hero-content">
                    <h1>
                        What Is a 
                        <br />
                        Healthy Weight?
                    </h1>
                </div>
                <div className="hero-image-container">
                    <img
                        src={plato}
                        alt="Bowl de granola y frutas"
                        className="hero-bowl-image"
                    />
                </div>
            </section>

            <section className="meal-selection-section">
                <h2>Eating well has never been this easy</h2>
                <p className="subtitle">
Discover recipes, tips, and practical tools to live a healthier lifestyle without the stress.
Learn to take care of your body through what you eat with delicious and accessible options made just for you.
                </p>
                   
            </section>

            <footer></footer>
        </>
    );
}

export default Mainpage;