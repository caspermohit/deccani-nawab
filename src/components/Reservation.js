import React, { useState } from 'react';
import '../../src/styles.css';

const Reservation = () => {
    const [reservationInfo, setReservationInfo] = useState({
        name: '',
        email: '',
        contact: '',
        date: '',
        time: '',
        guests: '',
        specialRequests: ''
    });

    const handleReservationChange = (e) => {
        const { name, value } = e.target;
        setReservationInfo({ ...reservationInfo, [name]: value });
    };

    const handleReservationSubmit = (e) => {
        e.preventDefault();
        alert('Thank you for your reservation! We look forward to serving you.');
        setReservationInfo({ name: '', email: '', contact: '', date: '', time: '', guests: '', specialRequests: '' }); // Reset form
    };

    return (
        <div>
            <h2 style={{ textAlign: 'center' }}>Make a Reservation</h2>
            <form onSubmit={handleReservationSubmit} className="reservation-form">
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
    );
};

export default Reservation;
