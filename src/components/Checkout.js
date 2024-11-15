import React from 'react';
import Swal from 'sweetalert2';

const Checkout = ({ cart }) => {
    const handleConfirmOrder = () => {
        if (cart.length === 0) {
            Swal.fire('Your cart is empty!');
            return;
        }

        const orderDetails = cart.map(order => `${order.item} (Contact: ${order.details.contact})`).join('\n');
        Swal.fire({
            title: 'Confirm Your Order',
            text: `Your orders:\n${orderDetails}`,
            showCancelButton: true,
            confirmButtonText: 'Confirm Order',
            cancelButtonText: 'Cancel'
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire('Thank you for your order!');
                // Here you can clear the cart or handle the order submission
            }
        });
    };

    return (
        <div>
            <h2 style={{ textAlign: 'center' }}>Checkout</h2>
            {cart.length === 0 ? (
                <p>Your cart is empty.</p>
            ) : (
                <div>
                    <h3>Your Orders:</h3>
                    <ul>
                        {cart.map((order, index) => (
                            <li key={index}>{order.item}</li>
                        ))}
                    </ul>
                    <button onClick={handleConfirmOrder} style={{ marginTop: '20px' }}>Confirm Order</button>
                </div>
            )}
        </div>
    );
};

export default Checkout;