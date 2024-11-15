// src/components/Header.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../../src/styles.css';

const Header = () => {
    return (
        <header className="sticky-header">
            <h1>The Deccani Nawab</h1>
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About Us</Link></li>
                    <li><Link to="/main">Menu</Link></li>
                    <li><Link to="/reservation">Make a reservation</Link></li>
                    <li><Link to="/gallery">Photo Gallery</Link></li>
                    <li><Link to="/checkout">Checkout</Link></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;