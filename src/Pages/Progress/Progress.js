import './progress.css';
import heart from './Images/heart.png';
import medal from './Images/medal.png';
import salad from './Images/salad.png';

function Progress() {
    return (
        <div className="container py-4">
            <div className="row">
                {/* Left Panel */}
                <div className="col-md-6">
                    <section className="mb-4">
                        <div className="ad">Your goals</div>
                        <div className="d-flex gap-3">
                            <div className="goal-box"><img className="goals" src={heart} alt='heart'/></div>
                            <div className="goal-box"><img className="goals" src={medal} alt='medal'/></div>
                            <div className="goal-box"><img className="goals" src={salad} alt='goals'/></div>
                        </div>
                    </section>

                    <section className="mb-4">
                        <div className="ad">Achievements</div>
                        <div className="d-flex justify-content-between align-items-start">
                            <div>
                                <h1 className="fw-bold">25 <span role="img" aria-label="flame">🔥</span></h1>
                                <p>Days with YumFull</p>
                            </div>
                            <div>
                                <h1 className="fw-bold">184 <span role="img" aria-label="star">⭐</span></h1>
                                <p>Accumulated points</p>
                            </div>
                        </div>
                    </section>

                    <section>
                        <div className='ad'>You’ve unlocked a new level!</div>
                        <div className="streak gap-2 mt-2">
                            <div className="circle active">✔</div>
                            <div className="circle active">✔</div>
                            <div className="circle active">✔</div>
                            <div className="circle locked">🔒</div>
                            <div className="circle"></div>
                            <div className="circle"></div>
                        </div>
                    </section>
                </div>

                {/* Right Panel */}
                <div className="col-md-6">
                    <section className="mb-4">
                        <div className='ad'><span className="text-success">Top 5 Healthiest</span> users of the week</div>
                        <br />
                        <ul className="list-unstyled">
                            {['Caroline Johnson', 'Bruno Rodríguez', 'Estela González', 'Cristóbal Alvarado', 'Verónica Martínez'].map((user, index) => (
                                <li key={index} className="user-item">
                                    <span className="rank">{index + 1}</span> {user}
                                </li>
                            ))}
                        </ul>

                    </section>

                    <section>
                        <div className="calendar p-3 rounded">
                            <div className="day-header">S</div>
                            <div className="day-header">M</div>
                            <div className="day-header">T</div>
                            <div className="day-header">W</div>
                            <div className="day-header">T</div>
                            <div className="day-header">F</div>
                            <div className="day-header">S</div>

                            <div className="calendar-grid justify-content-between mb-2">
                                {Array.from({ length: 4 }).map((_, i) => (
                                    <span key={`blank-${i}`}></span>
                                ))}
                                {Array.from({ length: 31 }, (_, i) => {
                                    const day = i + 1;
                                    const activeDays = [18, 19, 20, 21, 22, 23, 24];
                                    const isActive = activeDays.includes(day);
                                    return (
                                        <span key={day} className={isActive ? 'day active' : 'day'}>
                                            {day}
                                        </span>
                                    );
                                })}
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default Progress;
