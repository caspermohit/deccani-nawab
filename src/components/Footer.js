// src/components/Footer.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../../src/styles.css';

const Footer = () => {
    return (
        <footer>
            <p>Copyright © 2024 Blue Chopstix</p>
            <p>Contact us: 519-265-7555 | customerservice@bluechopstix.com</p>
            <p>Address: 219 Silvercreek Pkwy N, Unit 9, Guelph N1H7K4</p>
           <p> <Link to="/contact">Make a message</Link></p>
        </footer>
    );
};

export default Footer;