import './settings.css';

function Settings() {
    return (
        <div className="container">
            <aside className="sidebar">
                <nav className="nav-menu">
                    <ul>
                        <li data-target="profile-page" className="active">
                            <span className="material-symbols-outlined">person</span>
                            <span>My Profile</span>
                        </li>
                        <li data-target="notifications-page">
                            <span className="material-symbols-outlined">notifications</span>
                            <span>Notifications</span>
                        </li>
                        <li data-target="general-management-page">
                            <span className="material-symbols-outlined">settings</span>
                            <span>General Management</span>
                        </li>
                        <li data-target="food-preferences-page">
                            <span className="material-symbols-outlined">restaurant_menu</span>
                            <span>Food preferences</span>
                        </li>
                        <li data-target="others-page">
                            <span className="material-symbols-outlined">info</span>
                            <span>Others</span>
                        </li>
                    </ul>
                </nav>
                <div className="logout">
                    <span className="material-symbols-outlined">logout</span>
                    <span>Log Out</span>
                </div>
            </aside>
            <main id="profile-page" className="page-content active-page">
                <h1>My profile</h1>
                <div className="profile-header">
                    <div className="profile-avatar">
                        <span className="material-symbols-outlined">account_circle</span>
                    </div>
                    <div className="profile-info">
                        <h2>Eduardo Torres</h2>
                        <p>eduardotorres3@gmail.com</p>
                    </div>
                </div>
                <form className="profile-form">
                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input type="text" id="name" defaultValue="Eduardo Torres" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            defaultValue="eduardotorres3@gmail.com"
                        />
                    </div>
                    <div className="form-row">
                        <div className="form-group">
                            <label htmlFor="sexo">Sexo</label>
                            <select id="sexo">
                                <option value="masculino" selected="">
                                    Masculino
                                </option>
                                <option value="femenino">Femenino</option>
                                <option value="otro">Otro</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label htmlFor="fecha-nacimiento">Fecha de nacimiento</label>
                            <input
                                type="text"
                                id="fecha-nacimiento"
                                className="datepicker"
                                defaultValue="08 / 08 / 2009"
                            />
                        </div>
                    </div>
                </form>
            </main>
            <main id="notifications-page" className="page-content">
                <h1>Notifications</h1>
                <div className="notification-setting">
                    <label htmlFor="toggle-reminders">Activar recordatorios</label>
                    <label className="switch">
                        <input type="checkbox" id="toggle-reminders" />
                        <span className="slider round" />
                    </label>
                </div>
                <div className="notification-setting">
                    <label htmlFor="toggle-personalized">
                        Show personalized notifications
                    </label>
                    <label className="switch">
                        <input type="checkbox" id="toggle-personalized" />
                        <span className="slider round" />
                    </label>
                </div>
                <div className="notification-setting time-setting">
                    <label htmlFor="notification-time">Hora de notificación</label>
                    <input type="time" id="notification-time" defaultValue="08:00" />
                </div>
            </main>
            <main id="general-management-page" className="page-content">
                <h1>General management</h1>
                <div className="general-setting">
                    <label htmlFor="language">Language</label>
                    <select id="language">
                        <option value="english">English</option>
                        <option value="spanish">Spanish</option>
                    </select>
                </div>
                <div className="general-setting row-setting">
                    <div className="setting-group">
                        <label htmlFor="theme">Theme</label>
                        <select id="theme">
                            <option value="light">Light</option>
                            <option value="dark">Dark</option>
                        </select>
                    </div>
                    <div className="setting-group">
                        <label htmlFor="toggle-animations">Animations</label>
                        <label className="switch">
                            <input type="checkbox" id="toggle-animations" />
                            <span className="slider round" />
                        </label>
                    </div>
                </div>
            </main>
            <main id="food-preferences-page" className="page-content">
                <h1>Food preferences</h1>
                <p className="section-description">
                    We want to get to know you better to offer the best recommendations.
                </p>
                <div className="preference-group">
                    <label className="checkbox-container">
                        I am a vegetarian
                        <input type="checkbox" defaultChecked="checked" />
                        <span className="checkmark" />
                    </label>
                    <label className="checkbox-container">
                        I am a vegan
                        <input type="checkbox" />
                        <span className="checkmark" />
                    </label>
                    <label className="checkbox-container">
                        I avoid gluten
                        <input type="checkbox" />
                        <span className="checkmark" />
                    </label>
                    <label className="checkbox-container">
                        I avoid dairy products
                        <input type="checkbox" />
                        <span className="checkmark" />
                    </label>
                </div>
                <div className="form-group other-restrictions">
                    <label htmlFor="other-restrictions">Other restrictions:</label>
                    <input type="text" id="other-restrictions" />
                </div>
                <div className="tags-section">
                    <div className="tag-list-group">
                        <label>Products that I like:</label>
                        <div className="tags-container">
                            <div className="tag">
                                Avocado <span className="close-tag">x</span>
                            </div>
                            <div className="tag">
                                Onion <span className="close-tag">x</span>
                            </div>
                            <button className="add-tag-btn">+ Add more</button>
                        </div>
                    </div>
                    <div className="tag-list-group">
                        <label>Products that I don't like:</label>
                        <div className="tags-container">
                            <div className="tag">
                                Chicken <span className="close-tag">x</span>
                            </div>
                            <div className="tag">
                                Mayonnaise <span className="close-tag">x</span>
                            </div>
                            <button className="add-tag-btn">+ Add more</button>
                        </div>
                    </div>
                </div>
            </main>
            <div className="background-shapes">
                <div className="shape triangle1" />
                <div className="shape triangle2" />
                <div className="shape triangle3" />
                <div className="shape triangle4" />
                <div className="shape triangle5" />
            </div>
        </div>
    )
}

export default Settings;