// src/components/Contact.js
import React, { useState } from 'react';
import '../../src/styles.css';

const Contact = () => {
    const [contactInfo, setContactInfo] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleContactChange = (e) => {
        const { name, value } = e.target;
        setContactInfo({ ...contactInfo, [name]: value });
    };

    const handleContactSubmit = (e) => {
        e.preventDefault();
        alert('Thank you for contacting us! We will get back to you shortly.');
        setContactInfo({ name: '', email: '', message: '' }); // Reset form
    };

    return (
        <div>
            <h2 style={{ textAlign: 'center' }}>Contact Us</h2>
            <form onSubmit={handleContactSubmit} className="contact-form">
                <h3>Contact Form</h3>
                <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={contactInfo.name}
                    onChange={handleContactChange}
                    required
                />
                <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={contactInfo.email}
                    onChange={handleContactChange}
                    required
                />
                <textarea
                    name="message"
                    placeholder="Your Message"
                    value={contactInfo.message}
                    onChange={handleContactChange}
                    required
                />
                <button type="submit">Send Message</button>
            </form>
        </div>
    );
};

export default Contact;