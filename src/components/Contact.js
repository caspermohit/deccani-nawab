// src/components/Contact.js
import React, { useState } from 'react';
import '../../src/styles.css';

const Contact = () => {
    const [contactInfo, setContactInfo] = useState({
        name: '',
        email: '',
        message: ''
    });

    const [reservationInfo, setReservationInfo] = useState({
        name: '',
        email: '',
        contact: '',
        date: '',
        time: '',
        guests: '',
        specialRequests: ''
    });

    const handleContactChange = (e) => {
        const { name, value } = e.target;
        setContactInfo({ ...contactInfo, [name]: value });
    };

    const handleReservationChange = (e) => {
        const { name, value } = e.target;
        setReservationInfo({ ...reservationInfo, [name]: value });
    };

    const handleContactSubmit = (e) => {
        e.preventDefault();
        console.log('Contact Info:', contactInfo);
        alert('Thank you for contacting us!');
        setContactInfo({ name: '', email: '', message: '' }); // Reset form
    };

    const handleReservationSubmit = (e) => {
        e.preventDefault();
        console.log('Reservation Info:', reservationInfo);
        alert('Thank you for your reservation!');
        setReservationInfo({ name: '', email: '', contact: '', date: '', time: '', guests: '', specialRequests: '' }); // Reset form
    };

    return (
        <div>
            <h2 style={{ textAlign: 'center' }}>Contact Us</h2>
            <div className="form-container">
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

                <form onSubmit={handleReservationSubmit} className="reservation-form">
                    <h3>Reservation Form</h3>
                    <input
                        type="text"
                        name="name"
                        placeholder="Your Name"
                        value={reservationInfo.name}
                        onChange={handleReservationChange}
                        required
                    />
                    <input
                        type="email"
                        name="email"
                        placeholder="Your Email"
                        value={reservationInfo.email}
                        onChange={handleReservationChange}
                        required
                    />
                    <input
                        type="text"
                        name="contact"
                        placeholder="Your Contact Number"
                        value={reservationInfo.contact}
                        onChange={handleReservationChange}
                        required
                    />
                    <input
                        type="date"
                        name="date"
                        placeholder="Reservation Date"
                        value={reservationInfo.date}
                        onChange={handleReservationChange}
                        required
                    />
                    <input
                        type="time"
                        name="time"
                        placeholder="Reservation Time"
                        value={reservationInfo.time}
                        onChange={handleReservationChange}
                        required
                    />
                    <input
                        type="number"
                        name="guests"
                        placeholder="Number of Guests"
                        value={reservationInfo.guests}
                        onChange={handleReservationChange}
                        required
                    />
                    <textarea
                        name="specialRequests"
                        placeholder="Special Requests"
                        value={reservationInfo.specialRequests}
                        onChange={handleReservationChange}
                    />
                    <button type="submit">Make Reservation</button>
                </form>
            </div>
        </div>
    );
};

export default Contact;