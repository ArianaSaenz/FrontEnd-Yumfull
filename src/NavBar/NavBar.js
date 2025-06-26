import { Link } from "react-router-dom"
import React from 'react'

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
                            <Link className="nav-link active" aria-current="page" to="/Store">
                                Home acá(falta)
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/Store">
                                Store
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/Progress">
                                Progress
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
                                    <Link className="dropdown-item" to="/Breakfast">
                                        Breakfast
                                    </Link>
                                </li>
                                <li>
                                    <Link className="dropdown-item" to="/Lunch">
                                        Lunch
                                    </Link>
                                </li>
                                <li>
                                    <Link className="dropdown-item" to="/Dinner">
                                        Dinner
                                    </Link>
                                </li>
                                <li>
                                    <Link className="dropdown-item" to="/Snack">
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