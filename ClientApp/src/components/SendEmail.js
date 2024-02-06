import React, { useState } from 'react';

function EmailForm() {
    const [receiverEmail, setReceiverEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

    
        const response = await fetch('/home', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ receiverEmail, message })
        });

      
        if (response.ok) {
            console.log('Email sent successfully');
       
            setReceiverEmail('');
            setMessage('');
        } else {
            console.error('Failed to send email');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="email"
                placeholder="Receiver Email"
                value={receiverEmail}
                onChange={(e) => setReceiverEmail(e.target.value)}
                required
            />
            <textarea
                placeholder="Message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
            ></textarea>
            <button type="submit">Send Email</button>
        </form>
    );
}

export default EmailForm;
