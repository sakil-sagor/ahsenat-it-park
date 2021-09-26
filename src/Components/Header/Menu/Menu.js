import React from 'react';
import './Menu.css'
const Menu = () => {
    return (
        <div className="menu-area">
            <div>
                <h1>AhsenaT.</h1>
            </div>
            <div>
                <nav>
                    <ul>
                        <li><a href="/home">Home</a></li>
                        <li><a href="/home">Facilities</a></li>
                        <li><a href="/home">About Us</a> </li>
                        <li><a href="/home">Contact Us</a></li>
                    </ul>
                </nav>
            </div>
        </div>
    );
};

export default Menu;