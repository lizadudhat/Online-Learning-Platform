import React, { useState } from 'react';
import '../App.css'; 

const Settings = () => {
    
    const [settings, setSettings] = useState({
        username: 'JohnDoe',
        email: 'john@example.com',
        notifications: true,
        darkMode: false,
    });

    const handleChange = (e) => {
        const { name, type, checked, value } = e.target;
        setSettings({
            ...settings,
            [name]: type === 'checkbox' ? checked : value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        
        alert('Settings saved!');
    };

    return (
        <div className="settings-container"style={{borderRadius:"30px 50px"}}>
           
            <form onSubmit={handleSubmit} className="settings-form">
                <div className="form-group">
                    <label htmlFor="username"style={{color:"grey"}}>Username:</label>
                    <input
                        type="text"
                        id="username"
                        name="username"
                        value={settings.username}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="email"style={{color:"grey"}}>Email:</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={settings.email}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>
                        <input
                            type="checkbox"
                            name="notifications"
                            checked={settings.notifications}
                            onChange={handleChange}
                        />
                        Enable Notifications
                    </label>
                </div>
                <div className="form-group">
                    <label>
                        <input
                            type="checkbox"
                            name="darkMode"
                            checked={settings.darkMode}
                            onChange={handleChange}
                        />
                        Enable Dark Mode
                    </label>
                </div>
                <button type="submit" className="settings-save-btn"style={{backgroundColor:"#e5cec8"}}>Save Changes</button>
            </form>
        </div>
    );
};

export default Settings;
