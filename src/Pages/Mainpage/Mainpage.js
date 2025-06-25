import './Mainpage.css';
import girls from './images/girls.png';
import Bowl from './images/Bowl.png';

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
                        <p>Color Power</p>
                        <div className="stars">
                            <span>★★★★★</span>
                        </div>
                    </div>
                    <div className="card">
                        <img src={Bowl} alt="Platillo Share of Energy" />
                        <p>Share of Energy</p>
                        <div className="stars">
                            <span>★★★★★</span>
                        </div>
                    </div>
                    <div className="card">
                        <img src={Bowl} alt="Platillo Zucchini Taste" />
                        <p>Zucchini Taste</p>
                        <div className="stars">
                            <span>★★★★★</span>
                        </div>
                    </div>
                    <div className="card">
                        <img src={Bowl} alt="Platillo Organ Mix" />
                        <p>Organ Mix</p>
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
                            <button className="btn-yellow">Click here</button>
                            <p>Teaching how about healthy feeding and body during puberty.</p>
                        </div>
                        <div className="btn-row">
                            <button className="btn-yellow">Click here</button>
                            <p>Helping you during pregnancy and raising the next generation.</p>
                        </div>
                    </div>
                </div>
            </section>

            <footer></footer>
        </>
    );
}

export default Mainpage;