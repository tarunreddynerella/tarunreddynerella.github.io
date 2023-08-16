// Navbar.js
import React from 'react';
import './Navbar.css';

function Navbar() {
    return (
        <div className="navbar">
            <div class="topnav-right">
            <button className="navbar-button" onClick={() => { /* Handle Contact Me click */ }}>
            Resume
            </button>
            <button className="navbar-button" onClick={() => { /* Handle Resume click */ }}>
            Contact Me
            </button>
            </div>
        </div>
    );
}

export default Navbar;
