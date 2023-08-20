// Navbar.js
import React from 'react';
import './Navbar.css';

function Navbar() {
    return (
        <div className="navbar">
            <div className="topnav-right">
                <a 
                    href="/Files/resume.pdf" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="navbar-button"
                >
                    Resume
                </a>
            <button className="navbar-button" onClick={() => { /* Handle Resume click */ }}>
            Contact Me
            </button>
            </div>
        </div>
    );
}

export default Navbar;
