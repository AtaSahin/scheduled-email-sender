import React, { useState } from 'react';
import './FetchData.css'; 

const FetchData = () => {
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();
        setIsSubmitted(true);
    };

    return (
        <div className="fetch-data-container">
            {!isSubmitted ? (
                <form onSubmit={handleSubmit}>
                    <h2>Checkout</h2>
                    <label htmlFor="fullName">Full Name:</label>
                    <input type="text" id="fullName" name="fullName" required />
                    <label htmlFor="address">Address:</label>
                    <input type="text" id="address" name="address" required />
                    <label htmlFor="creditCard">Credit Card:</label>
                    
                        <input type="text" id="cardName" name="cardName" placeholder="Card Name" required />
                    <div className="credit-card-section">
                        <input type="text" id="cardNumber" name="cardNumber" placeholder="Card Number" required />
                    </div>
                    <button type="submit">Complete Purchase</button>
                </form>
            ) : (
                <div className="order-confirmation">
                    <h2>Order Received!</h2>
                    <p>Your order has been successfully placed. Thank you for shopping with us!</p>
                </div>
            )}
        </div>
    );
};

export default FetchData;
