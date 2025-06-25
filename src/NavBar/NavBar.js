import { Link } from "react-router-dom"
import React from 'react'
import { Period } from "../Pages/Period-section/Period"

export function NavBar() {
    return (

        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <Link className="navbar-brand" href="#">
                    Logo Acá
                </Link>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNavDropdown"
                    aria-controls="navbarNavDropdown"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link" to="/HomePage">
                                HomePage
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/Store">
                                Store
                            </Link>
                        </li>

                        <li className="nav-item">
                            <Link className="nav-link" to="/Period">
                                Menstruation
                            </Link>
                        </li>

                        <li className="nav-item dropdown">
                            <Link
                                className="nav-link dropdown-toggle"
                                href="#"
                                role="button"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                            >
                                Categories
                            </Link>
                            <ul className="dropdown-menu">
                                <li>
                                    <Link className="dropdown-item" href="#">
                                        Breakfast
                                    </Link>
                                </li>
                                <li>
                                    <Link className="dropdown-item" href="#">
                                        Lunch
                                    </Link>
                                </li>
                                <li>
                                    <Link className="dropdown-item" href="#">
                                        Dinner
                                    </Link>
                                </li>
                                <li>
                                    <Link className="dropdown-item" href="#">
                                        Snacks and Desserts
                                    </Link>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}