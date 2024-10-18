import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css'; 

const Header = () => {
    return (
        <header className=" text-white p-3 d-flex justify-content-between align-items-center"style={{backgroundColor:"#e5cec8"}}>
            <div className="d-flex align-items-center">
                <img 
                    src="https://i.pinimg.com/736x/81/6b/73/816b73961942bfed6ad996d36fb93114.jpg" 
                    alt="Logo" 
                    className="me-2" 
                    style={{ height: '90px',marginLeft:"60px",width:"100px" }} 
                /> 
             
            </div>
            <nav>
            <h1 className="m-0 fs-4"style={{color:"white"}}>Clever Academy</h1>
            </nav>
        </header>
    );
};

export default Header;
