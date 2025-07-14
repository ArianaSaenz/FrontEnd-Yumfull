import React from 'react'
import { Link, useLocation } from "react-router-dom"

export function NavBar() {
    const location = useLocation();
    const isActive = (path) => location.pathname === path;

    return (
        <nav className="navbar navbar-expand-lg bg-white fs-5 fixed-top navbar-bordered">
            <div className="container-fluid d-flex justify-content-between align-items-center">
                <Link className="navbar-brand" to="/Login">
                    <img src="/Logo.jpg" alt="Logo" height="100" width="100" />
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
                    <ul className="navbar-nav w-100 justify-content-evenly align-items-center">
                        <li className="nav-item">
                            <Link className={`nav-link ${isActive("/") ? "nav-active" : ""}`} to="/HomePage">
                                Home
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className={`nav-link ${isActive("/Store") ? "nav-active" : ""}`} to="/Store">
                                Store
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className={`nav-link ${isActive("/Progress") ? "nav-active" : ""}`} to="/Progress">
                                Progress
                            </Link>
                        </li>

                        <li className="nav-item dropdown">
                            <Link
                                className={`nav-link dropdown-toggle ${isActive("/Period") || isActive("/Pregnancy") ? "nav-active" : ""}`}
                                to="#"
                                role="button"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                            >
                                Girl's Spot
                            </Link>
                            <ul className="dropdown-menu">
                                <li>
                                    <Link className={`dropdown-item ${isActive("/Period") ? "nav-active" : ""}`} to="/Period">
                                        Period
                                    </Link>
                                </li>
                                <li>
                                    <Link className={`dropdown-item ${isActive("/Pregnancy") ? "nav-active" : ""}`} to="/Pregnancy">
                                        Pregnancy
                                    </Link>
                                </li>
                            </ul>
                        </li>

                        <li className="nav-item dropdown">
                            <Link
                                className={`nav-link dropdown-toggle ${
                                    ["/Breakfast", "/Lunch", "/Dinner", "/Snack"].includes(location.pathname)
                                        ? "nav-active" : ""
                                }`}
                                to="#"
                                role="button"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                            >
                                Categories
                            </Link>
                            <ul className="dropdown-menu">
                                <li>
                                    <Link className={`dropdown-item ${isActive("/Breakfast") ? "nav-active" : ""}`} to="/Breakfast">
                                        Breakfast
                                    </Link>
                                </li>
                                <li>
                                    <Link className={`dropdown-item ${isActive("/Lunch") ? "nav-active" : ""}`} to="/Lunch">
                                        Lunch
                                    </Link>
                                </li>
                                <li>
                                    <Link className={`dropdown-item ${isActive("/Dinner") ? "nav-active" : ""}`} to="/Dinner">
                                        Dinner
                                    </Link>
                                </li>
                                <li>
                                    <Link className={`dropdown-item ${isActive("/Snack") ? "nav-active" : ""}`} to="/Snack">
                                        Snacks and Desserts
                                    </Link>
                                </li>
                            </ul>
                        </li>
                        <li className="nav-item">
                            <Link className={`nav-link ${isActive("/Settings") ? "nav-active" : ""}`} to="/Settings">
                                <img src="/Settings_Icon.png" alt="Settings" height="30" width="30" />
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}
