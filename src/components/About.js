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
                        src="https://via.placeholder.com/800x400?text=First+Slide"
                        alt="First slide"
                    />
                </div>
                <div className="about-text">
                   
                    <p>
                        Blue Chopstix- Hakka Chinese and Thai restaurant located in Guelph,
                        Ontario opened its doors on November 18th, 2017 and is family owned and managed by a team of Chefs that have years of experience in Hakka Chinese and Thai cuisine.
                        We offer Hakka Chinese and Thai food cooked with your choice of meats like Chicken, Beef, Seafood and also have a whole lot of vegetarian options.
                        We are striving to meet your expectations for good quality food by sourcing for the freshest ingredients and meats. Our meat is Halal Certified Hand cut.
                        We buy our meats from http://sargentfarms.ca/halal-by-hand/ Sargent Farm’s strong commitment to the Muslim community and their halal process is reinforced by their Halal Monitoring Authority (HMA) certification.
                        A representative of the HMA is on site at all times during the processing of their chicken and beef. We would like to take this moment to thank the Guelph community for their support and we welcome all patrons to come dine in with us and enjoy the cozy setting of our Hakka Restaurant in Guelph.
                        We have a very family-friendly atmosphere and we are always thrilled to cater to kids of all ages. We are a small establishment and we look forward to catering to your tastes. We generally keep our spice levels low, so if you are the kind who likes a little kick from spices, we request you to inform us before you order your food.
                        Thank you for considering Blue Chopstix Restaurant for your next appetite cravings in Hakka Chinese and Thai food. We are conveniently located at the intersection of Silver Creek and Speedway in Guelph, Ontario. We are 7 minutes away from Downtown Guelph and 10 minutes away from University of Guelph.
                        We are also 30 minutes away from Kitchener, Ontario and 30 minutes away from Milton, Ontario.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default About;