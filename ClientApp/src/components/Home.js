import React, { useState } from 'react';
import formPage from './formPage.css';

const Home = () => {
    const [date, setDate] = useState(formatDate(new Date()));

    const [isSent, setIsSent] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSent(true);
    };
    const handleRefresh = () => {
        window.location.reload(); 
    };
    if (isSent) {
        return (
        
            <div>
                <h1>Your message to future has been sent</h1>
                <button onClick={handleRefresh} className="btnSubmit">Send another message</button>
            </div>
        );
    }

    function formatDate(date) {
        const options = { day: 'numeric', month: 'long', year: 'numeric' };
        return new Date(date).toLocaleDateString('en-GB', options);
    }
    return (
        <div className="formContainer">
            <section>
                <h1>Give yourself a future promise</h1>
                <h4>Message from {date}</h4>
                <br />
            </section>
            <form onSubmit={handleSubmit}>
                <textarea
                    placeholder="  Hey me from future,"
                    required
                    className="formPage"
                >
                    Hey me from future,
                </textarea>

                <br />
                <label>Deliver In:</label>
                <br />
             
                <input type="date" className="date-input" required />

                <br />
                <br />

                <input type="email" className="emailInput" required placeholder="Please enter an email" />
                <br />
                <br />

                <button className="btnSubmit">Send</button>
            </form>
         
        </div>
    );
};

export default Home;
