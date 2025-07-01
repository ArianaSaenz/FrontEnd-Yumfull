import React from 'react'
import { Link } from "react-router-dom"


export function NavBar() {
    return (
        <nav className="navbar navbar-expand-lg bg-transparent fs-5">
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
                            <Link className="nav-link active" to="/">
                                Home
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/Store">
                                Store
                            </Link>
                        </li>

                        <li className="nav-item">

                            <Link className="nav-link" to="/">
                                Girl's Spot
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/Pregnancy">
                                Pregnancy
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
                                to="#"
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
                        <li className="nav-item">
                            <Link className="nav-link" to="/Settings">
                                <img src="/Settings_Icon.png" alt="Settings" height="30" width="30" />
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}