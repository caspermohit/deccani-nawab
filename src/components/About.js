// src/components/About.js
import React from 'react';
import '../../src/styles.css';

const About = () => {
    return (
        <div className="about-container">
            <h2 style={{ textAlign: 'center' }}>About Us</h2>
            <div className="about-grid">
                <div className="about-image">
                    <img
                        className="d-block w-100"
                        src="https://via.placeholder.com/800x400?text=Blue+Chopstix+Restaurant"
                        alt="Blue Chopstix"
                    />
                </div>
                <div className="about-text">
                    <p>
                        Blue Chopstix is a Hakka Chinese and Thai restaurant located in Guelph, Ontario. 
                        Opened on November 18th, 2017, we are family-owned and managed by a team of chefs with years of experience in Hakka Chinese and Thai cuisine. 
                        We offer a variety of dishes with options for chicken, beef, seafood, and vegetarian meals, all made with the freshest ingredients.
                        Our meat is Halal Certified, sourced from Sargent Farms, ensuring quality and compliance with Halal standards.
                        We invite you to dine with us in our cozy setting and enjoy a family-friendly atmosphere. 
                        Thank you for considering Blue Chopstix for your next meal!
                    </p>
                </div>
            </div>
        </div>
    );
};

export default About;