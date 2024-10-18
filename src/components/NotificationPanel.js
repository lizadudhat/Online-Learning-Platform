import React, { useEffect, useState } from 'react';

const NotificationPanel = () => {
    const [notifications, setNotifications] = useState([]);

    useEffect(() => {
        const fetchNotifications = async () => {
            const response = await fetch('https://api.example.com/user/notifications'); // Replace with your API
            const data = await response.json();
            setNotifications(data);
        };

        fetchNotifications();
    }, []);

    return (
        <div className="container">
            <h2>Notifications</h2>
            <ul className="list-group">
                {notifications.map((notification, index) => (
                    <li key={index} className="list-group-item">{notification.message}</li>
                ))}
            </ul>
        </div>
    );
};

export default NotificationPanel;
