import React from 'react';
import './Navbar.css';

function Navbar() {
    return (
        <>
            <nav>
                <ul>
                    <li><a href='#about'> About </a></li>
                    <li><a href='#skills'> Skills </a></li>
                    <li><a href='#projects'> Projects </a></li>
                    <li><a href='#contactMe'>Contact me </a></li>
                </ul>
            </nav>
        </>
    )
}

export default Navbar;