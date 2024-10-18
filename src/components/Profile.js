import React, { useState, useEffect } from 'react';

const Profile = () => {
    const [user, setUser] = useState({ name: '', email: '' });

    useEffect(() => {
        const fetchUserProfile = async () => {
            const response = await fetch('https://api.example.com/user/profile'); // Replace with your API
            const data = await response.json();
            setUser(data);
        };

        fetchUserProfile();
    }, []);

    return (
        <div className="container">
            <h2>Your Profile</h2>
            <form>
                <div className="mb-3">
                    <label>Name</label>
                    <input type="text" className="form-control" value={user.name} readOnly />
                </div>
                <div className="mb-3">
                    <label>Email</label>
                    <input type="email" className="form-control" value={user.email} readOnly />
                </div>
              
            </form>
        </div>
    );
};

export default Profile;
