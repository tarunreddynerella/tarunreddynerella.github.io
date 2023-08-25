// Navbar.js
import React from 'react';
import './Navbar.css';
import M from 'materialize-css';


function Navbar() {
    React.useEffect(() => {
        let sidenav = document.querySelector('#mobile-nav');
        let instance = M.Sidenav.init(sidenav, {});

        // Close sidenav on link click
        let links = document.querySelectorAll('.sidenav a');
        links.forEach(link => {
            link.addEventListener('click', () => {
                instance.close();
            });
        });

    }, []);

    return (
        <div className="navbar">
            <a href="#" data-target="mobile-nav" className="menu-btn sidenav-trigger">
                <i className="material-icons">menu</i>
            </a>
            <div className="right">
                <a 
                    href="/Files/resume.pdf" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="btn"
                >
                    Resume
                </a>
            	<a 
                    href="#Contact" 
                    rel="noopener noreferrer"
                    className="btn"
                >
                    Contact Me
                </a>
            </div>
        </div>
    );
}

export default Navbar;
