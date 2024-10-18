import React from 'react';
import '../App.css'; 

const Messages = () => {
    
    const messages = [
        {
            id: 1,
            sender: 'Instructor John',
            content: 'Don’t forget to submit your assignments by Friday!',
            date: '2024-10-17 10:30 AM',
        },
        {
            id: 2,
            sender: 'Student Sarah',
            content: 'Can I get some help with the homework?',
            date: '2024-10-17 09:45 AM',
        },
        {
            id: 3,
            sender: 'Instructor Emily',
            content: 'Your project presentations are scheduled for next week.',
            date: '2024-10-16 03:00 PM',
        },
        {
            id: 4,
            sender: 'Student Mike',
            content: 'I have a question regarding the lecture notes.',
            date: '2024-10-15 01:15 PM',
        },
    ];

    return (
        <div className="messages-container"style={{borderRadius:"30px 50px"}}>
            <h2 className="messages-title"style={{color:"grey"}}>Messages</h2>
            <ul className="messages-list">
                {messages.map((message) => (
                    <li key={message.id} className="message-item">
                        <h4 className="message-sender"style={{color:"#e5cec8"}}>{message.sender}</h4>
                        <p className="message-content">{message.content}</p>
                        <span className="message-date">{message.date}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Messages;
