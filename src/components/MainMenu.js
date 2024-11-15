// src/components/MainMenu.js
import React, { useState } from 'react';
import Swal from 'sweetalert2';
import '../../src/styles.css';

const MainMenu = ({ setCart }) => {
    const [cart, setLocalCart] = useState([]);

    const menuItems = [
        {
            category: "Beverages",
            items: [
                { name: "Mango Shake", image: "https://via.placeholder.com/150?text=Mango+Shake" },
                { name: "Oreo Shake", image: "https://via.placeholder.com/150?text=Oreo+Shake" },
            ]
        },
        {
            category: "Desserts",
            items: [
                { name: "Fudge", image: "https://via.placeholder.com/150?text=Fudge" },
                { name: "Ferrerro", image: "https://via.placeholder.com/150?text=Ferrerro" },
            ]
        },
        {
            category: "Main Courses",
            items: [
                { name: "Haleem: Chicken(16OZ)", image: "https://via.placeholder.com/150?text=Haleem" },
                { name: "Hyderabadi Mutton Marag(24 OZ)", image: "https://via.placeholder.com/150?text=Mutton+Marag" },
                { name: "Aloo Tikki Burger", image: "https://via.placeholder.com/150?text=Aloo+Tikki+Burger" },
                { name: "Shami Egg Burger", image: "https://via.placeholder.com/150?text=Shami+Egg+Burger" },
                { name: "Noodle Burger", image: "https://via.placeholder.com/150?text=Noodle+Burger" },
                { name: "Crispy Zinger Burger", image: "https://via.placeholder.com/150?text=Crispy+Zinger+Burger" },
                { name: "Noodle Roll", image: "https://via.placeholder.com/150?text=Noodle+Roll" }
            ]
        }
    ];

    const handleBuyNow = (item) => {
        Swal.fire({
            title: `Order ${item}`,
            html: `
                <input id="name" class="swal2-input" placeholder="Your name">
                <input id="email" class="swal2-input" placeholder="Your email">
                <input id="contact" class="swal2-input" placeholder="Your contact number">
                <input id="address" class="swal2-input" placeholder="Full address">
                <textarea id="instructions" class="swal2-textarea" placeholder="Special instructions"></textarea>
            `,
            focusConfirm: false,
            showCancelButton: true,
            confirmButtonText: 'Order Now',
            cancelButtonText: 'Cancel',
            preConfirm: () => {
                const name = document.getElementById('name').value;
                const email = document.getElementById('email').value;
                const contact = document.getElementById('contact').value;
                const instructions = document.getElementById('instructions').value;
                const address = document.getElementById('address').value;

                if (!name || !email || !contact || !address) {
                    Swal.showValidationMessage('Please fill in all required fields');
                }
                return { name, email, contact, instructions, address };
            }
        }).then((result) => {
            if (result.isConfirmed) {
                const newCart = [...cart, { item, details: result.value }];
                setLocalCart(newCart);
                setCart(newCart);
                Swal.fire(`Thank you, ${result.value.name}! Your order for ${item} has been added to the cart.`);
            }
        });
    };

    return (
        <div>
            <h2 style={{ textAlign: 'center' }}>Our Menu</h2>
            {menuItems.map((category, categoryIndex) => (
                <div key={categoryIndex}>
                    <h3 style={{ textAlign: 'center' }}>{category.category}</h3>
                    <div className="menu-grid">
                        {category.items.map((item, index) => (
                            <div className="menu-item" key={index}>
                                <img src={item.image} alt={item.name} style={{ width: '100%', borderRadius: '8px' }} />
                                <span>{item.name}</span>
                                <button onClick={() => handleBuyNow(item.name)}>Buy Now</button>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default MainMenu;