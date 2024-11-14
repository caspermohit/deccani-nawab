// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Menu from './components/Menu';
import About from './components/About';
import Contact from './components/Contact';
import PhotoGallery from './components/PhotoGallery';
import Footer from './components/Footer';
import MainMenu from './components/MainMenu';
import './App.css';

const App = () => {
    return (
        <Router>
            <div>
                <Header />
                <Routes>
                    <Route path="/" element={<Menu />} />
                    <Route path= "/main" element={<MainMenu/>}/>
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/gallery" element={<PhotoGallery />} />
                </Routes>
                <Footer />
            </div>
        </Router>
    );
};

export default App;