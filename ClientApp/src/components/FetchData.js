import React from 'react';


const FetchData = () => {
  


    const handleSubmit = (event) => {
        event.preventDefault();
     
       
    };

    return (
        <div>
            <h2>Checkout</h2>
            <form onSubmit={handleSubmit}>
              
                <label htmlFor="address">Address:</label>
                <input type="text" id="address" name="address" required />
               
                <label htmlFor="creditCard">Credit Card:</label>
                <input type="text" id="creditCard" name="creditCard" required />
             
                <button type="submit">Complete Purchase</button>
            </form>
        </div>
    );
};

export default FetchData;
