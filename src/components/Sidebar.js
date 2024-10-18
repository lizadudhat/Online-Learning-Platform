import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css'; 

const Sidebar = () => {
    return (
        <div className="sidebar"style={{borderRadius:"2px 30px 50px 20px"}}>
            <h2>Menu</h2>
            <ul className="sidebar-menu">
                <li>
                    <Link to="/dashboard" className="sidebar-link"style={{color:"grey"}}>Dashboard</Link>
                </li>
                <li>
                    <Link to="/schedule" className="sidebar-link"style={{color:"grey"}}>Schedule</Link>
                </li>
                <li>
                    <Link to="/homework" className="sidebar-link"style={{color:"grey"}}>Homework</Link>
                </li>
                <li>
                    <Link to="/lecture" className="sidebar-link"style={{color:"grey"}}>Lecture</Link>
                </li>
                <li>
                    <Link to="/progress" className="sidebar-link"style={{color:"grey"}}>Progress</Link>
                </li>
                <li>
                    <Link to="/messages" className="sidebar-link"style={{color:"grey"}}>Messages</Link>
                </li>
                <li>
                    <Link to="/settings" className="sidebar-link"style={{color:"grey"}}>Settings</Link>
                </li>
            </ul>
        </div>
    );
};

export default Sidebar;
