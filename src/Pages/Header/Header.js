import React from 'react';
import { Link } from 'react-router-dom';

import './Header.css'

const Header = ({ cartItem }) => {

    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light  nav-backgroud">
                <div className="container-fluid">
                    <Link className="navbar-brand text-white fw-bold" to="#">
                        ShopNow</Link>

                    {/* To change Nav Toggle Button Color */}



                    <button className="navbar-toggler bg-light" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon "></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav navigationLink ms-auto">
                            <Link to="/">Home</Link>
                            <Link to="/cart" className="position-relative">
                                <i className="fas fa-shopping-cart"></i> Cart
                                <span className="position-absolute top--1 start-49 ms-3 translate-middle badge rounded-pill bg-danger">
                                    {cartItem.length}

                                </span>
                            </Link>

                        </div>
                    </div>
                </div>
            </nav >

        </div>
    );
};

export default Header;