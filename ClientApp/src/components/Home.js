import React, { useState } from 'react';
import './formPage.css';

const Home = () => {
    const [message, setMessage] = useState('');
    const [email, setEmail] = useState('');
    const [isSent, setIsSent] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();

        
        const response = await fetch('/home', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                message: message,
                email: email
            })
        });

        if (response.ok) {
            setIsSent(true);
        } else {
            // error handling
        }
    };

    const handleRefresh = () => {
        window.location.reload();
    };

    if (isSent) {
        return (
            <div>
                <h1>Your message has been sent</h1>
                <button onClick={handleRefresh} className="btnSubmit">Send another message</button>
            </div>
        );
    }

    return (
        <div className="formContainer">
            <section>
                <h1>Send a Message</h1>
            </section>
            <form onSubmit={handleSubmit}>
                <textarea
                    placeholder="Enter your message here"
                    required
                    className="formPage"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                />

                <br />
                <input type="email" className="emailInput" required placeholder="Please enter an email" value={email} onChange={(e) => setEmail(e.target.value)} />
                <br />
                <br />

                <button className="btnSubmit">Send</button>
            </form>
        </div>
    );
};

export default Home;
