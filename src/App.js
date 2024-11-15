// src/App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Menu from './components/Menu';
import About from './components/About';
import Contact from './components/Contact';
import PhotoGallery from './components/PhotoGallery';
import Footer from './components/Footer';
import MainMenu from './components/MainMenu';
import Checkout from './components/Checkout';
import Reservation from './components/Reservation';
import './App.css';

const App = () => {
    const [cart, setCart] = useState([]);

    return (
        <Router>
            <div>
                <Header />
                <Routes>
                    <Route path="/" element={<Menu />} />
                    <Route path="/main" element={<MainMenu setCart={setCart} />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/gallery" element={<PhotoGallery />} />
                    <Route path="/checkout" element={<Checkout cart={cart} />} />
                    <Route path="/reservation" element={<Reservation />} />
                </Routes>
                <Footer />
            </div>
        </Router>
    );
};

export default App;